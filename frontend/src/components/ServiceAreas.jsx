import React from 'react';
import { MapPin, Navigation, Truck, Phone, ArrowUpRight } from 'lucide-react';
import { SERVICE_AREAS, BRAND } from '../data/mock';

const ServiceAreas = () => (
  <section id="areas" className="relative scroll-mt-[82px] overflow-hidden bg-[#f7f6f2] py-14 text-[#111315] md:py-20">
    <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#e8b94e]/10 blur-3xl" />
    <div className="relative mx-auto grid max-w-[1380px] items-stretch gap-5 px-5 md:gap-6 md:px-8 lg:grid-cols-12">
      <div className="relative overflow-hidden rounded-[20px] bg-[#0b0c0d] p-6 text-white sm:p-7 md:rounded-[24px] md:p-10 lg:col-span-5">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#e8b94e]/10 blur-3xl" />
        <div className="relative">
          <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[.22em] text-[#e8b94e] sm:tracking-[.26em]"><MapPin className="h-4 w-4"/> Mobile Service Areas</span>
          <h2 className="mt-4 font-display text-[40px] font-bold leading-[.95] tracking-[-.03em] sm:mt-5 sm:text-[48px] md:text-[60px]">Serving Greater<br/><span className="text-[#e8b94e]">Los Angeles.</span></h2>
          <p className="mt-5 max-w-lg text-[14px] leading-6 text-zinc-400 sm:mt-6 sm:text-[15px] sm:leading-7">Rim Repair Pro is mobile. Tell us where the vehicle is located and we’ll confirm service availability for your area.</p>
          <div className="mt-6 grid gap-3 min-[380px]:grid-cols-2 sm:mt-8">
            <div className="rounded-xl border border-white/10 bg-white/[.04] p-4"><Truck className="h-5 w-5 text-[#e8b94e]"/><div className="mt-3 text-sm font-extrabold">We Come To You</div></div>
            <div className="rounded-xl border border-white/10 bg-white/[.04] p-4"><Navigation className="h-5 w-5 text-[#e8b94e]"/><div className="mt-3 text-sm font-extrabold">Greater LA</div></div>
          </div>
          <a href={`tel:${BRAND.phoneTel}`} className="mt-6 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-lg bg-[#e8b94e] px-5 py-4 text-sm font-black text-[#111315] transition hover:bg-[#f0c765] sm:mt-8 sm:w-auto"><Phone className="h-4 w-4"/>Call {BRAND.phone}</a>
        </div>
      </div>

      <div className="rounded-[20px] border border-zinc-200 bg-white p-5 sm:p-7 md:rounded-[24px] md:p-10 lg:col-span-7">
        <span className="text-[10px] font-black uppercase tracking-[.22em] text-[#b78520] sm:tracking-[.25em]">Areas We Serve</span>
        <h3 className="mt-3 text-[28px] font-extrabold leading-tight tracking-tight sm:text-3xl md:text-4xl">Is your city on the list?</h3>
        <p className="mt-4 max-w-2xl text-[14px] leading-6 text-zinc-600 sm:leading-7">Choose your city below or send us your address with a wheel photo. If your city is not listed, contact us and we’ll confirm mobile service availability.</p>
        <div className="mt-6 grid gap-2.5 min-[430px]:grid-cols-2 sm:mt-7 sm:grid-cols-3 sm:gap-3">
          {SERVICE_AREAS.map((area, i) => (
            <a href="#contact" key={i} className="group flex min-h-12 items-center justify-between gap-2 rounded-xl border border-zinc-200 bg-[#f7f6f2] px-3.5 py-3 text-[12px] font-extrabold transition hover:border-[#d5a73f] hover:bg-white sm:px-4 sm:py-4 sm:text-[13px]"><span className="flex min-w-0 items-center gap-2"><MapPin className="h-4 w-4 shrink-0 text-[#b78520]"/><span className="truncate">{area}</span></span><ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-zinc-400 transition group-hover:text-[#b78520]"/></a>
          ))}
        </div>
        <div className="mt-6 rounded-xl border border-[#d5a73f]/25 bg-[#e8b94e]/10 px-4 py-4 text-[13px] leading-6 text-zinc-600 sm:mt-7 sm:px-5 sm:text-sm"><strong className="text-[#111315]">Not listed?</strong> Send your address anyway and we’ll confirm whether we can come to your location.</div>
      </div>
    </div>
  </section>
);

export default ServiceAreas;
