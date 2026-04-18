// 과목별 메타데이터
// 폴더 기반 자동 로딩: public/courses/{course}/{year}/{project}/ 에 이미지를 넣으면 자동 반영.
// 썸네일: public/courses/{course}/thumbnail.jpg

export type ProjectMeta = {
  folder: string; // public/courses/{course}/{year}/{folder}/ 의 폴더명
  title: string;
  students: string;
  description: string;
  layout?: "default" | "grid"; // grid: 슬라이드 전체를 3열 그리드로 한번에 표시
};

export type CourseCategory = {
  id: string; // {year}/{id}/ 폴더명
  label: string; // 드롭다운에 표시할 라벨
  projects: ProjectMeta[];
};

export type CourseYear = {
  year: string;
  label?: string;
  students?: string; // 해당 연도 수강생 목록
  figmaUrl?: string;
  videoUrl?: string;
  projects?: ProjectMeta[]; // Interface Design용 프로젝트 메타데이터
  categories?: CourseCategory[]; // 카테고리별(Mini/Final 등)로 프로젝트 그룹화
};

export type Course = {
  id: string;
  title: string;
  description: string;
  thumbnail?: string; // 썸네일 이미지 경로 (없으면 기본 placeholder)
  type: "slideshow" | "video" | "list";
  years: CourseYear[];
};

