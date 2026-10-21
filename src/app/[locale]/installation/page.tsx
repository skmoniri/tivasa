
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import StructuredData from "@/app/components/StructuredData";
import { getInstallationSchema } from "@/lib/structuredData";

import InstallationHero from "@/app/components/tivasa/installation/InstallationHero";
import InstallationApproach from "@/app/components/tivasa/installation/InstallationApproach";
import InstallationProcess from "@/app/components/tivasa/installation/InstallationProcess";
import InstallationCommissioning from "@/app/components/tivasa/installation/InstallationCommissioning";
import InstallationMaintenance from "@/app/components/tivasa/installation/InstallationMaintenance";
import InstallationManufacturers from "@/app/components/tivasa/installation/InstallationManufacturers";
import InstallationCTA from "@/app/components/tivasa/installation/InstallationCTA";

import { isLocale, getDirection } from "@/i18n/config";
import { getPageMetadata } from "@/lib/seo";

interface InstallationPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: InstallationPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return getPageMetadata(locale, "installation");
}

export default async function InstallationPage({
  params,
}: InstallationPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <>
      <StructuredData data={getInstallationSchema(locale)} />

      <main
        id="main-content"
        dir={getDirection(locale)}
        className="min-h-screen overflow-hidden bg-background text-foreground"
      >
        <InstallationHero locale={locale} />
        <InstallationApproach locale={locale} />
        <InstallationProcess locale={locale} />
        <InstallationCommissioning locale={locale} />
        <InstallationMaintenance locale={locale} />
        <InstallationManufacturers locale={locale} />
        <InstallationCTA locale={locale} />
      </main>
    </>
  );
}
