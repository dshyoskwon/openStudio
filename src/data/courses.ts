// 과목별 메타데이터
// 폴더 기반 자동 로딩: public/courses/{course}/{year}/{project}/ 에 이미지를 넣으면 자동 반영.
// 썸네일: public/courses/{course}/thumbnail.jpg

export type ProjectMeta = {
  folder: string; // public/courses/{course}/{year}/{folder}/ 의 폴더명
  title: string;
  students: string;
  description: string;
};

export type CourseYear = {
  year: string;
  label?: string;
  figmaUrl?: string;
  videoUrl?: string;
  projects?: ProjectMeta[]; // Interface Design용 프로젝트 메타데이터
};

export type Course = {
  id: string;
  title: string;
  description: string;
  thumbnail?: string; // 썸네일 이미지 경로 (없으면 기본 placeholder)
  type: "slideshow" | "video" | "list";
  years: CourseYear[];
};

export const courses: Course[] = [
  {
    id: "interface-design",
    title: "Interface Design",
    description:
      "인터페이스 디자인의 기초부터 심화까지, 학생들의 프로젝트 결과물을 소개합니다.",
    type: "slideshow",
    years: [
      {
        year: "2026",
        // projects: [
        //   { folder: "sample-project", title: "Sample Project", students: "김OO, 이OO", description: "프로젝트 설명" },
        // ],
      },
      { year: "2025" },
      { year: "2024" },
      { year: "2023" },
      { year: "2022" },
      {
        year: "2021",
        projects: [
          {
            folder: "AI_Speaker",
            title: "Sleepers",
            students: "김선호, 서정웅, 임정모, 박혜원",
            description: "Designing a sleep improvement service using AI speakers: leveraging IoT technology to analyze individual sleep patterns and issues, the service provides personalized solutions through a mobile interface, validated via usability testing.",
          },
        ],
      },
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
