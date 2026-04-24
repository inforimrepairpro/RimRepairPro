import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY } from '../data/mock';

const Gallery = () => {
  const [active, setActive] = useState(0);
  const next = () => setActive((a) => (a + 1) % GALLERY.length);
  const prev = () => setActive((a) => (a - 1 + GALLERY.length) % GALLERY.length);

  return (
    <section id="gallery" className="bg-[#0a0a0b] py-20 md:py-28 border-t border-[#1e1d1b]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <span className="inline-block text-[11px] uppercase tracking-[0.32em] text-[#C5C8CC] mb-5">Gallery</span>
            <h2 className="font-display text-[48px] md:text-[72px] leading-[0.95] font-bold text-[#F5F3EE]">
              Our <span className="gold-text">Work</span>
            </h2>
            <p className="mt-3 text-[15px] text-[#8B8982]">Before & after wheel restorations</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={prev} aria-label="Previous" className="w-11 h-11 rounded-[10px] border border-[#1e1d1b] bg-[#0f0f0f] hover:border-[#C5C8CC] hover:text-[#C5C8CC] text-[#F5F3EE] flex items-center justify-center transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} aria-label="Next" className="w-11 h-11 rounded-[10px] border border-[#1e1d1b] bg-[#0f0f0f] hover:border-[#C5C8CC] hover:text-[#C5C8CC] text-[#F5F3EE] flex items-center justify-center transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative rounded-[16px] overflow-hidden bg-[#0f0f0f] border border-[#1e1d1b] aspect-[16/9]">
          <img src={GALLERY[active]} alt={`Restoration ${active + 1}`} className="w-full h-full object-cover transition-opacity duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b]/80 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 bg-[#0a0a0b]/90 backdrop-blur border border-[#C5C8CC]/25 px-4 py-2 rounded-full text-[12px] uppercase tracking-[0.2em] text-[#C5C8CC] font-medium">
            {active + 1} / {GALLERY.length}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-4 md:grid-cols-7 gap-3">
          {GALLERY.map((g, i) => (
            <button key={i} onClick={() => setActive(i)} className={`relative aspect-square rounded-[10px] overflow-hidden border-2 transition-all ${active === i ? 'border-[#C5C8CC]' : 'border-transparent hover:border-[#C5C8CC]/40'}`}>
              <img src={g} alt={`thumb ${i}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
