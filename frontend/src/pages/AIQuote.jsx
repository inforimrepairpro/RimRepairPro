import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import AIWheelQuote from '../components/AIWheelQuote';
import Footer from '../components/Footer';

export default function AIQuote() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'AI Wheel Repair Quote | Rim Repair Pro';
    window.scrollTo(0, 0);
    return () => { document.title = previousTitle; };
  }, []);
  return (
    <div className="min-h-screen bg-[#08090a]">
      <Navbar />
      <main className="pt-[72px] md:pt-[82px]">
        <div className="mx-auto max-w-5xl px-4 pt-8">
          <a href="/" className="text-sm font-bold text-[#e8b94e]">← Back to home</a>
        </div>
        <AIWheelQuote />
      </main>
      <Footer />
    </div>
  );
}
