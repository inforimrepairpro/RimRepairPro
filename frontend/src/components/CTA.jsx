import React, { useMemo, useRef, useState } from 'react';
import { Camera, CalendarDays, MessageSquareText, Phone, MapPin, ShieldCheck, BadgeDollarSign, CheckCircle2, X } from 'lucide-react';
import { BRAND, QUOTE_SERVICES } from '../data/mock';

const CTA = () => {
  const [tab, setTab] = useState('quote');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [sendError, setSendError] = useState('');
  const [website, setWebsite] = useState('');
  const requestId = useRef(crypto.randomUUID());
  const [form, setForm] = useState({ name: '', phone: '', address: '', service: QUOTE_SERVICES[0] || 'Not Sure', rims: '1' });
  const [errors, setErrors] = useState({});
  const [photos, setPhotos] = useState([]);
  const fileInputRef = useRef(null);
  const update = (key) => (e) => { setForm((prev) => ({ ...prev, [key]: e.target.value })); setErrors((prev) => ({ ...prev, [key]: false })); };

  const smsHref = useMemo(() => {
    const intro = tab === 'quote' ? 'Hi Rim Repair Pro, I would like a wheel repair quote.' : 'Hi Rim Repair Pro, I would like to request an appointment.';
    const photoLine = photos.length ? `I selected ${photos.length} wheel photo${photos.length > 1 ? 's' : ''} on the website and will attach them to this message.` : 'I will attach photos of the wheel damage to this message.';
    const body = [intro, `Name: ${form.name}`, `Phone: ${form.phone}`, `Service address: ${form.address}`, `Service: ${form.service}`, `Number of rims: ${form.rims}`, photoLine].join('\n');
    return `sms:${BRAND.phoneTel}?body=${encodeURIComponent(body)}`;
  }, [tab, form, photos]);

  const openText = (e) => {
    e.preventDefault();
    const next = { name: !form.name.trim(), phone: !form.phone.trim(), address: !form.address.trim() };
    setErrors(next);
    if (Object.values(next).some(Boolean)) return;
    window.trackSmsOpen?.(tab === 'quote' ? 'quote_form' : 'appointment_form');
    window.location.href = smsHref;
  };


  const compressPhoto = (file) => new Promise((resolve, reject) => {
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type) || file.size > 20 * 1024 * 1024) { reject(new Error('Please choose JPG, PNG or WebP photos under 20 MB.')); return; }
    const image = new Image();
    const url = URL.createObjectURL(file);
    image.onerror = () => { URL.revokeObjectURL(url); reject(new Error('We could not read a photo. Please use JPG, PNG or WebP.')); };
    image.onload = () => {
      try {
        const scale = Math.min(1, 1000 / Math.max(image.width, image.height));
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, Math.round(image.width * scale)); canvas.height = Math.max(1, Math.round(image.height * scale));
        canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height);
        const data = canvas.toDataURL('image/jpeg', 0.7);
        if (data.length > 800000) throw new Error('A photo is too large. Please use a smaller photo.');
        resolve(data);
      } catch (err) { reject(err); } finally { URL.revokeObjectURL(url); }
    };
    image.src = url;
  });
  const submitRequest = async () => {
    if (sending || sent) return;
    const next = { name: !form.name.trim(), phone: form.phone.replace(/\D/g, '').length < 10, address: !form.address.trim() };
    setErrors(next); setSendError('');
    if (Object.values(next).some(Boolean)) return;
    setSending(true);
    try {
      const imageData = await Promise.all(photos.map(({file}) => compressPhoto(file)));
      const response = await fetch('/api/submit-quote', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...form, kind: tab, photos: imageData, requestId: requestId.current, website }) });
      const result = await response.json();
      if (!response.ok || !result.accepted) throw new Error(result.error || 'Your request could not be sent. Please try again or text us.');
      setSent(true);
      window.gtag?.('event', 'generate_lead', { send_to: 'G-W9Z3V12JRN', lead_type: tab, transport_type: 'beacon' });
    } catch (err) { setSendError(err.message || 'Your request could not be sent. Please text us.'); }
    finally { setSending(false); }
  };

  const choosePhotos = () => fileInputRef.current?.click();
  const handlePhotos = (e) => {
    const selected = Array.from(e.target.files || []).filter((file) => file.type.startsWith('image/'));
    const remaining = Math.max(0, 4 - photos.length);
    const next = selected.slice(0, remaining).map((file) => ({ file, url: URL.createObjectURL(file) }));
    setPhotos((prev) => [...prev, ...next]);
    e.target.value = '';
  };
  const removePhoto = (index) => setPhotos((prev) => {
    const target = prev[index];
    if (target?.url) URL.revokeObjectURL(target.url);
    return prev.filter((_, i) => i !== index);
  });

  const benefits = [[BadgeDollarSign, 'No Deposit', 'Request your service without paying a deposit.'],[MapPin, 'No Distance Fee', 'Mobile service with no separate distance charge.'],[ShieldCheck, 'Work Warranty', 'Completed work is backed by our warranty.']];
  const fieldClass = (key) => `mt-2 w-full rounded-lg border bg-white px-4 py-3.5 text-sm text-black outline-none transition focus:border-[#d5a73f] ${errors[key] ? 'border-red-500' : 'border-zinc-200'}`;

  return <section id="contact" className="relative overflow-hidden bg-[#0b0c0d] py-16 text-white md:py-24"><div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(213,167,63,.16),transparent_28%),radial-gradient(circle_at_90%_85%,rgba(213,167,63,.08),transparent_25%)] opacity-40"/><div className="relative mx-auto grid max-w-[1380px] gap-10 px-5 md:px-8 lg:grid-cols-12 lg:gap-14"><div className="lg:col-span-5 lg:py-5"><span className="text-[10px] font-black uppercase tracking-[.26em] text-[#e8b94e]">Fast • Mobile • Simple</span><h2 className="mt-4 font-display text-[46px] font-bold leading-[.95] sm:text-[52px] md:text-[70px]">Get Quote<br/><span className="text-[#e8b94e]">or Book Now.</span></h2><p className="mt-6 max-w-lg text-[15px] leading-7 text-zinc-400">Send your wheel details, service address and photos. We review the damage and text you with quote and scheduling information.</p><div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">{benefits.map(([Icon,title,text])=><div key={title} className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[.035] p-4"><div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#e8b94e] text-[#111315]"><Icon className="h-5 w-5"/></div><div><div className="font-extrabold">{title}</div><div className="mt-0.5 text-xs leading-5 text-zinc-500">{text}</div></div></div>)}</div><div className="mt-8 space-y-3 border-t border-white/10 pt-7 text-sm text-zinc-300"><div className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 shrink-0 text-[#e8b94e]"/> Take clear photos of the damaged wheel</div><div className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 shrink-0 text-[#e8b94e]"/> Add the address where you need mobile service</div><div className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 shrink-0 text-[#e8b94e]"/> Receive quote and scheduling details by text</div></div><a href={`tel:${BRAND.phoneTel}`} className="mt-8 inline-flex items-center gap-3 text-xl font-black transition hover:text-[#e8b94e]"><Phone className="h-5 w-5 text-[#e8b94e]"/>{BRAND.phone}</a></div>
<div className="rounded-[20px] bg-[#f7f6f2] p-4 text-[#111315] shadow-2xl sm:p-5 md:rounded-[24px] md:p-8 lg:col-span-7"><div className="grid grid-cols-2 gap-1.5 rounded-xl bg-[#e9e7e1] p-1.5"><button type="button" onClick={()=>setTab('quote')} className={`rounded-lg px-2 py-3.5 text-[9px] font-black uppercase tracking-[.08em] sm:text-[10px] md:text-[11px] ${tab==='quote'?'bg-[#111315] text-[#e8b94e] shadow':'text-zinc-500'}`}><Camera className="mr-1 inline h-4 w-4"/>Send Photo for Quote</button><button type="button" onClick={()=>setTab('book')} className={`rounded-lg px-2 py-3.5 text-[9px] font-black uppercase tracking-[.08em] sm:text-[10px] md:text-[11px] ${tab==='book'?'bg-[#111315] text-[#e8b94e] shadow':'text-zinc-500'}`}><CalendarDays className="mr-1 inline h-4 w-4"/>Book Your Service</button></div><div className="mt-5 rounded-xl border border-[#d5a73f]/30 bg-[#e8b94e]/10 px-4 py-3 text-xs font-bold">{tab==='quote'?'Complete the details below, choose up to 4 wheel photos, then send your request.':'No deposit is required to request your appointment.'}</div>
<div className="mt-6 grid gap-4 sm:grid-cols-2"><label className="text-[10px] font-black tracking-[.14em] text-zinc-500">YOUR NAME<input value={form.name} onChange={update('name')} autoComplete="name" className={fieldClass('name')} placeholder="Name"/>{errors.name&&<span className="mt-1 block text-[10px] normal-case tracking-normal text-red-600">Please enter your name.</span>}</label><label className="text-[10px] font-black tracking-[.14em] text-zinc-500">PHONE NUMBER<input value={form.phone} onChange={update('phone')} type="tel" inputMode="tel" autoComplete="tel" className={fieldClass('phone')} placeholder="(555) 555-5555"/>{errors.phone&&<span className="mt-1 block text-[10px] normal-case tracking-normal text-red-600">Please enter your phone number.</span>}</label><label className="text-[10px] font-black tracking-[.14em] text-zinc-500 sm:col-span-2">YOUR ADDRESS — WE COME TO YOU<input value={form.address} onChange={update('address')} autoComplete="street-address" className={fieldClass('address')} placeholder="Street, city, ZIP"/>{errors.address&&<span className="mt-1 block text-[10px] normal-case tracking-normal text-red-600">Please enter the service address.</span>}</label><label className="text-[10px] font-black tracking-[.14em] text-zinc-500">SERVICE NEEDED<select value={form.service} onChange={update('service')} className="mt-2 w-full rounded-lg border border-zinc-200 bg-white px-4 py-3.5 text-sm text-black outline-none focus:border-[#d5a73f]">{QUOTE_SERVICES.map(x=><option key={x}>{x}</option>)}</select></label><label className="text-[10px] font-black tracking-[.14em] text-zinc-500">NUMBER OF RIMS<select value={form.rims} onChange={update('rims')} className="mt-2 w-full rounded-lg border border-zinc-200 bg-white px-4 py-3.5 text-sm text-black outline-none focus:border-[#d5a73f]">{[1,2,3,4].map(x=><option key={x}>{x}</option>)}</select></label>
<div className="text-[10px] font-black tracking-[.14em] text-zinc-500 sm:col-span-2">PHOTO OF DAMAGE<input ref={fileInputRef} type="file" accept="image/jpeg,image/png,image/webp" multiple onChange={handlePhotos} className="hidden"/><button type="button" onClick={choosePhotos} className="mt-2 w-full rounded-xl border-2 border-dashed border-zinc-300 bg-white px-5 py-6 text-center transition hover:border-[#d5a73f] hover:bg-[#fffdf7]"><Camera className="mx-auto h-7 w-7 text-[#b78520]"/><div className="mt-2 text-sm font-bold text-[#111315]">{photos.length?'Add More Photos':'Add Photos'}</div><div className="mx-auto mt-1 max-w-md text-[11px] font-normal leading-5 tracking-normal text-zinc-500">Choose up to 4 photos from your phone or computer.</div></button>{photos.length>0&&<div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">{photos.map((photo,i)=><div key={photo.url} className="relative aspect-square overflow-hidden rounded-lg border border-zinc-200 bg-white"><img src={photo.url} alt={`Wheel damage ${i+1}`} className="h-full w-full object-cover"/><button type="button" onClick={()=>removePhoto(i)} aria-label="Remove photo" className="absolute right-1.5 top-1.5 grid h-7 w-7 place-items-center rounded-full bg-black/75 text-white"><X className="h-4 w-4"/></button></div>)}</div>}{photos.length>=4&&<div className="mt-2 text-[10px] normal-case tracking-normal text-zinc-500">Maximum 4 photos selected.</div>}</div></div>
<div className="mt-6"><label className="absolute -left-[10000px]" aria-hidden="true">Website<input tabIndex={-1} autoComplete="off" value={website} onChange={e=>setWebsite(e.target.value)}/></label><p className="mb-3 text-xs leading-5 text-zinc-500">Send your details and selected photos to Rim Repair Pro for review. We will contact you by phone or text. Price and appointment time are confirmed separately.</p><button type="button" disabled={sending||sent} onClick={submitRequest} className="w-full rounded-lg bg-[#111315] px-5 py-4 text-sm font-black text-[#e8b94e] disabled:opacity-60">{sending?'Sending…':sent?'Request received':tab==='quote'?'Send Quote Request':'Send Appointment Request'}</button>{sent&&<p role="status" className="mt-3 text-sm font-bold text-green-700">Your request has been accepted for delivery to Rim Repair Pro. We will contact you to confirm the details.</p>}{sendError&&<p role="alert" className="mt-3 text-sm text-red-600">{sendError}</p>}</div><button type="button" onClick={openText} className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#e8b94e] px-5 py-4 text-sm font-black text-[#111315] transition hover:bg-[#f0c765]"><MessageSquareText className="h-5 w-5"/>{tab==='quote'?'Open Text & Get Quote':'Open Text & Request Appointment'}</button><p className="mt-3 text-center text-[11px] leading-5 text-zinc-500">Selected photos are previewed here. When Messages opens, attach those photos to the prepared text before sending.</p></div></div></section>;
};
export default CTA;
