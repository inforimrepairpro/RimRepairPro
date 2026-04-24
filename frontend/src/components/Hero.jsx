import React, { useEffect, useRef } from 'react';
import { Phone, ArrowRight, Truck, Zap, Award, ShieldCheck } from 'lucide-react';
import { BRAND, HERO_WHEEL, HERO_STATS_INLINE } from '../data/mock';

const ICONS = { Truck, Zap, Award, ShieldCheck };

const Hero = () => {
  const wheelRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (wheelRef.current) {
        // Smooth scroll-driven rotation — wheel "rolls" as you scroll.
        wheelRef.current.style.transform = `rotate(${window.scrollY * 0.18}deg)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
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

      {/* Right wheel — real photo, blended with hero background, rotates with scroll */}
      <div className="lg:col-span-6 relative fade-up flex items-center justify-center" style={{ animationDelay: '0.15s' }}>
        <div className="relative w-[460px] h-[460px] md:w-[560px] md:h-[560px] lg:w-[620px] lg:h-[620px]">
          {/* Chrome halo glow behind */}
          <div className="absolute inset-0 rounded-full blur-3xl pointer-events-none" style={{background: 'radial-gradient(circle, rgba(197,200,204,0.28) 0%, rgba(197,200,204,0) 62%)'}} />
          {/* Soft floor shadow */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-2 w-[70%] h-6 rounded-[50%] bg-black/70 blur-2xl pointer-events-none" />
          {/* Wheel image — rotates with scroll. Radial mask crops image corners so only the round wheel appears floating on the background. */}
          <div ref={wheelRef} className="absolute inset-0 flex items-center justify-center will-change-transform" style={{ transition: 'transform 120ms linear' }}>
            <img
              src={HERO_WHEEL}
              alt="Premium forged alloy wheel"
              draggable="false"
              className="w-full h-full object-contain select-none pointer-events-none"
              style={{
                WebkitMaskImage: 'radial-gradient(circle at center, black 46%, transparent 50%)',
                maskImage: 'radial-gradient(circle at center, black 46%, transparent 50%)',
                filter: 'drop-shadow(0 24px 40px rgba(0,0,0,0.7)) brightness(1.04) contrast(1.03)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Hero;
