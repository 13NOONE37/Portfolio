import React, { ButtonHTMLAttributes, FC, HTMLProps } from 'react';
import Link, { LinkProps } from 'next/link';
import cx from 'classnames';

import styles from './primary.module.css';
import fonts from '@/styles/fonts.module.css';

const PrimaryButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button className={cx(fonts.button, styles.button, className)} {...props}>
      {children}
    </button>
  );
};

const PrimaryLink: FC<LinkProps & HTMLProps<HTMLAnchorElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Link className={cx(fonts.button, styles.button, className)} {...props}>
      {children}
    </Link>
  );
};

export { PrimaryButton, PrimaryLink };
