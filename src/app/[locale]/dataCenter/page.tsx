
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { isLocale, getDirection } from "@/i18n/config";

import DataCenterHero from "@/app/components/tivasa/dataCenter/DataCenterHero";
import DataCenterOverview from "@/app/components/tivasa/dataCenter/DataCenterOverview";
import DataCenterBenefits from "@/app/components/tivasa/dataCenter/DataCenterBenefits";
import DataCenterFramework from "@/app/components/tivasa/dataCenter/DataCenterFramework";
import DataCenterExperience from "@/app/components/tivasa/dataCenter/DataCenterExperience";
import DataCenterContact from "@/app/components/tivasa/dataCenter/DataCenterContact";

interface DataCenterPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: DataCenterPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const fa = locale === "fa";

  return {
    title: fa
      ? "راهکارهای سرمایش دیتاسنتر با VRF | تیواسا"
      : "Data Center VRF Cooling Solutions | Tivasa",

    description: fa
      ? "کنترل دقیق دما، بهره‌وری انرژی، طراحی افزونگی و پایش سیستم‌های VRF برای دیتاسنترها و زیرساخت‌های حساس."
      : "Explore Tivasa's VRF cooling approach for data centers: precise temperature management, energy efficiency, redundancy planning and smart monitoring.",
  };
}

export default async function DataCenterPage({
  params,
}: DataCenterPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <main
      id="main-content"
      dir={getDirection(locale)}
      className="min-h-screen overflow-hidden bg-background text-foreground"
    >
      <DataCenterHero locale={locale} />
      <DataCenterOverview locale={locale} />
      <DataCenterBenefits locale={locale} />
      <DataCenterFramework locale={locale} />
      <DataCenterExperience locale={locale} />
      <DataCenterContact locale={locale} />
    </main>
  );
}
