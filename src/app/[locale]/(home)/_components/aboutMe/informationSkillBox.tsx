'use client';
import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { useTranslations } from 'next-intl';
import { isMobile, isTablet } from 'react-device-detect';

import styles from './aboutMe.module.css';
import fonts from '@/styles/fonts.module.css';

const InformationSkillBox = () => {
  const t = useTranslations('About');
  const isMobileDevice = isMobile || isTablet;

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
      className={cx(fonts.body__thick__small, styles.skillBoxInformation)}
      suppressHydrationWarning
    >
      {isClient && isMobileDevice ? t('scrollRightLeft') : t('scrollUpDown')}
    </div>
  );
};

export default InformationSkillBox;
