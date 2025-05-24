"use client";

import { CameraIcon, Code, CodeIcon, CuboidIcon, GamepadIcon, HeartIcon, MessageCircle, Star, TvIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useTranslations } from 'next-intl';
import { useInView } from "@/hooks/useInView";

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
  variant: "primary" | "secondary" | "accent" | "autumn";
}

interface InfoCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

const Tag = ({ text, variant }: TagProps) => {
  const variants = {
    primary: "bg-primary-50/80 text-autumn-600 border border-autumn-100",
    secondary:"bg-secondary-50/80 text-autumn-600 border border-autumn-100",
    accent: "bg-accent-50/80 text-autumn-600 border border-autumn-100",
    autumn: "bg-autumn-200 text-autumn-800 border border-autumn-300", 
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
  const t = useTranslations();
  const [ref, inView, shouldAnimate, everInView] = useInView({ threshold: 0.2 });

  const activeColors = [
    "bg-autumn-200",
    "bg-autumn-300",
    "bg-autumn-500",
  ];

  return (
    <section id="about">
      <div
        ref={ref}
        className={`mx-auto flex max-w-6xl flex-col items-center ${
          everInView ? (shouldAnimate ? "animate-slide-in" : "") : "opacity-0"
        }`}
      >
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
                  {t("about_about")}
                </h2>
                <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                  {aboutTags.map((tag, index) => {
                    const displayText = tag.key ? `${tag.icon ?? ""} ${t(tag.key)}` : tag.text;
                    return (
                      <Tag key={index} text={displayText} variant={tag.variant} />
                    );
                  })}
                </div>
              </div>
              <div className="prose prose-neutral mx-auto max-w-none md:mx-0">
                <p className="text-center text-neutral-200 md:text-left">
               {t("about_about-me")}
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
              const label = t(tab.label); // 這裡直接用 t 取得翻譯

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
                  <span>{label}</span>
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
                title={t("about_notice_title1")}
              >
                <div className="space-y-3 text-neutral-200">
                  {personalityInfo.communication.points.map((key, index) => (
                    <p key={index}>• {t(key)}</p>
                  ))}
                </div>
              </InfoCard>
              <InfoCard
                icon={personalityInfo.personality.icon}
                title={t("about_notice_title2")}
              >
                <div className="space-y-3 text-neutral-200">
                  {personalityInfo.personality.points.map((key, index) => (
                    <p key={index}>• {t(key)}</p>
                  ))}
                </div>
              </InfoCard>
            </div>
          )}

          {activeTab === "interests" && (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
              <InfoCard icon={CameraIcon} title={t("about_photography")}>
                <div className="space-y-4">
                  <div className="rounded-lg bg-white/30 p-3 backdrop-blur-sm">
                    <h4 className="mb-2 font-medium text-autumn-300">
                      {t("about_photography_title1")}
                    </h4>
                    <p className="text-sm text-neutral-200">
                      {t("about_photography_content1")}
                    </p>
                  </div>
                  <div className="rounded-lg bg-white/30 p-3 backdrop-blur-sm">
                    <h4 className="mb-2 font-medium text-autumn-300">
                     {t("about_photography_title2")}
                    </h4>
                    <p className="text-sm text-neutral-200">
                   {t("about_photography_content2")}
                    </p>
                  </div>
                </div>
              </InfoCard>

              <InfoCard icon={CodeIcon} title={t("about_coding_website")}>
                <div className="space-y-4">
                  <div className="rounded-lg bg-white/30 p-3 backdrop-blur-sm">
                    <h4 className="mb-2 font-medium text-autumn-300">
                      {t("about_coding_website_title1")}
                    </h4>
                    <p className="text-sm text-neutral-200">
                      {t("about_coding_website_content1")}
                    </p>
                  </div>
                  <div className="rounded-lg bg-white/30 p-3 backdrop-blur-sm">
                    <h4 className="mb-2 font-medium text-autumn-300">{t("about_coding_website_title2")}</h4>
                    <p className="text-sm text-neutral-200">
                      {t("about_coding_website_content2")}
                    </p>
                  </div>
                </div>
              </InfoCard>

              <InfoCard icon={CuboidIcon} title={t("about_3D")}>
                <div className="space-y-4">
                  <div className="rounded-lg bg-white/30 p-3 backdrop-blur-sm">
                    <h4 className="mb-2 font-medium text-autumn-300">
                      {t("about_3D_title1")}
                    </h4>
                    <p className="text-sm text-neutral-200">
                      {t("about_3D_content1")}
                    </p>
                  </div>
                  <div className="rounded-lg bg-white/30 p-3 backdrop-blur-sm">
                    <h4 className="mb-2 font-medium text-autumn-300">
                       {t("about_3D_title2")}
                    </h4>
                    <p className="text-sm text-neutral-200">
                     {t("about_3D_content2")}
                    </p>
                  </div>
                </div>
              </InfoCard>

               <InfoCard icon={HeartIcon} title={t("about_anime")}>
                <div className="space-y-4">
                  <div className="rounded-lg bg-white/30 p-3 backdrop-blur-sm">
                    <h4 className="mb-2 font-medium text-autumn-300">
                      {t("about_anime_title1")}
                    </h4>
                    <p className="text-sm text-neutral-200">
                     {t("about_anime_content1")}
                    </p>
                  </div>
                  <div className="rounded-lg bg-white/30 p-3 backdrop-blur-sm">
                    <h4 className="mb-2 font-medium text-autumn-300">
                      {t("about_anime_title2")}
                    </h4>
                    <p className="text-sm text-neutral-200">
                     {t("about_anime_content2")}
                    </p>
                  </div>
                </div>
              </InfoCard>
            </div>
          )}

          {activeTab === "notice" && (
            <div className="grid gap-6 sm:grid-cols-2">
              <InfoCard icon={MessageCircle} title={t("about_boundaries_title1")}>
                <div className="space-y-3 text-neutral-200">
                  <p>• {t("about_boundaries_content1")}</p>
                  <p>• {t("about_boundaries_content2")}</p>
                </div>
              </InfoCard>

              <InfoCard icon={Star} title={t("might_annoy_you_title")}>
                <div className="space-y-3 text-neutral-200">
                  <p>• {t("might_annoy_1")}</p>
                  <p>• {t("might_annoy_2")}</p>
                  <p>• {t("might_annoy_3")} </p>
                </div>
              </InfoCard>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
