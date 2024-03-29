import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const links = [
  { href: '/', text: 'Home' },
  { href: '/docs', text: 'Docs' },
  { href: '/todos', text: 'Todos' },
];
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav>
            <ul className="flex items-center gap-4 justify-center p-4">
              {links.map(({ href, text }) => (
                <li
                  key={href}
                  className="bg-zinc-800/30 border border-neutral-800 px-4 py-2 rounded"
                >
                  <Link href={href}>{text}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
