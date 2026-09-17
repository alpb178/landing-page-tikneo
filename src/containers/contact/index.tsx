"use client";

import { Fragment, useState } from "react";
import { MapPin, Mail, Clock } from "lucide-react";
import { useTranslations } from "next-intl";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const cards = [
  { icon: MapPin, key: "address" },
  { icon: Mail, key: "email" },
  { icon: Clock, key: "schedule" },
] as const;

export default function Contact() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (key: string) => (data.get(key) as string) || "-";
    const subject = encodeURIComponent(
      t("mailto.subject", { subject: get("asunto") })
    );
    const body = encodeURIComponent(
      `${t("mailto.name")}: ${get("nombre")}\n` +
        `${t("mailto.email")}: ${get("email")}\n\n` +
        `${get("mensaje")}`
    );
    window.location.href = `mailto:info@tikneo.com?subject=${subject}&body=${body}`;
    setStatus("success");
    setTimeout(() => setStatus("idle"), 6000);
  };

  const cardLines = (key: string): string[] =>
    key === "email" ? ["info@tikneo.com"] : (t.raw(`cards.${key}.lines`) as string[]);

  return (
    <section className="min-h-screen py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll variant="fadeUp">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-center mb-3">
            {t("title")}
          </h1>
          <p className="text-gray-600 text-center text-base sm:text-lg mb-10 sm:mb-12">
            {t("subtitle")}
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {cards.map((card, index) => (
            <AnimateOnScroll key={card.key} variant="scaleIn" delay={index * 80}>
              <div className="h-full bg-white flex flex-col justify-center items-center rounded-2xl shadow-md border border-gray-100 p-5 sm:p-6 md:p-8 text-center md:text-left hover:shadow-lg transition-shadow min-h-[200px] sm:min-h-[220px]">
                <card.icon className="h-14 w-14 sm:h-20 sm:w-20 md:h-24 md:w-24 text-primary shrink-0 mb-3" />
                <h2 className="text-base sm:text-lg font-bold text-primary mb-2 sm:mb-3">
                  {t(`cards.${card.key}.title`)}
                </h2>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {cardLines(card.key).map((line, lineIndex) => (
                    <Fragment key={line}>
                      {lineIndex > 0 && <br />}
                      {line}
                    </Fragment>
                  ))}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll variant="fadeUp" delay={120}>
          <div className="mt-10 sm:mt-12 bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 p-5 sm:p-6 md:p-10 max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-primary text-center mb-3">
              {t("formTitle")}
            </h2>
            <p className="text-gray-600 text-center text-sm md:text-base mb-8">
              {t("formSubtitle")}
            </p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contacto-nombre"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t("name")}
                  </label>
                  <input
                    id="contacto-nombre"
                    name="nombre"
                    type="text"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder={t("namePlaceholder")}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contacto-email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t("email")}
                  </label>
                  <input
                    id="contacto-email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder={t("emailPlaceholder")}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contacto-asunto"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("subject")}
                </label>
                <input
                  id="contacto-asunto"
                  name="asunto"
                  type="text"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  placeholder={t("subjectPlaceholder")}
                />
              </div>

              <div>
                <label
                  htmlFor="contacto-mensaje"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("message")}
                </label>
                <textarea
                  id="contacto-mensaje"
                  name="mensaje"
                  required
                  rows={5}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-y"
                  placeholder={t("messagePlaceholder")}
                />
              </div>

              <div className="pt-2">
                {status === "success" && (
                  <p
                    role="status"
                    className="text-center text-sm text-green-600 font-medium mb-3"
                  >
                    {t("success")}
                  </p>
                )}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-white bg-primary hover:opacity-90 transition-all shadow-md"
                >
                  {t("submit")}
                </button>
              </div>
            </form>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
