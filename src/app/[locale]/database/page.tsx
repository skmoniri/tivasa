
import { notFound, redirect } from "next/navigation";
import { isLocale } from "@/i18n/config";

interface LegacyDatabasePageProps {
  params: Promise<{ locale: string }>;
}

export default async function LegacyDatabasePage({
  params,
}: LegacyDatabasePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  redirect(`/${locale}/dataCenter`);
}
