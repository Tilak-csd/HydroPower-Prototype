import React from 'react';
import { FaEye, FaRocket, FaLeaf, FaHandsHelping } from 'react-icons/fa';
import GlobalHeroSection from '../components/GlobalHeroSection';

const VisionMission = () => {
  const goals = [
    {
      id: 1,
      title: "Sustainable Power",
      desc: "Harnessing natural water flow with zero-emission technology.",
      icon: <FaLeaf className="text-green-500" />,
      bg: "bg-green-50"
    },
    {
      id: 2,
      title: "Local Impact",
      desc: "Investing in the communities surrounding our project sites.",
      icon: <FaHandsHelping className="text-orange-500" />,
      bg: "bg-orange-50"
    }
  ];

  return (
    <section className="bg-white pb-24 font-sans text-slate-900">
      <GlobalHeroSection title="Our Purpose" page="Vision & Mission" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-16">
        
        {/* --- Main Content Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* LEFT: MISSION (Focus on Action) */}
          <div className="group p-10 lg:p-16 bg-slate-900 rounded-[3rem] text-white flex flex-col justify-center relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/20">
            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-12 transition-transform">
                <FaRocket size={30} />
              </div>
              <h2 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">Our Mission</h2>
              <h3 className="text-3xl lg:text-4xl font-black mb-6 leading-tight">
                Developing Renewable Energy to <span className="text-blue-500">Empower</span> Nepal.
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Our mission is to identify, develop, and operate high-capacity hydropower projects through transparent engineering and domestic investment, ensuring energy security and sustainable industrial growth for the nation.
              </p>
            </div>
            {/* Subtle background decoration */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
          </div>

          {/* RIGHT: VISION (Focus on Future) */}
          <div className="flex flex-col gap-8">
            <div className="p-10 lg:p-12 bg-blue-50 rounded-[3rem] border border-blue-100 flex-1 flex flex-col justify-center">
              <div className="w-14 h-14 bg-white text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <FaEye size={28} />
              </div>
              <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Our Vision</h2>
              <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mb-4">
                To be the leading catalyst in Nepal's journey toward energy independence.
              </h3>
              <p className="text-slate-600 leading-relaxed">
                We envision a future where every household and industry is powered by clean, reliable, and affordable hydropower, positioning Nepal as a green-energy hub in South Asia.
              </p>
            </div>

            {/* Core Values / Specific Goals */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {goals.map((goal) => (
                <div key={goal.id} className={`${goal.bg} p-8 rounded-[2.5rem] transition-transform hover:-translate-y-2 duration-300`}>
                  <div className="text-2xl mb-4">{goal.icon}</div>
                  <h4 className="font-bold text-slate-900 mb-2">{goal.title}</h4>
                  <p className="text-sm text-slate-600 leading-snug">{goal.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* --- Strategic Pillars Section --- */}
        <div className="mt-24 pt-16 border-t border-slate-100">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-black text-slate-900">Our Strategic Pillars</h3>
            <p className="text-slate-500 mt-2 italic">The foundations of our operational excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Transparency", text: "Maintaining the highest standards of corporate governance for our shareholders." },
              { title: "Innovation", text: "Applying modern civil engineering to maximize water-to-energy conversion." },
              { title: "Resilience", text: "Building robust infrastructure designed to last for generations." }
            ].map((pillar, i) => (
              <div key={i} className="text-center px-4">
                <div className="text-blue-600 font-black text-5xl opacity-10 mb-[-25px]">0{i+1}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{pillar.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default VisionMission;