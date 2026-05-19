import React from 'react';

const ProjectSection = () => {
  const projects = [
    {
      title: "Rairang Khola Hydropower Power Project",
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Ridi Khola Hydropower Project",
      image: "./2nd_project.png",
    }
  ];

  return (
    <section className="bg-blue-800 relative py-12 lg:py-16 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-20">
          
          {/* Left Content Area */}
          <div className="w-full lg:w-1/3 text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 leading-tight tracking-tight">
              Our Projects
            </h2>
            <p className="text-blue-50 leading-relaxed mb-8 text-sm md:text-base opacity-90 max-w-2xl lg:max-w-none">
              Rawa Energy Development Ltd. has undertaken and purchased all the shares of 
              Rairang Hydropower Development Company Limited in 2013 AD. The 
              management of the company has since been successfully integrated under 
              the Rawa Energy umbrella.
            </p>
            <button className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#4372c4]  font-bold text-xs lg:text-sm tracking-wider uppercase rounded-xl shadow-lg shadow-blue-900/20 overflow-hidden transition-all duration-300 pointer-events-auto cursor-pointer">
              {/* Animated Background Slide on Hover */}

              <span className="relative z-10">View All Projects</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>

          {/* Right Cards Area */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white p-3 lg:p-4 rounded-sm shadow-xl cursor-pointer group"
              >
                {/* Image Container with 16:10 Aspect Ratio */}
                <div className="aspect-[16/10] w-full overflow-hidden rounded-sm mb-4">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
                {/* Title - Slate color for contrast against white card */}
                <h3 className="text-slate-800 font-bold text-base lg:text-md leading-snug group-hover:text-[#4372c4] transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectSection;