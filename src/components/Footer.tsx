import { MapPin, Mail, Clock } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Footer() {
  const t = useTranslations("footer");

  const contactInfo = [
    {
      icon: MapPin,
      label: t("addressLabel"),
      value: t("addressValue"),
    },
    {
      icon: Mail,
      label: t("emailLabel"),
      value: "info@tikneo.com",
      href: "mailto:info@tikneo.com",
    },
    {
      icon: Clock,
      label: t("scheduleLabel"),
      value: t("scheduleValue"),
    },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 mb-10 sm:mb-12 text-center sm:text-left">
          {contactInfo.map((item) => {
            const Icon = item.icon;
            const block = (
              <>
                <Icon className="h-5 w-5 text-primary-foreground/70 shrink-0 sm:mt-0.5" />
                <div>
                  <p className="font-semibold text-primary-foreground text-sm uppercase tracking-wide mb-1">
                    {item.label}
                  </p>
                  <p className="text-primary-foreground/70 text-sm sm:text-base leading-relaxed">
                    {item.value}
                  </p>
                </div>
              </>
            );
            const wrapperClass =
              "flex flex-col sm:flex-row items-center sm:items-start gap-3";
            return (
              <div key={item.label} className={wrapperClass}>
                {item.href ? (
                  <a
                    href={item.href}
                    className={`${wrapperClass} text-primary-foreground/70 hover:text-primary-foreground transition-colors`}
                  >
                    {block}
                  </a>
                ) : (
                  block
                )}
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-primary-foreground/20">
          <span className="text-primary-foreground/60 text-sm sm:text-base">
            {t("copyright")}
          </span>
          <Link
            href="/contact"
            className="text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium transition-colors"
          >
            {t("contact")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
