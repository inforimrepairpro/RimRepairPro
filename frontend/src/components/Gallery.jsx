import React, { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, MoveHorizontal, Camera } from 'lucide-react';
import { GALLERY } from '../data/mock';

const Gallery = () => {
  const pairs = useMemo(() => { const r=[]; for(let i=0;i<GALLERY.length;i+=2) r.push({before:GALLERY[i],after:GALLERY[i+1]||GALLERY[i]}); return r; }, []);
  const [active,setActive]=useState(0); const [position,setPosition]=useState(50); const pair=pairs[active];
  const select=(i)=>{setActive(i);setPosition(50)}; const next=()=>select((active+1)%pairs.length); const prev=()=>select((active-1+pairs.length)%pairs.length);

  return <section id="gallery" className="bg-white py-14 text-[#111315] md:py-20">
    <div className="mx-auto max-w-[1380px] px-5 md:px-8">
      <div className="mb-7 grid items-end gap-5 md:mb-8 lg:grid-cols-12">
        <div className="lg:col-span-7"><span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[.22em] text-[#b78520]"><Camera className="h-3.5 w-3.5"/>Real Results</span><h2 className="mt-2 font-display text-[40px] font-bold leading-none sm:text-[48px] md:text-[62px]">Before & After</h2></div>
        <p className="text-sm leading-6 text-zinc-600 lg:col-span-3">Drag the gold handle to compare the wheel photos. Browse the available work with the arrows.</p>
        <div className="flex gap-2 lg:col-span-2 lg:justify-end"><button onClick={prev} aria-label="Previous result" className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-300 transition hover:border-[#d5a73f]"><ChevronLeft className="h-4 w-4"/></button><button onClick={next} aria-label="Next result" className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-300 transition hover:border-[#d5a73f]"><ChevronRight className="h-4 w-4"/></button></div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="relative overflow-hidden rounded-xl bg-zinc-900 shadow-xl lg:col-span-2">
          <div className="relative aspect-[4/5] select-none sm:aspect-[16/10]">
            <img src={pair.after} alt="Wheel after service" draggable="false" className="absolute inset-0 h-full w-full object-cover"/>
            <img src={pair.before} alt="Wheel before service" draggable="false" className="absolute inset-0 h-full w-full object-cover" style={{clipPath:`inset(0 ${100-position}% 0 0)`}}/>
            <span className="absolute left-3 top-3 rounded-md bg-black/75 px-2.5 py-2 text-[9px] font-black tracking-[.14em] text-white sm:left-4 sm:top-4 sm:px-3">BEFORE</span><span className="absolute right-3 top-3 rounded-md bg-[#e8b94e] px-2.5 py-2 text-[9px] font-black tracking-[.14em] text-[#111315] sm:right-4 sm:top-4 sm:px-3">AFTER</span>
            <div className="pointer-events-none absolute inset-y-0 w-[3px] bg-[#e8b94e] shadow-[0_0_14px_rgba(232,185,78,.65)]" style={{left:`calc(${position}% - 1px)`}}><div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-white bg-[#e8b94e] text-[#111315] shadow-xl sm:h-12 sm:w-12 sm:border-4"><MoveHorizontal className="h-5 w-5"/></div></div>
            <input aria-label="Before and after comparison" type="range" min="0" max="100" value={position} onChange={e=>setPosition(Number(e.target.value))} className="absolute inset-0 z-10 h-full w-full cursor-ew-resize opacity-0"/>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-1">
          {pairs.map((p,i)=><button key={i} onClick={()=>select(i)} aria-label={`Show result ${i+1}`} className={`relative min-h-[120px] overflow-hidden rounded-xl border-2 text-left transition sm:min-h-[150px] ${active===i?'border-[#e8b94e]':'border-transparent opacity-80 hover:opacity-100'}`}><img src={p.after} alt={`Wheel result ${i+1}`} loading="lazy" className="absolute inset-0 h-full w-full object-cover"/><span className="absolute bottom-3 left-3 rounded bg-black/75 px-2.5 py-1.5 text-[9px] font-black text-white">RESULT {String(i+1).padStart(2,'0')}</span></button>)}
        </div>
      </div>
      <p className="mt-4 text-[11px] leading-5 text-zinc-400">Before/after photos are paired from the current gallery order. Pairing should be verified against the original job photos before publishing as matched repairs.</p>
    </div>
  </section>;
};
export default Gallery;
