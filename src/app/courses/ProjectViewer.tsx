"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type ProjectData = {
  title: string;
  students: string;
  description: string;
  slides: string[];
  videos: string[];
  layout?: "default" | "grid";
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

function SlideGrid({ slides, title }: { slides: string[]; title: string }) {
  const [cols, setCols] = useState(3);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const gridClass =
    cols === 1
      ? "grid-cols-1"
      : cols === 2
        ? "grid-cols-1 sm:grid-cols-2"
        : cols === 3
          ? "grid-cols-2 sm:grid-cols-2 md:grid-cols-3"
          : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4";

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowLeft")
        setLightbox((i) => (i === null ? null : (i - 1 + slides.length) % slides.length));
      if (e.key === "ArrowRight")
        setLightbox((i) => (i === null ? null : (i + 1) % slides.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, slides.length]);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-end gap-2 text-xs text-gray-500">
        <button
          onClick={() => setCols((c) => Math.min(4, c + 1))}
          disabled={cols === 4}
          className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-sm hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Zoom out"
          title="Zoom out"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /></svg>
        </button>
        <span className="tabular-nums">{cols} cols</span>
        <button
          onClick={() => setCols((c) => Math.max(1, c - 1))}
          disabled={cols === 1}
          className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-sm hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Zoom in"
          title="Zoom in"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
        </button>
      </div>

      <div className={`grid ${gridClass} gap-1`}>
        {slides.map((slide, i) => (
          <button
            key={i}
            onClick={() => setLightbox(i)}
            className="relative aspect-[1/1.414] bg-gray-100 rounded-sm overflow-hidden group focus:outline-none focus:ring-2 focus:ring-black"
          >
            <Image
              src={slide}
              alt={`${title} — page ${i + 1}`}
              fill
              className="object-contain group-hover:opacity-90 transition-opacity"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 33vw"
            />
            <span className="absolute bottom-1 right-1 text-[10px] text-gray-500 bg-white/80 px-1 rounded">
              {i + 1}
            </span>
          </button>
        ))}
      </div>

      {lightbox !== null && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 animate-in fade-in duration-150"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) => (i === null ? null : (i - 1 + slides.length) % slides.length));
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            aria-label="Previous page"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) => (i === null ? null : (i + 1) % slides.length));
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            aria-label="Next page"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(null);
            }}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
          <div className="relative w-full h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={slides[lightbox]}
              alt={`${title} — page ${lightbox + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
            />
            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-white/80 bg-black/40 px-2 py-0.5 rounded">
              {lightbox + 1} / {slides.length}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: ProjectData }) {
  return (
    <div className="border border-gray-200 rounded-sm overflow-hidden">
      {/* Project info */}
      <div className="px-4 py-3 border-b border-gray-100">
        <h3 className="font-bold text-sm">{project.title}</h3>
        {project.students && (
          <p className="text-xs text-gray-500 mt-0.5">{project.students}</p>
        )}
        {project.description && (
          <p className="text-sm text-gray-700 mt-1">{project.description}</p>
        )}
      </div>

      {/* Slide viewer */}
      {project.slides.length > 0 && (
        <div className="p-4 pb-2">
          {project.layout === "grid" ? (
            <SlideGrid slides={project.slides} title={project.title} />
          ) : (
            <SlideViewer slides={project.slides} title={project.title} />
          )}
        </div>
      )}

      {/* Video */}
      {project.videos.length > 0 && (
        <div className="px-4 pb-4 pt-2">
          <VideoNavigator videos={project.videos} />
        </div>
      )}
    </div>
  );
}

function VideoNavigator({ videos }: { videos: string[] }) {
  const [current, setCurrent] = useState(0);
  const total = videos.length;

  if (total === 1) {
    return (
      <div className="aspect-video rounded-sm overflow-hidden bg-black">
        <video
          src={videos[0]}
          controls
          className="w-full h-full"
          preload="metadata"
        />
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="relative group bg-black rounded-sm overflow-hidden">
        <div className="aspect-video">
          <video
            key={current}
            src={videos[current]}
            controls
            className="w-full h-full"
            preload="metadata"
          />
        </div>
        <button
          onClick={() => setCurrent((i) => (i - 1 + total) % total)}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60"
          aria-label="Previous video"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
        </button>
        <button
          onClick={() => setCurrent((i) => (i + 1) % total)}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60"
          aria-label="Next video"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
        </button>
      </div>
      <div className="flex items-center justify-between px-1">
        <span className="text-xs text-gray-400">
          Video {current + 1} / {total}
        </span>
        <div className="flex gap-1">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-6 h-6 rounded-sm text-[10px] font-medium transition-colors ${
                i === current
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
              aria-label={`Video ${i + 1}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
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
