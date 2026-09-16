import React, { useState } from 'react';
import { Camera, CalendarDays, MessageSquareText, Phone, MapPin } from 'lucide-react';
import { BRAND, QUOTE_SERVICES } from '../data/mock';

const CTA = () => {
  const [tab, setTab] = useState('quote');
  return (
    <section id="contact" className="bg-[#081526] py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(47,124,255,.22),transparent_30%),radial-gradient(circle_at_10%_90%,rgba(20,184,166,.12),transparent_30%)]" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          <span className="text-[11px] uppercase tracking-[.3em] font-bold text-[#64d8ff]">Fast & Simple</span>
          <h2 className="mt-5 font-display text-[52px] md:text-[76px] leading-[.94] font-bold tracking-[-.035em] text-white">Get Quote<br/><span className="text-[#64d8ff]">or Book Now.</span></h2>
          <p className="mt-6 text-[17px] leading-relaxed text-slate-300 max-w-lg">Send a photo of your rim plus your address. We review the damage and text you back with your quote and scheduling details.</p>
          <div className="mt-9 space-y-4 text-sm text-slate-300">
            <div className="flex items-center gap-3"><Camera className="w-5 h-5 text-[#64d8ff]"/> Take clear photos of the damaged wheel</div>
            <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-[#64d8ff]"/> Add the address where you need service</div>
            <div className="flex items-center gap-3"><MessageSquareText className="w-5 h-5 text-[#64d8ff]"/> Receive the quote by text</div>
          </div>
          <a href={`tel:${BRAND.phoneTel}`} className="mt-10 inline-flex items-center gap-3 text-xl font-bold text-white hover:text-[#64d8ff]"><Phone className="w-5 h-5"/>{BRAND.phone}</a>
        </div>

        <div className="lg:col-span-7 rounded-[30px] bg-[#f7f3eb] p-5 md:p-8 shadow-2xl">
          <div className="grid grid-cols-2 gap-2 rounded-2xl bg-[#e8e4dc] p-1.5">
            <button onClick={() => setTab('quote')} className={`rounded-xl px-3 py-3.5 text-[10px] md:text-[11px] font-black uppercase tracking-[.12em] transition ${tab === 'quote' ? 'bg-[#2f7cff] text-white shadow' : 'text-slate-600'}`}><Camera className="inline w-4 h-4 mr-2"/>Send Photo for Quote</button>
            <button onClick={() => setTab('book')} className={`rounded-xl px-3 py-3.5 text-[10px] md:text-[11px] font-black uppercase tracking-[.12em] transition ${tab === 'book' ? 'bg-[#2f7cff] text-white shadow' : 'text-slate-600'}`}><CalendarDays className="inline w-4 h-4 mr-2"/>Book & Pay Deposit</button>
          </div>

          <div className="mt-7 grid sm:grid-cols-2 gap-4">
            <label className="text-[10px] font-black tracking-[.15em] text-slate-500">YOUR NAME<input className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none focus:border-[#2f7cff]" placeholder="Name"/></label>
            <label className="text-[10px] font-black tracking-[.15em] text-slate-500">PHONE NUMBER<input type="tel" className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none focus:border-[#2f7cff]" placeholder="(555) 555-5555"/></label>
            <label className="sm:col-span-2 text-[10px] font-black tracking-[.15em] text-slate-500">YOUR ADDRESS — WE COME TO YOU<input className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none focus:border-[#2f7cff]" placeholder="Street, city, ZIP"/></label>
            <label className="text-[10px] font-black tracking-[.15em] text-slate-500">SERVICE NEEDED<select className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none focus:border-[#2f7cff]">{QUOTE_SERVICES.map(x => <option key={x}>{x}</option>)}</select></label>
            <label className="text-[10px] font-black tracking-[.15em] text-slate-500">NUMBER OF RIMS<select className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none focus:border-[#2f7cff]">{[1,2,3,4].map(x => <option key={x}>{x}</option>)}</select></label>
            <label className="sm:col-span-2 text-[10px] font-black tracking-[.15em] text-slate-500">PHOTO OF DAMAGE<div className="mt-2 rounded-2xl border-2 border-dashed border-slate-300 bg-white px-6 py-8 text-center"><Camera className="mx-auto w-7 h-7 text-[#2f7cff]"/><div className="mt-2 text-sm font-semibold text-slate-700">Choose wheel photos</div><input type="file" accept="image/*" multiple className="mt-3 max-w-full text-xs text-slate-500"/></div></label>
          </div>
          <a href={`sms:${BRAND.phoneTel}`} className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#2f7cff] px-5 py-4 text-sm font-black text-white hover:bg-[#438aff] transition"><MessageSquareText className="w-5 h-5"/>{tab === 'quote' ? 'Send & Get Quote via Text' : 'Continue Booking'}</a>
          <p className="mt-3 text-center text-[11px] text-slate-500">For photo quotes, your phone can open a text to {BRAND.phone}.</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
