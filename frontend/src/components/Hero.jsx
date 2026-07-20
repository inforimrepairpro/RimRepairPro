import React, { useEffect, useRef } from 'react';
import { Phone, ArrowRight, Truck, Zap, Award, ShieldCheck } from 'lucide-react';
import { BRAND, HERO_WHEEL, HERO_STATS_INLINE } from '../data/mock';

const ICONS = { Truck, Zap, Award, ShieldCheck };

// Sparkle dot positions around the wheel (% relative to container)
const SPARKLES = [
  { top: '8%', left: '18%', delay: '0s' },
  { top: '14%', right: '12%', delay: '0.6s' },
  { top: '38%', left: '4%', delay: '1.2s' },
  { top: '52%', right: '6%', delay: '0.3s' },
  { bottom: '14%', left: '14%', delay: '1.8s' },
  { bottom: '8%', right: '20%', delay: '0.9s' },
  { top: '24%', left: '46%', delay: '2.1s' },
  { bottom: '22%', right: '40%', delay: '1.5s' },
];

const Hero = () => {
  const tiltRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const mq = typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(pointer: fine)')
      : { matches: true };
    if (!mq.matches) return;

    let raf = 0;
    let tx = 0, ty = 0, cx = 0, cy = 0;

    const onMove = (e) => {
      if (!containerRef.current) return;
      const r = containerRef.current.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / Math.max(r.width, 1);
      const dy = (e.clientY - (r.top + r.height / 2)) / Math.max(r.height, 1);
      tx = -Math.max(-1, Math.min(1, dy)) * 14;
      ty = Math.max(-1, Math.min(1, dx)) * 18;
    };
    const tick = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      if (tiltRef.current) {
        tiltRef.current.style.transform =
          `perspective(1000px) rotateX(${cx.toFixed(2)}deg) rotateY(${cy.toFixed(2)}deg)`;
      }
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', onMove);
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
          Premium mobile wheel restoration. Curb rash, scuffed rims, custom refinishing — right at your doorstep. Same-day service available.
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

      {/* Right side — real HRE wheel photo, silver-tinted, 18s spin + mouse 3D parallax + sparkles */}
      <div
        ref={containerRef}
        className="lg:col-span-6 relative fade-up flex items-center justify-center"
        style={{ animationDelay: '0.15s', perspective: '1000px' }}
      >
        <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[480px] md:h-[480px] lg:w-[560px] lg:h-[560px]">
          {/* Ambient silver glow behind */}
          <div className="absolute inset-0 rounded-full blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(197,200,204,0.32) 0%, rgba(197,200,204,0) 60%)' }} />
          {/* Floor shadow */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[60%] h-5 rounded-[50%] bg-black/70 blur-2xl pointer-events-none" />

          {/* Sparkle dots */}
          {SPARKLES.map((s, i) => (
            <span
              key={i}
              className="sparkle-dot"
              style={{
                top: s.top,
                left: s.left,
                right: s.right,
                bottom: s.bottom,
                animationDelay: s.delay,
              }}
            />
          ))}

          {/* 3D-tilt wrapper (mouse parallax on desktop) */}
          <div
            ref={tiltRef}
            className="absolute inset-0 flex items-center justify-center will-change-transform"
            style={{ transition: 'transform 60ms linear', transformStyle: 'preserve-3d' }}
          >
            {/* Wheel image — continuous spin + silver tint filter */}
            <img
              src={HERO_WHEEL}
              alt="Premium forged alloy wheel"
              draggable="false"
              className="w-full h-full object-contain select-none pointer-events-none animate-wheel-spin"
              style={{
                WebkitMaskImage: 'radial-gradient(circle at center, black 46%, transparent 50%)',
                maskImage: 'radial-gradient(circle at center, black 46%, transparent 50%)',
                filter: 'sepia(0.25) saturate(1.3) brightness(0.75) hue-rotate(-15deg) drop-shadow(0 24px 40px rgba(0,0,0,0.7))',
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
