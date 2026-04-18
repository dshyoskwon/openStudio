import Link from "next/link";
import { notFound } from "next/navigation";
import { courses } from "@/data/courses";
import { projects } from "@/app/projects/data";
import manifest from "@/data/course-manifest.json";
import CourseTabs from "../CourseTabs";

type ManifestProject = { slides: string[]; videos: string[] };
type ManifestCategory = { projects: Record<string, ManifestProject> };
type ManifestYear = {
  images: string[];
  videos: string[];
  projects: Record<string, ManifestProject>;
  categories?: Record<string, ManifestCategory>;
};
type Manifest = {
  courses: Record<string, Record<string, ManifestYear>>;
  thumbnails: Record<string, string>;
};

const courseManifest = (manifest as Manifest).courses;

export function generateStaticParams() {
  return [
    ...courses.map((c) => ({ id: c.id })),
    { id: "kmu-alpha" },
  ];
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

  const courseFiles = courseManifest[course.id] || {};

  const buildProjects = (
    metaList: {
      folder: string;
      title: string;
      students: string;
      description: string;
      layout?: "default" | "grid";
    }[],
    manifestProjects: Record<string, ManifestProject>,
  ) => {
    const allFolders = Object.keys(manifestProjects);
    const metaOrder = metaList.map((m) => m.folder);
    const remaining = allFolders.filter((f) => !metaOrder.includes(f)).sort();
    const folderNames = [...metaOrder.filter((f) => allFolders.includes(f)), ...remaining];
    return folderNames.map((folder) => {
      const meta = metaList.find((m) => m.folder === folder);
      const files = manifestProjects[folder];
      return {
        title: meta?.title || folder.replace(/[-_]/g, " "),
        students: meta?.students || "",
        description: meta?.description || "",
        slides: files.slides,
        videos: files.videos,
        layout: meta?.layout,
      };
    });
  };

  const courseData = {
    ...course,
    yearsWithFiles: course.years.map((y) => {
      const yearFiles =
        courseFiles[y.year] || { images: [], videos: [], projects: {}, categories: {} };
      const metaProjects = y.projects || [];
      const metaCategories = y.categories || [];

      const projectsWithSlides = buildProjects(metaProjects, yearFiles.projects);

      // Build categories: preserve metadata order, then append any unreferenced category folders
      const manifestCategories = yearFiles.categories || {};
      const catOrder = metaCategories.map((c) => c.id);
      const extraCats = Object.keys(manifestCategories)
        .filter((c) => !catOrder.includes(c))
        .sort();
      const categoryIds = [
        ...catOrder.filter((c) => manifestCategories[c]),
        ...extraCats,
      ];
      const categories = categoryIds.map((id) => {
        const meta = metaCategories.find((c) => c.id === id);
        const catManifest = manifestCategories[id];
        return {
          id,
          label: meta?.label || id,
          projects: buildProjects(meta?.projects || [], catManifest.projects),
        };
      });

      return {
        ...y,
        images: yearFiles.images,
        videos: yearFiles.videos,
        projects: projectsWithSlides,
        categories,
      };
    }),
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="border-b border-black pb-4">
        <h1 className="text-3xl font-bold uppercase tracking-widest">
          {course.title}
        </h1>
      </header>

      {course.intro && course.intro.length > 0 && (
        <section className="space-y-3 text-sm text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-4">
          {course.intro.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </section>
      )}

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
