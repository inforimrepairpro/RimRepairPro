import React, { useEffect, useState } from 'react';
import { Menu, X, Phone, CalendarDays, MessageSquareText } from 'lucide-react';
import { BRAND, NAV_LINKS, LOGO_URL } from '../data/mock';

const trackPhoneConversion = () => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') window.gtag('event', 'conversion', { send_to: 'AW-18180382680/bNoPCIrCz9YcENi_it1D' });
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 12); window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll); }, []);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [open]);

  return <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled ? 'border-[#d8aa42]/25 bg-[#080a0c]/95 shadow-[0_14px_40px_rgba(0,0,0,.35)] backdrop-blur-xl' : 'border-white/[.07] bg-[#080a0c]/90 backdrop-blur-xl'}`}>
    <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-5 md:h-[82px] md:px-8">
      <a href="#top" className="flex shrink-0 items-center" onClick={() => setOpen(false)}><img src={LOGO_URL} alt={BRAND.name} className="h-12 w-auto object-contain md:h-[70px]"/></a>
      <nav className="hidden items-center gap-1 rounded-full border border-white/[.07] bg-white/[.025] p-1.5 shadow-inner xl:flex">{NAV_LINKS.map(l => <a key={l.href} href={l.href} className="group relative rounded-full px-4 py-2.5 text-[12px] font-bold tracking-[.01em] text-zinc-300 transition-all duration-200 hover:bg-white/[.06] hover:text-white"><span className="relative z-10">{l.label}</span><span className="absolute inset-x-4 bottom-1 h-px origin-center scale-x-0 bg-[#e8b94e] transition-transform duration-200 group-hover:scale-x-100"/></a>)}</nav>
      <div className="hidden items-center gap-5 md:flex">
        <a href={`tel:${BRAND.phoneTel}`} onClick={trackPhoneConversion} className="flex items-center gap-2 text-white"><Phone className="h-4 w-4 text-[#e8b94e]"/><div><div className="text-[13px] font-extrabold leading-none">{BRAND.phone}</div><div className="mt-1 text-[9px] text-zinc-500">Call or text for a quote</div></div></a>
        <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#e5b54b] to-[#f2cd69] px-5 py-3.5 text-[11px] font-black text-[#111315] shadow-[0_10px_30px_rgba(229,181,75,.18)] hover:brightness-105"><CalendarDays className="h-4 w-4"/>Book Online</a>
      </div>
      <div className="flex items-center gap-1.5 md:hidden">
        <a href={`tel:${BRAND.phoneTel}`} onClick={trackPhoneConversion} aria-label="Call Rim Repair Pro" className="grid h-10 w-10 place-items-center rounded-lg border border-[#e8b94e]/30 bg-[#e8b94e]/10 text-[#e8b94e]"><Phone className="h-4 w-4"/></a>
        <button onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white xl:hidden" aria-label="Menu" aria-expanded={open}>{open ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}</button>
      </div>
      <button onClick={() => setOpen(!open)} className="hidden p-2 text-white md:block xl:hidden" aria-label="Menu" aria-expanded={open}>{open ? <X/> : <Menu/>}</button>
    </div>
    {open && <div className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-white/10 bg-[#090b0d] px-5 py-6 xl:hidden"><div className="mx-auto flex max-w-[1440px] flex-col gap-1">{NAV_LINKS.map(l => <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-sm font-bold text-zinc-300 transition hover:bg-white/5 hover:text-[#e8b94e]">{l.label}</a>)}<div className="mt-4 grid gap-3 sm:grid-cols-3"><a href={`tel:${BRAND.phoneTel}`} onClick={() => { trackPhoneConversion(); setOpen(false); }} className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#e8b94e] px-4 py-4 text-sm font-black text-[#111315]"><Phone className="h-4 w-4"/>Call Now</a><a href={`sms:${BRAND.phoneTel}`} onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#e8b94e]/40 px-4 py-4 text-sm font-black text-[#e8b94e]"><MessageSquareText className="h-4 w-4"/>Text Photo</a><a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[.04] px-4 py-4 text-sm font-black text-white"><CalendarDays className="h-4 w-4"/>Book Online</a></div></div></div>}
  </header>;
};
export default Navbar;
