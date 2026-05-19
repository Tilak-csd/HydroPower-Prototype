import React from 'react';
import GlobalHeroSection from '../components/GlobalHeroSection';

const VisionMission = () => {
  const corporateGoals = [
    {
      num: "01",
      title: "Sustainable Generation",
      description: "To prioritize run-of-the-river and storage hydro projects that balance national power demands with ecological integrity, preserving downstream river systems."
    },
    {
      num: "02",
      title: "Domestic Self-Reliance",
      description: "To minimize dependency on cross-border energy imports by accelerating development schedules and optimizing generation capacities entirely through regional engineering."
    },
    {
      num: "03",
      title: "Community Value Distribution",
      description: "To structurally empower local inhabitants of project areas through direct equity investment opportunities, physical infrastructure, and rural electrification."
    },
    {
      num: "04",
      title: "Engineering Excellence",
      description: "To implement advanced geological mapping and climate-resilient structural models to withstand localized environmental factors over multi-decade cycles."
    }
  ];

  return (
    <main className="min-h-screen bg-white antialiased">
      {/* Dynamic Main Header Context */}
      <GlobalHeroSection title={"Vision & Mission"} page={"Vision & Mission"} />

      {/* ── SECTION 1: VISION (WIDESCREEN EDITORIAL STATEMENT) ── */}

      <section className="bg-slate-50/60 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* Title Column */}
            <div className="lg:col-span-4 lg:sticky lg:top-12">
              <h2 className="text-xl font-extrabold text-slate-900 uppercase tracking-tight">
                Our Vission
              </h2>
              <div className="w-12 h-[3.5px] bg-[#025a9e] mt-2" />
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-8 space-y-8 text-slate-600 text-sm md:text-[15px] font-normal leading-relaxed text-justify">
              <p>
                 To be a driving force in the renewable energy sector by securing absolute energy self-reliance, utilizing sustainable water assets to power economic growth and regional prosperity.
              </p>
             
            </div>

          </div>
        </div>
      </section>

      {/* -- SECTION 2  */}
      <section className="bg-slate-50/60 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* Title Column */}
            <div className="lg:col-span-4 lg:sticky lg:top-12">
              <h2 className="text-xl font-extrabold text-slate-900 uppercase tracking-tight">
                Our Mission
              </h2>
              <div className="w-12 h-[3.5px] bg-[#025a9e] mt-2" />
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-8 space-y-8 text-slate-600 text-sm md:text-[15px] font-normal leading-relaxed text-justify">
              <p>
                Our mission is to plan, optimize, and safely operate clean hydropower infrastructures through robust engineering protocols and strict environmental compliance frameworks. By combining institutional transparency with proactive local coordination, we develop energy platforms that deliver predictable value.
              </p>
              <p>
                We recognize that building true long-term utility requires deep respect for our surrounding topography. We dedicate ourselves to standardizing sustainable operational systems that actively mitigate ecological footprints while maximizing macroeconomic output for our community stakeholders.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 3: CORPORATE GOALS (TYPOGRAPHIC INDEX) ── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* Section Indicator */}
          <div className="mb-12 text-left">
            <h2 className="text-xl font-extrabold text-slate-900 uppercase tracking-tight">
              Corporate Goals
            </h2>
            <div className="w-12 h-[3.5px] bg-[#025a9e] mt-2" />
          </div>

          {/* Core Goals List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 lg:gap-y-16">
            {corporateGoals.map((goal, idx) => (
              <div key={idx} className="flex gap-6 items-start group">
                {/* Large minimalist numeric layout counter */}
                <span className="text-3xl font-extrabold text-slate-200 group-hover:text-[#025a9e] transition-colors duration-300 select-none leading-none pt-0.5">
                  {goal.num}
                </span>
                <div className="space-y-2">
                  <h3 className="font-bold text-slate-900 text-base md:text-lg tracking-tight">
                    {goal.title}
                  </h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed text-justify">
                    {goal.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
};

export default VisionMission;