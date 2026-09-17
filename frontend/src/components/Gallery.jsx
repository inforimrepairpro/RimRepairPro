import React, { useState } from 'react';
import { ArrowLeftRight, Camera } from 'lucide-react';

const PAIRS = [
  { before: '/Rim-30.JPG', after: '/Rim-25.JPG' },
  { before: '/Rim-43.JPG', after: '/Rim-34.JPG' },
  { before: '/Rim-37.JPG', after: '/Rim-40.JPG' },
  { before: '/Rim-20.JPG', after: '/Rim-15.JPG' },
];

const CompareCard = ({ before, after, index }) => {
  const [position, setPosition] = useState(50);

  return (
    <div className="relative aspect-[4/3] select-none overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl">
      <img src={before} alt={`Wheel before repair ${index + 1}`} loading={index < 2 ? 'eager' : 'lazy'} decoding="async" draggable="false" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 0 0 ${position}%)` }}>
        <img src={after} alt={`Wheel after repair ${index + 1}`} loading={index < 2 ? 'eager' : 'lazy'} decoding="async" draggable="false" className="absolute inset-0 h-full w-full object-cover" />
      </div>

      <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/75 px-4 py-2 text-[10px] font-black uppercase tracking-[.18em] text-white backdrop-blur-sm">Before</div>
      <div className="pointer-events-none absolute right-4 top-4 rounded-full bg-[#d8aa2c] px-4 py-2 text-[10px] font-black uppercase tracking-[.18em] text-black">After</div>

      <div className="pointer-events-none absolute bottom-0 top-0 w-[3px] bg-[#d8aa2c] shadow-[0_0_18px_rgba(216,170,44,.45)]" style={{ left: `calc(${position}% - 1.5px)` }}>
        <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[#d8aa2c] bg-[#d8aa2c] text-black shadow-xl">
          <ArrowLeftRight className="h-5 w-5" strokeWidth={3} />
        </div>
      </div>

      <input aria-label={`Compare before and after wheel repair ${index + 1}`} type="range" min="0" max="100" value={position} onChange={(event) => setPosition(Number(event.target.value))} className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
      <div className="pointer-events-none absolute inset-x-0 bottom-4 text-center text-[9px] font-bold uppercase tracking-[.2em] text-white/65">Drag to compare</div>
    </div>
  );
};

const Gallery = () => (
  <section id="gallery" className="scroll-mt-20 bg-[#08090a] py-16 text-white md:py-24">
    <div className="mx-auto max-w-[1280px] px-5 md:px-8">
      <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
        <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[.24em] text-[#d8aa2c]"><Camera className="h-4 w-4" />Real Results</span>
        <h2 className="mt-3 font-display text-[40px] font-bold leading-none sm:text-[50px] md:text-[64px]">Before &amp; After</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-zinc-400 md:text-base">Drag the gold slider to compare real Rim Repair Pro wheel repairs.</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 md:gap-6">
        {PAIRS.map((pair, index) => <CompareCard key={`${pair.before}-${pair.after}`} {...pair} index={index} />)}
      </div>

      <div className="mt-9 flex justify-center">
        <a href="#contact" className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d8aa2c]/50 px-7 py-3 text-xs font-black uppercase tracking-[.15em] text-white transition hover:border-[#d8aa2c] hover:bg-[#d8aa2c] hover:text-black">Get a Quote for Your Wheels</a>
      </div>
    </div>
  </section>
);

export default Gallery;
