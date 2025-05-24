"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { useInterestTags } from "@/constants";
import { socialLinks } from "@/constants";
import { cn } from "@/lib/utils";
import TypeWriter from "../TypeWriter";

const Avatar: React.FC = () => (
  <div className="relative aspect-square w-56 sm:w-72 md:w-80 lg:w-96 animate-float-y">
    <div className="group relative size-full">
      {/* 外框漸層效果 */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-autumn-400 via-autumn-300 to-autumn-200 p-[5px] animate-border-reveal">
        <div className="relative size-full overflow-hidden rounded-full bg-black/40 backdrop-blur-sm">
          <Image
            src="/Images/HeroAvatar.jpg"
            alt="Hero Avatar"
            width={1920}
            height={400}
            className="size-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
);

const InterestTags: React.FC = () => {
  const t = useTranslations();
  const tags = useInterestTags();
  return (
    <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
      
      {tags.map((item, index) => {
        const Icon = item.icon;
        // 使用類型斷言來訪問 key 屬性
        const itemWithKey = item as any;
        const translatedText = itemWithKey.key ? t(itemWithKey.key) : item.text;
        
        return (
          <span
            key={index}
            className="flex items-center rounded-2xl bg-black/40 px-4 py-2 text-base backdrop-blur-sm sm:text-lg"
            role="status"
            aria-label={`Interest: ${translatedText}`}
          >
            <Icon className={`mr-2 size-5 sm:size-6 ${item.iconColor}`} />
            <span className={item.textColor}>{translatedText}</span>
          </span>
        );
      })}
    </div>
  );
};

const SocialLinks: React.FC = () => (
  <div className="flex justify-center gap-5 lg:justify-start">
    {socialLinks.map((item) => {
      const Icon = item.icon;
      return (
        <a
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
          aria-label={
            item.ariaLabel || `Visit my ${item.href.split("/").slice(-1)[0]}`
          }
        >
          <div className="relative flex size-14 items-center justify-center rounded-full bg-black/40 p-2 backdrop-blur-sm transition-colors duration-200 hover:bg-white/20">
            <Icon className={cn("size-6", item.className)} aria-hidden="true" />
          </div>
        </a>
      );
    })}
  </div>
);

const SelfIntroduction: React.FC = () => {
  const t = useTranslations();

  return (
    <div className="relative">
      <div className="rounded-2xl bg-black/40 p-5 backdrop-blur-sm ">
        <p className="text-center text-base leading-relaxed text-neutral-200 sm:text-lg lg:text-left">
          {t('hero_about')}
        </p>
      </div>
    </div>
  );
};

export default function Hero() {
  const t = useTranslations();

  // 用你的翻譯鍵來組成 TypeWriter 的內容
  const localizedCommands = [
    t('hero_key1'),
    t('hero_key2')
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden animate-slide-in">
      <div className="relative flex min-h-screen items-center justify-center px-4 pb-12 pt-24 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
            {/* 圖片區塊 */}
            <div className="relative flex items-center justify-center">
              <Avatar />
            </div>

            {/* 文字內容區塊 */}
            <div className="space-y-8">
              <div className="space-y-4 text-center lg:text-left">
                <h1 className="font-serif text-3xl font-bold bg-gradient-to-r from-neutral-600 to-neutral-200 bg-clip-text text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
                  I am{" "}
                  <span className="bg-gradient-to-r from-autumn-600 to-autumn-400 bg-clip-text text-transparent font-serif">
                    MapleML
                  </span>{" "}
                </h1>
                <div className="h-[1.5em] font-mono text-lg text-neutral-300 sm:text-xl md:text-2xl">
                   <TypeWriter words={localizedCommands} speed={100} />
                </div>
              </div>

              <InterestTags />
              <SelfIntroduction />
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}