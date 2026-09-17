import { setRequestLocale } from "next-intl/server";
import PricingCards from "@/components/pricing/PricingCards";
import CTABanner from "@/components/CTABanner";
import PricingComparisonTable from "@/components/pricing/PricingComparisonTable";
import MobilityCard from "@/components/pricing/Mobility";

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen bg-white">
      <PricingCards />
      <MobilityCard />
      <CTABanner />
      <PricingComparisonTable />
    </main>
  );
}