export const courses: Course[] = [
  {
    id: "interface-design",
    title: "Interface Design",
    description:
      "인터페이스 디자인의 기초부터 심화까지, 학생들의 프로젝트 결과물을 소개합니다.",
    type: "slideshow",
    years: [
      {
        year: "2026",
        // projects: [
        //   { folder: "sample-project", title: "Sample Project", students: "김OO, 이OO", description: "프로젝트 설명" },
        // ],
      },
      {
        year: "2025",
        categories: [
          {
            id: "MiniProject",
            label: "Mini Project",
            projects: [
              {
                folder: "NamSeunghyun",
                title: "LG Lightwave Oven (MP-945G) UI Redesign",
                students: "남승현",
                description: "13년간 사용한 LG 광파오븐(MP-945G 시리즈)의 직관성이 떨어지는 물리 버튼·다이얼 인터페이스를 분석하고 UI를 재설계한 미니 프로젝트. 전자레인지·오븐·그릴 등 다양한 조리 모드를 설명서 없이도 이해할 수 있도록 개선하였다. / A mini project redesigning the UI of an LG Lightwave Oven (MP-945G series) used in the household for 13 years. Rethinks the unintuitive physical buttons and rotary dial so that microwave, oven, grill and other cooking modes can be understood without the manual.",
              },
              {
                folder: "KimJiwon-EomJeongwoo",
                title: "Bidet Re-Design",
                students: "김지원, 엄정우",
                description: "복잡한 조작 패널로 인해 일부 기능만 사용되던 비데의 UI를 재설계한 미니 프로젝트. 자주 쓰는 기능을 중심으로 조작 흐름을 정리하고, 버튼 배치와 피드백을 사용자 관점에서 다시 설계하였다. / A mini project redesigning a bidet's control panel, which was so cluttered that most users only ever reached for a few features. Reorganizes the interaction flow around frequently used functions and reworks button layout and feedback from the user's perspective.",
              },
              {
                folder: "KangIhyun-KoHyun",
                title: "ASUS ROG Ally UI Re-Design",
                students: "강이현, 고현",
                description: "휴대용 게이밍 PC 'ASUS ROG Ally'의 Armoury Crate 런처 UI를 재설계한 미니 프로젝트. 게임 실행·설정·퍼포먼스 튜닝의 흐름을 한 손 조작 환경에 맞게 재구성하였다. / A mini project redesigning the Armoury Crate launcher UI for the ASUS ROG Ally handheld gaming PC. Rebuilds the flow for launching games, adjusting settings, and tuning performance around single-hand operation.",
              },
              {
                folder: "BaeSubin-JeongDawon",
                title: "Boiler Temperature Controller Redesign",
                students: "배수빈, 정다원",
                description: "가정용 보일러 온도 조절기의 복잡한 인터페이스를 개선한 미니 프로젝트. 자주 쓰는 난방·온수 조작을 앞으로 꺼내고, 정보 구조와 와이어프레임을 다시 짜 실사용 상황에 맞는 UI를 제안하였다. / A mini project improving a residential boiler temperature controller. Surfaces the heating and hot-water controls people actually reach for, and rebuilds the information architecture and wireframes around real-life use.",
              },
              {
                folder: "LeeHyerin",
                title: "Himpel Ceiling Duct Air Purifier UI Redesign",
                students: "이혜린",
                description: "Himpel 사 천장 덕트형 공기청정기의 벽면 UI를 개선한 미니 프로젝트. 모드 선택·풍량 조절·필터 상태 확인이 직관적으로 이루어지도록 아이콘과 정보 구조를 다시 설계하였다. / A mini project improving the wall-mounted UI of a Himpel ceiling duct air purifier. Redesigns icons and information structure so that mode selection, airflow control, and filter status are understood at a glance.",
              },
            ],
          },
          {
            id: "FinalProject",
            label: "Final Project",
            projects: [
              {
                folder: "KimJiwon",
                title: "Ttareungi App Usability Improvement Report",
                students: "김지원",
                description: "서울시 공공자전거 '따릉이' 앱의 사용성을 실사용자 관점에서 조사·평가하고 개선 디자인을 제안한 기말 보고서. 설문과 사용성 평가를 바탕으로 대여·반납·탐색 흐름의 구조적 문제를 도출하였다. / A final report that investigates the usability of Seoul's public bike 'Ttareungi' app from real riders' perspective and proposes redesigns. Surfaces structural issues in the rental, return, and discovery flows through surveys and usability testing.",
                layout: "grid",
              },
              {
                folder: "JeongDawon",
                title: "Korail Talk App Redesign Report",
                students: "정다원",
                description: "한국철도공사의 모바일 예매 앱 '코레일톡'을 이용 편의성 관점에서 재설계한 기말 보고서. 유사 서비스(티머니GO)와 디지털 정부서비스 UI/UX 가이드라인을 비교 분석하여 개선안을 도출하였다. / A final report redesigning 'Korail Talk', the Korean rail mobile booking app, through the lens of user convenience. Draws improvements from a comparative analysis with similar services (TmoneyGO) and the Digital Government Services UI/UX guidelines.",
                layout: "grid",
              },
            ],
          },
        ],
      },
      {
        year: "2024",
        categories: [
          {
            id: "MiniProject",
            label: "Mini Project",
            projects: [
              {
                folder: "LeeMinseo",
                title: "Let's Korail UI Improvement",
                students: "이민서",
                description: "KORAIL 예매 앱 'Let's Korail'의 UI를 혼자서 재설계한 미니 프로젝트. 복잡한 예매 화면을 정돈하고 열차 선택과 좌석 예약 경험을 단순화하였다. / A solo mini project redesigning the 'Let's Korail' booking app. Tidies cluttered booking screens and simplifies train selection and seat reservation.",
              },
              {
                folder: "ImDabin-JeongJiho",
                title: "K·CARD App UI Improvement",
                students: "임다빈, 정지호",
                description: "국민대학교 모바일 학생증 앱 'K·CARD'의 UI를 개선한 미니 프로젝트. 학생증 표시·출입 인증·이용 내역 등 자주 쓰는 기능의 접근성을 끌어올렸다. / A mini project improving Kookmin University's mobile student ID app, K·CARD. Raises the accessibility of frequently used features such as ID display, campus authentication, and transaction history.",
              },
              {
                folder: "KimSihyeong-JangDonghyeok",
                title: "FLEEK — Workout Routine App",
                students: "김시형, 장동혁",
                description: "운동 루틴·기록·목표 설정 앱 'FLEEK'의 UI를 개선한 미니 프로젝트. 어두운 배경 속에 가려져 있던 주요 기능의 시인성과 사용성을 끌어올렸다. / A mini project improving the UI of 'FLEEK', a workout routine, logging, and goal-setting app. Brings key features out from under a low-contrast dark interface.",
              },
              {
                folder: "KimSiwoo-KwonJimin",
                title: "Ttareungi (Seoul Bike) Interface Redesign",
                students: "김시우, 권지민",
                description: "서울시 공공자전거 '따릉이' 앱의 인터페이스를 개선한 미니 프로젝트. 대여소 탐색·대여·반납의 흐름이 사용자 관점에서 자연스럽게 이어지도록 재구성하였다. / A mini project redesigning the 'Ttareungi' Seoul public bike app. Reconnects station search, rental, and return flows around the rider's perspective.",
              },
              {
                folder: "KimMinseo-ShinGaeul",
                title: "Sungkok Library App Redesign",
                students: "김민서, 신가을",
                description: "국민대학교 성곡도서관 앱의 홈·검색·서지상세·FAQ 화면을 재설계한 미니 프로젝트. 사용자 조사와 사용성 평가에서 드러난 Pain Point를 바탕으로 UI 전반을 정돈하였다. / A mini project redesigning Kookmin University's Sungkok Library app across home, search, book detail, and FAQ screens. Reworks the UI around pain points surfaced through user research and usability testing.",
              },
            ],
          },
          {
            id: "FinalProject",
            label: "Final Project",
            projects: [
              {
                folder: "Report01",
                title: "Korail Service Improvement Report",
                students: "",
                description: "심층 자료 조사, 설문(187명 응답), 인터뷰를 통해 Let's Korail 서비스의 사용성 문제를 도출하고 개선안을 제시한 기말 보고서. 여정조회·예약·변경 기능을 중심으로 인터페이스를 재구성한다. / A final report that uses in-depth research, a 187-respondent survey, and interviews to identify usability issues in Let's Korail, then proposes redesigns focused on trip search, booking, and reservation changes.",
                layout: "grid",
              },
              {
                folder: "Report02",
                title: "Sungkok Library App Improvement Report",
                students: "장동혁",
                description: "국민대학교 성곡도서관 앱의 문제점과 개선 방향을 인터페이스·사용성 관점에서 정리한 기말 보고서. 사용자 조사와 사용성 평가를 바탕으로 실질적인 개선안을 도출하였다. / A final report that examines Kookmin University's Sungkok Library app through an interface and usability lens, turning user research and usability findings into concrete redesign proposals.",
                layout: "grid",
              },
            ],
          },
        ],
      },
      {
        year: "2023",
        categories: [
          {
            id: "MiniProject",
            label: "Mini Project",
            projects: [
              {
                folder: "KimYeonjeong-KimChohye",
                title: "VMS Webpage Redesign",
                students: "김연정, 김초혜",
                description: "사회복지 자원봉사인증관리(VMS) 웹사이트의 인터페이스를 재설계한 미니 프로젝트. 봉사 신청·인증·교육 흐름을 시각적으로 정리하여 정보 접근성을 높였다. / A mini project redesigning the VMS (Volunteer Management System) webpage. Restructures volunteer application, certification, and training flows with a clearer visual hierarchy to improve accessibility.",
              },
              {
                folder: "HyunDonghee-ChoiHarim",
                title: "Library Book Search UI",
                students: "현동희, 최하림",
                description: "도서관 도서 검색 인터페이스를 개선한 미니 프로젝트. 기존 검색 흐름의 번거로움을 분석하고 원하는 책을 빠르게 찾도록 돕는 UI를 제안한다. / A mini project redesigning a library book-search interface. Analyzes pain points in the existing search flow and proposes a UI that lets users locate books more quickly.",
              },
              {
                folder: "KangJinseo-NamSeongmin",
                title: "Myongji University Hospital App UI Improvement",
                students: "강진서, 남성민",
                description: "명지대학교 병원 앱의 UI를 개선한 미니 프로젝트. 예약·진료 관련 기능의 정보 구조와 시각 요소를 재정비하여 환자가 필요한 정보를 쉽게 찾도록 하였다. / A UI improvement for the Myongji University Hospital app. Reorganizes information architecture and visual cues around reservation and care features so patients can find what they need quickly.",
              },
              {
                folder: "KimDawon-JangYijun",
                title: "PAW IN HAND App Redesign",
                students: "김다원, 장이준",
                description: "유기동물 입양 서비스 'PAW IN HAND' 앱을 재설계한 미니 프로젝트. 입양 절차의 가독성과 화면 간 탐색 흐름을 개선하였다. / A mini project redesigning the 'PAW IN HAND' animal adoption app. Improves the readability of the adoption process and the overall navigation flow.",
              },
            ],
          },
          {
            id: "FinalProject",
            label: "Final Project",
            projects: [
              {
                folder: "당근마켓앱",
                title: "Carrot Market Redesign",
                students: "권구주, 김중훈, 백인호, 조수진",
                description: "중고거래 앱 '당근마켓'의 사용 경험을 개선하기 위한 리디자인 프로젝트. 탐색·거래·커뮤니티 흐름을 재구성하여 핵심 행동이 더 자연스럽게 이어지도록 만들었다. / A redesign project aimed at improving the user experience of the second-hand trading app 'Carrot Market'. Restructures discovery, transaction, and community flows so core actions connect more naturally.",
              },
              {
                folder: "성곡도서관앱",
                title: "Find Books Easier at Sungkok Library",
                students: "현동희, 최하림, 김성민, 하성현, 이관형",
                description: "국민대학교 성곡도서관 앱의 도서 검색·길찾기·책가방 기능을 재설계한 팀 프로젝트. 원하는 책을 빠르게 찾고 도서관 내 위치까지 쉽게 안내받을 수 있도록 개선하였다. / A team project redesigning Kookmin University's Sungkok Library app around book search, in-library wayfinding, and a personal bookshelf so users can find and locate books more easily.",
              },
              {
                folder: "종합병원앱",
                title: "General Hospital UI Improvement",
                students: "강진서, 김예찬, 이재백, 박주형, 남성민",
                description: "종합병원 앱의 UI를 재설계한 프로젝트. 예약·진료·검사 안내 등 복잡한 정보 구조를 환자가 직관적으로 따라갈 수 있도록 정리하였다. / A general hospital app UI redesign. Reorganizes complex reservation, consultation, and examination flows so that patients can follow them intuitively.",
              },
              {
                folder: "경기사이버도서관앱",
                title: "Gyeonggi-do Cyber Library",
                students: "서송희, 이승연, 정송희, 정수연, 홍수민",
                description: "경기도 사이버도서관 모바일 앱을 재설계한 팀 프로젝트. 전자책 대여, 도서 검색, 찜한 도서 관리 등 독서 여정을 중심으로 이용 흐름을 단순화하였다. / A team project redesigning the Gyeonggi-do Cyber Library mobile app. Simplifies the reading journey across e-book lending, search, and wishlist management.",
              },
              {
                folder: "반려동물입양서비스앱",
                title: "PAWINHAND — Pet Adoption Service",
                students: "김다원, 김유진, 김정윤, 장이준",
                description: "유기동물 입양을 돕는 서비스 앱 'PAWINHAND'를 디자인한 팀 프로젝트. 보호소 탐색, 개인 입양, 실종·제보 기능을 하나의 흐름으로 통합하여 안전하고 책임 있는 입양 문화를 지원한다. / A team project designing 'PAWINHAND', a service app for adopting abandoned animals. Connects shelter discovery, personal adoption, and missing-pet reporting into a single flow that supports a safer adoption culture.",
              },
            ],
          },
        ],
      },
      {
        year: "2022",
        projects: [
          {
            folder: "cashwalk",
            title: "Cashwalk Renewal",
            students: "박성현, 장상훈, 허우민, 김윤석, 정해진",
            description: "Redesigning the Cashwalk app interface to improve user engagement. The project focuses on enhancing the reward system, health tracking, and navigation through user research and iterative prototyping.",
          },
          {
            folder: "peapod",
            title: "Peapod",
            students: "최은영, 강형구, 박채린, 임영헌, 강수정",
            description: "A smart food sharing application service for local communities. The app enables neighbors to share surplus food, reducing waste while building community connections.",
          },
          {
            folder: "Mohaji",
            title: "Mohaji",
            students: "강동흔, 강병준, 김장현, 이창준, 풍제석",
            description: "",
          },
          {
            folder: "VeganChallenge",
            title: "Vegan Challengers",
            students: "류기명, 이수민, 장은정, 조유진, 한효임",
            description: "",
          },
          {
            folder: "WeBus",
            title: "WeBus",
            students: "강병찬, 신예지, 이은수, 임수현, 최민재",
            description: "",
          },
        ],
      },
      {
        year: "2021",
        projects: [
          {
            folder: "AI_Speaker",
            title: "Sleepers",
            students: "김선호, 서정웅, 임정모, 박혜원",
            description: "Designing a sleep improvement service using AI speakers. The service leverages IoT technology to analyze individual sleep patterns and provides personalized solutions through a mobile interface. The design was validated through usability testing.",
          },
          {
            folder: "Camera",
            title: "Security Camera",
            students: "이승희, 류해찬, 이정훈, 김다솔, 이은유",
            description: "Designing a body camera user interface for security applications. The project explores intuitive controls and real-time monitoring features through user research and prototyping.",
          },
          {
            folder: "RobotCleaner",
            title: "Robot Cleaner",
            students: "김윤호, 김정은, 남경선, 이시현, 장현수",
            description: "Designing a robot vacuum cleaner interface with smart home integration. The project includes features such as privacy zones, scheduled cleaning, and lost item tracking through smart shelves.",
          },
          {
            folder: "SmartTV",
            title: "Samsung SmartThings & Smart TV",
            students: "윤종훈, 김민석, 진개, 문정연, 신채이, 이정수",
            description: "Designing a unified interface for Samsung SmartThings and Smart TV with Smart Refrigerator integration. The project focuses on seamless IoT device control and cross-device user experiences.",
          },
          {
            folder: "SmartWatch",
            title: "Smart Watch & Electric Kickboard",
            students: "김나영, 김소연, 정승은, 정채영, 정해찬",
            description: "Designing a smart watch interface for electric kickboard riders. The project includes a companion smart helmet design, with features for navigation, safety alerts, and ride management.",
          },
        ],
      },
    ],
  },
  {
    id: "interaction-design",
    title: "Interaction Design",
    description:
      "인터랙션 디자인 수업의 결과물을 영상으로 소개합니다.",
    type: "video",
    years: [
      { year: "2026" },
      {
        year: "2025",
        categories: [
          {
            id: "Emotion LED",
            label: "Emotion LED",
            projects: [
              {
                folder: "ParkSeoyeon-Noisy",
                title: "Noisy",
                students: "박서연 (20241526)",
                description: "소리(소음)에 반응하여 LED가 '시끄러움'을 시각적으로 표현하는 아두이노 기반 감정 표현 장치. / An Arduino-based emotion piece where the LED visualizes 'noisiness' in response to surrounding sound.",
              },
              {
                folder: "AlexisChrzanowski-Crying",
                title: "Crying",
                students: "Alexis Chrzanowski",
                description: "울음(슬픔)이라는 감정을 LED의 깜빡임과 리듬으로 표현한 인터랙티브 작업. / An interactive piece that expresses the emotion of crying through the blinking rhythm of an LED.",
              },
              {
                folder: "KimJiYoon",
                title: "Emotion LED — Kim Ji Yoon",
                students: "김지윤 (20221569)",
                description: "LED와 센서를 활용해 특정 감정을 표현하도록 설계한 인터랙티브 캡스톤 프로덕트 디자인 작업. / An interactive capstone product design piece that uses an LED and sensors to express a chosen emotion.",
              },
              {
                folder: "EomJeongwoo",
                title: "Emotion LED — Eom Jeongwoo",
                students: "엄정우",
                description: "감정의 상태 변화를 LED의 밝기·색·패턴으로 풀어낸 인터랙션 실험. / An interaction experiment that translates shifts in emotional state into changes in LED brightness, color, and pattern.",
              },
              {
                folder: "JeonDabin-Nervous",
                title: "Nervous",
                students: "전다빈 (20230155)",
                description: "긴장·불안(nervous) 감정을 LED의 떨림과 불규칙한 깜빡임으로 표현한 작업. / A piece that expresses nervousness and anxiety through jittery, irregular LED flicker.",
              },
            ],
          },
          {
            id: "EscapeRoom",
            label: "Escape Room",
            projects: [
              {
                folder: "Gustave",
                title: "Gustave's Secret (1944)",
                students: "Anamaya Semy, Lucile Coudert, Emilie Ling",
                description: "1944년 파리를 배경으로 한 편지와 비밀을 추적하는 스토리 기반 방탈출 프로젝트. 아두이노 기반 인터랙티브 퀴즈로 이야기가 진행된다. / A story-driven escape room set in 1944 Paris, tracing letters and hidden secrets. The narrative unfolds through Arduino-based interactive puzzles.",
              },
              {
                folder: "minecraft",
                title: "Save William — Minecraft Escape",
                students: "",
                description: "마인크래프트 세계관을 차용한 방탈출 프로젝트 'Save William'. 아두이노 퀴즈와 영상으로 스토리를 구성했다. / A Minecraft-themed escape room project ('Save William') built around Arduino puzzles and a supporting film.",
              },
              {
                folder: "GrandTheftArduino",
                title: "Grand Theft Arduino",
                students: "Seunghyo Jeong, Sangwon Jeong, Minhyuk Cho, Alexis Chrzanowski",
                description: "'Grand Theft Auto' 세계관을 차용한 아두이노 기반 방탈출 프로젝트. 범죄 미션을 풀어나가는 인터랙티브 퀴즈로 구성되어 있다. / An Arduino-based escape room that riffs on the Grand Theft Auto universe, built around interactive puzzles that play out a series of heist missions.",
              },
              {
                folder: "TeamPlankton",
                title: "Steal the Krabby Patty Recipe! (게살버거 레시피 훔치기)",
                students: "Jiwon Kim, Seunghyun Nam, Jeongwoo Eom, Dabin Jeon",
                description: "스폰지밥의 플랑크톤이 되어 게살버거 비밀 레시피를 훔치는 스토리 기반 방탈출 프로젝트. 만화풍 비주얼과 아두이노 퀴즈가 어우러진다. / A story-driven escape room where the player becomes SpongeBob's Plankton on a mission to steal the Krabby Patty secret recipe — cartoon visuals paired with Arduino-based puzzles.",
              },
            ],
          },
        ],
      },
      {
        year: "2024",
        categories: [
          {
            id: "ProductDesign",
            label: "Product Design",
            projects: [
              {
                folder: "LeeYoungJi-ClappingLight",
                title: "Clap-Activated Light System",
                students: "이영지 (20200495)",
                description: "사운드 센서와 LED, 아두이노를 이용해 박수 소리로 조명을 껐다 켤 수 있는 인터랙티브 조명 시스템. 핸즈프리 제어를 통해 편의성과 접근성을 높였다. / An interactive lighting system that uses a sound sensor, LED, and Arduino so the user can clap to toggle the light on and off — offering hands-free control for convenience and accessibility.",
              },
              {
                folder: "HyunDonghee-BinocularLamp",
                title: "Binocular Lamp",
                students: "현동희 (20181747)",
                description: "책상 위를 가볍게 두드리면 조명이 그 방향으로 기울어져 원하는 지점을 비춰주는 램프. 거울처럼 튀어나오는 빛 대신 정확히 필요한 곳만 밝히는 조명 경험을 제안한다. / A desk lamp that tilts toward wherever you tap, pointing the light exactly where you need it — so the lamp stops reflecting back into your eyes and starts illuminating the page.",
              },
              {
                folder: "Best",
                title: "Automatic Gas Valve Control System",
                students: "",
                description: "외출 후 가스 밸브를 잠갔는지 반복적으로 불안해하는 문제를 풀기 위한 자동 가스 차단 시스템. 온습도 센서(DHT11)로 조리 종료를 감지하고, 서보 모터로 밸브를 자동으로 잠그며 LED로 상태를 알려준다. / An automatic gas shut-off system that relieves the familiar 'did I turn off the gas?' anxiety. A DHT11 sensor detects when cooking has ended, a servo motor locks the valve, and an LED indicates the device's state.",
              },
            ],
          },
          {
            id: "EscapeRoom",
            label: "Escape Room",
            projects: [
              {
                folder: "SantaEscape",
                title: "Santa Escape",
                students: "",
                description: "산타가 되어 탈출하는 크리스마스 테마 방탈출 프로젝트. 아두이노 기반 인터랙티브 퀴즈로 구성되어 있다. / A Christmas-themed escape room where you play Santa trying to escape, built around Arduino-based interactive puzzles.",
              },
              {
                folder: "Team02",
                title: "Interactive Capstone — Team 02",
                students: "",
                description: "학생 팀이 제작한 방탈출 프로젝트 영상. / Escape room project video created by a student team.",
              },
              {
                folder: "Team04",
                title: "Interactive Capstone — Team 04",
                students: "",
                description: "학생 팀이 제작한 방탈출 프로젝트 영상. / Escape room project video created by a student team.",
              },
            ],
          },
        ],
      },
      {
        year: "2023",
        label: "Team-Team Capstone",
        projects: [
          {
            folder: "BalGeolEum",
            title: "밝걸음 — 폐지 수거 노인 안전",
            students: "구준혁, 김민준, 김태성, 박채은 (짜장면줘!! 팀)",
            description: "폐지 줍는 어르신들이 주로 활동하는 새벽·야간 시간대의 교통사고 위험을 줄이기 위한 인터랙티브 안전 장치 프로젝트. 리어카와 작업자의 위치를 주변 차량에 알려 사고를 예방한다. / An interactive safety device project for elderly paper collectors who work during dawn and night hours. Makes the cart and the worker visible to passing vehicles to prevent traffic accidents.",
          },
          {
            folder: "BalKida",
            title: "안전을 밝키다 — 폐지 수거 어르신 서비스 전략",
            students: "김다원, 김유진, 장세림, 정해진, 조서영 (Team D)",
            description: "폐지 수거 어르신의 하루를 더 안전하게 만드는 서비스 전략 제안. 공업디자인학과 × 광고홍보학과 협업으로 안전 프로덕트와 홍보·인식 개선 캠페인을 함께 설계하였다. / A service strategy to make elderly paper collectors' days safer. A collaboration between Industrial Design and Advertising & Public Relations — pairing a safety product with an awareness campaign.",
          },
          {
            folder: "Dolboca",
            title: "DOLBOCAR — 나를 돌아볼 수 있는 작은 여유",
            students: "김영서, 신지애, 정송희, 정연우 (Cutie Pie)",
            description: "폐지 수거 어르신을 위한 맞춤형 리어카 제안. 적재·운반·안전 기능을 재설계하여 작업 효율을 높이고 어르신이 스스로를 돌볼 수 있는 여유를 만들어준다. 삼성화재와 협업하였다. / A redesigned cart for elderly paper collectors. Rethinks loading, transport, and safety features to reduce the physical load and give workers breathing room to care for themselves. A collaboration with Samsung Fire.",
          },
          {
            folder: "GolmokGil5",
            title: "골목길 5초 멈춤 캠페인",
            students: "강승훈, 김혜원, 오민규, 장지예, 조인성 (5초만 멈춰조)",
            description: "'리어카의 손짓이 보이면 5초 멈춰주세요' — 좁은 골목길에서 리어카와 차량의 충돌을 줄이기 위한 인터랙티브 캠페인. 장갑 신호·차량·주민이 함께 참여하는 5초 멈춤 문화를 만든다. 삼성화재와 협업하였다. / 'Stop for five seconds when you see the cart's hand signal.' An interactive campaign that reduces collisions between carts and cars in narrow alleys by building a five-second-stop culture that involves signal gloves, drivers, and residents. A collaboration with Samsung Fire.",
          },
          {
            folder: "Wave",
            title: "WAVE — 작은 물결이 큰 파도가 되다",
            students: "김다정, 김수빈, 유지혜, 석다현",
            description: "자원재생활동가(폐지 줍는 어르신)가 정당한 노동자로 인정받을 수 있도록 제도와 인식을 바꾸는 캠페인·서비스 제안. 공업디자인학과 × 정치외교학과 협업으로, 서울특별시·삼성화재와 함께 진행되었다. / A campaign and service proposal to have recycling activists (elderly paper collectors) recognized as legitimate workers — shifting both policy and public perception. A collaboration between Industrial Design and Political Science & Diplomacy, with Seoul City and Samsung Fire.",
          },
        ],
      },
      {
        year: "2022",
        students: "강병찬, 장현수, 강병준, 신수범, 원가은, 풍제석, 성기종, 강진서, 박채린, 임영현, 이민선, 강수정, 신찬희, 이수민, 이은수, 보넷 알렉시, 피톤 에노라, 곤잘레스 위니 다니엘라, 데 라 자마 세포라",
        projects: [
          {
            folder: "Mini-Project",
            title: "Mini Project",
            students: "",
            description: "인터랙션 디자인 기초를 습득한 후에 아두이노와 기본적인 센서 및 액츄에이터를 활용하여 일상 생활에서 필요한 간단한 제품 아이디어를 제안합니다. / After learning the fundamentals of interaction design, students propose simple product ideas for everyday life using Arduino with basic sensors and actuators.",
          },
          {
            folder: "EscpaeRoom",
            title: "Escape Room Project",
            students: "",
            description: "인터랙션 디자인 수업의 최종 과제로서, 방탈출 게임을 만드는 프로젝트이다. 학생들은 그룹 별로 방의 컨셉을 개발하고 3개의 인터랙티브 퀴즈를 만들어 방탈출 게임을 디자인한다. / As the final project of the Interaction Design course, students design an escape room game. Each group develops a room concept and creates three interactive quizzes for the escape room.",
          },
        ],
      },
    ],
  },
];
