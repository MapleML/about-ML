import Link from 'next/link';
import { useRouter as useNextRouter } from 'next/navigation';
import { usePathname as useNextPathname } from 'next/navigation';

export { Link };

export function useRouter() {
  return useNextRouter();
}

export function usePathname() {
  return useNextPathname();
}

export function redirect(path: string, options?: { locale?: string }) {
  const locale = options?.locale || defaultLocale;
  return `/api/redirect?to=${locale}${path}`;
}

export const locales = ['en', 'zh-TW'];
export const defaultLocale = 'en';