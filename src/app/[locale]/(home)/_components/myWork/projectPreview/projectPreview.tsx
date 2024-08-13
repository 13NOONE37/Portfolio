import React, { ReactNode } from 'react';
import cx from 'classnames';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { PrimaryLink } from '@/components/buttons/primary/primary';

import styles from './projectPreview.module.css';
import fonts from '@/styles/fonts.module.css';
import Tag from '@/components/shared/tag/tag';

interface Props {
  title: string;
  description: ReactNode;
  tags: string[];
  slug: string;
  imageSrc: string;
  imageBlur?: string;
  rtl?: boolean;
}
const ProjectPreview = ({
  title,
  description,
  tags,
  slug,
  imageSrc,
  imageBlur,
  rtl = false,
}: Props) => {
  const t = useTranslations('Work');
  return (
    <div className={cx(styles.container, { [styles.container__rtl]: rtl })}>
      <div className={styles.text}>
        <div className={styles['text--content']}>
          <h3 className={cx(fonts.heading_500, styles.title)}>{title}</h3>
          <p className={cx(fonts.body, styles.description)}>{description}</p>
          <ul className={styles.tags}>
            {tags.map((tag) => (
              <li>
                <Tag highlited>{tag}</Tag>
              </li>
            ))}
          </ul>

          <PrimaryLink
            href={`/projects/${slug}`}
            className={cx(fonts.button, styles.cta)}
          >
            {t('view_project')}
          </PrimaryLink>
        </div>
      </div>
      <div className={styles.image}>
        <Image
          src={imageSrc}
          loading="lazy"
          placeholder="empty"
          // placeholder={'blur'}
          // blurDataURL={imageBlur}
          width={1920}
          height={1080}
          // fill
          alt={`${t('screenshot_of_the')} ${title}`}
        />
      </div>
    </div>
  );
};

export default ProjectPreview;
