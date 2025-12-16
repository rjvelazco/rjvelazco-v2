import React from "react";

import type { Metadata } from "next";
import { PortfolioHeader } from "@components/layout/portfolio-header";
import { NAV_ITEMS_ES } from "@data/portfolio";

export const metadata: Metadata = {
  title: "Rafael Velazco | Senior Software Engineer",
  description: "Senior Software Engineer with expertise in web development",
  keywords: ["software engineer", "senior engineer", "web development", "portfolio"],
  authors: [{ name: "Rafael Velazco" }],
  creator: "Rafael Velazco",
  publisher: "Rafael Velazco",
  openGraph: {
    title: "Rafael Velazco | Senior Engineer at dotCMS",
    description: "Senior Software Engineer with expertise in web development",
    type: "website",
    locale: "en_US",
    siteName: "Rafael Velazco Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafael Velazco | Senior Engineer at dotCMS",
    description: "Senior Software Engineer with expertise in web development",
    creator: "@rjvelazco21",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://www.rjvelazco.com";

  return (
    <body className="relative font-onest portfolio-gradient">
      <PortfolioHeader navItems={NAV_ITEMS_ES} locale="es" />
      <main className="w-full mx-auto max-w-[64rem]">{children}</main>
      <footer className="opacity-80 m-4 min-[375px]:pl-4 md:pl-0 mt-16 w-full mx-auto container lg:max-w-4xl md:max-w-2xl mb-10 flex justify-center">
        <div className="rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-4">
          <span className="text-sm sm:text-center text-zinc-800/90">
            <a href="https://rjvelazco.com/" className="hover:underline">
              Rafael Velazco
            </a>
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
            <li>
              <a href="/portfolio#about-me" className="hover:underline me-4 md:me-6">
                Sobre Mí
              </a>
            </li>
            <li>
              <a id="contacto" href="mailto:rjvelazco21@gmail.com" className="hover:underline">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </footer>

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Rafael Velazco",
            jobTitle: "Senior Software Engineer",
            url: baseUrl,
            description: "Senior Software Engineer with expertise in web development",
            sameAs: [
              "https://twitter.com/rjvelazco21",
              "https://www.linkedin.com/in/rafael-velazco/",
              "https://github.com/rjvelazco",
            ],
            worksFor: {
              "@type": "Organization",
              name: "dotCMS",
            },
            knowsAbout: [
              "Web Development",
              "Frontend Development",
              "React",
              "NextJS",
              "TypeScript",
              "JavaScript",
            ],
          }),
        }}
      />
    </body>
  );
}
