import { unstable_setRequestLocale } from 'next-intl/server';
import styles from './page.module.css';
import GoBack from '@/components/blogComponents/goBack/goBack';
import { allAttachments } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { useMDXComponent } from 'next-contentlayer/hooks';
import {
  MDX_A,
  MDX_H1,
  MDX_H2,
  MDX_OL,
  MDX_P,
  MDX_Section,
  MDX_TextBlock,
  MDX_UL,
} from '@/components/blogComponents/mdxComponents/mdxComponents';
import ContactMe from '../_components/contactSection/contactSection';

export default function Privacy({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const privacyPolicy = allAttachments.find(
    (item) => item.name === 'privacy-policy' && item.locale === locale,
  );
  if (!privacyPolicy) return notFound();

  const MDXContent = useMDXComponent(privacyPolicy.body.code);
  return (
    <>
      <div className={styles.container}>
        <div>
          <GoBack />
        </div>
        <article className={styles.article}>
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
            }}
          />
        </article>
      </div>
      <ContactMe />
    </>
  );
}
