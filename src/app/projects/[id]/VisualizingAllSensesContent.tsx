import Image from "next/image";

export default function VisualizingAllSensesContent() {
  return (
    <div className="space-y-12 mt-2">
      {/* ── Abstract ── */}
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-3">
          Abstract
        </h2>
        <p className="text-sm leading-relaxed text-gray-700">
          사람들은 특정 단어를 접할 때 관련 이미지를 떠올리며 자연스럽게 색채를 연상한다.
          본 연구는 단어에서 연상되는 색채가 단일 색으로 수렴하지 않고, 색상(Hue)·채도(Saturation)·명도(Value)
          각 차원에서 고유한 분포 패턴을 형성한다는 가설을 탐색적으로 검증하였다.
          생활체육 관련 5개 단어(달리기, 등산, 스트레칭, 축구, 헬스)를 대상으로 118명의 참가자에게
          온라인 설문을 진행하고, 수집된 색채 데이터를 HSV 색 공간에서 분석하였다.
          분석 결과를 실제 브랜드 광고 시안에 적용하여 선호도를 검증한 결과,
          5개 중 3개 단어에서 수정 시안이 유의미하게 선호되었다.
        </p>
      </section>

      {/* ── Research Process ── */}
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-3">
          Research Process
        </h2>
        <p className="text-sm leading-relaxed text-gray-700 mb-4">
          연구는 2단계로 구성되었다.
          <strong> 1단계</strong>에서는 5개 단어에 대한 언어-색채 설문을 통해 HSV 색 공간상의 분포를 수집·분석하였고,
          <strong> 2단계</strong>에서는 도출된 색채를 실제 브랜드 마케팅 시안에 적용하여 선호도를 비교·검증하였다.
        </p>
        <Image
          src="/images/projects/colorStudy/Figure1.png"
          alt="Research Process"
          width={1886}
          height={675}
          className="w-full h-auto rounded-sm"
        />
      </section>

      {/* ── Survey Tool: Calepathy ── */}
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-3">
          Survey Tool — Calepathy Webapp
        </h2>
        <p className="text-sm leading-relaxed text-gray-700 mb-4">
          설문은 자체 개발한 웹앱 <em>Calepathy</em>를 활용하여 진행되었다.
          참가자는 화면에 제시된 단어를 보고, 색상(H)·채도(S)·명도(V) 슬라이더를 조작하여
          연상되는 색채를 자유롭게 선택하였다. 선택 이전에는 중립적인 회색(#e6e6e6)을 표시하여 편향을 최소화하였다.
        </p>
        <Image
          src="/images/projects/colorStudy/Figure2.jpg"
          alt="Calepathy Webapp Screenshots"
          width={1886}
          height={768}
          className="w-full h-auto rounded-sm"
        />
      </section>

      {/* ── Results: 5 Words ── */}
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-3">
          Results — Word-Color Distribution
        </h2>
        <p className="text-sm leading-relaxed text-gray-700 mb-6">
          118명의 참가자로부터 총 590개의 색채 데이터를 수집하였다.
          각 단어별로 트리맵(Treemap)과 색상(H)·채도(S)·명도(V) 분포 그래프를 통해 분석한 결과,
          단어마다 고유한 색채 분포 패턴이 나타났다.
        </p>

        {/* Running */}
        <div className="space-y-2 mb-8">
          <h3 className="text-sm font-semibold text-gray-800">달리기 (Running)</h3>
          <p className="text-xs leading-relaxed text-gray-600">
            빨간색·파란색 계열에 집중. 색상 0–60°(빨강-주황)에 42%가 분포하며,
            명도 90 이상이 85%로 밝고 선명한 색채가 지배적이었다.
            &ldquo;청량한 하늘&rdquo;, &ldquo;시원한 바람&rdquo; 등의 연상이 주를 이루었다.
          </p>
          <Image
            src="/images/projects/colorStudy/Figure3_달리기.jpg"
            alt="Running: Treemap and HSV distribution"
            width={2020}
            height={1290}
            className="w-full h-auto rounded-sm"
          />
        </div>

        {/* Climbing */}
        <div className="space-y-2 mb-8">
          <h3 className="text-sm font-semibold text-gray-800">등산 (Climbing)</h3>
          <p className="text-xs leading-relaxed text-gray-600">
            녹색 계열에 집중. 색상 60–120°(노랑-초록)에 42%, 채도 90 이상이 55%를 차지하였다.
            &ldquo;푸른 산&rdquo;, &ldquo;초록색 나무&rdquo; 등 자연 관련 연상이 두드러졌다.
          </p>
          <Image
            src="/images/projects/colorStudy/Figure4_등산.jpg"
            alt="Climbing: Treemap and HSV distribution"
            width={2020}
            height={1105}
            className="w-full h-auto rounded-sm"
          />
        </div>

        {/* Stretching */}
        <div className="space-y-2 mb-8">
          <h3 className="text-sm font-semibold text-gray-800">스트레칭 (Stretching)</h3>
          <p className="text-xs leading-relaxed text-gray-600">
            가장 넓은 색채 분포를 보였다. 색상과 채도에서는 특정 군집이 약했으나,
            명도 90 이상에 88%가 집중되어 &ldquo;밝은 색&rdquo; 경향이 뚜렷하였다.
            &ldquo;시원하다&rdquo;, &ldquo;개운함&rdquo; 등 감각적 연상이 주를 이루었다.
          </p>
          <Image
            src="/images/projects/colorStudy/Figure5_스트레칭.jpg"
            alt="Stretching: Treemap and HSV distribution"
            width={2020}
            height={1167}
            className="w-full h-auto rounded-sm"
          />
        </div>

        {/* Football */}
        <div className="space-y-2 mb-8">
          <h3 className="text-sm font-semibold text-gray-800">축구 (Football)</h3>
          <p className="text-xs leading-relaxed text-gray-600">
            빨간색·초록색 계열에 집중. 색상 0–60°에 45%, 채도 90 이상이 62%, 명도 90 이상이 58%를 차지하였다.
            &ldquo;잔디&rdquo;, &ldquo;붉은악마&rdquo;, &ldquo;2002 월드컵&rdquo; 등의 연상이 나타났다.
          </p>
          <Image
            src="/images/projects/colorStudy/Figure6_축구.jpg"
            alt="Football: Treemap and HSV distribution"
            width={2020}
            height={952}
            className="w-full h-auto rounded-sm"
          />
        </div>

        {/* Health */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-800">헬스 (Health)</h3>
          <p className="text-xs leading-relaxed text-gray-600">
            다른 단어들과 달리 무채색 계열이 두드러졌다. 채도 0–10 구간에 41%가 집중되어
            &ldquo;쇠&rdquo;, &ldquo;덤벨&rdquo;, &ldquo;헬스장 기구&rdquo; 등 도구의 물성을 반영하는 색채 선택이 나타났다.
          </p>
          <Image
            src="/images/projects/colorStudy/Figure7_헬스.jpg"
            alt="Health: Treemap and HSV distribution"
            width={2020}
            height={1074}
            className="w-full h-auto rounded-sm"
          />
        </div>
      </section>

      {/* ── Validation: Marketing Application ── */}
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-3">
          Validation — Marketing Application
        </h2>
        <p className="text-sm leading-relaxed text-gray-700 mb-4">
          도출된 색채 분포에서 가장 뚜렷한 군집을 이루는 H·S·V 값을 조합하여
          5개 브랜드의 기존 광고 시안 색채를 수정한 뒤, 53명을 대상으로 선호도를 비교하였다.
        </p>
        <Image
          src="/images/projects/colorStudy/table1_comparison.jpg"
          alt="Marketing comparison: original vs revised"
          width={1886}
          height={2856}
          className="w-full h-auto rounded-sm mb-4"
        />
        <Image
          src="/images/projects/colorStudy/table1_comparison2.jpg"
          alt="Marketing comparison: football and health"
          width={1886}
          height={1781}
          className="w-full h-auto rounded-sm"
        />
      </section>

      {/* ── Results Table ── */}
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-3">
          Preference Test Results
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-300 text-gray-500 uppercase tracking-wide">
                <th className="py-2 pr-4">단어</th>
                <th className="py-2 pr-4">평균</th>
                <th className="py-2 pr-4">기존 선호</th>
                <th className="py-2 pr-4">중립</th>
                <th className="py-2 pr-4">수정 선호</th>
                <th className="py-2 pr-4">p-value</th>
                <th className="py-2">유의성</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4 font-medium">달리기</td>
                <td className="py-2 pr-4">3.81</td>
                <td className="py-2 pr-4">24.5%</td>
                <td className="py-2 pr-4">3.8%</td>
                <td className="py-2 pr-4 text-emerald-600 font-semibold">71.7%</td>
                <td className="py-2 pr-4">0.0002</td>
                <td className="py-2 text-emerald-600 font-semibold">***</td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50">
                <td className="py-2 pr-4 font-medium">등산</td>
                <td className="py-2 pr-4">2.21</td>
                <td className="py-2 pr-4 text-red-500 font-semibold">71.7%</td>
                <td className="py-2 pr-4">3.8%</td>
                <td className="py-2 pr-4">24.5%</td>
                <td className="py-2 pr-4">0.0005</td>
                <td className="py-2 text-red-500 font-semibold">*** (기존)</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4 font-medium">스트레칭</td>
                <td className="py-2 pr-4">3.64</td>
                <td className="py-2 pr-4">32.1%</td>
                <td className="py-2 pr-4">3.8%</td>
                <td className="py-2 pr-4 text-emerald-600 font-semibold">64.2%</td>
                <td className="py-2 pr-4">0.0053</td>
                <td className="py-2 text-emerald-600 font-semibold">**</td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50">
                <td className="py-2 pr-4 font-medium">축구</td>
                <td className="py-2 pr-4">3.43</td>
                <td className="py-2 pr-4">30.2%</td>
                <td className="py-2 pr-4">17.0%</td>
                <td className="py-2 pr-4">52.8%</td>
                <td className="py-2 pr-4">0.0535</td>
                <td className="py-2 text-gray-400">n.s.</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">헬스</td>
                <td className="py-2 pr-4">3.75</td>
                <td className="py-2 pr-4">24.5%</td>
                <td className="py-2 pr-4">11.3%</td>
                <td className="py-2 pr-4 text-emerald-600 font-semibold">64.2%</td>
                <td className="py-2 pr-4">0.0005</td>
                <td className="py-2 text-emerald-600 font-semibold">***</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          * 양극 선호도 척도 (1=기존 선호, 5=수정 선호). 단일표본 t-검정 기준값 3.
        </p>
      </section>

      {/* ── Conclusion ── */}
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-3">
          Conclusion
        </h2>
        <p className="text-sm leading-relaxed text-gray-700">
          본 연구는 단어에 대한 색채 연상이 단일 색상으로 수렴하지 않으며,
          색상(H)·채도(S)·명도(V) 각 차원에서 고유한 분포를 형성함을 실증적으로 밝혔다.
          이는 색채를 고정된 속성으로 이해하는 기존 관점에서 벗어나,
          분포 기반으로 해석할 필요성을 시사한다.
          나아가 대규모 데이터 축적을 통해 언어-색채 연관 시스템을 구축하면
          시각 커뮤니케이션, 브랜딩, 색채 마케팅 등 다양한 디자인 분야에서 활용될 수 있을 것이다.
        </p>
      </section>

      {/* ── Citation ── */}
      <section className="border-t border-gray-200 pt-6">
        <p className="text-xs text-gray-500 leading-relaxed">
          Lee, J., Yu, H., &amp; Kwon, H. (2025). Exploring Word-Color Association Patterns and
          Implications for Design: A Case Study of Everyday Sports-Related Vocabularies.{" "}
          <em>Archives of Design Research, 38</em>(3), 271–290.
        </p>
      </section>
    </div>
  );
}
