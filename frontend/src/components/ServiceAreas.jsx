import React from 'react';
import { MapPin } from 'lucide-react';
import { SERVICE_AREAS } from '../data/mock';

const ServiceAreas = () => (
  <section className="bg-[#EFE7D8] py-20 md:py-24">
    <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-10 items-start">
      <div className="lg:col-span-5">
        <span className="inline-block text-[11px] uppercase tracking-[0.28em] text-[#C15A3E] mb-4">Service Areas</span>
        <h2 className="font-serif-display text-[40px] md:text-[52px] leading-[1.05] font-semibold text-[#1A2327]">
          Serving Greater <span className="italic text-[#0E4A52]">Los Angeles</span>
        </h2>
        <p className="mt-4 text-[15px] text-[#4A4A44] max-w-sm">Mobile wheel repair delivered across 18+ neighborhoods — from Malibu to Pasadena and everywhere between.</p>
      </div>
      <div className="lg:col-span-7">
        <div className="flex flex-wrap gap-2">
          {SERVICE_AREAS.map((a, i) => (
            <span key={i} className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#E3D8C3] px-4 py-2 text-[13px] text-[#1A2327] hover:bg-[#0E4A52] hover:text-[#F6F1E8] hover:border-[#0E4A52] transition-colors">
              <MapPin className="w-3.5 h-3.5 text-[#C15A3E] group-hover:text-[#F6F1E8]" /> {a}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ServiceAreas;
