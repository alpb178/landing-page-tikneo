import { useTranslations } from "next-intl";
import Features from "./BussinessTools/Features";

export default function WhatIs() {
  const t = useTranslations("home.whatIs");

  return (
    <section className=" px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center mb-6">
          {t("title")}
        </h2>
        <p className="text-base md:text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12 md:mb-16 leading-relaxed">
          {t("description")}
        </p>

        <div className="flex flex-col justify-center items-center text-center">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3">
            {t("toolsTitle")}
          </h3>
          <p className="text-muted-foreground text-base md:text-lg mb-12 md:mb-16 italic">
            {t("quote")}
          </p>
        </div>

        <Features />
      </div>
    </section>
  );
}
