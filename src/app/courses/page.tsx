import Link from "next/link";
import Image from "next/image";
import { courses } from "@/data/courses";
import manifest from "@/data/course-manifest.json";

const thumbnails = manifest.thumbnails as Record<string, string>;

export default function CoursesPage() {
  const allCourses = [
    ...courses.map((c) => ({ ...c, href: `/courses/${c.id}`, thumb: thumbnails[c.id] || null })),
    {
      id: "kmu-alpha",
      title: "KMU Alpha Project",
      description: "국민대학교 알파 프로젝트로 진행된 학생 주도 프로젝트입니다.",
      href: "/courses/kmu-alpha",
      thumb: thumbnails["kmu-alpha"] || null,
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="border-b border-black pb-4">
        <h1 className="text-3xl font-bold uppercase tracking-widest">
          Courses
        </h1>
      </header>

      <div className="grid gap-4">
        {allCourses.map((course) => (
          <Link
            key={course.id}
            href={course.href}
            className="group flex items-center gap-5 border border-gray-200 rounded-sm px-5 py-4 hover:bg-gray-50 transition-colors"
          >
            {/* Thumbnail */}
            <div className="w-20 h-20 rounded-sm overflow-hidden bg-gray-100 shrink-0">
              {course.thumb ? (
                <Image
                  src={course.thumb}
                  alt={course.title}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-300 text-xs">
                  {course.title.charAt(0)}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <h2 className="text-lg font-bold group-hover:underline">
                {course.title}
              </h2>
              <p className="text-sm text-gray-500 mt-0.5 line-clamp-1">
                {course.description}
              </p>
            </div>

            {/* Arrow */}
            <svg
              className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </Link>
        ))}
      </div>
    </div>
  );
}
