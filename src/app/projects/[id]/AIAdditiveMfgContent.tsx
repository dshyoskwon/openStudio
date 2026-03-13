import Image from "next/image";

// ─── State icons (inline SVG, no external assets) ────────────────────────────

function PrintStartIcon() {
  return (
    <div className="w-[108px] h-[108px] shrink-0 rounded-full flex items-center justify-center" style={{ backgroundColor: "#0CB929" }}>
      <svg width="48" height="48" viewBox="0 0 24 24" fill="white">
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  );
}

function PrintingIcon() {
  return (
    <div className="w-[108px] h-[108px] shrink-0 rounded-full flex flex-col items-center justify-center gap-1" style={{ backgroundColor: "#0CB929" }}>
      <svg width="36" height="36" viewBox="0 0 24 24" fill="white">
        <path d="M8 5v14l11-7z" />
      </svg>
      <div className="flex gap-0.5">
        <div className="w-2 h-1 rounded-full bg-white" />
        <div className="w-2 h-1 rounded-full bg-white" />
        <div className="w-2 h-1 rounded-full bg-white" />
      </div>
    </div>
  );
}

function PausedIcon() {
  return (
    <div className="w-[108px] h-[108px] shrink-0 rounded-full flex items-center justify-center bg-gray-300">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="white">
        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
      </svg>
    </div>
  );
}

function OptionalStopIcon() {
  return (
    <div className="w-[108px] h-[108px] shrink-0 rounded-full flex items-center justify-center" style={{ backgroundColor: "#F5A623" }}>
      <svg width="48" height="48" viewBox="0 0 24 24" fill="white">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-2h-2v2zm0-4h2V7h-2v6z" />
      </svg>
    </div>
  );
}

function ResumeIcon() {
  return (
    <div className="w-[108px] h-[108px] shrink-0 rounded-full flex items-center justify-center" style={{ backgroundColor: "#4A90D9" }}>
      <svg width="48" height="48" viewBox="0 0 24 24" fill="white">
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  );
}

const STATE_ICONS = [
  { component: <PrintStartIcon />, label: "Print Start" },
  { component: <PrintingIcon />, label: "Printing..." },
  { component: <PausedIcon />, label: "Paused" },
  { component: <OptionalStopIcon />, label: "Optional Stop" },
  { component: <ResumeIcon />, label: "Resume" },
];

