import React from 'react';
import { Zap, Truck, ShieldCheck, Star } from 'lucide-react';
import { FEATURES } from '../data/mock';

const ICONS = { Zap, Truck, ShieldCheck, Star };

const Features = () => (
  <section className="bg-[#0a0a0b] py-16 md:py-24">
    <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
      {FEATURES.map((f, i) => {
        const Icon = ICONS[f.icon];
        return (
          <div key={i} className="group relative rounded-[16px] p-7 border border-[#1e1d1b] bg-[#0f0f0f] hover:border-[#E5A848]/40 hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl border border-[#E5A848]/20 bg-gradient-to-br from-[#1a1408] to-[#0a0a0b] flex items-center justify-center mb-5 group-hover:shadow-[0_0_24px_-6px_rgba(228,168,72,0.5)] transition-shadow">
              <Icon className="w-5 h-5 text-[#E5A848]" />
            </div>
            <h3 className="text-[20px] font-semibold text-[#F5F3EE] tracking-tight">{f.title}</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-[#8B8982]">{f.desc}</p>
          </div>
        );
      })}
    </div>
  </section>
);

export default Features;
