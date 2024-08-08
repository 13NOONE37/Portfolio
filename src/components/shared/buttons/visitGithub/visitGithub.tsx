import React from 'react';
import { SecondaryLink } from '@/components/buttons/secondary/secondary';
import styles from './visitGithub.module.css';
import GithubIcon from '@/assets/icons/github';
import { useTranslations } from 'next-intl';
import { socialLinks } from '@/config/socialLinks';
const VisitGithub = () => {
  const t = useTranslations('Shared');
  return (
    <SecondaryLink href={socialLinks.github}>
      <div className={styles.button}>
        <GithubIcon />
        {t('visit_my_github')}
      </div>
    </SecondaryLink>
  );
};

export default VisitGithub;
