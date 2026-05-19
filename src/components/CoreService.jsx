import React from 'react';
// If you are using react-icons, you can import icons like this:
// import { ShieldCheck, Zap, Settings } from 'lucide-react';

export default function CoreServices() {
  const services = [
    {
      id: 'development',
      title: 'Project Development & Engineering',
      description: 'From initial site assessment and comprehensive feasibility studies to detailed engineering design, we lay the groundwork for high-performing, sustainable asset lifecycle development.',
      link: '/services/development',
      // Standard SVG representation for Engineering/Development
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
        </svg>
      )
    },
    {
      id: 'management',
      title: 'Asset Management & Operations',
      description: 'We maximize operational efficiency, ensure strict regulatory compliance, and safeguard long-term grid stability through advanced monitoring and real-time data-driven maintenance.',
      link: '/services/operations',
      // Standard SVG representation for Energy/Grid/Operations
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      )
    },
    {
      id: 'modernization',
      title: 'Modernization & Rehabilitation',
      description: 'Breathe new life into aging infrastructure. We upgrade mechanical systems, automate controls, and overhaul turbines to significantly boost power output and extend plant lifespan.',
      link: '/services/modernization',
      // Standard SVG representation for Upgrade/Rehabilitation
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-20">
          <h2 className="text-base font-semibold text-blue-600 uppercase tracking-wide">
            Our Capabilities
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Expertise Across the Hydropower Lifecycle
          </p>
          <p className="mt-4 text-lg text-slate-600">
            From initial site selection to continuous multi-decade optimization, we deliver reliable and sustainable engineering solutions at every stage.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div>
                {/* Icon Container */}
                <div className="inline-flex items-center justify-center p-3 bg-blue-50 text-blue-600 rounded-xl mb-6">
                  {service.icon}
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
                  {service.description}
                </p>
              </div>

              {/* Call to Action Link */}
              <div className="mt-6 pt-6 border-t border-slate-50">
                <a
                  href={service.link}
                  className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 group"
                >
                  Explore Service
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}