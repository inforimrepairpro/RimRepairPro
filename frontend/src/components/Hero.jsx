import React, { useEffect, useRef } from 'react';
import { Phone, ArrowRight, Truck, Zap, Award, ShieldCheck } from 'lucide-react';
import { BRAND, HERO_WHEEL, HERO_STATS_INLINE } from '../data/mock';

const ICONS = { Truck, Zap, Award, ShieldCheck };

const Hero = () => {
  const wheelRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Only enable mouse-parallax on devices with a fine pointer (desktop, not touch).
    const mq = typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(pointer: fine)')
      : { matches: true };
    if (!mq.matches) return;

    let raf = 0;
    let targetX = 0, targetY = 0;
    let curX = 0, curY = 0;

    const handleMouse = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / Math.max(rect.width, 1);
      const dy = (e.clientY - cy) / Math.max(rect.height, 1);
      const nx = Math.max(-1, Math.min(1, dx));
      const ny = Math.max(-1, Math.min(1, dy));
      targetX = -ny * 16;
      targetY = nx * 20;
    };

    const tick = () => {
      curX += (targetX - curX) * 0.08;
      curY += (targetY - curY) * 0.08;
      if (wheelRef.current) {
        wheelRef.current.style.transform =
          `perspective(1200px) rotateX(${curX.toFixed(2)}deg) rotateY(${curY.toFixed(2)}deg)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', handleMouse, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', handleMouse);
      cancelAnimationFrame(raf);
    };
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

      {/* Right wheel — real HRE photo, continuous slow spin (35s/rev) + mouse-parallax tilt on desktop */}
      <div ref={containerRef} className="lg:col-span-6 relative fade-up flex items-center justify-center" style={{ animationDelay: '0.15s', perspective: '1200px' }}>
        <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] md:w-[520px] md:h-[520px] lg:w-[620px] lg:h-[620px]">
          {/* Soft halo */}
          <div className="absolute inset-0 rounded-full blur-3xl pointer-events-none" style={{background: 'radial-gradient(circle, rgba(197,200,204,0.28) 0%, rgba(197,200,204,0) 62%)'}} />
          {/* Floor shadow */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-2 w-[70%] h-6 rounded-[50%] bg-black/70 blur-2xl pointer-events-none" />
          {/* 3D-tilted outer wrapper (responds to mouse on desktop) */}
          <div
            ref={wheelRef}
            className="absolute inset-0 flex items-center justify-center will-change-transform"
            style={{ transformStyle: 'preserve-3d', transition: 'transform 60ms linear' }}
          >
            {/* Inner wrapper continuously spins */}
            <div className="w-full h-full animate-wheel-spin will-change-transform">
              <img
                src={HERO_WHEEL}
                alt="Premium forged alloy wheel"
                draggable="false"
                className="w-full h-full object-contain select-none pointer-events-none"
                style={{
                  WebkitMaskImage: 'radial-gradient(circle at center, black 46%, transparent 50%)',
                  maskImage: 'radial-gradient(circle at center, black 46%, transparent 50%)',
                  filter: 'drop-shadow(0 26px 44px rgba(0,0,0,0.7)) brightness(1.05) contrast(1.04)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Hero;
