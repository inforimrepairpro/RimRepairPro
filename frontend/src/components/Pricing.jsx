import React from 'react';
import { Check, Phone } from 'lucide-react';
import { PRICING, BRAND } from '../data/mock';

const Pricing = () => (
  <section id="pricing" className="bg-[#EFE7D8] py-20 md:py-28">
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <div className="text-center mb-14 max-w-2xl mx-auto">
        <span className="inline-block text-[11px] uppercase tracking-[0.28em] text-[#C15A3E] mb-4">Pricing</span>
        <h2 className="font-serif-display text-[44px] md:text-[64px] leading-[1.02] font-semibold text-[#1A2327]">
          Set <span className="italic text-[#0E4A52]">pricing</span>
        </h2>
        <p className="mt-4 text-[15px] text-[#4A4A44]">
          Transparent, fixed pricing. No surprises. Save up to 70% compared to buying new wheels.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {PRICING.map((p, i) => (
          <div key={i} className={`relative rounded-2xl p-7 border transition-all duration-300 flex flex-col ${p.popular ? 'bg-[#0E4A52] text-[#F6F1E8] border-[#0E4A52] -translate-y-2 shadow-[0_30px_60px_-30px_rgba(14,74,82,0.6)]' : 'bg-white text-[#1A2327] border-[#E3D8C3] hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(14,74,82,0.25)]'}`}>
            {p.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C15A3E] text-white text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full">Most Popular</span>
            )}
            <h3 className={`font-serif-display text-[22px] font-semibold leading-tight ${p.popular ? 'text-[#F6F1E8]' : 'text-[#1A2327]'}`}>{p.title}</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className={`font-serif-display text-[46px] font-semibold ${p.popular ? 'text-[#F6F1E8]' : 'text-[#0E4A52]'}`}>{p.price}</span>
              <span className={`text-[12px] uppercase tracking-[0.18em] ${p.popular ? 'text-[#F6F1E8]/70' : 'text-[#6B6557]'}`}>{p.unit}</span>
            </div>
            <ul className="mt-6 space-y-2.5 flex-1">
              {p.features.map((f, j) => (
                <li key={j} className={`flex items-start gap-2 text-[13.5px] ${p.popular ? 'text-[#F6F1E8]/90' : 'text-[#4A4A44]'}`}>
                  <Check className={`w-4 h-4 mt-0.5 shrink-0 ${p.popular ? 'text-[#C15A3E]' : 'text-[#0E4A52]'}`} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a href={`tel:${BRAND.phoneTel}`} className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[13px] font-medium tracking-wide transition-colors ${p.popular ? 'bg-[#C15A3E] text-white hover:bg-[#F6F1E8] hover:text-[#0E4A52]' : 'bg-[#1A2327] text-[#F6F1E8] hover:bg-[#C15A3E]'}`}>
              <Phone className="w-4 h-4" /> Book Now
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
