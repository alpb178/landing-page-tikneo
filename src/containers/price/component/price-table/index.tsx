import EssentialPlan from "./EssentialPlan";
import AdvancedPlan from "./AdvancedPlan";
import MobilityPlan from "./MobilityPlan";

export default function PriceTable() {
  return (
    <div className="w-full md:max-w-7xl mx-auto ">
      <h2 className="text-2xl md:text-3xl font-bold text-purple-900 text-center mb-10">
        Planes y precios
      </h2>
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
        <EssentialPlan />

        <AdvancedPlan />
      </div>
    </div>
  );
}
