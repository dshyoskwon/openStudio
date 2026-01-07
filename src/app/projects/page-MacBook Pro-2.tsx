export default function ProjectsPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="border-b border-black pb-4 flex justify-between items-end">
        <h1 className="text-3xl font-bold uppercase tracking-widest">Projects</h1>
        <span className="text-sm text-gray-500">Industry • Research • Incubating</span>
      </header>

      {/* Type legend at top */}
      <div className="flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-wide text-xs">
        <span className="inline-flex items-center gap-1 rounded-[2px] border border-blue-200 bg-blue-50 px-2 py-0.5 text-blue-700">
          <span className="w-2.5 h-2.5 rounded-[2px] bg-blue-600" aria-hidden="true" />
          Industry Project
        </span>
        <span className="inline-flex items-center gap-1 rounded-[2px] border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-emerald-700">
          <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-600" aria-hidden="true" />
          Research Project
        </span>
        <span className="inline-flex items-center gap-1 rounded-[2px] border border-amber-200 bg-amber-50 px-2 py-0.5 text-amber-700">
          <span className="w-2.5 h-2.5 rounded-[2px] bg-amber-500" aria-hidden="true" />
          Incubating
        </span>
      </div>
      
      {/* 3-column layout by project type */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
        {/* Industry Projects */}
        <section className="space-y-6">
          <header className="border-b border-gray-200 pb-2">
            <h2 className="text-xs font-semibold tracking-widest uppercase text-gray-600">
              {/* Industry Project */}
            </h2>
          </header>

          <div className="space-y-8">
            <div className="group cursor-pointer">
              <div className="bg-gray-100 aspect-video w-full mb-4 rounded-sm flex items-center justify-center text-gray-400 group-hover:bg-gray-200 transition-colors">
                Project Image
              </div>
              <h3 className="text-lg font-bold mb-1 group-hover:underline">
                AI-Driven Urban Furniture
              </h3>
              <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                <span>2024 • Interaction Design</span>
                <div className="flex items-center">
                  <span className="inline-flex p-1 text-blue-500" aria-hidden="true">
                    <svg
                      className="w-7 h-7 md:w-4.5 md:h-4.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 4C6.44772 4 6 4.44772 6 5V19.382C6 19.938 6.61396 20.2599 7.08179 19.9565L12 16.75L16.9182 19.9565C17.386 20.2599 18 19.938 18 19.382V5C18 4.44772 17.5523 4 17 4H7Z"
                        stroke="none"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                도시 환경에서 시민들의 행동 패턴을 분석하여 실시간으로 형태가 변형되는 스마트 벤치 프로젝트.
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-gray-100 aspect-video w-full mb-4 rounded-sm flex items-center justify-center text-gray-400 group-hover:bg-gray-200 transition-colors">
                Project Image
              </div>
              <h3 className="text-lg font-bold mb-1 group-hover:underline">
                Smart Mobility Signage
              </h3>
              <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                <span>2023 • Service Design</span>
                <div className="flex items-center">
                  <span className="inline-flex p-1 text-blue-500" aria-hidden="true">
                    <svg
                      className="w-7 h-7 md:w-4.5 md:h-4.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 4C6.44772 4 6 4.44772 6 5V19.382C6 19.938 6.61396 20.2599 7.08179 19.9565L12 16.75L16.9182 19.9565C17.386 20.2599 18 19.938 18 19.382V5C18 4.44772 17.5523 4 17 4H7Z"
                        stroke="none"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                모빌리티 플랫폼 기업과의 협업으로, 도시 내 이동 경험을 개선하기 위한 스마트 사인 시스템을 설계합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Research Projects */}
        <section className="space-y-6">
          <header className="border-b border-gray-200 pb-2">
            <h2 className="text-xs font-semibold tracking-widest uppercase text-gray-600">
              {/* Research Project */}
            </h2>
          </header>

          <div className="space-y-8">
            <div className="group cursor-pointer">
              <div className="bg-gray-100 aspect-video w-full mb-4 rounded-sm flex items-center justify-center text-gray-400 group-hover:bg-gray-200 transition-colors">
                Project Image
              </div>
              <h3 className="text-lg font-bold mb-1 group-hover:underline">
                Tactile Interface for Accessibility
              </h3>
              <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                <span>2023 • Haptic Tech</span>
                <div className="flex items-center">
                  <span className="inline-flex p-1 text-emerald-500" aria-hidden="true">
                    <svg
                      className="w-7 h-7 md:w-4.5 md:h-4.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 4C6.44772 4 6 4.44772 6 5V19.382C6 19.938 6.61396 20.2599 7.08179 19.9565L12 16.75L16.9182 19.9565C17.386 20.2599 18 19.938 18 19.382V5C18 4.44772 17.5523 4 17 4H7Z"
                        stroke="none"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                시각 장애인을 위한 새로운 형태의 햅틱 피드백 인터페이스 연구 및 프로토타이핑.
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-gray-100 aspect-video w-full mb-4 rounded-sm flex items-center justify-center text-gray-400 group-hover:bg-gray-200 transition-colors">
                Project Image
              </div>
              <h3 className="text-lg font-bold mb-1 group-hover:underline">
                Generative AI for Spatial Experience
              </h3>
              <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                <span>2024 • AI & Interaction</span>
                <div className="flex items-center">
                  <span className="inline-flex p-1 text-emerald-500" aria-hidden="true">
                    <svg
                      className="w-7 h-7 md:w-4.5 md:h-4.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 4C6.44772 4 6 4.44772 6 5V19.382C6 19.938 6.61396 20.2599 7.08179 19.9565L12 16.75L16.9182 19.9565C17.386 20.2599 18 19.938 18 19.382V5C18 4.44772 17.5523 4 17 4H7Z"
                        stroke="none"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                생성형 인공지능을 활용하여 공간 경험을 실시간으로 재구성하는 인터랙티브 미디어 환경을 탐구합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Incubating */}
        <section className="space-y-6">
          <header className="border-b border-gray-200 pb-2">
            <h2 className="text-xs font-semibold tracking-widest uppercase text-gray-600">
              {/* Incubating */}
            </h2>
          </header>

          <div className="space-y-8">
            <div className="group cursor-pointer">
              <div className="bg-gray-100 aspect-video w-full mb-4 rounded-sm flex items-center justify-center text-gray-400 group-hover:bg-gray-200 transition-colors">
                Project Image
              </div>
              <h3 className="text-lg font-bold mb-1 group-hover:underline">
                Everyday Sensing Toolkit
              </h3>
              <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                <span>2025 • Prototype</span>
                <div className="flex items-center">
                  <span className="inline-flex p-1 text-amber-500" aria-hidden="true">
                    <svg
                      className="w-7 h-7 md:w-4.5 md:h-4.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 4C6.44772 4 6 4.44772 6 5V19.382C6 19.938 6.61396 20.2599 7.08179 19.9565L12 16.75L16.9182 19.9565C17.386 20.2599 18 19.938 18 19.382V5C18 4.44772 17.5523 4 17 4H7Z"
                        stroke="none"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                일상 사물을 위한 센싱·피드백 모듈 키트를 개발하여, 학생들이 손쉽게 인터랙티브 오브젝트를 실험할 수 있도록 합니다.
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-gray-100 aspect-video w-full mb-4 rounded-sm flex items-center justify-center text-gray-400 group-hover:bg-gray-200 transition-colors">
                Project Image
              </div>
              <h3 className="text-lg font-bold mb-1 group-hover:underline">
                Studio Operating System
              </h3>
              <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                <span>2025 • Internal Tool</span>
                <div className="flex items-center">
                  <span className="inline-flex p-1 text-amber-500" aria-hidden="true">
                    <svg
                      className="w-7 h-7 md:w-4.5 md:h-4.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 4C6.44772 4 6 4.44772 6 5V19.382C6 19.938 6.61396 20.2599 7.08179 19.9565L12 16.75L16.9182 19.9565C17.386 20.2599 18 19.938 18 19.382V5C18 4.44772 17.5523 4 17 4H7Z"
                        stroke="none"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                프로젝트 모집, 아카이빙, 참여자 매칭 등을 하나의 워크플로우로 통합하는 스튜디오 운영 시스템을 설계·개발하는 중입니다.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}


