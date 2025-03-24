import "@fontsource-variable/onest"

import type { Metadata } from "next";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import "../globals.css";

export const metadata: Metadata = {
  title: "Rafael Velazco",
  description: "Senior Software Engineer",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative font-onest portfolio_gradient">
        <Header />
        <main className="w-full mx-auto max-w-[64rem]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
