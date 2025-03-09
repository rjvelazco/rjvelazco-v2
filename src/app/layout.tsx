import type { Metadata } from "next";

import localFont from "next/font/local";
import Image from "next/image";

import { NavBar } from "../layout/NavBar";

import photo from "../../public/me.jpg";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-paperWhite container mx-auto max-w-[64rem]`}
      >
        <header className="py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">

            <div>
              <h2 className="text-3xl font-bold">Rafael Velazco</h2>
              <p className="text-lg text-gray-500">Senior Software Engineer</p>
            </div>
          </div>
          <NavBar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
