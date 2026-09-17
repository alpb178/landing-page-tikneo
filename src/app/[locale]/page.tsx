import { setRequestLocale } from "next-intl/server";
import Initial from "@/containers/initial";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <Initial />;
}
