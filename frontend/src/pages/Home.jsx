import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Process from '../components/Process';
import Reviews from '../components/Reviews';
import ServiceAreas from '../components/ServiceAreas';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import MobileActionBar from '../components/MobileActionBar';

const Home = () => (
  <div className="min-h-screen bg-[#08090a] pb-[68px] md:pb-0">
    <Navbar />
    <Hero />
    <Features />
    <Services />
    <Gallery />
    <section aria-label="Follow our wheel transformations on Instagram" className="bg-[#08090a] px-5 py-12 md:px-8 md:py-16">
      <div className="mx-auto flex max-w-[1380px] flex-col items-start justify-between gap-6 rounded-[24px] border border-[#e8b94e]/25 bg-gradient-to-br from-[#191919] to-[#0b0b0c] p-7 sm:p-10 md:flex-row md:items-center">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.2em] text-[#e8b94e]"><Instagram className="h-5 w-5" /> Follow our work</div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">See the transformation.</h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">Fresh wheel restorations, before &amp; after results, and luxury car projects from Rim Repair Pro.</p>
        </div>
        <a href="https://www.instagram.com/rimrepairpomobile/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-xl bg-[#e8b94e] px-6 py-4 text-sm font-extrabold text-[#111315] transition hover:bg-[#f4ca6b]"><Instagram className="h-5 w-5" /> Follow @rimrepairpomobile <ArrowUpRight className="h-4 w-4" /></a>
      </div>
    </section>
    <Process />
    <Reviews />
    <CTA />
    <ServiceAreas />
    <FAQ />
    <Footer />
    <MobileActionBar />
  </div>
);

export default Home;
