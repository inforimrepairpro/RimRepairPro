import React from 'react';
import { STATS } from '../data/mock';

const Stats = () => (
  <section className="relative bg-[#F6F1E8] border-y border-[#E3D8C3]">
    <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-14 grid grid-cols-2 md:grid-cols-4 gap-6">
      {STATS.map((s, i) => (
        <div key={i} className="flex flex-col items-start gap-1 md:gap-2">
          <div className="font-serif-display text-[44px] md:text-[56px] leading-none font-semibold text-[#0E4A52]">{s.value}</div>
          <div className="text-[11px] md:text-[12px] uppercase tracking-[0.22em] text-[#6B6557]">{s.label}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Stats;
