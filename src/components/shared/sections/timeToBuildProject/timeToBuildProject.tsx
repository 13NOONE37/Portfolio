import React from 'react';
import cx from 'classnames';
import { useTranslations } from 'next-intl';

import SectionSubHeading from '@/app/[locale]/_components/textComponents/sectionSubHeading/sectionSubHeading';
import ContactMe from '../../buttons/contactMe/contactMe';

import styles from './timeToBuildProject.module.css';

const TimeToBuildProject = ({ className }: { className?: string }) => {
  const tShared = useTranslations('Shared');

  return (
    <div className={cx(styles.container, className)}>
      <SectionSubHeading>
        {tShared.rich('its_time_to_build_product_your_clients_will_love')}
      </SectionSubHeading>
      <ContactMe />
    </div>
  );
};

export default TimeToBuildProject;
