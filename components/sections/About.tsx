"use client";

import {
  Code,
  GamepadIcon,
  HeartIcon,
  MessageCircle,
  Star,
  TvIcon,
  UserIcon,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

import { socialLinks } from "@/constants";

interface TabItem {
  id: "personality" | "interests" | "notice";
  label: string;
  icon: React.ElementType;
}

interface InfoCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

interface TagProps {
  text: string;
  variant: "primary" | "secondary" | "accent";
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
    <div
      className="
        rounded-xl 
        border border-accent-100/20
        bg-white/40 p-6 
        shadow-[0_8px_30px_rgb(0,0,0,0.06)]
        backdrop-blur-md
        transition-all
        hover:bg-white/50
        hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]
      "
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="rounded-lg bg-accent-100/50 p-3 backdrop-blur-sm">
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
          <div className="relative flex size-12 items-center justify-center rounded-full bg-neutral-50/60 p-2 backdrop-blur-sm transition-all duration-200 ease-in-out hover:bg-neutral-100/80">
            <Icon
              className={`size-5 transition-transform duration-200 ease-in-out group-hover:rotate-3 group-hover:scale-110 ${item.className
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

export default function About() {
  const [activeTab, setActiveTab] = useState<TabItem["id"]>("personality");

  const tabs: TabItem[] = [
    { id: "personality", label: "性格特質", icon: UserIcon },
    { id: "interests", label: "興趣愛好", icon: HeartIcon },
    { id: "notice", label: "雷點注意", icon: Star },
  ];

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
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
                  className="size-full object-cover"
                  loading="eager"
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
                  <Tag text="🌟 16歲" variant="primary" />
                  <Tag text="🎮 遊戲開發愛好者" variant="secondary" />
                  <Tag text="📺 動漫宅" variant="accent" />
                  <Tag text="🌐 中/英文交流" variant="primary" />
                </div>
              </div>
              <div className="prose prose-neutral mx-auto max-w-none md:mx-0">
                <p className="text-center text-neutral-600 md:text-left">
                  一個愛看動漫的宅宅高中牲 (・ω・)！
                  生日02/15，平常除了寫程式，喜歡玩遊戲、追番，
                  最近在追的是葬送的芙莉蓮和孤獨搖滾！
                  最常在threads發幹文和分享有趣的事，
                  想認識同好，一起討論動漫和技術 ヽ(✿ﾟ▽ﾟ)ノ
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
            {tabs.map((tab, index) => {
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
              <InfoCard icon={MessageCircle} title="溝通風格">
                <div className="space-y-3 text-neutral-600">
                  <p>• 不熟的時候輕微社恐，熟了之後變成社交恐怖</p>
                  <p>• 喜歡用顏文字和注音符號 (｀・ω・´)</p>
                  <p>• 說話風格直白，經常講幹話發幹文</p>
                  <p>• 討論喜歡的話題會特別興奮</p>
                </div>
              </InfoCard>

              <InfoCard icon={Star} title="個性特點">
                <div className="space-y-3 text-neutral-600">
                  <p>• 對喜歡的事物會非常投入</p>
                  <p>• 熱愛學習新技術和知識</p>
                  <p>• 偶爾會陷入自己的世界</p>
                  <p>• 有點瘋癲(?</p>
                </div>
              </InfoCard>
            </div>
          )}

          {activeTab === "interests" && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <InfoCard icon={TvIcon} title="動漫愛好">
                <div className="space-y-4">
                  <div className="rounded-lg bg-white/30 p-3 backdrop-blur-sm">
                    <h4 className="mb-2 font-medium text-accent-300">
                      最愛作品
                    </h4>
                    <p className="text-justify text-neutral-600">
                      孤獨搖滾、葬送的芙莉蓮、死神
                    </p>
                  </div>
                  <div className="rounded-lg bg-white/30 p-3 backdrop-blur-sm">
                    <h4 className="mb-2 font-medium text-accent-300">
                      追番習慣
                    </h4>
                    <p className="text-justify text-neutral-600">
                      動畫瘋/YT/Netflix 不喜歡去追熱門動畫{"(除非真的很喜歡)"}
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
                  <p>• 重視互相尊重的交流氛圍</p>
                  <p>• 專注模式時可能會暫時消失</p>
                  <p>• 對不熟的人比較害羞</p>
                  <p>• 偶爾會進入肝專案模式</p>
                </div>
              </InfoCard>

              <InfoCard icon={Star} title="相處提示">
                <div className="space-y-3 text-neutral-600">
                  <p>• 變熟後會變得很瘋，喜歡吵你</p>
                  <p>• 熟了之後可能會傳幹片給你</p>
                  <p>• 討論動漫或技術時會特別興奮</p>
                  <p>• 喜歡分享有趣的事和迷因</p>
                </div>
              </InfoCard>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
