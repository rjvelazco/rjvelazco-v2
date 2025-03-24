import "@fontsource-variable/onest"

import type { Metadata } from "next";
import { Header } from "./components/Header";

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
      <body
        className={`layout_container relative font-onest`}
      >
        <Header />
        <main className="w-full mx-auto max-w-[64rem]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

const Footer = () => {
  return (
    <footer className="opacity-80 m-4 min-[375px]:pl-4 md:pl-0 mt-16 w-full mx-auto container lg:max-w-4xl md:max-w-2xl mb-10 flex justify-center">
      <div className="rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-4">
        <span className="text-sm sm:text-center text-zinc-800/90">
          <a href="https://rafaelvelazco.com/" className="hover:underline">
            Rafael Velazco
          </a>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
          <li>
            <a
              href="/portfolio#about-me"
              className="hover:underline me-4 md:me-6"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              id="contacto"
              href="mailto:rjvelazco21@gmail.com"
              className="hover:underline"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
