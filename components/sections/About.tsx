"use client";

import { CameraIcon, Code, CodeIcon, CuboidIcon, GamepadIcon, MessageCircle, Star, TvIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";


import {
  socialLinks,
  cardStyles,
  aboutTabs,
  personalityInfo,
  aboutTags,
} from "@/constants";
import { cn } from "@/lib/utils";
import { AboutTab } from "@/types";

interface TagProps {
  text: string;
  variant: "primary" | "secondary" | "accent";
}

interface InfoCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

const Tag = ({ text, variant }: TagProps) => {
  const variants = {
    primary: "bg-primary-50/80 text-autumn-600 border border-autumn-100",
    secondary:
      "bg-secondary-50/80 text-autumn-600 border border-autumn-100",
    accent: "bg-accent-50/80 text-autumn-600 border border-autumn-100",
  };

  return (
    <span
      className={`
        rounded-full px-3 py-1 text-sm 
        backdrop-blur-sm 
        ${variants[variant]}
      `}
    >
      {text}
    </span>
  );
};

const InfoCard = ({ icon: Icon, title, children }: InfoCardProps) => {
  return (
    <div className={cardStyles.default.base}>
      <div className="mb-4 flex items-center gap-3">
        <div className="rounded-lg bg-neutral-500/50 p-3">
          <Icon className="size-5 text-autumn-300" />
        </div>
        <h3 className="text-lg font-semibold text-autumn-300">{title}</h3>
      </div>
      <div className="space-y-3">{children}</div>
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
          <div
            className={`${cardStyles.social.base} ${cardStyles.social.hover}`}
          >
            <Icon className={cn("size-5", item.className)} aria-hidden="true" />
          </div>
        </a>
      );
    })}
  </div>
);

