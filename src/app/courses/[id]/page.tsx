import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { courses } from "@/data/courses";
import { projects } from "@/app/projects/data";
import CourseTabs from "../CourseTabs";

const IMG_EXT = /\.(jpg|jpeg|png|gif|webp)$/i;
const VID_EXT = /\.(mp4|mov)$/i;
const MEDIA_EXT = /\.(jpg|jpeg|png|gif|webp|mp4|mov)$/i;

function readDir(dir: string): string[] {
  try {
    return fs.readdirSync(dir);
  } catch {
    return [];
  }
}

function isDir(p: string): boolean {
  try {
    return fs.statSync(p).isDirectory();
  } catch {
    return false;
  }
}

// 프로젝트 폴더에서 슬라이드 이미지를 자동으로 읽어옴
function getProjectSlides(courseId: string, year: string, folder: string): string[] {
  const dir = path.join(process.cwd(), "public", "courses", courseId, year, folder);
  return readDir(dir)
    .filter((f) => IMG_EXT.test(f))
    .sort()
    .map((f) => `/courses/${courseId}/${year}/${folder}/${f}`);
}

// 프로젝트 폴더 내 비디오 파일
function getProjectVideos(courseId: string, year: string, folder: string): string[] {
  const dir = path.join(process.cwd(), "public", "courses", courseId, year, folder);
  return readDir(dir)
    .filter((f) => VID_EXT.test(f))
    .sort()
    .map((f) => `/courses/${courseId}/${year}/${folder}/${f}`);
}

// 년도 폴더에서 프로젝트 하위 폴더 목록 가져오기
function getProjectFolders(courseId: string, year: string): string[] {
  const dir = path.join(process.cwd(), "public", "courses", courseId, year);
  return readDir(dir)
    .filter((f) => f !== ".gitkeep" && isDir(path.join(dir, f)))
    .sort();
}

// 년도 폴더의 루트 이미지 (프로젝트 구분 없이)
function getRootImages(courseId: string, year: string): string[] {
  const dir = path.join(process.cwd(), "public", "courses", courseId, year);
  return readDir(dir)
    .filter((f) => IMG_EXT.test(f))
    .sort()
    .map((f) => `/courses/${courseId}/${year}/${f}`);
}

// 년도 폴더의 비디오 파일
function getVideos(courseId: string, year: string): string[] {
  const dir = path.join(process.cwd(), "public", "courses", courseId, year);
  return readDir(dir)
    .filter((f) => VID_EXT.test(f))
    .sort()
    .map((f) => `/courses/${courseId}/${year}/${f}`);
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
                  <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
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
    yearsWithFiles: course.years.map((y) => {
      // 프로젝트 메타데이터가 있으면 해당 폴더에서 슬라이드 로딩
      const projectFolders = getProjectFolders(course.id, y.year);
      const metaProjects = y.projects || [];

      // 메타가 있는 프로젝트 먼저, 없으면 폴더명을 제목으로 사용
      const projectsWithSlides = projectFolders.map((folder) => {
        const meta = metaProjects.find((m) => m.folder === folder);
        return {
          title: meta?.title || folder.replace(/[-_]/g, " "),
          students: meta?.students || "",
          description: meta?.description || "",
          slides: getProjectSlides(course.id, y.year, folder),
          videos: getProjectVideos(course.id, y.year, folder),
        };
      });

      return {
        ...y,
        images: getRootImages(course.id, y.year),
        videos: getVideos(course.id, y.year),
        projects: projectsWithSlides,
      };
    }),
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
