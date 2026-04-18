import type { NewsItem } from "@/data/news";
import { newsItems as fallbackNews } from "@/data/news";

const NOTION_API = "https://api.notion.com/v1";
const NOTION_VERSION = "2022-06-28";

type NotionProperty = Record<string, unknown>;

type NotionPage = {
  id: string;
  properties: Record<string, NotionProperty>;
};

type NotionQueryResponse = {
  results: NotionPage[];
};

function getProp(page: NotionPage, name: string): NotionProperty | undefined {
  return page.properties[name];
}

function readTitle(prop: NotionProperty | undefined): string {
  if (!prop) return "";
  const p = prop as { title?: { plain_text?: string }[] };
  return p.title?.map((t) => t.plain_text ?? "").join("") ?? "";
}

function readRichText(prop: NotionProperty | undefined): string {
  if (!prop) return "";
  const p = prop as { rich_text?: { plain_text?: string }[] };
  return p.rich_text?.map((t) => t.plain_text ?? "").join("") ?? "";
}

function readDate(prop: NotionProperty | undefined): string {
  if (!prop) return "";
  const p = prop as { date?: { start?: string } };
  const iso = p.date?.start ?? "";
  if (!iso) return "";
  return iso.replaceAll("-", ".").slice(0, 10);
}

function readSelect(prop: NotionProperty | undefined): string {
  if (!prop) return "";
  const p = prop as { select?: { name?: string } };
  return p.select?.name ?? "";
}

function readUrl(prop: NotionProperty | undefined): string | undefined {
  if (!prop) return undefined;
  const p = prop as { url?: string | null };
  return p.url ?? undefined;
}

function readCheckbox(prop: NotionProperty | undefined): boolean {
  if (!prop) return false;
  const p = prop as { checkbox?: boolean };
  return p.checkbox ?? false;
}

function mergeNews(notion: NewsItem[], local: NewsItem[]): NewsItem[] {
  const seen = new Set(notion.map((n) => `${n.date}|${n.title}`));
  const extras = local.filter((n) => !seen.has(`${n.date}|${n.title}`));
  return [...notion, ...extras];
}

export async function fetchNewsFromNotion(): Promise<NewsItem[]> {
  const token = process.env.NOTION_TOKEN;
  const databaseId = process.env.NOTION_NEWS_DATABASE_ID;

  if (!token || !databaseId) {
    return fallbackNews;
  }

  const res = await fetch(`${NOTION_API}/databases/${databaseId}/query`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Notion-Version": NOTION_VERSION,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      filter: {
        property: "Published",
        checkbox: { equals: true },
      },
      sorts: [{ property: "Date", direction: "descending" }],
      page_size: 20,
    }),
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    console.error(
      `[notion] news fetch failed: ${res.status} ${res.statusText}`,
    );
    return fallbackNews;
  }

  const data = (await res.json()) as NotionQueryResponse;

  const items: NewsItem[] = [];
  for (const page of data.results) {
    if (!readCheckbox(getProp(page, "Published"))) continue;

    const title = readTitle(getProp(page, "Title"));
    if (!title) continue;

    const date = readDate(getProp(page, "Date"));
    const category =
      readSelect(getProp(page, "Category")) ||
      readRichText(getProp(page, "Category")) ||
      "News";
    const link =
      readUrl(getProp(page, "Link")) ||
      readRichText(getProp(page, "Link")) ||
      undefined;

    items.push({
      date,
      title,
      category,
      link: link || undefined,
    });
  }

  return mergeNews(items, fallbackNews);
}
