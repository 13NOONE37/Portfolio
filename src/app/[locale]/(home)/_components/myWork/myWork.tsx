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
      <ul className={styles.list}>
        {[
          {
            title: 'Score managment system',
            description:
              'Lorem ipsum dolo lorem asdfasdf asdfasdf asdf asdfas sdafas fdasf asdf asfdasdfa asdfasdf asdfasdf asdfasdf asdf',
            tags: ['TypeScript', 'Next.js', 'MySQL', 'Figma'],
            slug: 'score-managment-system',
          },
          {
            title: 'Score managment system',
            description:
              'Lorem ipsum dolo lorem asdfasdf asdfasdf asdf asdfas sdafas fdasf asdf asfdasdfa asdfasdf asdfasdf asdfasdf asdf',
            tags: ['TypeScript', 'Next.js', 'MySQL', 'Figma'],
            slug: 'score-managment-system',
          },
        ].map(({ title, description, tags, slug }, index) => (
          <li className={styles['list--element']}>
            <ProjectPreview
              title={title}
              description={description}
              tags={tags}
              slug={slug}
              imageSrc="/images/projects/score-mangament-system/thumbnail.jpg"
              imageBlur=""
              rtl={!(index % 2 == 0)}
            />
          </li>
        ))}
      </ul>
      <div className={styles.viewAllProjects}>
        <ViewAllProjects />
      </div>
      <SoInterestedBox className={styles.interestedBox} />
    </section>
  );
};

export default MyWork;
