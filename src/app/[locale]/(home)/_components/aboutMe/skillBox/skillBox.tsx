import React from 'react';
import cx from 'classnames';
import styles from './skillBox.module.css';
import fonts from '@/styles/fonts.module.css';
import Tag from '@/components/shared/tag/tag';

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
          <li>
            <Tag highlited={highlited}>{name}</Tag>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillBox;
