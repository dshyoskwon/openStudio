export default function CoursesPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="border-b border-black pb-4">
        <h1 className="text-3xl font-bold uppercase tracking-widest">Courses</h1>
      </header>

      <div className="space-y-12">
        <section>
          <h2 className="text-xl font-bold mb-6 bg-gray-50 p-2 inline-block">2024 Spring</h2>
          <div className="grid gap-6">
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-sm transition-shadow">
              <h3 className="text-lg font-bold mb-2">Interaction Design Studio 1</h3>
              <p className="text-gray-600 mb-4 text-sm">
                기초 인터랙션 원리를 학습하고 아두이노와 센서를 활용한 피지컬 컴퓨팅 입문.
              </p>
              <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded">Undergraduate</span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-6 bg-gray-50 p-2 inline-block">2023 Fall</h2>
          <div className="grid gap-6">
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-sm transition-shadow">
              <h3 className="text-lg font-bold mb-2">Advanced Prototyping</h3>
              <p className="text-gray-600 mb-4 text-sm">
                디지털 패브리케이션 도구를 활용한 고해상도 프로토타이핑 심화 과정.
              </p>
              <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded">Graduate</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}


