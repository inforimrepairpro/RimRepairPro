import React from 'react';
import { Camera, MessageSquareText, CalendarCheck, Truck, ArrowUpRight } from 'lucide-react';
import { PROCESS } from '../data/mock';

const icons = [Camera, MessageSquareText, CalendarCheck, Truck];

const Process = () => (
  <section className="relative overflow-hidden bg-[#f7f6f2] py-16 text-[#111315] md:py-20">
    <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#e8b94e]/10 blur-3xl" />
    <div className="relative mx-auto max-w-[1380px] px-5 md:px-8">
      <div className="mb-10 grid items-end gap-6 border-b border-zinc-200 pb-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <span className="text-[10px] font-black uppercase tracking-[.26em] text-[#b78520]">How It Works</span>
          <h2 className="mt-3 font-display text-[46px] font-bold leading-[.94] tracking-[-.035em] md:text-[68px]">From wheel damage<br/><span className="text-[#b78520]">to mobile service.</span></h2>
        </div>
        <p className="max-w-xl text-[15px] leading-7 text-zinc-600 lg:col-span-5 lg:justify-self-end">Start with photos and your service address. We review the details, coordinate the appointment and bring the mobile setup to you.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {PROCESS.map((p, i) => {
          const Icon = icons[i] || Truck;
          return (
            <div key={i} className="group relative min-h-[270px] overflow-hidden rounded-xl border border-zinc-200 bg-white p-6 shadow-[0_14px_35px_-28px_rgba(0,0,0,.4)] transition-all hover:-translate-y-1 hover:border-[#d5a73f]/60 hover:shadow-xl md:p-7">
              <div className="absolute -right-3 -top-7 text-[100px] font-black leading-none text-black/[.035]">{p.n}</div>
              <div className="flex items-center justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#111315] text-[#e8b94e]"><Icon className="h-5 w-5"/></div>
                <span className="text-[10px] font-black uppercase tracking-[.2em] text-[#b78520]">Step {p.n}</span>
              </div>
              <h3 className="mt-9 text-[22px] font-extrabold tracking-tight">{p.title}</h3>
              <p className="mt-3 text-[13px] leading-6 text-zinc-600">{p.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-7 flex flex-col gap-5 rounded-xl bg-[#0c0f12] px-6 py-6 text-white md:flex-row md:items-center md:justify-between md:px-8">
        <div><div className="text-[10px] font-black uppercase tracking-[.22em] text-[#e8b94e]">Ready to start?</div><div className="mt-1.5 text-xl font-extrabold md:text-2xl">Take a wheel photo and request your quote.</div></div>
        <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#e8b94e] px-6 py-4 text-sm font-black text-[#111315] transition hover:bg-[#f0c765]">Send Photos & Get Quote <ArrowUpRight className="h-4 w-4"/></a>
      </div>
    </div>
  </section>
);

export default Process;
