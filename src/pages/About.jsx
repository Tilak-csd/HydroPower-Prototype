import React from 'react';
import GlobalHeroSection from '../components/GlobalHeroSection';

// ── Shared Corporate Data ───────────────────────────────────────────────────
const boardMembers = [
  {
    name: "Dr. Ram Prasad Shrestha",
    role: "Chairman",
    organization: "Vidhyut Utpadan Company Ltd. (VUCL)",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Er. Amit Kumar Yadav",
    role: "Managing Director",
    organization: "Nalgad Hydropower Company Ltd.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Ms. Deepa Khanal",
    role: "Board Director",
    organization: "Nepal Electricity Authority (NEA)",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Mr. Ramesh Baniya",
    role: "Board Director",
    organization: "Ministry of Energy, Water Resources and Irrigation",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
  }
];

// ── 1. MINIMALIST INTRODUCTION SECTION (MATCHING IMAGE LAYOUT) ──────────────
const IntroSection = () => (
  <section className="bg-white py-16">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">

      {/* Clean, Simple Paragraph Stack */}
      <div className="max-w-5xl space-y-8 text-justify text-slate-600 text-sm md:text-[15px] font-normal leading-relaxed tracking-normal">
        <p>
          As part of the Identification and Feasibility Study of Storage Projects, this project was planned from 1999 to 2001 to build a storage hydroelectric plant in Nepal. It was one of the best of 93 hydroelectric projects at the time. In 2012, the Nepal Electricity Authority (NEA) performed a feasibility study. To further develop this project, the Nalgad Hydropower Development Committee (NHPDC) was formed in 2012.
        </p>
        <p>
          On April 20, 2017, the Development Committee was dissolved, and it was agreed that the project will be developed under a corporate model. The properties of the NHPDC have now been transferred to the Company. Nalgad Hydropower Company Limited was established in May 2017 as a subsidiary of Vidhyut Utpadan Company Limited (VUCL) under company law.
        </p>
      </div>

    </div>
  </section>
);

// ── 2. MESSAGE FROM CHAIRPERSON ─────────────────────────────────────────────
const ChairpersonMessage = () => (
  <section className="bg-slate-50/60 py-16 overflow-hidden relative">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Photo Layout */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="relative max-w-sm mx-auto lg:max-w-none">
            <div className="relative bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              {/* FIXED: Reduced aspect ratio from 4/5 to 3/2 to decrease height */}
              <div className="aspect-[3/2] rounded-xl overflow-hidden bg-slate-100 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600" 
                  alt="Chairperson portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h4 className="font-bold text-lg text-slate-900">Dr. Ram Prasad Shrestha</h4>
                <p className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">Executive Chairperson</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Message text */}
        <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
          <div className="text-left">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight uppercase">
              Message From Chairperson
            </h2>
            <div className="w-12 h-[3px] bg-[#025a9e] mt-2" />
          </div>
          
          <div className="text-slate-600 space-y-4 text-sm md:text-[15px] leading-relaxed text-justify relative z-10">
            <p className="font-medium text-slate-800 italic">
              "Energy security forms the foundational pillar of modern economic prosperity. Our continuous roadmap is focused squarely on converting national water wealth into clean, shared progress."
            </p>
            <p>
              As we guide the advancement of clean infrastructure across Nepal, our long-term perspective extends far past setting up simple production targets. We aim to construct an ecosystem where environmental integrity, regional community growth, and sustainable engineering operate in perfect balance.
            </p>
            <p>
              The achievement of building up our current grid networks represents the power of domestic engineering excellence and combined investor faith. We remain deeply grateful to all our public stakeholders, institutional banks, and communities for continuing this exceptional journey alongside us.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
);

// ── 3. BOARD OF DIRECTORS SECTION ───────────────────────────────────────────
const BoardOfDirectors = () => (
  <section className="bg-white py-16">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      
      <div className="text-left mb-12">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight uppercase">
          Board of Directors
        </h2>
        <div className="w-12 h-[3px] bg-[#025a9e] mt-2" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {boardMembers.map((member, index) => (
          <div 
            key={index} 
            className="group bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300"
          >
            <div className="aspect-[1/1] overflow-hidden bg-slate-50">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
              />
            </div>

            <div className="p-5 text-left">
              <h3 className="font-bold text-slate-900 text-md leading-snug group-hover:text-[#025a9e] transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-sm font-semibold text-[#025a9e] mt-1">
                {member.role}
              </p>
              <div className="w-6 h-[1.5px] bg-slate-100 my-3 group-hover:w-10 transition-all duration-300" />
              <p className="text-[10px] font-bold text-slate-400 tracking-wide uppercase">
                {member.organization}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

// ── MAIN COMBINED COMPONENT ─────────────────────────────────────────────────
export default function About() {
  return (
    <main className="min-h-screen bg-white antialiased">
      <GlobalHeroSection title={"About Us"} page={"About"} />
      <IntroSection />
      <ChairpersonMessage />
      <BoardOfDirectors />
    </main>
  );
}