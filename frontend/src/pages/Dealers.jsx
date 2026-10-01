import React from 'react';
import { Building2, Car, Clock3, ShieldCheck, Tags, Truck, CheckCircle2, Phone, Camera, BadgeDollarSign, Wrench, KeyRound } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MobileActionBar from '../components/MobileActionBar';
import { BRAND } from '../data/mock';

const benefits = [
  [Tags, 'Volume Pricing', 'Business pricing for repeat and multi-wheel work.'],
  [Truck, 'On-Site Service', 'We come directly to your dealership or body shop.'],
  [Clock3, 'Fast Turnaround', 'Convenient scheduling designed around your inventory.'],
  [ShieldCheck, 'Professional Results', 'Cosmetic wheel repair focused on clean, retail-ready presentation.'],
];
const partners = [
  ['Dealerships', 'Keep new and pre-owned inventory looking ready for the lot.'],
  ['Body Shops', 'Add cosmetic wheel repair without sending vehicles off-site.'],
  ['Used Car Lots', 'Refresh curb-rash wheels before vehicles are photographed or sold.'],
  ['Detail Shops', 'Offer wheel appearance restoration alongside detailing services.'],
];
const dealerSteps = [
  [Camera, '01', 'Send Photos', 'Send wheel photos and the vehicle location.'],
  [BadgeDollarSign, '02', 'Confirm Pricing', 'We review the work and confirm business pricing before the visit.'],
  [Truck, '03', 'We Come to Your Lot', 'Our mobile setup comes directly to your dealership or shop.'],
  [Wrench, '04', 'Repair On-Site', 'Cosmetic wheel repairs are completed at your location.'],
  [KeyRound, '05', 'Ready for Sale', 'The vehicle stays on-site and is ready to return to your workflow.'],
];
const workImages = ['/Rim-11.JPG','/Rim-14.JPG','/Rim-17.JPG','/Rim-20.JPG'];

