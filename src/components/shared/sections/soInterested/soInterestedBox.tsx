import React from 'react';
import cx from 'classnames';

import styles from './soInterestedBox.module.css';
import SectionSubHeading from '@/app/[locale]/_components/textComponents/sectionSubHeading/sectionSubHeading';

import { useTranslations } from 'next-intl';

import InterestedButtons from './interestedButtons';

const SoInterestedBox = ({ className }: { className?: string }) => {
  const t = useTranslations('Shared');

  return (
    <div className={cx(styles.interestedBox, className)}>
      <SectionSubHeading>{t.rich('so_interested')}</SectionSubHeading>
      <InterestedButtons />
    </div>
  );
};

export default SoInterestedBox;
