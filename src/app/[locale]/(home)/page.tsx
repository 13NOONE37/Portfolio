import { unstable_setRequestLocale } from 'next-intl/server';
import styles from './page.module.css';
import ContactMe from '../_components/contactMe/contactMe';
import Hero from './_components/hero/hero';
import AboutMe from './_components/aboutMe/aboutMe';
import MyWork from './_components/myWork/myWork';
import MyOffer from './_components/myOffer/myOffer';

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <main className={styles.main}>
      <Hero />
      <AboutMe />
      <MyWork />
      <MyOffer />
      <ContactMe />
    </main>
  );
}
