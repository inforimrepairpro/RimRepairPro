import React from 'react';
import { Camera, MessageSquareText, CalendarCheck, Truck } from 'lucide-react';
import { PROCESS } from '../data/mock';

const icons = [Camera, MessageSquareText, CalendarCheck, Truck];

const Process = () => (
  <section className="bg-white py-20 md:py-28 relative overflow-hidden">
    <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#64d8ff]/10 blur-3xl" />
    <div className="max-w-7xl mx-auto px-5 md:px-8 relative">
      <div className="grid lg:grid-cols-12 gap-8 items-end mb-14">
        <div className="lg:col-span-7">
          <span className="text-[11px] uppercase tracking-[.3em] font-black text-[#176a76]">How It Works</span>
          <h2 className="mt-5 font-display text-[50px] md:text-[76px] leading-[.94] font-bold tracking-[-.035em] text-[#081526]">From damaged rim<br/><span className="text-[#2f7cff]">to appointment.</span></h2>
        </div>
        <p className="lg:col-span-5 lg:pl-12 text-[16px] md:text-[18px] leading-relaxed text-slate-600">No need to drive around looking for a wheel shop. Start with photos and your location, then we coordinate the mobile service with you.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {PROCESS.map((p, i) => {
          const Icon = icons[i] || Truck;
          return (
            <div key={i} className="group relative rounded-[26px] border border-slate-200 bg-[#f7f3eb] p-7 md:p-8 min-h-[285px] overflow-hidden hover:border-[#2f7cff]/40 transition-colors">
              <div className="absolute -right-5 -top-8 text-[110px] font-black leading-none text-[#081526]/[.035]">{p.n}</div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#081526] text-[#64d8ff]"><Icon className="w-5 h-5"/></div>
              <div className="mt-10 text-[10px] font-black uppercase tracking-[.25em] text-[#2f7cff]">Step {p.n}</div>
              <h3 className="mt-3 text-[23px] font-bold tracking-tight text-[#081526]">{p.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-slate-600">{p.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 rounded-[24px] bg-[#081526] px-6 py-6 md:px-9 md:py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div><div className="text-[11px] font-black uppercase tracking-[.25em] text-[#64d8ff]">Ready to start?</div><div className="mt-2 text-xl md:text-2xl font-bold text-white">Take a photo of the wheel and request your quote.</div></div>
        <a href="#contact" className="inline-flex justify-center rounded-xl bg-[#2f7cff] px-6 py-4 text-sm font-black text-white hover:bg-[#438aff] transition">Send Photos & Get Quote</a>
      </div>
    </div>
  </section>
);

export default Process;
