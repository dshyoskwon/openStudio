import { newsItems } from "@/data/news";

export default function NewsSidebar() {
  // 날짜 기준 내림차순 정렬 (최근 항목이 가장 위로)
  const sortedNews = [...newsItems].sort((a, b) =>
    b.date.localeCompare(a.date)
  );

  return (
    <aside className="h-full">
      <div className="mb-6 border-b border-black pb-2">
        <h2 className="text-xs font-bold uppercase tracking-widest">News</h2>
      </div>
      <ul className="flex flex-col gap-6">
        {sortedNews.map((item, idx) => (
          <li key={idx} className="group cursor-pointer">
            <span className="block text-xs text-gray-500 mb-1">{item.date}</span>
            <p className="text-sm font-medium leading-tight group-hover:underline decoration-1 underline-offset-2">
              {item.title}
            </p>
            <span className="inline-block mt-2 text-[10px] border border-gray-300 px-1.5 py-0.5 rounded-full text-gray-500">
              {item.category}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}


