import React, { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, MoveHorizontal, Camera } from 'lucide-react';
import { GALLERY } from '../data/mock';

const Gallery = () => {
  const pairs = useMemo(() => { const r=[]; for(let i=0;i<GALLERY.length;i+=2) r.push({before:GALLERY[i],after:GALLERY[i+1]||GALLERY[i]}); return r; }, []);
  const [active,setActive]=useState(0); const [position,setPosition]=useState(50); const pair=pairs[active];
  const select=(i)=>{setActive(i);setPosition(50)}; const next=()=>select((active+1)%pairs.length); const prev=()=>select((active-1+pairs.length)%pairs.length);

  return <section id="gallery" className="bg-white py-16 md:py-20 text-[#111315]">
    <div className="max-w-[1380px] mx-auto px-5 md:px-8">
      <div className="grid lg:grid-cols-12 gap-5 items-end mb-8">
        <div className="lg:col-span-7"><span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[.22em] text-[#b78520] font-black"><Camera className="w-3.5 h-3.5"/>Real Results</span><h2 className="mt-2 font-display text-[44px] md:text-[62px] leading-none font-bold">Before & After</h2></div>
        <p className="lg:col-span-3 text-sm leading-relaxed text-zinc-600">Drag the gold handle to compare the wheel photos. Browse the available work with the arrows.</p>
        <div className="lg:col-span-2 flex lg:justify-end gap-2"><button onClick={prev} aria-label="Previous" className="h-11 w-11 rounded-full border border-zinc-300 flex items-center justify-center"><ChevronLeft className="w-4 h-4"/></button><button onClick={next} aria-label="Next" className="h-11 w-11 rounded-full border border-zinc-300 flex items-center justify-center"><ChevronRight className="w-4 h-4"/></button></div>
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 relative overflow-hidden rounded-xl bg-zinc-900 shadow-xl">
          <div className="relative aspect-[16/10] select-none">
            <img src={pair.after} alt="Wheel after service" draggable="false" className="absolute inset-0 h-full w-full object-cover"/>
            <img src={pair.before} alt="Wheel before service" draggable="false" className="absolute inset-0 h-full w-full object-cover" style={{clipPath:`inset(0 ${100-position}% 0 0)`}}/>
            <span className="absolute left-4 top-4 rounded-md bg-black/75 px-3 py-2 text-[9px] font-black tracking-[.16em] text-white">BEFORE</span><span className="absolute right-4 top-4 rounded-md bg-[#e8b94e] px-3 py-2 text-[9px] font-black tracking-[.16em] text-[#111315]">AFTER</span>
            <div className="pointer-events-none absolute inset-y-0 w-[3px] bg-[#e8b94e] shadow-[0_0_14px_rgba(232,185,78,.65)]" style={{left:`calc(${position}% - 1px)`}}><div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-[#e8b94e] flex items-center justify-center text-[#111315] shadow-xl"><MoveHorizontal className="w-5 h-5"/></div></div>
            <input aria-label="Before and after comparison" type="range" min="0" max="100" value={position} onChange={e=>setPosition(Number(e.target.value))} className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"/>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
          {pairs.map((p,i)=><button key={i} onClick={()=>select(i)} className={`relative overflow-hidden rounded-xl border-2 text-left transition ${active===i?'border-[#e8b94e]':'border-transparent opacity-80 hover:opacity-100'}`}><img src={p.after} alt={`Wheel result ${i+1}`} className="h-full min-h-[150px] w-full object-cover"/><span className="absolute left-3 bottom-3 rounded bg-black/75 px-2.5 py-1.5 text-[9px] font-black text-white">RESULT {String(i+1).padStart(2,'0')}</span></button>)}
        </div>
      </div>
      <p className="mt-4 text-[11px] leading-relaxed text-zinc-400">Before/after photos are paired from the current gallery order. Pairing should be verified against the original job photos before publishing as matched repairs.</p>
    </div>
  </section>;
};
export default Gallery;
