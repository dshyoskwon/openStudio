import Link from "next/link";

const navItems = [
  { name: "Projects",    path: "/projects",    count: "10" },
  { name: "Publication", path: "/publication", count: "—" },
  { name: "Members",     path: "/participants",count: "14" },
  // { name: "Courses",     path: "/courses",     count: "04" }, // 익명화 후 선별 공개 예정
];

export default function Navigation() {
  return (
    <nav className="flex flex-col gap-8 text-sm font-medium h-full">
      <Link href="/" className="block">
        {/* Aperture symbol */}
        <svg viewBox="0 0 200 200" className="w-12 h-12">
          <circle cx="100" cy="100" r="72" fill="none"
                  stroke="#3556F3" strokeWidth="14"/>
          <rect x="28" y="80" width="16" height="40" fill="#FAFBFD"/>
          <rect x="156" y="80" width="16" height="40" fill="#FAFBFD"/>
          <circle cx="100" cy="100" r="14" fill="#FF6A3D"/>
        </svg>
        <div className="mt-3 font-display font-bold text-2xl tracking-[-0.06em] leading-none">
          <span className="text-ors-accent">O</span>RS
          <span className="inline-block w-[0.14em] h-[0.14em] rounded-full bg-ors-hot ml-[0.05em] align-baseline"/>
        </div>
        <div className="mt-2 text-[11px] font-mono tracking-[0.08em] uppercase text-ors-ink3 leading-snug">
          <b className="text-ors-ink font-medium">Open</b> Research<br/>Studio <span className="text-ors-accent">+ Lab</span>
        </div>
      </Link>

      <ul className="flex flex-col gap-1">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link href={item.path}
              className="flex items-center justify-between px-3 py-2 rounded-lg text-ors-ink2 hover:bg-ors-paper2 transition">
              <span>{item.name}</span>
              <span className="text-[10px] font-mono text-ors-ink3">{item.count}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-10 text-[10px] font-mono tracking-[0.06em] uppercase text-ors-ink3">
        © 2026 ORS_
      </div>
    </nav>
  );
}
