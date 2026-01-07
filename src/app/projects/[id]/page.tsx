import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProjectById } from "../data";

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
            ) : (
              <span>Project Visual</span>
            )}
          </div>
          <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-800">
            <p>{project.description}</p>
            <p className="text-gray-600">
              이 페이지는 프로젝트별로 세부 설명, 프로세스 다이어그램, 산출물 이미지
              등을 확장해서 넣을 수 있도록 구성되어 있습니다. 필요에 따라 섹션을
              추가해 주세요.
            </p>
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
    </div>
  );
}



