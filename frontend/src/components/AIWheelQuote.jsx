import React, { useMemo, useState } from 'react';

const PHONE = '17477170060';

export default function AIWheelQuote() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');
  const [stage, setStage] = useState('upload');

  const smsHref = useMemo(() => {
    const text = `Hi Rim Repair Pro! I used the AI Wheel Damage Check and would like a quote. I will attach my wheel photo here.`;
    return `sms:+${PHONE}?&body=${encodeURIComponent(text)}`;
  }, []);

  const chooseFile = (event) => {
    const next = event.target.files?.[0];
    if (!next) return;
    setFile(next);
    setPreview(URL.createObjectURL(next));
    setStage('ready');
  };

  const analyze = () => {
    // Phase 1 lead funnel. A server-side vision endpoint can replace this step
    // once an AI provider key is configured securely on the deployment.
    setStage('result');
  };

  return (
    <section id="ai-quote" className="bg-[#08090a] px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white/70">AI Wheel Damage Check</div>
          <h2 className="text-3xl font-black text-white md:text-5xl">Upload a wheel photo. Get a fast estimate.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/60 md:text-lg">Designed for cosmetic curb rash and scratches. Rim Repair Pro does not repair bent or cracked wheels.</p>
        </div>

        <div className="mx-auto mt-9 max-w-xl rounded-2xl border border-dashed border-white/20 bg-black/30 p-5 md:p-7">
          {preview ? (
            <img src={preview} alt="Wheel damage preview" className="mb-5 max-h-72 w-full rounded-xl object-cover" />
          ) : (
            <div className="mb-5 flex h-40 items-center justify-center rounded-xl bg-white/5 text-5xl">📸</div>
          )}

          <label className="block cursor-pointer rounded-xl bg-white px-5 py-4 text-center font-extrabold text-black transition hover:opacity-90">
            {file ? 'CHOOSE ANOTHER PHOTO' : 'UPLOAD WHEEL PHOTO'}
            <input className="hidden" type="file" accept="image/*" capture="environment" onChange={chooseFile} />
          </label>

          {stage === 'ready' && (
            <button onClick={analyze} className="mt-3 w-full rounded-xl border border-white/20 bg-white/10 px-5 py-4 font-extrabold text-white transition hover:bg-white/15">🤖 ANALYZE MY WHEEL</button>
          )}

          {stage === 'result' && (
            <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5 text-white">
              <div className="text-xs font-bold uppercase tracking-widest text-white/50">Next step</div>
              <h3 className="mt-2 text-xl font-black">Photo received</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">Send the photo by text for a fast confirmed quote. We’ll verify that the damage is cosmetic curb rash and send pricing and availability.</p>
              <a href={smsHref} className="mt-5 block rounded-xl bg-white px-5 py-4 text-center font-black text-black">TEXT PHOTO FOR QUOTE</a>
              <a href={`tel:+${PHONE}`} className="mt-3 block text-center text-sm font-bold text-white/70">or call (747) 717-0060</a>
            </div>
          )}
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-semibold text-white/45">
          <span>✓ Mobile service</span><span>✓ Fast photo quote</span><span>✓ Cosmetic curb rash only</span>
        </div>
      </div>
    </section>
  );
}
