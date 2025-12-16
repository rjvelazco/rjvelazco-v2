'use client';

import { useEffect } from 'react';

const STORAGE_KEY = 'site-theme';
type ThemeMode = 'light' | 'dark';

const getPreferredTheme = (): ThemeMode => {
  if (typeof window === 'undefined') return 'light';

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;

  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)')?.matches;
  return prefersDark ? 'dark' : 'light';
};

const applyTheme = (theme: ThemeMode) => {
  if (typeof document === 'undefined') return;
  document.documentElement.classList.toggle('dark', theme === 'dark');
};

export const SiteThemeController = () => {
  useEffect(() => {
    const theme = getPreferredTheme();
    applyTheme(theme);

    // Important: remove dark mode when leaving the (site) route group (e.g. /portfolio).
    return () => {
      document.documentElement.classList.remove('dark');
    };
  }, []);

  return null;
};
