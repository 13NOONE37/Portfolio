import { useTranslations } from 'next-intl';
import React from 'react';

import { SECTION_IDS } from '@/app/section_ids';
import styles from './myWork.module.css';
import fonts from '@/styles/fonts.module.css';
import SectionDescription from '../../../_components/textComponents/sectionDescription/sectionDescription';
import SectionHeading from '../../../_components/textComponents/sectionHeading/sectionHeading';
import SoInterestedBox from '@/components/shared/sections/soInterested/soInterestedBox';
import { SecondaryLink } from '@/components/buttons/secondary/secondary';
import ViewAllProjects from '@/components/shared/buttons/viewAllProjects/viewAllprojects';
import ProjectPreview from './projectPreview/projectPreview';
import { allProjects } from 'contentlayer/generated';
import { getLocale, getTranslations } from 'next-intl/server';

const MyWork = async () => {
  const locale = await getLocale();
  const t = await getTranslations('Work');
  // const tShared = useTranslations('Shared');
  const projects = allProjects.filter((item) => item.locale === locale);

  return (
    <section className={styles.projects} id={SECTION_IDS.projects}>
      <SectionHeading className={styles.heading}>
        {t.rich('my_work')}
      </SectionHeading>
      <SectionDescription className={styles.description}>
        {t.rich('my_work_description')}
      </SectionDescription>
      <ul className={styles.list}>
        {projects.map(
          ({ title, short_description, tags = [], slug, thumbnail }, index) => (
            <li className={styles['list--element']}>
              <ProjectPreview
                title={title}
                description={short_description}
                tags={tags}
                slug={slug}
                thumbnail={thumbnail}
                rtl={!(index % 2 == 0)}
              />
            </li>
          ),
        )}
      </ul>
      <div className={styles.viewAllProjects}>
        <ViewAllProjects />
      </div>
      <SoInterestedBox className={styles.interestedBox} />
    </section>
  );
};

export default MyWork;
