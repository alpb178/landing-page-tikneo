import { setRequestLocale } from "next-intl/server";
import Demo from "@/containers/demo";

export default async function DemoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <Demo />;
}
