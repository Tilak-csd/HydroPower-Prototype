import React, { useState } from 'react';
import { Calendar, ChevronRight, Newspaper, ArrowRight } from 'lucide-react';
import GlobalHeroSection from '../components/GlobalHeroSection';

const newsArticles = [
  {
    id: 1,
    title: 'Annual General Meeting 2026 Notice',
    date: 'April 10, 2026',
    type: 'NEWS',
    summary: 'Notice is hereby given to all shareholders regarding the upcoming 12th Annual General Meeting to be held at the central office.',
    link: 'AGM_Notice_2026_Nepali.pdf',
    isDownload: false
  },
  {
    id: 2,
    title: 'Local Community Development Fund Distribution',
    date: 'March 02, 2026',
    type: 'NEWS',
    summary: 'Successful completion of the road maintenance project in the project-affected area as part of our CSR initiatives.',
    link: '#',
    isDownload: false
  },
  {
    id: 3,
    title: 'Pre-Qualification Notice for Electro-Mechanical Works',
    date: 'February 18, 2026',
    type: 'NEWS',
    summary: 'Sealed proposals are invited from eligible international contractors for the supply, installation, and commissioning of turbine units.',
    link: '#',
    isDownload: false
  }
];

const categories = [
  { id: 'all', name: 'All Updates' },
  { id: 'news', name: 'Latest News' },
  { id: 'notice', name: 'Official Notices' }
];

const NewsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className="pb-16 md:pb-24 font-sans bg-white">
      <GlobalHeroSection title={"News & Media"} page={"news-updates"} />

      <div className="max-w-7xl mx-auto px-4 mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* --- Main News Grid (Left Column) --- */}
        <main className="lg:col-span-8 space-y-6 order-1">
          <div className="mb-6 md:mb-8 text-left">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 uppercase tracking-tight">
              Latest Updates from the Project Site
            </h2>
            <div className="w-16 h-[3.5px] bg-[#025a9e] mt-2" />
          </div>

          {/* Cards Layout Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsArticles.map((article) => (
              <div 
                key={article.id} 
                className="bg-white border border-slate-200 p-6 flex flex-col justify-between hover:shadow-md transition-shadow duration-300 rounded-sm"
              >
                <div>
                  {/* Category Badge */}
                  <span className="inline-block bg-blue-50 text-[#025a9e] text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-sm uppercase mb-3">
                    {article.type}
                  </span>
                  
                  {/* Date Flag */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{article.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-slate-800 text-base md:text-lg mb-3 leading-snug hover:text-[#025a9e] transition-colors cursor-pointer">
                    {article.title}
                  </h3>

                  {/* Paragraph Summary */}
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed text-justify mb-6">
                    {article.summary}
                  </p>
                </div>

                {/* Read Full Article Trigger Link */}
                <a 
                  href={article.link} 
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#025a9e] hover:text-slate-900 transition-colors uppercase tracking-wider"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </main>

        {/* --- Navigation Filter Feed (Right Sidebar) --- */}
        <aside className="lg:col-span-4 space-y-6 order-2">
          
          <section className="bg-slate-50 p-5 md:p-6 border border-slate-100 rounded-sm">
            <h3 className="text-sm font-extrabold text-slate-900 tracking-wider border-b-2 border-[#025a9e] pb-2 mb-4 uppercase flex items-center gap-2">
              <Newspaper className="w-4 h-4 text-[#025a9e]" /> News Archive
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
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeCategory === cat.id ? 'translate-x-0' : '-translate-x-1'}`} />
                </button>
              ))}
            </div>
          </section>

        </aside>

      </div>
    </div>
  );
};

export default NewsPage;