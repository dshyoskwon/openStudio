import Link from "next/link";
import Image from "next/image";
import { projects } from "./data";

export default function ProjectsPage() {
  // 무작위 순서로 섞어서 바둑판 형태로 보여주기
  const shuffledProjects = [...projects].sort(() => Math.random() - 0.5);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="border-b border-black pb-4 flex justify-between items-end">
        <h1 className="text-3xl font-bold uppercase tracking-widest">
          Projects
        </h1>
        <span className="text-sm text-gray-500">
          Industry • Research • Incubating
        </span>
      </header>

      {/* Type legend at top */}
      <div className="flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-wide text-xs">
        <span className="inline-flex items-center gap-1 rounded-[2px] border border-blue-200 bg-blue-50 px-2 py-0.5 text-blue-700">
          <span
            className="w-2.5 h-2.5 rounded-[2px] bg-blue-600"
            aria-hidden="true"
          />
          Industry Project
        </span>
        <span className="inline-flex items-center gap-1 rounded-[2px] border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-emerald-700">
          <span
            className="w-2.5 h-2.5 rounded-[2px] bg-emerald-600"
            aria-hidden="true"
          />
          Research Project
        </span>
        <span className="inline-flex items-center gap-1 rounded-[2px] border border-amber-200 bg-amber-50 px-2 py-0.5 text-amber-700">
          <span
            className="w-2.5 h-2.5 rounded-[2px] bg-amber-500"
            aria-hidden="true"
          />
          Incubating
        </span>
        <span className="inline-flex items-center gap-1 rounded-[2px] border border-purple-200 bg-purple-50 px-2 py-0.5 text-purple-700">
          <span className="inline-flex p-0.5 text-purple-700" aria-hidden="true">
            <svg
              className="w-3.5 h-3.5"
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
          Student Project
        </span>
      </div>

      {/* 바둑판 레이아웃: 타입 혼합 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {shuffledProjects.map((project) => {
          const colorClass =
            project.type === "Industry Project"
              ? "text-blue-500"
              : project.type === "Research Project"
              ? "text-emerald-500"
              : "text-amber-500";

          return (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group cursor-pointer flex flex-col h-full"
            >
              <div className="bg-gray-100 aspect-video w-full mb-4 rounded-sm flex items-center justify-center text-gray-400 overflow-hidden group-hover:bg-gray-200 transition-colors">
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
                  <span>Project Image</span>
                )}
              </div>
              <h3 className="text-[4.5vw] md:text-[1.8vw] lg:text-[1.2vw] font-bold mb-1 group-hover:underline leading-tight min-h-[1.5em]">
                {project.title}
              </h3>
              <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                <div className="flex items-center gap-2">
                  <span>{project.meta}</span>
                  {project.isStudentProject && (
                    <span
                      className="inline-flex items-center text-purple-700"
                      aria-label="Student project"
                      title="Student project"
                    >
                      <span className="inline-flex p-0.5" aria-hidden="true">
                        <svg
                          className="w-3.5 h-3.5"
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
                    </span>
                  )}
                </div>
                <div className="flex items-center">
                  <span
                    className={`inline-flex p-1 ${colorClass}`}
                    aria-hidden="true"
                  >
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
                {project.description}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}


