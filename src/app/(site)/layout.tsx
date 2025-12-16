import type { Metadata } from 'next';
import { NavBar } from '@components/layout/nav-bar';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Rafael Velazco',
  description: 'Senior Software Engineer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();

  return (
    <body className="layout_container relative flex flex-col min-h-screen max-w-[68rem] mx-auto px-4">
      <header className="flex items-center justify-between py-6 w-full mx-auto px-4">
        <div className="flex items-center gap-4">
          <div>
            <h2 className="text-3xl font-bold">Rafael Velazco</h2>
            <p className="text-lg">Senior Software Engineer</p>
          </div>
        </div>
        <NavBar />
      </header>
      <main className="flex-grow w-full mx-auto px-4">{children}</main>
      <footer className="bg-white rounded-lg mx-auto w-full mx-auto p-4 gap-4 flex justify-center flex-col-reverse sm:flex-col sm:items-end text-gray-500">
        <div className="w-full flex flex-col-reverse gap-4 justify-center items-center sm:flex-row sm:items-center sm:justify-between">
          <span className="sm:text-center">
            © {currentYear} <Link href="/">Rafael Velazco</Link>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 font-medium gap-2 sm:mt-0">
            <Link href="https://github.com/rjvelazco">
              <li>
                <Image className="cursor-pointer" src="/assets/github.svg" alt="GitHub" width={16} height={16} />
              </li>
            </Link>
            <Link href="https://www.linkedin.com/in/rafael-velazco/">
              <li>
                <Image className="cursor-pointer" src="/assets/linkedin.svg" alt="LinkedIn" width={16} height={16} />
              </li>
            </Link>
            <li className="hover:underline">
              <a href="mailto:rjvelazco21@gmail.com">Contact</a>
            </li>
          </ul>
        </div>
      </footer>
    </body>
  );
}
