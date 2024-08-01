import React, { FC, ReactNode } from 'react';

import cx from 'classnames';
import styles from './sectionHeading.module.css';
import fonts from '@/styles/fonts.module.css';
const SectionHeading = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h1 className={cx(fonts.heading_700, styles.heading, className)}>
      {children}
    </h1>
  );
};

export default SectionHeading;
