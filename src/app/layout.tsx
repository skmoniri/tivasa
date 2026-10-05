import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Header from "@/app/components/sections/Header";
import Footer from "@/app/components/sections/Footer";

const clashGrotesk = localFont({
  src: "./fonts/ClashGrotesk-Variable.woff2",
  variable: "--font-clash-grotesk",
  display: "swap",
  weight: "200 700",
});

const ibmPlexSans = localFont({
  src: "./fonts/IBM-Plex-Sans-Variable.woff2",
  variable: "--font-ibm-plex-sans",
  display: "swap",
  weight: "100 700",
});

export const metadata: Metadata = {
  title: "Tivasa",
  description: "Tivasa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${clashGrotesk.variable} ${ibmPlexSans.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
