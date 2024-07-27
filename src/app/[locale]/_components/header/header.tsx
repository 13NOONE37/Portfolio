import React from 'react';
import styles from './header.module.css';
import Logo from '@/assets/icons/logo';
import { Link } from '@/utils/navigation';
import { useTranslations } from 'next-intl';
import Nav from './nav/nav';

const Header = () => {
  const t = useTranslations('Shared');

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Link
          href={'/'}
          aria-label={t('go_to_home_page')}
          className={styles.logo}
        >
          <Logo />
        </Link>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
