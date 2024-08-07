import { useTranslations } from 'next-intl';
import React from 'react';

import { SECTION_IDS } from '@/app/section_ids';
import styles from './myOffer.module.css';
import fonts from '@/styles/fonts.module.css';
import SectionDescription from '../../../_components/textComponents/sectionDescription/sectionDescription';
import SectionHeading from '../../../_components/textComponents/sectionHeading/sectionHeading';
import SoInterestedBox from './timeToBuildProject/timeToBuildProject';
import { SecondaryLink } from '@/components/buttons/secondary/secondary';
import TimeToBuildProject from './timeToBuildProject/timeToBuildProject';

const MyOffer = () => {
  const t = useTranslations('Offer');
  const tShared = useTranslations('Shared');

  return (
    <section className={styles.projects} id={SECTION_IDS.offer}>
      <SectionHeading className={styles.heading}>
        {t.rich('my_offer')}
      </SectionHeading>
      <SectionDescription className={styles.description}>
        {t.rich('my_offer_description')}
      </SectionDescription>

      <div className={styles.boxes}></div>
      <TimeToBuildProject className={styles.interestedBox} />
    </section>
  );
};

export default MyOffer;
