import React, { ButtonHTMLAttributes, FC, HTMLProps, ReactNode } from 'react';
import { Link } from '@/utils/navigation';

import cx from 'classnames';

import styles from './primary.module.css';
import fonts from '@/styles/fonts.module.css';
import { ButtonLinkType } from '../LinkType';

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

const PrimaryLink: FC<ButtonLinkType> = ({ children, className, ...props }) => {
  return (
    <Link className={cx(fonts.button, styles.button, className)} {...props}>
      {children}
    </Link>
  );
};

export { PrimaryButton, PrimaryLink };
