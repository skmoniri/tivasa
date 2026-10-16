import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { isLocale, getDirection } from "@/i18n/config";

import MaintenanceHero from "@/app/components/tivasa/maintenance/MaintenanceHero";
import MaintenanceStrategies from "@/app/components/tivasa/maintenance/MaintenanceStrategies";
import MaintenanceSchedule from "@/app/components/tivasa/maintenance/MaintenanceSchedule";
import CriticalFacilities from "@/app/components/tivasa/maintenance/CriticalFacilities";
import MaintenanceMonitoring from "@/app/components/tivasa/maintenance/MaintenanceMonitoring";
import EngineeringService from "@/app/components/tivasa/maintenance/EngineeringService";
import MaintenanceContact from "@/app/components/tivasa/maintenance/MaintenanceContact";

interface MaintenancePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: MaintenancePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const isRTL = locale === "fa";

  return {
    title: isRTL
      ? "نگهداری و سرویس سیستم‌های VRF | تیواسا"
      : "VRF Maintenance & Service | Tivasa",
    description: isRTL
      ? "خدمات نگهداری پیشگیرانه، پیش‌بینانه و اصلاحی سیستم‌های VRF با تمرکز بر پایداری سرمایش و عملکرد تأسیسات حساس."
      : "Engineering-led VRF maintenance, preventive inspections, predictive monitoring and corrective service for critical facilities.",
  };
}

export default async function MaintenancePage({
  params,
}: MaintenancePageProps) {
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
      <MaintenanceHero locale={locale} />
      <MaintenanceStrategies locale={locale} />
      <MaintenanceSchedule locale={locale} />
      <CriticalFacilities locale={locale} />
      <MaintenanceMonitoring locale={locale} />
      <EngineeringService locale={locale} />
      <MaintenanceContact locale={locale} />
    </main>
  );
}
