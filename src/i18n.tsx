import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { LANGUAGES } from './config/locales';

export default getRequestConfig(async ({ locale }) => {
  if (!LANGUAGES.includes(locale as any)) notFound();

  return {
    defaultTranslationValues: {
      important: (chunks) => <strong>{chunks}</strong>,
      mark: (chunks) => <mark>{chunks}</mark>,
      br: () => <br />,
    },

    messages: (await import(`/messages/${locale}.json`)).default,
  };
});
