export type NewsItem = {
  date: string;
  title: string;
  category: string;
  link?: string;
};

// 이 파일만 수정하면 뉴스가 업데이트됩니다.
export const newsItems: NewsItem[] = [
  {
    date: "2025.12.31",
    title: "Studio Website Opening",
    category: "Notice",
  },
  {
    date: "2026.01.15",
    title: "Winter Workshop: AI & Interaction",
    category: "Event",
  },
  {
    date: "2026.01.10",
    title: "New Project: Smart Mobility",
    category: "Project",
  },
  {
    date: "2026.02.01",
    title: "Call for Participants: Spring 2026",
    category: "Recruit",
  },
];


