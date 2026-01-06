import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { cn } from '@components/utils';

export type TocEntry = {
  value: string;
  depth: number;
  id?: string;
  children?: TocEntry[];
};

type TableOfContentsProps = {
  toc: TocEntry[];
  className?: string;
  title?: string;
  minDepth?: number;
  maxDepth?: number;
  defaultOpen?: boolean;
};

function filterToc(entries: TocEntry[], minDepth: number, maxDepth: number): TocEntry[] {
  return entries
    .filter((entry) => entry.depth >= minDepth && entry.depth <= maxDepth)
    .map((entry) => ({
      ...entry,
      children: entry.children ? filterToc(entry.children, minDepth, maxDepth) : undefined,
    }));
}

function TocList({ toc }: { toc: TocEntry[] }) {
  return (
    <ul className="m-0 list-disc space-y-2.5 pl-4 text-sm text-foreground sm:space-y-2 sm:pl-5 sm:text-base">
      {toc.map((entry) => {
        const href = entry.id ? `#${entry.id}` : undefined;
        return (
          <li key={`${entry.depth}-${entry.id ?? entry.value}`}>
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
            {entry.children && entry.children.length > 0 ? <TocList toc={entry.children} /> : null}
          </li>
        );
      })}
    </ul>
  );
}

export function TableOfContents({
  toc,
  className,
  title = 'Tabla de Contenidos',
  minDepth = 2,
  maxDepth = 3,
  defaultOpen = true,
}: TableOfContentsProps) {
  const filtered = filterToc(toc, minDepth, maxDepth);
  if (filtered.length === 0) return null;

  return (
    <details
      className={cn(
        // `not-prose` prevents `prose prose-lg` from inflating fonts/spaces inside the article on mobile.
        'not-prose group my-8 rounded-md border border-border bg-muted/30 p-4 sm:my-10 sm:rounded-2xl sm:p-5',
        className
      )}
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
