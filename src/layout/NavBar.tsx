import React from "react";
import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="p-4 justify-items-end">
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
      <span>{label}</span>
    </Link>
  </li>
); 