import React, { useMemo, useState } from 'react';
import { Camera, CalendarDays, MessageSquareText, Phone, MapPin, ShieldCheck, BadgeDollarSign, CheckCircle2 } from 'lucide-react';
import { BRAND, QUOTE_SERVICES } from '../data/mock';

const CTA = () => {
  const [tab, setTab] = useState('quote');
  const [form, setForm] = useState({ name: '', phone: '', address: '', service: QUOTE_SERVICES[0] || 'Not Sure', rims: '1' });
  const [errors, setErrors] = useState({});
  const update = (key) => (e) => { setForm((prev) => ({ ...prev, [key]: e.target.value })); setErrors((prev) => ({ ...prev, [key]: false })); };

  const smsHref = useMemo(() => {
    const intro = tab === 'quote' ? 'Hi Rim Repair Pro, I would like a wheel repair quote.' : 'Hi Rim Repair Pro, I would like to request an appointment.';
    const body = [intro, `Name: ${form.name}`, `Phone: ${form.phone}`, `Service address: ${form.address}`, `Service: ${form.service}`, `Number of rims: ${form.rims}`, 'I will attach photos of the wheel damage to this message.'].join('\n');
    return `sms:${BRAND.phoneTel}?&body=${encodeURIComponent(body)}`;
  }, [tab, form]);

  const openText = (e) => {
    e.preventDefault();
    const next = { name: !form.name.trim(), phone: !form.phone.trim(), address: !form.address.trim() };
    setErrors(next);
    if (Object.values(next).some(Boolean)) return;
    window.location.href = smsHref;
  };

  const benefits = [
    [BadgeDollarSign, 'No Deposit', 'Request your service without paying a deposit.'],
    [MapPin, 'No Distance Fee', 'Mobile service with no separate distance charge.'],
    [ShieldCheck, 'Work Warranty', 'Completed work is backed by our warranty.'],
  ];
  const fieldClass = (key) => `mt-2 w-full rounded-lg border bg-white px-4 py-3.5 text-sm text-black outline-none transition focus:border-[#d5a73f] ${errors[key] ? 'border-red-500' : 'border-zinc-200'}`;

  return (
    <section id="contact" className="relative overflow-hidden bg-[#0b0c0d] py-16 text-white md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(213,167,63,.16),transparent_28%),radial-gradient(circle_at_90%_85%,rgba(213,167,63,.08),transparent_25%)] opacity-40" />
      <div className="relative mx-auto grid max-w-[1380px] gap-10 px-5 md:px-8 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5 lg:py-5">
          <span className="text-[10px] font-black uppercase tracking-[.26em] text-[#e8b94e]">Fast • Mobile • Simple</span>
          <h2 className="mt-4 font-display text-[46px] font-bold leading-[.95] sm:text-[52px] md:text-[70px]">Get Quote<br/><span className="text-[#e8b94e]">or Book Now.</span></h2>
          <p className="mt-6 max-w-lg text-[15px] leading-7 text-zinc-400">Send your wheel details, service address and photos. We review the damage and text you with quote and scheduling information.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">{benefits.map(([Icon, title, text]) => <div key={title} className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[.035] p-4"><div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#e8b94e] text-[#111315]"><Icon className="h-5 w-5"/></div><div><div className="font-extrabold">{title}</div><div className="mt-0.5 text-xs leading-5 text-zinc-500">{text}</div></div></div>)}</div>
          <div className="mt-8 space-y-3 border-t border-white/10 pt-7 text-sm text-zinc-300"><div className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 shrink-0 text-[#e8b94e]"/> Take clear photos of the damaged wheel</div><div className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 shrink-0 text-[#e8b94e]"/> Add the address where you need mobile service</div><div className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 shrink-0 text-[#e8b94e]"/> Receive quote and scheduling details by text</div></div>
          <a href={`tel:${BRAND.phoneTel}`} className="mt-8 inline-flex items-center gap-3 text-xl font-black transition hover:text-[#e8b94e]"><Phone className="h-5 w-5 text-[#e8b94e]"/>{BRAND.phone}</a>
        </div>

        <div className="rounded-[20px] bg-[#f7f6f2] p-4 text-[#111315] shadow-2xl sm:p-5 md:rounded-[24px] md:p-8 lg:col-span-7">
          <div className="grid grid-cols-2 gap-1.5 rounded-xl bg-[#e9e7e1] p-1.5"><button type="button" onClick={() => setTab('quote')} className={`rounded-lg px-2 py-3.5 text-[9px] font-black uppercase tracking-[.08em] transition sm:text-[10px] md:text-[11px] ${tab === 'quote' ? 'bg-[#111315] text-[#e8b94e] shadow' : 'text-zinc-500 hover:text-black'}`}><Camera className="mr-1 inline h-4 w-4"/>Send Photo for Quote</button><button type="button" onClick={() => setTab('book')} className={`rounded-lg px-2 py-3.5 text-[9px] font-black uppercase tracking-[.08em] transition sm:text-[10px] md:text-[11px] ${tab === 'book' ? 'bg-[#111315] text-[#e8b94e] shadow' : 'text-zinc-500 hover:text-black'}`}><CalendarDays className="mr-1 inline h-4 w-4"/>Book Your Service</button></div>
          <div className="mt-5 rounded-xl border border-[#d5a73f]/30 bg-[#e8b94e]/10 px-4 py-3 text-xs font-bold">{tab === 'quote' ? 'Complete the details below, then open a text and attach your wheel photos.' : 'No deposit is required to request your appointment.'}</div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="text-[10px] font-black tracking-[.14em] text-zinc-500">YOUR NAME<input value={form.name} onChange={update('name')} autoComplete="name" className={fieldClass('name')} placeholder="Name"/>{errors.name && <span className="mt-1 block text-[10px] normal-case tracking-normal text-red-600">Please enter your name.</span>}</label>
            <label className="text-[10px] font-black tracking-[.14em] text-zinc-500">PHONE NUMBER<input value={form.phone} onChange={update('phone')} type="tel" inputMode="tel" autoComplete="tel" className={fieldClass('phone')} placeholder="(555) 555-5555"/>{errors.phone && <span className="mt-1 block text-[10px] normal-case tracking-normal text-red-600">Please enter your phone number.</span>}</label>
            <label className="text-[10px] font-black tracking-[.14em] text-zinc-500 sm:col-span-2">YOUR ADDRESS — WE COME TO YOU<input value={form.address} onChange={update('address')} autoComplete="street-address" className={fieldClass('address')} placeholder="Street, city, ZIP"/>{errors.address && <span className="mt-1 block text-[10px] normal-case tracking-normal text-red-600">Please enter the service address.</span>}</label>
            <label className="text-[10px] font-black tracking-[.14em] text-zinc-500">SERVICE NEEDED<select value={form.service} onChange={update('service')} className="mt-2 w-full rounded-lg border border-zinc-200 bg-white px-4 py-3.5 text-sm text-black outline-none focus:border-[#d5a73f]">{QUOTE_SERVICES.map(x => <option key={x}>{x}</option>)}</select></label>
            <label className="text-[10px] font-black tracking-[.14em] text-zinc-500">NUMBER OF RIMS<select value={form.rims} onChange={update('rims')} className="mt-2 w-full rounded-lg border border-zinc-200 bg-white px-4 py-3.5 text-sm text-black outline-none focus:border-[#d5a73f]">{[1,2,3,4].map(x => <option key={x}>{x}</option>)}</select></label>
            <div className="text-[10px] font-black tracking-[.14em] text-zinc-500 sm:col-span-2">PHOTO OF DAMAGE<div className="mt-2 rounded-xl border-2 border-dashed border-zinc-300 bg-white px-5 py-6 text-center"><Camera className="mx-auto h-7 w-7 text-[#b78520]"/><div className="mt-2 text-sm font-bold text-[#111315]">Attach photos in Messages</div><div className="mx-auto mt-1 max-w-md text-[11px] font-normal leading-5 tracking-normal text-zinc-500">Tap the button below to open a prepared text, then attach your wheel photos before sending. This avoids pretending a website file picker can transfer photos into SMS.</div></div></div>
          </div>

          <button type="button" onClick={openText} className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#e8b94e] px-5 py-4 text-sm font-black text-[#111315] transition hover:bg-[#f0c765]"><MessageSquareText className="h-5 w-5"/>{tab === 'quote' ? 'Open Text & Get Quote' : 'Open Text & Request Appointment'}</button>
          <p className="mt-3 text-center text-[11px] leading-5 text-zinc-500">Your details are added to the text automatically. Attach wheel photos in Messages before sending. No deposit required.</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
