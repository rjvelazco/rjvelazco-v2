import React from 'react';

export const SectionHeading = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <h2 className={`flex items-center mb-6 text-3xl font-semibold gap-x-3 ${className}`}>{children}</h2>;
};
