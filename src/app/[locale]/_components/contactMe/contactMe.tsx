import { useTranslations } from 'next-intl';
import React from 'react';
import { SECTION_IDS } from '@/app/section_ids';
import SectionHeading from '../textComponents/sectionHeading/sectionHeading';

import styles from './contactMe.module.css';
import fonts from '@/styles/fonts.module.css';
import SectionSubHeading from '../textComponents/sectionSubHeading/sectionSubHeading';
import ContactForm from './contactForm/contactForm';
import Contact from './contact/contact';

const ContactMe = () => {
  const t = useTranslations('Contact');
  const tShared = useTranslations('Shared');

  return (
    <section className={styles.contactMe} id={SECTION_IDS.contact}>
      <SectionHeading className={styles.heading}>
        {t.rich('contact_me')}
      </SectionHeading>
      <SectionSubHeading className={styles.subHeading}>
        {tShared.rich('lets_create_something_together')}
      </SectionSubHeading>

      <div className={styles.boxes}>
        <ContactForm className={styles.form} />
        <Contact className={styles.contact} />
      </div>
    </section>
  );
};

export default ContactMe;
