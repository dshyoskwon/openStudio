export default function AboutPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="border-b border-black pb-4">
        <h1 className="text-3xl font-bold uppercase tracking-widest">About</h1>
      </header>
      <div className="prose max-w-none">
        <p className="text-lg leading-relaxed text-gray-800">
          Open Research Studio는 디자인, 기술, 인문학의 경계를 넘나드는 융합 연구소입니다.
          우리는 '만들면서 생각하기(Thinking through Making)'를 실천하며,
          추상적인 아이디어를 구체적인 프로토타입으로 실현하는 과정을 중요하게 생각합니다.
        </p>
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-4">Vision</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Interdisciplinary Collaboration (학제간 협업)</li>
            <li>Open Source & Open Process (오픈 소스 및 공유)</li>
            <li>Social Impact through Design (디자인을 통한 사회적 영향)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}


