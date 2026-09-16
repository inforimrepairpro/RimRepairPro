import React from 'react';
import { Phone, CalendarDays, MessageSquareText, MapPin, Clock3, Sparkles } from 'lucide-react';
import { BRAND, HERO_WHEEL } from '../data/mock';

const trackPhoneConversion = () => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', { send_to: 'AW-18180382680/bNoPCIrCz9YcENi_it1D' });
  }
};

const Hero = () => (
  <section id="top" className="relative min-h-[780px] pt-32 pb-16 overflow-hidden bg-[#07111f]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_25%,rgba(27,111,255,0.25),transparent_34%),radial-gradient(circle_at_15%_80%,rgba(20,184,166,0.12),transparent_30%)]" />
    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:64px_64px]" />

    <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-7">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-cyan-100">
          <MapPin className="w-3.5 h-3.5" /> Greater Los Angeles · Mobile Service
        </div>

        <h1 className="mt-7 max-w-4xl font-display text-[54px] sm:text-[70px] md:text-[86px] leading-[0.92] font-bold tracking-[-0.04em] text-white">
          Damaged Rim?
          <span className="block text-[#64d8ff]">We Come To You.</span>
        </h1>

        <p className="mt-7 max-w-2xl text-[17px] md:text-[20px] leading-relaxed text-slate-300">
          Mobile curb rash repair, wheel polish, color changes and lease-return wheel repair — completed at your home, office or convenient location.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a href={`tel:${BRAND.phoneTel}`} onClick={trackPhoneConversion} className="inline-flex items-center gap-2 rounded-xl bg-[#2f7cff] px-6 py-4 text-sm font-bold text-white shadow-[0_14px_40px_rgba(47,124,255,.35)] hover:bg-[#438aff] transition-colors">
            <Phone className="w-4 h-4" /> Call Now — {BRAND.phone}
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-bold text-[#07111f] hover:bg-slate-100 transition-colors">
            <CalendarDays className="w-4 h-4" /> Book Online
          </a>
          <a href={`sms:${BRAND.phoneTel}`} className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-4 text-sm font-bold text-white hover:bg-white/10 transition-colors">
            <MessageSquareText className="w-4 h-4" /> Text Photo — Get Quote
          </a>
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-3 max-w-3xl">
          <div className="rounded-2xl border border-white/10 bg-white/[.06] p-4 backdrop-blur"><Sparkles className="w-5 h-5 text-[#64d8ff]"/><div className="mt-3 font-semibold text-white">Photo Quote</div><div className="mt-1 text-xs text-slate-400">Send damage + address</div></div>
          <div className="rounded-2xl border border-white/10 bg-white/[.06] p-4 backdrop-blur"><Clock3 className="w-5 h-5 text-[#64d8ff]"/><div className="mt-3 font-semibold text-white">Same-Day</div><div className="mt-1 text-xs text-slate-400">Ask about availability</div></div>
          <div className="rounded-2xl border border-white/10 bg-white/[.06] p-4 backdrop-blur"><MapPin className="w-5 h-5 text-[#64d8ff]"/><div className="mt-3 font-semibold text-white">Mobile Service</div><div className="mt-1 text-xs text-slate-400">We come to your location</div></div>
        </div>
      </div>

      <div className="lg:col-span-5 relative flex justify-center">
        <div className="absolute inset-0 m-auto w-[420px] h-[420px] rounded-full bg-[#2f7cff]/20 blur-3xl" />
        <div className="relative w-[320px] h-[320px] sm:w-[430px] sm:h-[430px] rounded-full border border-white/10 bg-white/[.03] p-5 shadow-2xl">
          <img src={HERO_WHEEL} alt="Alloy wheel" className="w-full h-full rounded-full object-cover" />
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-[#0b1728]/95 px-5 py-3 text-xs font-semibold text-white shadow-xl">
            Call or text {BRAND.phone}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
