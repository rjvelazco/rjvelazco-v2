import type { NextConfig } from "next";
import createMDX from '@next/mdx';
// import remarkGfm from 'remark-gfm';

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  distDir: "build",
};

const withMDX = createMDX({
  // options: {
  //   remarkPlugins: [remarkGfm],
  //   rehypePlugins: [],
  // },
});

// Merge MDX config with the Next.js config
export default withMDX(nextConfig); 