import Image from "next/image";
import React from "react";

import { commandAnimations, interestTags, socialLinks } from "@/constants";

import TypeWriter from "../TypeWriter";

const Avatar: React.FC = () => (
  <div className="relative aspect-square w-56 sm:w-72 md:w-80 lg:w-96">
    <div className="group relative size-full">
      <div className="relative size-full overflow-hidden rounded-full bg-neutral-50/30 shadow-lg backdrop-blur-sm">
        <Image
          src="/Images/HeroAvatar.jpg"
          alt="Hero Avatar"
          width={400}
          height={400}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
          className="size-full object-cover"
          loading="eager"
        />
      </div>

      {/* 使用自定義的配色方案來裝飾圓圈 */}
      <div className="absolute -right-3 -top-3 size-10 rounded-full bg-primary-400 shadow-lg sm:-right-5 sm:-top-5 sm:size-12 lg:size-14" />
      <div className="absolute -right-5 top-10 size-8 rounded-full bg-secondary-400 shadow-lg sm:-right-7 sm:top-12 sm:size-10 lg:size-12" />
      <div className="absolute -bottom-2 -left-2 size-9 rounded-full bg-accent-400 shadow-lg sm:-bottom-2 sm:-left-2 sm:size-11" />
    </div>
  </div>
);

const InterestTags: React.FC = () => (
  <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
    {interestTags.map((item, index) => {
      const Icon = item.icon;
      return (
        <span
          key={index}
          className="flex items-center rounded-2xl bg-neutral-50/60 px-4 py-2 text-base backdrop-blur-md transition-colors duration-200  sm:text-lg"
        >
          <Icon className={`mr-2 size-5 sm:size-6 ${item.iconColor}`} />
          <span className={item.textColor}>{item.text}</span>
        </span>
      );
    })}
  </div>
);

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
          <div className="relative flex size-14 items-center justify-center rounded-full bg-neutral-50/60 p-2 backdrop-blur-sm transition-all duration-200 ease-in-out hover:bg-neutral-100/80">
            <Icon
              className={`size-6 transition-transform duration-200 ease-in-out group-hover:rotate-3 group-hover:scale-110 ${item.className
                .split(" ")
                .filter((cls) => !cls.includes("w-") && !cls.includes("h-"))
                .join(" ")}`}
              aria-hidden="true"
            />
          </div>
        </a>
      );
    })}
  </div>
);

const SelfIntroduction: React.FC = () => (
  <div className="relative">
    <div className="rounded-2xl  bg-neutral-50/60 p-6 backdrop-blur-md">
      <p className="text-center text-base leading-relaxed text-neutral-700 sm:text-lg lg:text-left">
        目前是個五專資工學生，我最喜歡寫程式、玩遊戲、看動漫、聽音樂
        只想要過平靜的生活，因為我是個 Chill Guy
      </p>
    </div>
  </div>
);

export default function Hero() {
  return (
    <section id="home" className="min-h-screen">
      <div className="relative flex min-h-screen items-center justify-center px-4 pb-12 pt-24 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative order-1 flex items-center justify-center lg:order-2">
              <Avatar />
            </div>

            <div className="order-2 space-y-8 lg:order-1">
              <div className="space-y-4 text-center lg:text-left">
                <h1 className="font-serif text-3xl font-bold text-neutral-800 sm:text-4xl md:text-5xl lg:text-6xl">
                  I am{" "}
                  <span className="gradient-text from-accent-500 to-primary-500 bg-clip-text font-serif">
                    small R
                  </span>{" "}
                </h1>
                <div className="h-[1.5em] font-mono text-lg text-neutral-600 sm:text-xl md:text-2xl">
                  $ <TypeWriter words={commandAnimations} speed={100} />
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
