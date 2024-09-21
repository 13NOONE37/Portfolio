import React from 'react';
import { useTranslations } from 'next-intl';
import { SECTION_IDS } from '@/app/section_ids';
import SectionHeading from '../../../_components/textComponents/sectionHeading/sectionHeading';

import styles from './aboutMe.module.css';
import SectionDescription from '../../../_components/textComponents/sectionDescription/sectionDescription';
import SkillBox from './skillBox';
import { isMobile, isTablet } from 'react-device-detect';
import InformationSkillBox from './informationSkillBox';

const AboutMe = () => {
  const t = useTranslations('About');

  const isMobileDevice = isMobile || isTablet;
  return (
    <section className={styles.about} id={SECTION_IDS.about}>
      <SectionHeading className={styles.heading}>
        {t.rich('about_me')}
      </SectionHeading>
      <SectionDescription className={styles.description}>
        {t.rich('about_me_description')}
      </SectionDescription>
      <InformationSkillBox />
      <div className={styles.skillBox}>
        <SkillBox />
      </div>
    </section>
  );
};

export default AboutMe;
