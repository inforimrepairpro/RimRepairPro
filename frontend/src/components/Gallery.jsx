import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY } from '../data/mock';

const Gallery = () => {
  const [active, setActive] = useState(0);
  const next = () => setActive((a) => (a + 1) % GALLERY.length);
  const prev = () => setActive((a) => (a - 1 + GALLERY.length) % GALLERY.length);

  return (
    <section id="gallery" className="bg-[#F6F1E8] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <span className="inline-block text-[11px] uppercase tracking-[0.28em] text-[#C15A3E] mb-4">Gallery</span>
            <h2 className="font-serif-display text-[44px] md:text-[64px] leading-[1.02] font-semibold text-[#1A2327]">
              Our <span className="italic text-[#0E4A52]">work</span>
            </h2>
            <p className="mt-3 text-[15px] text-[#4A4A44]">Before & after wheel restorations</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={prev} aria-label="Previous" className="w-11 h-11 rounded-full border border-[#E3D8C3] bg-white hover:bg-[#0E4A52] hover:text-[#F6F1E8] text-[#1A2327] flex items-center justify-center transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} aria-label="Next" className="w-11 h-11 rounded-full border border-[#E3D8C3] bg-white hover:bg-[#0E4A52] hover:text-[#F6F1E8] text-[#1A2327] flex items-center justify-center transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative rounded-[24px] overflow-hidden bg-[#EFE7D8] ring-1 ring-[#E3D8C3] aspect-[16/9]">
          <img src={GALLERY[active]} alt={`Restoration ${active + 1}`} className="w-full h-full object-cover transition-opacity duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E4A52]/40 to-transparent" />
          <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur px-4 py-2 rounded-full text-[12px] uppercase tracking-[0.2em] text-[#0E4A52] font-medium">
            {active + 1} / {GALLERY.length}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-4 md:grid-cols-7 gap-3">
          {GALLERY.map((g, i) => (
            <button key={i} onClick={() => setActive(i)} className={`relative aspect-square rounded-xl overflow-hidden ring-2 transition-all ${active === i ? 'ring-[#C15A3E]' : 'ring-transparent hover:ring-[#0E4A52]/30'}`}>
              <img src={g} alt={`thumb ${i}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
