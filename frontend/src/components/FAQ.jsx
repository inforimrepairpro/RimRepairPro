import React from 'react';
import { Phone, MessageSquareText, ArrowUpRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { FAQS, BRAND } from '../data/mock';

const FAQ = () => (
  <section id="faq" className="bg-white py-14 md:py-20">
    <div className="mx-auto grid max-w-[1380px] gap-7 px-5 md:px-8 lg:grid-cols-12 lg:gap-14">
      <div className="lg:col-span-5 lg:py-4">
        <span className="text-[10px] font-black uppercase tracking-[.22em] text-[#b78520] sm:tracking-[.26em]">Questions, Answered</span>
        <h2 className="mt-3 font-display text-[40px] font-bold leading-[.95] tracking-[-.035em] text-[#111315] sm:mt-4 sm:text-[48px] md:text-[66px]">Know before<br/><span className="text-[#b78520]">we arrive.</span></h2>
        <p className="mt-5 max-w-md text-[14px] leading-6 text-zinc-600 sm:mt-6 sm:text-[15px] sm:leading-7">The fastest way to get an answer about your wheel is to send us a clear photo. We can review the damage and tell you the next step.</p>
        <div className="mt-6 grid gap-3 min-[430px]:grid-cols-2 sm:mt-8 sm:flex sm:flex-wrap">
          <a href={`sms:${BRAND.phoneTel}`} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-[#e8b94e] px-5 py-3.5 text-sm font-black text-[#111315] transition hover:bg-[#f0c765]"><MessageSquareText className="h-4 w-4"/>Text a Photo</a>
          <a href={`tel:${BRAND.phoneTel}`} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-5 py-3.5 text-sm font-black text-[#111315] transition hover:border-[#d5a73f]"><Phone className="h-4 w-4"/>Call Us</a>
        </div>
        <a href="#contact" className="mt-6 inline-flex min-h-11 items-center gap-2 text-[10px] font-black uppercase tracking-[.12em] text-[#9b711b] sm:mt-7 sm:text-[11px] sm:tracking-[.14em]">Get Quote or Book Now <ArrowUpRight className="h-4 w-4"/></a>
      </div>
      <div className="overflow-hidden rounded-[20px] border border-zinc-200 bg-[#f7f6f2] px-4 py-1 sm:px-5 md:rounded-[24px] md:px-8 lg:col-span-7">
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-zinc-200 last:border-0">
              <AccordionTrigger className="gap-4 py-5 text-left text-[16px] font-extrabold leading-6 tracking-tight text-[#111315] hover:text-[#9b711b] hover:no-underline sm:py-6 md:text-[19px]">{f.q}</AccordionTrigger>
              <AccordionContent className="pb-5 pr-2 text-[13px] leading-6 text-zinc-600 sm:pb-6 sm:text-[14px] sm:leading-7">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQ;
