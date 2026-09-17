import { Check, X } from "lucide-react";
import { Red_Hat_Display } from "next/font/google";
import { useTranslations } from "next-intl";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["600"],
  preload: false,
});

// Índice de la primera característica exclusiva del Plan Avanzado dentro de
// `pricing.comparison.features`: las anteriores están en los dos planes.
const FIRST_ADVANCED_ONLY = 8;

export default function PricingComparisonTable() {
  const t = useTranslations("pricing");
  const features = t.raw("comparison.features") as string[];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[858px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 mb-14">
          <h2
            className={`${redHatDisplay.className} text-[40px] font-semibold text-navy text-center`}
          >
            {t("comparison.title")}
          </h2>
          <p
            className={`${redHatDisplay.className} text-2xl font-semibold text-navy text-center max-w-[718px]`}
          >
            {t("comparison.subtitle")}
          </p>
        </div>

        <div className="relative rounded-[32px] shadow-[1px_16px_48px_0px_rgba(12,12,13,0.1),0px_4px_4px_0px_rgba(12,12,13,0.05)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px]">
              <thead>
                <tr>
                  <th className="bg-white px-8 py-4 text-left w-[255px] rounded-tl-[32px]">
                    <span className="text-base font-bold text-transparent">
                      {t("comparison.nameHeader")}
                    </span>
                  </th>
                  <th className="bg-white px-2 py-4 text-center w-[301px]">
                    <span className="text-xl font-bold text-navy">
                      {t("plans.esencial.name")}
                    </span>
                  </th>
                  <th className="bg-white px-2 py-4 text-center w-[301px] rounded-tr-[32px]">
                    <span className="text-xl font-bold text-navy">
                      {t("plans.avanzado.name")}
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => {
                  const inEssential = index < FIRST_ADVANCED_ONLY;

                  return (
                    <tr key={feature}>
                      <td className="border-b border-bg-light px-8 py-3 text-sm font-semibold text-navy">
                        {feature}
                      </td>
                      <td className="border-b border-bg-light px-2 py-3 text-center">
                        {inEssential ? (
                          <Check className="h-6 w-6 text-navy mx-auto" />
                        ) : (
                          <X className="h-6 w-6 text-gray-300 mx-auto" />
                        )}
                      </td>
                      <td className="border-b border-bg-light px-2 py-3 text-center">
                        <Check className="h-6 w-6 text-navy mx-auto" />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-8 rounded-r-[32px] bg-gradient-to-l from-white to-transparent md:hidden"
          />
        </div>
      </div>
    </section>
  );
}
