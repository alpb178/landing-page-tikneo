"use client";

import Features from "@/components/initial/BussinessTools/Features";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function WhyTikneo() {
  const t = useTranslations("whyTikneo");
  const paragraphs = t.raw("paragraphs") as string[];

  return (
    <section className="min-h-screen py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="w-full md:max-w-5xl mx-auto">
        <AnimateOnScroll variant="fadeUp">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-center mb-8 sm:mb-10">
            {t("title")}
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeUp" delay={80}>
        <div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed mb-10 sm:mb-12">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="flex justify-center mb-12 sm:mb-16">
          <Link
            href="/price"
            className="inline-flex items-center justify-center bg-primary hover:opacity-90 text-white font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-md transition-colors min-h-[44px] touch-manipulation"
          >
            {t("cta")}
          </Link>
        </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeUp" delay={120}>
          <Features />
        </AnimateOnScroll>
      </div>
    </section>
  );
}
