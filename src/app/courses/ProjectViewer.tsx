"use client";

import { useState } from "react";
import Image from "next/image";

type ProjectData = {
  title: string;
  students: string;
  description: string;
  slides: string[];
  videos: string[];
};

function SlideViewer({ slides, title }: { slides: string[]; title: string }) {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  if (total === 0) return null;

  return (
    <div className="space-y-2">
      <div className="relative group bg-gray-100 rounded-sm overflow-hidden">
        <div className="aspect-[16/9] relative">
          <Image
            src={slides[current]}
            alt={`${title} — slide ${current + 1}`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>

        {total > 1 && (
          <>
            <button
              onClick={() => setCurrent((s) => (s - 1 + total) % total)}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button
              onClick={() => setCurrent((s) => (s + 1) % total)}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </>
        )}
      </div>

      {total > 1 && (
        <div className="flex items-center justify-between px-1">
          <span className="text-xs text-gray-400">
            {current + 1} / {total}
          </span>
          <div className="flex gap-1">
            {total <= 30 ? (
              slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    i === current ? "bg-gray-800 w-3" : "bg-gray-300"
                  }`}
                />
              ))
            ) : (
              <input
                type="range"
                min={0}
                max={total - 1}
                value={current}
                onChange={(e) => setCurrent(Number(e.target.value))}
                className="w-32 h-1 accent-gray-800"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: ProjectData }) {
  return (
    <div className="border border-gray-200 rounded-sm overflow-hidden">
      {/* Slide viewer */}
      {project.slides.length > 0 && (
        <div className="p-4 pb-2">
          <SlideViewer slides={project.slides} title={project.title} />
        </div>
      )}

      {/* Video */}
      {project.videos.map((video, i) => (
        <div key={i} className="px-4 pb-2">
          <div className="aspect-video rounded-sm overflow-hidden bg-black">
            <video
              src={video}
              controls
              className="w-full h-full"
              preload="metadata"
            />
          </div>
        </div>
      ))}

      {/* Project info */}
      <div className="px-4 py-3 border-t border-gray-100">
        <h3 className="font-bold text-sm">{project.title}</h3>
        {project.students && (
          <p className="text-xs text-gray-500 mt-0.5">{project.students}</p>
        )}
        {project.description && (
          <p className="text-sm text-gray-700 mt-1">{project.description}</p>
        )}
      </div>
    </div>
  );
}

export default function ProjectViewer({ projects }: { projects: ProjectData[] }) {
  if (projects.length === 0) {
    return (
      <div className="aspect-video bg-gray-100 rounded-sm flex items-center justify-center text-gray-400 text-sm">
        Coming soon
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {projects.map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}
    </div>
  );
}
