"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const SUPPORT_EMAIL = "info@tikneo.com";
const SUCCESS_RESET_DELAY_MS = 6000;

const inputClasses =
  "w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors";

export default function Support() {
  const t = useTranslations("support");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const asunto = ((data.get("asunto") as string) || "").trim();
    const subject = encodeURIComponent(
      asunto
        ? t("mailtoSubject", { subject: asunto })
        : t("mailtoSubjectFallback")
    );
    const body = encodeURIComponent((data.get("mensaje") as string) || "");
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`;
    setStatus("success");
    setTimeout(() => setStatus("idle"), SUCCESS_RESET_DELAY_MS);
  };

  return (
    <section className="min-h-screen py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <AnimateOnScroll variant="fadeUp">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-center mb-3">
            {t("title")}
          </h1>
          <p className="text-gray-600 text-center text-base sm:text-lg leading-relaxed">
            {t("intro")}
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeUp" delay={80}>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 rounded-2xl bg-secondary px-5 py-4 text-center">
            <span className="flex items-center gap-2 font-semibold text-primary">
              <Mail className="h-5 w-5 shrink-0" aria-hidden="true" />
              {t("emailLabel")}
            </span>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="font-semibold text-primary underline underline-offset-2 hover:opacity-80 transition-opacity"
            >
              {SUPPORT_EMAIL}
            </a>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeUp" delay={120}>
          <div className="mt-8 bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 p-5 sm:p-6 md:p-10">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="soporte-asunto"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("subject")}
                </label>
                <input
                  id="soporte-asunto"
                  name="asunto"
                  type="text"
                  className={inputClasses}
                  placeholder={t("subjectPlaceholder")}
                />
              </div>

              <div>
                <label
                  htmlFor="soporte-mensaje"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("message")}
                </label>
                <textarea
                  id="soporte-mensaje"
                  name="mensaje"
                  required
                  rows={6}
                  className={`${inputClasses} resize-y`}
                  placeholder={t("messagePlaceholder")}
                />
              </div>

              <div className="pt-2">
                {status === "success" && (
                  <p
                    role="status"
                    className="text-center text-sm text-green-600 font-medium mb-3"
                  >
                    {t("success", { email: SUPPORT_EMAIL })}
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

        <p className="mt-6 text-center text-sm text-gray-500">
          {t("fallbackBefore")}{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
