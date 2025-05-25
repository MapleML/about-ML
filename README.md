# Next.js About Me Website

這是一個使用 Next.js、React 和 Tailwind CSS 構建的個人自我介紹網站。
### forked from [small R](https://smallr-portfolio.vercel.app/en)
### Original license: MIT
## 🌟 功能特點

- RWD
- 細節調整
- 漸變背景與半透明卡片設計
- 頁面切換動畫
- 打字機效果
- 頭貼呼吸
- i18n
## 🛠️ 技術棧

- Next.js 15
- React
- TypeScript
- Tailwind CSS

## 🎯 主要功能區塊

### 首頁展示

- 動態歡迎文字
- 個人簡介卡片
- 社交媒體連結

### 自我介紹

- 個人基本資訊
- 學習內容
- 技術背景介紹

### IG嵌入展示

- IG嵌入貼文
- 個人作品展示

## 🚀 快速開始

### 前置要求

- Node.js 18.0.0 或更高版本
- npm 或 yarn 或 pnpm

### 安裝步驟

1. 克隆專案

```bash
git clone https://github.com/MapleML/about-ML.git
```

2. 安裝依賴

```bash
pnpm i
```

3. 運行開發服務器

```bash
pnpm dev
```

## 📁 專案結構

```
about-ml/
├── app/                    # Next.js 應用程序目錄
│   ├── [locale]/           # i18n 目錄
│   │   ├── layout.tsx      # i18n 主佈局組件
│   │   └── app.tsx         # i18n 首頁組件   
│   ├── layout.tsx          # 主佈局組件
│   └── page.tsx            # 首頁組件
├── components/             # React 組件
│   ├── NavBar.tsx          # 導航欄組件
│   └── sections/           # 頁面區塊組件
├── i18n/                   # 全球化文本
│   ├── en.json             # 英文文本
│   └── zh-TW.json          # 繁體中文文本
├── lib/                    # 工具函數
│   └── utils.ts            # 通用工具函數 (包含 cn 函數)
├── constants/              # 常量配置
└── public/                 # 靜態資源
```

## 🔧 配置說明

主要配置文件位於 `constants/index.ts`，您可以修改：

- 導航選項與路由
- 個人資訊設定
- 作品集展示
- 社交媒體連結

### 工具函數

`lib/utils.ts` 中的 `cn` 函數用於：

- 合併多個 className
- 解決 Tailwind 類名衝突
- 優雅處理條件類名

## 🎨 設計特色

- 漸變背景效果
- 半透明卡片設計
- 響應式導航欄
- 動態打字效果
- 頁面切換動畫

## 📝 開源協議

本專案採用 MIT 協議 - 查看 [LICENSE](LICENSE) 文件了解詳情

