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
import MobileActionBar from '../components/MobileActionBar';

const Home = () => (
  <div className="min-h-screen bg-[#08090a] pb-[68px] md:pb-0">
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
    <MobileActionBar />
  </div>
);

export default Home;
