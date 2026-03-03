import PricingCards from "@/components/pricing/PricingCards";
import PricingCTABanner from "@/components/pricing/PricingCTABanner";
import PricingComparisonTable from "@/components/pricing/PricingComparisonTable";
import MobilityCard from "@/components/pricing/Mobility";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <PricingCards />
      <MobilityCard />
      <PricingCTABanner />
      <PricingComparisonTable />
    </main>
  );
}
