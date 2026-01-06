import type { NextConfig } from 'next';
import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeExtractToc from '@stefanprobst/rehype-extract-toc';
import rehypeExtractTocExport from '@stefanprobst/rehype-extract-toc/mdx';

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
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      // Ensure headings have stable ids, required for a linkable TOC.
      rehypeSlug,
      // Extract TOC into `file.data.toc`
      rehypeExtractToc,
      // Expose TOC as a named MDX export: `export const tableOfContents = ...`
      rehypeExtractTocExport,
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
