import React from 'react';
import { SERVICE_AREAS } from '../data/mock';

const ServiceAreas = () => (
  <section className="bg-[#0a0a0b] py-20 md:py-24 border-t border-[#1e1d1b]">
    <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-10 items-start">
      <div className="lg:col-span-5">
        <span className="inline-block text-[11px] uppercase tracking-[0.32em] text-[#C5C8CC] mb-5">Service Areas</span>
        <h2 className="font-display text-[40px] md:text-[56px] leading-[1.0] font-bold text-[#F5F3EE]">
          Serving Greater <span className="gold-text">Los Angeles</span>
        </h2>
      </div>
      <div className="lg:col-span-7">
        <div className="flex flex-wrap gap-2">
          {SERVICE_AREAS.map((a, i) => (
            <span key={i} className="inline-flex items-center rounded-full border border-[#1e1d1b] bg-[#0f0f0f] px-4 py-2 text-[13px] text-[#F5F3EE] hover:border-[#C5C8CC] hover:text-[#C5C8CC] transition-colors cursor-default">
              {a}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ServiceAreas;
