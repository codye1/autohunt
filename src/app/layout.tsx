import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ReactNode } from 'react';
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

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${styles.layout}`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
