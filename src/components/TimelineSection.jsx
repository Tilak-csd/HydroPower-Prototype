import React, { useEffect, useRef, useState, useMemo } from "react";

const SVG_W = 1178;
const SVG_H = 840;
const CARD_W_SVG = 230; 
const GAP_SVG = 26;

const PATH_D =
  "M0 126.613C167.5 257 603.5 235.5 725.5 139.5C847.5 43.5 909 -52.6065 1086.5 36.5C1211 99 1182.5 238 1140.5 312.5C1067.91 441.263 956.5 470.696 777 449.5C568.685 424.901 282 452 175.5 516.5C47 594.324 101.61 739.185 175.5 784.5C303.5 863 466 837 540 819.5";

const DOT_T = [0.0, 0.115, 0.25, 0.42, 0.545, 0.655, 0.80, 1.0];

const milestones = [
  { year: "1881 A.D.", icon: "🏛️", text: "The power sector was in the public domain exclusively — under the ownership of NEA.", side: "bottom", align: "left" },
  { year: "1936 A.D.", icon: "🏔️", text: "Sundarijal Hydropower plant with a capacity of 600 kW was once again stalled for decades.", side: "top", align: "right" },
  { year: "1845 A.D.", icon: "⚡", text: "Under public-private partnership, third Letang hydropower plant was installed.", side: "top", align: "left" },
  { year: "1988 A.D.", icon: "📋", text: "APPA was signed, the first such instrument signed in Nepal.", side: "top", align: "right" },
  { year: "1996 A.D.", icon: "💼", text: "Succeeded to attract private investment upon successful financial closure of Khimti project.", side: "bottom", align: "center" },
  { year: "2005 A.D.", icon: "🏗️", text: "Commissioning of 144 MW Kali Gandaki-A HEP.", side: "top", align: "left" },
  { year: "2021 A.D.", icon: "🌊", text: "Commissioning of Nepal's Largest installed Capacity Hydro Project 456 MW Upper Trishakti.", side: "top", align: "left" },
  { year: "2024", icon: "🔋", text: "Nepal's Electricity Generation Capacity crosses to 3,000 MW. Regular Export started.", side: "top", align: "left" },
];

function cubicPoint(p0, p1, p2, p3, t) {
  const u = 1 - t;
  const tt = t * t;
  const uu = u * u;
  return {
    x: uu * u * p0.x + 3 * uu * t * p1.x + 3 * u * tt * p2.x + tt * t * p3.x,
    y: uu * u * p0.y + 3 * uu * t * p1.y + 3 * u * tt * p2.y + tt * t * p3.y,
  };
}

function parseCubicSegments(d) {
  const tokens = d.replace(/[MCZ]/g, " ").trim().split(/[\s,]+/).map(Number);
  const segs = [];
  let i = 0;
  let cx = tokens[i++], cy = tokens[i++];
  while (i + 5 < tokens.length) {
    const p0 = { x: cx, y: cy };
    const p1 = { x: tokens[i++], y: tokens[i++] };
    const p2 = { x: tokens[i++], y: tokens[i++] };
    const p3 = { x: tokens[i++], y: tokens[i++] };
    segs.push({ p0, p1, p2, p3 });
    cx = p3.x; cy = p3.y;
  }
  return segs;
}

function pointAtGlobalT(segs, t) {
  const total = segs.length;
  const s = t * total;
  const idx = Math.min(Math.floor(s), total - 1);
  return cubicPoint(segs[idx].p0, segs[idx].p1, segs[idx].p2, segs[idx].p3, s - idx);
}

