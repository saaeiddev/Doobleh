import type { NextConfig } from 'next';

const isGitHub = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isGitHub ? '/Doobleh' : '',
  assetPrefix: isGitHub ? '/Doobleh/' : undefined,
};

export default nextConfig;
