import React from 'react';
import { Camera, MapPin, Car, MessageSquareText, ArrowRight } from 'lucide-react';

const items = [
  { icon: Camera, eyebrow: 'Photo Quote', title: 'Start with clear wheel photos', desc: 'Send a full wheel photo plus a close-up of the damaged area. Photos help us understand the finish, damage and number of wheels before scheduling.' },
  { icon: MapPin, eyebrow: 'Your Location', title: 'Tell us where the car is parked', desc: 'Add your service address so we can confirm mobile availability for your part of Greater Los Angeles.' },
  { icon: Car, eyebrow: 'Mobile Service', title: 'No wheel-shop drop-off', desc: 'Our service is built around coming to the vehicle. Home, workplace or another suitable location can be discussed when your appointment is confirmed.' },
  { icon: MessageSquareText, eyebrow: 'Clear Next Step', title: 'Quote first, appointment next', desc: 'After reviewing your photos and service details, we can text you the next step and coordinate an available appointment.' },
];

const Features = () => (
  <section className="bg-[#f5f1e8] py-16 md:py-24 border-b border-slate-200/70">
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
        <div className="max-w-3xl">
          <span className="text-[11px] uppercase tracking-[.3em] font-black text-[#176a76]">Mobile Wheel Repair, Simplified</span>
          <h2 className="mt-4 text-[34px] md:text-[48px] leading-[1.02] font-bold tracking-[-.03em] text-[#081526]">Everything you need to know before you request a quote.</h2>
        </div>
        <a href="#contact" className="inline-flex items-center gap-2 text-sm font-black text-[#2f7cff]">Send Photos <ArrowRight className="w-4 h-4"/></a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="rounded-[24px] border border-slate-200 bg-white p-6 md:p-7 shadow-[0_18px_45px_-35px_rgba(8,21,38,.45)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#081526] text-[#64d8ff]"><Icon className="w-5 h-5"/></div>
              <div className="mt-6 text-[9px] font-black uppercase tracking-[.24em] text-[#2f7cff]">{item.eyebrow}</div>
              <h3 className="mt-2 text-[20px] font-bold leading-tight text-[#081526]">{item.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-slate-600">{item.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-5 rounded-[20px] border border-[#2f7cff]/15 bg-[#2f7cff]/5 px-5 py-4 text-[13px] leading-relaxed text-slate-600"><strong className="text-[#081526]">Helpful for a faster review:</strong> include one photo showing the entire wheel, one close-up of the damage, your address or ZIP code, and how many rims need attention.</div>
    </div>
  </section>
);

export default Features;
