import React from 'react';
import { Phone, ArrowRight, Zap, Truck, ShieldCheck } from 'lucide-react';
import { BRAND, HERO_IMAGE } from '../data/mock';

const Hero = () => {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#F6F1E8] grain-overlay overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-[#EFE7D8] to-[#F6F1E8] blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-[420px] h-[420px] rounded-full bg-[#0E4A52]/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-7 fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E3D8C3] bg-white/60 backdrop-blur px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-[#1A2327]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C15A3E]" />
            {BRAND.tagline}
          </div>

          <h1 className="mt-6 font-serif-display text-[48px] leading-[1.02] sm:text-[64px] md:text-[76px] lg:text-[86px] font-semibold text-[#1A2327]">
            Rim Repair <span className="italic text-[#C15A3E] font-normal">reimagined.</span>
            <br />
            <span className="text-[#0E4A52]">Right at your</span> door.
          </h1>

          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-[#4A4A44]">
            Premium mobile wheel restoration in Los Angeles. Curb rash, bent wheels, custom refinishing and powder coating — done on-site with same-day turnarounds.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href={`tel:${BRAND.phoneTel}`} className="inline-flex items-center gap-2 rounded-full bg-[#0E4A52] text-[#F6F1E8] px-7 py-4 text-[14px] font-medium tracking-wide hover:bg-[#C15A3E] transition-all duration-300 shadow-[0_8px_24px_-8px_rgba(14,74,82,0.5)] hover:shadow-[0_12px_28px_-8px_rgba(193,90,62,0.5)]">
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-[#1A2327]/25 bg-transparent px-7 py-4 text-[14px] font-medium text-[#1A2327] hover:border-[#0E4A52] hover:text-[#0E4A52] transition-colors">
              Our Services <ArrowRight className="w-4 h-4" />
            </a>
            <a href={`tel:${BRAND.phoneTel}`} className="hidden sm:inline-block font-serif-display italic text-[17px] text-[#0E4A52] underline decoration-[#C15A3E] underline-offset-4 hover:text-[#C15A3E] transition-colors">
              {BRAND.phone}
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 max-w-lg">
            {[{ I: Truck, t: 'Mobile', s: 'We come to you' }, { I: Zap, t: 'Same Day', s: 'Most repairs' }, { I: ShieldCheck, t: 'Lifetime', s: 'Warranty' }].map((x, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="shrink-0 w-9 h-9 rounded-lg bg-white border border-[#E3D8C3] flex items-center justify-center">
                  <x.I className="w-4 h-4 text-[#0E4A52]" />
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-[#1A2327]">{x.t}</div>
                  <div className="text-[11px] uppercase tracking-[0.14em] text-[#6B6557]">{x.s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right visual */}
        <div className="lg:col-span-5 relative fade-up" style={{ animationDelay: '0.15s' }}>
          <div className="relative aspect-square rounded-[28px] overflow-hidden bg-[#EFE7D8] ring-1 ring-[#E3D8C3] shadow-[0_30px_60px_-30px_rgba(14,74,82,0.35)]">
            <img src={HERO_IMAGE} alt="Luxury alloy wheel" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E4A52]/30 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div className="bg-white/90 backdrop-blur rounded-xl px-4 py-3 shadow-lg">
                <div className="text-[10px] uppercase tracking-[0.22em] text-[#6B6557]">Featured finish</div>
                <div className="font-serif-display text-[18px] text-[#0E4A52] font-semibold">Satin Bronze</div>
              </div>
              <div className="bg-[#C15A3E] text-white rounded-xl px-4 py-3 shadow-lg">
                <div className="text-[10px] uppercase tracking-[0.22em] opacity-80">From</div>
                <div className="font-serif-display text-[18px] font-semibold">$95 / wheel</div>
              </div>
            </div>
          </div>
          {/* Floating badge */}
          <div className="absolute -top-4 -left-4 hidden md:flex items-center gap-3 bg-white rounded-full pl-2 pr-5 py-2 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.2)] ring-1 ring-[#E3D8C3]">
            <div className="w-9 h-9 rounded-full bg-[#0E4A52] flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-[#F6F1E8]" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-[#6B6557] leading-none">Insured</div>
              <div className="text-[13px] font-semibold text-[#1A2327] leading-tight">Lifetime Warranty</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
