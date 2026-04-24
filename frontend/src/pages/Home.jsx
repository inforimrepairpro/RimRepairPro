import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Features from '../components/Features';
import BrandsTicker from '../components/BrandsTicker';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Pricing from '../components/Pricing';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import ServiceAreas from '../components/ServiceAreas';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home = () => (
  <div className="min-h-screen bg-[#F6F1E8]">
    <Navbar />
    <Hero />
    <Stats />
    <Features />
    <BrandsTicker />
    <Services />
    <Gallery />
    <Pricing />
    <Process />
    <Testimonials />
    <FAQ />
    <ServiceAreas />
    <CTA />
    <Footer />
  </div>
);

export default Home;
