import React from 'react';

export const LinkInline = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a
      href={href}
      role="link"
      className="inline-flex items-center text-lg font-medium text-primary-500 hover:text-primary-700"
    >
      {children}
    </a>
  );
};
