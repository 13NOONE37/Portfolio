import { withContentlayer } from 'next-contentlayer';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
};

export default withContentlayer(withNextIntl(nextConfig));
