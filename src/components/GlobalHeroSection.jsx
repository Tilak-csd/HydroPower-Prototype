import React from 'react';

/**
 * @param {string} title - The main heading text
 * @param {string} page - The current page name for breadcrumbs
 * @param {string} bgImage - Optional custom background image URL
 */
export default function GlobalHeroSection({ title, page, bgImage }) {
  // Fallback image if none is provided
  const imageUrl = bgImage || 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=2000';

  return (
    <section 
      className="relative h-[300px] flex items-center justify-center text-center px-6 overflow-hidden bg-slate-900"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.8)), url('${imageUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
          {title}
        </h1>

        {/* Breadcrumbs */}
        <nav className="flex items-center justify-center gap-3 text-sm md:text-base font-semibold tracking-wide">
          <a 
            href="/" 
            className="text-blue-400 hover:text-white transition-colors duration-200"
          >
            Home
          </a>
          <span className="text-slate-500">/</span>
          <span className="text-slate-200 uppercase tracking-widest text-xs md:text-sm">
            {page}
          </span>
        </nav>
      </div>

      {/* Optional: Subtle bottom gradient to blend with page content */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
    </section>
  );
}