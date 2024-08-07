'use client';
import scrollToId from '@/utils/scrollToId';
import { useTranslations } from 'next-intl';
import { SECTION_IDS } from '@/app/section_ids';
import { SecondaryButton } from '@/components/buttons/secondary/secondary';
import { useRouter } from '@/utils/navigation';

const ContactButton = () => {
  const t = useTranslations('Header');

  const router = useRouter();
  return (
    <SecondaryButton
      onClick={() => {
        scrollToId(SECTION_IDS.contact, undefined, () => {
          router.push('/#contact');
        });
      }}
    >
      {t('contact_me')}
    </SecondaryButton>
  );
};
export default ContactButton;
