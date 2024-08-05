import React, { FC, ReactNode } from 'react';

import cx from 'classnames';
import styles from './sectionSubHeading.module.css';
import fonts from '@/styles/fonts.module.css';
const SectionSubHeading = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={cx(fonts.heading_600, styles.subheading, className)}>
      {children}
    </h2>
  );
};

export default SectionSubHeading;
