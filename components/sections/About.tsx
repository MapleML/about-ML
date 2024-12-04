"use client";

import {
  Code2,
  Gamepad,
  HeartIcon,
  MessageCircle,
  Star,
  Tv,
  User,
} from "lucide-react";
import React, { useState, useCallback, memo } from "react";

interface TabItem {
  id: "personality" | "interests" | "notice";
  label: string;
  icon: React.ElementType;
}

interface TagProps {
  text: string;
  icon?: React.ElementType;
  className?: string;
}

interface CardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent";
}

const Tag = memo(({ text, icon: Icon, className = "" }: TagProps) => (
  <div
    className={`
    inline-flex items-center gap-2 
    rounded-full bg-neutral-50/60 px-4 py-2
    text-sm text-neutral-700 shadow-sm backdrop-blur-sm 
    ${className}
  `}
  >
    {Icon && <Icon className="size-4" />}
    {text}
  </div>
));
Tag.displayName = "Tag";

const Card = memo(
  ({ icon: Icon, title, children, variant = "primary" }: CardProps) => {
    const variants = {
      primary: {
        wrapper: "bg-primary-50/60",
        icon: "text-primary-500",
        title: "text-primary-800",
      },
      secondary: {
        wrapper: "bg-secondary-50/60",
        icon: "text-secondary-500",
        title: "text-secondary-800",
      },
      accent: {
        wrapper: "bg-accent-50/60",
        icon: "text-accent-500",
        title: "text-accent-800",
      },
    };

    return (
      <div
        className={`
      rounded-xl ${variants[variant].wrapper} 
      p-6 shadow-sm backdrop-blur-lg
    `}
      >
        <div className="mb-4 flex items-center gap-3">
          <div className={`rounded-lg p-3 ${variants[variant].icon}`}>
            <Icon className="size-5" />
          </div>
          <h3 className={`text-lg font-semibold ${variants[variant].title}`}>
            {title}
          </h3>
        </div>
        <div className="space-y-3">{children}</div>
      </div>
    );
  }
);
Card.displayName = "Card";

export default function About() {
  const [activeTab, setActiveTab] = useState<TabItem["id"]>("personality");

  const handleTabChange = useCallback((tabId: TabItem["id"]) => {
    setActiveTab(tabId);
  }, []);

  const tabs: TabItem[] = [
    { id: "personality", label: "性格特質", icon: User },
    { id: "interests", label: "興趣愛好", icon: HeartIcon },
    { id: "notice", label: "注意事項", icon: Star },
  ];

  return (
    <section id="about" className="min-h-screen py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="gradient-text mb-6 from-accent-500 to-primary-500 bg-clip-text font-serif text-4xl sm:text-5xl">
            關於我 | About me
          </h2>
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            <Tag text="🌟 座標北部" />
            <Tag text="🎓 16y | 五專生" />
            <Tag text="💻 資訊工程系" />
            <Tag text="🌐 中/英文交流" />
          </div>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-600">
            熱愛程式開發的學生，專注於網頁與遊戲開發，期待用技術創造有趣的數位體驗。
          </p>
        </div>

        <div className="mb-12 flex justify-center">
          <nav className="flex gap-2 rounded-xl bg-white/80 p-1.5 shadow-sm backdrop-blur-sm">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`
                    flex items-center gap-2 rounded-lg px-3 py-2 md:px-10
                    ${
                      isActive
                        ? "bg-primary-500 text-white"
                        : "text-neutral-600"
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

        <div className="grid gap-6">
          {activeTab === "personality" && (
            <div className="grid gap-6 md:grid-cols-2">
              <Card icon={MessageCircle} title="溝通風格">
                <div className="space-y-3 text-neutral-600">
                  <p>• 不熟的時候輕微社恐，熟了之後變成社交恐怖</p>
                  <p>• 會使用注音，和顏文字</p>
                  <p>• 講話有時較為直接，且幹話很多</p>
                </div>
              </Card>
              <Card icon={Code2} title="學習特質" variant="secondary">
                <div className="space-y-3 text-neutral-600">
                  <p>• 對程式開發充滿熱情，喜歡鑽研新技術</p>
                  <p>• 擅長自主學習，喜歡透過實作提升技能</p>
                  <p>• 享受解決問題的過程，重視程式品質</p>
                </div>
              </Card>
            </div>
          )}

          {activeTab === "interests" && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card icon={Gamepad} title="遊戲開發" variant="primary">
                <div className="space-y-4">
                  <div className="rounded-lg p-3">
                    <h4 className="mb-2 font-medium text-primary-600">
                      專長領域
                    </h4>
                    <p className="text-neutral-600">
                      Roblox 遊戲開發，擅長使用 Lua/Luau 進行程式設計
                    </p>
                  </div>
                  <div className="rounded-lg p-3">
                    <h4 className="mb-2 font-medium text-primary-600">
                      開發經驗
                    </h4>
                    <p className="text-neutral-600">
                      4-5年開發經驗，完成多個小型接案
                    </p>
                  </div>
                </div>
              </Card>

              <Card icon={Code2} title="網頁開發" variant="secondary">
                <div className="space-y-4">
                  <div className="rounded-lg p-3">
                    <h4 className="mb-2 font-medium text-secondary-600">
                      技術堆疊
                    </h4>
                    <p className="text-neutral-600">
                      Next.js、React、Tailwind CSS、TypeScript
                    </p>
                  </div>
                  <div className="rounded-lg p-3">
                    <h4 className="mb-2 font-medium text-secondary-600">
                      學習中
                    </h4>
                    <p className="text-neutral-600">
                      持續提升全端開發技能，專注於現代化網頁技術
                    </p>
                  </div>
                </div>
              </Card>

              <Card icon={Tv} title="動漫與音樂" variant="accent">
                <div className="space-y-4">
                  <div className="rounded-lg p-3">
                    <h4 className="mb-2 font-medium text-accent-600">
                      最愛作品
                    </h4>
                    <p className="text-neutral-600">
                      孤獨搖滾、葬送的芙莉蓮、死神
                    </p>
                  </div>
                  <div className="rounded-lg p-3">
                    <h4 className="mb-2 font-medium text-accent-600">
                      音樂偏好
                    </h4>
                    <p className="text-neutral-600">J-POP、動漫音樂</p>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {activeTab === "notice" && (
            <div className="grid gap-6 md:grid-cols-2">
              <Card
                icon={MessageCircle}
                title="溝通提醒 (我的雷點)"
                variant="secondary"
              >
                <div className="space-y-3 text-neutral-600">
                  <p>• 重視互相尊重的交流氛圍</p>
                  <p>• 專注模式時可能會暫時消失</p>
                </div>
              </Card>

              <Card icon={Star} title="相處提示 (可能會雷)" variant="accent">
                <div className="space-y-3 text-neutral-600">
                  <p>• 變熟後會變得很瘋，喜歡吵你</p>
                  <p>• 熟了之後可能會傳幹片給你</p>
                  <p>• 討論技術話題時可能會很興奮</p>
                  <p>• 重視團隊合作與知識分享</p>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
