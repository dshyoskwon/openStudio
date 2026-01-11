export type ProjectType = "Industry Project" | "Research Project" | "Incubating";

export type Project = {
  id: string;
  title: string;
  meta: string;
  type: ProjectType;
  description: string;
  year: number;
  isStudentProject?: boolean;
};

export const projects: Project[] = [
  {
    id: "ai-additive-manufacturing",
    title:
      "UX·UI Design of AI-driven Additive Manufacturing Process Monitoring Software",
    meta: "2026 • HMI Design",
    type: "Industry Project",
    description:
      "3D 프린터의 공정 및 모니터링 소프트웨어 디자인 및 사용자 경험 설계.",
    year: 2026,
  },
  {
    id: "smart-3d-printing-interface",
    title:
      "Designing User Experience for Industrial Machines",
    meta: "2023 • UX·UI Design",
    type: "Industry Project",
    description:
      "Designing user-friendly interfaces for industrial machines and equipment to enhance productivity and efficiency.",
    year: 2023,
  },
  {
    id: "savouring-slow-gifts",
    title: "Savouring Slow Gifts",
    meta: "2024 • Hybrid Gifting",
    type: "Research Project",
    description:
      "하이브리드 선물이 사람들 간에 어떻게 교환되는지 살펴보고 디지털 선물이 소비되는 방식을 현장 연구를 통해 탐구합니다.",
    year: 2024,
  },
  {
    id: "gift-exchange-mr",
    title: "Gift Exchange in Mixed Reality",
    meta: "2025 • MR & Interaction",
    type: "Research Project",
    description:
      "혼합현실 환경에서의 디지털 선물 교환 경험을 탐구합니다.",
    year: 2025,
  },
  {
    id: "ambient-intelligence",
    title: "Ambient Intelligence",
    meta: "2025 • KMU Alpha Project",
    type: "Incubating",
    description:
      "일상 사물을 위한 센싱·피드백 인터페이스 설계 및 프로토타이핑.",
    year: 2025,
    isStudentProject: true,
  },
  {
    id: "visualizing-all-senses",
    title: "언어의 시각화",
    meta: "2025 • Internal Tool",
    type: "Research Project",
    description:
      "언어에 대한 사람들의 인식을 시각화하고 분석하여 언어의 의미를 이해합니다.",
    year: 2025,
  },
  {
    id: "resonance-between-hearing-and-the-deaf",
    title: "Resonance between Hearing and the Deaf",
    meta: "2024 • Research",
    type: "Research Project",
    description:
      "시각 장애인을 위한 새로운 형태의 햅틱 피드백 인터페이스 연구 및 프로토타이핑.",
    year: 2024,
    isStudentProject: true,
  },
  {
    id: "speculative-design-workshop",
    title: "Speculative Design Workshop",
    meta: "2024 • Education",
    type: "Incubating",
    description:
      "미래 시나리오를 바탕으로 기술의 사회적 영향을 탐구하는 비판적 디자인 워크숍 시리즈입니다.",
    year: 2024,
  },
  {
    id: "human-ai-collaboration",
    title: "Human-AI Collaboration Tool",
    meta: "2026 • AI Tool",
    type: "Incubating",
    description:
      "디자이너와 AI가 협업하여 창의적인 아이디어를 발전시킬 수 있는 인터랙티브 툴킷을 개발합니다.",
    year: 2026,
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}



