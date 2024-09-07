'use client';
import React from 'react';
import { SECTION_IDS } from '@/app/section_ids';
import scrollToId from '@/utils/scrollToId';
import styles from './hero.module.css';

const GoNextCTA = () => {
  return (
    <button
      className={styles.cta}
      onClick={() => {
        scrollToId(SECTION_IDS.about);
      }}
    >
      <div className={styles['cta--circle']} />
    </button>
  );
};

export default GoNextCTA;
