import React from 'react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/mock';

const Testimonials = () => (
  <section id="reviews" className="bg-[#0a0a0b] py-20 md:py-28 relative border-t border-[#1e1d1b]">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(197,200,204,0.08),transparent_60%)] pointer-events-none" />
    <div className="relative max-w-7xl mx-auto px-5 md:px-8">
      <div className="max-w-2xl mb-14">
        <span className="inline-block text-[11px] uppercase tracking-[0.32em] text-[#C5C8CC] mb-5">Testimonials</span>
        <h2 className="font-display text-[48px] md:text-[72px] leading-[0.95] font-bold text-[#F5F3EE]">
          Client <span className="gold-text">Voices</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="relative rounded-[16px] p-8 border border-[#1e1d1b] bg-[#0f0f0f] hover:border-[#C5C8CC]/40 transition-colors">
            <Quote className="w-8 h-8 text-[#C5C8CC] mb-5" />
            <p className="text-[17px] leading-[1.5] text-[#F5F3EE]">“{t.quote}”</p>
            <div className="mt-6 flex items-center gap-1 text-[#C5C8CC]">
              {[0,1,2,3,4].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
            </div>
            <div className="mt-4 pt-4 border-t border-[#1e1d1b]">
              <div className="text-[15px] font-semibold text-[#F5F3EE]">{t.name}</div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-[#8B8982] mt-1">{t.car}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
