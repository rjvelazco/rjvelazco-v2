import React from "react";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return <article className="prose dark:prose-invert mx-auto">{children}</article>;
}
