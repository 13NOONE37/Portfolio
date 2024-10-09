'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './cursor.module.css';

const Cursor = () => {
  const blobRef = useRef<HTMLDivElement>(null);

  const handler = (e: MouseEvent) => {
    if (!blobRef.current) return;

    blobRef.current.animate(
      {
        transform: `translate(${e.clientX}px, ${e.clientY}px)`,
      },
      { duration: 3000, fill: 'forwards' },
    );
  };
  useEffect(() => {
    window.addEventListener('mousemove', handler);

    return () => {
      window.removeEventListener('mousemove', handler);
    };
  }, []);

  return <div className={styles.blob} ref={blobRef} />;
};

export default Cursor;
