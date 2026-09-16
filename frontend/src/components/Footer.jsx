import React from 'react';
import { Phone, MapPin, MessageSquareText, ArrowUpRight } from 'lucide-react';
import { BRAND, NAV_LINKS, LOGO_URL } from '../data/mock';

const trackPhoneConversion = () => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', { send_to: 'AW-18180382680/bNoPCIrCz9YcENi_it1D' });
  }
};

const Footer = () => (
  <footer className="border-t border-white/10 bg-[#08090a] pb-8 pt-14 text-white md:pt-18">
    <div className="mx-auto max-w-[1380px] px-5 md:px-8">
      <div className="mb-14 flex flex-col gap-7 rounded-[24px] border border-[#d5a73f]/20 bg-[#e8b94e] p-7 text-[#111315] md:p-9 lg:flex-row lg:items-center lg:justify-between">
        <div><div className="text-[10px] font-black uppercase tracking-[.28em] text-black/55">Your wheel. Your location.</div><div className="mt-2 text-2xl font-extrabold tracking-tight md:text-4xl">Send a photo. Get your quote.</div></div>
        <div className="flex flex-wrap gap-3"><a href={`sms:${BRAND.phoneTel}`} className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-4 text-sm font-black text-[#111315] transition hover:bg-zinc-100"><MessageSquareText className="h-4 w-4"/>Text Photo</a><a href={`tel:${BRAND.phoneTel}`} onClick={trackPhoneConversion} className="inline-flex items-center gap-2 rounded-lg bg-[#111315] px-5 py-4 text-sm font-black text-white transition hover:bg-black"><Phone className="h-4 w-4"/>{BRAND.phone}</a></div>
      </div>

      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <img src={LOGO_URL} alt={BRAND.name} className="h-24 w-auto object-contain" />
          <p className="mt-5 max-w-md text-[14px] leading-7 text-zinc-400">Mobile cosmetic wheel care across Greater Los Angeles. Curb rash repair, wheel polish, color changes and lease-return wheel repair at your location.</p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-4 py-2 text-xs text-zinc-300"><MapPin className="h-4 w-4 text-[#e8b94e]"/>Greater Los Angeles · Mobile Service</div>
        </div>
        <div className="md:col-span-3">
          <div className="mb-5 text-[10px] font-black uppercase tracking-[.28em] text-[#e8b94e]">Explore</div>
          <ul className="space-y-3">{NAV_LINKS.map((l) => <li key={l.href}><a href={l.href} className="inline-flex items-center gap-1 text-sm text-zinc-400 transition hover:text-[#e8b94e]">{l.label}<ArrowUpRight className="h-3 w-3"/></a></li>)}</ul>
        </div>
        <div className="md:col-span-4">
          <div className="mb-5 text-[10px] font-black uppercase tracking-[.28em] text-[#e8b94e]">Contact</div>
          <a href={`tel:${BRAND.phoneTel}`} onClick={trackPhoneConversion} className="text-2xl font-extrabold text-white transition hover:text-[#e8b94e] md:text-3xl">{BRAND.phone}</a>
          <p className="mt-4 text-sm leading-7 text-zinc-400">For the fastest quote, text clear photos of the damaged wheel and include the address where you need mobile service.</p>
          <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#e8b94e]">Get Quote or Book Now <ArrowUpRight className="h-4 w-4"/></a>
        </div>
      </div>
      <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-[11px] text-zinc-600 md:flex-row md:items-center md:justify-between"><div>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</div><div>Mobile Rim Repair · Greater Los Angeles</div></div>
    </div>
  </footer>
);

export default Footer;
