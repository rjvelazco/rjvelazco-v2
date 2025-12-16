'use client';

import { useState } from 'react';

import { cn } from '@components/utils';

const STORAGE_KEY = 'site-theme';
type ThemeMode = 'light' | 'dark';

const getCurrentTheme = (): ThemeMode => {
  if (typeof document === 'undefined') return 'light';
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
};

const setTheme = (theme: ThemeMode) => {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  window.localStorage.setItem(STORAGE_KEY, theme);
};

export const ThemeToggle = ({ className }: { className?: string }) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => getCurrentTheme());

  const handleToggleTheme = () => {
    const nextTheme: ThemeMode = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    setThemeState(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={handleToggleTheme}
      className={cn(
        'inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-background text-foreground transition hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer',
        className
      )}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="material-symbols-outlined" aria-hidden="true">
        {theme === 'dark' ? 'light_mode' : 'dark_mode'}
      </span>
    </button>
  );
};
