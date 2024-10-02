import React from 'react';
import styles from './loader.module.css';
const Loader = ({
  width = 50,
  borderWidth = 8,
  mainColor = 'var(--color-primary) ',
  secondaryColor = 'var(--color-dark)',
}) => {
  return (
    <div
      style={{
        width: width,
        borderWidth: borderWidth,
        borderColor: `${mainColor} ${secondaryColor}`,
      }}
      className={styles.loader}
      role="progressbar"
    ></div>
  );
};

export default Loader;
