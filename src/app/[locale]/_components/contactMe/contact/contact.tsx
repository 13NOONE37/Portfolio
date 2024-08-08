import React, { ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import cx from 'classnames';
import { Link } from '@/utils/navigation';
import Socials from './socials/socials';

import styles from './contact.module.css';
import fonts from '@/styles/fonts.module.css';
import { personalInformations } from '@/config/personalInformations';

const Contact = ({ className }: { className?: string }) => {
  const t = useTranslations('Contact');

  return (
    <div className={cx(styles.container, className)}>
      <h3 className={fonts.heading_500}>{t('contact_heading')}</h3>

      <Link
        className={cx(fonts.body, styles.link)}
        href={`mailto:${personalInformations.email}`}
      >
        {personalInformations.email}
      </Link>

      <Link
        className={cx(fonts.body, styles.link)}
        href={`tel:${personalInformations.phone}`}
      >
        {personalInformations.phone}
      </Link>

      <Socials />
    </div>
  );
};

export default Contact;
