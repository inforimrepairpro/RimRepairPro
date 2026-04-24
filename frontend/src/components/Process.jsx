import React from 'react';
import { PROCESS } from '../data/mock';

const Process = () => (
  <section className="bg-[#F6F1E8] py-20 md:py-28 grain-overlay">
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <div className="max-w-2xl mb-14">
        <span className="inline-block text-[11px] uppercase tracking-[0.28em] text-[#C15A3E] mb-4">How it works</span>
        <h2 className="font-serif-display text-[44px] md:text-[64px] leading-[1.02] font-semibold text-[#1A2327]">
          Our <span className="italic text-[#0E4A52]">process</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PROCESS.map((p, i) => (
          <div key={i} className="relative group">
            <div className="flex items-center gap-4 mb-5">
              <div className="font-serif-display text-[52px] leading-none text-[#0E4A52]/15 font-semibold group-hover:text-[#C15A3E]/30 transition-colors">{p.n}</div>
              <div className="h-px flex-1 bg-[#E3D8C3]" />
            </div>
            <h3 className="font-serif-display text-[24px] font-semibold text-[#1A2327]">{p.title}</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-[#4A4A44]">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
