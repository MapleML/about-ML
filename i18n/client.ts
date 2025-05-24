import {useLocale} from 'next-intl';
import {createSharedPathnamesNavigation} from 'next-intl/navigation';
import {locales} from '../i18n';

export const useRouter = createSharedPathnamesNavigation({locales});

export function usePathname() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = router.pathname;
  
  return {
    locale,
    pathname
  };
}