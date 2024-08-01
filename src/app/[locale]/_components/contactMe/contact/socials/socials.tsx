import React, { ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import GithubIcon from '@/assets/icons/github';
import MessengerIcon from '@/assets/icons/messenger';
import styles from './socials.module.css';
import { Link } from '@/utils/navigation';

const Socials = () => {
  const t = useTranslations('Contact');

  const links: { href: string; ariaLabel?: string; icon: ReactNode }[] = [
    {
      href: 'https://github.com/13NOONE37',
      ariaLabel: t('visit_my_github'),
      icon: <GithubIcon />,
    },
    {
      href: 'https://www.messenger.com/t/100007303174533',
      ariaLabel: t('contact_with_me_on_messenger'),
      icon: <MessengerIcon />,
    },

    // {
    //   href: '',
    //   ariaLabel: t('visit_my_instagram'),
    //   icon: <InstagramIcon />,
    // },
    // {
    //   href: '',
    //   ariaLabel: t('visit_my_youtube'),
    //   icon: <YoutubeIcon />,
    // },

    // {
    //   href: '',
    //   ariaLabel: t('visit_my_facebook'),
    //   icon: <FacebookIcon />,
    // },
    // {
    //   href: '',
    //   ariaLabel: t('visit_my_linkdein'),
    //   icon: <LinkdeinIcon />,
    // },
    // {
    //   href: '',
    //   ariaLabel: t('visit_my_twitter'),
    //   icon: <XIcon />,
    // },
  ];
  return (
    <ul className={styles.socials}>
      {links.map(({ href, ariaLabel, icon }) => (
        <li>
          <Link
            href={href}
            target="_blank"
            aria-label={ariaLabel}
            className={styles.link}
          >
            {icon}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
