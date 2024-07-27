import { LinkProps } from 'next/link';
import { AnchorHTMLAttributes } from 'react';

export interface ButtonLinkType
  extends Omit<LinkProps, 'locale'>,
    AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}
