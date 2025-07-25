import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/shared/ThemeProvider";

import { Footer } from "@/components/shared/Footer";
import Web3Providers from './providers/Web3Providers';
import GlobalNavbar from '@/components/shared/GlobalNavbar';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BlockSecure Insurance - Decentralized Insurance Platform",
  description: "Secure, transparent insurance powered by blockchain technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Web3Providers>
          <ThemeProvider defaultTheme="light" storageKey="blocksecure-ui-theme">
            <GlobalNavbar />
            <main className="pt-16">{children}</main>
            <Footer />
          </ThemeProvider>
        </Web3Providers>
      </body>
    </html>
  );
}
