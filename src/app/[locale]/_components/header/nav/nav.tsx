'use client';
import React, { useRef, useState } from 'react';
import cx from 'classnames';
import { useLocale, useTranslations } from 'next-intl';

import { Link, usePathname } from '@/utils/navigation';
import { SecondaryButton } from '@/components/buttons/secondary/secondary';
import Hamburger from '../hamburger/hamburger';

import fonts from '@/styles/fonts.module.css';
import styles from './nav.module.css';
import scrollToId from '@/utils/scrollToId';
import useDetectOutsideClick from '@/hooks/useDetectOutsideClick';
import { SECTION_IDS } from '@/app/section_ids';

const Nav = () => {
  const t = useTranslations('Header');
  const locale = useLocale();
  const pathname = usePathname();

  const [showMenu, setShowMenu] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  useDetectOutsideClick(containerRef, () => {
    setShowMenu(false);
  });

  const handleLinkElement = (id: string) => {
    scrollToId(id);
    setShowMenu(false);
  };

  return (
    <div className={cx(styles['nav--container'], { [styles.show]: showMenu })}>
      <div className={styles.mask} />
      <nav className={styles.links} ref={containerRef}>
        <ul>
          <li>
            <button
              onClick={() => {
                handleLinkElement(SECTION_IDS.about);
              }}
              className={cx(fonts.button, styles.link)}
            >
              {t('about')}
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                handleLinkElement(SECTION_IDS.projects);
              }}
              className={cx(fonts.button, styles.link)}
            >
              {t('projects')}
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                handleLinkElement(SECTION_IDS.offer);
              }}
              className={cx(fonts.button, styles.link)}
            >
              {t('offer')}
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                handleLinkElement(SECTION_IDS.blog);
              }}
              className={cx(fonts.button, styles.link)}
            >
              {t('blog')}
            </button>
          </li>
          <li className={SECTION_IDS.contact}>
            <SecondaryButton
              onClick={() => {
                handleLinkElement('contact');
              }}
            >
              {t('contact_me')}
            </SecondaryButton>
          </li>
        </ul>
      </nav>

      <div className={cx(styles.lang, fonts.body__small)}>
        <Link
          href={pathname}
          locale="en"
          className={cx(styles['lang--option'], {
            [styles['lang--option__selected']]: locale === 'en',
          })}
          aria-label={t('change_language_to_english')}
          scroll={false}
        >
          EN
        </Link>
        <span className={styles['lang--divider']}></span>

        <Link
          href={pathname}
          locale="pl"
          className={cx(styles['lang--option'], {
            [styles['lang--option__selected']]: locale === 'pl',
          })}
          aria-label={t('change_language_to_polish')}
          scroll={false}
        >
          PL
        </Link>
      </div>

      <button
        className={styles.hamburger}
        onClick={(e) => {
          e.stopPropagation();
          setShowMenu((prev) => !prev);
        }}
      >
        <Hamburger isOpen={showMenu} />
      </button>
    </div>
  );
};

export default Nav;
