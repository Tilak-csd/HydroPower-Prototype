import React, { useState, useMemo } from 'react';
import { Settings } from 'lucide-react'; // Example loading icon
import GlobalHeroSection from '../components/GlobalHeroSection';

const projectsData = [
  { id: 1, type: 'Hydro', title: 'Major Hydroelectric Dam Expansion', date: 'October 24, 2025', img: 'https://imgproxy.gridwork.co/Xf-hK9Hyx-1j-4u2DbyxltIz8x-_U_eJCL5C8RE-PVo/w:900/h:600/rt:fill/g:fp:0.5:0.5/q:82/el:1/aHR0cHM6Ly9zMy51cy1lYXN0LTIuYW1hem9uYXdzLmNvbS9pdHQtaW1hZ2VzL3BhbmFtYV9jYW5hbC5qcGc.jpg', desc: 'A massive expansion project increasing energy output by 40% across the northern grid.' },
  { id: 2, type: 'Hydro', title: 'River Turbine Maintenance', date: 'August 05, 2025', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLJDwBrACs4V9sNy-x6PLwnEf6ytZW1leWpA&s', desc: 'Routine efficiency upgrades for the downstream turbine systems.' },
  { id: 3, type: 'Solar', title: 'Urban Solar Initiative', date: 'July 19, 2025', img: 'https://barefootcollege.org/wp-content/uploads/2025/05/DSCF1035-2-scaled-e1646332696753.jpg', desc: 'Integrating solar solutions into metropolitan infrastructure.' },
];

const Projects = () => {
  const [filter, setFilter] = useState('All Projects');
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    { name: 'All Projects', count: projectsData.length },
    { name: 'Hydro Projects', count: projectsData.filter(p => p.type === 'Hydro').length },
    { name: 'Solar Projects', count: projectsData.filter(p => p.type === 'Solar').length },
  ];

  const filteredProjects = useMemo(() => {
    if (filter === 'All Projects') return projectsData;
    const type = filter.split(' ')[0]; // Extract 'Hydro' or 'Solar'
    return projectsData.filter(p => p.type === type);
  }, [filter]);

  const handleFilterChange = (cat) => {
    setIsLoading(true);
    setFilter(cat);
    setTimeout(() => setIsLoading(false), 500); // Simulate loading
  };

  return (
    <div className="pb-12 font-sans">
        <GlobalHeroSection title={"Project & Activites"} page={"project-activites"} />

      <div className="px-12 pt-12  grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* --- Sidebar (Top on Mobile, Right on Desktop) --- */}
        <aside className="md:col-span-3 order-1 md:order-2">
          <div className="sticky top-30 space-y-8">
            <section>
              <h2 className="text-xl font-bold border-b-2 border-blue-600 pb-2 mb-4">PROJECTS</h2>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li 
                    key={cat.name}
                    onClick={() => handleFilterChange(cat.name)}
                    className={`flex justify-between items-center cursor-pointer p-2 transition-colors ${filter === cat.name ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-500'}`}
                  >
                    <span>{cat.name}</span>
                    <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">{cat.count}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold border-b-2 border-gray-200 pb-2 mb-4">RECENT EVENTS</h2>
              <p className="text-gray-400 italic text-sm">No recent events to display.</p>
            </section>
          </div>
        </aside>

        {/* --- Project Feed (Left Side) --- */}
        <main className="md:col-span-9 order-2 md:order-1 relative">
          {isLoading && (
            <div className="absolute inset-0 bg-white/50 z-10 flex items-start justify-center pt-20">
              <Settings className="animate-spin text-blue-600 w-12 h-12" />
            </div>
          )}

          {filteredProjects.length > 0 ? (
            <div className="space-y-12">
              {/* Hero Item */}
              <div className="group cursor-pointer">
                <img src={filteredProjects[0].img} alt="Featured" className="w-full h-96 object-cover rounded-sm mb-6" />
                <span className="text-gray-500 text-sm uppercase tracking-widest">{filteredProjects[0].date}</span>
                <h1 className="text-3xl font-bold mt-2 mb-4 group-hover:text-blue-600 transition-colors">{filteredProjects[0].title}</h1>
                <p className="text-gray-600 mb-6 leading-relaxed">{filteredProjects[0].desc}</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-sm font-medium hover:bg-blue-700 transition-colors">READ MORE</button>
              </div>

              {/* Sub-grid Items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {filteredProjects.slice(1).map((project) => (
                  <div key={project.id} className="group cursor-pointer">
                    <img src={project.img} alt={project.title} className="w-full h-48 object-cover rounded-sm mb-4" />
                    <span className="text-gray-500 text-xs uppercase tracking-widest">{project.date}</span>
                    <h3 className="text-xl font-bold mt-1 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">{project.title}</h3>
                    <button className="bg-blue-600 text-white px-4 py-2 text-sm rounded-sm font-medium hover:bg-blue-700 transition-colors">READ MORE</button>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="py-20 text-center border-2 border-dashed border-gray-200 rounded-lg">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Projects;