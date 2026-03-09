import Image from "next/image";

export default function ResonanceContent() {
  return (
    <div className="space-y-12 mt-2">
      {/* ── Abstract ── */}
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-3">
          Abstract
        </h2>
        <p className="text-sm leading-relaxed text-gray-700">
          VibroCushion은 청각장애인과 청인이 함께하는 포용적 마음챙김(Mindfulness) 수행을 위해 설계된
          진동촉각(Vibrotactile) 시스템이다. 명상 강사의 터치를 감지하여 참가자에게 진동을 전달함으로써
          신체 인식을 높이고, 청각장애인과 청인 간의 연결감을 형성한다.
          공동디자인 워크숍을 통해 청각장애 초보자, 청인 명상 강사, 수어 통역사와 함께 반복적으로
          시스템을 개발하였으며, 마음챙김 세션 평가를 통해 공유된 진동촉각 자극이
          집중, 몰입, 연결감을 촉진함을 확인하였다.
        </p>
      </section>

      {/* ── VibroCushion Design ── */}
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-3">
          VibroCushion Design
        </h2>
        <p className="text-sm leading-relaxed text-gray-700 mb-4">
          VibroCushion은 Body Cushion과 Breath Cushion 두 부분으로 구성된다.
          Body Cushion은 어깨에 착용하며, 전도성 실과 진동 액추에이터를 통해 강사의 터치를 참가자에게 전달한다.
          Breath Cushion은 허리에 착용하며, 실리콘 공기압 액추에이터로 호흡 리듬에 맞춘 팽창·수축 피드백을 제공한다.
        </p>
        <Image
          src="/images/projects/VibroCushion/Figure_Cushion.jpg"
          alt="VibroCushion system design: Body Cushion and Breath Cushion with technical components"
          width={1886}
          height={400}
          className="w-full h-auto rounded-sm"
        />
      </section>

      {/* ── Co-Design Workshop ── */}
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-3">
          Co-Design Workshop
        </h2>
        <p className="text-sm leading-relaxed text-gray-700 mb-4">
          청각장애인, 명상 강사, 수어 통역사가 참여하는 공동디자인 워크숍을 통해 시스템을 설계하였다.
          워크숍은 마음챙김 소개, 청각장애 경험 이해, VibroCushion 시연, 세션 디자인의 4단계로 진행되었으며,
          참가자들의 실제 경험과 니즈를 반영하여 프로토타입을 반복적으로 개선하였다.
        </p>
        <Image
          src="/images/projects/VibroCushion/Figure_Workshop.jpg"
          alt="Co-design workshop: Introduction to Mindfulness, Understanding Deaf Experience, VibroCushion Demonstration, Session Design"
          width={1886}
          height={400}
          className="w-full h-auto rounded-sm"
        />
      </section>

      {/* ── Mindfulness Session ── */}
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-3">
          Mindfulness Session
        </h2>
        <p className="text-sm leading-relaxed text-gray-700 mb-4">
          공동디자인 결과를 바탕으로 청각장애인 참가자와 청인 명상 강사가 함께하는 마음챙김 세션을 진행하였다.
          수어 통역사의 지원 아래 VibroCushion을 착용한 참가자들은 진동촉각 피드백을 통해
          강사의 안내를 감각적으로 경험하며, 집중과 몰입, 그리고 상호 연결감을 형성하였다.
        </p>
        <Image
          src="/images/projects/VibroCushion/Figure_Mindfulness Session.jpg"
          alt="Mindfulness session with Deaf participants, hearing instructor, KSL interpreters, and researcher"
          width={1886}
          height={400}
          className="w-full h-auto rounded-sm"
        />
      </section>

      {/* ── Citation ── */}
      <section className="border-t border-gray-200 pt-6">
        <p className="text-xs text-gray-500 leading-relaxed">
          Hyun, D., Kang, D., Choi, H., &amp; Kwon, H. (2025). VibroCushion: Design for Inclusive
          Connectedness between Deaf and Hearing in Mindfulness Practice.{" "}
          <em>Extended Abstracts of the CHI Conference on Human Factors in Computing Systems (CHI EA &apos;25)</em>.
          ACM. https://doi.org/10.1145/3706599.3719745
        </p>
      </section>
    </div>
  );
}
