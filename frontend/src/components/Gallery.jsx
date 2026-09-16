import React from 'react';
import { Camera } from 'lucide-react';
import { GALLERY } from '../data/mock';

const Gallery = () => (
  <section id="gallery" className="bg-white py-14 text-[#111315] md:py-20">
    <div className="mx-auto max-w-[1380px] px-5 md:px-8">
      <div className="mb-7 grid items-end gap-5 md:mb-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[.22em] text-[#b78520]"><Camera className="h-3.5 w-3.5"/>Real Work</span>
          <h2 className="mt-2 font-display text-[40px] font-bold leading-none sm:text-[48px] md:text-[62px]">Recent Wheel Work</h2>
        </div>
        <p className="text-sm leading-6 text-zinc-600 lg:col-span-5">A selection of wheels from Rim Repair Pro jobs around Greater Los Angeles.</p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {GALLERY.map((image, i) => (
          <a href="#contact" key={image} className={`group relative overflow-hidden rounded-xl bg-zinc-900 ${i === 0 || i === 7 ? 'sm:col-span-2' : ''}`}>
            <div className={`${i === 0 || i === 7 ? 'aspect-[16/10]' : 'aspect-square'}`}>
              <img src={image} alt={`Rim Repair Pro wheel work ${i + 1}`} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"/>
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-10 opacity-0 transition group-hover:opacity-100"><span className="text-[9px] font-black uppercase tracking-[.16em] text-[#e8b94e]">View · Get Quote</span></div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
