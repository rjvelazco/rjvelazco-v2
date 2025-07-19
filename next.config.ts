import type { NextConfig } from "next";
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  distDir: "build",
  output: "export",
  trailingSlash: true
};

const withMDX = createMDX();

// Merge MDX config with the Next.js config
export default withMDX(nextConfig);