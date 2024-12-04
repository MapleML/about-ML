import { Home, User, Heart, Code, BedIcon } from "lucide-react";
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
  /* {
    icon: Heart,
    size: 20,
    label: "動漫天地",
    id: "anime",
  },
  {
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
    href: "https://discord.com/users/701010059743854622",
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
