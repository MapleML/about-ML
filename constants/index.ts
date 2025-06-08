import {
  Home,
  User,
  Code,
  HeartIcon,
  Star,
  Camera,
  Cuboid,
  Info,
} from "lucide-react";
import { useTranslations } from 'next-intl';
import {
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaReact,
  FaNode,
  FaFacebook,
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";

import type {
  NavItem,
  SocialLink,
  noticeTags,
  AboutTab,
} from "@/types";


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
  {icon: FaFacebook,
    href: "https://www.facebook.com/maple.chen.906188",
    className: "text-primary-500 transition-colors duration-200",
    ariaLabel: "Follow my photography account on Facebook",
  },
  {icon: FaTwitter,
    href: "https://x.com/leafMaple18438",
    className: "text-primary-400 transition-colors duration-200",
    ariaLabel: "Follow my photography account on Twitter",
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
  }, */
  
];

export const commandAnimations = [
  'abandon my life',
  "i wanna take a photo",
];

export function usenoticeTags(): noticeTags[] {
  const t = useTranslations();

  return [
    {
      icon: Code,
      text: t("hero_coding"),
      iconColor: "text-autumn-200",
      textColor: "text-autumn-200",
    },
    {
      icon: Camera,
      text: t("hero_photography"),
      iconColor: "text-autumn-400",
      textColor: "text-autumn-400",
    },
    {
      icon: Cuboid,
      text: t("hero_3D-print"),
      iconColor: "text-autumn-500",
      textColor: "text-autumn-500",
    },
  ];
}


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
  { id: "favorite", label: "about_favorite", icon: HeartIcon },
  { id: "notice", label: "about_notice", icon: Info },
  { id: "boundaries", label: "about_boundaries", icon: Star },
];

export const personalityInfo = {
  communication: {
    title: "about_notice_title1", 
    icon: Info,
    points: [
      "about_notice_contact",
      "about_notice_editing",
      "about_notice_delivery",
      "about_notice_editing_policy",
      "about_notice_payment",
      "about_notice_posting",
    ],
  },
  personality: {
    title: "about_notice_title2",
    icon: Camera,
    points: [
      "about_notice_camera",
      "about_notice_flash",
      "about_notice_light",
      "about_notice_filter",
      "about_notice_future",
    ],
  },
};

export const aboutTags = [
  { text: "♈ 16", variant: "autumn" as const },
  { key: "about_tag_photography", icon: "📷", variant: "autumn" as const },
  { key: "about_tag_frontend", icon: "🌐", variant: "autumn" as const },
  { key: "about_tag_3D", icon: "🧱", variant: "autumn" as const },
  { key: "about_tag_garbdge", icon: "🚮", variant: "autumn" as const },
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
