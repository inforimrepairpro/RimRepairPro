import React from 'react';
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

const Home = () => (
  <div className="min-h-screen bg-[#081526]">
    <Navbar />
    <Hero />
    <Features />
    <Services />
    <Gallery />
    <Process />
    <Reviews />
    <CTA />
    <ServiceAreas />
    <FAQ />
    <Footer />
  </div>
);

export default Home;
