import { unstable_setRequestLocale } from 'next-intl/server';
import styles from './page.module.css';
import ContactSection from '../_components/contactSection/contactSection';
import Hero from './_components/hero/hero';
import AboutMe from './_components/aboutMe/aboutMe';
import MyWork from './_components/myWork/myWork';
import MyOffer from './_components/myOffer/myOffer';

import Text3DScene from '@/components/Text3DScene/Text3DScene';

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <div className={styles.main}>
      <Hero />
      <AboutMe />
      <MyWork />
      <MyOffer />
      <ContactSection />
    </div>
  );
}
