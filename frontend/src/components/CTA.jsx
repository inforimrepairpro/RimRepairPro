import React from 'react';
import { Phone, ShieldCheck, Zap, BadgeCheck } from 'lucide-react';
import { BRAND } from '../data/mock';

const CTA = () => (
  <section id="contact" className="bg-[#F6F1E8] py-20 md:py-28 grain-overlay">
    <div className="max-w-5xl mx-auto px-5 md:px-8 text-center">
      <span className="inline-block text-[11px] uppercase tracking-[0.28em] text-[#C15A3E] mb-5">Get Started</span>
      <h2 className="font-serif-display text-[48px] md:text-[80px] leading-[1.0] font-semibold text-[#1A2327]">
        Ready to restore <br /><span className="italic text-[#0E4A52]">perfection?</span>
      </h2>
      <p className="mt-6 max-w-xl mx-auto text-[16px] leading-relaxed text-[#4A4A44]">
        Call for a free, no-obligation quote. We’ll have an estimate for you in minutes and a mobile tech at your door fast.
      </p>
      <div className="mt-10">
        <a href={`tel:${BRAND.phoneTel}`} className="inline-flex items-center gap-3 rounded-full bg-[#0E4A52] text-[#F6F1E8] px-10 py-5 text-[17px] md:text-[20px] font-serif-display font-semibold hover:bg-[#C15A3E] transition-all shadow-[0_14px_32px_-12px_rgba(14,74,82,0.5)] hover:shadow-[0_16px_36px_-10px_rgba(193,90,62,0.55)]">
          <Phone className="w-5 h-5" /> {BRAND.phone}
        </a>
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12">
        {[{ I: BadgeCheck, t: 'Free Estimates' }, { I: ShieldCheck, t: 'Lifetime Warranty' }, { I: Zap, t: 'Same-Day Service' }].map((x, i) => (
          <div key={i} className="flex items-center gap-2 text-[13px] uppercase tracking-[0.22em] text-[#1A2327]">
            <x.I className="w-4 h-4 text-[#C15A3E]" /> {x.t}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CTA;
