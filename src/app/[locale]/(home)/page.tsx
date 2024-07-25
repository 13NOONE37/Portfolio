import { useTranslations } from 'next-intl';
import styles from './page.module.css';

export default function Home() {
  const t = useTranslations('Home');

  return <main className={styles.main}>{t.rich('my_name_is_oliwer')}</main>;
}
