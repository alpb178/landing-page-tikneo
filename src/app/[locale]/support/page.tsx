import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Support from "@/containers/support";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "support" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function SupportPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <Support />;
}
