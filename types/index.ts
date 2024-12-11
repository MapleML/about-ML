import { type LucideIcon } from "lucide-react";
import { type IconType } from "react-icons";

// NavBar Types
export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
  size?: number;
}

export interface ColorScheme {
  text: string;
  bg: string;
  border: string;
  hover: string;
  glow: string;
}

// PreviewCard Types
export interface TechStackItem {
  icon: IconType | LucideIcon;
  label: string;
  color?: string;
}

export interface ActionItem {
  icon: IconType | LucideIcon;
  label: string;
  href: string;
  color?: string;
}

export interface PreviewCardProps {
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt?: string;
  techStack?: TechStackItem[];
  actions?: ActionItem[];
  className?: string;
}

// TypeWriter Types
export interface TypeWriterProps {
  words: string[];
  speed?: number;
  delayAfterWord?: number;
  cursorCharacter?: string;
}

// About Types
export interface AboutTab {
  id: "personality" | "interests" | "notice";
  label: string;
  icon: LucideIcon;
}

export interface PersonalityInfo {
  communication: {
    title: string;
    icon: LucideIcon;
    points: string[];
  };
  personality: {
    title: string;
    icon: LucideIcon;
    points: string[];
  };
}

// Anime Types
export interface AnimeItem {
  title: string;
  rating?: number;
  comment?: string;
  status: "watched" | "watching";
}

// SocialLink Types
export interface SocialLink {
  icon: IconType;
  href: string;
  className?: string;
  ariaLabel?: string;
}

// InterestTag Types
export interface InterestTag {
  icon: LucideIcon;
  text: string;
  iconColor: string;
  textColor: string;
}
