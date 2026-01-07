export default function NewsSidebar() {
  // 임시 데이터 (나중에 CMS나 API로 교체 가능)
  const newsItems = [
    { date: '2024.11.30', title: 'Studio Website Opening', category: 'Notice' },
    { date: '2024.12.15', title: 'Winter Workshop: AI & Interaction', category: 'Event' },
    { date: '2025.01.10', title: 'New Project: Smart Mobility', category: 'Project' },
    { date: '2025.02.01', title: 'Call for Participants: Spring 2025', category: 'Recruit' },
  ];

  return (
    <aside className="h-full">
      <div className="mb-6 border-b border-black pb-2">
        <h2 className="text-xs font-bold uppercase tracking-widest">News</h2>
      </div>
      <ul className="flex flex-col gap-6">
        {newsItems.map((item, idx) => (
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


