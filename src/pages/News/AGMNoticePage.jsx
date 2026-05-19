import React from 'react';
import { Calendar, Download, FileText, ArrowLeft, ExternalLink } from 'lucide-react';
import GlobalHeroSection from '../../components/GlobalHeroSection';

const AGMNoticePage = () => {
  // Path to the generated PDF located inside your project's public folder
  const pdfFileUrl = '/reports/AGM_2026_Nepali.pdf';

  return (
    <div className="pb-16 md:pb-24 font-sans bg-white text-left">
      <GlobalHeroSection title={"Notice Board"} page={"News / AGM-Notice"} />

      <div className="max-w-4xl mx-auto px-6 mt-8 md:mt-12">
        
        {/* --- Back to News Button Navigation --- */}
        <button 
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#025a9e] transition-colors uppercase tracking-wider mb-8 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to News Updates</span>
        </button>

        {/* --- Main Headline Area --- */}
        <header className="mb-10">
          <span className="inline-block bg-blue-50 text-[#025a9e] text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-sm uppercase mb-3">
            Official Notice
          </span>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Annual General Meeting 2026 Notice
          </h1>
          <div className="w-20 h-[3.5px] bg-[#025a9e] mt-3 mb-4" />

          <div className="flex items-center gap-1.5 text-xs md:text-sm text-slate-400">
            <Calendar className="w-4 h-4" />
            <span>Published: April 10, 2026</span>
            <span className="text-slate-200 px-1">•</span>
            <span>Ref: REDL/AGM/2026-12</span>
          </div>
        </header>

        {/* --- Explanatory Brief Intro --- */}
        <article className="prose max-w-none text-slate-600 text-sm md:text-[15px] leading-relaxed mb-10 text-justify space-y-4">
          <p>
            Notice is hereby given to all valued shareholders regarding the upcoming <strong>12th Annual General Meeting (AGM)</strong> of Rawa Energy Development Ltd. The meeting is designated to deliberate upon key statutory milestones, review audited financial sheets for the prior cycle, and pass operational frameworks for upcoming run-of-the-river infrastructure updates.
          </p>
          <p>
            The official document has been fully signed and published below for public record. Shareholders can review the complete scheduled agendas, location directions, and book closure parameters directly in the document canvas below or download a print-ready copy for reference.
          </p>
        </article>

        {/* --- Interactive Action Box (Download / Print Focus) --- */}
        <div className="bg-slate-50 border border-slate-200/80 p-4 md:p-6 rounded-sm mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-3 bg-white border border-slate-200 text-[#025a9e] rounded-sm shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-sm md:text-base">Official AGM Announcement.pdf</h3>
              <p className="text-xs text-slate-400 mt-0.5">Size: ~124 KB • Format: Print-Ready A4 Document</p>
            </div>
          </div>
          
          <a 
            href={pdfFileUrl}
            download="Annual_General_Meeting_2026_Notice.pdf"
            className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-[#025a9e] text-white font-bold text-xs md:text-sm px-5 py-3 rounded-sm transition-colors w-full sm:w-auto tracking-wider uppercase shrink-0 shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF Document</span>
          </a>
        </div>

        {/* --- Live Document PDF Preview Frame Canvas --- */}
        <div className="border border-slate-200 rounded-sm bg-slate-100 shadow-inner overflow-hidden mb-4">
          <div className="bg-slate-200/80 border-b border-slate-300/60 px-4 py-2.5 flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wide">
            <span>Live Document Viewer</span>
            <a href={pdfFileUrl} target="_blank" rel="noreferrer" className="hover:text-[#025a9e] flex items-center gap-1">
              <span>Open Fullscreen</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
          
          {/* Embedding the live native PDF viewer */}
          <iframe 
            src={`${pdfFileUrl}#toolbar=1&navpanes=0`} 
            title="12th AGM Official Notice Document Preview" 
            className="w-full h-[550px] md:h-[750px] block bg-white"
          />
        </div>

        <p className="text-[11px] text-slate-400 text-center italic">
          * Note: Viewing requires a browser with built-in PDF support. Alternatively, use the main download action button above.
        </p>

      </div>
    </div>
  );
};

export default AGMNoticePage;