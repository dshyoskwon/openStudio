import Image from "next/image";
import type { CSSProperties } from "react";

// ─── Figma MCP asset URLs (from design context of node 1581:2463) ─────────────
// These expire after 7 days — export and replace with permanent paths.
const A = {
  greenCircle:      "https://www.figma.com/api/mcp/asset/82ffc6f1-e27c-4368-aa27-4ffa41e577d7",
  pausedCircle:     "https://www.figma.com/api/mcp/asset/3912c12b-60af-462b-88d5-23cf9a1dea01",
  optStopCircle:    "https://www.figma.com/api/mcp/asset/c3e6bf31-b73c-4d00-a361-6f49111a7fbb",
  resumeCircle:     "https://www.figma.com/api/mcp/asset/adf97a27-0023-48e5-a767-0c302c40d3ed",

  maskPrintStart:   "https://www.figma.com/api/mcp/asset/036944be-1630-4dc8-972a-816c04dba8ca",
  maskPrinting:     "https://www.figma.com/api/mcp/asset/3c5d7c74-b062-4203-a17b-d3b66ea8c9b8",
  maskPaused:       "https://www.figma.com/api/mcp/asset/91462cae-6441-41c3-955b-928384578061",
  maskOptStop:      "https://www.figma.com/api/mcp/asset/dfbf393d-c449-472b-a8e7-1c5d258cb408",

  armLowerGreen:    "https://www.figma.com/api/mcp/asset/309a83b0-01de-4ff7-bb35-abfe75c9f9c0",
  armUpperGreen:    "https://www.figma.com/api/mcp/asset/6b53cff6-fe3d-4c9c-90c5-74b20aec790f",
  armLowerYellow:   "https://www.figma.com/api/mcp/asset/776323b2-e53d-4250-8bc2-3c9cbddba68c",
  armUpperYellow:   "https://www.figma.com/api/mcp/asset/da30950d-4d79-42ad-bdd3-815f80269cdb",
  armLowerPaused:   "https://www.figma.com/api/mcp/asset/2f65dfb6-8b0c-4339-b7d0-03a53baf788f",
  armUpperPaused:   "https://www.figma.com/api/mcp/asset/31edc54b-8146-4762-8430-a7f26d3032eb",

  indicatorGreen:   "https://www.figma.com/api/mcp/asset/56f8ff41-66b4-4a24-9eb5-22924bc0738f",
  indicatorPaused:  "https://www.figma.com/api/mcp/asset/ca4a960f-e6df-462a-860e-3bb1c5d901a7",

  nozzle:           "https://www.figma.com/api/mcp/asset/0f861b93-47ae-4327-992f-c47f3546c35a",
  powderFeeder:     "https://www.figma.com/api/mcp/asset/e5342821-ede8-429b-a4f3-cc1d748aab9f",
  shieldGas:        "https://www.figma.com/api/mcp/asset/96ff4659-56b4-4736-87d2-c4826d830d0e",
  serviceVector:    "https://www.figma.com/api/mcp/asset/ac9a3e42-82cd-4ea0-b55a-05d7b5ebf69c",
};

// ─── CSS mask helper ──────────────────────────────────────────────────────────
function maskStyle(img: string, pos: string, size: string): CSSProperties {
  return {
    maskImage: `url('${img}')`,
    WebkitMaskImage: `url('${img}')`,
    maskMode: "alpha",
    maskComposite: "intersect",
    maskRepeat: "no-repeat",
    maskPosition: pos,
    maskSize: size,
  } as CSSProperties;
}

