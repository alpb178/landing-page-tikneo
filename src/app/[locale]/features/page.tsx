import { setRequestLocale } from "next-intl/server";
import Features from "@/containers/features";

export default async function FeaturesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <Features />;
}
