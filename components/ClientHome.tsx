// components/ClientHome.tsx
'use client';

import React, { useEffect } from 'react';

import InstagramEmbed from '@/components/InstagramEmbed';
import About from '@/components/sections/About';
import Footer from '@/components/sections/Footer';
import Hero from '@/components/sections/Hero';
import Portfolio from '@/components/sections/portfolio';


export default function ClientHome() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // 可以安全使用 window
    }
  }, []);

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