export default function About() {
  const [activeTab, setActiveTab] = useState<AboutTab["id"]>("interests");


  return (
    <section
      id="about">
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        {/* 個人資訊卡片 */}
        <div
          className="
          w-full rounded-2xl 
          border border-neutral-800/10
          bg-black/40 p-4 
          shadow-[0_8px_30px_rgb(0,0,0,0.06)] 
          backdrop-blur-md
          sm:p-6 md:p-8
        "
        >
          <div className="grid gap-8 md:grid-cols-[240px,1fr]">
            {/* 左側：頭像和社交連結 */}
            <div
              className="
              flex flex-col items-center gap-6
              md:border-r md:border-accent-100/20 md:pr-8
            "
            >
              <div
                className="
                relative aspect-square w-28
                overflow-hidden rounded-full 
                bg-neutral-800 
                sm:w-32 md:w-40
              "
              >
                <Image
                  src="/Images/HeroAvatar2.jpg"
                  alt="Hero Avatar"
                  width={400}
                  height={400}
                  className="size-full object-cover"
                />
              </div>
              <SocialLinks />
            </div>

            {/* 右側：詳細介紹 */}
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="mb-4 text-center font-serif text-3xl font-bold text-neutral-400 md:text-left md:text-4xl">
                  About me
                </h2>
                <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                  {aboutTags.map((tag, index) => (
                    <Tag key={index} {...tag} />
                  ))}
                </div>
              </div>
              <div className="prose prose-neutral mx-auto max-w-none md:mx-0">
                <p className="text-center text-neutral-200 md:text-left">
                I like photography—portraits, cosplayers, street scenes, events, and so on. I also like programming, but I don't know how to code. I'm just useless. 
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 分類標籤 */}
        <div className="my-8 w-full max-w-md">
          <nav
            className="
            relative flex rounded-full
            border border-neutral-500/20
            bg-black/40 p-1.5
            shadow-sm backdrop-blur-md
          "
          >
            {aboutTabs.map((tab, index) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              const activeColors = [
                "bg-autumn-200",
                "bg-autumn-300",
                "bg-autumn-500",
              ];

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex flex-1 items-center justify-center gap-2
                    rounded-full px-3 py-2.5
                    text-sm font-medium
                    transition-all duration-300 ease-in-out
                    ${
                      isActive
                        ? `${activeColors[index % 3]} text-white shadow-sm`
                        : "text-neutral-300 hover:bg-black/50 "
                    }
                  `}
                >
                  <Icon className="size-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Tab 內容 */}
        <div className="grid w-full gap-6">
          {activeTab === "personality" && (
            <div className="grid gap-6 sm:grid-cols-2">
              <InfoCard
                icon={personalityInfo.communication.icon}
                title={personalityInfo.communication.title}
              >
                <div className="space-y-3 text-neutral-200">
                  {personalityInfo.communication.points.map((point, index) => (
                    <p key={index}>• {point}</p>
                  ))}
                </div>
              </InfoCard>
              <InfoCard
                icon={personalityInfo.personality.icon}
                title={personalityInfo.personality.title}
              >
                <div className="space-y-3 text-neutral-200">
                  {personalityInfo.personality.points.map((point, index) => (
                    <p key={index}>• {point}</p>
                  ))}
                </div>
              </InfoCard>
            </div>
          )}

          {activeTab === "interests" && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <InfoCard icon={CameraIcon} title="photography">
                <div className="space-y-4">
                  <div className="rounded-lg bg-white/30 p-3 backdrop-blur-sm">
                    <h4 className="mb-2 font-medium text-autumn-300">
                      Main subjects of photography
                    </h4>
                    <p className="text-sm text-neutral-200">
                      Portraits,coser,street.
                    </p>
                  </div>
                  <div className="rounded-lg bg-white/30 p-3 backdrop-blur-sm">
                    <h4 className="mb-2 font-medium text-autumn-300">
                      Learning content
                    </h4>
                    <p className="text-sm text-neutral-200">I mainly shoot cosplay photography and I'm still learning how to light properly — sadly, lighting gear isn't cheap, so feel free to support me!
                   
                    </p>
                  </div>
                </div>
              </InfoCard>

              <InfoCard icon={CodeIcon} title="website development">
                <div className="space-y-4">
                  <div className="rounded-lg bg-white/30 p-3 backdrop-blur-sm">
                    <h4 className="mb-2 font-medium text-autumn-300">
                      Next.js
                    </h4>
                    <p className="text-sm text-neutral-200">
                      I’m using Next.js to build my website, as well as some other sites currently in development.
                    </p>
                  </div>
                  <div className="rounded-lg bg-white/30 p-3 backdrop-blur-sm">
                    <h4 className="mb-2 font-medium text-autumn-300">Learning content</h4>
                    <p className="text-sm text-neutral-200">
                      do you know cytus 2? There's something in this game called the "iM system" — I'm currently working on it!
                    </p>
                  </div>
                </div>
              </InfoCard>

              <InfoCard icon={CuboidIcon} title="3D modeling and printing">
                <div className="space-y-4">
                  <div className="rounded-lg bg-white/30 p-3 backdrop-blur-sm">
                    <h4 className="mb-2 font-medium text-autumn-300">
                      Introduce
                    </h4>
                    <p className="text-sm text-neutral-200">
                      i'm learning to use 3d printer(FDM&SLA),and I used to use Onshape to make 3D models when I was in junior high school, but I've forgotten how to use it now...
                    </p>
                  </div>
                  <div className="rounded-lg bg-white/30 p-3 backdrop-blur-sm">
                    <h4 className="mb-2 font-medium text-autumn-300">Objective</h4>
                    <p className="text-sm text-neutral-200">
                      I hope to relearn 3D modeling and improve my post-processing skills when working with SLA printing.
                    </p>
                  </div>
                </div>
              </InfoCard>
            </div>
          )}

          {activeTab === "notice" && (
            <div className="grid gap-6 sm:grid-cols-2">
              <InfoCard icon={MessageCircle} title="我的雷點">
                <div className="space-y-3 text-neutral-200">
                  <p>• 我有什麼雷點?</p>
                </div>
              </InfoCard>

              <InfoCard icon={Star} title="可能雷你">
                <div className="space-y-3 text-neutral-200">
                  <p>• 很吵</p>
                  <p>• 會用一點點中國用語(例如:老師)</p>
                  <p>• 不經腦講話(正在改善)</p>
                </div>
              </InfoCard>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
