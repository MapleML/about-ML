"use client";

import { useTranslations } from "next-intl";
import React from "react";

import { useInView } from "@/hooks/useInView";


export default function Portfolio() {
  const [ref, inView, shouldAnimate] = useInView({ threshold: 0.2 });
  const t = useTranslations();

  return (
    <section id="portfolio" className="mt-16">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-4 ${
          inView ? (shouldAnimate ? "animate-slide-in" : "") : "opacity-0"
        }`}
      >
        <h1 className="mb-8 text-center text-4xl font-extrabold text-neutral-200">
          {t("portfolio")}
        </h1>
        
      </div>
    </section>
  );
}