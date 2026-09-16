import React from 'react';
import { Phone, CalendarDays, MessageSquareText, MapPin, Camera, ArrowDown, Check } from 'lucide-react';
import { BRAND, HERO_WHEEL } from '../data/mock';

const trackPhoneConversion = () => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', { send_to: 'AW-18180382680/bNoPCIrCz9YcENi_it1D' });
  }
};

const Hero = () => (
  <section id="top" className="relative min-h-[820px] pt-28 md:pt-36 pb-16 overflow-hidden bg-[#081526]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_28%,rgba(47,124,255,.28),transparent_32%),radial-gradient(circle_at_12%_82%,rgba(23,106,118,.2),transparent_30%)]" />
    <div className="absolute inset-0 opacity-[.12] bg-[linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] bg-[size:72px_72px]" />

    <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-7">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#64d8ff]/20 bg-[#64d8ff]/10 px-4 py-2 text-[10px] md:text-[11px] font-bold uppercase tracking-[.2em] text-[#b9efff]"><MapPin className="w-3.5 h-3.5"/> Greater Los Angeles · Mobile Rim Repair</div>

        <h1 className="mt-7 max-w-4xl font-display text-[54px] sm:text-[70px] md:text-[88px] leading-[.9] font-bold text-white">Like-new rims.<span className="block text-[#64d8ff]">At your location.</span></h1>
        <p className="mt-7 max-w-2xl text-[17px] md:text-[20px] leading-relaxed text-slate-300">Professional mobile cosmetic wheel repair for curb rash, polishing, wheel color changes and lease-return preparation. Start by sending photos of the damage and the service address.</p>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[13px] font-semibold text-slate-200">
          <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#64d8ff]"/>Home or office service</span>
          <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#64d8ff]"/>Photo-first quote</span>
          <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#64d8ff]"/>Same-day availability may be available</span>
        </div>

        <div className="mt-9 flex flex-wrap gap-3">
          <a href={`tel:${BRAND.phoneTel}`} onClick={trackPhoneConversion} className="inline-flex items-center gap-2 rounded-xl bg-[#2f7cff] px-6 py-4 text-sm font-black text-white shadow-[0_16px_45px_rgba(47,124,255,.3)] hover:bg-[#438aff] transition"><Phone className="w-4 h-4"/>Call Now — {BRAND.phone}</a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-black text-[#081526] hover:bg-slate-100 transition"><CalendarDays className="w-4 h-4"/>Get Quote / Book</a>
          <a href={`sms:${BRAND.phoneTel}`} className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[.06] px-6 py-4 text-sm font-black text-white hover:bg-white/10 transition"><MessageSquareText className="w-4 h-4"/>Text Photos</a>
        </div>

        <div className="mt-10 rounded-[22px] border border-white/10 bg-white/[.055] p-4 md:p-5 max-w-3xl backdrop-blur">
          <div className="flex items-center gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#64d8ff]/10 text-[#64d8ff]"><Camera className="w-5 h-5"/></div><div><div className="text-sm font-bold text-white">For a faster quote, send 3 things</div><div className="mt-1 text-xs md:text-sm text-slate-400">A clear close-up of the damage · a full wheel photo · your service address or ZIP code</div></div></div>
        </div>
      </div>

      <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
        <div className="absolute inset-0 m-auto h-[420px] w-[420px] rounded-full bg-[#2f7cff]/20 blur-3xl" />
        <div className="relative w-full max-w-[480px]">
          <div className="relative aspect-square overflow-hidden rounded-[38px] border border-white/10 bg-white/[.04] p-3 shadow-2xl">
            <img src={HERO_WHEEL} alt="Alloy wheel repair" className="h-full w-full rounded-[30px] object-cover"/>
            <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/10 bg-[#081526]/90 p-4 backdrop-blur-xl">
              <div className="text-[10px] font-black uppercase tracking-[.22em] text-[#64d8ff]">Mobile Service</div>
              <div className="mt-1 text-sm font-semibold text-white">Tell us where the vehicle is. We’ll confirm availability for your location.</div>
            </div>
          </div>
          <a href="#gallery" className="mt-5 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[.18em] text-slate-400 hover:text-white transition">See Before & After <ArrowDown className="w-4 h-4"/></a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
