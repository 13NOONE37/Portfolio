import { Poppins } from 'next/font/google';
import Providers from '@/providers/providers';
import Header from './_components/header/header';
import Footer from './_components/footer/footer';

import '@/styles/globals.css';
import styles from './layout.module.css';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { LANGUAGES } from '@/config/locales';
import { Metadata } from 'next';

export function generateStaticParams() {
  return LANGUAGES.map((locale) => ({ locale }));
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700', '600', '500', '400'],
});

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations('Meta');
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: process.env.NEXT_PUBLIC_BASE_URL,
    },
    keywords: `Oliwer Klauze`,
    openGraph: {
      title: t('title'),
      description: t('description'),
      images: `${process.env.NEXT_PUBLIC_BASE_URL}/images/thumbnail_${locale}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: `${process.env.NEXT_PUBLIC_BASE_URL}/images/thumbnail_${locale}`,
    },
  };
}
export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={poppins.className}>
        <Providers>
          <div className={styles.container}>
            <Header />
            <main className={styles.main}>{children}</main>

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
