import React from "react";
import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="p-4 justify-items-end" aria-label="Main Navigation">
      <ul className="flex justify-center gap-4">
        <NavItem href="/" label="Home" />
        <NavItem href="/blog" label="Blog" />
        <NavItem href="/logs" label="Logs" />
        <NavItem href="/contact" label="Contact" />
      </ul>
    </nav>
  );
};

const NavItem = ({ href, label }: { href: string; label: string }) => (
  <li>
    <Link href={href}>
      <span
        className="hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label={`Navigate to ${label}`}
      >
        {label}
      </span>
    </Link>
  </li>
); 