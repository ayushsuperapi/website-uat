import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'SuperAPI - 10x faster APIs',
  description: 'SuperAPI - API caching solution with automatic cache invalidation',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.GA_ID;

  if (!gaId) {
    console.warn('Google Analytics ID is not defined in environment variables');
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
