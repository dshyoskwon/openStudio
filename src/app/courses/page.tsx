import fs from "fs";
import path from "path";
import Link from "next/link";
import { courses } from "@/data/courses";
import { projects } from "@/app/projects/data";
import Slideshow from "./Slideshow";
import CourseTabs from "./CourseTabs";

// 폴더에서 파일 목록을 자동으로 읽어오는 유틸
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

// KMU Alpha 프로젝트 필터
const alphaProjects = projects.filter(
  (p) => p.meta.includes("KMU Alpha")
);

export default function CoursesPage() {
  // 과목별 파일 데이터 준비
  const courseData = courses.map((course) => ({
    ...course,
    yearsWithFiles: course.years.map((y) => ({
      ...y,
      images: course.type === "slideshow" ? getImages(course.id, y.year) : [],
      videos: course.type === "video" ? getVideos(course.id, y.year) : [],
    })),
  }));

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="border-b border-black pb-4">
        <h1 className="text-3xl font-bold uppercase tracking-widest">
          Courses
        </h1>
      </header>

      {/* Course sections */}
      {courseData.map((course) => (
        <section key={course.id} className="space-y-4">
          <div>
            <h2 className="text-xl font-bold">{course.title}</h2>
            <p className="text-sm text-gray-600 mt-1">{course.description}</p>
          </div>

          <CourseTabs course={course} />
        </section>
      ))}

      {/* KMU Alpha Project */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold">KMU Alpha Project</h2>
          <p className="text-sm text-gray-600 mt-1">
            국민대학교 알파 프로젝트로 진행된 학생 주도 프로젝트입니다.
          </p>
        </div>
        <div className="grid gap-3">
          {alphaProjects.length > 0 ? (
            alphaProjects.map((project) => (
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
            ))
          ) : (
            <p className="text-sm text-gray-400">Coming soon</p>
          )}
        </div>
      </section>
    </div>
  );
}
