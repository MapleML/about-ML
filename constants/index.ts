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
  Camera,
  Computer,
  Square,
  Cuboid,
  Info,
} from "lucide-react";
import {
  FaInstagram,
  FaDiscord,
  FaGithub,
  FaReact,
  FaNode,
  FaCamera,
} from "react-icons/fa";
import { SiNextdotjs, SiOsu, SiTypescript } from "react-icons/si";

import type {
  NavItem,
  AnimeItem,
  SocialLink,
  InterestTag,
  AboutTab,
} from "@/types";
import { info } from "console";

export const navItems: NavItem[] = [
  {
    icon: Home,
    size: 20,
    label: "home",
    id: "home",
  },
  {
    icon: User,
    size: 20,
    label: "about",
    id: "about",
  },
  {
    icon: Camera,
    size: 20,
    label: "portfolio",
    id: "portfolio",
  },
];

export const socialLinks: SocialLink[] = [
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/ml___photo/?hl=zh-tw",
    className: "text-accent-500 transition-colors duration-200",
    ariaLabel: "Follow my photography account on Instagram",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/ml_chen_dev/?hl=zh-tw",
    className: "text-accent-500 transition-colors duration-200",
    ariaLabel: "Follow my personal account on Instagram",
  },
  {
    icon: FaGithub,
    href: "https://github.com/MapleML",
    className: "text-neutral-300 transition-colors duration-200",
    ariaLabel: "Check out my GitHub profile",
  },
/*  {
    icon: FaCamera,
    href: "https://photo.mapleml.xyz/",
    className: "text-neutral-800 transition-colors duration-200",
    ariaLabel: "check out my photography website",
  },*/
  
];

export const commandAnimations = [
  'abandon my life',
  "i wanna take a photo",
];

export const interestTags: InterestTag[] = [
  {
    icon: Code,
    text: "coding",
    iconColor: "text-autumn-200",
    textColor: "text-autumn-200",
  },
  {
    icon: Camera,
    text: "photography",
    iconColor: "text-autumn-400",
    textColor: "text-autumn-400",
  },
  {
    icon: Cuboid,
    text: "3D print",
    iconColor: "text-autumn-500",
    textColor: "text-autumn-500",
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
      title: "轉生公主與天才千金的魔法革命",
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
 * 定義卡片樣式的接口
 * @interface CardStyle
 * @property {string} base - 基本樣式類名
 * @property {string} [hover] - 滑鼠懸停樣式類名（可選）
 */
export interface CardStyle {
  base: string;
  hover?: string;
}

export const cardStyles = {
  default: {
    base: "rounded-xl bg-black/40 p-6 backdrop-blur-sm",
  },
  social: {
    base: "relative flex items-center justify-center rounded-full bg-black/40 p-2 backdrop-blur-sm transition-colors duration-200",
    hover: "hover:bg-white/20",
  },
} as const;

export const aboutTabs: AboutTab[] = [
 { id: "interests", label: "interests", icon: HeartIcon },
  { id: "personality", label: "notice", icon: Info },
  { id: "notice", label: "spoil", icon: Star },
];

export const personalityInfo = {
  communication: {
    title: "約拍注意事項",
    icon: Info,
    points: [
      "私訊'ML Photo'這隻instagram帳號",
      "只有調色跟微修圖",
      "使用Google 相簿返圖",
      "歡迎任何方式的修圖",
      "收費部分目前採施捨制(?",
      "若有發文請使用協作者",
    ],
  },
  personality: {
    title: "設備",
    icon: Camera,
    points: [
      "Nikon Z50",
      "外拍使用機頂閃(TT685 II)",
      "場次使用閃燈及補光燈",
      "部分使用黑柔鏡片",
      "(之後會有更多閃燈 現在沒錢)",
    ],
  },
};

export const aboutTags = [
  { text: "16", variant: "primary" as const },
  { text: "📷 photographer", variant: "secondary" as const },
  { text: "🌐 frontend", variant: "accent" as const },
  { text: " 🚮 garbage", variant: "primary" as const },
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
