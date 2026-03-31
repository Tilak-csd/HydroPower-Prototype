import React from 'react';
import { Quote } from 'lucide-react';

const MessageSection = () => {
  return (
    <section className=" lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* flex-col-reverse ensures image is on top for mobile, lg:flex-row for side-by-side */}
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-10 lg:gap-20">
          
          {/* Left: Message Content */}
          <div className="w-full lg:flex-[1.2] flex flex-col items-start text-left">
            {/* Quote Icon - Adjusted size for mobile */}
            <div className="text-blue-100 mb-4 lg:mb-8">
              <Quote className="w-10 h-10 lg:w-14 lg:h-14" fill="currentColor" />
            </div>
            
            {/* Main Title - Responsive scaling */}
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-blue-900 mb-3 tracking-tight leading-tight">
              Message from Chairman
            </h2>
            
            {/* Sub-heading - Smaller and tighter on mobile */}
            <h4 className="text-xs md:text-base font-bold text-slate-500 mb-5 tracking-[0.15em] lg:tracking-[0.2em] uppercase">
              Chairman's Message
            </h4>
            
            {/* Paragraph - Optimized line height and size for readability */}
            <p className="text-slate-600 leading-relaxed text-sm md:text-lg max-w-2xl">
              It is an absolute honor to lead Rawa Energy Development Ltd. as we forge ahead in 
              the renewable energy landscape. Our mission is built on the foundation of 
              sustainable innovation and community empowerment. We don't just build power plants; 
              we build the future of energy in Nepal.
            </p>

            {/* Button - Full width on very small screens, auto on larger */}
            <a 
              href="/about/chairman" 
              className="mt-8 inline-block w-full sm:w-auto text-center px-8 lg:px-10 py-3 lg:py-4 bg-blue-600 text-white font-bold text-xs lg:text-sm rounded-sm shadow-lg shadow-blue-100 hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-300 tracking-wider"
            >
              READ MORE
            </a>
          </div>

          {/* Right: Founder Image with Blob */}
          <div className="w-full lg:flex-[0.8] flex justify-start lg:justify-center relative group">
            <div className="relative z-10 w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[400px] aspect-[0.85/1] bg-slate-50 border-[4px] lg:border-[6px] border-white shadow-xl overflow-hidden animate-blob-slow"
                 style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}>
              <img 
                src="./image.png" 
                alt="Chairman of Rawa Energy" 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            
            {/* Subtle decorative glow */}
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl -z-10" />
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes blob-move {
          0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; }
        }
        .animate-blob-slow {
          animation: blob-move 10s ease-in-out infinite;
        }
      `}} />
    </section>
  );
};

export default MessageSection;