export type ProjectType = "Industry Project" | "Research Project" | "Incubating";

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
      "도시 환경에서 시민들의 행동 패턴을 분석하여 실시간으로 형태가 변형되는 스마트 벤치 프로젝트.",
  },
  {
    id: "smart-3d-printing-interface",
    title:
      "Designing User Experience for Industrial Machines",
    meta: "2023 • UX·UI Design",
    type: "Industry Project",
    description:
      "Designing user-friendly interfaces for industrial machines and equipment to enhance productivity and efficiency.",
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
    title: "언어의 시각화",
    meta: "2025 • Internal Tool",
    type: "Incubating",
    description:
      "프로젝트 모집, 아카이빙, 참여자 매칭 등을 하나의 워크플로우로 통합하는 스튜디오 운영 시스템을 설계·개발하는 중입니다.",
  },
  {
    id: "digital-twin-city",
    title: "Digital Twin City Interface",
    meta: "2025 • Research",
    type: "Research Project",
    description:
      "도시의 실시간 데이터를 가시화하고 제어할 수 있는 디지털 트윈 인터페이스 설계 연구입니다.",
  },
  {
    id: "speculative-design-workshop",
    title: "Speculative Design Workshop",
    meta: "2024 • Education",
    type: "Incubating",
    description:
      "미래 시나리오를 바탕으로 기술의 사회적 영향을 탐구하는 비판적 디자인 워크숍 시리즈입니다.",
  },
  {
    id: "human-ai-collaboration",
    title: "Human-AI Collaboration Tool",
    meta: "2025 • AI Tool",
    type: "Incubating",
    description:
      "디자이너와 AI가 협업하여 창의적인 아이디어를 발전시킬 수 있는 인터랙티브 툴킷을 개발합니다.",
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}



