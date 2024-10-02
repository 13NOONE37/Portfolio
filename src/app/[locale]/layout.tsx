import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Providers from '@/providers/providers';
import Header from './_components/header/header';
import Footer from './_components/footer/footer';

import '@/styles/globals.css';
import styles from './layout.module.css';
import { unstable_setRequestLocale } from 'next-intl/server';
import { LANGUAGES } from '@/config/locales';
import { EmailTemplate } from '@/components/emailTemplate/emailTemplate';

export function generateStaticParams() {
  return LANGUAGES.map((locale) => ({ locale }));
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700', '600', '500', '400'],
});

export const metadata: Metadata = {
  title: 'Oliwer Klauze',
  description: '#TODO: description',
};

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
