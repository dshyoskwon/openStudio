import Link from "next/link";
import { courses } from "@/data/courses";

const courseStyles: Record<string, { icon: string; bg: string; border: string }> = {
  "interface-design": {
    icon: "text-emerald-500",
    bg: "bg-emerald-50 group-hover:bg-emerald-100",
    border: "border-emerald-100",
  },
  "interaction-design": {
    icon: "text-purple-500",
    bg: "bg-purple-50 group-hover:bg-purple-100",
    border: "border-purple-100",
  },
  "kmu-alpha": {
    icon: "text-yellow-500",
    bg: "bg-yellow-50 group-hover:bg-yellow-100",
    border: "border-yellow-100",
  },
};

function getCourseStyle(id: string) {
  return (
    courseStyles[id] ?? {
      icon: "text-gray-700",
      bg: "bg-gray-50 group-hover:bg-white",
      border: "border-gray-100",
    }
  );
}

function CourseIcon({ id }: { id: string }) {
  const { icon } = getCourseStyle(id);
  const base = `w-10 h-10 ${icon}`;
  if (id === "interface-design") {
    return (
      <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="1.5" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="9" x2="9" y2="20" />
        <line x1="12" y1="13" x2="18" y2="13" />
        <line x1="12" y1="16" x2="16" y2="16" />
      </svg>
    );
  }
  if (id === "interaction-design") {
    return (
      <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0" />
        <circle cx="12" cy="18" r="1.5" />
      </svg>
    );
  }
  if (id === "kmu-alpha") {
    return (
      <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 8c-4 0-6 2.5-6 4.5S11 17 14 17c1.5 0 2.5-.7 3-1.5" />
        <path d="M18 8l-2 9" />
      </svg>
    );
  }
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="1.5" />
    </svg>
  );
}

export default function CoursesPage() {
  const allCourses = [
    ...courses.map((c) => ({ ...c, href: `/courses/${c.id}` })),
    {
      id: "kmu-alpha",
      title: "KMU Alpha Project",
      description: "국민대학교 알파 프로젝트로 진행된 학생 주도 프로젝트입니다.",
      href: "/courses/kmu-alpha",
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
            {/* Icon */}
            <div
              className={`w-20 h-20 rounded-sm border flex items-center justify-center shrink-0 transition-colors ${getCourseStyle(course.id).bg} ${getCourseStyle(course.id).border}`}
            >
              <CourseIcon id={course.id} />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <h2 className="text-lg font-bold group-hover:underline">
                {course.title}
              </h2>
              <p className="text-sm text-gray-500 mt-0.5 line-clamp-3 leading-snug">
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
