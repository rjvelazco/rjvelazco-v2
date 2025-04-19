"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  {
    title: "Experience",
    label: "experience",
    url: "/portfolio#experience",
  },
  {
    title: "Projects",
    label: "projects",
    url: "/portfolio#projects",
  },
  {
    title: "About Me",
    label: "about-me",
    url: "/portfolio#about-me",
  },
  {
    title: "Contact",
    label: "contact",
    url: "mailto:rjvelazco21@gmail.com",
  },
];

export const PortfolioHeader = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [navActive, setNavActive] = useState<boolean>(false);

  useEffect(() => {
    setNavActive(window.scrollY > 50);
    const sections = document.querySelectorAll(
      "[data-page-section]"
    ) as NodeListOf<HTMLElement>;

    const handleScroll = (event: Event) => {
      setNavActive(window.scrollY > 50);
      const isAtBottom =
        window.innerHeight + Math.round(window.scrollY) >=
        document.body.offsetHeight;

      sections.forEach((section) => {
        const { offsetTop, clientHeight } = section;

        if (isAtBottom) {
          setActiveSection("about-me");
          return;
        }

        if (window.scrollY >= offsetTop - clientHeight / 2) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2">
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`flex px-3 text-sm font-medium rounded-full justify-center items-center backdrop-blur-xs ${
          navActive ? "shadow-md" : ""
        }`}
      >
        {navItems.map((link, index) => (
          <Link
            key={index}
            aria-label={link.label}
            href={link.url}
            onClick={() => setActiveSection(link.label)}
          >
            <span
              className={`relative block p-2 transition hover:text-petrol ${
                activeSection === link.label ? "text-petrol" : ""
              }`}
            >
              {link.title}
            </span>
          </Link>
        ))}
      </nav>
    </header>
  );
};
