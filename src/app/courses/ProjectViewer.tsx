"use client";

import { useState } from "react";
import Image from "next/image";

type ProjectData = {
  title: string;
  students: string;
  description: string;
  slides: string[];
};

export default function ProjectViewer({ projects }: { projects: ProjectData[] }) {
  const [activeProject, setActiveProject] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  if (projects.length === 0) {
    return (
      <div className="aspect-video bg-gray-100 rounded-sm flex items-center justify-center text-gray-400 text-sm">
        Coming soon
      </div>
    );
  }

  const project = projects[activeProject];
  const totalSlides = project.slides.length;

  function switchProject(idx: number) {
    setActiveProject(idx);
    setCurrentSlide(0);
  }

  return (
    <div className="space-y-4">
      {/* Project selector */}
      {projects.length > 1 && (
        <div className="flex gap-2 flex-wrap">
          {projects.map((p, i) => (
            <button
              key={i}
              onClick={() => switchProject(i)}
              className={`text-xs px-3 py-1.5 rounded-sm border transition-colors ${
                activeProject === i
                  ? "border-black bg-black text-white"
                  : "border-gray-200 text-gray-500 hover:border-gray-400"
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>
      )}

      {/* Project info */}
      <div className="space-y-1">
        <h3 className="font-bold text-base">{project.title}</h3>
        <p className="text-xs text-gray-500">{project.students}</p>
        <p className="text-sm text-gray-700">{project.description}</p>
      </div>

      {/* Slide viewer */}
      {totalSlides > 0 ? (
        <div className="space-y-2">
          <div className="relative group bg-gray-100 rounded-sm overflow-hidden">
            <div className="aspect-[16/9] relative">
              <Image
                src={project.slides[currentSlide]}
                alt={`${project.title} — slide ${currentSlide + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>

            {/* Prev / Next */}
            {totalSlides > 1 && (
              <>
                <button
                  onClick={() => setCurrentSlide((s) => (s - 1 + totalSlides) % totalSlides)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
                </button>
                <button
                  onClick={() => setCurrentSlide((s) => (s + 1) % totalSlides)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                </button>
              </>
            )}
          </div>

          {/* Slide counter + thumbnail strip */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400">
              {currentSlide + 1} / {totalSlides}
            </span>
            {totalSlides > 1 && totalSlides <= 20 && (
              <div className="flex gap-1">
                {project.slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentSlide ? "bg-gray-800 w-4" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="aspect-video bg-gray-100 rounded-sm flex items-center justify-center text-gray-400 text-sm">
          슬라이드 준비 중
        </div>
      )}
    </div>
  );
}
