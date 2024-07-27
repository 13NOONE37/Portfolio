import createMiddleware from 'next-intl/middleware';
import { LANGUAGES } from './config/locales';

export default createMiddleware({
  locales: LANGUAGES,
  defaultLocale: 'en',
});
export const config = {
  matcher: ['/', `/(en|pl)/:path*`],
};
