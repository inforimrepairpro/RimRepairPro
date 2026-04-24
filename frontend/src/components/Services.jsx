import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../data/mock';

const Services = () => (
  <section id="services" className="bg-[#EFE7D8] py-20 md:py-28 grain-overlay">
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
        <div>
          <span className="inline-block text-[11px] uppercase tracking-[0.28em] text-[#C15A3E] mb-4">Services</span>
          <h2 className="font-serif-display text-[44px] md:text-[64px] leading-[1.02] font-semibold text-[#1A2327]">
            What we <span className="italic text-[#0E4A52]">do</span>
          </h2>
        </div>
        <p className="max-w-md text-[15px] leading-relaxed text-[#4A4A44]">
          Every service backed by our lifetime warranty. From minor cosmetic touch-ups to full structural restoration — done right the first time.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {SERVICES.map((s, i) => (
          <div key={i} className={`group relative rounded-2xl p-8 border transition-all duration-300 ${s.popular ? 'bg-[#0E4A52] border-[#0E4A52] text-[#F6F1E8]' : 'bg-white border-[#E3D8C3] hover:border-[#0E4A52]'}`}>
            {s.popular && (
              <span className="absolute top-5 right-5 bg-[#C15A3E] text-white text-[10px] uppercase tracking-[0.18em] px-3 py-1 rounded-full">Popular</span>
            )}
            <div className={`text-[12px] tracking-[0.28em] ${s.popular ? 'text-[#F6F1E8]/60' : 'text-[#6B6557]'}`}>{s.n}</div>
            <h3 className={`mt-8 font-serif-display text-[26px] md:text-[28px] font-semibold leading-tight ${s.popular ? 'text-[#F6F1E8]' : 'text-[#1A2327]'}`}>{s.title}</h3>
            <p className={`mt-3 text-[14px] leading-relaxed ${s.popular ? 'text-[#F6F1E8]/75' : 'text-[#4A4A44]'}`}>{s.desc}</p>
            <div className={`mt-7 inline-flex items-center gap-1.5 text-[12px] uppercase tracking-[0.2em] ${s.popular ? 'text-[#C15A3E]' : 'text-[#0E4A52] group-hover:text-[#C15A3E]'} transition-colors`}>
              Learn more <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
