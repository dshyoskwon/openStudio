type PublicationType = "Journal" | "Conference" | "Workshop";

type Publication = {
  year: number;
  title: string;
  authors: string;
  venue: string;
  type: PublicationType;
  details?: string;
  doi?: string;
};

const publications: Publication[] = [
  {
    year: 2025,
    title:
      "Savouring Slow Gifts: Reflection from the Field Study of Hybrid Gifting",
    authors: "Hyosun Kwon, Steve David Benford, and Boriana Koleva",
    venue:
      "CHI Conference on Human Factors in Computing Systems (CHI ’25), Yokohama, Japan",
    details: "ACM, New York, NY, USA, 20 pages.",
    doi: "https://doi.org/10.1145/3706598.3714048",
    type: "Conference",
  },
  {
    year: 2025,
    title:
      "VibroCushion: Design for Inclusive Connectedness between Deaf and Hearing in Mindfulness Practice",
    authors:
      "Donghee Hyun, Dongheun Kang, Harim Choi, and Hyosun Kwon",
    venue:
      "Extended Abstracts of the CHI Conference on Human Factors in Computing Systems (CHI EA ’25), Yokohama, Japan",
    details: "ACM, New York, NY, USA, 8 pages.",
    doi: "https://doi.org/10.1145/3706599.3719745",
    type: "Conference",
  },
  {
    year: 2025,
    title: "How Design Can Impact the Acceptance of Digital Money as a Gift",
    authors: "Freya Probst, Martin Maguire, Cees de Bont, and Hyosun Kwon",
    venue:
      "International Journal of Human–Computer Interaction",
    details: "Taylor & Francis, 1–12.",
    doi: "https://doi.org/10.1080/10447318.2025.2508301",
    type: "Journal",
  },
  {
    year: 2025,
    title:
      "언어에 따라 연상되는 색채의 분포 형태 분석 및 이의 활용 방안에 대한 연구: 생활체육 관련 단어 사례 연구",
    authors: "이준용, 유환규, 권효선",
    venue: "Archives of Design Research, 38(3), 271–290",
    doi: "https://doi.org/10.15187/adr.2025.08.38.3.271",
    type: "Journal",
  },
  {
    year: 2025,
    title:
      "선물 교환의 의사소통 가치를 유지하는 환불 UX 디자인: 수령자 경험을 중심으로",
    authors: "원가은, 권효선",
    venue: "Archives of Design Research, 38(3), 323–346",
    doi: "http://dx.doi.org/10.15187/adr.2025.08.38.3.323",
    type: "Journal",
  },
  {
    year: 2025,
    title:
      "Design Challenges in Medication Management for Older Adults in China: A Qualitative Study",
    authors: "Yinghuang Luo, Hyunggu Jung, and Hyosun Kwon",
    venue: "Archives of Design Research, 38(4), 33–48",
    doi: "https://doi.org/10.15187/adr.2025.11.38.4.33",
    type: "Journal",
  },
  {
    year: 2024,
    title:
      "Enhancing Existing Reality: A Theoretical Analysis of User-focused Mixed Reality Research",
    authors: "M. Hunter and H. Kwon",
    venue: "Archives of Design Research, 37(5), 245–268",
    doi: "https://doi.org/10.15187/adr.2024.05.37.5.245",
    type: "Journal",
  },
  {
    year: 2024,
    title:
      "MetaMemento: Enriching Physical Objects with Digital Layers",
    authors: "H. Kwon and M. Hunter",
    venue:
      "IEEE International Symposium on Mixed and Augmented Reality Adjunct (ISMAR-Adjunct), Bellevue, WA, USA",
    details: "pp. 375–376.",
    doi: "https://doi.org/10.1109/ISMAR-Adjunct64951.2024.00098",
    type: "Conference",
  },
  {
    year: 2023,
    title:
      "Visualizing the Carbon Intensity of Machine Learning Inference for Image Analysis on TensorFlow Hub",
    authors:
      "Taewon Yoo, Hyunmin Lee, SeungYoung Oh, Hyosun Kwon, and Hyunggu Jung",
    venue:
      "CSCW '23 Companion: Computer Supported Cooperative Work and Social Computing, Minneapolis, MN, USA",
    details: "ACM, New York, NY, USA, 6 pages.",
    doi: "https://doi.org/10.1145/3584931.3606959",
    type: "Conference",
  },
  {
    year: 2022,
    title:
      "Ritual of Everyday Digital Life: Towards Human-Centred Smart Living",
    authors: "H. Kwon",
    venue: "Archives of Design Research, 35(2), 27–43",
    doi: "http://dx.doi.org/10.15187/adr.2022.05.35.2.27",
    type: "Journal",
  },
  {
    year: 2022,
    title: "Exploring Digital Gifting Rituals",
    authors: "H. Kwon",
    venue: "Archives of Design Research, 35(2), 73–85",
    doi: "http://dx.doi.org/10.15187/adr.2022.05.35.2.73",
    type: "Journal",
  },
  {
    year: 2022,
    title:
      "A Framework for Designing Relationship Strengthening Digital Money Gifts in Close Friendships",
    authors: "Freya Probst, Martin Maguire, Cees de Bont, and Hyosun Kwon",
    venue:
      "HCI International 2022 - Late Breaking Papers: Design, User Experience and Interaction (LNCS 13516)",
    details: "Springer, Cham, pp. 460–474.",
    doi: "https://doi.org/10.1007/978-3-031-17615-9_32",
    type: "Conference",
  },
  {
    year: 2021,
    title: "Euros from the Heart: Exploring Digital Money Gifts in Intimate Relationships",
    authors: "Freya Probst, Hyosun Kwon, and Cees de Bont",
    venue:
      "HCI International 2021 - Late Breaking Papers: Design and User Experience (LNCS 13094)",
    details: "Springer, Cham, pp. 342–356.",
    doi: "https://doi.org/10.1007/978-3-030-90238-4_24",
    type: "Conference",
  },
  {
    year: 2020,
    title: "Designing Hybrid Gifts",
    authors:
      "Boriana Koleva, Jocelyn Spence, Steve Benford, Hyosun Kwon, Holger Schnädelbach, Emily Thorn, William Preston, Adrian Hazzard, Chris Greenhalgh, Matt Adams, Ju Row Farr, and Nick Tandavanitj",
    venue:
      "ACM Transactions on Computer-Human Interaction (TOCHI), 27(5), Article 37",
    details: "33 pages.",
    doi: "https://doi.org/10.1145/3398193",
    type: "Journal",
  },
  {
    year: 2019,
    title:
      "Probing IoT-based consumer services: ‘insights’ from the connected shower",
    authors:
      "Andy Crabtree, Lewis Hyland, James Colley, Martin Flintham, Joel E. Fischer, and Hyosun Kwon",
    venue: "Personal and Ubiquitous Computing",
    doi: "https://doi.org/10.1007/s00779-019-01303-3",
    type: "Journal",
  },
  {
    year: 2019,
    title:
      "muRedder: Shredding Speaker for Ephemeral Musical Experience",
    authors:
      "Kyung Jin Kim, Sangsu Jang, Bomin Kim, Hyosun Kwon, and Young-Woo Park",
    venue:
      "Proceedings of the 2019 Conference on Designing Interactive Systems (DIS ’19), San Diego, CA, USA",
    details:
      "Honourable Mention Award (top 2%).",
    doi: "https://doi.org/10.1145/3322276.3322362",
    type: "Conference",
  },
  {
    year: 2019,
    title:
      "muRedder: Shredding Speaker for Ephemeral Musical Experience (Demo)",
    authors:
      "Kyung Jin Kim, Sangsu Jang, Bomin Kim, Hyosun Kwon, and Young-Woo Park",
    venue:
      "DIS ’19 Companion, San Diego, CA, USA",
    doi: "https://doi.org/10.1145/3301019.3325161",
    type: "Workshop",
  },
  {
    year: 2018,
    title:
      "The Connected Shower: Studying Intimate Data in Everyday Life",
    authors:
      "Hyosun Kwon, Joel E. Fischer, Martin Flintham, and James Colley",
    venue:
      "Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT), 2(4), Article 176",
    details: "22 pages.",
    doi: "https://doi.org/10.1145/3287054",
    type: "Journal",
  },
  {
    year: 2017,
    title: "Demo hour",
    authors:
      "Hyosun Kwon, Holger Schnädelbach, Boriana Koleva, Steve Benford, Tom Schofield, Guy Schofield, Maho Oki, Koji Tsukada, Daniel Harrison, Richard Banks, Tim Regan, and Martin Grayson",
    venue: "interactions, 24(5), 8–11",
    doi: "https://doi.org/10.1145/3125631",
    type: "Journal",
  },
  {
    year: 2017,
    title: "Delicate Hybrid Gift",
    authors:
      "Hyosun Kwon, Holger Schnädelbach, Boriana Koleva, and Steve Benford",
    venue:
      "Proceedings of the 3rd Biennial Research Through Design Conference (RTD)",
    doi: "https://doi.org/10.6084/m9.figshare.4746946.v1",
    type: "Workshop",
  },
  {
    year: 2017,
    title:
      "“It’s Not Yet A Gift”: Understanding Digital Gifting",
    authors:
      "Hyosun Kwon, Boriana Koleva, Holger Schnädelbach, and Steve Benford",
    venue:
      "Proceedings of the ACM 2017 Conference on Computer Supported Cooperative Work (CSCW ’17)",
    doi: "http://dx.doi.org/10.1145/2998181.2998225",
    type: "Conference",
  },
  {
    year: 2015,
    title:
      "FugaciousFilm: Exploring Attentive Interaction with Ephemeral Material",
    authors:
      "Hyosun Kwon, Shashank Jaiswal, Steve Benford, Sue Ann Seah, Peter Bennett, Boriana Koleva, and Holger Schnädelbach",
    venue:
      "Proceedings of the 33rd Annual ACM Conference on Human Factors in Computing Systems (CHI '15)",
    doi: "https://doi.org/10.1145/2702123.2702206",
    type: "Conference",
  },
  {
    year: 2014,
    title:
      "Musical intersections across the digital and physical",
    authors:
      "Adrian Hazzard, Steve Benford, Alan Chamberlain, Chris Greenhalgh, and Hyosun Kwon",
    venue:
      "DMRN+9: Digital Music Research Network, London, UK",
    type: "Workshop",
  },
  {
    year: 2013,
    title:
      "Intangibles Wear Interactivity via Material Composition",
    authors:
      "Hyosun Kwon, Hwan Kim, and Woohun Lee",
    venue:
      "Personal and Ubiquitous Computing (PUC), Special Issue on Material Interactions",
    doi: "https://doi.org/10.1007/s00779-013-0688-5",
    type: "Journal",
  },
  {
    year: 2013,
    title:
      "Wet pixels: from digital to analogue originals",
    authors:
      "Hyosun Kwon, Jo Briggs, Ben Freeth, Karim Ladha, James Thomas, Mark Blythe, and Patrick Olivier",
    venue:
      "CHI '13 Extended Abstracts on Human Factors in Computing Systems (CHI EA '13)",
    doi: "https://doi.org/10.1145/2468356.2468459",
    type: "Conference",
  },
  {
    year: 2012,
    title:
      "Inflated Roly-Poly",
    authors:
      "Hyosun Kwon, Seok-Hyung Bae, Hwan Kim, and Woohun Lee",
    venue:
      "Proceedings of the Sixth International Conference on Tangible, Embedded, and Embodied Interaction (TEI '12), Kingston, Ontario, Canada",
    doi: "https://doi.org/10.1145/2148131.2148172",
    type: "Conference",
  },
];

