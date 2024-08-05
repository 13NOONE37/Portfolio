import React from 'react';
import cx from 'classnames';
import styles from './skillBox.module.css';
import fonts from '@/styles/fonts.module.css';

const SkillBox = ({
  title,
  skills,
}: {
  title: string;
  skills: { name: string; highlited?: boolean }[];
}) => {
  return (
    <div className={styles.container}>
      <h2 className={cx(fonts.heading_400, styles.title)}>{title}</h2>
      <ul className={styles.skills}>
        {skills.map(({ name, highlited }) => (
          <li
            className={cx(fonts.button, styles.skill, {
              [styles.skill__highlited]: highlited,
            })}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillBox;
