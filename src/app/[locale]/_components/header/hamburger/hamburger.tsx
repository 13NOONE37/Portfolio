'use client';
import React from 'react';
import cx from 'classnames';
import styles from './hamburger.module.css';

const Hamburger = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className={cx(styles.hamburger, { [styles.opened]: isOpen })}>
      <div className={styles.bar__top}></div>
      <div className={styles.bar__middle}></div>
      <div className={styles.bar__bottom}></div>
    </div>
  );
};

export default Hamburger;
