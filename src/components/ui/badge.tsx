import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@components/utils';

const badgeVariants = cva('inline-flex items-center justify-center rounded-full whitespace-nowrap select-none', {
  variants: {
    variant: {
      default: 'border border-green-800 bg-green-100 px-3 py-1 text-sm font-medium text-green-900',
      blue: 'border border-blue-700/40 bg-blue-600 px-3 py-1 text-sm font-semibold text-white shadow-[0_1px_0_rgba(255,255,255,0.12)_inset]',
      newGold:
        'border border-amber-300/50 bg-neutral-950 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-amber-200 shadow-[0_0_0_1px_rgba(245,158,11,0.18),0_10px_22px_rgba(0,0,0,0.28)]',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>;

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span data-slot="badge" className={cn(badgeVariants({ variant, className }))} {...props} />;
}

export { Badge, badgeVariants };
