import Link from "next/link";
import { courses } from "@/data/courses";

export default function CoursesPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="border-b border-black pb-4">
        <h1 className="text-3xl font-bold uppercase tracking-widest">
          Courses
        </h1>
      </header>

      <div className="grid gap-4">
        {courses.map((course) => (
          <Link
            key={course.id}
            href={`/courses/${course.id}`}
            className="group flex items-center justify-between border border-gray-200 rounded-sm px-6 py-5 hover:bg-gray-50 transition-colors"
          >
            <div>
              <h2 className="text-lg font-bold group-hover:underline">
                {course.title}
              </h2>
              <p className="text-sm text-gray-500 mt-1">{course.description}</p>
            </div>
            <svg
              className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors shrink-0 ml-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </Link>
        ))}

        {/* KMU Alpha Project */}
        <Link
          href="/courses/kmu-alpha"
          className="group flex items-center justify-between border border-gray-200 rounded-sm px-6 py-5 hover:bg-gray-50 transition-colors"
        >
          <div>
            <h2 className="text-lg font-bold group-hover:underline">
              KMU Alpha Project
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              국민대학교 알파 프로젝트로 진행된 학생 주도 프로젝트입니다.
            </p>
          </div>
          <svg
            className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors shrink-0 ml-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
