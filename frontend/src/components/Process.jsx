import React from 'react';
import { Camera, MessageSquareText, CalendarCheck, Truck, ArrowUpRight } from 'lucide-react';
import { PROCESS } from '../data/mock';

const icons = [Camera, MessageSquareText, CalendarCheck, Truck];

const Process = () => (
  <section id="process" className="relative scroll-mt-[82px] overflow-hidden bg-[#f7f6f2] py-14 text-[#111315] md:py-20">
    <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#e8b94e]/10 blur-3xl" />
    <div className="relative mx-auto max-w-[1380px] px-5 md:px-8">
      <div className="mb-8 grid items-end gap-5 border-b border-zinc-200 pb-7 md:mb-10 md:gap-6 md:pb-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <span className="text-[10px] font-black uppercase tracking-[.22em] text-[#b78520] sm:tracking-[.26em]">How It Works</span>
          <h2 className="mt-3 font-display text-[40px] font-bold leading-[.94] tracking-[-.035em] sm:text-[48px] md:text-[68px]">From wheel damage<br/><span className="text-[#b78520]">to mobile service.</span></h2>
        </div>
        <p className="max-w-xl text-[14px] leading-6 text-zinc-600 sm:text-[15px] sm:leading-7 lg:col-span-5 lg:justify-self-end">Start with photos and your service address. We review the details, coordinate the appointment and bring the mobile setup to you.</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {PROCESS.map((p, i) => {
          const Icon = icons[i] || Truck;
          return (
            <div key={i} className="group relative min-h-[230px] overflow-hidden rounded-xl border border-zinc-200 bg-white p-5 shadow-[0_14px_35px_-28px_rgba(0,0,0,.4)] transition-all hover:-translate-y-1 hover:border-[#d5a73f]/60 hover:shadow-xl sm:min-h-[250px] sm:p-6 md:min-h-[270px] md:p-7">
              <div className="absolute -right-3 -top-6 text-[86px] font-black leading-none text-black/[.035] sm:text-[100px]">{p.n}</div>
              <div className="flex items-center justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#111315] text-[#e8b94e] sm:h-11 sm:w-11"><Icon className="h-5 w-5"/></div>
                <span className="text-[9px] font-black uppercase tracking-[.18em] text-[#b78520] sm:text-[10px] sm:tracking-[.2em]">Step {p.n}</span>
              </div>
              <h3 className="mt-7 text-[20px] font-extrabold tracking-tight sm:mt-8 sm:text-[22px] md:mt-9">{p.title}</h3>
              <p className="mt-3 text-[13px] leading-6 text-zinc-600">{p.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex flex-col gap-5 rounded-xl bg-[#0c0f12] px-5 py-5 text-white sm:px-6 sm:py-6 md:mt-7 md:flex-row md:items-center md:justify-between md:px-8">
        <div><div className="text-[9px] font-black uppercase tracking-[.2em] text-[#e8b94e] sm:text-[10px] sm:tracking-[.22em]">Ready to start?</div><div className="mt-1.5 text-lg font-extrabold leading-snug sm:text-xl md:text-2xl">Take a wheel photo and request your quote.</div></div>
        <a href="#contact" className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-lg bg-[#e8b94e] px-5 py-4 text-sm font-black text-[#111315] transition hover:bg-[#f0c765] md:w-auto md:px-6">Send Photos & Get Quote <ArrowUpRight className="h-4 w-4"/></a>
      </div>
    </div>
  </section>
);

export default Process;
