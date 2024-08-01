import React, { ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import cx from 'classnames';
import { Link } from '@/utils/navigation';
import Socials from './socials/socials';

import styles from './contact.module.css';
import fonts from '@/styles/fonts.module.css';

const Contact = ({ className }: { className?: string }) => {
  const t = useTranslations('Contact');

  return (
    <div className={cx(styles.container, className)}>
      <h3 className={fonts.heading_500}>{t('contact_heading')}</h3>

      <Link
        className={cx(fonts.body__big, styles.link)}
        href={`mailto:${process.env.NEXT_PUBLIC_BUISNESS_EMAIL}`}
      >
        {process.env.NEXT_PUBLIC_BUISNESS_EMAIL}
      </Link>

      <Link
        className={cx(fonts.body__big, styles.link)}
        href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
      >
        {process.env.NEXT_PUBLIC_PHONE_NUMBER}
      </Link>

      <Socials />
    </div>
  );
};

export default Contact;
