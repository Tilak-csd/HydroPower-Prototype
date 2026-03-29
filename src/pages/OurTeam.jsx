import React from 'react';
import { FaLinkedinIn, FaEnvelope, FaTwitter, FaGlobe } from 'react-icons/fa';
import GlobalHeroSection from '../components/GlobalHeroSection';

const OurTeam = () => {
  // Data Array - Easy to update
  const teamMembers = [
    {
      id: 1,
      name: "Engr. Rajesh Thapa",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=500",
      linkedin: "https://linkedin.com",
      email: "mailto:ceo@hydropower.com",
      twitter: "#"
    },
    {
      id: 2,
      name: "Sita Gurung",
      role: "Lead Environmental Engineer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500",
      linkedin: "https://linkedin.com",
      email: "mailto:sita@hydropower.com",
      twitter: "#"
    },
    {
      id: 3,
      name: "Binod Sharma",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=500",
      linkedin: "https://linkedin.com",
      email: "mailto:binod@hydropower.com",
      twitter: "#"
    },
    {
      id: 4,
      name: "Anjali Shrestha",
      role: "Civil Engineer",
      image: "https://images.unsplash.com/photo-1580894732230-28e193399e8c?auto=format&fit=crop&q=80&w=500",
      linkedin: "https://linkedin.com",
      email: "mailto:anjali@hydropower.com",
      twitter: "#"
    }
  ];

  return (
    <section className="bg-slate-50 pb-20 font-sans">
      <GlobalHeroSection title="Our Team" page="About / Team" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-16">
        {/* Intro Text */}
        <div className="mb-16 text-center lg:text-left">
          <h2 className="text-blue-600 font-bold tracking-tighter uppercase text-sm mb-2">Leadership & Expertise</h2>
          <h3 className="text-4xl font-black text-slate-900">Meet the Professionals</h3>
          <div className="w-20 h-1.5 bg-blue-600 mt-4 rounded-full mx-auto lg:mx-0"></div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="group relative bg-white p-4 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500">
              
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-[1.5rem] aspect-[4/5] mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Social Sidebar - Slides in from right on hover */}
                <div className="absolute top-4 right-[-50px] group-hover:right-4 transition-all duration-500 flex flex-col gap-2">
                  <a href={member.linkedin} target="_blank" rel="noreferrer" 
                     className="w-10 h-10 bg-white text-blue-600 rounded-xl flex items-center justify-center shadow-lg hover:bg-blue-600 hover:text-white transition-colors">
                    <FaLinkedinIn size={18} />
                  </a>
                  <a href={member.email}
                     className="w-10 h-10 bg-white text-blue-600 rounded-xl flex items-center justify-center shadow-lg hover:bg-blue-600 hover:text-white transition-colors">
                    <FaEnvelope size={18} />
                  </a>
                  <a href={member.twitter}
                     className="w-10 h-10 bg-white text-blue-600 rounded-xl flex items-center justify-center shadow-lg hover:bg-blue-600 hover:text-white transition-colors">
                    <FaTwitter size={18} />
                  </a>
                </div>
              </div>

              {/* Text Info */}
              <div className="px-2 pb-2">
                <h4 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h4>
                <p className="text-blue-600 text-sm font-semibold mb-3 tracking-wide uppercase">{member.role}</p>
                
                <button className="flex items-center gap-2 text-slate-400 text-xs font-bold hover:text-slate-900 transition-colors uppercase tracking-widest">
                  View Profile <FaGlobe />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;