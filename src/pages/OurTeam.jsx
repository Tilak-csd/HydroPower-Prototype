import React from 'react';
import GlobalHeroSection from '../components/GlobalHeroSection';

const OurTeam = () => {
  // 10 Member Demo Roster with realistic Hydropower operational roles
  const teamMembers = [
    {
      id: 1,
      name: "Engr. Rajesh Thapa",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 2,
      name: "Sita Gurung",
      role: "Lead Environmental Engineer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 3,
      name: "Binod Sharma",
      role: "Project Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 4,
      name: "Anjali Shrestha",
      role: "Senior Civil Engineer",
      image: "https://images.unsplash.com/photo-1580894732230-28e193399e8c?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 5,
      name: "Er. Deepak Raj Joshi",
      role: "Chief Hydrogeologist",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 6,
      name: "Sunita Mahat",
      role: "Chief Financial Officer",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 7,
      name: "Er. Kshitiz Bhandari",
      role: "Electro-Mechanical Head",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 8,
      name: "Pooja Karki",
      role: "Legal & Compliance Director",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 9,
      name: "Rameshwor Neupane",
      role: "Community Relations Manager",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 10,
      name: "Er. Niranjan Adhikari",
      role: "Quality Assurance Engineer",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=500",
    }
  ];

  return (
    <section className="bg-white pb-24">
      <GlobalHeroSection title="Our Team" page="About / Team" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16">
        
        {/* Title Header Section with Modern Accent Bar */}
        <div className="mb-14 text-left">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight uppercase">
            Meet Our Team
          </h2>
          <div className="w-16 h-[3.5px] bg-[#025a9e] mt-2" />
        </div>

        {/* Clean, Sharp Professional Team Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col group">
              
              {/* Sharp Image Container - No Radius, Borderless */}
              <div className="overflow-hidden aspect-[4/5] bg-slate-100 mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                />
              </div>

              {/* Identity Detail Area */}
              <div className="text-left">
                <h3 className="text-base font-bold text-slate-900 tracking-tight leading-snug">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-[#025a9e] mt-1 tracking-wide uppercase">
                  {member.role}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  ); 
};

export default OurTeam;