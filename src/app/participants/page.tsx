"use client";

import { useState } from "react";
import Image from "next/image";

type GroupFilter = "all" | "HCI" | "Graphics";

const filters: { key: GroupFilter; label: string; dotClass: string; activeClass: string; inactiveClass: string }[] = [
  {
    key: "all",
    label: "All",
    dotClass: "bg-gray-600",
    activeClass: "border-gray-400 bg-gray-100 text-gray-800",
    inactiveClass: "border-gray-200 bg-white text-gray-400 hover:bg-gray-50",
  },
  {
    key: "HCI",
    label: "HCI",
    dotClass: "bg-blue-600",
    activeClass: "border-blue-200 bg-blue-50 text-blue-700",
    inactiveClass: "border-gray-200 bg-white text-gray-400 hover:bg-blue-50/50",
  },
  {
    key: "Graphics",
    label: "Visual Comm.",
    dotClass: "bg-emerald-600",
    activeClass: "border-emerald-200 bg-emerald-50 text-emerald-700",
    inactiveClass: "border-gray-200 bg-white text-gray-400 hover:bg-emerald-50/50",
  },
];

export default function ParticipantsPage() {
  const [activeFilter, setActiveFilter] = useState<GroupFilter>("all");

  const showHCI = activeFilter === "all" || activeFilter === "HCI";
  const showGraphics = activeFilter === "all" || activeFilter === "Graphics";

  return (
    <div className="space-y-5 animate-in fade-in duration-500">
      <header className="border-b border-black pb-4">
        <h1 className="text-3xl font-bold uppercase tracking-widest">Members</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {/* Directors */}
        <div className="col-span-full mb-10">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-6">
            Directors
          </h2>
          <div className="grid grid-cols-2 gap-10">
            {/* Director — HCI */}
            {showHCI && (
              <div className="flex flex-col items-center md:items-start gap-4">
                <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gray-200 flex-shrink-0 shadow-lg">
                  <Image
                    src="/images/participants/profile_HyosK.jpg"
                    alt="Portrait of Director Hyosun Kwon"
                    fill
                    sizes="128px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="text-center md:text-left space-y-1">
                  <div className="flex flex-col md:flex-row md:items-baseline md:gap-3">
                    <h3 className="text-xl font-bold leading-tight">Hyosun Kwon</h3>
                    <span className="text-base font-light text-gray-600">(Associate Professor)</span>
                  </div>
                  <p className="text-gray-600">Principal Investigator</p>
                  <p className="text-sm text-gray-500">hyosun.kwon@kookmin.ac.kr</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Human-Computer Interaction / Human-Centered Design / Creative Technology / Studio Practice
                  </p>
                </div>
              </div>
            )}
            {/* Co-Director — Graphics */}
            {showGraphics && (
              <div className="flex flex-col items-center md:items-start gap-4">
                <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gray-200 flex-shrink-0 shadow-lg">
                  <Image
                    src="/images/participants/JHSung.jpg"
                    alt="Portrait of Co-Director Jae-Hyouk Sung"
                    fill
                    sizes="128px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="text-center md:text-left space-y-1">
                  <div className="flex flex-col md:flex-row md:items-baseline md:gap-3">
                    <h3 className="text-xl font-bold leading-tight">Jae-Hyouk Sung</h3>
                    <span className="text-base font-light text-gray-600">(Professor)</span>
                  </div>
                  <p className="text-gray-600">Co-Principal Investigator</p>
                  <p className="text-sm text-gray-500">email@kookmin.ac.kr</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Visual Communication / Graphic Design / Colour / Visual Media
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Groups filter */}
        <div className="col-span-full">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">
            Groups
          </h2>
          <div className="flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-wide text-xs">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`inline-flex items-center gap-1 rounded-[2px] border px-2 py-0.5 cursor-pointer transition-all duration-200 ${
                  activeFilter === f.key ? f.activeClass : f.inactiveClass
                }`}
              >
                <span
                  className={`w-2.5 h-2.5 rounded-[2px] ${f.dotClass} ${activeFilter === f.key ? "opacity-100" : "opacity-30"} transition-opacity`}
                  aria-hidden="true"
                />
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Researchers */}
        <div className="col-span-full">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-6">
            Researchers
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {/* JY Lee — HCI */}
            {showHCI && (
              <div className="text-center md:text-left">
                <div className="w-full aspect-square mb-3 rounded-lg overflow-hidden bg-gray-100 grayscale hover:grayscale-0 transition-all">
                  <Image
                    src="/images/participants/JYlee.jpeg"
                    alt="Portrait of JY Lee"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold">Junyong Lee</h3>
                <p className="text-xs text-gray-500">Researcher / Ph.D Student</p>
              </div>
            )}

            {/* BS Lee — HCI */}
            {showHCI && (
              <div className="text-center md:text-left">
                <div className="w-full aspect-square mb-3 rounded-lg overflow-hidden bg-gray-100 grayscale hover:grayscale-0 transition-all">
                  <Image
                    src="/images/participants/BSlee.JPG"
                    alt="Portrait of BS Lee"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold">Beomseok Lee</h3>
                <p className="text-xs text-gray-500">Researcher / Ph.D Student</p>
              </div>
            )}

            {/* SK Kim — Graphics */}
            {showGraphics && (
              <div className="text-center md:text-left">
                <div className="w-full aspect-square mb-3 rounded-lg overflow-hidden bg-gray-100 grayscale hover:grayscale-0 transition-all">
                  <Image
                    src="/images/participants/SKKim.jpeg"
                    alt="Portrait of SK Kim"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold">Sungkyeong Kim</h3>
                <p className="text-xs text-gray-500">Researcher / MA Student</p>
              </div>
            )}

            {/* Placeholder cards — shown in all groups */}
            {[1, 2].map((i) => (
              <div key={i} className="text-center md:text-left">
                <div className="w-full aspect-square bg-gray-100 mb-3 rounded-lg grayscale hover:grayscale-0 transition-all" />
                <h3 className="font-bold">Student Name</h3>
                <p className="text-xs text-gray-500">Designer / BA Student</p>
              </div>
            ))}
          </div>
        </div>

        {/* Undergraduate Intern */}
        <div className="col-span-full">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-6">
            Undergraduate Interns
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <div className="text-center md:text-left">
              <div className="w-full aspect-square mb-3 rounded-lg overflow-hidden bg-gray-100 grayscale hover:grayscale-0 transition-all">
                <Image
                  src="/images/participants/JMLee.jpeg"
                  alt="Portrait of JM Lee"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold">Jungmin Lee</h3>
              <p className="text-xs text-gray-500">Undergraduate Intern</p>
            </div>
            <div className="text-center md:text-left">
              <div className="w-full aspect-square mb-3 rounded-lg overflow-hidden bg-gray-100 grayscale hover:grayscale-0 transition-all">
                <Image
                  src="/images/participants/JYKim.jpeg"
                  alt="Portrait of JY Kim"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold">Jiyoon Kim</h3>
              <p className="text-xs text-gray-500">Undergraduate Intern</p>
            </div>
            <div className="text-center md:text-left">
              <div className="w-full aspect-square mb-3 rounded-lg overflow-hidden bg-gray-100 grayscale hover:grayscale-0 transition-all">
                <Image
                  src="/images/participants/YMKim.jpeg"
                  alt="Portrait of YM Kim"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold">Yumin Kim</h3>
              <p className="text-xs text-gray-500">Undergraduate Intern</p>
            </div>
            {[1, 2].map((i) => (
              <div key={i} className="text-center md:text-left">
                <div className="w-full aspect-square bg-gray-100 mb-3 rounded-lg grayscale hover:grayscale-0 transition-all" />
                <h3 className="font-bold">Student Name</h3>
                <p className="text-xs text-gray-500">Undergraduate Intern</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Apply CTA */}
      <div className="border-t border-black/10 pt-8">
        <p className="text-base md:text-lg text-gray-800 mb-6">
          스튜디오에 합류하거나 진행 중인 프로젝트를 함께 확장하고 싶다면 아래 링크를 통해 지원서를 제출해 주세요.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 max-w-3xl">
          <a
            href="https://forms.gle/apply-my-project"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-2 rounded-lg border border-black/10 px-4 py-5 text-left transition bg-[#f7f5ff] hover:border-black hover:bg-black hover:text-white"
          >
            <span className="text-sm font-semibold uppercase tracking-wide">Apply for Lab</span>
            <p className="text-sm leading-relaxed">
              Open Research Lab에서 함께 연구하고 싶다면, 연구 주제와 계획을 담은 제안서를 이 링크를 통해 제출해 주세요.
            </p>
          </a>
          <a
            href="https://forms.gle/apply-for-studio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-2 rounded-lg border border-black/10 px-4 py-5 text-left transition bg-[#f0fff5] hover:border-black hover:bg-black hover:text-white"
          >
            <span className="text-sm font-semibold uppercase tracking-wide">Apply for Studio</span>
            <p className="text-sm leading-relaxed">
              스튜디오 프로젝트에 참여하고 싶은 학생은 이 링크에서 간단한 지원서를 작성해 주세요.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
