import "@fontsource-variable/onest";

import type { Metadata } from "next";
import { PortfolioHeader } from "./_components/PortfolioHeader";
import { PortfolioFooter } from "./_components/PortfolioFooter";

import "../globals.css";

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
    creator: "@rafa_velazco",
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
  return (
    <html lang="en">
      <body className="relative font-onest portfolio_gradient">
        <PortfolioHeader />
        <main className="w-full mx-auto max-w-[64rem]">{children}</main>
        <PortfolioFooter />
      </body>
    </html>
  );
}
