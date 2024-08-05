'use client';
import React from 'react';
import { SECTION_IDS } from '../../section_ids';
import scrollToId from '@/utils/scrollToId';
import styles from './hero.module.css';
import ArrowIcon from '@/assets/icons/arrow';
import ArrowEndIcon from '@/assets/icons/arrowEnd';

const GoNextCTA = () => {
  return (
    <button
      className={styles.cta}
      onClick={() => {
        scrollToId(SECTION_IDS.about);
      }}
    >
      <ArrowEndIcon />
    </button>
  );
};

export default GoNextCTA;
