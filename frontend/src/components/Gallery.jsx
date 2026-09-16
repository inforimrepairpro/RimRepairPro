import React, { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, MoveHorizontal, Camera } from 'lucide-react';
import { GALLERY } from '../data/mock';

const Gallery = () => {
  const pairs = useMemo(() => {
    const result = [];
    for (let i = 0; i < GALLERY.length; i += 2) {
      result.push({ before: GALLERY[i], after: GALLERY[i + 1] || GALLERY[i] });
    }
    return result;
  }, []);

  const [active, setActive] = useState(0);
  const [position, setPosition] = useState(50);
  const pair = pairs[active];
  const next = () => { setActive((a) => (a + 1) % pairs.length); setPosition(50); };
  const prev = () => { setActive((a) => (a - 1 + pairs.length) % pairs.length); setPosition(50); };

  return (
    <section id="gallery" className="bg-[#081526] py-20 md:py-28 relative overflow-hidden">
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#14b8a6]/10 blur-3xl" />
      <div className="max-w-7xl mx-auto px-5 md:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-8">
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[.3em] text-[#64d8ff] font-bold"><Camera className="w-4 h-4"/> Before & After</span>
            <h2 className="mt-5 font-display text-[50px] md:text-[76px] leading-[.94] font-bold tracking-[-.035em] text-white">See the wheel.<br/><span className="text-[#64d8ff]">See the difference.</span></h2>
          </div>
          <p className="lg:col-span-4 text-[16px] leading-relaxed text-slate-300">Drag the handle across the image to compare the wheel photos. Use the arrows to view more work.</p>
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0d1b2d] shadow-[0_35px_90px_-45px_rgba(0,0,0,.8)]">
          <div className="relative aspect-[4/3] md:aspect-[16/9] select-none">
            <img src={pair.after} alt="Wheel after service" draggable="false" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${position}%` }}>
              <img src={pair.before} alt="Wheel before service" draggable="false" className="absolute inset-y-0 left-0 h-full max-w-none object-cover" style={{ width: '100vw', maxWidth: '1280px' }} />
            </div>

            <div className="absolute left-5 top-5 rounded-full bg-[#081526]/85 backdrop-blur px-4 py-2 text-[10px] font-black uppercase tracking-[.22em] text-white">Before</div>
            <div className="absolute right-5 top-5 rounded-full bg-[#2f7cff]/90 backdrop-blur px-4 py-2 text-[10px] font-black uppercase tracking-[.22em] text-white">After</div>

            <div className="pointer-events-none absolute inset-y-0 w-[3px] bg-white shadow-[0_0_20px_rgba(255,255,255,.75)]" style={{ left: `calc(${position}% - 1px)` }}>
              <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-[#2f7cff] text-white shadow-xl"><MoveHorizontal className="w-6 h-6"/></div>
            </div>

            <input aria-label="Before and after comparison" type="range" min="0" max="100" value={position} onChange={(e) => setPosition(Number(e.target.value))} className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div className="flex items-center gap-3">
            {pairs.map((p, i) => (
              <button key={i} onClick={() => { setActive(i); setPosition(50); }} aria-label={`View comparison ${i + 1}`} className={`h-16 w-20 overflow-hidden rounded-xl border-2 transition ${active === i ? 'border-[#64d8ff]' : 'border-white/10 opacity-60 hover:opacity-100'}`}><img src={p.after} alt="" className="h-full w-full object-cover"/></button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="mr-2 text-xs font-bold tracking-[.2em] text-slate-400">{String(active + 1).padStart(2,'0')} / {String(pairs.length).padStart(2,'0')}</span>
            <button onClick={prev} aria-label="Previous comparison" className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white hover:bg-white/10"><ChevronLeft className="w-5 h-5"/></button>
            <button onClick={next} aria-label="Next comparison" className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2f7cff] text-white hover:bg-[#438aff]"><ChevronRight className="w-5 h-5"/></button>
          </div>
        </div>
        <p className="mt-5 text-xs leading-relaxed text-slate-500">Gallery images are displayed as before/after pairs in the order provided. Replace or reorder the source photos anytime to match each repair correctly.</p>
      </div>
    </section>
  );
};

export default Gallery;
