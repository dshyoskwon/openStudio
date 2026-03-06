import Image from "next/image";

export default function AmbientIntelligenceContent() {
  return (
    <div className="space-y-10 mt-2">
      {/* 이미지 두 장 나란히 */}
      <div className="flex gap-[2px]">
        <div className="relative flex-1 min-w-0">
          <Image
            src="/images/projects/ambientAgent/aA_01.jpg"
            alt="Ambient Agent 01"
            width={1280}
            height={960}
            className="w-full h-auto object-cover rounded-sm"
          />
        </div>
        <div className="relative flex-1 min-w-0">
          <Image
            src="/images/projects/ambientAgent/aA_02.jpg"
            alt="Ambient Agent 02"
            width={1280}
            height={960}
            className="w-full h-auto object-cover rounded-sm"
          />
        </div>
      </div>

      {/* 프로젝트 명 */}
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">
          프로젝트 명
        </h2>
        <p className="text-sm leading-relaxed text-gray-700">
          Ambient Agents: 사용자 중심 제품-인터페이스 프로토타이핑 및 디자인
        </p>
      </section>

      {/* 프로젝트 목표 */}
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">
          프로젝트 목표
        </h2>
        <p className="text-sm leading-relaxed text-gray-700">
          사용자의 주거 환경 속에서 자연스럽게 존재하며 정보를 전달하는 사물 에이전트를 기획하고
          제품-인터페이스의 통합 디자인을 실현하는 것이다. 특히 기술 기반의 실물 제품과 연동되는
          모바일 애플리케이션의 정교한 인터랙션을 중심으로 디자인하며, ProtoPie를 활용한 고정밀
          프로토타입 제작을 통해 실질적 사용자 경험을 시뮬레이션한다.
        </p>
      </section>

      {/* 프로젝트 내용 */}
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">
          프로젝트 내용
        </h2>
        <div className="space-y-6 text-sm leading-relaxed text-gray-700">
          {/* 1 */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">
              Ambient Interface 및 IoT 제품에 대한 선행 연구 및 사례 분석
            </h3>
            <ul className="list-disc list-inside space-y-0.5 text-gray-600">
              <li>사물형 인터페이스(Ambient UI)의 정의, 동향, 사례를 조사</li>
              <li>IoT 기반 제품 및 사용자와의 상호작용 방식 분석</li>
            </ul>
          </div>

          {/* 2 */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">
              사용자 관찰 및 요구조사 기반 기획
            </h3>
            <ul className="list-disc list-inside space-y-0.5 text-gray-600">
              <li>일상 속 잠재적인 니즈를 발굴하기 위한 사용자 인터뷰 및 설문</li>
              <li>사용자 페르소나 및 사용 시나리오 개발</li>
            </ul>
          </div>

          {/* 3 */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">
              제품-앱 통합 시나리오 설계 및 인터페이스 프로토타이핑
            </h3>
            <ul className="list-disc list-inside space-y-0.5 text-gray-600">
              <li>IoT 제품의 기능 흐름과 연동된 앱 서비스 설계</li>
              <li>ProtoPie를 활용한 모바일 앱 인터페이스의 인터랙션 시뮬레이션 및 테스트</li>
              <li>제품과 앱 간 데이터 흐름 및 사용자 경험 연계 구조화</li>
            </ul>
          </div>

          {/* 4 */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">
              프로토타입 제작 및 피드백 루프 설계
            </h3>
            <ul className="list-disc list-inside space-y-0.5 text-gray-600">
              <li>Arduino 기반 제품 기능 구현 (센서, LED, 모터 등)</li>
              <li>ProtoPie와 실제 디바이스를 연동한 시연 가능 프로토타입 개발</li>
              <li>사용자 테스트 및 인터페이스 개선</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
