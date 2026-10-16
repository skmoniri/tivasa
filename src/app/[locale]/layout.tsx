import type { ReactNode } from "react";
import type { Metadata } from "next";

import localFont from "next/font/local";
import { Estedad } from "next/font/google";
import { notFound } from "next/navigation";

import Header from "@/app/components/sections/Header";
import Footer from "@/app/components/sections/Footer";

import { isLocale, getDirection } from "@/i18n/config";
import { SITE_URL } from "@/lib/seo";

import "../globals.css";

const clashGrotesk = localFont({
  src: "../fonts/ClashGrotesk-Variable.woff2",
  variable: "--font-clash-grotesk",
  display: "swap",
  weight: "200 700",
});

const ibmPlexSans = localFont({
  src: "../fonts/IBM-Plex-Sans-Variable.woff2",
  variable: "--font-ibm-plex-sans",
  display: "swap",
  weight: "100 700",
});

const estedad = Estedad({
  subsets: ["arabic", "latin"],
  weight: "variable",
  display: "swap",
  variable: "--font-estedad",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Tivasa",
};

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <html lang={locale} dir={getDirection(locale)}>
      <body
        className={`
          ${clashGrotesk.variable}
          ${ibmPlexSans.variable}
          ${estedad.variable}
        `}
      >
        <div className="min-h-screen">
          <Header locale={locale} />

          {children}

          <Footer locale={locale} />
        </div>
      </body>
    </html>
  );
}
