// 과목별 메타데이터. Figma URL이 설정되면 임베드로 표시됩니다.
// 폴더 기반 자동 로딩: public/courses/{course}/{year}/ 에 파일을 넣으면 자동 반영.

export type CourseYear = {
  year: string;
  label?: string; // e.g. "Team-Team Capstone" for special semesters
  figmaUrl?: string; // Figma embed URL (optional)
  videoUrl?: string; // External video URL — if not set, scans folder for .mp4
};

export type Course = {
  id: string;
  title: string;
  description: string;
  type: "slideshow" | "video" | "list";
  years: CourseYear[];
};

export const courses: Course[] = [
  {
    id: "interface-design",
    title: "Interface Design",
    description:
      "인터페이스 디자인의 기초부터 심화까지, 학생들의 프로젝트 결과물을 슬라이드쇼로 소개합니다.",
    type: "slideshow",
    years: [
      { year: "2026" },
      { year: "2025" },
      { year: "2024" },
      { year: "2023" },
      { year: "2022" },
      { year: "2021" },
    ],
  },
  {
    id: "interaction-design",
    title: "Interaction Design",
    description:
      "인터랙션 디자인 수업의 결과물을 영상으로 소개합니다.",
    type: "video",
    years: [
      { year: "2026" },
      { year: "2025" },
      { year: "2024" },
      { year: "2023", label: "Team-Team Capstone" },
      { year: "2022" },
    ],
  },
];

// KMU Alpha Project는 projects data에서 isStudentProject로 필터링
