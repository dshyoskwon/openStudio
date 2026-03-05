import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProjectById } from "../data";
import AIAdditiveMfgContent from "./AIAdditiveMfgContent";
import SavouringSlowGiftsContent from "./SavouringSlowGiftsContent";

type ProjectPageProps = {
  params: {
    id: string;
  };
};

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = getProjectById(params.id);

  if (!project) {
    return notFound();
  }

  const colorClass =
    project.type === "Industry Project"
      ? "text-blue-500"
      : project.type === "Research Project"
      ? "text-emerald-500"
      : "text-amber-500";

  const badgeClass =
    project.type === "Industry Project"
      ? "bg-blue-50 text-blue-700 border-blue-200"
      : project.type === "Research Project"
      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
      : "bg-amber-50 text-amber-700 border-amber-200";

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="border-b border-black pb-4 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            {project.title}
          </h1>
          <p className="text-sm text-gray-500 mt-1">{project.meta}</p>
        </div>
        <span
          className={`inline-flex items-center rounded-[2px] border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${badgeClass}`}
        >
          {project.type}
        </span>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left: Hero / image */}
        <div className="lg:col-span-2">
          <div className="bg-gray-100 aspect-video w-full mb-6 rounded-sm flex items-center justify-center text-gray-400 overflow-hidden">
            {project.id === "ai-additive-manufacturing" ? (
              <Image
                src="/images/projects/AM_UXUI.PNG"
                alt="UX·UI Design of AI-driven Additive Manufacturing Process Monitoring Software"
                width={1280}
                height={720}
                className="w-full h-full object-cover object-bottom"
              />
            ) : project.id === "smart-3d-printing-interface" ? (
              <Image
                src="/images/projects/3dPrinting.jpg"
                alt="Designing User Experience for Industrial Machines"
                width={1280}
                height={720}
                className="w-full h-full object-cover object-top"
              />
            ) : project.id === "gift-exchange-mr" ? (
              <Image
                src="/images/projects/mr2.jpg"
                alt="Gift Exchange in Mixed Reality"
                width={1280}
                height={720}
                className="w-full h-full object-cover object-bottom"
              />
            ) : project.id === "savouring-slow-gifts" ? (
              <Image
                src="/images/projects/slowgift.jpg"
                alt="Savouring Slow Gifts"
                width={1280}
                height={720}
                className="w-full h-full object-cover object-bottom"
              />
            ) : project.id === "ambient-intelligence" ? (
              <Image
                src="/images/projects/ambientagent.png"
                alt="Ambient Intelligence"
                width={1280}
                height={720}
                className="w-full h-full object-cover object-bottom"
              />
            ) : project.id === "visualizing-all-senses" ? (
              <Image
                src="/images/projects/colour.jpg"
                alt="Visualization of Senses"
                width={1280}
                height={720}
                className="w-full h-full object-cover object-left"
              />
            ) : project.id === "resonance-between-hearing-and-the-deaf" ? (
              <Image
                src="/images/projects/VibroCushion.png"
                alt="Resonance between Hearing and the Deaf"
                width={1280}
                height={720}
                className="w-full h-full object-cover object-bottom"
              />
            ) : (
              <span>Project Visual</span>
            )}
          </div>
          <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-800">
            <p className="whitespace-pre-line">{project.description}</p>
            {project.id === "ai-additive-manufacturing" && (
              <video
                src="/images/projects/MeltWatch_UI_applied.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-sm"
              />
            )}
            {project.id === "ai-additive-manufacturing" && (
              <p>
                2025학년도 산학공동기술개발과제의 일환으로 국민대학교와 (주)에이엠솔루션즈의 공동 연구산업용 적층 제조 데이터 수집 및 활용을 위한 공정 모니터링 소프트웨어 &lsquo;meltWatch&rsquo;의 인터페이스 설계와 사용자 경험(UI · UX) 디자인을 수행하였다.
              </p>
            )}
          </div>

          {project.id === "ai-additive-manufacturing" && (
            <div className="flex flex-col gap-4 mt-6">
              <div className="overflow-hidden rounded-sm bg-gray-100">
                <Image
                  src="/images/projects/meltWatch01.jpg"
                  alt="MeltWatch 01"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm md:text-base leading-relaxed text-gray-800">
                기존의 모니터링 시스템은 복잡한 데이터로 이루어져 있어 즉각적인 인식을 저해하는 한계가 있음. 특히 실시간으로 변화하는 공정 데이터를 직관적으로 인지하기 어려운 인터페이스는 대응력을 떨어뜨리는 요인으로 작동. 본 프로젝트는 사용자가 복잡한 수치 데이터를 한눈에 파악할 수 있도록 데이터 시각화 및 직관적인 아이콘 개발을 통해 정보 전달력을 강화하는데 중점을 둠. 전체 인터페이스 구조는 작업 목적에 따라 Main(모니터링)과 Setting(설정) 페이지로 구분, 전체 공정 현황을 한 화면에서 볼 수 있는 레이아웃을 구현. 세부 데이터 확인 및 정밀 조작은 팝업 형식을 활용, 모니터링 화면의 맥락을 유지하면서 제어할 수 있도록 설계.
              </p>
              <div className="overflow-hidden rounded-sm bg-gray-100">
                <Image
                  src="/images/projects/meltWatch02.jpg"
                  alt="MeltWatch 02"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm md:text-base leading-relaxed text-gray-800">
                기존의 재생/일시정지/정지 버튼 구조를 사용하지 않고, 프린터의 실제 동작 흐름을 기준으로 출력 상태를 5단계로 구분. 출력 전, 출력 중, 일시 중단 상태 : 중앙 버튼에서 상태에 따라 초록 계열 아이콘 전환. 출력 중단, 출력 재개 상태 : 오른쪽 버튼에서 노랑-주황 계열 아이콘 전환. 각 상태 전환 시에는 팝업 인디케이션을 제공하여, 장비 제어 과정에서의 오작동과 상태 오인 가능성을 줄임.
              </p>
              <div className="overflow-hidden rounded-sm bg-gray-100">
                <Image
                  src="/images/projects/meltWatch03.jpg"
                  alt="MeltWatch 03"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm md:text-base leading-relaxed text-gray-800">
                소모성 하드웨어 관리용 Setting UI 구성. Nozzle, Power Feeder, Shield Gas 등 주기적 교체가 필요한 부품의 Usage Time을 표시하여 마지막 교체 이후 사용 시간을 확인. 부품별 교체 주기를 설정하여 해당 기간 초과 시 회색 오버레이와 빨간색 경고 텍스트를 적용하여 교체 필요성을 즉각적으로 인지. 부품 교체 후에는 Replace 버튼이 활성화되며, 버튼을 누르면 Usage Time이 0으로 초기화.
              </p>
              <div className="overflow-hidden rounded-sm bg-gray-100">
                <Image
                  src="/images/projects/meltWatch04.jpg"
                  alt="MeltWatch 04"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>

        {/* Right: Meta / navigation */}
        <aside className="space-y-4 text-sm text-gray-600">
          <div className="border border-gray-200 rounded-md p-4 space-y-2">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Project Type
            </h2>
            <p className={colorClass}>{project.type}</p>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-500 mt-4">
              Year / Domain
            </h2>
            <p>{project.meta}</p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-xs font-medium text-gray-700 hover:underline"
          >
            ← Back to all projects
          </Link>
        </aside>
      </main>

      {project.id === "ai-additive-manufacturing" && <AIAdditiveMfgContent />}
      {project.id === "savouring-slow-gifts" && <SavouringSlowGiftsContent />}
    </div>
  );
}



