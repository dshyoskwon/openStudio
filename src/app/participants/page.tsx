import Image from "next/image";

export default function ParticipantsPage() {
  return (
    <div className="space-y-5 animate-in fade-in duration-500">
      <header className="border-b border-black pb-4">
        <h1 className="text-3xl font-bold uppercase tracking-widest">Participants</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {/* Director */}
        <div className="col-span-full mb-10">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-6">
            Director
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-[clamp(8rem,18vw,14rem)] h-[clamp(8rem,18vw,14rem)] rounded-full overflow-hidden bg-gray-200 flex-shrink-0 shadow-lg transition-all duration-300">
              <Image
                src="/images/participants/profile_HyosK.jpg"
                alt="Portrait of Director Hyosun Kwon"
                fill
                sizes="(max-width: 640px) 60vw, (max-width: 1024px) 35vw, 18vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="text-center md:text-left max-w-2xl space-y-2">
              <div className="flex flex-col md:flex-row md:items-baseline md:gap-3">
                <h3 className="text-xl md:text-xl font-bold leading-tight">Hyosun Kwon</h3>
                <span className="text-base font-light text-gray-600">(Associate Professor)</span>
              </div>
              <p className="text-gray-600 text-lg">Principal Investigator</p>
              <p className="text-sm text-gray-500">hyosun.kwon@kookmin.ac.kr</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Human-Computer Interaction / Human-Centered Design / Creative Technology / Studio Practice
              </p>
            </div>
          </div>
        </div>

        {/* Researchers */}
        <div className="col-span-full">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-6">
            Researchers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* First researcher: JY Lee */}
            <div className="text-center md:text-left">
              <div className="w-full aspect-square mb-3 rounded-lg overflow-hidden bg-gray-100 grayscale hover:grayscale-0 transition-all">
                <Image
                  src="/images/participants/JYlee.jpeg"
                  alt="Portrait of JY Lee"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold">Junyong Lee</h3>
              <p className="text-xs text-gray-500">Researcher / Ph.D Student</p>
            </div>

            {/* Second researcher: BS Lee */}
            <div className="text-center md:text-left">
              <div className="w-full aspect-square mb-3 rounded-lg overflow-hidden bg-gray-100 grayscale hover:grayscale-0 transition-all">
                <Image
                  src="/images/participants/BSlee.JPG"
                  alt="Portrait of BS Lee"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold">Beomseok Lee</h3>
              <p className="text-xs text-gray-500">Researcher / MA Student</p>
            </div>

            {/* Third researcher: JH Kang */}
            <div className="text-center md:text-left">
              <div className="w-full aspect-square mb-3 rounded-lg overflow-hidden bg-gray-100 grayscale hover:grayscale-0 transition-all">
                <Image
                  src="/images/participants/JHKang.jpg"
                  alt="Portrait of JH Kang"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold">Jihyo Kang</h3>
              <p className="text-xs text-gray-500">Researcher / MA Student</p>
            </div>

            {/* Placeholder cards */}
            {[1, 2].map((i) => (
              <div key={i} className="text-center md:text-left">
                <div className="w-full aspect-square bg-gray-100 mb-3 rounded-lg grayscale hover:grayscale-0 transition-all" />
                <h3 className="font-bold">Student Name</h3>
                <p className="text-xs text-gray-500">Designer / BA Student</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Apply CTA */}
      <div className="border-t border-black/10 pt-8">
        <p className="text-base md:text-lg text-gray-800 mb-6">
          스튜디오에 합류하거나 진행 중인 프로젝트를 함께 확장하고 싶다면 아래 링크를 통해 지원서를 제출해 주세요.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 max-w-3xl">
          <a
            href="https://forms.gle/apply-my-project"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-2 rounded-lg border border-black/10 px-4 py-5 text-left transition bg-[#f7f5ff] hover:border-black hover:bg-black hover:text-white"
          >
            <span className="text-sm font-semibold uppercase tracking-wide">Apply My Project</span>
            <p className="text-sm leading-relaxed">
              자신의 프로젝트나 아이디어를 스튜디오 팀과 함께 확장하고 싶다면 이 링크를 통해 제안서를 제출하세요.
            </p>
          </a>
          <a
            href="https://forms.gle/apply-for-studio"
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
    </div>
  );
}


