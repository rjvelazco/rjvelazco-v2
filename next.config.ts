import type { NextConfig } from 'next';
import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import rehypePrettyCode from 'rehype-pretty-code';
import { remarkInjectToc } from './src/utils/remark-inject-toc';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  distDir: 'build',
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      remarkGfm,
      remarkInjectToc,
      [
        remarkToc,
        {
          heading: 'tabla de contenidos',
          maxDepth: 3,
          ordered: false,
          tight: true,
        },
      ],
    ],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: 'one-dark-pro',
        },
      ],
    ],
  },
});

// Merge MDX config with the Next.js config
export default withMDX(nextConfig);
