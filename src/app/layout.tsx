import './globals.css';

import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter-variable', 
});

export const metadata: Metadata = {
  title: 'Social_', 
  description: 'A platform for creators', 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-dark-1 text-light-1 min-h-screen font-inter`}>
        {children}
      </body>
    </html>
  );
}