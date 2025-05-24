import {getRequestConfig} from 'next-intl/server';
import {locales, defaultLocale} from '../i18n'; // 這裡指向根目錄的 i18n.ts

export default getRequestConfig(async ({locale}) => {
  console.log('request.ts locale:', locale);
  const validLocale = locales.includes(locale as any) ? locale : defaultLocale;

  let messages;
  try {
    messages = (await import(`../messages/${validLocale}.json`)).default;
  } catch (error) {
    messages = (await import(`../messages/${defaultLocale}.json`)).default;
  }

  return {
    messages,
    locale: validLocale
  };
});