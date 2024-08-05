import React, { ReactNode } from 'react';

import cx from 'classnames';
import styles from './sectionDescription.module.css';
import fonts from '@/styles/fonts.module.css';

const SectionDescription = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <p className={cx(fonts.body, styles.paragraph, className)}>{children}</p>
  );
};

export default SectionDescription;
