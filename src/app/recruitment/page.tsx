import Link from "next/link";

export default function RecruitmentPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="border-b border-black pb-4">
        <h1 className="text-3xl font-bold uppercase tracking-widest">Recruitment</h1>
        <p className="text-sm text-gray-500 mt-2">2026.03.23</p>
      </header>

      {/* Research Assistant */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">Research Assistant / 연구원 모집</h2>

        <p className="text-sm leading-relaxed text-gray-700">
          국민대학교 Open Research Studio &amp; Open Research Lab에서 함께 연구할 연구원을 모집합니다.
        </p>

        <div className="space-y-6">
          {/* 모집 분야 */}
          <div>
            <h3 className="text-sm font-bold mb-2">모집 분야</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-2">
              <li>Human-Computer Interaction (HCI)</li>
              <li>Human-Centered Design</li>
              <li>Creative Technology</li>
              <li>Visual Communication / Graphic Design</li>
            </ul>
          </div>

          {/* 지원 자격 */}
          <div>
            <h3 className="text-sm font-bold mb-2">지원 자격</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-2">
              <li>석사 또는 박사 과정 입학 예정자 혹은 재학생</li>
              <li>관련 분야 연구 경험 또는 포트폴리오 보유자</li>
              <li>자기주도적 연구 능력 및 협업 역량</li>
            </ul>
          </div>

          {/* 우대 사항 */}
          <div>
            <h3 className="text-sm font-bold mb-2">우대 사항</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-2">
              <li>HCI/UX 관련 학회 논문 게재 경험</li>
              <li>프로토타이핑 도구 활용 능력 (Figma, Arduino, Unity 등)</li>
              <li>프로그래밍 역량 (Python, JavaScript/TypeScript 등)</li>
            </ul>
          </div>

          {/* 제출 서류 */}
          <div>
            <h3 className="text-sm font-bold mb-2">제출 서류</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-2">
              <li>이력서 (CV)</li>
              <li>포트폴리오 또는 연구 계획서</li>
              <li>자기소개서 (자유 형식)</li>
            </ul>
          </div>

          {/* 문의 */}
          <div>
            <h3 className="text-sm font-bold mb-2">문의</h3>
            <p className="text-sm text-gray-700">
              <a href="mailto:hyosun.kwon@kookmin.ac.kr" className="underline underline-offset-2 hover:text-black">
                hyosun.kwon@kookmin.ac.kr
              </a>
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-black/10 pt-6">
        <Link
          href="/participants"
          className="text-sm text-gray-500 hover:text-black transition-colors"
        >
          &larr; Back to Members
        </Link>
      </div>
    </div>
  );
}
