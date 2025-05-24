'use client';

import React from 'react';

import InstagramEmbed from '@/components/InstagramEmbed';
import About from '@/components/sections/About';
import Footer from '@/components/sections/Footer';
import Hero from '@/components/sections/Hero';
import Portfolio from '@/components/sections/portfolio';

export default function ClientHome() {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
        <InstagramEmbed />
      <Footer />
    </>
  );
}
