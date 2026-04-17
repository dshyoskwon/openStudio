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
  students?: string; // 해당 연도 수강생 목록
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
      {
        year: "2022",
        projects: [
          {
            folder: "cashwalk",
            title: "Cashwalk Renewal",
            students: "박성현, 장상훈, 허우민, 김윤석, 정해진",
            description: "Redesigning the Cashwalk app interface to improve user engagement. The project focuses on enhancing the reward system, health tracking, and navigation through user research and iterative prototyping.",
          },
          {
            folder: "peapod",
            title: "Peapod",
            students: "최은영, 강형구, 박채린, 임영헌, 강수정",
            description: "A smart food sharing application service for local communities. The app enables neighbors to share surplus food, reducing waste while building community connections.",
          },
          {
            folder: "Mohaji",
            title: "Mohaji",
            students: "강동흔, 강병준, 김장현, 이창준, 풍제석",
            description: "",
          },
          {
            folder: "VeganChallenge",
            title: "Vegan Challengers",
            students: "류기명, 이수민, 장은정, 조유진, 한효임",
            description: "",
          },
          {
            folder: "WeBus",
            title: "WeBus",
            students: "강병찬, 신예지, 이은수, 임수현, 최민재",
            description: "",
          },
        ],
      },
      {
        year: "2021",
        projects: [
          {
            folder: "AI_Speaker",
            title: "Sleepers",
            students: "김선호, 서정웅, 임정모, 박혜원",
            description: "Designing a sleep improvement service using AI speakers. The service leverages IoT technology to analyze individual sleep patterns and provides personalized solutions through a mobile interface. The design was validated through usability testing.",
          },
          {
            folder: "Camera",
            title: "Security Camera",
            students: "이승희, 류해찬, 이정훈, 김다솔, 이은유",
            description: "Designing a body camera user interface for security applications. The project explores intuitive controls and real-time monitoring features through user research and prototyping.",
          },
          {
            folder: "RobotCleaner",
            title: "Robot Cleaner",
            students: "김윤호, 김정은, 남경선, 이시현, 장현수",
            description: "Designing a robot vacuum cleaner interface with smart home integration. The project includes features such as privacy zones, scheduled cleaning, and lost item tracking through smart shelves.",
          },
          {
            folder: "SmartTV",
            title: "Samsung SmartThings & Smart TV",
            students: "윤종훈, 김민석, 진개, 문정연, 신채이, 이정수",
            description: "Designing a unified interface for Samsung SmartThings and Smart TV with Smart Refrigerator integration. The project focuses on seamless IoT device control and cross-device user experiences.",
          },
          {
            folder: "SmartWatch",
            title: "Smart Watch & Electric Kickboard",
            students: "김나영, 김소연, 정승은, 정채영, 정해찬",
            description: "Designing a smart watch interface for electric kickboard riders. The project includes a companion smart helmet design, with features for navigation, safety alerts, and ride management.",
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
      {
        year: "2022",
        students: "강병찬, 장현수, 강병준, 신수범, 원가은, 풍제석, 성기종, 강진서, 박채린, 임영현, 이민선, 강수정, 신찬희, 이수민, 이은수, 보넷 알렉시, 피톤 에노라, 곤잘레스 위니 다니엘라, 데 라 자마 세포라",
        projects: [
          {
            folder: "Mini-Project",
            title: "Mini Project",
            students: "",
            description: "인터랙션 디자인 기초를 습득한 후에 아두이노와 기본적인 센서 및 액츄에이터를 활용하여 일상 생활에서 필요한 간단한 제품 아이디어를 제안합니다.",
          },
          {
            folder: "EscpaeRoom",
            title: "Escape Room Project",
            students: "",
            description: "인터랙션 디자인 수업의 최종 과제로서, 방탈출 게임을 만드는 프로젝트이다. 학생들은 그룹 별로 방의 컨셉을 개발하고 3개의 인터랙티브 퀴즈를 만들어 방탈출 게임을 디자인한다.",
          },
        ],
      },
    ],
  },
];
