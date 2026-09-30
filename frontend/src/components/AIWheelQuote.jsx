import React, { useEffect, useRef, useState } from 'react';
import { Camera, Upload, Sparkles, Car, Palette, CircleDot, Wrench, MapPin, Info, Send, ArrowRight, Phone } from 'lucide-react';

const PHONE = '17477170060';
const rows = [
  ['possible_vehicle', 'Possible vehicle', Car],
  ['finish', 'Visible finish', Palette],
  ['design', 'Design', CircleDot],
  ['damage', 'Damage', Wrench],
  ['location', 'Location', MapPin],
  ['suggested_repair', 'Suggested repair', Sparkles],
];

async function preparePhoto(file) {
  const url = URL.createObjectURL(file);
  try {
    const image = await new Promise((resolve, reject) => {
      const picture = new Image();
      picture.onload = () => resolve(picture);
      picture.onerror = () => reject(new Error('This photo could not be opened. Please choose a JPG, PNG or WebP.'));
      picture.src = url;
    });
    const scale = Math.min(1, 1600 / Math.max(image.naturalWidth, image.naturalHeight));
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
    canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
    const context = canvas.getContext('2d');
    if (!context) throw new Error('Please try another browser or text your photo to us.');
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    const data = canvas.toDataURL('image/jpeg', 0.85);
    if (data.length > 4200000) throw new Error('Please choose a smaller photo.');
    return data;
  } finally {
    URL.revokeObjectURL(url);
  }
}

