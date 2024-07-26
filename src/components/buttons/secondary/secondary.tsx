import React, { ButtonHTMLAttributes, FC, HTMLProps } from 'react';
import Link, { LinkProps } from 'next/link';
import cx from 'classnames';

import styles from './secondary.module.css';
import fonts from '@/styles/fonts.module.css';

const Corners = () => (
  <>
    <div className={cx(styles.corner, styles.top_left)} />
    <div className={cx(styles.corner, styles.top_right)} />
    <div className={cx(styles.corner, styles.bottom_left)} />
    <div className={cx(styles.corner, styles.bottom_right)} />
  </>
);

const SecondaryButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={styles.container}>
      <button className={cx(fonts.button, styles.button, className)} {...props}>
        {children}
      </button>
      <Corners />
    </div>
  );
};

const SecondaryLink: FC<LinkProps & HTMLProps<HTMLAnchorElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={styles.container}>
      <Link className={cx(fonts.button, styles.button, className)} {...props}>
        {children}
      </Link>
      <Corners />
    </div>
  );
};

export { SecondaryButton, SecondaryLink };
