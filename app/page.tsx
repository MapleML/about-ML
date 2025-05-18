'use client';
import React from "react";
import About from "@/components/sections/About";
import Anime from "@/components/sections/portfolio";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";


export default function Home() {
  // 假設你用自己定義的 i18n hook，或 client component 中使用 i18next-react


  return (
    <>
      <Hero />
      <About />
      <Anime />
      <Footer />
    </>
  );
}
