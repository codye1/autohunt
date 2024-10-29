import Providers from '@/components/providers';
import type { Metadata } from 'next';
import { getSession } from 'next-auth/react';
import localFont from 'next/font/local';
import { ReactNode } from 'react';
import Header from './components/Header/Header';
import './globals.css';
import styles from './page.module.css';

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'AutoHunt | Cars',
  description: 'car selling website',
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const session = await getSession();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${styles.layout}`}
      >
        <Providers session={session}>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
