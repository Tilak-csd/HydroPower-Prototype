import React from 'react';
import GlobalHeroSection from '../components/GlobalHeroSection';
import { FaSignature, FaProjectDiagram } from 'react-icons/fa'; // Optional visual cues

const About = () => {
  return (
    <section className="bg-white pb-24 font-sans text-slate-800">
      <GlobalHeroSection title="About Us" page="About Us" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-12 md:pt-16">
        
        {/* --- SECTION 1: GRID LAYOUT INTRODUCTION (IMAGE RIGHT) --- */}
        <div className="mb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT side: The "Dashes" (Text) - Matches the layout diagram */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Top Text Block (8 rows in diagram) */}
            <div className="space-y-6 text-justify leading-relaxed text-slate-700">
              <p>
                Nepal Electricity Authority (NEA) established an autonomous company Upper Tamakoshi Hydropower Limited (UTKHPL) in March 2007 (2063/11/25 B.S.) as an executing agency for the implementation of the Project. There are nine full-time and two invitee members on the Board of Directors (BoD) at present. Out of nine full-time members, four members from NEA, one from Nepal Telecom (NTC) and four members from the general shareholders are represented in the BoD.
              </p>
              <p>
                Similarly, representatives of Citizen Investment Trust (CIT) and Rastriya Beema Sansthan (RBS) are also in the BoD as invitee members. The majority share (51%) of the Company is held by four public entities, namely, Nepal Electricity Authority (NEA), Nepal Telecom (NTC), Citizen Investment Trust (CIT) and Rastriya Beema Sansthan (RBS).
              </p>
            </div>

            {/* Bottom Text Block (4 rows in diagram) */}
            <div className="pt-8 border-t border-slate-100 space-y-6 text-justify text-slate-600 bg-slate-50/50 px-2 rounded-2xl">
              <p>
                NEA has a 41% stake, NTC has 6% and CIT & RBS each have 2% stake in the Company. Similarly, the general public and residents of Dolakha District will have a 15% and 10% share respectively. The remaining 24% share will be taken over by contributors in Employees Provident Fund (EPF), NEA & Companys staffs and staffs of financial institutions providing loans.
              </p>
              <p>
                The Upper Tamakoshi Hydroelectric Project is a national priority project; it is the largest hydroelectric plant in Nepal under operation till now. The Project is entirely financed by domestic financial institutions and companies.
              </p>
            </div>
          </div>

          {/* RIGHT side: The "Big Box" (Image) */}
          <div className="lg:col-span-4 sticky top-10">
            <div className="relative bg-slate-100 rounded-[2.5rem] shadow-sm h-85">
                <img 
                  src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=600" 
                  alt="Upper Tamakoshi Hydropower Dam" 
                  className="w-full h-full object-cover rounded-[1rem]"
                />
              </div>
          </div>
        </div>

        {/* --- SECTION 2: IMPROVED MESSAGE FROM THE CHAIRMAN --- */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-black text-slate-900 leading-tight">Leadership <span className="text-blue-600">Vision</span></h3>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="bg-white p-10 lg:p-12 border border-slate-100 shadow-2xl shadow-slate-100 rounded-3xl flex flex-col md:flex-row gap-12 items-center">

            {/* Actual Message Text */}
            <div className="flex-1 space-y-6 text-slate-700 leading-relaxed text-lg">
              <p className="font-medium">To our Valued Stakeholders,</p>
              <p>
                It is an honor to lead Upper Tamakoshi Hydropower Limited during this critical phase of operational success. Our plant stands as a testament to Nepal’s capability to execute national priority projects through entirely domestic financing and expertise. 
              </p>
              <p>
                Our vision extends beyond generation; we are committed to maximizing value for our 51% public entity shareholders, supporting regional infrastructure development, and preparing the ground for upcoming ventures. We remain dedicated to a sustainable, independent energy future.
              </p>
            </div>

            {/* Chairman's Identify (Modern style) */}
            <div className="w-48 shrink-0 text-center md:text-right border-t pt-8 md:border-t-0 md:pt-0">
               <p className="font-black text-xl text-slate-950">Dr. Arun Kumar KC</p>
               <p className="text-blue-600 font-bold uppercase tracking-wide text-xs mt-1">Executive Chairman</p>
               <p className="text-sm text-slate-400 mt-0.5">Board of Directors</p>
            </div>
          </div>
        </div>

        {/* --- SECTION 3: ORGANIZATION CHART & PROJECTS LIST (SIMPLIFIED) --- */}
        <div className="border-t border-slate-100 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Left: Project List */}
            <div className="md:col-span-1 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-inner">
                <div className="flex items-center gap-3 mb-6">
                    <FaProjectDiagram className="text-blue-600 text-3xl" />
                    <h3 className="text-xl font-bold text-slate-900 uppercase tracking-widest">Key Projects</h3>
                </div>
                <ul className="space-y-6 text-sm">
                    <li>
                        <span className="font-bold text-slate-950">1. Upper Tamakoshi Project:</span>
                        <p className="text-slate-600 ml-5">456 MW plant operational since August 2022.</p>
                    </li>
                    <li>
                        <span className="font-bold text-slate-950">2. Rolwaling Diversion:</span>
                        <p className="text-slate-600 ml-5">Scheduled for completion by 2026/27.</p>
                    </li>
                </ul>
            </div>

            {/* Right: Organization Chart Placeholder */}
            <div className="md:col-span-2">
                <div className="text-center md:text-left mb-6">
                    <h3 className="text-xl font-bold text-slate-900 uppercase tracking-widest">Organization Structure</h3>
                    <p className="text-slate-500 mt-1 italic text-xs">Board & Management Chart</p>
                </div>
                <div className=" rounded-3xl flex justify-center items-center h-[300px]">
                    <img src="./bod-image.png" className="w-full h-full" alt="" />
                </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;