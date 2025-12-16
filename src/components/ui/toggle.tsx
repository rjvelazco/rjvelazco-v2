'use client';

import * as React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@components/utils';

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 whitespace-nowrap cursor-pointer",
  {
    variants: {
      variant: {
        default:
          'bg-transparent hover:bg-gray-100 data-[state=on]:bg-petrol data-[state=on]:text-white data-[state=on]:shadow-sm',
        outline:
          'border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground data-[state=on]:bg-petrol data-[state=on]:text-white data-[state=on]:border-petrol',
      },
      size: {
        default: 'h-9 px-3 min-w-9',
        sm: 'h-6 px-1.5 min-w-6 text-[10px]',
        lg: 'h-10 px-3.5 min-w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root data-slot="toggle" className={cn(toggleVariants({ variant, size, className }))} {...props} />
  );
}

export { Toggle, toggleVariants };
