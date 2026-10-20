import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, getDirection } from "@/i18n/config";
import DatabaseHero from "@/app/components/tivasa/database/DatabaseHero";
import DatabaseOverview from "@/app/components/tivasa/database/DatabaseOverview";
import DatabaseBenefits from "@/app/components/tivasa/database/DatabaseBenefits";
import DatabaseFramework from "@/app/components/tivasa/database/DatabaseFramework";
import DatabaseExperience from "@/app/components/tivasa/database/DatabaseExperience";
import DatabaseContact from "@/app/components/tivasa/database/DatabaseContact";

interface DatabasePageProps { params: Promise<{ locale: string }>; }

export async function generateMetadata({ params }: DatabasePageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const fa = locale === "fa";
  return {
    title: fa ? "راهکارهای سرمایش دیتاسنتر با VRF | تیواسا" : "Data Center VRF Cooling Solutions | Tivasa",
    description: fa ? "کنترل دقیق دما، بهره‌وری انرژی، طراحی افزونگی و پایش سیستم‌های VRF برای دیتاسنترها و زیرساخت‌های حساس." : "Explore Tivasa's VRF cooling approach for data centers: precise temperature management, energy efficiency, redundancy planning and smart monitoring.",
  };
}

export default async function DatabasePage({ params }: DatabasePageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <main id="main-content" dir={getDirection(locale)} className="min-h-screen overflow-hidden bg-background text-foreground">
    <DatabaseHero locale={locale} />
    <DatabaseOverview locale={locale} />
    <DatabaseBenefits locale={locale} />
    <DatabaseFramework locale={locale} />
    <DatabaseExperience locale={locale} />
    <DatabaseContact locale={locale} />
  </main>;
}
