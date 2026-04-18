"use client";

import Image from "next/image";

type Component = {
  name: string;
  role: string;
};

type ScenarioStep = {
  step: string;
  label: string;
};

type Project = {
  id: string;
  title: string;
  student: string;
  tagline: string;
  intro: string;
  components?: Component[];
  scenario?: ScenarioStep[];
  designNote?: string;
  code?: string;
  videoEmbedUrl?: string;
  videoSrc?: string;
  externalLink?: { label: string; url: string };
  images?: string[];
};

const projects: Project[] = [
  {
    id: "Best",
    title: "Automatic Gas Valve Control System",
    student: "김시우 (Siwoo Kim)",
    tagline: "외출 후 '가스 잠갔나?' 불안감을 없애는 자동 잠금 시스템",
    intro:
      "외출 직후 가스 밸브를 제대로 잠갔는지 불안해하는 경험은 누구에게나 익숙합니다. 잠시 자리를 비우든 장기 외출을 하든, 가스를 잠근 기억이 뚜렷하지 않으면 외출 시간 내내 걱정과 불안에 시달리게 됩니다. 실제로 밸브를 닫지 않아 발생하는 가스 누출 사고(폭발·화재)는 매년 반복되고 있어, 안전을 위해 가스 밸브 잠금 상태를 확인하는 일은 필수적입니다.",
    components: [
      {
        name: "DHT11 Temperature & Humidity Sensor",
        role: "가스레인지 주변 온도를 감지하여 조리 시작(35°C 이상)을 인식합니다. 조리 종료 후 열이 식어 25°C로 떨어지면 조리가 끝난 것으로 판단하고, 잔열 사용을 고려해 3–5분의 대기 시간을 거쳐 완전히 종료 여부를 확인합니다.",
      },
      {
        name: "SG90 Servo Motor",
        role: "조리 종료가 확정되면 서보 모터가 90도 회전하여 가스 밸브를 자동으로 잠급니다. 정확한 각도 제어가 가능해 밸브 개폐에 적합합니다.",
      },
      {
        name: "Tact Switch",
        role: "사용자가 버튼을 누르면 서보 모터가 역방향으로 90도 회전하여 잠겨 있던 밸브를 엽니다.",
      },
      {
        name: "Red & Green LED",
        role: "장치의 작동 상태를 시각적으로 알립니다. 기본(잠금) 상태에서는 빨간 LED가, 사용 중에는 초록 LED가 점등되며, 대기 시간 동안에는 초록 LED가 깜빡여 사용자에게 스탠바이 모드임을 알립니다.",
      },
    ],
    scenario: [
      { step: "1", label: "버튼을 눌러 가스 밸브 열기" },
      { step: "2", label: "점화 — 조리 시작" },
      { step: "3", label: "조리 진행" },
      { step: "4", label: "센서가 특정 온도 감지" },
      { step: "5", label: "조리 종료 후 스탠바이 진입" },
      { step: "6", label: "온도 유지되면 밸브 자동 잠금" },
    ],
    videoSrc: "/courses/interaction-design/2024/ProductDesign/Best/best.mp4",
  },
  {
    id: "HyunDonghee-BinocularLamp",
    title: "Binocular Lamp",
    student: "현동희 (20181747 Donghee Hyun)",
    tagline: "책상을 톡 두드리면 그 자리를 비추는 탭-투-에임 램프",
    intro:
      "책상 램프의 빛이 책 표면에 반사되어 눈으로 튀어오르는 경험, 한 번쯤 겪어 보았을 것입니다. 빛이 책을 비춰주는 대신 거울처럼 반사되어, 한 줄을 읽기 위해 램프 각도를 어색하게 조정하거나 책 자체를 기울여야 합니다. 책상을 가볍게 두드리는 것만으로 램프가 그 지점을 향해 자동으로 기울어진다면 어떨까요?",
    components: [
      {
        name: "Capacitive Sensor",
        role: "책상 표면에 두 개의 터치 감응 영역을 심어, 손가락 접촉을 정확히 인식합니다. 초음파 센서처럼 의도치 않은 물체를 감지하거나 버튼처럼 물리적 접촉을 요구하지 않아, 자연스러운 인터랙션을 만들어 줍니다.",
      },
      {
        name: "Servo Motor",
        role: "두 개의 터치 영역 각각에 대응하는 각도로 램프 헤드를 회전시킵니다. 각 영역마다 고정된 각도를 매핑해 빛의 방향을 부드럽게 제어합니다.",
      },
    ],
    designNote:
      "사용자의 손짓을 따라가며 '바라보는' 램프의 모습이 마치 쌍안경을 닮아, 두 개의 원통이 한쪽 끝에서 만나고 다른 쪽 끝에서 살짝 벌어지는 쌍안경 형태로 최종 디자인하였습니다.",
    videoEmbedUrl: "https://www.youtube.com/embed/I4SWRN-4WwQ",
  },
  {
    id: "LeeYoungJi-ClappingLight",
    title: "Clap-Activated Light System Using Arduino",
    student: "이영지 (20200495)",
    tagline: "박수 소리로 조명을 켜고 끄는 핸즈프리 인터랙션",
    intro:
      "사운드 센서와 LED, 아두이노를 이용해 박수 소리로 조명을 토글할 수 있는 인터랙티브 조명 시스템입니다. 손을 쓸 수 없는 상황에서도 불을 껐다 켤 수 있는 편의성과 접근성을 확보하는 것이 목표입니다.",
    components: [
      {
        name: "Arduino Uno",
        role: "사운드 센서 데이터를 처리하고 LED를 제어하는 메인 마이크로컨트롤러.",
      },
      {
        name: "Sound Sensor",
        role: "주변 소리를 감지하는 모듈. 특정 임계값(본 프로젝트에서는 42)을 넘으면 아두이노에 신호를 전달해 박수를 인식합니다.",
      },
      {
        name: "LED",
        role: "박수에 반응해 켜짐/꺼짐 상태를 시각적으로 표시합니다.",
      },
      {
        name: "Resistor (330Ω)",
        role: "LED 보호를 위한 전류 제한 저항.",
      },
    ],
    designNote:
      "회로: 사운드 센서 VCC/GND → 아두이노 5V/GND, 센서 A0 → 아두이노 Analog A0, LED → Digital Pin 6 (330Ω 저항 직렬). 임계값 42는 본 센서와의 실험을 통해 결정했으며, 토글 후 delay(100)으로 한 번의 박수가 여러 번 감지되지 않도록 합니다.",
    code: `#define SS A0      // Sound sensor connected to A0
#define LED 6      // LED connected to pin 6
int SV = 0;        // sound sensor value
int light = 0;     // LED brightness (0 or 255)

void setup() {
  Serial.begin(9600);
  pinMode(LED, OUTPUT);
}

void loop() {
  SV = analogRead(SS);
  Serial.println(SV);

  if (SV > 42) {              // clap detected
    light = (light == 0) ? 255 : 0;
    analogWrite(LED, light);
    delay(100);               // debounce
  }
}`,
    videoSrc:
      "/courses/interaction-design/2024/ProductDesign/LeeYoungJi-ClappingLight/clapping-light.mp4",
  },
  {
    id: "SmartLittleGardener",
    title: "Smart Little Gardener",
    student: "",
    tagline: "바쁜 일상 속에서도 식물을 자동으로 돌봐주는 스마트 화분",
    intro:
      "식물을 키우는 일은 공간을 차분하게 만들어 주지만, 물을 언제 얼마나 줘야 하는지 챙기는 것은 꽤 큰 책임입니다. Smart Little Gardener는 토양 수분을 실시간으로 측정하여 필요할 때 자동으로 물을 공급하고, 물을 주는 동안 사용자가 좋아하는 멜로디를 재생해 식물 돌봄을 즐거운 경험으로 바꿔 줍니다.",
    components: [
      {
        name: "Soil Moisture Sensor",
        role: "토양의 수분 상태를 감지합니다. 센서 값이 설정된 임계값(예: 300) 이하로 떨어지면 급수가 필요한 상태로 판단합니다.",
      },
      {
        name: "Servo Motor",
        role: "수분 부족이 감지되면 급수 밸브를 자동으로 열어 정해진 양의 물을 공급합니다.",
      },
      {
        name: "LED",
        role: "토양이 건조해지면 LED를 깜빡여 사용자에게 시각적으로 알립니다.",
      },
      {
        name: "Piezo Buzzer",
        role: "급수가 이루어지는 동안 사용자가 선택한 멜로디를 재생해 감성적인 인터랙션을 만들어 줍니다.",
      },
    ],
    designNote:
      "디자인은 '자기 자신을 스스로 돌보는 작은 정원' 콘셉트로, 하단부에 물통·서보모터·토양 수분 센서를 배치하는 구조로 스케치했습니다. 바쁜 사용자(민주, 대학 4학년)의 시나리오: LED가 켜져 토양이 건조해진 것을 알리고, 다가가면 경쾌한 멜로디가 흐르며 자동으로 급수가 시작됩니다.",
    externalLink: {
      label: "View Tinkercad Sketch",
      url: "https://www.tinkercad.com/things/83QeJk23Eli-smart-little-gardener",
    },
    images: [
      "/courses/interaction-design/2024/ProductDesign/SmartLittleGardener/slide-2.jpg",
    ],
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="border border-gray-200 rounded-sm overflow-hidden bg-white">
      {/* Header */}
      <header className="px-6 pt-6 pb-4 border-b border-gray-100">
        <h3 className="text-lg font-bold tracking-tight">{project.title}</h3>
        {project.student && (
          <p className="text-xs text-gray-500 mt-1">{project.student}</p>
        )}
        <p className="text-sm text-gray-700 mt-2 italic">{project.tagline}</p>
      </header>

      <div className="px-6 py-5 space-y-6">
        {/* Intro */}
        <section>
          <p className="text-sm text-gray-800 leading-relaxed">
            {project.intro}
          </p>
        </section>

        {/* Components */}
        {project.components && project.components.length > 0 && (
          <section>
            <h4 className="text-[11px] uppercase tracking-wider text-gray-400 mb-2">
              Components
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.components.map((c) => (
                <div
                  key={c.name}
                  className="border border-gray-100 rounded-sm p-3 bg-gray-50/50"
                >
                  <div className="text-xs font-semibold">{c.name}</div>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    {c.role}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Scenario */}
        {project.scenario && project.scenario.length > 0 && (
          <section>
            <h4 className="text-[11px] uppercase tracking-wider text-gray-400 mb-2">
              User Scenario
            </h4>
            <ol className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {project.scenario.map((s) => (
                <li
                  key={s.step}
                  className="flex items-start gap-2 text-xs text-gray-700 border border-gray-100 rounded-sm px-3 py-2"
                >
                  <span className="text-gray-400 font-mono shrink-0">
                    #{s.step}
                  </span>
                  <span>{s.label}</span>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Design note */}
        {project.designNote && (
          <section>
            <h4 className="text-[11px] uppercase tracking-wider text-gray-400 mb-2">
              Design Note
            </h4>
            <p className="text-xs text-gray-700 leading-relaxed">
              {project.designNote}
            </p>
          </section>
        )}

        {/* Code */}
        {project.code && (
          <section>
            <h4 className="text-[11px] uppercase tracking-wider text-gray-400 mb-2">
              Arduino Code
            </h4>
            <pre className="text-[11px] bg-gray-900 text-gray-100 rounded-sm p-3 overflow-x-auto leading-relaxed">
              <code>{project.code}</code>
            </pre>
          </section>
        )}

        {/* Video embed (YouTube) */}
        {project.videoEmbedUrl && (
          <section>
            <h4 className="text-[11px] uppercase tracking-wider text-gray-400 mb-2">
              Prototype Video
            </h4>
            <div className="aspect-video rounded-sm overflow-hidden bg-black">
              <iframe
                src={project.videoEmbedUrl}
                className="w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </section>
        )}

        {/* Local video */}
        {project.videoSrc && (
          <section>
            <h4 className="text-[11px] uppercase tracking-wider text-gray-400 mb-2">
              Prototype Video
            </h4>
            <div className="aspect-video rounded-sm overflow-hidden bg-black">
              <video
                src={project.videoSrc}
                controls
                className="w-full h-full"
                preload="metadata"
              />
            </div>
          </section>
        )}

        {/* Images */}
        {project.images && project.images.length > 0 && (
          <section>
            <h4 className="text-[11px] uppercase tracking-wider text-gray-400 mb-2">
              Sketch
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {project.images.map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] bg-gray-100 rounded-sm overflow-hidden"
                >
                  <Image
                    src={src}
                    alt={`${project.title} sketch ${i + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* External link */}
        {project.externalLink && (
          <section>
            <a
              href={project.externalLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-gray-700 hover:text-black border border-gray-200 rounded-sm px-3 py-1.5"
            >
              <span>{project.externalLink.label}</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17L17 7M17 7H8M17 7v9" />
              </svg>
            </a>
          </section>
        )}
      </div>
    </article>
  );
}

export default function ProductDesign2024() {
  return (
    <div className="grid gap-6">
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  );
}
