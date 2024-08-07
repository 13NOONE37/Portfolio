import { useTranslations } from 'next-intl';
import React from 'react';

import { SECTION_IDS } from '@/app/section_ids';
import styles from './myWork.module.css';
import fonts from '@/styles/fonts.module.css';
import SectionDescription from '../../../_components/textComponents/sectionDescription/sectionDescription';
import SectionHeading from '../../../_components/textComponents/sectionHeading/sectionHeading';
import SoInterestedBox from './soInterestedBox/soInterestedBox';
import { SecondaryLink } from '@/components/buttons/secondary/secondary';

const MyWork = () => {
  const t = useTranslations('Work');
  const tShared = useTranslations('Shared');

  return (
    <section className={styles.projects} id={SECTION_IDS.projects}>
      <SectionHeading className={styles.heading}>
        {t.rich('my_work')}
      </SectionHeading>
      <SectionDescription className={styles.description}>
        {t.rich('my_work_description')}
      </SectionDescription>

      <div className={styles.viewAllProjects}>
        <SecondaryLink href={'/projects'}>
          {tShared('view_all_projects')}
        </SecondaryLink>
      </div>
      <SoInterestedBox className={styles.interestedBox} />
    </section>
  );
};

export default MyWork;
