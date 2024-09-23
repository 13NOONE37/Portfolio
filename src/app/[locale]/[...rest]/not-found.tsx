import React from 'react';
import styles from './not-found.module.css';
import fonts from '@/styles/fonts.module.css';
import { useTranslations } from 'next-intl';
import { PrimaryLink } from '@/components/buttons/primary/primary';

const NotFoundPage = () => {
  const t = useTranslations('Shared');
  return (
    <section className={styles.container}>
      <h1 className={fonts.heading_600}>{t('not_found')}</h1>
      <div>
        <PrimaryLink href="/">{t('go_back_home_page')}</PrimaryLink>
      </div>
    </section>
  );
};

export default NotFoundPage;
