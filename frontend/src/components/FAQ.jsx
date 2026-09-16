import React from 'react';
import { Phone, MessageSquareText } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { FAQS, BRAND } from '../data/mock';

const FAQ = () => (
  <section id="faq" className="bg-white py-20 md:py-28">
    <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-12 lg:gap-20">
      <div className="lg:col-span-5">
        <span className="text-[11px] uppercase tracking-[.3em] font-black text-[#176a76]">Questions, Answered</span>
        <h2 className="mt-5 font-display text-[48px] md:text-[68px] leading-[.95] font-bold tracking-[-.035em] text-[#081526]">Know before<br/><span className="text-[#2f7cff]">we arrive.</span></h2>
        <p className="mt-6 max-w-md text-[16px] leading-relaxed text-slate-600">The fastest way to get an answer about your wheel is to send us a clear photo. We can review the damage and tell you the next step.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`sms:${BRAND.phoneTel}`} className="inline-flex items-center gap-2 rounded-xl bg-[#2f7cff] px-5 py-3.5 text-sm font-black text-white"><MessageSquareText className="w-4 h-4"/>Text a Photo</a>
          <a href={`tel:${BRAND.phoneTel}`} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3.5 text-sm font-black text-[#081526]"><Phone className="w-4 h-4"/>Call Us</a>
        </div>
      </div>
      <div className="lg:col-span-7 rounded-[28px] bg-[#f7f3eb] px-6 md:px-8 py-2 border border-slate-200">
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-slate-200 last:border-0">
              <AccordionTrigger className="text-left text-[17px] md:text-[19px] font-bold text-[#081526] hover:text-[#2f7cff] py-6 hover:no-underline tracking-tight">{f.q}</AccordionTrigger>
              <AccordionContent className="text-[15px] leading-relaxed text-slate-600 pb-6">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQ;
