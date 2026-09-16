import React from 'react';
import { Phone, MapPin, MessageSquareText, ArrowUpRight } from 'lucide-react';
import { BRAND, NAV_LINKS, LOGO_URL } from '../data/mock';

const trackPhoneConversion = () => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', { send_to: 'AW-18180382680/bNoPCIrCz9YcENi_it1D' });
  }
};

const Footer = () => (
  <footer className="border-t border-white/10 bg-[#08090a] pb-8 pt-12 text-white md:pt-16">
    <div className="mx-auto max-w-[1380px] px-5 md:px-8">
      <div className="mb-12 flex flex-col gap-6 rounded-[20px] border border-[#d5a73f]/20 bg-[#e8b94e] p-5 text-[#111315] sm:p-7 md:mb-14 md:rounded-[24px] md:p-9 lg:flex-row lg:items-center lg:justify-between">
        <div><div className="text-[9px] font-black uppercase tracking-[.22em] text-black/55 sm:text-[10px] sm:tracking-[.28em]">Your wheel. Your location.</div><div className="mt-2 text-[26px] font-extrabold leading-tight tracking-tight sm:text-3xl md:text-4xl">Send a photo. Get your quote.</div></div>
        <div className="grid gap-3 min-[430px]:grid-cols-2 sm:flex sm:flex-wrap"><a href={`sms:${BRAND.phoneTel}`} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-white px-5 py-4 text-sm font-black text-[#111315] transition hover:bg-zinc-100"><MessageSquareText className="h-4 w-4"/>Text Photo</a><a href={`tel:${BRAND.phoneTel}`} onClick={trackPhoneConversion} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-[#111315] px-5 py-4 text-sm font-black text-white transition hover:bg-black"><Phone className="h-4 w-4"/><span className="whitespace-nowrap">{BRAND.phone}</span></a></div>
      </div>

      <div className="grid gap-9 sm:grid-cols-2 md:grid-cols-12 md:gap-10">
        <div className="sm:col-span-2 md:col-span-5">
          <img src={LOGO_URL} alt={BRAND.name} className="h-20 w-auto object-contain sm:h-24" />
          <p className="mt-4 max-w-md text-[13px] leading-6 text-zinc-400 sm:mt-5 sm:text-[14px] sm:leading-7">Mobile cosmetic wheel care across Greater Los Angeles. Curb rash repair, wheel polish, color changes and lease-return wheel repair at your location.</p>
          <div className="mt-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-3.5 py-2 text-[11px] text-zinc-300 sm:mt-6 sm:px-4 sm:text-xs"><MapPin className="h-4 w-4 shrink-0 text-[#e8b94e]"/><span>Greater Los Angeles · Mobile Service</span></div>
        </div>
        <div className="md:col-span-3">
          <div className="mb-4 text-[10px] font-black uppercase tracking-[.24em] text-[#e8b94e] sm:mb-5 sm:tracking-[.28em]">Explore</div>
          <ul className="grid grid-cols-2 gap-x-5 gap-y-3 sm:block sm:space-y-3">{NAV_LINKS.map((l) => <li key={l.href}><a href={l.href} className="inline-flex min-h-8 items-center gap-1 text-sm text-zinc-400 transition hover:text-[#e8b94e]">{l.label}<ArrowUpRight className="h-3 w-3"/></a></li>)}</ul>
        </div>
        <div className="md:col-span-4">
          <div className="mb-4 text-[10px] font-black uppercase tracking-[.24em] text-[#e8b94e] sm:mb-5 sm:tracking-[.28em]">Contact</div>
          <a href={`tel:${BRAND.phoneTel}`} onClick={trackPhoneConversion} className="inline-block text-2xl font-extrabold text-white transition hover:text-[#e8b94e] md:text-3xl">{BRAND.phone}</a>
          <p className="mt-4 max-w-md text-[13px] leading-6 text-zinc-400 sm:text-sm sm:leading-7">For the fastest quote, text clear photos of the damaged wheel and include the address where you need mobile service.</p>
          <a href="#contact" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-black text-[#e8b94e] sm:mt-6">Get Quote or Book Now <ArrowUpRight className="h-4 w-4"/></a>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-5 text-[10px] leading-5 text-zinc-600 sm:text-[11px] md:mt-12 md:flex-row md:items-center md:justify-between md:gap-3 md:pt-6"><div>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</div><div>Mobile Rim Repair · Greater Los Angeles</div></div>
    </div>
  </footer>
);

export default Footer;
