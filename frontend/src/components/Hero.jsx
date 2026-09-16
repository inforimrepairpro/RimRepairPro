import React from 'react';
import { Phone, CalendarDays, MessageSquareText, MapPin, Camera, Check, ShieldCheck, BadgeDollarSign } from 'lucide-react';
import { BRAND, HERO_WHEEL } from '../data/mock';

const trackPhoneConversion = () => { if (typeof window !== 'undefined' && typeof window.gtag === 'function') window.gtag('event', 'conversion', { send_to: 'AW-18180382680/bNoPCIrCz9YcENi_it1D' }); };

const Hero = () => (
  <section id="top" className="relative pt-[82px] overflow-hidden bg-[#090b0d] text-white">
    <div className="relative min-h-[650px] flex items-center">
      <img src={HERO_WHEEL} alt="Premium alloy wheel" className="absolute inset-0 h-full w-full object-cover object-center opacity-45"/>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#090b0d_0%,rgba(9,11,13,.94)_37%,rgba(9,11,13,.48)_70%,rgba(9,11,13,.8)_100%)]"/>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_48%,rgba(232,185,78,.12),transparent_30%)]"/>

      <div className="relative max-w-[1380px] mx-auto w-full px-5 md:px-8 py-16 md:py-20 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <div className="text-[11px] md:text-[13px] uppercase tracking-[.2em] font-black text-[#e8b94e]">Greater Los Angeles · Mobile Rim Repair</div>
          <h1 className="mt-5 font-display text-[54px] sm:text-[70px] md:text-[84px] leading-[.91] font-bold">Like New Rims.<span className="block text-[#efc45a]">At Your Location.</span></h1>
          <p className="mt-6 max-w-2xl text-[16px] md:text-[18px] leading-relaxed text-zinc-300">Mobile curb rash repair, wheel polishing, color changes and lease-return wheel repair. We come to your home, office or service location in Greater Los Angeles.</p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-zinc-300"><span className="flex gap-2 items-center"><Check className="w-4 h-4 text-[#e8b94e]"/>No deposit</span><span className="flex gap-2 items-center"><Check className="w-4 h-4 text-[#e8b94e]"/>No distance fee</span><span className="flex gap-2 items-center"><Check className="w-4 h-4 text-[#e8b94e]"/>Work warranty</span></div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${BRAND.phoneTel}`} onClick={trackPhoneConversion} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e3af3d] to-[#f2cd69] px-6 py-4 text-sm font-black text-[#111315] shadow-[0_12px_35px_rgba(229,181,75,.22)]"><Phone className="w-4 h-4"/>Call Now — {BRAND.phone}</a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/25 px-6 py-4 text-sm font-black text-white hover:border-[#e8b94e]/70"><CalendarDays className="w-4 h-4"/>Book Online</a>
            <a href={`sms:${BRAND.phoneTel}`} className="inline-flex items-center gap-2 rounded-full border border-[#e8b94e]/50 bg-black/25 px-6 py-4 text-sm font-black text-[#f0c75e]"><MessageSquareText className="w-4 h-4"/>Text Photo — Get Quote</a>
          </div>
          <div className="mt-8 max-w-2xl rounded-xl border border-white/10 bg-black/45 p-4 backdrop-blur-md flex items-start gap-3"><Camera className="mt-0.5 w-5 h-5 shrink-0 text-[#e8b94e]"/><div><div className="text-sm font-bold">Get your quote started with photos</div><div className="mt-1 text-xs leading-relaxed text-zinc-400">Send a close-up of the damage, a full wheel photo, and the address or ZIP where you need mobile service.</div></div></div>
        </div>
        <div className="hidden lg:block lg:col-span-5"><div className="ml-auto max-w-[260px] border-l border-[#e8b94e]/50 pl-7"><div className="space-y-4 text-sm font-black uppercase tracking-[.16em] text-zinc-200"><div>Repair</div><div>Refresh</div><div>Restore</div><div className="text-[#e8b94e]">At Your Location</div></div></div></div>
      </div>
    </div>

    <div className="border-y border-white/10 bg-[#0d1013]">
      <div className="max-w-[1380px] mx-auto grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
        <div className="flex items-center gap-4 px-6 py-5"><BadgeDollarSign className="w-7 h-7 text-[#e8b94e]"/><div><div className="font-extrabold">No Deposit</div><div className="text-xs text-zinc-500">Request service without a deposit</div></div></div>
        <div className="flex items-center gap-4 px-6 py-5"><MapPin className="w-7 h-7 text-[#e8b94e]"/><div><div className="font-extrabold">Mobile Service</div><div className="text-xs text-zinc-500">No separate distance fee</div></div></div>
        <div className="flex items-center gap-4 px-6 py-5"><ShieldCheck className="w-7 h-7 text-[#e8b94e]"/><div><div className="font-extrabold">Work Warranty</div><div className="text-xs text-zinc-500">Warranty on completed work</div></div></div>
      </div>
    </div>
  </section>
);
export default Hero;
