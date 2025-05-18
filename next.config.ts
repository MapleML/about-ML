import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin() as any;

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextIntl(nextConfig);