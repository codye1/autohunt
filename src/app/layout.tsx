import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import styles from "./page.module.css"
import Header from "./ui/Header/Header";
import { connectToMongoDB } from "./lib/mongodb";
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
  title: "AutoHunt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  connectToMongoDB()
  return (
    <html lang="ua">
      <body className={`${geistSans.variable} ${geistMono.variable} ${styles.layout}`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
