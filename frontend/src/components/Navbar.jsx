import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BRAND, NAV_LINKS, LOGO_URL } from '../data/mock';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 inset-x-0 h-[2px] bg-[#1a1916] z-[60] overflow-hidden">
        <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-[#C5C8CC] to-transparent animate-progress" />
      </div>

      <header className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-[#0a0a0b]/90 backdrop-blur-md border-b border-[#1e1d1b]' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-[84px] flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group">
            <img src={LOGO_URL} alt={BRAND.name} className="h-16 md:h-20 w-auto object-contain" />
          </a>

          <nav className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="nav-link text-[12px] uppercase tracking-[0.2em] text-[#8B8982] hover:text-[#E8EAED] transition-colors">{l.label}</a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-5">
            <a href={`tel:${BRAND.phoneTel}`} className="text-[13px] text-[#C5C8CC] hover:text-[#E8EAED] transition-colors">{BRAND.phone}</a>
            <a href={`tel:${BRAND.phoneTel}`} className="gold-btn inline-flex items-center rounded-[10px] px-5 py-2.5 text-[12px] font-semibold tracking-[0.16em] uppercase transition-all">
              Free Quote
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-[#F5F3EE]" aria-label="Menu">
            {open ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
          </button>
        </div>

        {open && (
          <div className="lg:hidden bg-[#0a0a0b]/95 backdrop-blur-md border-t border-[#1e1d1b]">
            <div className="px-5 py-5 flex flex-col gap-4">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-[13px] uppercase tracking-[0.2em] text-[#8B8982] hover:text-[#E8EAED]">{l.label}</a>
              ))}
              <a href={`tel:${BRAND.phoneTel}`} className="mt-2 gold-btn inline-flex items-center justify-center gap-2 rounded-[10px] px-5 py-3 text-[12px] font-semibold tracking-[0.16em] uppercase">
                Call {BRAND.phone}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
