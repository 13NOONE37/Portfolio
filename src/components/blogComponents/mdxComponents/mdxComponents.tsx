import React, { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import cx from 'classnames';
import fonts from '@/styles/fonts.module.css';
import styles from './mdxComponents.module.css';
import Image from 'next/image';

const MDX_H1 = ({ children }: { children: ReactNode }) => {
  return <h1 className={cx(styles.h1, fonts.heading_600)}>{children}</h1>;
};
const MDX_H2 = ({ children }: { children: ReactNode }) => {
  return <h2 className={cx(styles.h2, fonts.heading_500)}>{children}</h2>;
};
const MDX_P = ({ children }: { children: ReactNode }) => {
  return <p className={cx(styles.p, fonts.body)}>{children}</p>;
};
const MDX_UL = ({ children }: { children: ReactNode }) => {
  return <ul className={cx(styles.ul, fonts.body)}>{children}</ul>;
};
const MDX_OL = ({ children }: { children: ReactNode }) => {
  return <ol className={cx(styles.ol, fonts.body)}>{children}</ol>;
};
const MDX_A = ({
  children,
  href,
  target,
}: {
  children: ReactNode;
  href?: string;
  target?: string;
}) => {
  return (
    <a className={styles.a} href={href} target={target}>
      {children}
    </a>
  );
};
const MDX_Section = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: React.CSSProperties;
}) => {
  return (
    <section style={style} className={styles.section}>
      {children}
    </section>
  );
};
const MDX_TextBlock = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: React.CSSProperties;
}) => {
  return (
    <div style={style} className={styles.textBlock}>
      {children}
    </div>
  );
};
const MDX_Image = ({
  src,
  alt,
  blurred,
  width,
  height,
}: {
  src: string;
  alt: string;
  blurred: string;
  width: number;
  height: number;
}) => {
  return (
    <Image
      className={styles.image}
      src={src}
      alt={alt}
      placeholder="blur"
      blurDataURL={blurred}
      width={width}
      height={height}
    />
  );
};
export {
  MDX_H1,
  MDX_H2,
  MDX_P,
  MDX_UL,
  MDX_OL,
  MDX_A,
  MDX_Section,
  MDX_TextBlock,
  MDX_Image,
};
