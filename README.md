# Next.js About Me Website

這是一個使用 Next.js、React 和 Tailwind CSS 構建的個人自我介紹網站，融合了動漫元素與程式設計的特色。

[English](./docs/README_EN.md) | [中文](./README.md)

## 🌟 功能特點

- 響應式設計，完美支援各種設備尺寸
- 融合動漫元素的獨特設計
- 漸變背景與半透明卡片設計
- 流暢的頁面切換動畫
- 打字機效果的動態展示

## 🛠️ 技術棧

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React Icons

## 🎯 主要功能區塊

### 首頁展示

- 動態歡迎文字
- 個人簡介卡片
- 社交媒體連結

### 自我介紹

- 個人基本資訊
- 學習經歷分享
- 技術背景介紹

### 動漫收藏

- 最愛動漫展示
- 觀看進度追蹤
- 個人評分系統

## 🚀 快速開始

### 前置要求

- Node.js 18.0.0 或更高版本
- npm 或 yarn 或 pnpm

### 安裝步驟

1. 克隆專案

```bash
git clone https://github.com/Ynoob87/portfolio.git
```

2. 安裝依賴

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

3. 運行開發服務器

```bash
npm run dev
```

## 📁 專案結構

```
about-me/
├── app/                    # Next.js 應用程序目錄
│   ├── layout.tsx         # 主佈局組件
│   └── page.tsx           # 首頁組件
├── components/            # React 組件
│   ├── NavBar.tsx        # 導航欄組件
│   ├── TypeWriter.tsx    # 打字機效果組件
│   └── sections/         # 頁面區塊組件
├── constants/            # 常量配置
├── types/               # TypeScript 類型定義
└── public/             # 靜態資源
```

## 🔧 配置說明

主要配置文件位於 `constants/index.ts`，您可以修改：

- 導航選項與路由
- 個人資訊設定
- 動漫清單配置
- 作品集展示
- 社交媒體連結

## 🎨 設計特色

- 漸變背景效果
- 半透明卡片設計
- 響應式導航欄
- 動態打字效果
- 頁面切換動畫

## 🤝 貢獻指南

歡迎提交 Pull Request 或創建 Issue！

1. Fork 本專案
2. 創建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打開一個 Pull Request

## 📝 開源協議

本專案採用 MIT 協議 - 查看 [LICENSE](LICENSE) 文件了解詳情

## 👤 作者

吳宸麒 (Wu Chen-Chi)

- 就讀台北城市科技大學五專資訊工程系
- GitHub: [@Ynoob87](https://github.com/Ynoob87)
- Email: hhgg12661@gmail.com
- LinkedIn: [alaner652](https://www.linkedin.com/in/alaner652/)

---

如果您喜歡這個專案，歡迎給個 ⭐️！