export default function PublicationPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="border-b border-black pb-4">
        <h1 className="text-3xl font-bold uppercase tracking-widest">
          Publication
        </h1>
      </header>

      <div className="space-y-10">
        {publications.map((pub, index) => {
          const isFirstOfYear =
            index === 0 || publications[index - 1].year !== pub.year;

          return (
            <div key={`${pub.year}-${pub.title}`}>
              {isFirstOfYear && (
                <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">
                  {pub.year}
                </h2>
              )}

              <div className="border-l-2 border-gray-200 pl-6 py-3 hover:border-black transition-colors">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span
                    className={`inline-flex items-center rounded-[2px] border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                      pub.type === "Journal"
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                        : pub.type === "Conference"
                        ? "bg-blue-50 text-blue-700 border-blue-200"
                        : "bg-amber-50 text-amber-700 border-amber-200"
                    }`}
                  >
                    {pub.type}
                  </span>
                  <p className="text-xs font-semibold text-gray-500">
                    {pub.venue}
                  </p>
                </div>
                <h3 className="text-base md:text-lg font-semibold">
                  {pub.title}
                </h3>
                <p className="text-sm text-gray-700 mt-1">{pub.authors}</p>
                {pub.details && (
                  <p className="text-xs text-gray-500 mt-1">{pub.details}</p>
                )}
                {pub.doi && (
                  <a
                    href={pub.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-blue-700 hover:underline"
                  >
                    DOI / Link →
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


