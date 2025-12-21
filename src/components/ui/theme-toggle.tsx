'use client';

import { useTheme } from 'next-themes';

import { cn } from '@components/utils';

export const ThemeToggle = ({ className }: { className?: string }) => {
  const { resolvedTheme, setTheme } = useTheme();

  const handleThemeToggle = () => {
    const isDark = resolvedTheme === 'dark';
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      type="button"
      onClick={handleThemeToggle}
      className={cn(
        'inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-background text-foreground transition hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer',
        className
      )}
      aria-label="Toggle theme"
    >
      <span className="material-symbol dark:hidden" aria-hidden="true">
        dark_mode
      </span>
      <span className="material-symbol hidden dark:inline" aria-hidden="true">
        light_mode
      </span>
    </button>
  );
};
