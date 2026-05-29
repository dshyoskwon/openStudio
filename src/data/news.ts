export type NewsItem = {
  date: string;
  title: string;
  category: string;
  link?: string;
};

// 이 파일만 수정하면 뉴스가 업데이트됩니다.
export const newsItems: NewsItem[] = [
  {
    date: "2026.03.23",
    title: "Research Assistant Recruitment / 연구원 모집",
    category: "Recruit",
    link: "/recruitment",
  },
];
