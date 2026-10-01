import React, { useMemo, useState } from 'react';
import { Bot, Camera, CalendarDays, MessageSquareText, Phone, Send, Sparkles, X } from 'lucide-react';
import { BRAND } from '../data/mock';

const AIAssistant = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({ damage:'', wheels:'', zip:'', time:'', name:'', phone:'' });
  const [input, setInput] = useState('');
  const questions = [
    ['damage','What happened to your wheel? You can describe curb rash, scratches, color damage, or another cosmetic issue.'],
    ['wheels','How many wheels need repair?'],
    ['zip','What ZIP code or service area is the vehicle in?'],
    ['time','What day or time works best for you?'],
    ['name','What is your name?'],
    ['phone','What phone number should Sargis use to contact you?'],
  ];
  const done = step >= questions.length;
  const saveAnswer = () => {
    if (!input.trim() || done) return;
    const key = questions[step][0];
    setAnswers(a => ({...a,[key]:input.trim()}));
    setInput(''); setStep(s => s + 1);
  };
  const leadText = useMemo(() => `NEW WEBSITE ASSISTANT LEAD\n\nCustomer: ${answers.name}\nPhone: ${answers.phone}\nDamage: ${answers.damage}\nWheels: ${answers.wheels}\nZIP / Area: ${answers.zip}\nPreferred time: ${answers.time}\n\nPlease review my wheel photos and contact me to confirm price and appointment.`, [answers]);
  const sendLead = () => { window.location.href = `sms:${BRAND.phoneTel}?body=${encodeURIComponent(leadText)}`; };
  const quick = (text) => { setInput(text); };

  return <>
    <button onClick={()=>setOpen(true)} className="fixed bottom-[82px] right-4 z-40 flex items-center gap-2 rounded-full border border-[#f0c65c]/50 bg-[#e8b94e] px-4 py-3 text-xs font-black text-black shadow-[0_12px_40px_rgba(0,0,0,.45)] md:bottom-6 md:right-6 md:px-5" aria-label="Open Rim Repair Pro assistant"><Sparkles className="h-4 w-4"/><span>Ask Rim Repair AI</span></button>
    {open && <div className="fixed inset-0 z-[80] flex items-end justify-end bg-black/40 p-0 md:p-6" onClick={()=>setOpen(false)}><div onClick={e=>e.stopPropagation()} className="flex h-[86vh] w-full flex-col overflow-hidden border border-[#e8b94e]/50 bg-[#0b0d0f] shadow-2xl md:h-[680px] md:max-h-[88vh] md:w-[410px] md:rounded-2xl">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-4"><div className="flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded-full border border-[#e8b94e]/50 bg-[#e8b94e]/10"><Bot className="h-5 w-5 text-[#e8b94e]"/></div><div><div className="text-sm font-black text-[#e8b94e]">RIM REPAIR PRO</div><div className="text-xs font-bold text-white">AI Assistant</div></div></div><button onClick={()=>setOpen(false)} className="p-2 text-zinc-400 hover:text-white"><X className="h-5 w-5"/></button></div>
      <div className="flex-1 space-y-4 overflow-y-auto p-4 text-sm"><div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-[#202326] p-4 leading-6 text-zinc-100">Hi 👋 I’m the Rim Repair Pro assistant. I’ll collect the details Sargis needs to review your wheel and contact you about price and scheduling.</div>
        {questions.slice(0,Math.min(step+1,questions.length)).map(([key,q],i)=><React.Fragment key={key}>{i<step && answers[key] && <div className="ml-auto max-w-[82%] rounded-2xl rounded-tr-sm bg-[#e8b94e] p-3 font-semibold text-black">{answers[key]}</div>}<div className={`max-w-[88%] rounded-2xl rounded-tl-sm bg-[#202326] p-4 leading-6 text-zinc-100 ${i===step&&!done?'':'hidden'}`}>{q}{key==='damage'&&<div className="mt-3 flex flex-wrap gap-2"><button onClick={()=>quick('Curb rash / scratches')} className="rounded-full border border-[#e8b94e]/40 px-3 py-1.5 text-xs text-[#e8b94e]">Curb rash</button><button onClick={()=>quick('Wheel color / finish damage')} className="rounded-full border border-[#e8b94e]/40 px-3 py-1.5 text-xs text-[#e8b94e]">Finish damage</button></div>}</div></React.Fragment>)}
        {done && <><div className="max-w-[92%] rounded-2xl rounded-tl-sm border border-[#e8b94e]/25 bg-[#171a1c] p-4 leading-6 text-zinc-100"><div className="font-black text-[#e8b94e]">Everything is ready ✓</div><div className="mt-2">Send these details to Rim Repair Pro. Sargis will review your information/photos and contact you to confirm the price and appointment.</div></div><button onClick={sendLead} className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#e8b94e] px-4 py-4 font-black text-black"><MessageSquareText className="h-5 w-5"/>Send Everything to Rim Repair Pro</button></>}
      </div>
      {!done && <div className="border-t border-white/10 p-3"><div className="flex gap-2"><input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==='Enter'&&saveAnswer()} placeholder="Type your answer..." className="min-w-0 flex-1 rounded-xl border border-white/15 bg-[#141719] px-4 py-3 text-sm text-white outline-none focus:border-[#e8b94e]"/><button onClick={saveAnswer} className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#e8b94e] text-black"><Send className="h-5 w-5"/></button></div><div className="mt-3 grid grid-cols-3 gap-2"><a href="/#contact" onClick={()=>setOpen(false)} className="flex flex-col items-center gap-1 rounded-lg border border-white/10 p-2 text-[10px] font-bold text-zinc-300"><Camera className="h-4 w-4 text-[#e8b94e]"/>Upload Photo</a><a href="/#contact" onClick={()=>setOpen(false)} className="flex flex-col items-center gap-1 rounded-lg border border-white/10 p-2 text-[10px] font-bold text-zinc-300"><CalendarDays className="h-4 w-4 text-[#e8b94e]"/>Quote / Book</a><a href={`tel:${BRAND.phoneTel}`} className="flex flex-col items-center gap-1 rounded-lg border border-white/10 p-2 text-[10px] font-bold text-zinc-300"><Phone className="h-4 w-4 text-[#e8b94e]"/>Call</a></div></div>}
    </div></div>}
  </>;
};
export default AIAssistant;
