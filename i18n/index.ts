import NextIntlLink from 'next-intl/link';
import {useRouter as useNextIntlRouter} from 'next-intl/client';
import {usePathname as useNextPathname} from 'next/navigation';

export const Link = NextIntlLink;

export function useRouter() {
  const router = useNextIntlRouter();
  return router;
}

export function usePathname() {
  return useNextPathname();
}

export function redirect(path: string, options?: {locale?: string}) {
  const locale = options?.locale || defaultLocale;
  return `/api/redirect?to=${locale}${path}`;
}

export const locales = ['en', 'zh-TW'];
export const defaultLocale = 'en';