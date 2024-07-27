import { useTranslations } from 'next-intl';
import styles from './page.module.css';
import fonts from '@/styles/fonts.module.css';

import {
  PrimaryLink,
  PrimaryButton,
} from '@/components/buttons/primary/primary';
import {
  SecondaryButton,
  SecondaryLink,
} from '@/components/buttons/secondary/secondary';
import { unstable_setRequestLocale } from 'next-intl/server';

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Home');

  return (
    <main className={styles.main}>
      {t.rich('my_name_is_oliwer')}
      <div
        style={{
          margin: '50px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          width: '160px',
        }}
      >
        <PrimaryButton>Contact me</PrimaryButton>
        <PrimaryLink href={'/'}>View project</PrimaryLink>
      </div>
      <div
        style={{
          margin: '50px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          width: '160px',
        }}
      >
        <SecondaryButton>Contact me</SecondaryButton>

        <SecondaryLink href={'/'}>Contact me</SecondaryLink>
      </div>
    </main>
  );
}
