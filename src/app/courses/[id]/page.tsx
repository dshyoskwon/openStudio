import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { courses } from "@/data/courses";
import { projects } from "@/app/projects/data";
import CourseTabs from "../CourseTabs";

function getFiles(courseId: string, year: string): string[] {
  const dir = path.join(process.cwd(), "public", "courses", courseId, year);
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => /\.(jpg|jpeg|png|gif|webp|mp4|mov)$/i.test(f))
      .sort()
      .map((f) => `/courses/${courseId}/${year}/${f}`);
  } catch {
    return [];
  }
}

function getImages(courseId: string, year: string): string[] {
  return getFiles(courseId, year).filter((f) =>
    /\.(jpg|jpeg|png|gif|webp)$/i.test(f)
  );
}

function getVideos(courseId: string, year: string): string[] {
  return getFiles(courseId, year).filter((f) => /\.(mp4|mov)$/i.test(f));
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // KMU Alpha Project
  if (id === "kmu-alpha") {
    const alphaProjects = projects.filter((p) => p.meta.includes("KMU Alpha"));
    return (
      <div className="space-y-8 animate-in fade-in duration-500">
        <header className="border-b border-black pb-4">
          <h1 className="text-3xl font-bold uppercase tracking-widest">
            KMU Alpha Project
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            국민대학교 알파 프로젝트로 진행된 학생 주도 프로젝트입니다.
          </p>
        </header>

        <div className="grid gap-3">
          {alphaProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="flex items-center justify-between border border-gray-200 rounded-sm px-4 py-3 hover:bg-gray-50 transition-colors group"
            >
              <div>
                <h3 className="font-bold text-sm group-hover:underline">
                  {project.title}
                </h3>
                {project.description && (
                  <p className="text-xs text-gray-500 mt-0.5">
                    {project.description}
                  </p>
                )}
              </div>
              <span className="text-xs text-gray-400 shrink-0 ml-4">
                {project.year}
              </span>
            </Link>
          ))}
        </div>

        <Link
          href="/courses"
          className="inline-block text-sm text-gray-500 hover:text-black transition-colors"
        >
          &larr; Back to Courses
        </Link>
      </div>
    );
  }

  // Regular courses
  const course = courses.find((c) => c.id === id);
  if (!course) return notFound();

  const courseData = {
    ...course,
    yearsWithFiles: course.years.map((y) => ({
      ...y,
      images: course.type === "slideshow" ? getImages(course.id, y.year) : [],
      videos: course.type === "video" ? getVideos(course.id, y.year) : [],
    })),
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="border-b border-black pb-4">
        <h1 className="text-3xl font-bold uppercase tracking-widest">
          {course.title}
        </h1>
        <p className="text-sm text-gray-500 mt-2">{course.description}</p>
      </header>

      <CourseTabs course={courseData} />

      <Link
        href="/courses"
        className="inline-block text-sm text-gray-500 hover:text-black transition-colors"
      >
        &larr; Back to Courses
      </Link>
    </div>
  );
}