function DesktopCanvas() {
  const wrapRef = useRef(null);
  const [canvasW, setCanvasW] = useState(SVG_W);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setCanvasW(e.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const scale = canvasW / SVG_W;
  const segs = useMemo(() => parseCubicSegments(PATH_D), []);

  const renderedMilestones = useMemo(() => {
    return DOT_T.map((t, i) => {
      const pt = pointAtGlobalT(segs, t);
      const m = milestones[i];
      const dotPx = { x: pt.x * scale, y: pt.y * scale };
      const gapPx = GAP_SVG * scale;
      const cardWpx = CARD_W_SVG * scale;

      let cardLeft = m.align === "right" ? dotPx.x - cardWpx : m.align === "center" ? dotPx.x - cardWpx / 2 : dotPx.x;
      let cardTop, lineTop;

      if (m.side === "top") {
        cardTop = dotPx.y - gapPx; 
        lineTop = dotPx.y - gapPx;
      } else {
        cardTop = dotPx.y + gapPx;
        lineTop = dotPx.y;
      }

      return { ...m, dotPx, cardLeft, cardTop, lineTop, lineH: gapPx, cardWpx, index: i };
    });
  }, [scale, segs]);

  return (
    <div ref={wrapRef} className="relative w-full hidden md:block select-none">
      <svg className="w-full h-auto block overflow-visible" viewBox={`0 0 ${SVG_W} ${SVG_H}`} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
        <path d={PATH_D} stroke="#dbeafe" strokeWidth="6" strokeLinecap="round" fill="none" className="opacity-60" />
        <path d={PATH_D} stroke="#2563eb" strokeWidth="2.5" strokeDasharray="12 8" strokeLinecap="round" fill="none" />
      </svg>

      {renderedMilestones.map((m) => {
        const alignmentClass = 
          m.align === "right" ? "items-end text-right" : 
          m.align === "center" ? "items-center text-center" : 
          "items-start text-left";

        const sideTransform = m.side === "top" ? "-translate-y-full" : "";

        return (
          <div key={m.index} className="absolute inset-0 pointer-events-none">
            <span 
              className="absolute w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-md shadow-blue-200 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto" 
              style={{ left: m.dotPx.x, top: m.dotPx.y }} 
            />
            <span 
              className="absolute w-[1.5px] -translate-x-1/2 z-10 bg-gradient-to-b from-blue-500 to-blue-200" 
              style={{ left: m.dotPx.x, top: m.lineTop, height: m.lineH }} 
            />
            
            {/* Added style delay and custom animate-fade-in layout class */}
            <div 
              className={`absolute z-10 pointer-events-auto group ${sideTransform} opacity-0 animate-fade-in`}
              style={{ 
                left: m.cardLeft, 
                top: m.cardTop, 
                width: m.cardWpx,
                animationDelay: `${m.index * 0.08}s`
              }}
            >
              <div className={`flex flex-col p-4 rounded-xl border border-slate-100 bg-white/90 backdrop-blur-md shadow-sm group-hover:shadow-md group-hover:border-blue-200 group-hover:-translate-y-0.5 transition-all duration-300 ${alignmentClass}`}>
                <span className="text-xl mb-1 filter drop-shadow-sm">{m.icon}</span>
                <time className="block font-bold text-slate-900 tracking-tight leading-none mb-1.5" style={{ fontSize: `${Math.max(14, Math.round(19 * scale))}px` }}>
                  {m.year}
                </time>
                <p className="text-slate-500 font-normal leading-relaxed break-words" style={{ fontSize: `${Math.max(11, Math.round(12.5 * scale))}px` }}>
                  {m.text}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function TimelineSection() {
  return (
    <section className="bg-slate-50/50 py-16 px-6 md:py-24 lg:px-12 max-w-[1400px] mx-auto rounded-3xl my-6">
      
      {/* Header Context */}
      <div className="max-w-3xl text-left mb-16 lg:mb-24">
        <span className="text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1.5 rounded-full">
          Historical Roadmap
        </span>
        <h2 className="mt-4 text-3xl md:text-4xl lg:text-4xl lg:w-150 font-black text-slate-900 tracking-tight leading-tight">
          The Flashback to Hydropower Development Of Nepal
        </h2>
        <div className="w-12 h-1 bg-blue-600 mt-6 rounded-full" />
      </div>

      {/* Desktop Map Element */}
      <DesktopCanvas />

      {/* Mobile Stream Stack fallback */}
      <div className="block md:hidden space-y-6 max-w-md mx-auto">
        {milestones.map((m, i) => (
          /* Added standard v4 runtime transition properties safely here */
          <div 
            key={i} 
            className="flex gap-4 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm opacity-0 animate-fade-in"
            style={{ animationDelay: `${i * 0.06}s` }}
          >
            <div className="flex-shrink-0 w-11 h-11 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-xl">
              {m.icon}
            </div>
            <div>
              <time className="block font-bold text-lg text-slate-900 mb-0.5">{m.year}</time>
              <p className="text-sm text-slate-600 leading-relaxed">{m.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Actions Trigger */}
      <div className="text-center mt-12 lg:mt-20">
        <a 
          href="/about/chairman" 
          className="inline-block w-full sm:w-auto text-center px-10 py-4 bg-blue-600 text-white font-bold text-xs rounded-lg shadow-lg shadow-blue-600/10 hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-300 tracking-wider uppercase"
        >
          Know More About Our Legacy
        </a>
      </div>
    </section>
  );
}