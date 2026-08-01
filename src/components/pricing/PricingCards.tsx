import { CircleCheckBig } from "lucide-react";
import { Red_Hat_Display } from "next/font/google";
import { plans } from "./plans";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["600"],
  preload: false,
});

export default function PricingCards() {
  return (
    <section className="bg-bg-light py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className={`${redHatDisplay.className} text-[40px] font-semibold text-navy text-center mb-16`}
        >
          Planes y precios
        </h1>

        <div className="flex flex-col md:flex-row gap-5 justify-center max-w-[858px] mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.slug}
              className="bg-white rounded-[32px] px-8 py-6 flex flex-col w-full md:w-[419px]"
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

              <ul className="space-y-2 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CircleCheckBig className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-black text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
