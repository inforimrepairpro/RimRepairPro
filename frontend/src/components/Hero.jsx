import React from 'react';
import { Phone, ArrowRight, Truck, Zap, Award, ShieldCheck } from 'lucide-react';
import { BRAND, HERO_WHEEL, HERO_STATS_INLINE } from '../data/mock';

const ICONS = { Truck, Zap, Award, ShieldCheck };

const Hero = () => (
  <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
    {/* Gold spotlight on right */}
    <div className="absolute right-[-15%] top-[5%] w-[900px] h-[900px] spotlight pointer-events-none" />
    <div className="absolute left-[-20%] bottom-[-10%] w-[700px] h-[700px] spotlight opacity-40 pointer-events-none" />

    <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
      <div className="lg:col-span-6 fade-up">
        <div className="inline-flex items-center gap-2 rounded-[10px] border border-[#2a2622] bg-[#14120e]/60 backdrop-blur px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[#C5C8CC]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5C8CC] animate-pulse" />
          Mobile Service · We Come To You
        </div>

        <h1 className="mt-7 font-display text-[56px] leading-[0.95] sm:text-[72px] md:text-[88px] lg:text-[100px] font-bold text-[#F5F3EE]">
          Rim <span className="block -mt-1">Repair Pro</span>
          <span className="block mt-2 text-[40px] sm:text-[52px] md:text-[60px] lg:text-[68px] font-semibold">
            <span className="gold-text">Mobile</span> <span className="text-[#F5F3EE]/80">Service</span>
          </span>
        </h1>

        <p className="mt-4 text-[18px] md:text-[20px] text-[#C5C8CC]/85 font-medium">We Come To You</p>

        <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-[#8B8982]">
          Premium mobile wheel restoration. Curb rash, bent wheels, custom refinishing — right at your doorstep. Same-day service available.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a href={`tel:${BRAND.phoneTel}`} className="gold-btn inline-flex items-center gap-2 rounded-[12px] px-7 py-4 text-[12px] font-semibold tracking-[0.2em] uppercase transition-all">
            <Phone className="w-4 h-4" /> Call Now
          </a>
          <a href="#services" className="inline-flex items-center gap-2 rounded-[12px] border border-[#2a2622] bg-[#14120e]/40 px-7 py-4 text-[12px] font-semibold tracking-[0.2em] uppercase text-[#F5F3EE] hover:border-[#C5C8CC] hover:text-[#C5C8CC] transition-colors">
            Our Services <ArrowRight className="w-4 h-4" />
          </a>
          <a href={`tel:${BRAND.phoneTel}`} className="hidden sm:inline-block text-[17px] text-[#C5C8CC] hover:text-[#E8EAED] font-semibold transition-colors">
            {BRAND.phone}
          </a>
        </div>

        {/* Inline badges */}
        <div className="mt-10 flex flex-wrap gap-3">
          {HERO_STATS_INLINE.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <div key={i} className="flex items-center gap-3 rounded-[10px] border border-[#2a2622] bg-[#14120e]/40 backdrop-blur px-4 py-3 min-w-[160px]">
                <div className="w-9 h-9 rounded-full border border-[#C5C8CC]/30 bg-[#1A1C1F] flex items-center justify-center">
                  <Icon className="w-4 h-4 text-[#C5C8CC]" />
                </div>
                <div className="leading-tight">
                  <div className="text-[13px] font-semibold text-[#F5F3EE]">{s.label}</div>
                  <div className="text-[10px] uppercase tracking-[0.16em] text-[#8B8982]">{s.sub}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right wheel */}
      <div className="lg:col-span-6 relative fade-up flex items-center justify-center" style={{ animationDelay: '0.15s' }}>
        <div className="relative w-[420px] h-[420px] md:w-[520px] md:h-[520px] lg:w-[600px] lg:h-[600px]">
          {/* Chrome halo */}
          <div className="absolute inset-0 rounded-full blur-3xl" style={{background: 'radial-gradient(circle, rgba(197,200,204,0.35) 0%, rgba(197,200,204,0) 70%)'}} />
          {/* Ornamental rings */}
          <div className="absolute inset-2 rounded-full border border-[#C5C8CC]/20" />
          <div className="absolute inset-6 rounded-full border border-[#C5C8CC]/15" />
          <div className="absolute inset-12 rounded-full border border-[#C5C8CC]/10" />
          {/* Wheel (spinning) */}
          <div className="absolute inset-4 rounded-full overflow-hidden ring-2 ring-[#C5C8CC]/30 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.7),inset_0_0_40px_rgba(0,0,0,0.6)] animate-spin-wheel bg-black">
            <img src={HERO_WHEEL} alt="Premium forged alloy wheel" className="w-full h-full object-cover scale-110" />
            {/* Inner depth shadow for 3D feel */}
            <div className="absolute inset-0 rounded-full pointer-events-none" style={{background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.08) 0%, transparent 40%), radial-gradient(circle at 70% 70%, rgba(0,0,0,0.5) 60%, transparent 80%)'}} />
          </div>
          {/* Center hub glint (doesn't spin) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-white/40 to-transparent blur-sm pointer-events-none" />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
