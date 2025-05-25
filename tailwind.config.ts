import type { Config } from "tailwindcss";

export default {
  content: [
    "./constants/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern: /^text-(primary|secondary|accent)-(50|100|200|300|400|500|600)$/,
    },
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
        primary: {
          50: "#F0F7FF",
          100: "#E0EDFF",
          200: "#BAD6FF",
          300: "#8ABBFF",
          400: "#4A9BFF",
          500: "#0070F3",
          600: "#0055CC",
        },

        // 黃色系列
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
        accent: {
          50: "#FFF0F7",
          100: "#FFE3EF",
          200: "#FFB8D9",
          300: "#FF8CC4",
          400: "#FF5CAE",
          500: "#FF0080",
          600: "#DB006B",
        },

        autumn: {
          50: "#FFF5EF",   // 非常淡的暖杏色
          100: "#FFE2CC",  // 杏仁奶
          200: "#FFBE94",  // 淺棕橙
          300: "#FF9966",  // 楓葉橘
          400: "#D96B3A",  // 焦糖楓紅
          500: "#A64521",  // 深紅棕
          600: "#6F2C14",  // 極深棕紅
        },
        // 中性色系列
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
         other: {
          orange: "#ffbe96",
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
  darkMode: 'class',
} satisfies Config;
