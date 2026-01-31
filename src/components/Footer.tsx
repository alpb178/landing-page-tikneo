import Link from "next/link";
import { MapPin, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Dirección",
    value: "Plaza Ferrerias 19. Oficina 1, Donostia, España CP 20011",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@tikneo.com",
    href: "mailto:info@tikneo.com",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lunes a viernes: 09:00 - 14:00 · 16:00 - 19:00",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 mb-10 sm:mb-12 text-center sm:text-left">
          {contactInfo.map((item) => {
            const Icon = item.icon;
            const block = (
              <>
                <Icon className="h-5 w-5 text-purple-400 shrink-0 sm:mt-0.5" />
                <div>
                  <p className="font-semibold text-white text-sm uppercase tracking-wide mb-1">
                    {item.label}
                  </p>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
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
                  <Link
                    href={item.href}
                    className={`${wrapperClass} text-gray-300 hover:text-white transition-colors`}
                  >
                    {block}
                  </Link>
                ) : (
                  block
                )}
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-700">
          <span className="text-gray-400 text-sm sm:text-base">
            © 2026 Tikneo
          </span>
          <Link
            href="/contact"
            className="text-purple-300 hover:text-purple-200 text-sm font-medium transition-colors"
          >
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  );
}