export default function AIWheelQuote() {
  const [preview, setPreview] = useState('');
  const [stage, setStage] = useState('upload');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [vehicle, setVehicle] = useState('');
  const preparedImage = useRef('');
  const selection = useRef(0);
  const request = useRef(null);
  useEffect(() => () => { selection.current += 1; request.current?.abort(); }, []);

  async function chooseFile(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    event.target.value = '';
    const current = ++selection.current;
    request.current?.abort();
    preparedImage.current = '';
    setResult(null);
    setError('');
    setPreview('');
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type) || file.size > 20 * 1024 * 1024) {
      setError('Please choose a JPG, PNG or WebP photo under 20 MB.');
      setStage('error');
      return;
    }
    setStage('preparing');
    try {
      const image = await preparePhoto(file);
      if (current !== selection.current) return;
      preparedImage.current = image;
      setPreview(image);
      setStage('ready');
    } catch (problem) {
      if (current !== selection.current) return;
      setError(problem.message);
      setStage('error');
    }
  }

  async function analyze() {
    if (!preparedImage.current || stage === 'analyzing') return;
    const current = selection.current;
    const controller = new AbortController();
    request.current = controller;
    const timer = setTimeout(() => controller.abort(), 55000);
    setStage('analyzing');
    setError('');
    try {
      const response = await fetch('/api/analyze-wheel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: preparedImage.current }),
        signal: controller.signal,
      });
      if (!response.headers.get('content-type')?.includes('application/json')) throw new Error('The check is temporarily unavailable. Try again or text your photo to us.');
      const data = await response.json();
      if (!response.ok) throw new Error(data.detail || 'The photo could not be analyzed.');
      if (rows.some(([key]) => typeof data[key] !== 'string') || typeof data.is_wheel !== 'boolean') throw new Error('The check returned an incomplete profile. Please try again.');
      if (current !== selection.current) return;
      setResult(data);
      setStage('result');
    } catch (problem) {
      if (current !== selection.current) return;
      setError(problem.name === 'AbortError' ? 'The check took too long. Please retry or text your photo to us.' : problem.message);
      setStage('error');
    } finally {
      clearTimeout(timer);
    }
  }

  const message = [
    'Hi Rim Repair Pro! I would like a technician to review my wheel.',
    vehicle ? 'My vehicle: ' + vehicle : '',
    result ? 'AI visual profile (unconfirmed): ' + result.summary : '',
    result ? 'Visible finish: ' + result.finish : '',
    result ? 'Damage: ' + result.damage : '',
    'I will attach my wheel photo here. Please confirm the repair and quote.',
  ].filter(Boolean).join('\n');
  const smsHref = 'sms:+' + PHONE + '?&body=' + encodeURIComponent(message);
  const busy = stage === 'preparing' || stage === 'analyzing';

  return (
    <section id="ai-quote" className="bg-[#08090a] px-4 py-12 text-white md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            <span className="rounded bg-[#d9b96c] px-2 py-1 text-black">NEW</span> AI Wheel Check
          </div>
          <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl">Know your wheel.<br className="md:hidden" /> Understand the damage.</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/60 md:text-lg">Upload a photo for an AI wheel profile. Send it to our technician for confirmation.</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="flex flex-col overflow-hidden rounded-2xl border border-white/15 bg-white/[0.03]">
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Your photo</span>
              <Camera size={18} className="text-[#d9b96c]" aria-hidden="true" />
            </div>
            <div className="flex min-h-72 flex-1 items-center justify-center bg-black/30 p-4 md:min-h-96">
              {preview ? <img src={preview} alt="Your uploaded wheel for visual analysis" className="max-h-[480px] w-full object-contain" /> : (
                <div className="px-6 py-12 text-center">
                  <Camera size={48} strokeWidth={1} className="mx-auto mb-5 text-[#d9b96c]" aria-hidden="true" />
                  <p className="text-lg font-medium">Start with a clear wheel photo</p>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-white/50">Include the whole wheel and its damaged edge, in good light.</p>
                </div>
              )}
            </div>
            <div className="space-y-3 border-t border-white/10 p-5">
              <label className="relative flex cursor-pointer items-center justify-center gap-3 rounded-lg border border-[#d9b96c]/40 px-4 py-4 text-sm font-semibold text-[#e6c982] focus-within:ring-2 focus-within:ring-[#d9b96c]">
                <Upload size={18} aria-hidden="true" /> {preview ? 'CHOOSE ANOTHER PHOTO' : 'UPLOAD WHEEL PHOTO'}
                <input aria-label="Upload wheel photo" className="absolute inset-0 cursor-pointer opacity-0" type="file" accept="image/jpeg,image/png,image/webp" onChange={chooseFile} />
              </label>
              {(stage === 'ready' || (stage === 'error' && preview)) && (
                <button onClick={analyze} className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#d9b96c] px-4 py-4 text-sm font-bold text-black transition hover:bg-[#e6c982] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
                  <Sparkles size={18} aria-hidden="true" /> {stage === 'error' ? 'TRY AGAIN' : 'ANALYZE MY WHEEL'}
                </button>
              )}
              {busy && <p role="status" className="py-2 text-center text-sm text-[#e6c982]">{stage === 'preparing' ? 'Preparing your photo…' : 'Checking the wheel and visible damage…'}</p>}
              <p className="text-center text-xs text-white/40">JPG, PNG or WebP · Up to 20 MB</p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-5 md:p-7">
            <div className="mb-3 flex items-center gap-3 border-b border-white/10 pb-5">
              <CircleDot size={24} className="text-[#d9b96c]" aria-hidden="true" />
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em]">AI Wheel Profile</h2>
              {result && <span className="ml-auto rounded border border-[#d9b96c]/30 bg-[#d9b96c]/10 px-2 py-1 text-[10px] text-[#e6c982]">UNCONFIRMED</span>}
            </div>
            {stage === 'error' && <p role="alert" className="mb-4 rounded-lg border border-[#d9b96c]/25 bg-[#d9b96c]/5 p-4 text-sm leading-6 text-[#e6c982]">{error}</p>}
            {result && !result.is_wheel ? (
              <div className="py-12"><h3 className="text-xl font-medium">A clear wheel photo is needed</h3><p className="mt-3 text-sm leading-6 text-white/60">{result.summary}</p></div>
            ) : (
              <dl>
                {rows.map(([key, label, Icon]) => (
                  <div key={key} className="grid grid-cols-[20px_1fr] gap-x-3 border-b border-white/10 py-4 sm:grid-cols-[20px_145px_1fr]">
                    <Icon size={18} className="mt-1 text-white/50" aria-hidden="true" />
                    <dt className="text-sm leading-6 text-white/60">{label}</dt>
                    <dd className="col-start-2 mt-1 text-sm font-medium leading-6 sm:col-start-auto sm:mt-0">{result?.[key] || <span className="font-normal text-white/30">Awaiting your photo</span>}</dd>
                  </div>
                ))}
              </dl>
            )}
            {result?.requires_manual_review && <p className="mt-4 text-sm text-[#e6c982]">Please have a technician inspect this wheel before planning a repair.</p>}
            <div className="mt-5 flex items-start gap-3 text-xs leading-6 text-white/45">
              <Info size={17} className="mt-1 shrink-0 text-[#d9b96c]" aria-hidden="true" />
              <p>AI describes visible details only. Vehicle, finish and repair need technician confirmation. Paint code, wheel size and structural safety cannot be confirmed from this photo.</p>
            </div>
            <label className="mt-5 block text-xs text-white/60">Your vehicle (optional)
              <input value={vehicle} maxLength={100} onChange={event => setVehicle(event.target.value)} placeholder="e.g. 2020 BMW M4" className="mt-2 w-full rounded-lg border border-white/15 bg-black/30 px-3 py-3 text-sm text-white outline-none focus:border-[#d9b96c]" />
            </label>
          </div>
        </div>

        <a href={smsHref} className="mt-5 flex items-center justify-center gap-3 rounded-xl bg-[#d9b96c] px-5 py-5 text-center text-sm font-bold text-black transition hover:bg-[#e6c982] md:text-base">
          <Send size={20} aria-hidden="true" /> SEND PHOTO TO A TECHNICIAN <ArrowRight size={18} aria-hidden="true" />
        </a>
        <p className="mt-3 text-center text-xs text-white/45">Opens a text message. Attach your photo before sending.</p>
        <a href={'tel:+' + PHONE} className="mt-6 flex items-center justify-center gap-2 text-lg font-semibold text-white/80"><Phone size={18} className="text-[#d9b96c]" aria-hidden="true" /> (747) 717-0060</a>
        <p className="mt-4 text-center text-xs text-white/40">Mobile cosmetic wheel repair · Greater Los Angeles · No bent or cracked wheel repair</p>
      </div>
    </section>
  );
}
