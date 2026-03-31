import React, { useState, useMemo } from 'react';
import { Settings } from 'lucide-react'; 
import GlobalHeroSection from '../components/GlobalHeroSection';

const projectsData = [
  { id: 1, type: 'Hydro', title: 'Major Hydroelectric Dam Expansion', date: 'October 24, 2025', img: 'https://imgproxy.gridwork.co/Xf-hK9Hyx-1j-4u2DbyxltIz8x-_U_eJCL5C8RE-PVo/w:900/h:600/rt:fill/g:fp:0.5:0.5/q:82/el:1/aHR0cHM6Ly9zMy51cy1lYXN0LTIuYW1hem9uYXdzLmNvbS9pdHQtaW1hZ2VzL3BhbmFtYV9jYW5hbC5qcGc.jpg', desc: 'A massive expansion project increasing energy output by 40% across the northern grid.' },
  { id: 2, type: 'Hydro', title: 'River Turbine Maintenance', date: 'August 05, 2025', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLJDwBrACs4V9sNy-x6PLwnEf6ytZW1leWpA&s', desc: 'Routine efficiency upgrades for the downstream turbine systems.' },
  { id: 3, type: 'Solar', title: 'Urban Solar Initiative', date: 'July 19, 2025', img: 'https://media.licdn.com/dms/image/v2/D4D12AQHvOT_1cTCgbA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1702259283583?e=2147483647&v=beta&t=XsnCrQ6usOdC4Wxa5YsRebzMX4Jwhir9wToWD3MS4zw', desc: 'Integrating solar solutions into metropolitan infrastructure.' },
];

const Projects = () => {
  const [filter, setFilter] = useState('All Projects');
  const [isLoading, setIsLoading] = useState(false);

  const categories = useMemo(() => [
    { name: 'All Projects', count: projectsData.length },
    { name: 'Hydro Projects', count: projectsData.filter(p => p.type === 'Hydro').length },
    { name: 'Solar Projects', count: projectsData.filter(p => p.type === 'Solar').length },
  ], []);

  const filteredProjects = useMemo(() => {
    if (filter === 'All Projects') return projectsData;
    const type = filter.split(' ')[0]; 
    return projectsData.filter(p => p.type === type);
  }, [filter]);

  const handleFilterChange = (cat) => {
    setIsLoading(true);
    setFilter(cat);
    setTimeout(() => setIsLoading(false), 400); 
  };

  return (
    <div className="pb-16 font-sans bg-white">
      <GlobalHeroSection title={"Project & Activities"} page={"project-activites"} />

      {/* Main Container with responsive padding */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-10 lg:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* --- Sidebar --- */}
          {/* order-1 on mobile to keep navigation at top, order-2 on lg to move to right */}
          <aside className="lg:col-span-3 order-1 lg:order-2">
            <div className="lg:sticky lg:top-32 space-y-10">
              <section>
                <h2 className="text-lg font-bold tracking-wider border-b-2 border-blue-600 pb-3 mb-6">PROJECTS</h2>
                <ul className="space-y-1">
                  {categories.map((cat) => (
                    <li 
                      key={cat.name}
                      onClick={() => handleFilterChange(cat.name)}
                      className={`flex justify-between items-center cursor-pointer py-2.5 px-2 transition-all rounded-sm ${
                        filter === cat.name 
                        ? 'text-blue-600 bg-blue-50/50 font-bold' 
                        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      <span className="text-sm lg:text-base">{cat.name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        filter === cat.name ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'
                      }`}>
                        {cat.count}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="hidden lg:block">
                <h2 className="text-lg font-bold tracking-wider border-b-2 border-gray-200 pb-3 mb-6">RECENT EVENTS</h2>
                <p className="text-gray-400 italic text-sm">No recent events to display.</p>
              </section>
            </div>
          </aside>

          {/* --- Project Feed --- */}
          <main className="lg:col-span-9 order-2 lg:order-1 relative">
            {isLoading && (
              <div className="absolute inset-0 bg-white/60 z-20 flex items-start justify-center pt-32">
                <Settings className="animate-spin text-blue-600 w-10 h-10" />
              </div>
            )}

            {filteredProjects.length > 0 ? (
              <div className="space-y-16">
                {/* Hero / Featured Item */}
                <div className="group cursor-pointer">
                  <div className="overflow-hidden rounded-sm mb-6 shadow-sm">
                    <img 
                      src={filteredProjects[0].img} 
                      alt="Featured" 
                      className="w-full h-64 sm:h-80 lg:h-[450px] object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <span className="text-blue-600 text-xs lg:text-sm font-bold uppercase tracking-widest">{filteredProjects[0].date}</span>
                  <h1 className="text-2xl lg:text-4xl font-extrabold mt-3 mb-4 text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                    {filteredProjects[0].title}
                  </h1>
                  <p className="text-gray-600 text-sm lg:text-lg mb-6 leading-relaxed max-w-3xl">
                    {filteredProjects[0].desc}
                  </p>
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-sm font-bold text-sm tracking-wide hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
                    READ MORE
                  </button>
                </div>

                {/* Sub-grid Items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 border-t border-gray-100 pt-12">
                  {filteredProjects.slice(1).map((project) => (
                    <div key={project.id} className="group cursor-pointer">
                      <div className="overflow-hidden rounded-sm mb-5 shadow-sm">
                        <img 
                          src={project.img} 
                          alt={project.title} 
                          className="w-full h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                      </div>
                      <span className="text-blue-600 text-[10px] lg:text-xs font-bold uppercase tracking-widest">{project.date}</span>
                      <h3 className="text-lg lg:text-xl font-bold mt-2 mb-4 text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                        {project.title}
                      </h3>
                      <button className="text-blue-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all uppercase tracking-tighter">
                        Read Full Story <span className="text-lg">→</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="py-24 text-center border-2 border-dashed border-gray-200 rounded-sm bg-gray-50/50">
                <p className="text-gray-400 font-medium">No projects found in this category.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Projects;