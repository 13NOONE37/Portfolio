'use client';
import React from 'react';
import cx from 'classnames';
import fonts from '@/styles/fonts.module.css';
import styles from './goBack.module.css';
import { useTranslations } from 'next-intl';
import ArrowIcon from '@/assets/icons/arrow';
import { useRouter } from '@/utils/navigation';

const GoBack = () => {
  const t = useTranslations('Shared');
  const router = useRouter();
  return (
    <div className={styles.goBack}>
      <button onClick={() => router.back()} className={styles.button}>
        <ArrowIcon />
      </button>
      <span className={cx(fonts.body__thick, styles.label)}>{t('back')}</span>
    </div>
  );
};

export default GoBack;