const Dealers = () => (
  <div className="min-h-screen bg-[#08090a] pb-[68px] text-white md:pb-0">
    <Navbar />
    <main className="pt-[72px] md:pt-[82px]">
      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_85%_15%,rgba(232,185,78,.18),transparent_30%),linear-gradient(135deg,#11161a_0%,#08090a_62%)]">
        <div className="mx-auto grid max-w-[1380px] gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-12 lg:items-center"><div className="lg:col-span-7"><div className="inline-flex items-center gap-2 rounded-full border border-[#e8b94e]/30 bg-[#e8b94e]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[.2em] text-[#e8b94e]"><Building2 className="h-4 w-4"/> Business Partners</div><h1 className="mt-6 font-display text-[46px] font-black uppercase leading-[.92] sm:text-[60px] lg:text-[76px]">Dealers &<br/><span className="text-[#e8b94e]">Body Shops</span></h1><p className="mt-6 max-w-2xl text-base leading-7 text-zinc-300 md:text-lg">Reliable mobile cosmetic wheel repair for your inventory. We come to your location so vehicles can stay on-site while their wheels get refreshed.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="#dealer-pricing" className="inline-flex min-h-14 items-center justify-center rounded-lg bg-[#e8b94e] px-7 text-sm font-black text-[#111315]">Request Dealer Pricing</a><a href={`tel:${BRAND.phoneTel}`} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg border border-white/15 px-7 text-sm font-black"><Phone className="h-4 w-4 text-[#e8b94e]"/> Call {BRAND.phone}</a></div></div><div className="lg:col-span-5"><div className="rounded-[28px] border border-[#e8b94e]/20 bg-white/[.04] p-6 shadow-2xl"><div className="text-xs font-black uppercase tracking-[.2em] text-[#e8b94e]">Built for your workflow</div><div className="mt-5 space-y-4">{['Multiple wheels per visit','Mobile service at your location','Scheduling for repeat business','Curb rash & cosmetic wheel repair'].map(x => <div key={x} className="flex items-center gap-3 text-sm font-bold text-zinc-200"><CheckCircle2 className="h-5 w-5 shrink-0 text-[#e8b94e]"/>{x}</div>)}</div></div></div></div>
      </section>

      <section className="bg-[#0d1012] py-14 md:py-20"><div className="mx-auto max-w-[1380px] px-5 md:px-8"><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{benefits.map(([Icon,title,desc]) => <article key={title} className="rounded-2xl border border-white/10 bg-[#111518] p-6"><Icon className="h-8 w-8 text-[#e8b94e]"/><h2 className="mt-5 text-xl font-black">{title}</h2><p className="mt-2 text-sm leading-6 text-zinc-400">{desc}</p></article>)}</div></div></section>

      <section className="border-y border-white/10 bg-[#08090a] py-14 md:py-20"><div className="mx-auto max-w-[1380px] px-5 md:px-8"><div className="max-w-3xl"><div className="text-xs font-black uppercase tracking-[.2em] text-[#e8b94e]">Simple business workflow</div><h2 className="mt-3 font-display text-4xl font-black uppercase sm:text-5xl">How Dealer Service Works</h2><p className="mt-4 text-zinc-400">A straightforward process designed to keep vehicles at your location and moving through your inventory.</p></div><div className="mt-10 grid gap-4 md:grid-cols-5">{dealerSteps.map(([Icon,n,title,desc]) => <article key={n} className="relative rounded-2xl border border-white/10 bg-[#111518] p-5"><div className="flex items-center justify-between"><Icon className="h-7 w-7 text-[#e8b94e]"/><span className="text-3xl font-black text-white/10">{n}</span></div><h3 className="mt-5 text-lg font-black">{title}</h3><p className="mt-2 text-sm leading-6 text-zinc-400">{desc}</p></article>)}</div></div></section>

      <section className="bg-white py-14 text-[#111315] md:py-20"><div className="mx-auto max-w-[1380px] px-5 md:px-8"><div className="max-w-3xl"><div className="text-xs font-black uppercase tracking-[.2em] text-[#a77b20]">Who we work with</div><h2 className="mt-3 font-display text-4xl font-black uppercase sm:text-5xl">One mobile partner.<br/>More retail-ready vehicles.</h2></div><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{partners.map(([title,desc],i) => <article key={title} className="rounded-2xl border border-black/10 bg-[#f5f5f3] p-6"><div className="grid h-11 w-11 place-items-center rounded-xl bg-[#111315] text-[#e8b94e]">{i === 0 ? <Building2/> : <Car/>}</div><h3 className="mt-5 text-xl font-black">{title}</h3><p className="mt-2 text-sm leading-6 text-zinc-600">{desc}</p></article>)}</div></div></section>

      <section className="bg-[#0d1012] py-14 md:py-20"><div className="mx-auto max-w-[1380px] px-5 md:px-8"><div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><div className="text-xs font-black uppercase tracking-[.2em] text-[#e8b94e]">Real Rim Repair Pro work</div><h2 className="mt-3 font-display text-4xl font-black uppercase sm:text-5xl">Work Your Customers Can See</h2></div><a href="/#gallery" className="text-sm font-black text-[#e8b94e]">View More Work →</a></div><div className="mt-9 grid grid-cols-2 gap-3 md:grid-cols-4">{workImages.map((src,i) => <figure key={src} className="group relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-black"><img src={src} alt={`Rim Repair Pro wheel repair example ${i+1}`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105"/><figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent px-4 pb-4 pt-10 text-xs font-black uppercase tracking-wider text-white">Real Repair • Los Angeles</figcaption></figure>)}</div></div></section>

      <section id="dealer-pricing" className="bg-[#0a0c0e] py-14 md:py-20"><div className="mx-auto grid max-w-[1180px] gap-10 px-5 md:px-8 lg:grid-cols-2 lg:items-start"><div><div className="text-xs font-black uppercase tracking-[.2em] text-[#e8b94e]">Become a partner</div><h2 className="mt-3 font-display text-4xl font-black uppercase sm:text-5xl">Let's work together.</h2><p className="mt-5 max-w-lg leading-7 text-zinc-400">Tell us about your business and typical wheel-repair needs. We'll follow up to discuss availability and business pricing.</p><div className="mt-6 space-y-3 text-sm text-zinc-300">{['Special pricing for recurring and multi-vehicle accounts','Multiple wheels can be scheduled per visit','Mobile service at your dealership or shop'].map(x=><div key={x} className="flex gap-3"><CheckCircle2 className="h-5 w-5 shrink-0 text-[#e8b94e]"/>{x}</div>)}</div></div><form onSubmit={(e)=>{e.preventDefault(); const f=new FormData(e.currentTarget); const msg=`Dealer / Body Shop Inquiry%0A%0ABusiness: ${encodeURIComponent(f.get('business'))}%0AContact: ${encodeURIComponent(f.get('contact'))}%0AZIP: ${encodeURIComponent(f.get('zip'))}%0AVolume: ${encodeURIComponent(f.get('volume'))}`; window.location.href=`sms:${BRAND.phoneTel}?&body=${msg}`;}} className="rounded-2xl border border-white/10 bg-[#111518] p-5 sm:p-7"><div className="grid gap-4 sm:grid-cols-2"><input name="business" required placeholder="Business Name" className="min-h-12 rounded-lg border border-white/10 bg-black/20 px-4 text-sm outline-none focus:border-[#e8b94e]"/><input name="contact" required placeholder="Contact Name" className="min-h-12 rounded-lg border border-white/10 bg-black/20 px-4 text-sm outline-none focus:border-[#e8b94e]"/><input name="zip" required placeholder="ZIP Code" className="min-h-12 rounded-lg border border-white/10 bg-black/20 px-4 text-sm outline-none focus:border-[#e8b94e]"/><select name="volume" className="min-h-12 rounded-lg border border-white/10 bg-[#111518] px-4 text-sm text-zinc-300 outline-none focus:border-[#e8b94e]"><option>Estimated wheels per month</option><option>1–5</option><option>6–15</option><option>16–30</option><option>30+</option></select></div><button className="mt-4 min-h-13 w-full rounded-lg bg-[#e8b94e] px-6 py-4 text-sm font-black text-[#111315]">Request Business Pricing</button><p className="mt-3 text-center text-[11px] text-zinc-500">Opens a pre-filled text message to Rim Repair Pro.</p></form></div></section>
    </main>
    <Footer /><MobileActionBar />
  </div>
);
export default Dealers;
