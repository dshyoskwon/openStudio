import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const token = process.env.NOTION_TOKEN;
  const databaseId = process.env.NOTION_NEWS_DATABASE_ID;

  const hasToken = !!token;
  const hasDatabaseId = !!databaseId;

  if (!hasToken || !hasDatabaseId) {
    return NextResponse.json({
      ok: false,
      reason: "env-missing",
      hasToken,
      hasDatabaseId,
      message:
        "NOTION_TOKEN and/or NOTION_NEWS_DATABASE_ID are not set on this deployment.",
    });
  }

  try {
    const res = await fetch(
      `https://api.notion.com/v1/databases/${databaseId}/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ page_size: 10 }),
        cache: "no-store",
      },
    );

    const body = await res.text();
    let parsed: unknown = null;
    try {
      parsed = JSON.parse(body);
    } catch {
      /* leave as text */
    }

    if (!res.ok) {
      return NextResponse.json({
        ok: false,
        reason: "notion-error",
        status: res.status,
        statusText: res.statusText,
        notion: parsed ?? body,
      });
    }

    const data = parsed as {
      results?: { id: string; properties: Record<string, unknown> }[];
    };
    const results = data.results ?? [];
    const sample = results.slice(0, 5).map((r) => ({
      id: r.id,
      propertyNames: Object.keys(r.properties),
    }));

    return NextResponse.json({
      ok: true,
      totalResults: results.length,
      sample,
      message:
        sample.length === 0
          ? "Database reachable but query returned 0 rows. Verify the integration is connected to the DB and there are rows."
          : "Database reachable. If NewsSidebar is still empty, verify property names (Title, Date, Category, Link, Published) and that at least one row has Published = true.",
    });
  } catch (err) {
    return NextResponse.json({
      ok: false,
      reason: "exception",
      message: err instanceof Error ? err.message : String(err),
    });
  }
}
