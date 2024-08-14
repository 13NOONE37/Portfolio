import React, { ReactNode } from 'react';
import cx from 'classnames';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { PrimaryLink } from '@/components/buttons/primary/primary';

import styles from './projectPreview.module.css';
import fonts from '@/styles/fonts.module.css';
import Tag from '@/components/shared/tag/tag';
import { Image as ImageType } from 'contentlayer/generated';
import { Link } from '@/utils/navigation';

interface Props {
  title: string;
  description: ReactNode;
  tags: string[];
  slug: string;
  thumbnail: ImageType;
  rtl?: boolean;
}
const ProjectPreview = ({
  title,
  description,
  tags,
  slug,
  thumbnail,
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
      <Link href={`/projects/${slug}`} className={styles.image}>
        {/* <div className={styles.image}> */}
        <Image
          src={thumbnail.src}
          loading="lazy"
          placeholder={'blur'}
          blurDataURL={thumbnail.blurred}
          width={thumbnail.width}
          height={thumbnail.height}
          alt={`${t('screenshot_of_the')} ${title}`}
        />
        {/* </div> */}
      </Link>
    </div>
  );
};

export default ProjectPreview;
