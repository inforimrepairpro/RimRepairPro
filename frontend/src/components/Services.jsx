import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { SERVICES, GALLERY } from '../data/mock';

const Services = () => (
  <section id="services" className="bg-[#f7f6f2] py-16 md:py-20 text-[#111315]">
    <div className="max-w-[1380px] mx-auto px-5 md:px-8">
      <div className="grid lg:grid-cols-12 gap-5 items-end mb-9 border-b border-zinc-200 pb-8">
        <div className="lg:col-span-4"><span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[.24em] text-[#b78520] font-black"><Sparkles className="w-3.5 h-3.5"/>Our Services</span><h2 className="mt-2 font-display text-[42px] md:text-[58px] leading-none font-bold">What We Do</h2></div>
        <p className="lg:col-span-6 text-[14px] md:text-[15px] leading-relaxed text-zinc-600 max-w-2xl">Mobile cosmetic wheel care at your location. Choose the service that matches what you need, or send us wheel photos if you are not sure.</p>
        <div className="lg:col-span-2 lg:text-right"><a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-5 py-3 text-[11px] font-black hover:border-[#d5a73f] transition">Get a Quote <ArrowUpRight className="w-4 h-4"/></a></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {SERVICES.map((s, i) => {
          const image = GALLERY[i % GALLERY.length];
          return <a href="#contact" key={i} className="group overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-[0_14px_35px_-28px_rgba(0,0,0,.4)] hover:-translate-y-1 hover:shadow-xl transition-all">
            <div className="relative h-[190px] overflow-hidden bg-zinc-200"><img src={image} alt={s.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]"/>{s.popular && <span className="absolute top-3 right-3 rounded-md bg-[#e8b94e] px-3 py-1.5 text-[9px] font-black uppercase tracking-[.15em] text-[#111315]">Popular</span>}</div>
            <div className="p-5 md:p-6 min-h-[190px] relative"><h3 className="text-[20px] font-extrabold tracking-tight">{s.title}</h3><p className="mt-2 text-[13px] leading-relaxed text-zinc-600">{s.desc}</p><div className="mt-5 inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[.14em] text-[#9b711b]">Learn More <ArrowUpRight className="w-3.5 h-3.5"/></div></div>
          </a>;
        })}
      </div>

      <div className="mt-8 grid sm:grid-cols-3 overflow-hidden rounded-xl bg-[#0c0f12] text-white">
        <div className="p-5 md:p-6 border-b sm:border-b-0 sm:border-r border-white/10"><div className="text-[10px] uppercase tracking-[.2em] text-[#e8b94e] font-black">Booking</div><div className="mt-1 text-lg font-extrabold">No Deposit Required</div></div>
        <div className="p-5 md:p-6 border-b sm:border-b-0 sm:border-r border-white/10"><div className="text-[10px] uppercase tracking-[.2em] text-[#e8b94e] font-black">Mobile Service</div><div className="mt-1 text-lg font-extrabold">No Distance Fee</div></div>
        <div className="p-5 md:p-6"><div className="text-[10px] uppercase tracking-[.2em] text-[#e8b94e] font-black">Our Work</div><div className="mt-1 text-lg font-extrabold">Backed by Warranty</div></div>
      </div>
    </div>
  </section>
);
export default Services;
