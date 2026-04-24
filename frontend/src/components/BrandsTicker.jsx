import React from 'react';
import { BRANDS_TRUSTED } from '../data/mock';

const BrandsTicker = () => {
  const items = [...BRANDS_TRUSTED, ...BRANDS_TRUSTED];
  return (
    <section className="bg-[#0a0a0b] py-14 border-y border-[#1e1d1b]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 text-center mb-8">
        <span className="text-[11px] uppercase tracking-[0.32em] text-[#8B8982]">Trusted by owners of</span>
      </div>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0b] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0b] to-transparent z-10" />
        <div className="flex gap-14 animate-marquee whitespace-nowrap">
          {items.map((b, i) => (
            <span key={i} className="font-display text-[28px] md:text-[36px] text-[#F5F3EE]/25 hover:text-[#C5C8CC] transition-colors font-semibold tracking-tight">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsTicker;
