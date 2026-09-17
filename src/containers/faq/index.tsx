"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import AnimateOnScroll from "@/components/AnimateOnScroll";

type FaqItem = {
  question: string;
  answer: string;
  linkLabel?: string;
  linkHref?: string;
  isContact?: boolean;
};

export default function FAQ() {
  const t = useTranslations("faq");
  const faqItems = t.raw("items") as FaqItem[];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative min-h-screen py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(147 51 234 / 0.3) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative max-w-3xl mx-auto">
        <AnimateOnScroll variant="fadeUp">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-center mb-4">
            {t("title")}
          </h1>
          <p className="text-gray-600 text-center text-base md:text-lg mb-8 sm:mb-12">
            {t("subtitle")}
          </p>
        </AnimateOnScroll>

        <div className="space-y-3 sm:space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-4 sm:px-6 py-4 sm:py-5 text-left font-semibold text-primary hover:bg-gray-50/50 active:bg-gray-100/50 transition-colors min-h-[52px] touch-manipulation rounded-2xl"
                >
                  <span className="pr-4">{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-0">
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed pl-0">
                      {item.answer}
                      {item.linkLabel && item.linkHref && (
                        <>
                          {" "}
                          <Link
                            href={item.linkHref}
                            className="text-primary hover:text-primary underline font-medium inline-flex items-center gap-1"
                          >
                            {item.linkLabel}
                          </Link>
                          {item.answer.trimEnd().endsWith(".") ? "" : "."}
                        </>
                      )}
                    </p>
                    {item.isContact && (
                      <div className="mt-4 flex justify-end">
                        <Link
                          href="/contact"
                          className="inline-flex items-center justify-center bg-primary hover:opacity-90 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                        >
                          {t("contactCta")}
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-end">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-primary hover:opacity-90 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            {t("helpCta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
