"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";
import { useInView } from "react-intersection-observer";

import { usenoticeTags, socialLinks } from "@/constants";
import { cn } from "@/lib/utils";

import TypeWriter from "../TypeWriter";

const Avatar: React.FC = () => (
  <div className="animate-float-y relative aspect-square w-56 sm:w-72 md:w-80 lg:w-96">
    <div className="group relative size-full">
      {/* 外框漸層效果 */}
      <div className="animate-border-reveal absolute inset-0 rounded-full bg-gradient-to-r from-autumn-400 via-autumn-300 to-autumn-200 p-[5px]">
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

interface NoticeTag {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
  iconColor: string;
  textColor: string;
  key?: string;
}

const NoticeTags: React.FC = () => {
  const t = useTranslations();
  const tags = usenoticeTags();
  return (
    <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
      {tags.map((item, index) => {
        const Icon = item.icon;
        const itemWithKey = item as NoticeTag;
        const translatedText = itemWithKey.key ? t(itemWithKey.key) : item.text;

        return (
          <span
            key={index}
            className="flex items-center rounded-2xl bg-black/40 px-4 py-2 text-base backdrop-blur-sm sm:text-lg"
            role="status"
            aria-label={`notice: ${translatedText}`}
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
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`
        w-full rounded-2xl
        border border-neutral-800/10
        bg-black/40 p-2 
        shadow-[0_8px_30px_rgb(0,0,0,0.06)] 
        backdrop-blur-md
        sm:p-4 md:p-6
        transition-all duration-700
        ${inView ? "animate-slide-in" : "opacity-0"}
      `}
    >
      <p className="text-center text-base leading-relaxed text-neutral-200 sm:text-left">
        {t('hero_about')}
      </p>
    </div>
  );
};

export default function Hero() {
  const t = useTranslations();
  const localizedCommands = [t('hero_key1'), t('hero_key2')];

  const { ref: contentRef, inView: contentInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="home" className="px-5 sm:px-6">
      <div className="mx-auto w-full max-w-6xl flex flex-col items-center">
        <div className="relative flex min-h-screen items-center justify-center pb-12 pt-24">
          <div className="mx-auto w-full">
            <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
              {/* 圖片區塊 */}
              <div className="relative flex items-center justify-center">
                <Avatar />
              </div>

              {/* 右側內容區塊，這裡加動畫 */}
              <div
                ref={contentRef}
                className={`
                  space-y-8
                  transition-all duration-700
                  ${contentInView ? "animate-slide-in" : "opacity-0"}
                `}
              >
                <div className="space-y-4 text-center lg:text-left">
                  <h1 className="bg-gradient-to-r from-neutral-600 to-neutral-200 bg-clip-text font-serif text-3xl font-bold text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
                    I am{" "}
                    <span className="bg-gradient-to-r from-autumn-600 to-autumn-400 bg-clip-text font-serif text-transparent">
                      MapleML
                    </span>{" "}
                  </h1>
                  <div className="h-[1.5em] font-mono text-lg text-neutral-300 sm:text-xl md:text-2xl">
                    <TypeWriter words={localizedCommands} speed={100} />
                  </div>
                </div>
                <NoticeTags />
                <SelfIntroduction />
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}