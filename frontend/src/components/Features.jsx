import React from 'react';
import { Camera, MapPin, Car, MessageSquareText, ArrowRight } from 'lucide-react';

const items = [
  { icon: Camera, eyebrow: 'Photo Quote', title: 'Start with clear wheel photos', desc: 'Send a full wheel photo plus a close-up of the damaged area. Photos help us understand the finish, damage and number of wheels before scheduling.' },
  { icon: MapPin, eyebrow: 'Your Location', title: 'Tell us where the car is parked', desc: 'Add your service address so we can confirm mobile availability for your part of Greater Los Angeles.' },
  { icon: Car, eyebrow: 'Mobile Service', title: 'No wheel-shop drop-off', desc: 'Our service is built around coming to the vehicle. Home, workplace or another suitable location can be discussed when your appointment is confirmed.' },
  { icon: MessageSquareText, eyebrow: 'Clear Next Step', title: 'Quote first, appointment next', desc: 'After reviewing your photos and service details, we can text you the next step and coordinate an available appointment.' },
];

const Features = () => (
  <section className="border-b border-zinc-200 bg-[#f7f6f2] py-16 md:py-20">
    <div className="mx-auto max-w-[1380px] px-5 md:px-8">
      <div className="mb-9 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <span className="text-[10px] font-black uppercase tracking-[.28em] text-[#b78520]">Mobile Wheel Repair, Simplified</span>
          <h2 className="mt-3 text-[34px] font-extrabold leading-[1.02] tracking-[-.03em] text-[#111315] md:text-[48px]">Everything you need to know before you request a quote.</h2>
        </div>
        <a href="#contact" className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[.14em] text-[#9b711b]">Send Photos <ArrowRight className="h-4 w-4"/></a>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="group rounded-[20px] border border-zinc-200 bg-white p-6 shadow-[0_14px_35px_-28px_rgba(0,0,0,.4)] transition hover:-translate-y-1 hover:border-[#d5a73f] md:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#111315] text-[#e8b94e]"><Icon className="h-5 w-5"/></div>
              <div className="mt-6 text-[9px] font-black uppercase tracking-[.24em] text-[#b78520]">{item.eyebrow}</div>
              <h3 className="mt-2 text-[20px] font-extrabold leading-tight text-[#111315]">{item.title}</h3>
              <p className="mt-3 text-[14px] leading-6 text-zinc-600">{item.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-5 rounded-xl border border-[#d5a73f]/25 bg-[#e8b94e]/10 px-5 py-4 text-[13px] leading-6 text-zinc-600"><strong className="text-[#111315]">Helpful for a faster review:</strong> include one photo showing the entire wheel, one close-up of the damage, your address or ZIP code, and how many rims need attention.</div>
    </div>
  </section>
);

export default Features;
