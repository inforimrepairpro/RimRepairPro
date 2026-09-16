import React, { useEffect, useState } from 'react';
import { Menu, X, Phone, CalendarDays } from 'lucide-react';
import { BRAND, NAV_LINKS, LOGO_URL } from '../data/mock';

const trackPhoneConversion = () => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') window.gtag('event', 'conversion', { send_to: 'AW-18180382680/bNoPCIrCz9YcENi_it1D' });
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 12); window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll); }, []);

  return <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-[#090b0d]/95 backdrop-blur-xl border-[#d8aa42]/20 shadow-2xl' : 'bg-[#090b0d]/88 backdrop-blur-md border-white/10'}`}>
    <div className="max-w-[1440px] mx-auto px-5 md:px-8 h-[82px] flex items-center justify-between gap-6">
      <a href="#top" className="flex shrink-0 items-center"><img src={LOGO_URL} alt={BRAND.name} className="h-14 md:h-[70px] w-auto object-contain"/></a>
      <nav className="hidden xl:flex items-center gap-6">{NAV_LINKS.map(l => <a key={l.href} href={l.href} className="nav-link text-[11px] font-semibold text-zinc-300 hover:text-[#f0c75e] transition">{l.label}</a>)}</nav>
      <div className="hidden md:flex items-center gap-5">
        <a href={`tel:${BRAND.phoneTel}`} onClick={trackPhoneConversion} className="flex items-center gap-2 text-white"><Phone className="w-4 h-4 text-[#e8b94e]"/><div><div className="text-[13px] font-extrabold leading-none">{BRAND.phone}</div><div className="mt-1 text-[9px] text-zinc-500">Call or text for a quote</div></div></a>
        <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#e5b54b] to-[#f2cd69] px-5 py-3.5 text-[11px] font-black text-[#111315] shadow-[0_10px_30px_rgba(229,181,75,.18)] hover:brightness-105"><CalendarDays className="w-4 h-4"/>Book Online</a>
      </div>
      <button onClick={() => setOpen(!open)} className="xl:hidden p-2 text-white" aria-label="Menu">{open ? <X/> : <Menu/>}</button>
    </div>
    {open && <div className="xl:hidden border-t border-white/10 bg-[#090b0d] px-5 py-5"><div className="flex flex-col gap-4">{NAV_LINKS.map(l => <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-zinc-300">{l.label}</a>)}<a href={`tel:${BRAND.phoneTel}`} onClick={() => { trackPhoneConversion(); setOpen(false); }} className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#e8b94e] px-5 py-4 font-black text-[#111315]"><Phone className="w-4 h-4"/>Call {BRAND.phone}</a><a href="#contact" onClick={() => setOpen(false)} className="inline-flex justify-center rounded-xl border border-[#e8b94e]/50 px-5 py-4 font-bold text-[#f0c75e]">Get Quote / Book</a></div></div>}
  </header>;
};
export default Navbar;
