// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import React from "react";

import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "small R",
  description: "一位熱愛寫程式、玩遊戲、看動漫的五專生",
  keywords: ["程式開發", "遊戲", "動漫", "Next.js", "React"],
  openGraph: {
    title: "small R",
    description: "一位熱愛寫程式、玩遊戲、看動漫的五專生",
    siteName: "small R",
    locale: "zh_TW",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW" className={`scroll-smooth`}>
      <head>
        <link
          rel="preload"
          href="/Images/HeroAvatar.jpg"
          as="image"
          type="image/jpeg"
          fetchPriority="high"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="relative min-h-screen">
        <BackgroundGradient />
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}

const BackgroundGradient = () => (
  <div className="fixed inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-sky-100 to-amber-100" />
    <div className="absolute left-[5%] top-0 size-[300px] translate-y-[10%] rounded-full bg-gradient-to-br from-pink-400/35 to-pink-300/35 blur-2xl sm:size-[500px] sm:blur-3xl lg:size-[700px]" />
    <div className="absolute bottom-[5%] right-[5%] size-[300px] rounded-full bg-gradient-to-br from-blue-400/35 to-blue-300/35 blur-2xl sm:size-[500px] sm:blur-3xl lg:size-[700px]" />
    <div className="absolute left-1/2 top-1/2 size-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-yellow-400/15 to-yellow-300/15 blur-2xl sm:size-[600px] sm:blur-3xl lg:size-[900px]" />
  </div>
);
