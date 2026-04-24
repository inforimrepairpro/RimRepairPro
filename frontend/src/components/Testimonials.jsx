import React from 'react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/mock';

const Testimonials = () => (
  <section id="reviews" className="bg-[#0E4A52] text-[#F6F1E8] py-20 md:py-28 relative overflow-hidden grain-overlay">
    <div className="absolute inset-0 bg-gradient-to-b from-[#0E4A52] to-[#0A3B41] pointer-events-none" />
    <div className="relative max-w-7xl mx-auto px-5 md:px-8">
      <div className="max-w-2xl mb-14">
        <span className="inline-block text-[11px] uppercase tracking-[0.28em] text-[#EFB89A] mb-4">Testimonials</span>
        <h2 className="font-serif-display text-[44px] md:text-[64px] leading-[1.02] font-semibold">
          Client <span className="italic text-[#EFB89A]">voices</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="relative bg-[#F6F1E8]/5 backdrop-blur rounded-2xl p-7 border border-[#F6F1E8]/10 hover:border-[#C15A3E]/50 transition-colors">
            <Quote className="w-7 h-7 text-[#C15A3E] mb-4" />
            <p className="font-serif-display text-[18px] leading-[1.5] italic text-[#F6F1E8]">“{t.quote}”</p>
            <div className="mt-5 flex items-center gap-1 text-[#EFB89A]">
              {[0,1,2,3,4].map(s => <Star key={s} className="w-3.5 h-3.5 fill-current" />)}
            </div>
            <div className="mt-3 pt-4 border-t border-[#F6F1E8]/10">
              <div className="text-[14px] font-semibold">{t.name}</div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-[#F6F1E8]/60">{t.car}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
