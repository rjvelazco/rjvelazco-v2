import { visit } from 'unist-util-visit';
import type { Root, Heading, Text } from 'mdast';
import type { Plugin } from 'unified';

/**
 * Remark plugin to automatically inject a "Tabla de Contenidos" heading
 * at the beginning of the document if one doesn't already exist.
 * This heading serves as a placeholder for remark-toc to replace with
 * an auto-generated table of contents.
 *
 * The plugin will:
 * - Check if a TOC heading already exists in the document
 * - Verify that the post has H2 or H3 subsections worth indexing
 * - Insert the TOC heading after the first H1 (post title) if needed
 * - Skip injection if TOC already present or no subsections exist
 */
export const remarkInjectToc: Plugin<void[], Root> = function () {
  return (tree) => {
    let hasTocHeading = false;

    // Check if TOC heading already exists
    visit(tree, 'heading', (node: Heading) => {
      if (node.depth === 2 && node.children.length > 0) {
        const text = node.children
          .filter((child) => child.type === 'text')
          .map((child) => (child as Text).value)
          .join('')
          .toLowerCase()
          .trim();

        // Check for various TOC heading patterns (in Spanish)
        // Matches: "tabla de contenido", "tabla de contenidos", "contenido"
        if (text.includes('tabla de contenido') || (text.includes('contenido') && text.length < 20)) {
          hasTocHeading = true;
        }
      }
    });

    // Check if post has subsections (H2/H3) worth creating a TOC for
    const hasSubheadings = tree.children.some(
      (node) => node.type === 'heading' && (node as Heading).depth >= 2 && (node as Heading).depth <= 3
    );

    // If no TOC heading exists and post has subsections, inject one
    if (!hasTocHeading && hasSubheadings) {
      // Find the index of the first H1 (post title)
      const firstH1Index = tree.children.findIndex((node) => node.type === 'heading' && (node as Heading).depth === 1);

      // Insert TOC heading after the first H1 (or at beginning if no H1)
      const insertIndex = firstH1Index >= 0 ? firstH1Index + 1 : 0;

      // Create the TOC heading node
      const tocHeading: Heading = {
        type: 'heading',
        depth: 2,
        children: [
          {
            type: 'text',
            value: 'Tabla de Contenidos',
          } as Text,
        ],
      };

      // Inject the TOC heading into the AST
      tree.children.splice(insertIndex, 0, tocHeading);
    }
  };
};
