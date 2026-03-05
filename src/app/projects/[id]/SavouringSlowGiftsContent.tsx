const IMG = "/images/projects/savouring";

// ─── Main component ───────────────────────────────────────────────────────────

export default function SavouringSlowGiftsContent() {
  return (
    <div className="space-y-16 mt-10">

      {/* ── Video ────────────────────────────────────────────────────── */}
      <section>
        <div className="bg-[#2e2e31] rounded-xl overflow-hidden w-full aspect-video flex items-center justify-center">
          <video
            src="/images/projects/chi25-SlavouringSlowGifts4K.mp4"
            controls
            className="w-full h-full object-contain"
          />
        </div>
      </section>

      {/* ── Background ────────────────────────────────────────────────── */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Background</h2>
        <div className="max-w-3xl mx-auto space-y-4 text-sm md:text-base leading-relaxed text-gray-700">
          <p>
            Digital gifts are widely exchanged online but lack the ritualistic and emotional depth of physical gifts.
            HCI researchers have increasingly turned to <strong>hybrid gifting</strong>, which overlays digital
            contents onto physical artefacts to enhance personal and social significance.
          </p>
          <p>
            Many early explorations of hybrid gifting were generally confined to specific contexts or events.
            This paper builds on earlier studies but focuses on the use of hybrid gifts in <strong>everyday settings</strong> where
            people interact with various connected devices and consumables.
          </p>
        </div>
      </section>

      {/* ── Probe Design ──────────────────────────────────────────────── */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Probe Design</h2>
        <img
          src={`${IMG}/probeDesign.jpg`}
          alt="Probe design: IoT coffee machine with QR reader and capsule pushing module, personalised capsule gift box, and mobile app for receiving digital gifts"
          className="w-full rounded-xl"
        />
      </section>

      {/* ── Overview ─────────────────────────────────────────────────── */}
      <section>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Overview</h2>
          <p className="text-gray-400 mt-2 text-sm">
            Gift consumption timeline across 7 recipient participants (D+1 to D+13 from installation day)
          </p>
        </div>
        <img
          src={`${IMG}/overview.jpg`}
          alt="Overview timeline chart showing gift and capsule consumption patterns for participants R1 through R7 over 13 days"
          className="w-full rounded-xl"
        />
      </section>

      {/* ── Participants ────────────────────────────────────────────── */}
      <section>
        <img
          src={`${IMG}/participant.jpg`}
          alt="Participant group: 7 pairs of gift givers and recipients including family members, a romantic couple, friends, and colleagues"
          className="w-full rounded-xl"
        />
      </section>

      {/* ── Research Process ──────────────────────────────────────────── */}
      <section>
        <img
          src={`${IMG}/researchProcess.jpg`}
          alt="Research process: 6 steps from sign-up through induction meeting, gift preparation workshop, probe delivery, experience period, and exit interview"
          className="w-full max-w-3xl mx-auto"
        />
      </section>

      {/* ── Findings ──────────────────────────────────────────────────── */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Findings</h2>
        <div className="max-w-3xl mx-auto space-y-10">

          {/* 1. Unwrapping */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-900">Unwrapping</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              The tangible unwrapping process of hybrid gifts naturally slowed down the experience,
              allowing recipients to <strong>savour anticipation</strong>, <strong>reflect on the giver&apos;s intent</strong>,
              and <strong>increase the perceived value</strong> of digital gifts.
            </p>
            <blockquote className="border-l-4 border-[#ff037e] pl-4 text-sm italic text-gray-600">
              &ldquo;[...] this whole process indeed is tedious process, as well as slow. [...] So when I finally got the gift, I thought &apos;Oh, now I&apos;m going to focus.&apos;&rdquo;
              <span className="block mt-1 text-xs font-semibold text-[#ff037e] not-italic">— R1</span>
            </blockquote>
            <blockquote className="border-l-4 border-[#ff037e] pl-4 text-sm italic text-gray-600">
              &ldquo;[...] I think there is some worry that the meaning of the gift may fade owing to the ephemerality that digital files inherently have.&rdquo;
              <span className="block mt-1 text-xs font-semibold text-[#ff037e] not-italic">— G1</span>
            </blockquote>
          </div>

          {/* 2. Engagement */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-900">Engagement</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Hybrid gifts draw less engagement when the personalisation is too open to the
              recipient&apos;s interpretation and the content of digital gifts is not mutually understood.
            </p>
            <blockquote className="border-l-4 border-[#00d616] pl-4 text-sm italic text-gray-600">
              &ldquo;[...] But other gifts, I couldn&apos;t really make any sense between the text codes and the gifts.&rdquo;
              <span className="block mt-1 text-xs font-semibold text-[#00d616] not-italic">— R4</span>
            </blockquote>
            <blockquote className="border-l-4 border-[#00adff] pl-4 text-sm italic text-gray-600">
              &ldquo;The musics reminded me of a day in the past. But that&apos;s it. I don&apos;t think this has permanently changed the value of the music (I received). It was like we are sharing a funny joke.&rdquo;
              <span className="block mt-1 text-xs font-semibold text-[#00adff] not-italic">— R3</span>
            </blockquote>
          </div>

          {/* 3. Empowerment in Autonomy */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-900">Empowerment in Autonomy</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Unlike instant digital gifts, hybrid gifts empower recipients to decide <strong>when</strong> and
              <strong> in what context</strong> they receive gifts. This autonomy turns receiving from a passive act
              into a deliberate and meaningful engagement.
            </p>
            <blockquote className="border-l-4 border-[#ffa900] pl-4 text-sm italic text-gray-600">
              &ldquo;I tried to wait until the end of the week because it normally becomes harder later in the week. [...] Thinking it will intensify the effect of the gifts.&rdquo;
              <span className="block mt-1 text-xs font-semibold text-[#ffa900] not-italic">— R5</span>
            </blockquote>
            <blockquote className="border-l-4 border-[#ffa900] pl-4 text-sm italic text-gray-600">
              &ldquo;[...] I&apos;m realising now that it&apos;s also a good experience to be able to unwrap it when I (the recipient) want to.&rdquo;
              <span className="block mt-1 text-xs font-semibold text-[#ffa900] not-italic">— G5</span>
            </blockquote>
          </div>

          {/* 4. Savouring */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-900">Savouring</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Some recipients intentionally prolonged the experience, enjoying the anticipation and emotional depth
              of delayed unwrapping. Givers wrapped gifts with narratives, and recipients savoured the anticipation
              that comes with delayed unwrapping.
            </p>
            <blockquote className="border-l-4 border-[#0066ff] pl-4 text-sm italic text-gray-600">
              &ldquo;I wanted to place the gifts according to the timeline, and I selected the coffees according to
              the description of the coffee rather than the colour. The first is the &apos;floral&apos; flavour, I chose it
              because that&apos;s how you feel when you first start graduate school. [...]&rdquo;
              <span className="block mt-1 text-xs font-semibold text-[#0066ff] not-italic">— G6</span>
            </blockquote>
            <blockquote className="border-l-4 border-[#be00c7] pl-4 text-sm italic text-gray-600">
              &ldquo;I had a complex feeling, [...] I wanted to keep and cherish it, [...] If I open the remaining one
              in between the two, this (experience) finishes in only five days. [...]&rdquo;
              <span className="block mt-1 text-xs font-semibold text-[#be00c7] not-italic">— R7</span>
            </blockquote>
          </div>

        </div>
      </section>

      {/* ── Gift Savouring Path ───────────────────────────────────────── */}
      <section>
        <div className="text-center mb-6">
          <p className="text-sm font-semibold text-[#ff007c] mb-1">Designing Slow Hybrid Gifts</p>
          <h2 className="text-3xl font-bold text-gray-900">Gift Savouring Path</h2>
        </div>
        <img
          src={`${IMG}/framework.jpg`}
          alt="Gift Savouring Path framework showing three concentric zones — Connected Appliance, Giver, and Recipient — spanning physical to digital interaction"
          className="w-full max-w-4xl mx-auto"
        />
        <p className="mt-6 text-sm text-gray-500 text-center max-w-2xl mx-auto leading-relaxed">
          The Gift Savouring Path maps how hybrid gifts are experienced across physical and digital
          modalities. Three concentric zones represent the roles of the <strong>Connected Appliance</strong> (coffee machine),
          the <strong>Giver</strong> (personalising context), and the <strong>Recipient</strong> (choosing when and how to receive).
          The path illustrates how physical rituals and digital interactions interweave to create
          a slow, deliberate gift-savouring experience.
        </p>
      </section>

    </div>
  );
}
