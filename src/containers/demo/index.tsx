"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const COUNTRY_CODES = [
  "es", "mx", "ar", "co", "cl", "pe", "ve", "ec", "gt", "cu", "bo", "do",
  "hn", "py", "sv", "ni", "cr", "pa", "uy", "pr", "us", "ca", "br", "fr",
  "de", "it", "gb", "pt", "other",
] as const;

const EMPLOYEE_RANGES = ["1-15", "16-50", "51-150", "151-500", "500+"] as const;

const SECTORS = [
  "tecnologia",
  "construccion",
  "comercio",
  "servicios",
  "otros",
] as const;

const selectClass =
  "px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-size-[1.25rem] bg-position-[right_0.5rem_center] bg-no-repeat";

export default function Demo() {
  const t = useTranslations("demo");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (key: string) => (data.get(key) as string) || "-";
    const subject = encodeURIComponent(t("mailto.subject"));
    const body = encodeURIComponent(
      `${t("mailto.name")}: ${get("nombre")} ${get("apellidos")}\n` +
        `${t("mailto.email")}: ${get("email")}\n` +
        `${t("mailto.phone")}: ${get("telefonoCodigo")} ${get("telefono")}\n` +
        `${t("mailto.company")}: ${get("empresa")}\n` +
        `${t("mailto.employees")}: ${get("empleados")}\n` +
        `${t("mailto.role")}: ${get("cargo")}\n` +
        `${t("mailto.sector")}: ${get("sector")}`
    );
    window.location.href = `mailto:info@tikneo.com?subject=${subject}&body=${body}`;
    setStatus("success");
    setTimeout(() => setStatus("idle"), 6000);
  };

  return (
    <section className="min-h-screen py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <AnimateOnScroll variant="fadeUp">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 p-5 sm:p-6 md:p-10">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary text-center mb-3">
            {t("title")}
          </h1>
          <p className="text-gray-600 text-center text-sm md:text-base mb-8">
            {t("subtitle")}
            <br />
            {t("subtitle2")}
          </p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                  {t("firstName")}
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  placeholder={t("firstNamePlaceholder")}
                />
              </div>
              <div>
                <label htmlFor="apellidos" className="block text-sm font-medium text-gray-700 mb-1">
                  {t("lastName")}
                </label>
                <input
                  id="apellidos"
                  name="apellidos"
                  type="text"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  placeholder={t("lastNamePlaceholder")}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {t("email")}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  placeholder={t("emailPlaceholder")}
                />
              </div>
              <div>
                <label htmlFor="telefono-codigo" className="block text-sm font-medium text-gray-700 mb-1">
                  {t("phone")}
                </label>
                <div className="flex gap-2">
                  <select
                    id="telefono-codigo"
                    name="telefonoCodigo"
                    aria-label={t("countryCode")}
                    className={`w-[140px] shrink-0 pr-8 text-sm ${selectClass}`}
                  >
                    <option value="">{t("select")}</option>
                    {COUNTRY_CODES.map((code) => (
                      <option key={code} value={code}>
                        {t(`countries.${code}`)}
                      </option>
                    ))}
                  </select>
                  <input
                    id="telefono"
                    aria-label={t("phoneNumber")}
                    name="telefono"
                    type="tel"
                    autoComplete="tel-national"
                    placeholder={t("phoneNumber")}
                    className="flex-1 min-w-0 px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-1">
                  {t("company")}
                </label>
                <input
                  id="empresa"
                  name="empresa"
                  type="text"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  placeholder={t("companyPlaceholder")}
                />
              </div>
              <div>
                <label htmlFor="empleados" className="block text-sm font-medium text-gray-700 mb-1">
                  {t("employees")}
                </label>
                <select
                  id="empleados"
                  name="empleados"
                  className={`w-full pr-10 ${selectClass}`}
                >
                  <option value="">{t("selectOption")}</option>
                  {EMPLOYEE_RANGES.map((range) => (
                    <option key={range} value={range}>
                      {t(`employeeRanges.${range}`)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="cargo" className="block text-sm font-medium text-gray-700 mb-1">
                  {t("role")}
                </label>
                <input
                  id="cargo"
                  name="cargo"
                  type="text"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  placeholder={t("rolePlaceholder")}
                />
              </div>
              <div>
                <label htmlFor="sector" className="block text-sm font-medium text-gray-700 mb-1">
                  {t("sector")}
                </label>
                <select
                  id="sector"
                  name="sector"
                  required
                  className={`w-full pr-10 ${selectClass}`}
                >
                  <option value="">{t("selectOption")}</option>
                  {SECTORS.map((sector) => (
                    <option key={sector} value={sector}>
                      {t(`sectors.${sector}`)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <input
                id="terms"
                type="checkbox"
                required
                className="mt-1 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                {t.rich("terms", {
                  terms: (chunks) => (
                    <Link
                      href="/terms"
                      className="text-primary font-medium hover:underline"
                    >
                      {chunks}
                    </Link>
                  ),
                  privacy: (chunks) => (
                    <Link
                      href="/privacy"
                      className="text-primary font-medium hover:underline"
                    >
                      {chunks}
                    </Link>
                  ),
                })}
              </label>
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
              <p className="text-center text-gray-500 text-sm mt-3">
                {t("note")}
              </p>
            </div>
          </form>
        </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
