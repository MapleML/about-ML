import { usePathname, useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

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