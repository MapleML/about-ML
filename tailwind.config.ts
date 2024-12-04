import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        // 藍色系列
        // 我們從最淺色開始，逐漸加深。這個漸進可以創造出自然的視覺層次
        primary: {
          // 50: 最淺色，通常用於背景、hover 狀態的背景等
          50: "#F0F7FF",
          // 100: 稍微深一點，適合用於邊框、分隔線
          100: "#E0EDFF",
          // 200: 中淺色，適合用於次要元素的背景
          200: "#BAD6FF",
          // 300: 中等深淺，可用於次要文字
          300: "#8ABBFF",
          // 400: 中深色，常用於 hover 狀態的文字
          400: "#4A9BFF",
          // 500: 主要顏色，用於主要文字和重要元素
          500: "#0070F3",
          // 600: 深色，用於強調和重要文字
          600: "#0055CC",
        },

        // 琥珀色系列
        // 作為輔助色系，用於警告、提示等情況
        secondary: {
          50: "#FFF8E6",
          100: "#FFEDC2",
          200: "#FFD579",
          300: "#FFBC3D",
          400: "#FFA600",
          500: "#F49D1A",
          600: "#DB8A00",
        },

        // 粉色系列
        // 用於強調和特殊元素，為界面添加活力
        accent: {
          50: "#FFF0F7",
          100: "#FFE3EF",
          200: "#FFB8D9",
          300: "#FF8CC4",
          400: "#FF5CAE",
          500: "#FF0080",
          600: "#DB006B",
        },

        // 中性色系列
        // 用於文字、背景等基礎元素
        neutral: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