// ─── Service panel ────────────────────────────────────────────────────────────
function ServiceIcon({ name }: { name: string }) {
  if (name === "Nozzle") {
    return (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#333" strokeWidth="1.5">
        <path d="M18 4v20M12 24h12M14 28h8" strokeLinecap="round" />
        <circle cx="18" cy="32" r="2" fill="#333" />
      </svg>
    );
  }
  if (name === "Powder Feeder") {
    return (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#333" strokeWidth="1.5">
        <rect x="8" y="6" width="20" height="16" rx="2" />
        <path d="M14 22v8M22 22v8M10 30h16" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#333" strokeWidth="1.5">
      <circle cx="18" cy="18" r="12" />
      <path d="M18 10v8M14 22h8" strokeLinecap="round" />
    </svg>
  );
}

const SERVICE_ITEMS = [
  { name: "Nozzle", days: 4, hours: 23, replace: false },
  { name: "Powder Feeder", days: 2, hours: 11, replace: false },
  { name: "Shield Gas", days: 2, hours: 11, replace: false },
];
const SERVICE_ITEMS_REPLACE = [
  { name: "Nozzle", days: 4, hours: 23, replace: false },
  { name: "Powder Feeder", days: 2, hours: 11, replace: false },
  { name: "Shield Gas", days: 2, hours: 11, replace: true },
];

function ServicePanel({
  items,
}: {
  items: { name: string; days: number; hours: number; replace: boolean }[];
}) {
  return (
    <div className="border border-gray-200 rounded-sm bg-white p-4 shadow-sm">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
          <path d="M1 7h16M9 1v12M5 3l-4 4 4 4M13 3l4 4-4 4" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-bold text-gray-900 text-sm">Service</span>
        <span className="ml-1 px-2 py-0.5 rounded-full text-white text-[10px] font-bold" style={{ backgroundColor: "#1EEBB8" }}>
          Edit
        </span>
      </div>
      <div className="grid grid-cols-3 divide-x divide-gray-200">
        {items.map((item) => (
          <div key={item.name} className="px-4 first:pl-0">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-1.5 mb-0.5">
                  <p className="font-bold text-gray-900 text-sm">{item.name}</p>
                  {item.replace && (
                    <span className="px-1.5 py-0.5 rounded-full bg-blue-500 text-white text-[9px] font-bold">
                      Replace
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-[10px]">Installed(2025.11.5.)</p>
                <p className="text-gray-700 text-xs mt-2 mb-1">Usage Time</p>
                <p className="leading-none">
                  <span className="text-4xl font-semibold text-gray-900 tracking-tight">{item.days}</span>
                  <span className="text-xs text-gray-700 ml-0.5">days </span>
                  <span className="text-4xl font-semibold text-gray-900 tracking-tight">{item.hours}</span>
                  <span className="text-xs text-gray-700 ml-0.5">hours</span>
                </p>
              </div>
              <ServiceIcon name={item.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function AIAdditiveMfgContent() {
  return (
    <div className="space-y-10 mt-2">
      {/* Project overview */}
      <p className="text-sm leading-relaxed text-gray-700">
        2025학년도 산학공동기술개발과제의 일환으로 국민대학교와 (주)에이엠솔루션즈의 공동 연구.<br></br>
        산업용 적층 제조 데이터 수집 및 활용을 위한 공정 모니터링 소프트웨어 <em>meltWatch</em>의 인터페이스 설계와
        사용자 경험(UI&thinsp;·&thinsp;UX) 디자인을 수행.
      </p>

      {/* Main UI screenshot */}
      <section>
        <div className="rounded-sm overflow-hidden bg-gray-900">
          <Image
            src="/images/projects/AM_UXUI.PNG"
            alt="meltWatch — Main Monitoring UI &amp; System Setting UI"
            width={1280}
            height={720}
            className="w-full"
          />
        </div>
        <p className="text-[11px] text-gray-400 mt-1.5 text-center">
          meltWatch · Main Monitoring UI (left) &amp; System Setting UI (right)
        </p>
      </section>

      {/* Design challenge & approach */}
      <section className="space-y-3 text-sm leading-relaxed text-gray-700">
        <p>
          기존의 모니터링 시스템은 복잡한 데이터로 이루어져 있어 즉각적인 인식을 저해하는 한계가 있음.
          특히 실시간으로 변화하는 공정 데이터를 직관적으로 인지하기 어려운 인터페이스는 대응력을
          떨어뜨리는 요인으로 작동.
        </p>
        <p>
          본 프로젝트는 사용자가 복잡한 수치 데이터를 한눈에 파악할 수 있도록 데이터 시각화 및 직관적인
          아이콘 개발을 통해 정보 전달력을 강화하는데 중점을 둠. 전체 인터페이스 구조는 작업 목적에 따라
          Main(모니터링)과 Setting(설정) 페이지로 구분, 전체 공정 현황을 한 화면에서 볼 수 있는 레이아웃을
          구현. 세부 데이터 확인 및 정밀 조작은 팝업 형식으로 활용하여, 모니터링 화면의 맥락을 유지하면서
          제어할 수 있도록 설계.
        </p>
      </section>

      {/* Print state icons */}
      <section>
        <div className="bg-[#f6f7fc] rounded-sm py-6 px-4">
          <div className="flex justify-center gap-6 md:gap-10 flex-wrap">
            {STATE_ICONS.map((state) => (
              <div key={state.label} className="flex flex-col items-center gap-2">
                {state.component}
                <span className="text-sm text-gray-800">{state.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 text-sm leading-relaxed text-gray-700 space-y-1">
          <p>
            기존의 재생/일시정지/정지 버튼 구조를 사용하지 않고, 프린터의 실제 동작 흐름을 기준으로
            출력 상태를 5단계로 구분.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-0.5 ml-2">
            <li>출력 전, 출력 중, 일시 중단 상태 : 중앙 버튼에서 상태에 따라 초록 계열 아이콘 전환</li>
            <li>출력 중단, 출력 재개 상태 : 오른쪽 버튼에서 노랑-주황 계열 아이콘 전환</li>
            <li>
              각 상태 전환 시에는 팝업 인디케이션을 제공하여, 장비 제어 과정에서의 오작동과 상태
              오인 가능성을 줄임
            </li>
          </ul>
        </div>
      </section>

      {/* Popup dialogs */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Print Start dialog */}
          <div className="border border-gray-200 rounded-sm bg-white p-6 shadow-sm">
            <div className="flex justify-center mb-3">
              <PrintStartIcon />
            </div>
            <h3 className="text-center font-bold text-gray-900 text-xl mb-4">Print Start</h3>
            <div className="text-sm text-gray-700 space-y-1 mb-6 leading-relaxed">
              <p>Machine: AMS-000001</p>
              <p>Process name: Thinwall_20251101_01</p>
              <p>Wire material: SUS316L</p>
              <p>Substrate meterial: SUS316L</p>
              <p>Wire Diameter(Mm): 1.0</p>
              <p>Layer thickness(Mm): 0.8</p>
              <p>Path type: Bi/Uni - direction</p>
              <p>Operator name: 홍길동</p>
            </div>
            <div className="flex gap-3 justify-center">
              <button className="px-8 py-1.5 rounded-full bg-gray-100 text-gray-800 text-sm font-semibold">
                Cancel
              </button>
              <button
                className="px-8 py-1.5 rounded-full text-white text-sm font-semibold"
                style={{ backgroundColor: "#0CB929" }}
              >
                Start
              </button>
            </div>
          </div>

          {/* Paused + Optional Stop */}
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-sm bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-bold text-gray-900 text-xl mb-2">Paused</h3>
                  <div className="text-sm text-gray-700 space-y-0.5 leading-relaxed">
                    <p>Layer 152/240</p>
                    <p>Progress 48%</p>
                    <p>Remaining 13:12:15</p>
                  </div>
                </div>
                <div className="flex gap-4 shrink-0">
                  <div className="flex flex-col items-center gap-1">
                    <ResumeIcon />
                    <span className="text-xs text-gray-600">Resume</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-[108px] h-[108px] rounded-full bg-red-600 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-12 h-12 fill-white">
                        <rect x="6" y="6" width="12" height="12" rx="1" />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-600">Stop</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-sm bg-white p-5 shadow-sm">
              <div className="flex justify-center mb-2">
                <OptionalStopIcon />
              </div>
              <h3 className="text-center font-bold text-gray-900 text-xl">Optional Stop</h3>
              <p className="text-center text-gray-600 text-sm mb-3">Pause at This Layer</p>
              <div className="flex gap-3 justify-center">
                <button className="px-6 py-1.5 rounded-full bg-gray-100 text-gray-800 text-sm font-semibold">
                  Cancel
                </button>
                <button className="px-6 py-1.5 rounded-full bg-yellow-400 text-white text-sm font-semibold">
                  Pause
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Settings UI */}
      <section>
        <div className="space-y-3 text-sm leading-relaxed text-gray-700 mb-5">
          <p>
            소모성 하드웨어 관리용 Setting UI 구성. Nozzle, Power Feeder, Shield Gas 등 주기적 교체가
            필요한 부품의 Usage Time을 표시하여 마지막 교체 이후 사용 시간을 확인.
          </p>
          <p>
            부품별 교체 주기를 설정하여 해당 기간 초과 시 회색 오버레이와 빨간색 경고 텍스트를 적용하여
            교체 필요성을 즉각적으로 인지. 부품 교체 후에는 Replace 버튼이 활성화되며, 버튼을 누르면
            Usage Time이 0으로 초기화.
          </p>
        </div>
        <div className="space-y-4">
          <ServicePanel items={SERVICE_ITEMS} />
          <ServicePanel items={SERVICE_ITEMS_REPLACE} />
        </div>
      </section>
    </div>
  );
}
