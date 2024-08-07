import React from 'react';
import cx from 'classnames';

import styles from './timeToBuildProject.module.css';
import SectionSubHeading from '@/app/[locale]/_components/textComponents/sectionSubHeading/sectionSubHeading';

import { useTranslations } from 'next-intl';

import ContactButton from './contactButton';

const TimeToBuildProject = ({ className }: { className?: string }) => {
  const tShared = useTranslations('Shared');

  return (
    <div className={cx(styles.container, className)}>
      <SectionSubHeading>
        {tShared.rich('its_time_to_build_product_your_clients_will_love')}
      </SectionSubHeading>
      <ContactButton />
    </div>
  );
};

export default TimeToBuildProject;
