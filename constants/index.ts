import {
  Home,
  User,
  Heart,
  Code,
  BedIcon,
  HeartIcon,
  MessageCircle,
  Star,
  UserIcon,
} from "lucide-react";
import {
  FaInstagram,
  FaDiscord,
  FaGithub,
  FaReact,
  FaNode,
} from "react-icons/fa";
import { SiNextdotjs, SiOsu, SiTypescript } from "react-icons/si";

import type {
  NavItem,
  AnimeItem,
  SocialLink,
  InterestTag,
  AboutTab,
} from "@/types";

export const navItems: NavItem[] = [
  {
    icon: Home,
    size: 20,
    label: "主頁",
    id: "home",
  },
  {
    icon: User,
    size: 20,
    label: "關於",
    id: "about",
  },
  {
    icon: Heart,
    size: 20,
    label: "動漫天地",
    id: "anime",
  },
];

export const socialLinks: SocialLink[] = [
  {
    icon: SiOsu,
    href: "https://osu.ppy.sh/users/30500236",
    className: "text-accent-500 transition-colors duration-200",
    ariaLabel: "Visit my Osu profile",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/ryros_/",
    className: "text-accent-500 transition-colors duration-200",
    ariaLabel: "Follow me on Instagram",
  },
  {
    icon: FaDiscord,
    href: "https://discord.gg/your-permanent-invite",
    className: "text-primary-500 transition-colors duration-200",
    ariaLabel: "Connect with me on Discord",
  },
  {
    icon: FaGithub,
    href: "https://github.com/Ynoob87",
    className: "text-neutral-800 transition-colors duration-200",
    ariaLabel: "Check out my GitHub projects",
  },
];

export const commandAnimations = [
  'git commit -m "讓我們一起迷失吧"',
  "npm run life.js",
];

export const interestTags: InterestTag[] = [
  {
    icon: Code,
    text: "程式開發",
    iconColor: "text-primary-500",
    textColor: "text-primary-500",
  },
  {
    icon: Heart,
    text: "看動漫",
    iconColor: "text-accent-500",
    textColor: "text-accent-500",
  },
  {
    icon: BedIcon,
    text: "深度睡眠",
    iconColor: "text-secondary-500",
    textColor: "text-secondary-500",
  },
];

export const animeList: Record<string, AnimeItem[]> = {
  watched: [
    {
      title: "孤獨搖滾",
      rating: 5,
      comment: "",
      status: "watched",
    },
    {
      title: "烙印勇士",
      rating: 5,
      comment: "",
      status: "watched",
    },
    {
      title: "葬送的芙莉蓮",
      rating: 5,
      comment: "",
      status: "watched",
    },
    {
      title: "死神",
      rating: 5,
      comment: "",
      status: "watched",
    },
    {
      title: "進擊的巨人",
      rating: 5,
      comment: "",
      status: "watched",
    },
    {
      title: "K-ON！輕音部",
      rating: 5,
      comment: "",
      status: "watched",
    },
    {
      title: "夏洛特",
      rating: 5,
      comment: "",
      status: "watched",
    },
    {
      title: "莉可莉絲 Recoil",
      rating: 5,
      comment: "",
      status: "watched",
    },
    {
      title: "86 -不存在的戰區",
      rating: 5,
      comment: "",
      status: "watched",
    },
    {
      title: "JOJO的奇妙冒險",
      rating: 5,
      comment: "",
      status: "watched",
    },
    {
      title: "刀劍神域",
      rating: 5,
      comment: "",
      status: "watched",
    },
    {
      title: "無職轉生～到了異世界就拿出真本事～",
      rating: 5,
      comment: "",
      status: "watched",
    },
    {
      title: "肌肉魔法使",
      rating: 5,
      comment: "",
      status: "watched",
    },
    {
      title: "黑色五葉草",
      rating: 5,
      comment: "",
      status: "watched",
    },
    {
      title: "轉生公與天才千金的魔法革命",
      rating: 5,
      comment: "",
      status: "watched",
    },
    {
      title: "海賊王",
      rating: 5,
      comment: "",
      status: "watched",
    },
  ],
  watching: [
    {
      title: "死神-千年血戰篇",
      rating: 5,
      comment: "",
      status: "watching",
    },
    {
      title: "BanG Dream! It's MyGO!!!!!",
      rating: 5,
      comment: "",
      status: "watching",
    },
    {
      title: "哎咕島消失的舔甜歌姬",
      rating: 5,
      comment: "",
      status: "watching",
    },
  ],
};

/**
 * 定義卡片樣式的介面
 * @interface CardStyle
 * @property {string} base - 基礎樣式類名
 * @property {string} [hover] - 懸停樣式類名（可選）
 */
export interface CardStyle {
  base: string;
  hover?: string;
}

export const cardStyles = {
  default: {
    base: "rounded-xl bg-white/50 p-6 backdrop-blur-sm",
  },
  social: {
    base: "relative flex items-center justify-center rounded-full bg-white/50 p-2 backdrop-blur-sm transition-colors duration-200",
    hover: "hover:bg-white",
  },
} as const;

export const aboutTabs: AboutTab[] = [
  { id: "personality", label: "性格特質", icon: UserIcon },
  { id: "interests", label: "興趣愛好", icon: HeartIcon },
  { id: "notice", label: "雷點提醒", icon: Star },
];

export const personalityInfo = {
  communication: {
    title: "溝通風格",
    icon: MessageCircle,
    points: [
      "喜歡用顏文字和注音符號 (｀・ω・´)",
      "說話風格直白，經常講幹話發幹文",
      "討論喜歡的話題會特別興奮",
    ],
  },
  personality: {
    title: "個性特點",
    icon: Star,
    points: [
      "對喜歡的事物會非常投入",
      "熱愛學習新技術和知識",
      "偶爾會陷入自己的世界",
      "討論動漫或技術時特別興奮",
      "對不熟的人比較害羞 (在現實生活中)",
    ],
  },
};

export const aboutTags = [
  { text: "16歲", variant: "primary" as const },
  { text: "🎮 遊戲開發愛好者", variant: "secondary" as const },
  { text: "📺 動漫宅", variant: "accent" as const },
  { text: "🌐 中/英文交流", variant: "primary" as const },
];

export const projectData = {
  techStack: [
    {
      icon: FaReact,
      label: "React",
      color: "#61DAFB",
    },
    {
      icon: FaNode,
      label: "Node.js",
      color: "#339933",
    },
    {
      icon: SiTypescript,
      label: "TypeScript",
      color: "#3178C6",
    },
    {
      icon: SiNextdotjs,
      label: "Next.js",
      color: "#000000",
    },
  ],
  projects: [],
  categories: [],
};
