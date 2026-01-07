import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col gap-10 pt-2">
      {/* 상단 섹션: 텍스트(좌) + 이미지(우) */}
      {/* lg:items-start로 변경하여 텍스트는 위에 붙고 이미지는 크게 펼쳐짐 */}
      <div className="flex flex-col lg:flex-row lg:gap-16">
        
        {/* 왼쪽: 텍스트 영역 (너비를 고정하거나 비율을 줄임) */}
        <div className="space-y-4 flex-shrink-0 lg:w-1/3 pt-2">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            Participate,<br />Make,<br />Research,<br />Experiment,<br />Grow.
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed mb-0">
            참여하고, 연구하고, 만들고, 실험하고, 성장하는<br />
            연구·제작 스튜디오
          </p>
        </div>

        {/* 오른쪽: 다이어그램 이미지 영역 (남은 공간 모두 차지) */}
        <div className="flex-1 w-full">
          {/* 이미지 높이 과도하게 커지지 않도록 최대 높이를 제한 */}
          <div className="relative w-full aspect-[4/3] lg:max-h-[420px]">
             <Image 
              src="/images/diagram.png" 
              alt="Open Research Studio Process Diagram"
              fill
              className="object-contain object-center lg:object-left-top" // 왼쪽 상단 기준 정렬
              priority
            />
          </div>
        </div>

      </div>

      {/* 좌우 컬럼 전체에 걸친 설명 블록 */}
      <div className="w-full border-t border-black/10 pt-10">
        <div className="max-w-5xl text-sm leading-relaxed text-gray-800 space-y-3">
          <p>
            <strong className="font-semibold">Open Research Studio</strong>는 전통적인 1인 교수 지도 방식의 연구실 체제에서 벗어나 
            본인이 자율적으로 프로젝트를 진행할 수 있는 스튜디오 환경을 제공합니다. 
            참여 교수는 프로젝트 성격에 따라 학생을 모집하고, 참여 학생은 프로젝트 단위로 팀을 구성해 
            만들고 → 실험하고 → 진화시키는 과정을 경험합니다.
          </p>
          <p>
            아이디어가 연구 프로젝트로 발전하여 논문·전시·프로토타입으로 이어지는 전 과정을 스튜디오 안에서 경험할 수 있습니다.
          </p>
        </div>
      </div>

      {/* 하단 추가 설명 섹션 */}
      <div className="h-px w-full bg-black/10 my-4" />

      <div className="space-y-6 text-lg leading-relaxed text-gray-800 max-w-4xl">
        <p>
          디자인과 기술, 인공지능, 인터랙션을 중심으로 
          실험·프로토타이핑·연구를 통합적으로 수행하며, 
          참여 학생은 프로젝트 단위로 팀을 구성하여 
          <span className="bg-black text-white px-2 py-0.5 mx-1 rounded-sm text-sm font-bold">만들고</span> → 
          <span className="bg-black text-white px-2 py-0.5 mx-1 rounded-sm text-sm font-bold">실험하고</span> → 
          <span className="bg-black text-white px-2 py-0.5 mx-1 rounded-sm text-sm font-bold">진화시키는</span> 
          과정을 경험합니다.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 pt-6">
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
