import { setRequestLocale } from "next-intl/server";
import WhyTikneo from "@/containers/why-tikneo";

export default async function WhyTikneoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <WhyTikneo />;
}
