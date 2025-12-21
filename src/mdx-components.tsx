import type { MDXComponents } from 'mdx/types';
import { CodeBlock } from '@components/mdx/code-block';

// Define custom MDX components here.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: CodeBlock,
    ...components,
  };
}
