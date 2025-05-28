import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin() as any;

const nextConfig: NextConfig = {
  /* config options here */
};

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://me.mapleml.xyz', // 你的主網域
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  i18n: {
    defaultLocale: 'zh-TW',
    locales: ['zh-TW', 'en'], // 根據你實際語言調整
  },
};

export default withNextIntl(nextConfig);