import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../data/mock';

const Services = () => (
  <section id="services" className="bg-[#0a0a0b] py-20 md:py-28 relative">
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
        <div>
          <span className="inline-block text-[11px] uppercase tracking-[0.32em] text-[#C5C8CC] mb-5">Services</span>
          <h2 className="font-display text-[48px] md:text-[72px] leading-[0.95] font-bold text-[#F5F3EE]">
            What <span className="gold-text">We Do</span>
          </h2>
        </div>
        <p className="max-w-md text-[15px] leading-relaxed text-[#8B8982]">
          Every service backed by our lifetime warranty. From minor cosmetic touch-ups to full structural restoration.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {SERVICES.map((s, i) => (
          <div key={i} className={`group relative rounded-[16px] p-8 border transition-all duration-300 ${s.popular ? 'bg-gradient-to-b from-[#1A1C1F] to-[#0f0f0f] border-[#C5C8CC]/40 shadow-[0_20px_50px_-20px_rgba(197,200,204,0.25)]' : 'bg-[#0f0f0f] border-[#1e1d1b] hover:border-[#C5C8CC]/30'}`}>
            {s.popular && (
              <span className="absolute top-5 right-5 gold-btn text-[9px] tracking-[0.22em] uppercase px-2.5 py-1 rounded-full font-bold">Popular</span>
            )}
            <div className="text-[12px] tracking-[0.3em] text-[#C5C8CC] font-semibold">{s.n}</div>
            <h3 className="mt-8 text-[24px] md:text-[26px] font-semibold leading-tight text-[#F5F3EE] tracking-tight">{s.title}</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-[#8B8982]">{s.desc}</p>
            <div className="mt-7 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.24em] text-[#C5C8CC] group-hover:gap-2.5 transition-all">
              Learn more <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
