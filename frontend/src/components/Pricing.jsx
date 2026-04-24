import React from 'react';
import { Check, Phone } from 'lucide-react';
import { PRICING, BRAND } from '../data/mock';

const Pricing = () => (
  <section id="pricing" className="bg-[#0a0a0b] py-20 md:py-28 border-t border-[#1e1d1b] relative">
    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[400px] spotlight opacity-50 pointer-events-none" />
    <div className="relative max-w-7xl mx-auto px-5 md:px-8">
      <div className="text-center mb-14 max-w-2xl mx-auto">
        <span className="inline-block text-[11px] uppercase tracking-[0.32em] text-[#C5C8CC] mb-5">Pricing</span>
        <h2 className="font-display text-[48px] md:text-[72px] leading-[0.95] font-bold text-[#F5F3EE]">
          Set <span className="gold-text">Pricing</span>
        </h2>
        <p className="mt-4 text-[15px] text-[#8B8982]">
          Transparent, fixed pricing. No surprises. Save up to 70% compared to buying new wheels.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {PRICING.map((p, i) => (
          <div key={i} className={`tilt-card relative rounded-[16px] p-7 border flex flex-col ${p.popular ? 'bg-gradient-to-b from-[#1A1C1F] to-[#0f0f0f] border-[#C5C8CC]/50 -translate-y-2 shadow-[0_30px_60px_-20px_rgba(197,200,204,0.3)]' : 'bg-[#0f0f0f] border-[#1e1d1b] hover:border-[#C5C8CC]/30 hover:-translate-y-1'}`}>
            {p.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 gold-btn text-[9px] uppercase tracking-[0.22em] px-3 py-1.5 rounded-full font-bold">Most Popular</span>
            )}
            <h3 className="text-[18px] font-semibold text-[#F5F3EE] leading-tight tracking-tight">{p.title}</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="font-display text-[48px] font-bold gold-text">{p.price}</span>
              <span className="text-[12px] uppercase tracking-[0.18em] text-[#8B8982]">{p.unit}</span>
            </div>
            <ul className="mt-6 space-y-2.5 flex-1">
              {p.features.map((f, j) => (
                <li key={j} className="flex items-start gap-2 text-[13.5px] text-[#C5C3BE]">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#C5C8CC]" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a href={`tel:${BRAND.phoneTel}`} className={`mt-7 inline-flex items-center justify-center gap-2 rounded-[10px] px-5 py-3 text-[11px] font-semibold tracking-[0.2em] uppercase transition-all ${p.popular ? 'gold-btn' : 'border border-[#2a2826] text-[#F5F3EE] hover:border-[#C5C8CC] hover:text-[#C5C8CC]'}`}>
              <Phone className="w-4 h-4" /> Book Now
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
