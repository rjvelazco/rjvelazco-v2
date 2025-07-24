"use client";

import React, { useState } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";

export const NavBar = () => {
  return (
    <nav className="px-6 py-4 pr-0" aria-label="Main Navigation">
      <ul className="hidden md:flex justify-center gap-1">
        <NavItem href="/" label="Home" />
        <NavItem href="/blog" label="Blog" />
        <NavItem href="/logs" label="Logs" />
        <NavItem href="/portfolio" label="Portfolio" />
        <NavItem href="mailto:rjvelazco21@gmail.com" label="Contact" />
      </ul>

      <MobileMenu />
    </nav>
  );
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenMenu = () => setIsOpen(true);
  const handleCloseMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      <button className="cursor-pointer" onClick={() => handleOpenMenu()}>
        <img src="/assets/menu-icon.svg" alt="Menu" className="w-8 h-8" />
      </button>

      {isOpen && (
        <div
          className="fixed top-0 right-0 w-full h-full"
          onClick={() => handleCloseMenu()}
        ></div>
      )}
      <ul
        className={`fixed top-0 right-0 w-0 h-full shadow-lg bg-white flex flex-col gap-6 overflow-x-hidden  duration-500 font-bold z-1 pt-14 pb-10 ${
          isOpen ? "w-[264px] px-6" : ""
        }`}
      >
        <button
          className="absolute top-4 left-8 cursor-pointer"
          onClick={() => handleCloseMenu()}
        >
          <img src="/assets/arrow-left.svg" alt="Close" className="w-6 h-6" />
        </button>
        <NavItem href="/" label="Home" />
        <NavItem href="/logs" label="Logs" />
        <NavItem href="/portfolio" label="Portfolio" />
        <NavItem href="mailto:rjvelazco21@gmail.com" label="Contact" />

        <div className="flex-1 flex gap-2 justify-end items-end">
          <Link href="https://github.com/rjvelazco">
            <img
              src="/assets/github.svg"
              alt="GitHub"
              className="cursor-pointer w-6 h-6"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/rafael-velazco/">
            <img
              src="/assets/linkedin.svg"
              alt="LinkedIn"
              className="cursor-pointer w-6 h-6"
            />
          </Link>
        </div>
      </ul>
    </div>
  );
};

const NavItem = ({ href, label }: { href: string; label: string }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link href={href}>
        <span
          className={`text-lg font-medium px-2 py-1 rounded transition-colors duration-200 focus:ring-2 hover:text-blue-600 hover:underline underline-offset-8 focus:outline-none ${
            isActive ? "text-blue-600 underline" : "text-slate-900"
          }`}
          aria-label={`Navigate to ${label}`}
        >
          {label}
        </span>
      </Link>
    </li>
  );
};