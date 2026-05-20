import React from 'react';

export default function SalientFeatures() {
  const projectFeatures = [
    {
      id: 'hydrology',
      title: 'HYDROLOGY',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="#025a9e" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>
      ),
      specs: [
        { label: 'Catchment Area', value: '633.83 Sq. Km' },
        { label: 'Design Discharge', value: '16.20 m3/s' },
        { label: 'Minimum Monthly Discharge', value: '4.67 m3/s' },
        { label: 'Design Flood (Q1000)', value: '1141 m3/s' },
        { label: 'Average Annual Inflow', value: '434.50 million m3' },
      ],
    },
    {
      id: 'headworks',
      title: 'HEADWORKS',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="#025a9e" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      ),
      specs: [
        { label: 'Location', value: 'Hurikot -1, Jagdulla Rural Municipality' },
        { label: 'Dam Type', value: 'Concrete Gravity Dam (3 nos. opening)' },
        { label: 'Dam Crest Level', value: '2678.00 masl' },
        { label: 'Spillway Crest Level', value: '2696.00 masl' },
        { label: 'Live Storage Capacity', value: '2.45 million m3' },
      ],
    },
    {
      id: 'powerhouse',
      title: 'POWERHOUSE',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="#025a9e" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      specs: [
        { label: 'Location', value: 'Mudkechula -4, Mudkechula Rural Municipality' },
        { label: 'Headrace Tunnel Length', value: '6.135 Km (3.8m Dia)' },
        { label: 'Pressure Shaft', value: '1406.69m (2.1m Diameter)' },
        { label: 'Powerhouse Type', value: 'Underground (77.8m L x 14m B x 33.45m H)' },
        { label: 'Installed Capacity', value: '106 MW (3 x 35.33 MW Pelton Turbines)' },
      ],
    },
  ];

  return (
    <section className="bg-white py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Home Page Styled Section Header --- */}
        <div className="mb-12 md:mb-4 flex flex-col items-center text-center">
          <span className="block text-[#025a9e] text-xs font-bold tracking-widest uppercase mb-2">
            Project Overview & Technical Matrix
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
            Salient Features
          </h2>
          {/* Accent Line matching your global layout indicator */}
          <div className="w-16 h-[3.5px] bg-[#025a9e] mt-3" />
        </div>

        {/* Dynamic Column Split Matrix Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-16 lg:gap-y-0 lg:gap-x-12 items-start">
          {projectFeatures.map((column) => (
            <div key={column.id} className="flex flex-col items-center w-full">
              
              {/* Clean Industrial Circular Emblem Background */}
              <div className="w-20 h-20 bg-slate-50 flex items-center justify-center rounded-full mb-6">
                {column.icon}
              </div>

              {/* Functional Component Type Title */}
              <h3 className="text-base font-black text-slate-950 uppercase tracking-wider mb-6">
                {column.title}
              </h3>

              {/* Editorial Line-Divided Descriptive Data Rows */}
              <div className="w-full space-y-0">
                {column.specs.map((spec, sIdx) => (
                  <div 
                    key={sIdx} 
                    className="flex flex-col sm:flex-row gap-1 sm:gap-2 justify-center items-center border-t border-slate-100 py-4 text-center"
                  >
                    <span className="text-slate-500 font-bold text-xs md:text-sm tracking-tight">
                      {spec.label}:
                    </span>
                    <span className="text-slate-700 font-medium text-sm md:text-[15px] leading-relaxed max-w-xs">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}