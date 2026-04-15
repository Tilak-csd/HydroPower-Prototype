import React from 'react';
import { Calendar, FileDown, ChevronRight } from 'lucide-react';

const NewsSection = () => {
  const updates = [
    {
      id: 1,
      type: "News",
      title: "Annual General Meeting 2026 Notice",
      date: "April 10, 2026",
      summary: "Notice is hereby given to all shareholders regarding the upcoming 12th Annual General Meeting to be held at the central office.",
      link: "#"
    },
    {
      id: 2,
      type: "Report",
      title: "Second Quarter Progress Report - FY 2082/83",
      date: "March 25, 2026",
      summary: "Detailed progress report of the construction phase, including turbine installation and transmission line updates.",
      link: "#",
      isDownload: true
    },
    {
      id: 3,
      type: "News",
      title: "Local Community Development Fund Distribution",
      date: "March 02, 2026",
      summary: "Successful completion of the road maintenance project in the project-affected area as part of our CSR initiatives.",
      link: "#"
    }
  ];

  return (
    <section className="bg-white py-16 px-4 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Simple Header */}
        <div className="border-l-4 border-blue-700 pl-4 mb-10">
          <h2 className="text-3xl font-bold text-gray-800">News & Reports</h2>
          <p className="text-gray-500 mt-1 text-sm uppercase tracking-wide">Latest updates from the project site</p>
        </div>

        {/* Standard 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {updates.map((item) => (
            <div key={item.id} className="flex flex-col border border-gray-200 hover:border-blue-300 transition-colors bg-white">
              
              {/* Category Tag */}
              <div className="px-5 pt-5">
                <span className={`text-[10px] font-bold py-1 px-2 uppercase tracking-wider rounded ${
                  item.type === 'Report' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                }`}>
                  {item.type}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex-grow">
                <div className="flex items-center text-gray-400 text-xs mb-3">
                  <Calendar size={14} className="mr-1" />
                  {item.date}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {item.summary}
                </p>
              </div>

              {/* Action Footer */}
              <div className="p-5 pt-0 mt-auto">
                <a 
                  href={item.link} 
                  className="inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-900"
                >
                  {item.isDownload ? (
                    <>
                      <FileDown size={16} className="mr-2" />
                      Download PDF
                    </>
                  ) : (
                    <>
                      Read Full Article
                      <ChevronRight size={16} className="ml-1" />
                    </>
                  )}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <a 
              href="/about/chairman" 
              className="mt-8 inline-block w-full sm:w-auto text-center px-8 lg:px-10 py-3 lg:py-4 bg-blue-600 text-white font-bold text-xs lg:text-sm rounded-sm shadow-lg shadow-blue-100 hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-300 tracking-wider"
            >
              Browse All Updates
            </a>
        </div>

      </div>
    </section>
  );
};

export default NewsSection;