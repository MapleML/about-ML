<div align="center">
  <h1>small R - 個人網站</h1>
  <p>使用 Next.js 和 Tailwind CSS 打造的現代化個人網站</p>
  <img src="./public/thumbnail.png" alt="Website Preview" width="600" />
</div>

[English](./README.md) | [中文](./README_ZH.md)

## 🌟 專案概述

這是我的個人網站，展示我的程式作品、興趣愛好和技術能力。採用現代網頁技術構建，具有清新簡約的設計風格。

### ✨ 主要特色

- **現代化設計**：簡約清新的介面搭配流暢動畫
- **響應式佈局**：完美適配從手機到桌面的各種設備
- **動漫元素**：融入我喜愛的動漫內容和相關主題
- **作品展示**：展示我的程式開發專案與技能

### 🛠️ 使用技術

- **框架**：Next.js 15 (App Router)
- **樣式**：Tailwind CSS
- **動畫**：Framer Motion
- **圖標**：Lucide React & React Icons
- **類型系統**：TypeScript

### 🚀 開始使用

1. **複製專案**

```bash
git clone https://github.com/Ynoob87/about-small.git
```

2. **安裝依賴**

```bash
cd about-small
npm install
```

3. **啟動開發伺服器**

```bash
npm run dev
```

### 🌐 部署方式

1. **生產環境建置**

```bash
npm run build
```

2. **部署到 Vercel（推薦）**

- Fork 此專案
- 導入到 [Vercel](https://vercel.com)
- Vercel 會自動偵測 Next.js 並部署

3. **部署到其他平台**

- 建置專案：`npm run build`
- 啟動生產伺服器：`npm start`
- 或將 `out` 目錄部署到任何靜態託管：
  - GitHub Pages
  - Netlify
  - Cloudflare Pages

### 📂 專案結構

```
about-small/
├── app/                # Next.js 應用目錄
├── components/         # React 元件
│   ├── cards/         # 卡片元件
│   └── sections/      # 頁面區塊
├── public/            # 靜態資源
└── types/             # TypeScript 類型定義
```

### 🌈 特色功能

- **Hero 區塊**：動態歡迎畫面與自我介紹
- **關於我**：展示個人背景與興趣
- **動漫天地**：分享喜愛的動漫作品
- **程式天地**：展示開發的專案作品

### 📝 開發注意事項

1. **程式碼風格**

- 使用 ESLint 和 Prettier 保持程式碼風格一致
- 提交前執行 `npm run lint` 檢查程式碼

2. **型別檢查**

- 確保所有 TypeScript 檔案都有適當的型別定義
- 執行 `npm run type-check` 檢查型別

3. **效能優化**

- 使用適當的圖片格式和大小
- 實作適當的快取策略
- 注意元件的重新渲染優化

4. **瀏覽器支援**

- 支援主流瀏覽器最新兩個版本
- 使用 CSS 前綴處理

## 📄 授權條款

本專案使用 MIT 授權條款 - 詳見 [LICENSE_ZH](LICENSE_ZH) 檔案。
