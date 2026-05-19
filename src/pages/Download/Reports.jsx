import React, { useState } from 'react';
import { FileText, Download, Calendar, FolderOpen, ChevronRight } from 'lucide-react';
import GlobalHeroSection from '../../components/GlobalHeroSection';

const reportsData = [
  { 
    id: 1, 
    title: 'Annual Environmental Impact Report 2025', 
    date: 'March 15, 2026',  
    category: 'Report & Document',
    fileUrl: './reports/Project.pdf'
  },
  { 
    id: 2, 
    title: 'Quarterly Financial Performance - Q4', 
    date: 'Jan 10, 2026', 
    category: 'Report & Document',
    fileUrl: './reports/Project.pdf' 
  },
  { 
    id: 3, 
    title: 'Nalgad Project License Extension Approval', 
    date: 'Dec 05, 2025', 
    category: 'Legal Documents',
    fileUrl: './reports/Project.pdf' 
  },
  { 
    id: 4, 
    title: 'NEA Power Purchase Agreement (PPA) Signed Copy', 
    date: 'Nov 22, 2025', 
    category: 'Legal Documents',
    fileUrl: './reports/Project.pdf' 
  },
];

// Sidebar document categorization index
const categories = [
  { id: 'all', name: 'All Resources' },
  { id: 'reports', name: 'Report & Document' },
  { id: 'legal', name: 'Legal Documents' }
];

const ReportsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter logic matching sidebar selection
  const filteredReports = reportsData.filter(report => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'reports') return report.category === 'Report & Document';
    if (activeCategory === 'legal') return report.category === 'Legal Documents';
    return true;
  });

  return (
    <div className="pb-12 md:pb-20 font-sans bg-white">
      <GlobalHeroSection title={"Resource Center"} page={"reports-download"} />

      <div className="max-w-7xl mx-auto px-4 mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* --- Main Download Section (Left) --- */}
        <main className="lg:col-span-8 space-y-6 order-1">
          <div className="mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">
              {categories.find(c => c.id === activeCategory)?.name}
            </h2>
            <p className="text-slate-500 mt-2 text-sm md:text-base">
              Access official technical findings, corporate statements, and regulatory compliance files.
            </p>
          </div>

          <div className="grid gap-4">
            {filteredReports.length > 0 ? (
              filteredReports.map((report) => (
                <div 
                  key={report.id} 
                  className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 md:p-5 bg-white border border-slate-200 rounded-sm hover:border-[#025a9e] hover:shadow-md transition-all gap-4"
                >
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="p-3 bg-blue-50 text-[#025a9e] rounded-sm group-hover:bg-[#025a9e] group-hover:text-white transition-colors shrink-0">
                      <FileText className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 text-sm md:text-base group-hover:text-[#025a9e] transition-colors">
                        {report.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-xs md:text-sm text-slate-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {report.date}
                        </span>
                        <span className="bg-slate-100 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider text-slate-600">
                          {report.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <a 
                    href={report.fileUrl} 
                    download 
                    className="flex items-center justify-center gap-2 bg-slate-900 text-white px-4 py-2.5 sm:py-2 text-sm rounded-sm hover:bg-[#025a9e] transition-colors w-full sm:w-auto shrink-0"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </a>
                </div>
              ))
            ) : (
              <p className="text-slate-400 text-sm italic py-4">No documents available in this segment.</p>
            )}
          </div>
        </main>

        {/* --- Sidebar Document Categories Index (Right) --- */}
        <aside className="lg:col-span-4 space-y-6 order-2">
          
          <section className="bg-slate-50 p-5 md:p-6 rounded-sm border border-slate-100">
            <h3 className="text-sm font-extrabold text-slate-900 tracking-wider border-b-2 border-[#025a9e] pb-2 mb-4 uppercase flex items-center gap-2">
              <FolderOpen className="w-4 h-4 text-[#025a9e]" /> Document Categories
            </h3>
            
            <div className="flex flex-col space-y-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`w-full flex items-center justify-between px-3 py-3 text-sm font-bold transition-all text-left rounded-sm
                    ${activeCategory === cat.id 
                      ? 'bg-[#025a9e] text-white' 
                      : 'text-slate-700 hover:bg-slate-200/60 hover:text-[#025a9e]'
                    }`}
                >
                  <span>{cat.name}</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeCategory === cat.id ? 'translate-x-0' : '-translate-x-1 group-hover:translate-x-0'}`} />
                </button>
              ))}
            </div>
          </section>

        </aside>
      </div>
    </div>
  );
};

export default ReportsPage;