'use client';
import React from 'react';
import { SECTION_IDS } from '@/app/section_ids';
import scrollToId from '@/utils/scrollToId';
import styles from './hero.module.css';
import { useTranslations } from 'next-intl';

const GoNextCTA = () => {
  const t = useTranslations('Home');
  return (
    <button
      className={styles.cta}
      onClick={() => {
        scrollToId(SECTION_IDS.about, 120);
      }}
      aria-label={t('Go_to_next_section')}
    >
      <div className={styles['cta--circle']} />
    </button>
  );
};

export default GoNextCTA;
