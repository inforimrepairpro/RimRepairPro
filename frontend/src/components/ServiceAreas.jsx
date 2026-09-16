import React from 'react';
import { MapPin, Navigation, Truck, Phone, ArrowUpRight } from 'lucide-react';
import { SERVICE_AREAS, BRAND } from '../data/mock';

const ServiceAreas = () => (
  <section className="relative overflow-hidden bg-[#f7f6f2] py-16 text-[#111315] md:py-20">
    <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#e8b94e]/10 blur-3xl" />
    <div className="relative mx-auto grid max-w-[1380px] items-stretch gap-6 px-5 md:px-8 lg:grid-cols-12">
      <div className="relative overflow-hidden rounded-[24px] bg-[#0b0c0d] p-7 text-white md:p-10 lg:col-span-5">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#e8b94e]/10 blur-3xl" />
        <div className="relative">
          <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[.26em] text-[#e8b94e]"><MapPin className="h-4 w-4"/> Mobile Service Areas</span>
          <h2 className="mt-5 font-display text-[44px] font-bold leading-[.95] tracking-[-.03em] md:text-[60px]">Serving Greater<br/><span className="text-[#e8b94e]">Los Angeles.</span></h2>
          <p className="mt-6 max-w-lg text-[15px] leading-7 text-zinc-400">Rim Repair Pro is mobile. Tell us where the vehicle is located and we’ll confirm service availability for your area.</p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-white/10 bg-white/[.04] p-4"><Truck className="h-5 w-5 text-[#e8b94e]"/><div className="mt-3 text-sm font-extrabold">We Come To You</div></div>
            <div className="rounded-xl border border-white/10 bg-white/[.04] p-4"><Navigation className="h-5 w-5 text-[#e8b94e]"/><div className="mt-3 text-sm font-extrabold">Greater LA</div></div>
          </div>
          <a href={`tel:${BRAND.phoneTel}`} className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#e8b94e] px-5 py-4 text-sm font-black text-[#111315] transition hover:bg-[#f0c765]"><Phone className="h-4 w-4"/>Call {BRAND.phone}</a>
        </div>
      </div>

      <div className="rounded-[24px] border border-zinc-200 bg-white p-7 md:p-10 lg:col-span-7">
        <span className="text-[10px] font-black uppercase tracking-[.25em] text-[#b78520]">Areas We Serve</span>
        <h3 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">Is your city on the list?</h3>
        <p className="mt-4 max-w-2xl text-[14px] leading-7 text-zinc-600">Choose your city below or send us your address with a wheel photo. If your city is not listed, contact us and we’ll confirm mobile service availability.</p>
        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {SERVICE_AREAS.map((area, i) => (
            <a href="#contact" key={i} className="group flex items-center justify-between gap-2 rounded-xl border border-zinc-200 bg-[#f7f6f2] px-4 py-4 text-[13px] font-extrabold transition hover:border-[#d5a73f] hover:bg-white"><span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#b78520]"/>{area}</span><ArrowUpRight className="h-3.5 w-3.5 text-zinc-400 transition group-hover:text-[#b78520]"/></a>
          ))}
        </div>
        <div className="mt-7 rounded-xl border border-[#d5a73f]/25 bg-[#e8b94e]/10 px-5 py-4 text-sm text-zinc-600"><strong className="text-[#111315]">Not listed?</strong> Send your address anyway and we’ll confirm whether we can come to your location.</div>
      </div>
    </div>
  </section>
);

export default ServiceAreas;
