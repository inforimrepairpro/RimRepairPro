import React, { useEffect, useState } from 'react';
import { Menu, X, Cog } from 'lucide-react';
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
    <>
      {/* Top progress bar */}
      <div className="fixed top-0 inset-x-0 h-[2px] bg-[#1a1916] z-[60] overflow-hidden">
        <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-[#E5A848] to-transparent animate-progress" />
      </div>

      <header className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-[#0a0a0b]/90 backdrop-blur-md border-b border-[#1e1d1b]' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-[80px] flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full flex items-center justify-center shadow-[0_0_40px_-8px_rgba(228,168,72,0.6)]" style={{background: 'radial-gradient(circle at 30% 30%, #4a3418 0%, #1a1408 100%)'}}>
              <div className="absolute inset-[2px] rounded-full" style={{background: 'linear-gradient(135deg, #F4C57A 0%, #B8822A 100%)'}}>
                <div className="absolute inset-[3px] rounded-full bg-[#0a0a0b] flex items-center justify-center">
                  <Cog className="w-5 h-5 text-[#E5A848]" strokeWidth={1.5} />
                </div>
              </div>
            </div>
            <span className="text-[14px] md:text-[15px] font-semibold tracking-[0.18em] text-[#F5F3EE] uppercase">{BRAND.name}</span>
          </a>

          <nav className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-[12px] uppercase tracking-[0.2em] text-[#8B8982] hover:text-[#E5A848] transition-colors">{l.label}</a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-5">
            <a href={`tel:${BRAND.phoneTel}`} className="text-[13px] text-[#8B8982] hover:text-[#E5A848] transition-colors">{BRAND.phone}</a>
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
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-[13px] uppercase tracking-[0.2em] text-[#8B8982] hover:text-[#E5A848]">{l.label}</a>
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
