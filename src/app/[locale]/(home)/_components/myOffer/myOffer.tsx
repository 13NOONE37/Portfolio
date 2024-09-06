import React from 'react';
import cx from 'classnames';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { SECTION_IDS } from '@/app/section_ids';

import styles from './myOffer.module.css';
import fonts from '@/styles/fonts.module.css';

import SectionDescription from '../../../_components/textComponents/sectionDescription/sectionDescription';
import SectionHeading from '../../../_components/textComponents/sectionHeading/sectionHeading';
import TimeToBuildProject from '../../../../../components/shared/sections/timeToBuildProject/timeToBuildProject';
import LetsContact from '@/components/shared/buttons/letsContact/letsContact';

import WebsitesImage from 'public/images/shared/woman_with_phone.jpg';
import WebappsImage from 'public/images/shared/man_working_on_laptop.jpg';

const MyOffer = () => {
  const t = useTranslations('Offer');
  const tShared = useTranslations('Shared');

  const list = [
    {
      author: `${tShared(
        'photo_source',
      )} https://unsplash.com/@guilhermestecanella?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash`,

      title: t('websites'),
      description: t('websites_description'),
      image: WebsitesImage,
      image_alt: t('websites_photo_alt'),
    },
    {
      author: `${t('webapps_photo_alt')} | ${tShared(
        'photo_source',
      )} https://unsplash.com/@agefis?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash`,
      title: t('webapps'),
      description: t('webapps_description'),
      image: WebappsImage,
      image_alt: t('webapps_photo_alt'),
    },
  ];

  return (
    <section className={styles.offer} id={SECTION_IDS.offer}>
      <SectionHeading className={styles.heading}>
        {t.rich('my_offer')}
      </SectionHeading>
      <SectionDescription className={styles.description}>
        {t.rich('my_offer_description')}
      </SectionDescription>

      <ul className={styles.list}>
        {list.map((item) => (
          <li key={item.title} className={styles['list--element']}>
            <Image
              className={styles['element--image']}
              src={item.image}
              alt={`${item.image_alt} | ${item.author}`}
              loading="lazy"
              placeholder="blur"
            />
            <div className={styles.content}>
              <h2 className={cx(fonts.heading_500, styles['content--title'])}>
                {item.title}
              </h2>
              <p
                className={cx(
                  fonts.body__thick,
                  styles['content--description'],
                )}
              >
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <TimeToBuildProject className={styles.timeToBuild} />
    </section>
  );
};

export default MyOffer;
