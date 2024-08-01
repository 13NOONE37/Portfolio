import React from 'react';
import cx from 'classnames';
import styles from './privacyButton.module.css';
import fonts from '@/styles/fonts.module.css';
import { Link } from '@/utils/navigation';
import { useTranslations } from 'next-intl';

const PrivacyButton = ({ className }: { className?: string }) => {
  const t = useTranslations('Shared');
  return (
    <Link
      href={'/privacy'}
      className={cx(fonts.body__small, styles.privacy, className)}
    >
      {t('privacy_policy')}
    </Link>
  );
};

export default PrivacyButton;
