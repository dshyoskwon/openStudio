"use client";

import { useEffect, useState } from "react";
import Slideshow from "./Slideshow";
import ProjectViewer from "./ProjectViewer";
import ProductDesign2024 from "./ProductDesign2024";

type ProjectWithSlides = {
  title: string;
  students: string;
  description: string;
  slides: string[];
  videos: string[];
  layout?: "default" | "grid";
};

type CategoryWithProjects = {
  id: string;
  label: string;
  projects: ProjectWithSlides[];
};

type YearData = {
  year: string;
  label?: string;
  students?: string;
  figmaUrl?: string;
  videoUrl?: string;
  images: string[];
  videos: string[];
  projects: ProjectWithSlides[];
  categories?: CategoryWithProjects[];
};

type CourseWithFiles = {
  id: string;
  title: string;
  type: "slideshow" | "video" | "list";
  yearsWithFiles: YearData[];
};

export default function CourseTabs({ course }: { course: CourseWithFiles }) {
  const defaultYear =
    course.yearsWithFiles.find((y) => y.year === "2025")?.year ??
    course.yearsWithFiles[0]?.year;
  const [activeYear, setActiveYear] = useState(defaultYear);
  const activeData = course.yearsWithFiles.find((y) => y.year === activeYear);
  const categories = activeData?.categories ?? [];
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(
    categories[0]?.id ?? null,
  );

  useEffect(() => {
    setActiveCategoryId(activeData?.categories?.[0]?.id ?? null);
  }, [activeYear, activeData]);

  const activeCategory =
    categories.find((c) => c.id === activeCategoryId) ?? categories[0];

  return (
    <div>
      {/* Year tabs */}
      <div className="flex gap-1 border-b border-gray-200 mb-4">
        {course.yearsWithFiles.map((y) => (
          <button
            key={y.year}
            onClick={() => setActiveYear(y.year)}
            className={`px-3 py-1.5 text-sm font-medium transition-colors relative ${
              activeYear === y.year
                ? "text-black"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {y.year}
            {y.label && (
              <span className="ml-1 text-[10px] text-gray-400 font-normal">
                ({y.label})
              </span>
            )}
            {activeYear === y.year && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
            )}
          </button>
        ))}
      </div>

      {/* Content area */}
      {activeData && (
        <div className="space-y-4">
          {/* Figma embed */}
          {activeData.figmaUrl && (
            <div className="aspect-video rounded-sm overflow-hidden border border-gray-200">
              <iframe
                src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(activeData.figmaUrl)}`}
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          )}

          {/* Project viewer (Interface Design) */}
          {course.type === "slideshow" && !activeData.figmaUrl && (
            categories.length > 0 ? (
              <div className="space-y-4">
                <div className="flex gap-1 border-b border-gray-100">
                  {categories.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setActiveCategoryId(c.id)}
                      className={`px-3 py-1.5 text-xs font-medium transition-colors relative ${
                        activeCategory?.id === c.id
                          ? "text-black"
                          : "text-gray-400 hover:text-gray-600"
                      }`}
                    >
                      {c.label}
                      {activeCategory?.id === c.id && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
                      )}
                    </button>
                  ))}
                </div>
                <ProjectViewer projects={activeCategory?.projects ?? []} />
              </div>
            ) : activeData.projects.length > 0 ? (
              <ProjectViewer projects={activeData.projects} />
            ) : (
              <Slideshow images={activeData.images} />
            )
          )}

          {/* Video (Interaction Design) */}
          {course.type === "video" && !activeData.figmaUrl && (
            <>
              {activeData.videoUrl ? (
                <div className="aspect-video rounded-sm overflow-hidden">
                  <iframe
                    src={activeData.videoUrl}
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>
              ) : categories.length > 0 ? (
                <div className="space-y-4">
                  <div className="flex gap-1 border-b border-gray-100">
                    {categories.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setActiveCategoryId(c.id)}
                        className={`px-3 py-1.5 text-xs font-medium transition-colors relative ${
                          activeCategory?.id === c.id
                            ? "text-black"
                            : "text-gray-400 hover:text-gray-600"
                        }`}
                      >
                        {c.label}
                        {activeCategory?.id === c.id && (
                          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
                        )}
                      </button>
                    ))}
                  </div>
                  {course.id === "interaction-design" &&
                  activeYear === "2024" &&
                  activeCategory?.id === "ProductDesign" ? (
                    <ProductDesign2024 />
                  ) : (
                    <ProjectViewer projects={activeCategory?.projects ?? []} />
                  )}
                </div>
              ) : activeData.projects.length > 0 ? (
                <ProjectViewer projects={activeData.projects} />
              ) : activeData.videos.length > 0 ? (
                <div className="space-y-4">
                  {activeData.videos.map((video, i) => (
                    <div key={i} className="aspect-video rounded-sm overflow-hidden bg-black">
                      <video
                        src={video}
                        controls
                        controlsList="nodownload"
                        onContextMenu={(e) => e.preventDefault()}
                        className="w-full h-full"
                        preload="metadata"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="aspect-video bg-gray-100 rounded-sm flex items-center justify-center text-gray-400 text-sm">
                  Coming soon
                </div>
              )}
            </>
          )}

          {/* Year-level students */}
          {activeData.students && (
            <p className="text-sm text-gray-500">{activeData.students}</p>
          )}
        </div>
      )}
    </div>
  );
}
