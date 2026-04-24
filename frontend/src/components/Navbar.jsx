import React, { useEffect, useState } from 'react';
import { Phone, Menu, X, Wrench } from 'lucide-react';
import { BRAND, NAV_LINKS } from '../data/mock';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-[#F6F1E8]/85 backdrop-blur-md border-b border-[#E3D8C3]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-[72px] flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full bg-[#0E4A52] flex items-center justify-center ring-1 ring-[#0E4A52]/20 shadow-sm">
            <Wrench className="w-5 h-5 text-[#F6F1E8]" strokeWidth={2} />
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#C15A3E] ring-2 ring-[#F6F1E8]" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-serif-display text-[17px] font-semibold brand-charcoal tracking-tight">{BRAND.name}</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#6B6557]">Mobile · LA</span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-[13px] uppercase tracking-[0.16em] text-[#1A2327] hover:text-[#C15A3E] transition-colors">{l.label}</a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href={`tel:${BRAND.phoneTel}`} className="text-[13px] font-medium text-[#1A2327] hover:text-[#0E4A52] transition-colors">{BRAND.phone}</a>
          <a href={`tel:${BRAND.phoneTel}`} className="inline-flex items-center gap-2 rounded-full bg-[#0E4A52] text-[#F6F1E8] px-5 py-2.5 text-[13px] font-medium hover:bg-[#C15A3E] transition-colors">
            <Phone className="w-4 h-4" /> Free Quote
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-[#1A2327]" aria-label="Menu">
          {open ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#F6F1E8] border-t border-[#E3D8C3]">
          <div className="px-5 py-5 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-[14px] uppercase tracking-[0.16em] text-[#1A2327]">{l.label}</a>
            ))}
            <a href={`tel:${BRAND.phoneTel}`} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#0E4A52] text-[#F6F1E8] px-5 py-3 text-[13px] font-medium">
              <Phone className="w-4 h-4" /> Call {BRAND.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
