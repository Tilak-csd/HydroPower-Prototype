import { useEffect, useRef, useState, useMemo } from "react";

const SVG_W = 1178;
const SVG_H = 840;
const CARD_W_SVG = 185;
const GAP_SVG = 22;
const CARD_H_ESTIMATE = 115; // Estimated height for 'top' side calculations

const PATH_D =
  "M0 126.613C167.5 257 603.5 235.5 725.5 139.5C847.5 43.5 909 -52.6065 1086.5 36.5C1211 99 1182.5 238 1140.5 312.5C1067.91 441.263 956.5 470.696 777 449.5C568.685 424.901 282 452 175.5 516.5C47 594.324 101.61 739.185 175.5 784.5C303.5 863 466 837 540 819.5";

const DOT_T = [0.0, 0.115, 0.25, 0.42, 0.545, 0.655, 0.80, 1.0];

const milestones = [
  { year: "1881 A.D.", icon: "🏛️", text: "The power sector was in the public domain exclusively — under the ownership of NEA.", side: "bottom", align: "left" },
  { year: "1936 A.D.", icon: "🏔️", text: "Sundarijal Hydropower plant with a capacity of 600 kW was once again stalled for decades.", side: "top", align: "right" },
  { year: "1845 A.D.", icon: "⚡", text: "Under public-private partnership, third Letang hydropower plant was installed.", side: "top", align: "center" },
  { year: "1988 A.D.", icon: "📋", text: "APPA was signed, the first such instrument signed in Nepal.", side: "top", align: "right" },
  { year: "1996 A.D.", icon: "💼", text: "Succeeded to attract private investment upon successful financial closure of Khimti project.", side: "bottom", align: "center" },
  { year: "2005 A.D.", icon: "🏗️", text: "Commissioning of 144 MW Kali Gandaki-A HEP.", side: "top", align: "left" },
  { year: "2021 A.D.", icon: "🌊", text: "Commissioning of Nepal's Largest installed Capacity Hydro Project 456 MW Upper Trishakti.", side: "top", align: "left" },
  { year: "2024", icon: "🔋", text: "Nepal's Electricity Generation Capacity crosses to 3,000 MW. Regular Export started.", side: "top", align: "left" },
];

// ── Math Helpers ─────────────────────────────────────────────────────────────
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

// ── Refined Styles ────────────────────────────────────────────────────────────
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500&display=swap');

  .hp { font-family: 'DM Sans', sans-serif; background: #fff; color: #1a2a4a; padding: 72px 40px; max-width: 1200px; margin: 0 auto; }
  .hp-title { font-family: 'Playfair Display', serif; font-size: clamp(22px, 3vw, 38px); font-weight: 700; color: #0a1628; max-width: 400px; margin-bottom: 52px; }
  .hp-canvas { position: relative; width: 100%; }
  .hp-svg-bg { width: 100%; display: block; overflow: visible; }
  
  .hp-dot { position: absolute; width: 12px; height: 12px; border-radius: 50%; background: #2a6dd9; border: 2.5px solid #fff; box-shadow: 0 0 0 2.5px #2a6dd9; transform: translate(-50%, -50%); z-index: 4; }
  .hp-line { position: absolute; width: 1px; z-index: 2; transform: translateX(-50%); background: repeating-linear-gradient(to bottom, #4472C4 0px, #4472C4 4px, transparent 4px, transparent 9px); }
  
  .hp-card { position: absolute; z-index: 3; animation: hpFade .5s ease both; will-change: transform, opacity; }
  @keyframes hpFade { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }

  .hp-card-inner { display: flex; flex-direction: column; }
  .hp-card.align-right .hp-card-inner { align-items: flex-end; text-align: right; }
  .hp-card.align-center .hp-card-inner { align-items: center; text-align: center; }
  .hp-card.align-left .hp-card-inner { align-items: flex-start; text-align: left; }

  .hp-card-icon { font-size: 20px; margin-bottom: 5px; }
  .hp-card-year { font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 700; color: #0a1628; margin-bottom: 4px; }
  .hp-card-text { line-height: 1.6; color: #5a6a8a; font-weight: 300; }

  .hp-btn { padding: 11px 38px; border: 1.5px solid #2563eb; color: #2563eb; font-size: 13px; font-weight: 600; background: transparent; cursor: pointer; transition: 0.2s; margin-top: 48px; }
  .hp-btn:hover { background: #2563eb; color: #fff; }

  .hp-mobile { display: none; }
  .hp-mobile-item { display: flex; gap: 16px; padding: 20px 0; border-bottom: 1px solid #e0e8f5; animation: hpFade .4s ease both; }
  .hp-mobile-box { flex-shrink: 0; width: 42px; height: 42px; background: #eef3fb; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 19px; }

  @media (max-width: 860px) {
    .hp-canvas, .desktop-only { display: none; }
    .hp-mobile { display: block; }
  }
`;

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
        cardTop = dotPx.y - gapPx - (CARD_H_ESTIMATE * scale);
        lineTop = dotPx.y - gapPx;
      } else {
        cardTop = dotPx.y + gapPx;
        lineTop = dotPx.y;
      }

      return { ...m, dotPx, cardLeft, cardTop, lineTop, lineH: gapPx, cardWpx, index: i };
    });
  }, [scale, segs]);

  return (
    <div ref={wrapRef} className="hp-canvas">
      <svg className="hp-svg-bg" viewBox={`0 0 ${SVG_W} ${SVG_H}`} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
        <path d={PATH_D} stroke="#4472C4" strokeWidth="2" strokeDasharray="20 12" fill="none" />
      </svg>

      {renderedMilestones.map((m) => (
        <div key={m.index}>
          <span className="hp-dot" style={{ left: m.dotPx.x, top: m.dotPx.y }} />
          <span className="hp-line" style={{ left: m.dotPx.x, top: m.lineTop, height: m.lineH }} />
          <div 
            className={`hp-card align-${m.align}`} 
            style={{ left: m.cardLeft, top: m.cardTop, width: m.cardWpx, animationDelay: `${m.index * 0.07}s` }}
          >
            <div className="hp-card-inner">
              <span className="hp-card-icon" role="img" aria-label="icon">{m.icon}</span>
              <time className="hp-card-year" style={{ fontSize: `${Math.round(14 * scale)}px` }}>{m.year}</time>
              <p className="hp-card-text" style={{ fontSize: `${(11.5 * scale).toFixed(1)}px` }}>{m.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function TimelineSection() {
  return (
    <>
      <style>{CSS}</style>
      <section className="hp">
        <h2 className="hp-title">The Flashback to Hydropower Development Of Nepal</h2>
        <DesktopCanvas />
        <div className="hp-mobile">
          {milestones.map((m, i) => (
            <div key={i} className="hp-mobile-item" style={{ animationDelay: `${i * 0.06}s` }}>
              <div className="hp-mobile-box">{m.icon}</div>
              <div>
                <time className="hp-mobile-year">{m.year}</time>
                <p className="hp-mobile-text">{m.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <button className="hp-btn">KNOW MORE</button>
        </div>
      </section>
    </>
  );
}