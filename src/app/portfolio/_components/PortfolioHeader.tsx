"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  {
    title: "Home",
    label: "home",
    url: "/portfolio",
  },
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

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const sections = document.querySelectorAll("section");

  //     setNavActive(window.scrollY > 50);

  //     sections.forEach((section) => {
  //       const sectionTop = section.offsetTop;
  //       const sectionHeight = section.clientHeight;

  //       if (window.scrollY >= sectionTop - sectionHeight / 2) {
  //         setActiveSection(section.id);
  //       }
  //     });
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <header className="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2">
      <nav className={`flex px-3 text-sm font-medium rounded-full text-gray-600 justify-center items-center bg-white/80 backdrop-blur-xs ${navActive ? "shadow-md" : ""}`}>
        {navItems.map((link, index) => (
          <Link
            key={index}
            aria-label={link.label}
            href={link.url}
            onClick={() => setActiveSection(link.label)}
          >
            <span
              className={`relative block px-2 py-2 transition hover:text-petrol ${
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
