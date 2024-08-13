import React, { ReactNode } from 'react';
import cx from 'classnames';
import styles from './tag.module.css';
import fonts from '@/styles/fonts.module.css';
const Tag = ({
  children,
  highlited,
}: {
  children: ReactNode;
  highlited?: boolean;
}) => {
  return (
    <div
      className={cx(fonts.button, styles.tag, {
        [styles.tag__highlited]: highlited,
      })}
    >
      {children}
    </div>
  );
};

export default Tag;
