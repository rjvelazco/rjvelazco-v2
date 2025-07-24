import type { NextConfig } from "next";
import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode, { Options } from 'rehype-pretty-code';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  distDir: "build",
  output: "export",
  trailingSlash: true
};

const options: Options = {
  theme: "one-dark-pro",
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        rehypePrettyCode,
        options,
      ],
    ],
  },
});

// Merge MDX config with the Next.js config
export default withMDX(nextConfig);