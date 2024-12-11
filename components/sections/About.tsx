"use client";

import { Code, GamepadIcon, MessageCircle, Star, TvIcon } from "lucide-react";
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
    primary: "bg-primary-50/80 text-primary-600 border border-primary-100",
    secondary:
      "bg-secondary-50/80 text-secondary-600 border border-secondary-100",
    accent: "bg-accent-50/80 text-accent-600 border border-accent-100",
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
        <div className="rounded-lg bg-accent-100/50 p-3">
          <Icon className="size-5 text-accent-300" />
        </div>
        <h3 className="text-lg font-semibold text-accent-300">{title}</h3>
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
  const [activeTab, setActiveTab] = useState<AboutTab["id"]>("personality");

  return (
    <section
      id="about"
      className="mx-auto min-h-screen px-4 py-8 sm:py-12 md:py-16"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        {/* 個人資訊卡片 */}
        <div
          className="
          w-full rounded-2xl 
          border border-accent-100/20
          bg-white/40 p-4 
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
                bg-neutral-100 
                sm:w-32 md:w-40
              "
              >
                <Image
                  src="/Images/HeroAvatar.jpg"
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
                <h2 className="mb-4 text-center font-serif text-3xl font-bold text-neutral-800 md:text-left md:text-4xl">
                  About Me!
                </h2>
                <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                  {aboutTags.map((tag, index) => (
                    <Tag key={index} {...tag} />
                  ))}
                </div>
              </div>
              <div className="prose prose-neutral mx-auto max-w-none md:mx-0">
                <p className="text-center text-neutral-600 md:text-left">
                  一個愛看動漫的宅宅高中牲 (・ω・)！
                  生日02/15，平常除了寫程式，喜歡玩遊戲、看動漫，
                  最常在threads發幹文和分享有趣的事，
                  想認識同好，一起討論動漫或技術 ヽ(✿ﾟ▽ﾟ)ノ
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
            border border-accent-100/20
            bg-white/60 p-1.5
            shadow-sm backdrop-blur-md
          "
          >
            {aboutTabs.map((tab, index) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              const activeColors = [
                "bg-primary-300",
                "bg-secondary-200",
                "bg-accent-200",
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
                        : "text-neutral-600 hover:bg-white/80"
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
                <div className="space-y-3 text-neutral-600">
                  {personalityInfo.communication.points.map((point, index) => (
                    <p key={index}>• {point}</p>
                  ))}
                </div>
              </InfoCard>
              <InfoCard
                icon={personalityInfo.personality.icon}
                title={personalityInfo.personality.title}
              >
                <div className="space-y-3 text-neutral-600">
                  {personalityInfo.personality.points.map((point, index) => (
                    <p key={index}>• {point}</p>
                  ))}
                </div>
              </InfoCard>
            </div>
          )}

          {activeTab === "interests" && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <InfoCard icon={TvIcon} title="動漫偏好">
                <div className="space-y-4">
                  <div className="rounded-lg bg-white/30 p-3 backdrop-blur-sm">
                    <h4 className="mb-2 font-medium text-accent-300">
                      最愛作品
                    </h4>
                    <p className="text-justify text-neutral-600">
                      孤獨搖滾、葬送的芙莉蓮、死神、烙印勇士
                    </p>
                  </div>
                  <div className="rounded-lg bg-white/30 p-3 backdrop-blur-sm">
                    <h4 className="mb-2 font-medium text-accent-300">
                      追番習慣
                    </h4>
                    <p className="text-justify text-neutral-600">
                      動畫瘋/YT/Netflix 不喜歡去追熱門動畫 {"(除非真的很喜歡)"}
                      會熱度過才開始補，喜歡一次追完，但喜歡的作品又會捨不得看完
                      {"("}有點矛盾? 每看完一個自認為的神作就會陷入戒斷期
                    </p>
                  </div>
                </div>
              </InfoCard>

              <InfoCard icon={GamepadIcon} title="遊戲開發">
                <div className="space-y-4">
                  <div className="rounded-lg bg-white/30 p-3 backdrop-blur-sm">
                    <h4 className="mb-2 font-medium text-accent-300">
                      開發平台
                    </h4>
                    <p className="text-justify text-neutral-600">
                      專注於 Roblox 遊戲開發與接案服務，擅長運用 Roblox Studio
                      進行遊戲製作和客製化開發
                    </p>
                  </div>
                  <div className="rounded-lg bg-white/30 p-3 backdrop-blur-sm">
                    <h4 className="mb-2 font-medium text-accent-300">技能</h4>
                    <p className="text-justify text-neutral-600">
                      專精於 Roblox Studio
                      開發，主要專注於前後端整合、使用者介面設計與遊戲邏輯實作。具備完整的遊戲腳本開發經驗
                    </p>
                  </div>
                </div>
              </InfoCard>

              <InfoCard icon={Code} title="網頁開發">
                <div className="space-y-4">
                  <div className="rounded-lg bg-white/30 p-3 backdrop-blur-sm">
                    <h4 className="mb-2 font-medium text-accent-300">
                      技術興趣
                    </h4>
                    <p className="text-justify text-neutral-600">
                      正在學習 Next.js 和 Tailwind CSS
                    </p>
                  </div>
                  <div className="rounded-lg bg-white/30 p-3 backdrop-blur-sm">
                    <h4 className="mb-2 font-medium text-accent-300">目標</h4>
                    <p className="text-justify text-neutral-600">
                      想成為網頁全端工程師，持續學習中！
                    </p>
                  </div>
                </div>
              </InfoCard>
            </div>
          )}

          {activeTab === "notice" && (
            <div className="grid gap-6 sm:grid-cols-2">
              <InfoCard icon={MessageCircle} title="我的雷點">
                <div className="space-y-3 text-neutral-600">
                  <p>• 不尊重我的朋友</p>
                  <p>• 好像就沒其他的了?</p>
                </div>
              </InfoCard>

              <InfoCard icon={Star} title="可能雷你">
                <div className="space-y-3 text-neutral-600">
                  <p>• 變熟後會變得很瘋，喜歡吵你</p>
                  <p>• 熟了之後可能會傳一堆幹片給你</p>
                  <p>• 專注模式時可能會暫時消失</p>
                  <p>• 有點抽象(?</p>
                </div>
              </InfoCard>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
