import React from 'react';
import { FileText, Download, Calendar, ArrowRight, FilePieChart } from 'lucide-react';
import GlobalHeroSection from '../components/GlobalHeroSection';

const reportsData = [
  { 
    id: 1, 
    title: 'Annual Environmental Impact Report 2025', 
    date: 'March 15, 2026', 
    size: '4.2 MB', 
    category: 'Environmental',
    fileUrl: './reports/Project.pdf' // Path relative to public folder
  },
  { 
    id: 2, 
    title: 'Quarterly Financial Performance - Q4', 
    date: 'Jan 10, 2026', 
    size: '2.8 MB', 
    category: 'Financial',
    fileUrl: './reports/Project.pdf' 
  },
  { 
    id: 3, 
    title: 'Technical Specification: Upper Marsyangdi Project', 
    date: 'Dec 05, 2025', 
    size: '12.5 MB', 
    category: 'Technical',
    fileUrl: './reports/Project.pdf' 
  },
  { 
    id: 4, 
    title: 'Health & Safety Compliance Audit', 
    date: 'Nov 22, 2025', 
    size: '1.5 MB', 
    category: 'Compliance',
    fileUrl: './reports/Project.pdf' 
  },
];

const featuredProjects = [
  { id: 101, name: 'Bhotekoshi Hydro', status: 'Operational' },
  { id: 102, name: 'Trishuli-3B Upgrade', status: 'Under Construction' },
];

const ReportsPage = () => {
  return (
    <div className="pb-20 font-sans">
      <GlobalHeroSection title={"Resource Center"} pages={"reports-downloads"} />

      <div className="max-w-7xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* --- Main Download Section (Left) --- */}
        <main className="lg:col-span-8 space-y-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Official Reports & Documents</h2>
            <p className="text-slate-500 mt-2">Access our latest technical findings, financial statements, and environmental audits.</p>
          </div>

          <div className="grid gap-4">
            {reportsData.map((report) => (
              <div 
                key={report.id} 
                className="group flex items-center justify-between p-5 bg-white border border-slate-200 rounded-sm hover:border-blue-600 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                      {report.title}
                    </h3>
                    <div className="flex items-center gap-4 mt-1 text-sm text-slate-500">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {report.date}</span>
                      <span>{report.size}</span>
                      <span className="bg-slate-100 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider">{report.category}</span>
                    </div>
                  </div>
                </div>
                
                {/* Download Link */}
                <a 
                  href={report.fileUrl} 
                  download 
                  className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 text-sm rounded-sm hover:bg-blue-600 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Download</span>
                </a>
              </div>
            ))}
          </div>
        </main>

        {/* --- Sidebar (Right) --- */}
        <aside className="lg:col-span-4 space-y-10">
          
          <section className="bg-slate-50 p-6 rounded-sm border border-slate-100">
            <h3 className="text-lg font-bold border-b-2 border-blue-600 pb-2 mb-4">RELATED PROJECTS</h3>
            <div className="space-y-4">
              {featuredProjects.map(project => (
                <div key={project.id} className="group cursor-pointer">
                  <p className="text-sm font-bold text-slate-800 group-hover:text-blue-600 flex items-center justify-between">
                    {project.name}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </p>
                  <p className="text-xs text-slate-500">{project.status}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-blue-600 p-6 rounded-sm text-white relative overflow-hidden">
            <FilePieChart className="absolute -right-4 -bottom-4 w-24 h-24 text-blue-500 opacity-20" />
            <h3 className="text-lg font-bold mb-2">Transparency Matters</h3>
            <p className="text-sm text-blue-100 leading-relaxed relative z-10">
              We provide open access to all environmental and social impact assessments to ensure community trust.
            </p>
            <button className="mt-4 text-xs font-bold underline hover:text-white transition-colors">
              VIEW COMPLIANCE POLICY
            </button>
          </section>

        </aside>
      </div>
    </div>
  );
};

export default ReportsPage;