import React, { useMemo, useState } from 'react';

const PHONE = '17477170060';
const API_BASE = '';

export default function AIWheelQuote() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');
  const [stage, setStage] = useState('upload');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [zip, setZip] = useState('');
  const [wheels, setWheels] = useState('1');

  const smsHref = useMemo(() => {
    const text = `Hi Rim Repair Pro! I used the AI Wheel Damage Check.\nAI result: ${result?.summary || 'Manual photo review requested'}\nEstimate: ${result?.estimate || 'manual review'}\nWheels: ${wheels}\nZIP: ${zip || 'not entered'}\nI will attach my wheel photo here. Please confirm the final quote and availability.`;
    return `sms:+${PHONE}?&body=${encodeURIComponent(text)}`;
  }, [result, wheels, zip]);

  const chooseFile = (event) => {
    const next = event.target.files?.[0];
    if (!next) return;
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(next.type) || next.size > 3 * 1024 * 1024) {
      setError('Please choose a JPG, PNG or WebP image smaller than 3 MB.');
      setStage('error');
      return;
    }
    setFile(next);
    setPreview(URL.createObjectURL(next));
    setResult(null);
    setError('');
    setStage('ready');
  };

  const analyze = async () => {
    if (!file) return;
    setStage('analyzing');
    setError('');

    try {
      const image = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(new Error('Could not read this photo. Please choose another image.'));
        reader.readAsDataURL(file);
      });
      const response = await fetch(`${API_BASE}/api/analyze-wheel`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ image }) });
      if (!response.headers.get('content-type')?.includes('application/json')) throw new Error('AI is temporarily unavailable. Please text your photo for a quote.');
      const data = await response.json();
      if (!response.ok) throw new Error(data.detail || 'AI analysis failed');
      setResult(data);
      setStage('result');
    } catch (e) {
      setError(e.message || 'AI analysis failed. Please text your photo for a manual quote.');
      setStage('error');
    }
  };

  const manualText = `sms:+${PHONE}?&body=${encodeURIComponent('Hi Rim Repair Pro! I would like a wheel repair quote. I will attach my wheel photo here.')}`;

  return (
    <section id="ai-quote" className="bg-[#08090a] px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white/70"><span className="mr-2 rounded bg-[#e8b94e] px-2 py-1 text-black">NEW</span>AI Wheel Damage Check</div>
          <h1 className="text-3xl font-black text-white md:text-5xl">Upload a wheel photo. Get a fast AI estimate.</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/60 md:text-lg">AI checks visible cosmetic curb rash and scratches. Final price is always confirmed by Rim Repair Pro.</p>
        </div>

        <div className="mx-auto mt-9 max-w-xl rounded-2xl border border-dashed border-white/20 bg-black/30 p-5 md:p-7">
          {preview ? <img src={preview} alt="Wheel damage preview" className="mb-5 max-h-72 w-full rounded-xl object-cover" /> : <div className="mb-5 flex h-40 items-center justify-center rounded-xl bg-white/5 text-5xl">📸</div>}
          <label className="block cursor-pointer rounded-xl bg-white px-5 py-4 text-center font-extrabold text-black">
            {file ? 'CHOOSE ANOTHER PHOTO' : 'UPLOAD WHEEL PHOTO'}
            <input className="hidden" type="file" accept="image/jpeg,image/png,image/webp" capture="environment" onChange={chooseFile} />
          </label>

          {stage === 'ready' && <button onClick={analyze} className="mt-3 w-full rounded-xl border border-white/20 bg-white/10 px-5 py-4 font-extrabold text-white">🤖 ANALYZE MY WHEEL</button>}
          {stage === 'analyzing' && <div className="mt-4 text-center text-sm font-bold text-white/70">AI is checking the wheel photo…</div>}

          {stage === 'result' && result && (
            <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5 text-white">
              <div className="text-xs font-bold uppercase tracking-widest text-white/50">AI preliminary estimate</div>
              <h3 className="mt-2 text-3xl font-black">{result.estimate === 'manual_review' ? 'Manual review' : result.estimate}</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">{result.summary}</p>
              <div className="mt-3 text-xs text-white/40">AI confidence: {result.confidence}% · This is not a structural or safety inspection.</div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <select value={wheels} onChange={(e) => setWheels(e.target.value)} className="rounded-xl border border-white/10 bg-black px-3 py-3 text-white"><option value="1">1 wheel</option><option value="2">2 wheels</option><option value="3">3 wheels</option><option value="4">4 wheels</option></select>
                <input value={zip} onChange={(e) => setZip(e.target.value.replace(/\D/g, '').slice(0, 5))} inputMode="numeric" placeholder="ZIP code" className="rounded-xl border border-white/10 bg-black px-3 py-3 text-white" />
              </div>
              <a href={smsHref} className="mt-5 block rounded-xl bg-white px-5 py-4 text-center font-black text-black">TEXT PHOTO — CONFIRM QUOTE</a>
            </div>
          )}

          {stage === 'error' && <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5 text-white"><p className="text-sm text-white/70">{error}</p><a href={manualText} className="mt-4 block rounded-xl bg-white px-5 py-4 text-center font-black text-black">TEXT PHOTO FOR MANUAL QUOTE</a></div>}
          <a href={`tel:+${PHONE}`} className="mt-4 block text-center text-sm font-bold text-white/60">or call (747) 717-0060</a>
          <p className="mt-4 text-center text-xs leading-5 text-white/35">AI estimate only. We repair cosmetic curb rash and scratches. We do not repair bent or cracked wheels.</p>
        </div>
      </div>
    </section>
  );
}
