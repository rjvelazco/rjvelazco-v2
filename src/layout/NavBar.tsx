"use client";
import React from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";

export const NavBar = () => {
  return (
    <nav className="px-6 py-4 pr-0 md:block hidden" aria-label="Main Navigation">
      <ul className="flex justify-center gap-6">
        <NavItem href="/" label="Home" />
        <NavItem href="/blog" label="Blog" />
        <NavItem href="/logs" label="Logs" />
        <NavItem href="/portfolio" label="Portfolio" />
        <NavItem href="mailto:rjvelazco21@gmail.com" label="Contact" />
      </ul>
    </nav>
  );
};

const NavItem = ({ href, label }: { href: string; label: string }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link href={href}>
        <span
          className={`text-lg font-medium px-2 py-1 rounded transition-colors duration-200 focus:ring-2 focus:ring-petrol hover:text-petrol-light hover:underline focus:outline-none ${
            isActive ? "text-petrol-light underline" : "text-slate-900"
          }`}
          aria-label={`Navigate to ${label}`}
        >
          {label}
        </span>
      </Link>
    </li>
  );
};
