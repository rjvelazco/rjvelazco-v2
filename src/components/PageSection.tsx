import React from "react";

export const PageSection = ({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => {
  return (
    <section
      id={id}
      data-section={id}
      data-page-section={true}
      className={`${className} scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl`}
    >
      {children}
    </section>
  );
};
