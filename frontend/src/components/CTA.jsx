import React from 'react';
import { Phone, ShieldCheck, Zap, BadgeCheck } from 'lucide-react';
import { BRAND } from '../data/mock';

const CTA = () => (
  <section id="contact" className="bg-[#0a0a0b] py-24 md:py-32 relative border-t border-[#1e1d1b]">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,200,204,0.12),transparent_55%)] pointer-events-none" />
    <div className="relative max-w-5xl mx-auto px-5 md:px-8 text-center">
      <span className="inline-block text-[11px] uppercase tracking-[0.32em] text-[#C5C8CC] mb-6">Get Started</span>
      <h2 className="font-display text-[56px] md:text-[96px] leading-[0.92] font-bold text-[#F5F3EE]">
        Ready to Restore <br /><span className="gold-text">Perfection?</span>
      </h2>
      <p className="mt-6 max-w-xl mx-auto text-[16px] leading-relaxed text-[#8B8982]">
        Call for a free, no-obligation quote. We’ll have an estimate for you fast.
      </p>
      <div className="mt-10">
        <a href={`tel:${BRAND.phoneTel}`} className="gold-btn inline-flex items-center gap-3 rounded-[14px] px-10 py-5 text-[18px] md:text-[22px] font-bold tracking-tight transition-all">
          <Phone className="w-5 h-5" /> {BRAND.phone}
        </a>
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12">
        {[{ I: BadgeCheck, t: 'Free Estimates' }, { I: ShieldCheck, t: 'Lifetime Warranty' }, { I: Zap, t: 'Same-Day Service' }].map((x, i) => (
          <div key={i} className="flex items-center gap-2 text-[12px] uppercase tracking-[0.24em] text-[#C5C3BE]">
            <x.I className="w-4 h-4 text-[#C5C8CC]" /> {x.t}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CTA;
