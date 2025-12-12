import React from "react";
import { Inter } from 'next/font/google'
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rjvelazco.com"),
  title: "Rafael Velazco",
  description: "Senior Software Engineer",
};
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      {children}
    </html>
  );
}
