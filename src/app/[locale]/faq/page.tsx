import { setRequestLocale } from "next-intl/server";
import FAQ from "@/containers/faq";

export default async function FAQPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <FAQ />;
}
