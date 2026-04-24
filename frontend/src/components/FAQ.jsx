import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { FAQS } from '../data/mock';

const FAQ = () => (
  <section id="faq" className="bg-[#F6F1E8] py-20 md:py-28">
    <div className="max-w-5xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-10">
      <div className="lg:col-span-5">
        <span className="inline-block text-[11px] uppercase tracking-[0.28em] text-[#C15A3E] mb-4">FAQ</span>
        <h2 className="font-serif-display text-[44px] md:text-[60px] leading-[1.02] font-semibold text-[#1A2327]">
          Common <span className="italic text-[#0E4A52]">questions</span>
        </h2>
        <p className="mt-4 text-[15px] text-[#4A4A44] max-w-sm">
          Everything you need to know about our mobile wheel repair process. Still curious? Give us a call.
        </p>
      </div>
      <div className="lg:col-span-7">
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-[#E3D8C3]">
              <AccordionTrigger className="text-left font-serif-display text-[18px] md:text-[20px] font-semibold text-[#1A2327] hover:text-[#C15A3E] py-5 hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-[14.5px] leading-relaxed text-[#4A4A44] pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQ;
