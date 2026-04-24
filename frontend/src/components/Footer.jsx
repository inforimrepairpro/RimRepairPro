import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { BRAND, NAV_LINKS, LOGO_URL } from '../data/mock';

const Footer = () => (
  <footer className="bg-[#050505] text-[#F5F3EE] pt-16 pb-8 border-t border-[#1e1d1b]">
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-4">
            <img src={LOGO_URL} alt={BRAND.name} className="h-20 w-auto object-contain rounded-full" />
            <div>
              <div className="text-[16px] font-semibold tracking-[0.22em] uppercase">{BRAND.name}</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-[#8B8982] mt-1">Premium Wheel Restoration</div>
            </div>
          </div>
          <p className="mt-5 text-[14px] leading-relaxed text-[#8B8982] max-w-sm">
            Premium mobile wheel restoration across Greater Los Angeles. Curb rash, bent wheels, powder coating, chrome — same-day service, lifetime warranty.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="text-[11px] uppercase tracking-[0.28em] text-[#C5C8CC] mb-4">Explore</div>
          <ul className="space-y-2.5">
            {NAV_LINKS.map((l) => (
              <li key={l.href}><a href={l.href} className="text-[14px] text-[#C5C3BE] hover:text-[#E8EAED] transition-colors">{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.28em] text-[#C5C8CC] mb-4">Contact</div>
          <ul className="space-y-3 text-[14px]">
            <li className="flex items-start gap-3"><Phone className="w-4 h-4 mt-0.5 text-[#C5C8CC]" /><a href={`tel:${BRAND.phoneTel}`} className="text-[#C5C3BE] hover:text-[#E8EAED]">{BRAND.phone}</a></li>
            <li className="flex items-start gap-3"><MapPin className="w-4 h-4 mt-0.5 text-[#C5C8CC]" /><span className="text-[#C5C3BE]">Greater Los Angeles · Mobile Service</span></li>
          </ul>
          <div className="mt-6 p-4 rounded-[10px] border border-[#1e1d1b] bg-[#0a0a0b]">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[#C5C8CC]">Hours</div>
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
