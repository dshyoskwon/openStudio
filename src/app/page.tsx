import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col gap-16 pt-4">
      {/* 상단 섹션: 텍스트(좌) + 이미지(우) */}
      {/* lg:items-start로 변경하여 텍스트는 위에 붙고 이미지는 크게 펼쳐짐 */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        
        {/* 왼쪽: 텍스트 영역 (너비를 고정하거나 비율을 줄임) */}
        <div className="space-y-8 flex-shrink-0 lg:w-1/3 pt-4">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            Participate,<br />Make,<br />Research,<br />Experiment,<br />Grow.
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed">
            참여하고, 연구하고, 만들고, 실험하고, 성장하는<br />
            연구·제작 스튜디오
          </p>
        </div>

        {/* 오른쪽: 다이어그램 이미지 영역 (남은 공간 모두 차지) */}
        <div className="flex-1 w-full">
          {/* 이미지 비율에 맞춰 높이가 자동으로 결정되도록 변경 */}
          <div className="w-full">
            <Image 
              src="/images/ors_diagram01.png" 
              alt="Open Research Studio Process Diagram"
              width={1600}
              height={1200}
              className="w-full h-auto object-contain object-center lg:object-left-top" // 왼쪽 상단 기준 정렬
              priority
            />
          </div>
        </div>

      </div>

      {/* 메인 설명: 두 컬럼 아래 전체 폭으로 배치 */}
      <div className="pt-4 border-t border-black/10 w-full">
        <p className="text-lg md:text-xl leading-relaxed text-gray-800 max-w-3xl">
          <strong className="font-semibold">Open Research Studio</strong>는 기존의 전통적인 1인 교수 1개 연구실 고정 소속의 연구 방식에서 벗어나, 프로젝트 참여 기반의 연구·제작 스튜디오입니다. 프로젝트 단위로 팀을 구성하여 
          사용자 경험을 탐구하고, 아이디어를 구체적인 프로토타입으로 실현하는 과정을 경험할 수 있습니다. <br /> 
          <br /> 
          
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 max-w-3xl">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd0if226PVUjIkSs3qKiS1dA4XswxEgR2KF1ajjwfyKVuRATA/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-2 rounded-lg border border-black/10 px-4 py-5 text-left transition bg-[#f7f5ff] hover:border-black hover:bg-black hover:text-white"
          >
            <span className="text-sm font-semibold uppercase tracking-wide">Apply My Project</span>
            <p className="text-sm leading-relaxed">
              자신의 아이디어나 진행 중인 프로젝트를 스튜디오 팀과 함께 확장하고 싶다면 이 링크를 통해 제안서를 제출하세요.
            </p>
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScOjldxt0p4zOoT3kYWe7Fb0Ay7YtQMH78ESD4eQAdXUcr0xA/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-2 rounded-lg border border-black/10 px-4 py-5 text-left transition bg-[#f0fff5] hover:border-black hover:bg-black hover:text-white"
          >
            <span className="text-sm font-semibold uppercase tracking-wide">Apply for Studio</span>
            <p className="text-sm leading-relaxed">
              스튜디오 프로젝트에 참여하고 싶은 학생은 이 링크에서 간단한 지원서를 작성해 주세요.
            </p>
          </a>
        </div>
      </div>

      {/* 하단 추가 설명 섹션 */}
      <div className="h-px w-full bg-black/10 my-4" />

      <div className="space-y-8 text-lg leading-relaxed text-gray-800 max-w-4xl">
        <p>
          디자인과 기술, 인공지능, 인터랙션을 중심으로 
          실험·프로토타이핑·연구를 통합적으로 수행하며, 
          참여 학생은 프로젝트 단위로 팀을 구성하여 
          <span className="bg-black text-white px-2 py-0.5 mx-1 rounded-sm text-sm font-bold">만들고</span> → 
          <span className="bg-black text-white px-2 py-0.5 mx-1 rounded-sm text-sm font-bold">실험하고</span> → 
          <span className="bg-black text-white px-2 py-0.5 mx-1 rounded-sm text-sm font-bold">진화시키는</span> 
          과정을 경험합니다.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 pt-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Project Based</h3>
            <p className="text-sm text-gray-600">
              기존의 고정적 대학 연구실 방식에서 벗어나 
              아이디어나 프로젝트 참여 의지를 갖은 학생들이 
              자유롭게 드나들 수 있는 구조
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Evolution</h3>
            <p className="text-sm text-gray-600">
              작은 아이디어가 경험으로 진화하는 공간.
              프로젝트 기반으로 디자인과 연구가 만나는 곳.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
