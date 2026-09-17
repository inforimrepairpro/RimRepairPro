import React from 'react';
import { Phone, MessageSquareText, CalendarDays } from 'lucide-react';
import { BRAND } from '../data/mock';

const trackPhoneConversion = () => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', { send_to: 'AW-18180382680/bNoPCIrCz9YcENi_it1D' });
  }
};

const MobileActionBar = () => (
  <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#e8b94e]/20 bg-[#08090a]/95 p-2 pb-[calc(.5rem+env(safe-area-inset-bottom))] shadow-[0_-12px_35px_rgba(0,0,0,.45)] backdrop-blur-xl md:hidden">
    <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
      <a href={`tel:${BRAND.phoneTel}`} onClick={trackPhoneConversion} className="flex min-h-12 items-center justify-center gap-1.5 rounded-xl bg-[#e8b94e] px-2 text-[11px] font-black uppercase tracking-wide text-[#111315]"><Phone className="h-4 w-4"/>Call</a>
      <a href={`sms:${BRAND.phoneTel}`} className="flex min-h-12 items-center justify-center gap-1.5 rounded-xl border border-[#e8b94e]/40 bg-[#e8b94e]/10 px-2 text-[11px] font-black uppercase tracking-wide text-[#e8b94e]"><MessageSquareText className="h-4 w-4"/>Text</a>
      <a href="#contact" className="flex min-h-12 items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/[.06] px-2 text-[11px] font-black uppercase tracking-wide text-white"><CalendarDays className="h-4 w-4"/>Book</a>
    </div>
  </div>
);

export default MobileActionBar;
