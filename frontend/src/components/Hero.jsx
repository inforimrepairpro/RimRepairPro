import React from 'react';
import { Phone, CalendarDays, MessageSquareText, MapPin, Camera, Check, ShieldCheck, BadgeDollarSign } from 'lucide-react';
import { BRAND, HERO_WHEEL } from '../data/mock';

const trackPhoneConversion = () => { if (typeof window !== 'undefined' && typeof window.gtag === 'function') window.gtag('event', 'conversion', { send_to: 'AW-18180382680/bNoPCIrCz9YcENi_it1D' }); };

const Hero = () => (
  <section id="top" className="relative overflow-hidden bg-[#090b0d] pt-[72px] text-white md:pt-[82px]">
    <div className="relative flex min-h-[620px] items-center md:min-h-[650px]">
      <img src={HERO_WHEEL} alt="Premium alloy wheel" className="absolute inset-0 h-full w-full object-cover object-[62%_center] opacity-40 sm:object-center md:opacity-45"/>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#090b0d_0%,rgba(9,11,13,.96)_40%,rgba(9,11,13,.58)_74%,rgba(9,11,13,.82)_100%)]"/>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_48%,rgba(232,185,78,.12),transparent_30%)]"/>

      <div className="relative mx-auto grid w-full max-w-[1380px] items-center gap-10 px-5 py-12 sm:py-16 md:px-8 md:py-20 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="text-[10px] font-black uppercase tracking-[.18em] text-[#e8b94e] sm:text-[11px] md:text-[13px] md:tracking-[.2em]">Greater Los Angeles · Mobile Rim Repair</div>
          <h1 className="mt-4 font-display text-[46px] font-bold leading-[.92] sm:mt-5 sm:text-[62px] md:text-[84px]">Like New Rims.<span className="block text-[#efc45a]">At Your Location.</span></h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-zinc-300 md:mt-6 md:text-[18px] md:leading-relaxed">Mobile curb rash repair, wheel polishing, color changes and lease-return wheel repair. We come to your home, office or service location in Greater Los Angeles.</p>
          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[11px] font-semibold text-zinc-300 sm:text-xs"><span className="flex items-center gap-2"><Check className="h-4 w-4 text-[#e8b94e]"/>No deposit</span><span className="flex items-center gap-2"><Check className="h-4 w-4 text-[#e8b94e]"/>No distance fee</span><span className="flex items-center gap-2"><Check className="h-4 w-4 text-[#e8b94e]"/>Work warranty</span></div>
          <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap md:mt-8">
            <a href={`tel:${BRAND.phoneTel}`} onClick={trackPhoneConversion} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#e3af3d] to-[#f2cd69] px-5 py-4 text-sm font-black text-[#111315] shadow-[0_12px_35px_rgba(229,181,75,.22)] sm:rounded-full sm:px-6"><Phone className="h-4 w-4"/>Call Now — {BRAND.phone}</a>
            <a href="#contact" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-white/30 bg-black/35 px-5 py-4 text-sm font-black text-white hover:border-[#e8b94e]/70 sm:rounded-full sm:px-6"><CalendarDays className="h-4 w-4"/>Book Online</a>
            <a href={`sms:${BRAND.phoneTel}`} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-[#e8b94e]/50 bg-black/35 px-5 py-4 text-sm font-black text-[#f0c75e] sm:rounded-full sm:px-6"><MessageSquareText className="h-4 w-4"/>Text Photo — Get Quote</a>
          </div>
          <div className="mt-7 flex max-w-2xl items-start gap-3 rounded-xl border border-white/10 bg-black/50 p-4 backdrop-blur-md md:mt-8"><Camera className="mt-0.5 h-5 w-5 shrink-0 text-[#e8b94e]"/><div><div className="text-sm font-bold">Get your quote started with photos</div><div className="mt-1 text-xs leading-5 text-zinc-400">Send a close-up of the damage, a full wheel photo, and the address or ZIP where you need mobile service.</div></div></div>
        </div>
        <div className="hidden lg:col-span-5 lg:block"><div className="ml-auto max-w-[260px] border-l border-[#e8b94e]/50 pl-7"><div className="space-y-4 text-sm font-black uppercase tracking-[.16em] text-zinc-200"><div>Repair</div><div>Refresh</div><div>Restore</div><div className="text-[#e8b94e]">At Your Location</div></div></div></div>
      </div>
    </div>

    <div className="border-y border-white/10 bg-[#0d1013]">
      <div className="mx-auto grid max-w-[1380px] grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        <div className="flex items-center gap-4 px-5 py-4 sm:px-6 sm:py-5"><BadgeDollarSign className="h-7 w-7 shrink-0 text-[#e8b94e]"/><div><div className="font-extrabold">No Deposit</div><div className="text-xs text-zinc-500">Request service without a deposit</div></div></div>
        <div className="flex items-center gap-4 px-5 py-4 sm:px-6 sm:py-5"><MapPin className="h-7 w-7 shrink-0 text-[#e8b94e]"/><div><div className="font-extrabold">Mobile Service</div><div className="text-xs text-zinc-500">No separate distance fee</div></div></div>
        <div className="flex items-center gap-4 px-5 py-4 sm:px-6 sm:py-5"><ShieldCheck className="h-7 w-7 shrink-0 text-[#e8b94e]"/><div><div className="font-extrabold">Work Warranty</div><div className="text-xs text-zinc-500">Warranty on completed work</div></div></div>
      </div>
    </div>
  </section>
);
export default Hero;
