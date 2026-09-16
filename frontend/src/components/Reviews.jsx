import React from 'react';
import { Star, ExternalLink, Quote } from 'lucide-react';
import { TESTIMONIALS, GOOGLE_PROFILE_URL } from '../data/mock';

const Reviews = () => (
  <section id="reviews" className="scroll-mt-[82px] bg-[#0b0d0f] py-14 text-white md:py-20">
    <div className="mx-auto max-w-[1380px] px-5 md:px-8">
      <div className="grid items-end gap-6 border-b border-white/10 pb-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <span className="text-[10px] font-black uppercase tracking-[.24em] text-[#e8b94e]">Google Reviews</span>
          <h2 className="mt-3 font-display text-[40px] font-bold leading-[.95] sm:text-[48px] md:text-[64px]">What customers<br/><span className="text-[#e8b94e]">say about our work.</span></h2>
        </div>
        <div className="lg:col-span-5 lg:justify-self-end">
          <div className="flex items-center gap-3">
            <div className="text-[34px] font-black text-white">5.0</div>
            <div><div className="flex gap-0.5" aria-label="5 out of 5 stars">{[0,1,2,3,4].map((i) => <Star key={i} className="h-4 w-4 fill-[#e8b94e] text-[#e8b94e]" />)}</div><div className="mt-1 text-xs text-zinc-400">6 reviews on Google</div></div>
          </div>
          <a href={GOOGLE_PROFILE_URL} target="_blank" rel="noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-black text-[#e8b94e]">View on Google <ExternalLink className="h-4 w-4" /></a>
        </div>
      </div>

      <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((review, i) => (
          <article key={review.name} className={`relative flex flex-col rounded-[20px] border p-5 sm:p-6 ${i === 0 ? 'border-[#e8b94e]/40 bg-[#121518]' : 'border-white/10 bg-[#101214]'}`}>
            <Quote className="absolute right-5 top-5 h-8 w-8 text-[#e8b94e]/20" />
            <div className="pr-10">
              <div className="text-[17px] font-extrabold">{review.name}</div>
              <div className="mt-2 flex items-center gap-2"><div className="flex gap-0.5">{Array.from({ length: review.rating }).map((_, star) => <Star key={star} className="h-3.5 w-3.5 fill-[#e8b94e] text-[#e8b94e]" />)}</div><span className="text-[11px] text-zinc-500">{review.time}</span></div>
            </div>
            <p className="mt-5 text-[14px] leading-7 text-zinc-300">“{review.text}”</p>
            <div className="mt-auto pt-6 text-[9px] font-black uppercase tracking-[.18em] text-zinc-500">Google review</div>
          </article>
        ))}
      </div>

      <div className="mt-7 flex flex-col gap-4 rounded-xl border border-[#e8b94e]/20 bg-[#e8b94e]/10 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div><div className="font-extrabold">Read our customer feedback on Google</div><div className="mt-1 text-xs leading-5 text-zinc-400">These reviews are reproduced from customer reviews provided from the Rim Repair Pro Google profile.</div></div>
        <a href={GOOGLE_PROFILE_URL} target="_blank" rel="noreferrer" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#e8b94e] px-5 py-3 text-sm font-black text-[#111315]">Open Google Reviews <ExternalLink className="h-4 w-4" /></a>
      </div>
    </div>
  </section>
);

export default Reviews;
