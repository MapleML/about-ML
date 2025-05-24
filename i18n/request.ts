import {getRequestConfig} from 'next-intl/server';
import {locales, defaultLocale} from '../i18n';

export default getRequestConfig(async ({locale}) => {
  // 保證 validLocale 一定是 string
  const validLocale: string = locales.includes(locale as string) ? locale as string : defaultLocale;

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