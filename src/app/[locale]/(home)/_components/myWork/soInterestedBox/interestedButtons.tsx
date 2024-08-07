'use client';
import React from 'react';
import styles from './soInterestedBox.module.css';
import { useTranslations } from 'next-intl';
import { PrimaryButton } from '@/components/buttons/primary/primary';
import { SECTION_IDS } from '@/app/section_ids';
import { SecondaryLink } from '@/components/buttons/secondary/secondary';
import GithubIcon from '@/assets/icons/github';
import scrollToId from '@/utils/scrollToId';

const InterestedButtons = () => {
  const tShared = useTranslations('Shared');
  const tContact = useTranslations('Contact');

  return (
    <div className={styles['interestedBox--buttons']}>
      <PrimaryButton
        onClick={() => {
          scrollToId(SECTION_IDS.contact);
        }}
      >
        {tShared('lets_contact')}
      </PrimaryButton>
      <SecondaryLink href={'https://github.com/13NOONE37'}>
        <div className={styles.githubButton}>
          <GithubIcon />
          {tContact('visit_my_github')}
        </div>
      </SecondaryLink>
    </div>
  );
};

export default InterestedButtons;
