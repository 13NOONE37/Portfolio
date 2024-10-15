import cx from 'classnames';
import { unstable_setRequestLocale } from 'next-intl/server';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { notFound } from 'next/navigation';

import { allProjects } from 'contentlayer/generated';
import {
  MDX_A,
  MDX_H1,
  MDX_H2,
  MDX_OL,
  MDX_P,
  MDX_Section,
  MDX_TextBlock,
  MDX_UL,
  MDX_Image,
} from '@/components/blogComponents/mdxComponents/mdxComponents';

import styles from './page.module.css';
import fonts from '@/styles/fonts.module.css';

import CodeIcon from '@/assets/icons/code';
import LiveIcon from '@/assets/icons/live';
import TimeToBuildProject from '@/components/shared/sections/timeToBuildProject/timeToBuildProject';
import Tag from '@/components/shared/tag/tag';
import { SecondaryLink } from '@/components/buttons/secondary/secondary';
import { PrimaryLink } from '@/components/buttons/primary/primary';
import GoBack from '@/components/blogComponents/goBack/goBack';
import ContactSection from '../../_components/contactSection/contactSection';
import { useTranslations } from 'next-intl';

export const generateStaticParams = async () =>
  allProjects.map((project) => ({
    locale: project.locale,
    slug: project.slug,
  }));

export default function Project({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  unstable_setRequestLocale(locale);

  const t = useTranslations('Shared');

  const project = allProjects.find(
    (item) => item.slug === slug && item.locale === locale,
  );
  if (!project) notFound();
  const MDXContent = useMDXComponent(project.body.code);

  return (
    <>
      <div className={styles.container}>
        <div>
          <GoBack />
        </div>
        <article className={styles.article}>
          <div className={styles.introduction}>
            <h1 className={cx(fonts.heading_600, styles.title)}>
              {project.title}
            </h1>
            <p className={cx(fonts.body__thick, styles.description)}>
              {project.long_description}
            </p>
            <ul className={styles.tags}>
              {project.tags?.map((tag) => (
                <li key={tag}>
                  <Tag highlited>{tag}</Tag>
                </li>
              ))}
            </ul>
            <div className={styles.buttons}>
              {project.source && (
                <SecondaryLink
                  className={styles.sourceCode}
                  href={project.source}
                  target="_blank"
                >
                  <div className={styles['sourceCode--content']}>
                    <CodeIcon />
                    <span>{t('source_code')}</span>
                  </div>
                </SecondaryLink>
              )}
              {project.live && (
                <PrimaryLink
                  className={styles.watchLive}
                  href={project.live}
                  target="_blank"
                >
                  <div className={styles['watchLive--content']}>
                    <LiveIcon />
                    <span>{t('watch_live')}</span>
                  </div>
                </PrimaryLink>
              )}
            </div>
          </div>
          <MDXContent
            components={{
              h1: ({ children }) => <MDX_H1>{children}</MDX_H1>,
              h2: ({ children }) => <MDX_H2>{children}</MDX_H2>,
              ul: ({ children }) => <MDX_UL>{children}</MDX_UL>,
              ol: ({ children }) => <MDX_OL>{children}</MDX_OL>,
              p: ({ children }) => <MDX_P>{children}</MDX_P>,
              Section: ({ children, style }) => (
                <MDX_Section style={style}>{children}</MDX_Section>
              ),
              TextBlock: ({ children, style }) => (
                <MDX_TextBlock style={style}>{children}</MDX_TextBlock>
              ),
              a: ({ children, href, target }) => (
                <MDX_A href={href} target={target}>
                  {children}
                </MDX_A>
              ),
              Image: ({
                src,
                alt,
                blurred,
                width,
                height,
              }: {
                src: string;
                alt: string;
                blurred: string;
                width: number;
                height: number;
              }) => (
                <MDX_Image
                  src={src}
                  alt={alt}
                  blurred={blurred}
                  width={width}
                  height={height}
                />
              ),
            }}
          />
        </article>
      </div>
      <TimeToBuildProject className={styles.timeToBuildProject} />
      <ContactSection />
    </>
  );
}
