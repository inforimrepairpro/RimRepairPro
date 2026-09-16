import React from 'react';
import { Phone, MapPin, MessageSquareText, ArrowUpRight } from 'lucide-react';
import { BRAND, NAV_LINKS, LOGO_URL } from '../data/mock';

const trackPhoneConversion = () => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', { send_to: 'AW-18180382680/bNoPCIrCz9YcENi_it1D' });
  }
};

const Footer = () => (
  <footer className="bg-[#06101d] text-white pt-16 md:pt-20 pb-8 border-t border-white/10">
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <div className="rounded-[28px] bg-[#2f7cff] p-7 md:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-7 mb-16">
        <div><div className="text-[10px] uppercase tracking-[.28em] font-black text-white/70">Your wheel. Your location.</div><div className="mt-2 text-2xl md:text-4xl font-bold tracking-tight">Send a photo. Get your quote.</div></div>
        <div className="flex flex-wrap gap-3"><a href={`sms:${BRAND.phoneTel}`} className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-4 text-sm font-black text-[#081526]"><MessageSquareText className="w-4 h-4"/>Text Photo</a><a href={`tel:${BRAND.phoneTel}`} onClick={trackPhoneConversion} className="inline-flex items-center gap-2 rounded-xl bg-[#081526] px-5 py-4 text-sm font-black text-white"><Phone className="w-4 h-4"/>{BRAND.phone}</a></div>
      </div>

      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <img src={LOGO_URL} alt={BRAND.name} className="h-24 w-auto object-contain" />
          <p className="mt-5 max-w-md text-[14px] leading-relaxed text-slate-400">Mobile cosmetic wheel care across Greater Los Angeles. Curb rash repair, wheel polish, color changes and lease-return wheel repair at your location.</p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300"><MapPin className="w-4 h-4 text-[#64d8ff]"/>Greater Los Angeles · Mobile Service</div>
        </div>
        <div className="md:col-span-3">
          <div className="text-[10px] uppercase tracking-[.28em] font-black text-[#64d8ff] mb-5">Explore</div>
          <ul className="space-y-3">{NAV_LINKS.map((l) => <li key={l.href}><a href={l.href} className="inline-flex items-center gap-1 text-sm text-slate-300 hover:text-white">{l.label}<ArrowUpRight className="w-3 h-3"/></a></li>)}</ul>
        </div>
        <div className="md:col-span-4">
          <div className="text-[10px] uppercase tracking-[.28em] font-black text-[#64d8ff] mb-5">Contact</div>
          <a href={`tel:${BRAND.phoneTel}`} onClick={trackPhoneConversion} className="text-2xl md:text-3xl font-bold text-white hover:text-[#64d8ff]">{BRAND.phone}</a>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">For the fastest quote, text clear photos of the damaged wheel and include the address where you need mobile service.</p>
          <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#64d8ff]">Get Quote or Book Now <ArrowUpRight className="w-4 h-4"/></a>
        </div>
      </div>
      <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[11px] text-slate-500"><div>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</div><div>Mobile Rim Repair · Greater Los Angeles</div></div>
    </div>
  </footer>
);

export default Footer;
