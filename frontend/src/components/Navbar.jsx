import React, { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { BRAND, NAV_LINKS, LOGO_URL } from '../data/mock';

const trackPhoneConversion = () => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', { send_to: 'AW-18180382680/bNoPCIrCz9YcENi_it1D' });
  }
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#07111f]/95 backdrop-blur-xl border-b border-white/10 shadow-xl' : 'bg-[#07111f]/70 backdrop-blur-md'}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-[86px] flex items-center justify-between">
        <a href="#top" className="flex items-center"><img src={LOGO_URL} alt={BRAND.name} className="h-16 md:h-20 w-auto object-contain" /></a>
        <nav className="hidden xl:flex items-center gap-7">
          {NAV_LINKS.map((l) => <a key={l.href} href={l.href} className="text-[11px] uppercase tracking-[0.17em] text-slate-300 hover:text-[#64d8ff] transition-colors">{l.label}</a>)}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href={`tel:${BRAND.phoneTel}`} onClick={trackPhoneConversion} className="text-sm font-semibold text-white hover:text-[#64d8ff]">{BRAND.phone}</a>
          <a href="#contact" className="rounded-xl bg-[#2f7cff] px-5 py-3 text-xs font-bold uppercase tracking-[.12em] text-white hover:bg-[#438aff]">Get Quote</a>
        </div>
        <button onClick={() => setOpen(!open)} className="xl:hidden p-2 text-white" aria-label="Menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && <div className="xl:hidden border-t border-white/10 bg-[#07111f] px-5 py-5">
        <div className="flex flex-col gap-4">{NAV_LINKS.map((l) => <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm uppercase tracking-[.15em] text-slate-300">{l.label}</a>)}
          <a href={`tel:${BRAND.phoneTel}`} onClick={() => { trackPhoneConversion(); setOpen(false); }} className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#2f7cff] px-5 py-4 font-bold text-white"><Phone className="w-4 h-4"/> Call {BRAND.phone}</a>
        </div>
      </div>}
    </header>
  );
};

export default Navbar;
