import React from 'react';
import cx from 'classnames';
import { useTranslations } from 'next-intl';
import { SECTION_IDS } from '@/app/section_ids';
import SectionHeading from '../../../_components/textComponents/sectionHeading/sectionHeading';

import styles from './aboutMe.module.css';
import SectionDescription from '../../../_components/textComponents/sectionDescription/sectionDescription';

import fonts from '@/styles/fonts.module.css';
import Tag from '@/components/shared/tag/tag';
const AboutMe = () => {
  const t = useTranslations('About');

  return (
    <section className={styles.about} id={SECTION_IDS.about}>
      <SectionHeading className={styles.heading}>
        {t.rich('about_me')}
      </SectionHeading>
      <SectionDescription className={styles.description}>
        {t.rich('about_me_description')}
      </SectionDescription>

      <div className={styles.box}>
        <div className={styles['box--element']}>
          <div className={styles.content}>
            <h2 className={cx(fonts.heading_500, styles['content--title'])}>
              {t('experience_title')}
            </h2>
            <p
              className={cx(fonts.body__thick, styles['content--description'])}
            >
              {t('experience_content')}
            </p>
          </div>
        </div>
        <div className={styles['box--element']}>
          <div className={styles.content}>
            <h2 className={cx(fonts.heading_500, styles['content--title'])}>
              {t('devtools_title')}
            </h2>

            <div className={cx(styles.tags, styles['content--description'])}>
              <Tag highlited>TypeScript</Tag>
              <Tag highlited>React</Tag>
              <Tag highlited>Next.js</Tag>
              <Tag highlited>SQL</Tag>

              <Tag>Three.js</Tag>
              <Tag>GSAP</Tag>

              <Tag>MongoDB</Tag>
              <Tag>Strapi</Tag>
              <Tag>Pocketbase</Tag>

              <Tag>Node.js</Tag>
              <Tag>PHP</Tag>

              <Tag>Webpack</Tag>
              <Tag>Git</Tag>

              <Tag>Blender</Tag>
              <Tag highlited>Figma</Tag>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles.skillBox}>
        <SkillBox />
      </div> */}
    </section>
  );
};

export default AboutMe;
