import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { cn } from '@components/utils';

export type TocEntry = {
  value: string;
  depth: number;
  id?: string;
  children?: TocEntry[];
};

type Toc = TocEntry[];

type TableOfContentsProps = {
  toc: Toc;
  className?: string;
  title?: string;
  minDepth?: number;
  maxDepth?: number;
  defaultOpen?: boolean;
};

/**
 * Filter the TOC by depth.
 * @param entries - The TOC entries.
 * @param minDepth - The minimum depth.
 * @param maxDepth - The maximum depth.
 * @returns The filtered TOC.
 */
function filterTocByDepth(entries: Toc, minDepth: number, maxDepth: number): Toc {
  return entries
    .filter((entry) => entry.depth >= minDepth && entry.depth <= maxDepth)
    .map((entry) => ({
      ...entry,
      children: entry.children ? filterTocByDepth(entry.children, minDepth, maxDepth) : undefined,
    }));
}

/**
 * The props for the TocList component.
 * @param toc - The TOC entries.
 * @param isNested - Whether the list is nested.
 * @param keyPrefix - The prefix for the key.
 */
type TocListProps = {
  toc: Toc;
  /** Used to slightly tighten spacing for nested lists. */
  isNested?: boolean;
  /** Helps generate stable keys even when values repeat across levels. */
  keyPrefix?: string;
};

/**
 * The TocList component.
 * @param toc - The TOC entries.
 * @param isNested - Whether the list is nested.
 * @param keyPrefix - The prefix for the key.
 */
function TocList({ toc, isNested = false, keyPrefix = 'toc' }: TocListProps) {
  const listClassName = cn(
    'm-0 list-disc text-sm text-foreground sm:text-base',
    isNested ? 'mt-1.5 space-y-1 pl-4 sm:mt-2 sm:space-y-1.5 sm:pl-5' : 'space-y-1.5 pl-4 sm:space-y-2 sm:pl-5'
  );

  return (
    <ul className={listClassName}>
      {toc.map((entry, index) => {
        const href = entry.id ? `#${entry.id}` : undefined;
        const keyBase = entry.id ?? entry.value;
        const key = `${keyPrefix}:${index}:${keyBase}`;

        return (
          <li key={key} className="leading-relaxed">
            {href ? (
              <Link
                href={href}
                className="inline-flex max-w-full items-start break-words text-primary-600 no-underline hover:underline dark:text-primary-300"
              >
                {entry.value}
              </Link>
            ) : (
              <span className="break-words">{entry.value}</span>
            )}
            {entry.children && entry.children.length > 0 ? (
              <TocList toc={entry.children} isNested keyPrefix={key} />
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

/**
 * The TableOfContents component.
 * @param toc - The TOC entries.
 * @param className - The class name.
 * @param title - The title.
 * @param minDepth - The minimum depth.
 * @param maxDepth - The maximum depth.
 * @param defaultOpen - Whether the table of contents is open by default.
 */
export function TableOfContents({
  toc,
  className,
  title = 'Tabla de Contenidos',
  minDepth = 2,
  maxDepth = 3,
  defaultOpen = true,
}: TableOfContentsProps) {
  const filtered = filterTocByDepth(toc, minDepth, maxDepth);
  if (filtered.length === 0) return null;

  return (
    <details
      className={cn('not-prose group my-4 rounded-sm border border-border bg-muted/30 p-4 sm:my-10 sm:p-5', className)}
      open={defaultOpen}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 select-none [&::-webkit-details-marker]:hidden sm:gap-4">
        <span className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">{title}</span>
        <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-open:rotate-180 sm:h-5 sm:w-5" />
      </summary>
      <nav className="mt-3 sm:mt-4" aria-label={title}>
        <TocList toc={filtered} />
      </nav>
    </details>
  );
}
