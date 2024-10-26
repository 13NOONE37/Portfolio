import React from 'react';
import { useTranslations } from 'next-intl';
import { SECTION_IDS } from '@/app/section_ids';
import SectionHeading from '../../../_components/textComponents/sectionHeading/sectionHeading';

import styles from './aboutMe.module.css';
import SectionDescription from '../../../_components/textComponents/sectionDescription/sectionDescription';
import SkillBox from './skillBox';

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

      <div className={styles.skillBox}>
        <SkillBox />
      </div>
    </section>
  );
};

export default AboutMe;
