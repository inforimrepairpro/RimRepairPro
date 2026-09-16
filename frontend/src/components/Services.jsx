import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { SERVICES, SERVICE_IMAGES } from '../data/mock';

const Services = () => (
  <section id="services" className="bg-[#f7f6f2] py-14 text-[#111315] md:py-20">
    <div className="mx-auto max-w-[1380px] px-5 md:px-8">
      <div className="mb-8 grid items-end gap-5 border-b border-zinc-200 pb-7 md:mb-9 md:pb-8 lg:grid-cols-12">
        <div className="lg:col-span-4"><span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[.24em] text-[#b78520]"><Sparkles className="h-3.5 w-3.5"/>Our Services</span><h2 className="mt-2 font-display text-[40px] font-bold leading-none sm:text-[46px] md:text-[58px]">What We Do</h2></div>
        <p className="max-w-2xl text-[14px] leading-6 text-zinc-600 md:text-[15px] md:leading-relaxed lg:col-span-6">Mobile cosmetic wheel care at your location. Choose the service that matches what you need, or send us wheel photos if you are not sure.</p>
        <div className="lg:col-span-2 lg:text-right"><a href="#contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-5 py-3 text-[11px] font-black transition hover:border-[#d5a73f]">Get a Quote <ArrowUpRight className="h-4 w-4"/></a></div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => {
          const image = SERVICE_IMAGES[i];
          return <a href="#contact" key={i} className="group overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-[0_14px_35px_-28px_rgba(0,0,0,.4)] transition-all hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-[180px] overflow-hidden bg-zinc-200 sm:h-[190px]"><img src={image} alt={s.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]"/>{s.popular && <span className="absolute right-3 top-3 rounded-md bg-[#e8b94e] px-3 py-1.5 text-[9px] font-black uppercase tracking-[.15em] text-[#111315]">Popular</span>}</div>
            <div className="relative flex min-h-[180px] flex-col p-5 md:min-h-[190px] md:p-6"><h3 className="text-[20px] font-extrabold tracking-tight">{s.title}</h3><p className="mt-2 text-[13px] leading-6 text-zinc-600">{s.desc}</p><div className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[10px] font-black uppercase tracking-[.14em] text-[#9b711b]">Get Quote <ArrowUpRight className="h-3.5 w-3.5"/></div></div>
          </a>;
        })}
      </div>

      <div className="mt-7 grid overflow-hidden rounded-xl bg-[#0c0f12] text-white sm:mt-8 sm:grid-cols-3">
        <div className="border-b border-white/10 p-5 sm:border-b-0 sm:border-r md:p-6"><div className="text-[10px] font-black uppercase tracking-[.2em] text-[#e8b94e]">Booking</div><div className="mt-1 text-lg font-extrabold">No Deposit Required</div></div>
        <div className="border-b border-white/10 p-5 sm:border-b-0 sm:border-r md:p-6"><div className="text-[10px] font-black uppercase tracking-[.2em] text-[#e8b94e]">Mobile Service</div><div className="mt-1 text-lg font-extrabold">No Distance Fee</div></div>
        <div className="p-5 md:p-6"><div className="text-[10px] font-black uppercase tracking-[.2em] text-[#e8b94e]">Our Work</div><div className="mt-1 text-lg font-extrabold">Backed by Warranty</div></div>
      </div>
    </div>
  </section>
);
export default Services;