// ─── Masked robot arm layer ───────────────────────────────────────────────────
function ArmLayer({
  maskImg, contentImg, left, top, width, height,
  maskPos, maskSize, inset, opacity,
}: {
  maskImg: string; contentImg: string;
  left: number; top: number; width: number; height: number;
  maskPos: string; maskSize: string; inset: string; opacity?: number;
}) {
  return (
    <div
      style={{
        position: "absolute", left, top, width, height, opacity,
        ...maskStyle(maskImg, maskPos, maskSize),
      }}
    >
      <div style={{ position: "absolute", inset }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={contentImg} alt="" style={{ display: "block", maxWidth: "none", width: "100%", height: "100%" }} />
      </div>
    </div>
  );
}

// ─── State icons ──────────────────────────────────────────────────────────────
function PrintStartIcon() {
  return (
    <div style={{ position: "relative", width: 108, height: 108, flexShrink: 0 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={A.greenCircle} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
      <ArmLayer maskImg={A.maskPrintStart} contentImg={A.armLowerGreen}
        left={4} top={60} width={101} height={26}
        maskPos="-4px -60px" maskSize="108px 108px" inset="-7.69% -1.98%" />
      <ArmLayer maskImg={A.maskPrintStart} contentImg={A.armUpperGreen}
        left={-21} top={15} width={84.597} height={48.125}
        maskPos="21px -15px" maskSize="108px 108px" inset="-4.16% -2.36%" />
    </div>
  );
}

function PrintingIcon() {
  return (
    <div style={{ position: "relative", width: 108, height: 108, flexShrink: 0 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={A.greenCircle} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
      {/* Indicator bar */}
      <div style={{ position: "absolute", left: 31, top: 66.5, width: 44, height: 7.5 }}>
        <div style={{ position: "absolute", inset: "-26.67% -4.55% -26.67% 0" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={A.indicatorGreen} alt="" style={{ display: "block", width: "100%", height: "100%" }} />
        </div>
      </div>
      <ArmLayer maskImg={A.maskPrinting} contentImg={A.armLowerGreen}
        left={4} top={60} width={101} height={26}
        maskPos="-4px -60px" maskSize="108px 108px" inset="-7.69% -1.98%" />
      <ArmLayer maskImg={A.maskPrinting} contentImg={A.armUpperGreen}
        left={-21} top={15} width={84.597} height={48.125}
        maskPos="21px -15px" maskSize="108px 108px" inset="-4.16% -2.36%" />
    </div>
  );
}

function PausedIcon() {
  return (
    <div style={{ position: "relative", width: 109, height: 109, flexShrink: 0 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={A.pausedCircle} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
      {/* Indicator */}
      <div style={{ position: "absolute", left: 32.3, top: 74.04, width: 44.407, height: 8.074 }}>
        <div style={{ position: "absolute", inset: "-24.77% -4.5% -24.77% 0" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={A.indicatorPaused} alt="" style={{ display: "block", width: "100%", height: "100%" }} />
        </div>
      </div>
      <ArmLayer maskImg={A.maskPaused} contentImg={A.armLowerPaused}
        left={4.04} top={67.98} width={101.935} height={26.241}
        maskPos="-4.037px -67.981px" maskSize="109px 109px" inset="-7.62% -1.96%"
        opacity={0.55} />
      <ArmLayer maskImg={A.maskPaused} contentImg={A.armUpperPaused}
        left={-21.19} top={4.04} width={85.38} height={59.673}
        maskPos="21.195px -4.039px" maskSize="109px 109px" inset="-3.35% -2.34%" />
      {/* Pause bars */}
      <div style={{ position: "absolute", left: 36.7, top: 30.97, width: 14.41, height: 51.136, backgroundColor: "white" }} />
      <div style={{ position: "absolute", left: 57.89, top: 30.97, width: 14.41, height: 51.136, backgroundColor: "white" }} />
    </div>
  );
}

function OptionalStopIcon() {
  return (
    <div style={{ position: "relative", width: 108, height: 108, flexShrink: 0 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={A.optStopCircle} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
      {/* Indicator */}
      <div style={{ position: "absolute", left: 31, top: 66.5, width: 44, height: 7.5 }}>
        <div style={{ position: "absolute", inset: "-26.67% -4.55% -26.67% 0" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={A.indicatorGreen} alt="" style={{ display: "block", width: "100%", height: "100%" }} />
        </div>
      </div>
      <ArmLayer maskImg={A.maskOptStop} contentImg={A.armLowerYellow}
        left={4} top={60} width={101} height={26}
        maskPos="-4px -60px" maskSize="109px 109px" inset="-7.69% -1.98%" />
      <ArmLayer maskImg={A.maskOptStop} contentImg={A.armUpperYellow}
        left={-21} top={4} width={84.597} height={59.125}
        maskPos="21px -4px" maskSize="109px 109px" inset="-3.38% -2.36%" />
    </div>
  );
}

function ResumeIcon() {
  return (
    <div style={{ position: "relative", width: 108, height: 108, flexShrink: 0 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={A.resumeCircle} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
      <ArmLayer maskImg={A.maskPrintStart} contentImg={A.armLowerGreen}
        left={4} top={60} width={101} height={26}
        maskPos="-4px -60px" maskSize="108px 108px" inset="-7.69% -1.98%" />
      <ArmLayer maskImg={A.maskPrintStart} contentImg={A.armUpperGreen}
        left={-21} top={15} width={84.597} height={48.125}
        maskPos="21px -15px" maskSize="108px 108px" inset="-4.16% -2.36%" />
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
const SERVICE_ITEMS = [
  { name: "Nozzle", icon: A.nozzle, days: 4, hours: 23, replace: false },
  { name: "Powder Feeder", icon: A.powderFeeder, days: 2, hours: 11, replace: false },
  { name: "Shield Gas", icon: A.shieldGas, days: 2, hours: 11, replace: false },
];
const SERVICE_ITEMS_REPLACE = [
  { name: "Nozzle", icon: A.nozzle, days: 4, hours: 23, replace: false },
  { name: "Powder Feeder", icon: A.powderFeeder, days: 2, hours: 11, replace: false },
  { name: "Shield Gas", icon: A.shieldGas, days: 2, hours: 11, replace: true },
];

function ServicePanel({
  items,
}: {
  items: { name: string; icon: string; days: number; hours: number; replace: boolean }[];
}) {
  return (
    <div className="border border-gray-200 rounded-sm bg-white p-4 shadow-sm">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
        <Image src={A.serviceVector} alt="" width={18} height={14} unoptimized />
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
              <Image
                src={item.icon}
                alt={item.name}
                width={36}
                height={36}
                className="object-contain mt-1"
                unoptimized
              />
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
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
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
