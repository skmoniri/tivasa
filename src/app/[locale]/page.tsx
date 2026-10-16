import type { Metadata } from "next";
import { notFound } from "next/navigation";

import MainPage from "@/app/components/tivasa/MainPage";

import StructuredData from "@/app/components/StructuredData";
import { getOrganizationSchema } from "@/lib/structuredData";

import { isLocale } from "@/i18n/config";
import { getPageMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return getPageMetadata(locale, "home");
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <>
      <StructuredData data={getOrganizationSchema()} />
      <MainPage locale={locale} />
    </>
  );
}
