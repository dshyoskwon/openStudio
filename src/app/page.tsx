"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

const verbs = ["grow", "ship", "question", "evolve", "break things", "repair"]

export default function Home() {
  const [vi, setVi] = useState(0)
  const [cycling, setCycling] = useState(true)

  useEffect(() => {
    if (!cycling) return
    const id = setInterval(() => setVi((v) => (v + 1) % verbs.length), 2200)
    return () => clearInterval(id)
  }, [cycling])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_300px] min-h-screen">

      {/* ── LEFT NAV ── */}
      <nav className="sticky top-0 self-start max-h-screen overflow-auto border-r border-ors-rule bg-ors-paper p-8 flex flex-col gap-9">
        <Link href="/" className="flex flex-col gap-3.5">
          <svg viewBox="0 0 200 200" className="w-16 h-16">
            <circle cx="100" cy="100" r="72" stroke="var(--ors-accent)" strokeWidth="14" fill="none"/>
            <rect x="28" y="80" width="16" height="40" fill="var(--ors-paper)"/>
            <rect x="156" y="80" width="16" height="40" fill="var(--ors-paper)"/>
            <circle cx="100" cy="100" r="14" fill="var(--ors-hot)"/>
          </svg>

          <div className="font-disp font-bold text-[34px] leading-[.9] tracking-[-0.06em] flex items-baseline">
            <span className="text-ors-accent">O</span>RS
            <span className="inline-block w-[0.14em] h-[0.14em] rounded-full bg-ors-hot ml-[0.06em] -translate-y-[0.02em]"/>
          </div>

          <div className="font-disp text-[13px] leading-tight text-ors-ink2 tracking-[-0.015em]">
            <b className="text-ors-ink font-bold">Open</b> Research<br/>Studio <span className="text-ors-accent">+ Lab</span>
          </div>
        </Link>

        <ul className="flex flex-col gap-0.5">
          {[
            ["Home", "↵", true],
            ["Projects", "10", false],
            ["Publications", "—", false],
            ["Members", "14", false],
            ["Courses", "04", false],
          ].map(([label, count, on]) => (
            <li key={label as string}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg font-medium text-[14.5px] ${on ? "bg-ors-ink text-ors-paper" : "text-ors-ink2 hover:bg-ors-paper2"}`}>
              {label}
              <span className="font-mono text-[10.5px] opacity-60">{count}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-4 border-t border-ors-rule font-mono text-[10.5px] text-ors-ink3 tracking-wider uppercase leading-relaxed">
          Kookmin University<br/>Seoul, KR<br/>
          <a href="mailto:ors@kookmin.ac.kr" className="hover:text-ors-accent">ors@kookmin.ac.kr</a>
        </div>
      </nav>

      {/* ── MAIN ── */}
      <main className="px-10 sm:px-16 py-12 flex flex-col gap-10 min-w-0">

        <div className="flex flex-wrap items-center gap-3.5 font-mono text-[11px] tracking-[.1em] uppercase text-ors-ink3">
          <span className="w-2 h-2 rounded-full bg-ors-hot animate-pulse-dot"/>
          <span>Now · <b className="text-ors-ink font-medium">Spring 2026</b></span>
          <span className="w-5 h-px bg-ors-rule"/>
          <span>Open calls · <b className="text-ors-ink font-medium">2</b></span>
        </div>

        <h1 className="font-disp font-medium text-[clamp(44px,7vw,92px)] leading-[.95] tracking-[-0.045em] m-0">
          Participate, make,<br/>
          research, <span className="underline decoration-ors-hot decoration-[5px] underline-offset-[8px]">experiment</span>,<br/>
          <span className="inline-block bg-ors-accent text-white rounded-md px-[0.16em] -translate-y-[0.015em] min-w-[4ch] overflow-hidden">
            <span key={vi} className="inline-block animate-wordIn">{verbs[vi]}</span>
          </span>.
        </h1>

        <div className="flex flex-wrap gap-1.5 font-mono text-[11.5px] tracking-[.09em] uppercase">
          {verbs.map((v, i) => (
            <button key={v} onClick={() => { setVi(i); setCycling(false) }}
              className={`px-2.5 py-1.5 rounded-full border transition ${
                i === vi
                  ? "bg-ors-accent text-white border-ors-accent"
                  : "bg-ors-paper2 text-ors-ink2 border-ors-rule hover:bg-ors-paper3"
              }`}>{v}</button>
          ))}
        </div>

        <p className="max-w-[64ch] text-ors-ink2 text-base leading-[1.65]">
          ORS is a project-based studio at Kookmin University for <b>HCI</b>, <b>UX</b>, <b>interaction design</b>, and <b>physical AI</b>. Teams form around projects, not professors — you propose, we build it together, and the next cohort evolves it.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-[680px]">
          <Link href="/lab" className="relative p-5 rounded-2xl bg-ors-accent text-white hover:-translate-y-0.5 transition shadow-sm hover:shadow-xl">
            <div className="font-mono text-[10px] uppercase tracking-widest opacity-80">01 · Open Research Lab</div>
            <div className="font-disp font-medium text-[22px] tracking-[-0.03em] mt-1.5">Propose a direction</div>
            <div className="text-[13px] opacity-85 mt-0.5">Long-horizon, student-led research.</div>
          </Link>
          <Link href="/studio" className="relative p-5 rounded-2xl bg-ors-hot text-white hover:-translate-y-0.5 transition shadow-sm hover:shadow-xl">
            <div className="font-mono text-[10px] uppercase tracking-widest opacity-80">02 · Open Research Studio</div>
            <div className="font-disp font-medium text-[22px] tracking-[-0.03em] mt-1.5">Join a live project</div>
            <div className="text-[13px] opacity-90 mt-0.5">Short, focused industry + research cycles.</div>
          </Link>
        </div>

      </main>

      {/* ── RIGHT ASIDE ── */}
      <aside className="hidden lg:flex sticky top-0 self-start max-h-screen overflow-auto border-l border-ors-rule bg-ors-paper2 p-8 flex-col gap-7">
        <div>
          <div className="font-mono text-[10px] tracking-widest uppercase text-ors-ink3 pb-2.5 border-b border-ors-rule">News · 2026</div>
          <div className="flex flex-col gap-3.5 mt-3.5">
            {[
              ["2026.04.02", "Spring cohort — 4 new studio members join."],
              ["2026.03.18", "Gift Exchange in MR accepted to CHI '26 LBW."],
              ["2026.02.09", "Kickoff — AI additive manufacturing monitoring."],
            ].map(([d, t]) => (
              <div key={d} className="flex flex-col gap-0.5">
                <div className="font-mono text-[10px] text-ors-ink3">{d}</div>
                <div className="text-[13.5px] leading-snug">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </aside>

    </div>
  )
}
