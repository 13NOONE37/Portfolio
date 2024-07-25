import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['en', 'pl'];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    defaultTranslationValues: {
      important: (chunks) => <strong>{chunks}</strong>,
      mark: (chunks) => <mark>{chunks}</mark>,
      br: () => <br />,
    },

    messages: (await import(`/messages/${locale}.json`)).default,
  };
});
