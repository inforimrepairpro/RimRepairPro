import React from 'react';
import { Cog, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { BRAND, NAV_LINKS } from '../data/mock';

const Footer = () => (
  <footer className="bg-[#050505] text-[#F5F3EE] pt-16 pb-8 border-t border-[#1e1d1b]">
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full flex items-center justify-center shadow-[0_0_30px_-8px_rgba(228,168,72,0.5)]">
              <div className="absolute inset-0 rounded-full" style={{background: 'linear-gradient(135deg, #F4C57A 0%, #B8822A 100%)'}} />
              <div className="absolute inset-[2px] rounded-full bg-[#0a0a0b] flex items-center justify-center">
                <Cog className="w-5 h-5 text-[#E5A848]" strokeWidth={1.5} />
              </div>
            </div>
            <div>
              <div className="text-[15px] font-semibold tracking-[0.18em] uppercase">{BRAND.name}</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-[#8B8982]">Mobile Wheel Restoration</div>
            </div>
          </div>
          <p className="mt-5 text-[14px] leading-relaxed text-[#8B8982] max-w-sm">
            Premium mobile wheel restoration across Greater Los Angeles. Curb rash, bent wheels, powder coating, chrome — same-day service, lifetime warranty.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-[#1e1d1b] flex items-center justify-center hover:border-[#E5A848] hover:text-[#E5A848] transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full border border-[#1e1d1b] flex items-center justify-center hover:border-[#E5A848] hover:text-[#E5A848] transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="text-[11px] uppercase tracking-[0.28em] text-[#E5A848] mb-4">Explore</div>
          <ul className="space-y-2.5">
            {NAV_LINKS.map((l) => (
              <li key={l.href}><a href={l.href} className="text-[14px] text-[#C5C3BE] hover:text-[#E5A848] transition-colors">{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.28em] text-[#E5A848] mb-4">Contact</div>
          <ul className="space-y-3 text-[14px]">
            <li className="flex items-start gap-3"><Phone className="w-4 h-4 mt-0.5 text-[#E5A848]" /><a href={`tel:${BRAND.phoneTel}`} className="text-[#C5C3BE] hover:text-[#E5A848]">{BRAND.phone}</a></li>
            <li className="flex items-start gap-3"><Mail className="w-4 h-4 mt-0.5 text-[#E5A848]" /><a href="mailto:hello@rimrepairpro.com" className="text-[#C5C3BE] hover:text-[#E5A848]">hello@rimrepairpro.com</a></li>
            <li className="flex items-start gap-3"><MapPin className="w-4 h-4 mt-0.5 text-[#E5A848]" /><span className="text-[#C5C3BE]">Greater Los Angeles · Mobile Service</span></li>
          </ul>
          <div className="mt-6 p-4 rounded-[10px] border border-[#1e1d1b] bg-[#0a0a0b]">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[#E5A848]">Hours</div>
            <div className="mt-1 text-[13px] text-[#C5C3BE]">Mon – Sat: 8:00am – 7:00pm<br/>Sun: By appointment</div>
          </div>
        </div>
      </div>

      <div className="mt-14 pt-6 border-t border-[#1e1d1b] flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-[12px] text-[#8B8982]">© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</div>
        <div className="text-[12px] text-[#8B8982]">Crafted for drivers who demand perfection.</div>
      </div>
    </div>
  </footer>
);

export default Footer;
