import React from 'react';
import { Wrench, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { BRAND, NAV_LINKS } from '../data/mock';

const Footer = () => (
  <footer className="bg-[#1A2327] text-[#F6F1E8] pt-16 pb-8 grain-overlay">
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C15A3E] flex items-center justify-center">
              <Wrench className="w-5 h-5 text-[#F6F1E8]" />
            </div>
            <div>
              <div className="font-serif-display text-[20px] font-semibold">{BRAND.name}</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-[#F6F1E8]/60">Mobile Wheel Restoration</div>
            </div>
          </div>
          <p className="mt-5 text-[14px] leading-relaxed text-[#F6F1E8]/70 max-w-sm">
            Premium mobile wheel restoration across Greater Los Angeles. Curb rash, bent wheels, powder coating, chrome — same-day service, lifetime warranty.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-[#F6F1E8]/15 flex items-center justify-center hover:bg-[#C15A3E] hover:border-[#C15A3E] transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full border border-[#F6F1E8]/15 flex items-center justify-center hover:bg-[#C15A3E] hover:border-[#C15A3E] transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="text-[11px] uppercase tracking-[0.22em] text-[#F6F1E8]/50 mb-4">Explore</div>
          <ul className="space-y-2.5">
            {NAV_LINKS.map((l) => (
              <li key={l.href}><a href={l.href} className="text-[14px] text-[#F6F1E8]/85 hover:text-[#C15A3E] transition-colors">{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.22em] text-[#F6F1E8]/50 mb-4">Contact</div>
          <ul className="space-y-3 text-[14px]">
            <li className="flex items-start gap-3"><Phone className="w-4 h-4 mt-0.5 text-[#C15A3E]" /><a href={`tel:${BRAND.phoneTel}`} className="text-[#F6F1E8]/85 hover:text-[#C15A3E]">{BRAND.phone}</a></li>
            <li className="flex items-start gap-3"><Mail className="w-4 h-4 mt-0.5 text-[#C15A3E]" /><a href="mailto:hello@rimrepairpro.com" className="text-[#F6F1E8]/85 hover:text-[#C15A3E]">hello@rimrepairpro.com</a></li>
            <li className="flex items-start gap-3"><MapPin className="w-4 h-4 mt-0.5 text-[#C15A3E]" /><span className="text-[#F6F1E8]/85">Greater Los Angeles · Mobile Service</span></li>
          </ul>
          <div className="mt-6 p-4 rounded-xl border border-[#F6F1E8]/10 bg-[#F6F1E8]/5">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[#F6F1E8]/55">Hours</div>
            <div className="mt-1 text-[13px] text-[#F6F1E8]/85">Mon – Sat: 8:00am – 7:00pm<br/>Sun: By appointment</div>
          </div>
        </div>
      </div>

      <div className="mt-14 pt-6 border-t border-[#F6F1E8]/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-[12px] text-[#F6F1E8]/55">© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</div>
        <div className="text-[12px] text-[#F6F1E8]/55">Crafted for drivers who demand perfection.</div>
      </div>
    </div>
  </footer>
);

export default Footer;
