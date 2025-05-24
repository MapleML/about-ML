import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export function useI18nPath() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return {
    locale,
    pathname,
    router
  };
}