export type ProjectType = "Industry Project" | "Research Project" | "Incubating" | "Visualizing Senses";

export type Project = {
  id: string;
  title: string;
  meta: string;
  type: ProjectType;
  description: string;
};

export const projects: Project[] = [
  {
    id: "ai-additive-manufacturing",
    title:
      "UX·UI Design of AI-driven Additive Manufacturing Process Monitoring Software",
    meta: "2024 • Interaction Design",
    type: "Industry Project",
    description:
      "AI를 활용한 적층 제조 공정 모니터링 소프트웨어의 사용자 인터페이스 및 경험 디자인 연구.",
  },
  {
    id: "smart-3d-printing-interface",
    title:
      "Designing User Experience for Industrial Machines",
    meta: "2023 • UX·UI Design",
    type: "Industry Project",
    description:
      "산업용 장비의 효율성과 생산성을 높이기 위한 사용자 친화적 인터페이스 디자인.",
  },
  {
    id: "savouring-slow-gifts",
    title: "Savouring Slow Gifts",
    meta: "2023 • Hybrid Gifting",
    type: "Research Project",
    description:
      "시각 장애인을 위한 새로운 형태의 햅틱 피드백 인터페이스 연구 및 프로토타이핑.",
  },
  {
    id: "gift-exchange-mr",
    title: "Gift Exchange in Mixed Reality",
    meta: "2024 • AI & Interaction",
    type: "Research Project",
    description:
      "생성형 인공지능을 활용하여 공간 경험을 실시간으로 재구성하는 인터랙티브 미디어 환경을 탐구합니다.",
  },
  {
    id: "ambient-intelligence",
    title: "Ambient Intelligence",
    meta: "2025 • Prototype",
    type: "Incubating",
    description:
      "일상 사물을 위한 센싱·피드백 모듈 키트를 개발하여, 학생들이 손쉽게 인터랙티브 오브젝트를 실험할 수 있도록 합니다.",
  },
  {
    id: "visualizing-all-senses",
    title: "감각의 시각화",
    meta: "2025 • Media Art & AI",
    type: "Visualizing Senses",
    description:
      "인간의 오감을 데이터화하여 시각적 예술로 재구성하는 실험적 프로젝트입니다. AI를 활용하여 소리, 촉각, 향기 등의 비시각적 요소를 역동적인 시각 매체로 변환합니다.",
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}



