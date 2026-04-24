import React from 'react';
import { BRANDS_TRUSTED } from '../data/mock';

const BrandsTicker = () => {
  const items = [...BRANDS_TRUSTED, ...BRANDS_TRUSTED];
  return (
    <section className="bg-[#F6F1E8] py-14">
      <div className="max-w-7xl mx-auto px-5 md:px-8 text-center mb-8">
        <span className="text-[11px] uppercase tracking-[0.28em] text-[#6B6557]">Trusted by owners of</span>
      </div>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F6F1E8] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F6F1E8] to-transparent z-10" />
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {items.map((b, i) => (
            <span key={i} className="font-serif-display text-[26px] md:text-[32px] text-[#0E4A52]/40 hover:text-[#C15A3E] transition-colors">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsTicker;
