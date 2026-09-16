import React from 'react';
import { Phone, MessageSquareText, ArrowUpRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { FAQS, BRAND } from '../data/mock';

const FAQ = () => (
  <section id="faq" className="bg-white py-16 md:py-20">
    <div className="mx-auto grid max-w-[1380px] gap-8 px-5 md:px-8 lg:grid-cols-12 lg:gap-14">
      <div className="lg:col-span-5 lg:py-4">
        <span className="text-[10px] font-black uppercase tracking-[.26em] text-[#b78520]">Questions, Answered</span>
        <h2 className="mt-4 font-display text-[46px] font-bold leading-[.95] tracking-[-.035em] text-[#111315] md:text-[66px]">Know before<br/><span className="text-[#b78520]">we arrive.</span></h2>
        <p className="mt-6 max-w-md text-[15px] leading-7 text-zinc-600">The fastest way to get an answer about your wheel is to send us a clear photo. We can review the damage and tell you the next step.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`sms:${BRAND.phoneTel}`} className="inline-flex items-center gap-2 rounded-lg bg-[#e8b94e] px-5 py-3.5 text-sm font-black text-[#111315] transition hover:bg-[#f0c765]"><MessageSquareText className="h-4 w-4"/>Text a Photo</a>
          <a href={`tel:${BRAND.phoneTel}`} className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-5 py-3.5 text-sm font-black text-[#111315] transition hover:border-[#d5a73f]"><Phone className="h-4 w-4"/>Call Us</a>
        </div>
        <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[.14em] text-[#9b711b]">Get Quote or Book Now <ArrowUpRight className="h-4 w-4"/></a>
      </div>
      <div className="overflow-hidden rounded-[24px] border border-zinc-200 bg-[#f7f6f2] px-5 py-1 md:px-8 lg:col-span-7">
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-zinc-200 last:border-0">
              <AccordionTrigger className="py-6 text-left text-[17px] font-extrabold tracking-tight text-[#111315] hover:text-[#9b711b] hover:no-underline md:text-[19px]">{f.q}</AccordionTrigger>
              <AccordionContent className="pb-6 text-[14px] leading-7 text-zinc-600">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQ;
