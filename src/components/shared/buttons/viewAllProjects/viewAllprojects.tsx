import { SecondaryLink } from '@/components/buttons/secondary/secondary';
import { useTranslations } from 'next-intl';
import React from 'react';

const ViewAllProjects = () => {
  const t = useTranslations('Shared');

  return (
    <SecondaryLink href={'/projects'}>{t('view_all_projects')}</SecondaryLink>
  );
};

export default ViewAllProjects;
