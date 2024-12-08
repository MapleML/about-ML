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
import { FaInstagram, FaDiscord, FaGithub } from "react-icons/fa";
import { SiOsu } from "react-icons/si";

export const navItems = [
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
  /* {
    icon: Code,
    size: 20,
    label: "程式天地",
    id: "code",
  }, */
];

export const socialLinks = [
  {
    icon: SiOsu,
    href: "https://osu.ppy.sh/users/30500236",
    className: "text-accent-500 transition-colors duration-200",
    ariaLabel: "Visit my Osu profile",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/ryros_/",
    className: "text-accent-500  transition-colors duration-200",
    ariaLabel: "Follow me on Instagram",
  },
  {
    icon: FaDiscord,
    href: "https://discord.gg/cG6PXRKe",
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

export const interestTags = [
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

export interface Anime {
  title: string;
  status: "watched" | "watching";
  rating?: number;
  comment?: string;
}

export const animeData = {
  watched: [
    {
      title: "孤獨搖滾",
      rating: 5,
      comment: "超級推薦！",
    },
    {
      title: "烙印勇士",
      rating: 5,
      comment: "黑暗奇幻神作",
    },
    {
      title: "葬送的芙莉蓮",
      rating: 5,
      comment: "溫馨治癒的奇幻冒險",
    },
    {
      title: "死神",
      rating: 5,
      comment: "經典熱血漫改",
    },
    {
      title: "進擊的巨人",
      rating: 4,
      comment: "震撼人心的故事",
    },
    {
      title: "K-ON！輕音部",
      rating: 5,
      comment: "京阿尼的青春日常神作",
    },
    {
      title: "夏洛特",
      rating: 4,
      comment: "劇情反轉的超能力作品",
    },
    {
      title: "莉可莉絲 Recoil",
      rating: 4,
      comment: "精彩的槍戰動作",
    },
    {
      title: "86 -不存在的戰區",
      rating: 5,
      comment: "震撼人心的戰爭故事",
    },
    {
      title: "JOJO的奇妙冒險",
      rating: 5,
      comment: "獨特魅力的熱血冒險",
    },
    {
      title: "刀劍神域",
      rating: 4,
      comment: "開創性的異世界作品",
    },
    {
      title: "無職轉生～到了異世界就拿出真本事～",
      rating: 4,
      comment: "優秀的異世界作品",
    },
    {
      title: "肌肉魔法使",
      rating: 4,
      comment: "有趣的搞笑作品",
    },
    {
      title: "黑色五葉草",
      rating: 4,
      comment: "熱血的魔法冒險",
    },
    {
      title: "轉生公主與天才千金的魔法革命",
      rating: 4,
      comment: "有趣的百合魔法故事",
    },
    {
      title: "海賊王",
      rating: 5,
      comment: "不朽的冒險傳奇",
    },
  ].map((item) => ({ ...item, status: "watched" as const })),

  watching: [
    {
      title: "死神-千年血戰篇",
      rating: 4,
      comment: "經典回歸",
    },
    {
      title: "BanG Dream! It's MyGO!!!!!",
      rating: 4,
      comment: "搖滾樂團的青春故事",
    },
    {
      title: "哎咕島消失的舔甜歌姬",
      rating: 4,
      comment: "有趣的音樂冒險",
    },
  ].map((item) => ({
    ...item,
    status: "watching" as const,
    rating: item.rating,
    comment: item.comment,
  })),
};

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

export interface AboutTab {
  id: "personality" | "interests" | "notice";
  label: string;
  icon: React.ElementType;
}

export const aboutTabs: AboutTab[] = [
  { id: "personality", label: "性格特質", icon: UserIcon },
  { id: "interests", label: "興趣愛好", icon: HeartIcon },
  { id: "notice", label: "雷點注意", icon: Star },
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
      "討論動漫或技術時會特別興奮",
      "對不熟的人比較害羞 (在現實生活中)",
    ],
  },
};

export const aboutTags = [
  { text: "🌟 16歲", variant: "primary" as const },
  { text: "🎮 遊戲開發愛好者", variant: "secondary" as const },
  { text: "📺 動漫宅", variant: "accent" as const },
  { text: "🌐 中/英文交流", variant: "primary" as const },
];
