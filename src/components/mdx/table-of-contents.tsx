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
    <ul className="m-0 list-disc pl-5">
      {toc.map((entry) => {
        const href = entry.id ? `#${entry.id}` : undefined;
        return (
          <li key={`${entry.depth}-${entry.id ?? entry.value}`} className="my-1">
            {href ? (
              <Link href={href} className="no-underline hover:underline">
                {entry.value}
              </Link>
            ) : (
              <span>{entry.value}</span>
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
      className={cn('group my-10 rounded-md border border-border bg-muted/30 p-5', className)}
      open={defaultOpen}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 select-none [&::-webkit-details-marker]:hidden">
        <span className="text-xl font-semibold tracking-tight text-foreground">{title}</span>
        <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
      </summary>
      <nav className="mt-4" aria-label={title}>
        <TocList toc={filtered} />
      </nav>
    </details>
  );
}
