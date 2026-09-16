import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/mock';

const Services = () => (
  <section id="services" className="bg-[#f5f1e8] py-20 md:py-28 relative overflow-hidden">
    <div className="absolute -right-40 top-10 w-96 h-96 rounded-full bg-[#2f7cff]/10 blur-3xl" />
    <div className="max-w-7xl mx-auto px-5 md:px-8 relative">
      <div className="grid lg:grid-cols-12 gap-8 items-end mb-14">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-[#176a76] font-bold"><Sparkles className="w-4 h-4"/> Rim Repair Services</span>
          <h2 className="mt-5 font-display text-[50px] md:text-[76px] leading-[.94] font-bold tracking-[-.035em] text-[#081526]">Everything your wheels need.<br/><span className="text-[#2f7cff]">Right at your location.</span></h2>
        </div>
        <p className="lg:col-span-5 lg:pl-12 text-[16px] md:text-[18px] leading-relaxed text-slate-600">From everyday curb rash to a complete visual color change, our mobile setup makes cosmetic wheel care simple. Send photos first, get the job reviewed, then choose an available appointment.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {SERVICES.map((s, i) => (
          <a href="#contact" key={i} className={`group relative min-h-[310px] rounded-[28px] p-8 md:p-9 border transition-all duration-300 hover:-translate-y-1 ${s.popular ? 'bg-[#081526] border-[#081526] shadow-[0_25px_60px_-30px_rgba(8,21,38,.55)]' : 'bg-white border-slate-200 hover:border-[#2f7cff]/40 shadow-[0_20px_50px_-35px_rgba(8,21,38,.35)]'}`}>
            {s.popular && <span className="absolute top-7 right-7 rounded-full bg-[#64d8ff] px-3 py-1.5 text-[9px] font-black uppercase tracking-[.2em] text-[#081526]">Popular</span>}
            <div className={`text-[12px] font-black tracking-[.28em] ${s.popular ? 'text-[#64d8ff]' : 'text-[#2f7cff]'}`}>{s.n}</div>
            <h3 className={`mt-12 text-[27px] font-bold tracking-tight ${s.popular ? 'text-white' : 'text-[#081526]'}`}>{s.title}</h3>
            <p className={`mt-4 text-[15px] leading-relaxed ${s.popular ? 'text-slate-300' : 'text-slate-600'}`}>{s.desc}</p>
            <div className={`absolute bottom-8 left-8 md:left-9 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.2em] ${s.popular ? 'text-[#64d8ff]' : 'text-[#176a76]'}`}>Get a quote <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/></div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
