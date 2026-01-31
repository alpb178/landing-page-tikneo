"use client";

import ComparativeTable from "./component/ComparativeTable";
import PriceTable from "./component/price-table";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function Price() {
  return (
    <section className="min-h-screen w-full md:min-w-7xl mx-auto flex flex-col justify-center items-center gap-10 sm:gap-14 md:gap-16 py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <AnimateOnScroll variant="fadeUp">
        <PriceTable />
      </AnimateOnScroll>
      <AnimateOnScroll variant="fadeUp" delay={100}>
        <ComparativeTable />
      </AnimateOnScroll>
    </section>
  );
}
