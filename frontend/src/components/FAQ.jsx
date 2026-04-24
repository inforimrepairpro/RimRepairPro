import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { FAQS } from '../data/mock';

const FAQ = () => (
  <section id="faq" className="bg-[#0a0a0b] py-20 md:py-28 border-t border-[#1e1d1b]">
    <div className="max-w-5xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-10">
      <div className="lg:col-span-5">
        <span className="inline-block text-[11px] uppercase tracking-[0.32em] text-[#E5A848] mb-5">FAQ</span>
        <h2 className="font-display text-[44px] md:text-[64px] leading-[0.95] font-bold text-[#F5F3EE]">
          Common <span className="gold-text">Questions</span>
        </h2>
        <p className="mt-4 text-[15px] text-[#8B8982] max-w-sm">
          Everything you need to know about our mobile wheel repair process. Still curious? Give us a call.
        </p>
      </div>
      <div className="lg:col-span-7">
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-[#1e1d1b]">
              <AccordionTrigger className="text-left text-[17px] md:text-[19px] font-semibold text-[#F5F3EE] hover:text-[#E5A848] py-5 hover:no-underline tracking-tight">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-[14.5px] leading-relaxed text-[#8B8982] pb-5">
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
