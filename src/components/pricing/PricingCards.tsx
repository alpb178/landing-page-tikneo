"use client";

import { CircleCheckBig } from "lucide-react";
import { Red_Hat_Display } from "next/font/google";
import { useState } from "react";
import PlanContactModal from "./PlanContactModal";
import { plans, planOptions } from "./plans";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["600"],
});

export default function PricingCards() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  return (
    <section className="bg-bg-light py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`${redHatDisplay.className} text-[40px] font-semibold text-navy text-center mb-16`}
        >
          Planes y precios
        </h2>

        <div className="flex flex-col md:flex-row gap-5 justify-center max-w-[858px] mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.slug}
              className={`bg-white rounded-[32px] px-8 py-6 flex flex-col w-full md:w-[419px] ${
                plan.highlighted
                  ? "shadow-[0px_0px_16px_0px_#3064d9,0px_4px_4px_0px_rgba(12,12,13,0.05)]"
                  : "shadow-[0px_4px_4px_0px_rgba(12,12,13,0.05)]"
              }`}
            >
              <p className="text-muted-foreground text-base font-semibold mb-6">
                {plan.label}
              </p>

              <div className="flex items-end mb-4">
                <span className="text-[40px] font-semibold leading-[1.2] text-black">
                  {plan.price}
                </span>
                <span className="text-base text-black ml-1 pb-0.5">
                  {plan.baseDescription}
                </span>
              </div>
              <p className="text-blue-accent text-base mb-6">
                {plan.extraEmployee}
              </p>

              <div className="border-t border-gray-200 mb-6" />

              <ul className="space-y-2 mb-6 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CircleCheckBig className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-black text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => setSelectedSlug(plan.slug)}
                className="block w-full text-center bg-navy text-light-blue rounded-[32px] h-12 leading-[48px] font-semibold hover:opacity-90 transition-opacity"
              >
                Elegir plan
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedSlug && (
        <PlanContactModal
          plans={planOptions}
          selectedSlug={selectedSlug}
          onSelectPlan={setSelectedSlug}
          onClose={() => setSelectedSlug(null)}
        />
      )}
    </section>
  );
}
