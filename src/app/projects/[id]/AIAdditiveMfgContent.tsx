import Image from "next/image";

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
            src="/images/projects/meltWatch/meltWatch01.jpg"
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
        <div className="rounded-sm overflow-hidden">
          <Image
            src="/images/projects/meltWatch/meltWatch02.jpg"
            alt="meltWatch print state icons — Print Start, Printing, Paused, Optional Stop, Resume"
            width={1600}
            height={200}
            className="w-full"
          />
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
        <div className="rounded-sm overflow-hidden">
          <Image
            src="/images/projects/meltWatch/meltWatch03.jpg"
            alt="meltWatch popup dialogs — Print Start, Paused, Optional Stop"
            width={1280}
            height={720}
            className="w-full"
          />
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
        <div className="rounded-sm overflow-hidden">
          <Image
            src="/images/projects/meltWatch/meltWatch04.jpg"
            alt="meltWatch service panels — Nozzle, Powder Feeder, Shield Gas usage and replacement"
            width={1400}
            height={800}
            className="w-full"
          />
        </div>
      </section>
    </div>
  );
}
