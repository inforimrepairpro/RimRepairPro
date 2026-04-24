import React from 'react';
import { PROCESS } from '../data/mock';

const Process = () => (
  <section className="bg-[#0a0a0b] py-20 md:py-28 border-t border-[#1e1d1b]">
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <div className="max-w-2xl mb-14">
        <span className="inline-block text-[11px] uppercase tracking-[0.32em] text-[#E5A848] mb-5">How It Works</span>
        <h2 className="font-display text-[48px] md:text-[72px] leading-[0.95] font-bold text-[#F5F3EE]">
          Our <span className="gold-text">Process</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PROCESS.map((p, i) => (
          <div key={i} className="relative group">
            <div className="flex items-center gap-4 mb-5">
              <div className="font-display text-[56px] leading-none text-[#E5A848]/20 font-bold group-hover:text-[#E5A848]/50 transition-colors">{p.n}</div>
              <div className="h-px flex-1 bg-[#1e1d1b]" />
            </div>
            <h3 className="text-[22px] font-semibold text-[#F5F3EE] tracking-tight">{p.title}</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-[#8B8982]">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
