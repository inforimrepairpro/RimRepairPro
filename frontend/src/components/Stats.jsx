import React, { useEffect, useRef, useState } from 'react';
import { STATS } from '../data/mock';

const useCounter = (target, duration = 2000, start = false) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min((t - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return val;
};

const StatItem = ({ value, suffix, label, trigger }) => {
  const current = useCounter(value, 1800, trigger);
  return (
    <div className="flex flex-col items-start gap-2">
      <div className="font-display text-[52px] md:text-[72px] leading-none font-bold gold-text">
        {current.toLocaleString()}{suffix}
      </div>
      <div className="text-[11px] md:text-[12px] uppercase tracking-[0.28em] text-[#8B8982]">{label}</div>
    </div>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.3 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <section ref={ref} className="relative bg-[#0a0a0b] border-y border-[#1e1d1b]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20 grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((s, i) => <StatItem key={i} {...s} trigger={visible} />)}
      </div>
    </section>
  );
};

export default Stats;
