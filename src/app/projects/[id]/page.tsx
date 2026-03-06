import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProjectById } from "../data";
import AIAdditiveMfgContent from "./AIAdditiveMfgContent";
import SavouringSlowGiftsContent from "./SavouringSlowGiftsContent";
import AmbientIntelligenceContent from "./AmbientIntelligenceContent";

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
          {project.id === "ai-additive-manufacturing" && (
            <div className="mt-3 text-xs text-gray-500 space-y-0.5">
              <p><span className="font-semibold text-gray-700">PI:</span> Hyosun Kwon</p>
              <p><span className="font-semibold text-gray-700">Research Assistants:</span> Junyong Lee, Beomseok Lee, Jiho Kang</p>
              <p><span className="font-semibold text-gray-700">Duration:</span> 2025. 09. 01 – 2026. 01. 31</p>
              <p><span className="font-semibold text-gray-700">Funded by</span> RISE · <span className="font-semibold text-gray-700">Supported by</span> 서울특별시</p>
            </div>
          )}
          {project.id === "savouring-slow-gifts" && (
            <div className="mt-3 text-xs text-gray-500 space-y-0.5">
              <p className="text-gray-600">사물인터넷 기반 혼합현실 플랫폼 내 디지털 선물 교환의 정서적 UX 프레임워크 디자인 (우수신진연구)</p>
              <p><span className="font-semibold text-gray-700">PI:</span> Hyosun Kwon</p>
              <p><span className="font-semibold text-gray-700">Duration:</span> 2022. 03. 01 – 2025. 02. 28</p>
              <p><span className="font-semibold text-gray-700">Funded by</span> National Research Foundation (NRF) · <span className="font-semibold text-gray-700">Supported by</span> 과학기술정보통신부</p>
            </div>
          )}
          {project.id === "gift-exchange-mr" && (
            <div className="mt-3 text-xs text-gray-500 space-y-0.5">
              <p className="text-gray-600">사물인터넷 기반 혼합현실 플랫폼 내 디지털 선물 교환의 정서적 UX 프레임워크 디자인 (우수신진연구)</p>
              <p><span className="font-semibold text-gray-700">PI:</span> Hyosun Kwon</p>
              <p><span className="font-semibold text-gray-700">Research Assistant:</span> Michael Hunter</p>
              <p><span className="font-semibold text-gray-700">Duration:</span> 2022. 03. 01 – 2025. 02. 28</p>
              <p><span className="font-semibold text-gray-700">Funded by</span> National Research Foundation (NRF) · <span className="font-semibold text-gray-700">Supported by</span> 과학기술정보통신부</p>
            </div>
          )}
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
          </div>
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
      {project.id === "ambient-intelligence" && <AmbientIntelligenceContent />}
    </div>
  );
}



