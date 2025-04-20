import type { Metadata } from "next";
import { NavBar } from "@components/NavBar";

export const metadata: Metadata = {
  title: "Rafael Velazco",
  description: "Senior Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();

  return (
    <body className="layout_container relative flex flex-col min-h-screen max-w-[64rem] mx-auto">
      {/* This should be a component */}
      <header className="flex items-center justify-between py-6 w-full mx-auto px-4">
        <div className="flex items-center gap-4">
          <div>
            <h2 className="text-3xl font-bold">Rafael Velazco</h2>
            <p className="text-lg">Senior Software Engineer</p>
          </div>
        </div>
        <NavBar />
      </header>
      <main className="flex-grow w-full mx-auto px-4">
        {children}
      </main>
      <footer className="bg-white rounded-lg mx-auto w-full">
        <div className="w-full mx-auto p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © {currentYear}{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Rafael Velazco
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </body>
  );
}
