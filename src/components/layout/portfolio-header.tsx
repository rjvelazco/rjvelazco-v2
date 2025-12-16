'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@components/ui/toggle-group';
import type { NavItem } from '@data/portfolio';

interface PortfolioHeaderProps {
  navItems: NavItem[];
  locale?: 'en' | 'es';
}

export const PortfolioHeader = ({ navItems, locale = 'en' }: PortfolioHeaderProps) => {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [navActive, setNavActive] = useState<boolean>(false);

  const handleLocaleChange = (value: string) => {
    if (value === locale) return;

    if (value === 'es') {
      router.push('/es/portfolio');
    } else {
      router.push('/portfolio');
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll('[data-page-section]') as NodeListOf<HTMLElement>;

    const handleScroll = () => {
      setNavActive(window.scrollY > 50);
      const isAtBottom = window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight;

      sections.forEach((section) => {
        const { offsetTop, clientHeight } = section;

        if (isAtBottom) {
          setActiveSection('about-me');
          return;
        }

        if (window.scrollY >= offsetTop - clientHeight / 2) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    const rafId = window.requestAnimationFrame(handleScroll);
    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2">
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`flex px-3 text-sm font-medium rounded-full justify-center items-center backdrop-blur-xs gap-2 ${
          navActive ? 'shadow-md' : ''
        }`}
      >
        {navItems.map((link, index) => (
          <Link key={index} aria-label={link.label} href={link.url} onClick={() => setActiveSection(link.label)}>
            <span
              className={`relative block p-2 transition hover:text-primary-500 ${
                activeSection === link.label ? 'text-primary-500' : ''
              }`}
            >
              {link.title}
            </span>
          </Link>
        ))}

        <div className="ml-2 hidden md:block">
          <ToggleGroup type="single" value={locale} onValueChange={handleLocaleChange} size="sm">
            <ToggleGroupItem value="en" aria-label="Switch to English">
              EN
            </ToggleGroupItem>
            <ToggleGroupItem value="es" aria-label="Switch to Spanish">
              ES
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </nav>
    </header>
  );
};
