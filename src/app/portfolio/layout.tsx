import React from "react";

import type { Metadata } from "next";
import { PortfolioHeader } from "@components/portfolio/portfolio-header";
import { PortfolioFooter } from "@components/portfolio/portfolio-footer";

export const metadata: Metadata = {
  title: "Rafael Velazco | Senior Software Engineer",
  description: "Senior Software Engineer with expertise in web development",
  keywords: [
    "software engineer",
    "senior engineer",
    "web development",
    "portfolio",
  ],
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
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL || "https://www.rjvelazco.com";

  return (
    <body className="relative font-onest portfolio_gradient">
      <PortfolioHeader />
      <main className="w-full mx-auto max-w-[64rem]">{children}</main>
      <PortfolioFooter />

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
            description:
              "Senior Software Engineer with expertise in web development",
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
