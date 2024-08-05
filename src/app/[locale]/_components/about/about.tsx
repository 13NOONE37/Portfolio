import { useTranslations } from 'next-intl';
import React from 'react';
import { SECTION_IDS } from '../../section_ids';
import SectionHeading from '../textComponents/sectionHeading/sectionHeading';

import styles from './about.module.css';
import fonts from '@/styles/fonts.module.css';
import SectionDescription from '../textComponents/sectionDescription/sectionDescription';
import SkillBox from './skillBox/skillBox';

const About = () => {
  const t = useTranslations('About');
  return (
    <section className={styles.about} id={SECTION_IDS.about}>
      <SectionHeading className={styles.heading}>
        {t.rich('my_abilites')}
      </SectionHeading>
      <SectionDescription className={styles.description}>
        {t.rich('my_abilities_description')}
      </SectionDescription>
      <div className={styles.boxes}>
        <SkillBox
          title={t('frontend_development')}
          skills={[
            { name: 'TypeScript', highlited: true },
            { name: 'JavaScript', highlited: true },
            { name: 'React', highlited: true },
            { name: 'Next.js', highlited: true },
            { name: 'GSAP' },
            { name: 'Three.js' },
          ]}
        />
        <SkillBox
          title={t('backend_development')}
          skills={[
            { name: 'MySQL', highlited: true },
            { name: 'MongoDB' },
            { name: 'Strapi' },
            { name: 'Firebase' },
            { name: 'PHP' },
            { name: 'Node.js' },
            { name: 'Pocketbase' },
          ]}
        />
        <SkillBox
          title={t('tools_and_technologies')}
          skills={[
            { name: 'Figma', highlited: true },
            { name: 'Blender', highlited: true },
            { name: 'Git' },
            { name: 'Webpack' },
            { name: 'Linux' },
          ]}
        />
      </div>
    </section>
  );
};

export default About;
