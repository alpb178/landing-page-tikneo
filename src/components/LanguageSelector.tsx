"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { LANGUAGES } from "@/constant/languages";

type LanguageSelectorProps = {
  variant?: "desktop" | "mobile";
};

export default function LanguageSelector({
  variant = "desktop",
}: LanguageSelectorProps) {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("nav");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".language-menu-container")) setIsOpen(false);
    };

    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleChangeLanguage = (nextLocale: string) => {
    router.replace(pathname, { locale: nextLocale });
    setIsOpen(false);
  };

  const current = LANGUAGES.find((lang) => lang.code === locale) ?? LANGUAGES[0];

  if (variant === "mobile") {
    return (
      <div className="flex flex-wrap gap-2 pt-2">
        {LANGUAGES.map((lang) => (
          <button
            key={lang.code}
            type="button"
            onClick={() => handleChangeLanguage(lang.code)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              locale === lang.code
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-primary"
            }`}
          >
            <span>{lang.flag}</span>
            <span>{lang.name}</span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="relative language-menu-container">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={t("language")}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-3 py-2 text-lg font-medium text-gray-600 hover:text-primary transition-colors"
      >
        <span className="text-base">{current.flag}</span>
        <span className="uppercase text-base">{locale}</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      {isOpen && (
        <ul className="absolute right-0 mt-2 w-48 rounded-xl border border-border bg-white shadow-lg overflow-hidden z-50 py-1">
          {LANGUAGES.map((lang) => (
            <li key={lang.code}>
              <button
                type="button"
                onClick={() => handleChangeLanguage(lang.code)}
                className={`w-full flex items-center gap-2 px-4 py-2.5 text-left text-sm transition-colors ${
                  locale === lang.code
                    ? "bg-secondary text-primary font-semibold"
                    : "text-gray-600 hover:bg-secondary hover:text-primary"
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
