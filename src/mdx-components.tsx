import type { MDXComponents } from 'mdx/types';

// Define custom MDX components here.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
