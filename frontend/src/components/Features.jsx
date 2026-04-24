import React from 'react';
import { Zap, Truck, ShieldCheck, Star } from 'lucide-react';
import { FEATURES } from '../data/mock';

const ICONS = { Zap, Truck, ShieldCheck, Star };

const Features = () => (
  <section className="bg-[#F6F1E8] py-14 md:py-20">
    <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
      {FEATURES.map((f, i) => {
        const Icon = ICONS[f.icon];
        return (
          <div key={i} className="group relative bg-white rounded-2xl p-7 border border-[#E3D8C3] hover:border-[#C15A3E]/50 hover:-translate-y-1 transition-all duration-300 shadow-[0_1px_0_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-24px_rgba(14,74,82,0.25)]">
            <div className="w-11 h-11 rounded-xl bg-[#EFE7D8] flex items-center justify-center mb-5 group-hover:bg-[#0E4A52] transition-colors">
              <Icon className="w-5 h-5 text-[#0E4A52] group-hover:text-[#F6F1E8] transition-colors" />
            </div>
            <h3 className="font-serif-display text-[22px] font-semibold text-[#1A2327] leading-tight">{f.title}</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-[#4A4A44]">{f.desc}</p>
          </div>
        );
      })}
    </div>
  </section>
);

export default Features;
