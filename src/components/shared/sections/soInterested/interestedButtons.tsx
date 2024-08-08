'use client';
import React from 'react';
import styles from './soInterestedBox.module.css';
import VisitGithub from '../../buttons/visitGithub/visitGithub';
import LetsContact from '../../buttons/letsContact/letsContact';

const InterestedButtons = () => {
  return (
    <div className={styles['interestedBox--buttons']}>
      <LetsContact />
      <VisitGithub />
    </div>
  );
};

export default InterestedButtons;
