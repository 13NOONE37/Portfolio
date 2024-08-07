'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import { PrimaryButton } from '@/components/buttons/primary/primary';
import { SECTION_IDS } from '@/app/section_ids';

import scrollToId from '@/utils/scrollToId';

const ContactButton = () => {
  const t = useTranslations('Shared');

  return (
    <PrimaryButton
      onClick={() => {
        scrollToId(SECTION_IDS.contact);
      }}
    >
      {t('contact_me')}
    </PrimaryButton>
  );
};

export default ContactButton;
