import type { Metadata } from "next";
import React from "react";

import "./globals.css";

import CustomCursor from "@/components/CustomCursor";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "MapleML's Web|MapleML的個人網站",
  description: "a 16 years photographer & programmer from taiwan.",
   keywords: ["MapleML", "前端開發", "攝影", "台灣", "高中生","photographey", "program", "Next.js", "React"],
  openGraph: {
    title: "MapleML's Web|MapleML的個人網站",
    description: "a 16 years photographer & programmer from taiwan.",
    siteName: "MapleML's Web|MapleML的個人網站",
    type: "website",
    url: "https://me.mapleml.xyz",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <CustomCursor />
        <BackgroundGradient />
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}

const BackgroundGradient = () => (
  <div className="fixed inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-br dark:from-gray-800 dark:via-gray-700 dark:to-gray-600" />
    <div className="absolute -left-1/4 top-1/4 size-96 rounded-full bg-autumn-200/20 blur-3xl" />
    <div className="absolute -right-1/4 top-1/2 size-96 rounded-full bg-autumn-300/20 blur-3xl" />
    <div className="absolute bottom-1/4 left-1/2 size-96 -translate-x-1/2 rounded-full bg-autumn-500/20 blur-3xl" />
  </div>
);