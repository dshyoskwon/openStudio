export default function ProjectsPage() {
  // 데이터 분리
  const industryProjects = [
    { title: "AI Urban Furniture", year: "2024", type: "Interaction" },
    { title: "Smart Mobility UX", year: "2023", type: "UX/UI" },
    { title: "Retail Experience", year: "2023", type: "Service Design" },
    { title: "Corporate Branding", year: "2022", type: "Brand Design" },
  ];

  const researchProjects = [
    { title: "Tactile Interface", year: "2023", type: "HCI Research" },
    { title: "Sustainable Materials", year: "2022", type: "Material" },
    { title: "Data Visualization", year: "2022", type: "Info Design" },
  ];

  const incubatingProjects = [
    { title: "Bio-Design Lab", year: "Ongoing", type: "Experimental" },
    { title: "Generative Art Tool", year: "Ongoing", type: "Creative Coding" },
    { title: "Future Wearables", year: "Ongoing", type: "Fashion Tech" },
  ];

  // 공통 카드 컴포넌트 - 태그 내용을 category(타입)로 변경
  const ProjectCard = ({ project, category, colorClass }: { project: any, category: string, colorClass: string }) => (
    <div className="group cursor-pointer mb-8">
      <div className="bg-gray-100 aspect-square w-full mb-3 rounded-sm flex items-center justify-center text-gray-400 group-hover:bg-gray-200 transition-colors">
        <span className="text-xs">Image</span>
      </div>
      <div>
        {/* 태그 내용: 연도 -> 카테고리(타입) */}
        <span className={`inline-block text-[10px] font-bold uppercase px-2 py-0.5 rounded border mb-2 ${colorClass}`}>
          {category}
        </span>
        <h3 className="text-base font-bold leading-tight group-hover:underline decoration-1 underline-offset-2 mb-1">
          {project.title}
        </h3>
        {/* 연도는 하단 설명으로 이동하거나 함께 표시 */}
        <p className="text-xs text-gray-500">{project.type} • {project.year}</p>
      </div>
    </div>
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="border-b border-black pb-4">
        <h1 className="text-3xl font-bold uppercase tracking-widest">Projects</h1>
      </header>
      
      {/* 3 Columns Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1: Industry */}
        <div className="flex flex-col">
          {/* 상단 헤더 제거 (태그가 역할을 대신함) 또는 유지 선택 -> 깔끔하게 유지하되 태그 강조 */}
          <div className="mb-6 pb-2 border-b border-gray-200 hidden md:block">
             {/* 모바일에서는 숨기고 카드 태그로 확인, PC에서는 구조 명확화 위해 빈 라인만 유지하거나 제목 표시 */}
             <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Industry</span>
          </div>
          <div>
            {industryProjects.map((p, i) => (
              <ProjectCard key={i} project={p} category="Industry" colorClass="bg-blue-50 text-blue-800 border-blue-100" />
            ))}
          </div>
        </div>

        {/* Column 2: Research */}
        <div className="flex flex-col">
          <div className="mb-6 pb-2 border-b border-gray-200 hidden md:block">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Research</span>
          </div>
          <div>
            {researchProjects.map((p, i) => (
              <ProjectCard key={i} project={p} category="Research" colorClass="bg-purple-50 text-purple-800 border-purple-100" />
            ))}
          </div>
        </div>

        {/* Column 3: Incubating */}
        <div className="flex flex-col">
          <div className="mb-6 pb-2 border-b border-gray-200 hidden md:block">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Incubating</span>
          </div>
          <div>
            {incubatingProjects.map((p, i) => (
              <ProjectCard key={i} project={p} category="Incubating" colorClass="bg-green-50 text-green-800 border-green-100" />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
