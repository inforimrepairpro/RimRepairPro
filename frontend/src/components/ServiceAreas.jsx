import React from 'react';
import { MapPin, Navigation, Truck, Phone } from 'lucide-react';
import { SERVICE_AREAS, BRAND } from '../data/mock';

const ServiceAreas = () => (
  <section className="bg-[#f5f1e8] py-20 md:py-28 relative overflow-hidden">
    <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#2f7cff]/10 blur-3xl" />
    <div className="max-w-7xl mx-auto px-5 md:px-8 relative grid lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
      <div className="lg:col-span-5 rounded-[30px] bg-[#081526] p-8 md:p-10 relative overflow-hidden">
        <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[#2f7cff]/20 blur-3xl" />
        <div className="relative">
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[.3em] font-black text-[#64d8ff]"><MapPin className="w-4 h-4"/> Mobile Service Areas</span>
          <h2 className="mt-6 font-display text-[44px] md:text-[58px] leading-[.96] font-bold tracking-[-.035em] text-white">Serving Greater<br/><span className="text-[#64d8ff]">Los Angeles.</span></h2>
          <p className="mt-6 text-[16px] leading-relaxed text-slate-300">Rim Repair Pro is mobile. Instead of bringing the wheel to us, tell us where the vehicle is located and we’ll confirm service availability for your area.</p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4"><Truck className="w-5 h-5 text-[#64d8ff]"/><div className="mt-3 text-sm font-bold text-white">We Come To You</div></div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4"><Navigation className="w-5 h-5 text-[#64d8ff]"/><div className="mt-3 text-sm font-bold text-white">Greater LA</div></div>
          </div>
          <a href={`tel:${BRAND.phoneTel}`} className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#2f7cff] px-5 py-4 text-sm font-black text-white hover:bg-[#438aff] transition"><Phone className="w-4 h-4"/>Call {BRAND.phone}</a>
        </div>
      </div>

      <div className="lg:col-span-7 py-2 lg:py-5">
        <span className="text-[11px] uppercase tracking-[.25em] font-black text-[#176a76]">Areas We Serve</span>
        <h3 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-[#081526]">Is your city on the list?</h3>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-600">Select your city below or send us your address with a wheel photo. If you are nearby but don’t see your city listed, contact us to check mobile service availability.</p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {SERVICE_AREAS.map((area, i) => (
            <a href="#contact" key={i} className="group flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-4 text-[13px] font-bold text-[#081526] shadow-[0_12px_30px_-25px_rgba(8,21,38,.5)] hover:border-[#2f7cff]/50 hover:text-[#2f7cff] transition"><MapPin className="w-4 h-4 text-[#2f7cff]"/>{area}</a>
          ))}
        </div>
        <div className="mt-7 rounded-2xl border border-[#2f7cff]/15 bg-[#2f7cff]/5 px-5 py-4 text-sm text-slate-600"><strong className="text-[#081526]">Not listed?</strong> Send your address anyway and we’ll confirm whether we can come to your location.</div>
      </div>
    </div>
  </section>
);

export default ServiceAreas;
