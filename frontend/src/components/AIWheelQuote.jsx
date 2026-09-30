import React, { useMemo, useState } from 'react';

const PHONE = '17477170060';
const PRICES = {
  light: { label: 'Light curb rash', price: '$100–$120' },
  medium: { label: 'Medium curb rash', price: '$120–$150' },
  heavy: { label: 'Heavy cosmetic damage', price: '$150+' },
};

export default function AIWheelQuote() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');
  const [stage, setStage] = useState('upload');
  const [severity, setSeverity] = useState('medium');
  const [zip, setZip] = useState('');
  const [wheels, setWheels] = useState('1');

  const estimate = PRICES[severity];
  const smsHref = useMemo(() => {
    const text = `Hi Rim Repair Pro! I used the Wheel Damage Check.\nDamage: ${estimate.label}\nEstimated range shown: ${estimate.price}\nWheels: ${wheels}\nZIP: ${zip || 'not entered'}\nI will attach my wheel photo here. Please confirm the final quote and availability.`;
    return `sms:+${PHONE}?&body=${encodeURIComponent(text)}`;
  }, [estimate, wheels, zip]);

  const chooseFile = (event) => {
    const next = event.target.files?.[0];
    if (!next) return;
    setFile(next);
    setPreview(URL.createObjectURL(next));
    setStage('ready');
  };

  return (
    <section id="ai-quote" className="bg-[#08090a] px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white/70">AI Wheel Damage Check</div>
          <h2 className="text-3xl font-black text-white md:text-5xl">Upload a wheel photo. Get a fast estimate.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/60 md:text-lg">For cosmetic curb rash and scratches only. Bent or cracked wheels require a different repair service.</p>
        </div>

        <div className="mx-auto mt-9 max-w-xl rounded-2xl border border-dashed border-white/20 bg-black/30 p-5 md:p-7">
          {preview ? <img src={preview} alt="Wheel damage preview" className="mb-5 max-h-72 w-full rounded-xl object-cover" /> : <div className="mb-5 flex h-40 items-center justify-center rounded-xl bg-white/5 text-5xl">📸</div>}

          <label className="block cursor-pointer rounded-xl bg-white px-5 py-4 text-center font-extrabold text-black">
            {file ? 'CHOOSE ANOTHER PHOTO' : 'UPLOAD WHEEL PHOTO'}
            <input className="hidden" type="file" accept="image/*" capture="environment" onChange={chooseFile} />
          </label>

          {stage === 'ready' && <button onClick={() => setStage('result')} className="mt-3 w-full rounded-xl border border-white/20 bg-white/10 px-5 py-4 font-extrabold text-white">🤖 CHECK MY WHEEL</button>}

          {stage === 'result' && (
            <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5 text-white">
              <div className="text-xs font-bold uppercase tracking-widest text-white/50">Preliminary estimate</div>
              <h3 className="mt-2 text-3xl font-black">{estimate.price}</h3>
              <p className="mt-2 text-sm text-white/60">Select the closest visible damage level. Final price is confirmed after we review your photo.</p>

              <div className="mt-4 grid gap-2">
                {Object.entries(PRICES).map(([key, item]) => <button key={key} onClick={() => setSeverity(key)} className={`rounded-xl border px-4 py-3 text-left text-sm font-bold ${severity === key ? 'border-white bg-white text-black' : 'border-white/10 bg-black/20 text-white'}`}>{item.label} · {item.price}</button>)}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <select value={wheels} onChange={(e) => setWheels(e.target.value)} className="rounded-xl border border-white/10 bg-black px-3 py-3 text-white"><option value="1">1 wheel</option><option value="2">2 wheels</option><option value="3">3 wheels</option><option value="4">4 wheels</option></select>
                <input value={zip} onChange={(e) => setZip(e.target.value.replace(/\D/g, '').slice(0, 5))} inputMode="numeric" placeholder="ZIP code" className="rounded-xl border border-white/10 bg-black px-3 py-3 text-white" />
              </div>

              <a href={smsHref} className="mt-5 block rounded-xl bg-white px-5 py-4 text-center font-black text-black">TEXT PHOTO — CONFIRM QUOTE</a>
              <a href={`tel:+${PHONE}`} className="mt-3 block text-center text-sm font-bold text-white/70">or call (747) 717-0060</a>
              <p className="mt-4 text-center text-xs leading-5 text-white/40">Estimate only. Photo review is required before the appointment. Rim Repair Pro provides cosmetic curb-rash repair and does not repair bent or cracked wheels.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
