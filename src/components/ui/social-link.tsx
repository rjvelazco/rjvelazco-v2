import React from 'react';

interface SocialLinkProps {
  children: React.ReactNode;
  href: string;
}

export const SocialLink = ({ children, href }: SocialLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      role="link"
      className="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full focus-visible:ring-yellow-500/80 text-md hover:bg-primary-600 hover:border-primary-600 hover:text-white group max-w-fit focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 "
    >
      {children}
    </a>
  );
};
