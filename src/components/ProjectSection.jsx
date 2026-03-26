import React from 'react';
import { ChevronUp } from 'lucide-react';

const ProjectSection = () => {
  const projects = [
    {
      title: "Rairang Khola Hydropower Power Project",
      // Using a placeholder that fits the hydropower theme
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Ridi Khola Hydropower Project",
      image: "https://images.unsplash.com/photo-1509391366360-fe55f993560a?auto=format&fit=crop&q=80&w=800",
    }
  ];

  const customStyles = `
    .bg-rawa-blue {
      background-color: #4372c4;
    }
    .project-card-shadow {
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
    // .card-hover-effect {
    //   transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    // }
    // .card-hover-effect:hover {
    //   transform: translateY(-8px);
    //   box-shadow: 0 15px 45px rgba(0, 0, 0, 0.15);
    // }
    .aspect-hydropower {
      aspect-ratio: 16 / 10;
    }
  `;

  return (
    <section className="bg-rawa-blue relative py-16 lg:py-24 text-white overflow-hidden">
      <style>{customStyles}</style>
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content Area: Tailwind for spacing and typography */}
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 leading-tight">
              Our Projects
            </h2>
            <p className="text-blue-50 leading-relaxed mb-8 text-md opacity-90">
              Rawa Energy Development Ltd. has undertaken and purchased all the shares of 
              Rairang Hydropower Development Company Limited in 2013 AD. The 
              management of the company has since been successfully integrated under 
              the Rawa Energy umbrella.
            </p>
            <button className="px-8 py-3 border-2 border-white hover:bg-white hover:text-blue-600 font-medium rounded-md transition-colors duration-300 cursor-pointer">
              View All Projects
            </button>
          </div>

          {/* Right Cards Area: Custom CSS for complex hover behavior */}
          <div className="w-full lg:w-2/3 flex flex-col md:flex-row gap-6">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="project-card-shadow card-hover-effect bg-white p-4 rounded-xl flex-1 cursor-pointer group"
              >
                <div className="aspect-hydropower w-full overflow-hidden rounded-lg mb-4">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-slate-800 font-bold text-lg leading-snug">
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