import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { LANGUAGES } from '@/config/locales';
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales: LANGUAGES });
