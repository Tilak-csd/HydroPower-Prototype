import React from 'react';

const ProjectSection = () => {
  const projects = [
    {
      title: "Rairang Khola Hydropower Power Project",
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Ridi Khola Hydropower Project",
      image: "https://images.unsplash.com/photo-1509391366360-fe55f993560a?auto=format&fit=crop&q=80&w=800",
    }
  ];

  return (
    <section className="bg-[#4372c4] relative py-12 lg:py-24 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-20">
          
          {/* Left Content Area */}
          <div className="w-full lg:w-1/3 text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 lg:mb-6 leading-tight tracking-tight">
              Our Projects
            </h2>
            <p className="text-blue-50 leading-relaxed mb-8 text-sm md:text-base lg:text-lg opacity-90 max-w-2xl lg:max-w-none">
              Rawa Energy Development Ltd. has undertaken and purchased all the shares of 
              Rairang Hydropower Development Company Limited in 2013 AD. The 
              management of the company has since been successfully integrated under 
              the Rawa Energy umbrella.
            </p>
            <button className="w-full sm:w-auto px-8 py-3 border-2 border-white hover:bg-white hover:text-[#4372c4] font-bold text-xs lg:text-sm uppercase tracking-widest rounded-sm transition-all duration-300">
              View All Projects
            </button>
          </div>

          {/* Right Cards Area */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white p-3 lg:p-4 rounded-sm shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group"
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
                <h3 className="text-slate-800 font-bold text-base lg:text-xl leading-snug group-hover:text-[#4372c4] transition-colors duration-300">
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