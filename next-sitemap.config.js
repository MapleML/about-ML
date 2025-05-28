/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://me.mapleml.xyz', 
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  i18n: {
    defaultLocale: 'zh-TW',
    locales: ['zh-TW', 'en'], 
  },
};
