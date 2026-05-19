import React from 'react';

const MessageSection = () => {
  return (
    <section className="py-12 lg:py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Changed items-stretch to items-center to prevent stretching the circle */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20">
          
          {/* Left: Message Content */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center items-start text-left py-2">
            
            {/* Main Title */}
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-2 tracking-tight leading-tight">
              Message from Chairman
            </h2>
            
            {/* Sub-heading */}
            <h4 className="text-xs md:text-sm font-bold text-slate-400 mb-6 tracking-[0.15em] lg:tracking-[0.2em] uppercase">
              Chairman's Message
            </h4>
            
            {/* Paragraph */}
            <p className="text-slate-600 leading-relaxed text-sm md:text-base lg:text-lg max-w-2xl">
              It is an absolute honor to lead Rawa Energy Development Ltd. as we forge ahead in 
              the renewable energy landscape. Our mission is built on the foundation of 
              sustainable innovation and community empowerment. We don't just build power plants; 
              we build the future of energy in Nepal.
            </p>

            {/* Button */}
            <a 
              href="/about/chairman" 
              className="mt-8 inline-block w-full sm:w-auto text-center px-8 lg:px-10 py-3 lg:py-4 bg-blue-600 text-white font-bold text-xs lg:text-sm rounded-sm shadow-lg shadow-blue-100 hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-300 tracking-wider"
            >
              READ MORE
            </a>
          </div>

          {/* Right: Fixed Size Circular Image */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-end items-center">
            {/* 
              Mobile: w-80 h-80 (320px x 320px)
              Desktop (lg): lg:w-[420px] lg:h-[420px] 
            */}
            <div className="w-80 h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden flex-shrink-0">
              <img 
                src="./chairman.avif" 
                alt="Chairman of Rawa Energy" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MessageSection;