import { Users, Briefcase, Paperclip, MessageCircle } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const featurePills = [
  { icon: Briefcase, key: "progress" },
  { icon: Paperclip, key: "attachments" },
  { icon: MessageCircle, key: "chat" },
] as const;

export default function ClientsFeature() {
  const t = useTranslations("home.clients");

  return (
    <section className="relative overflow-hidden  px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Patrón sutil de puntos */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, oklch(0.2667 0.08 263.3043 / 0.15) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Contenido izquierdo */}
          <div>
            <span className="inline-block bg-amber-400 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              {t("tag")}
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
              {t("title")}
            </h2>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                <Users className="h-6 w-6" />
              </div>
              <p className="text-lg md:text-xl font-semibold text-primary">
                {t("subtitle")}
              </p>
            </div>
            <p className="text-foreground/80 text-base md:text-lg leading-relaxed mb-6">
              {t("description")}
            </p>
            <div className="flex flex-wrap gap-3">
              {featurePills.map((pill) => (
                <span
                  key={pill.key}
                  className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-lg"
                >
                  <pill.icon className="h-4 w-4" />
                  {t(`pills.${pill.key}`)}
                </span>
              ))}
            </div>
          </div>

          {/* Mockup smartphone derecho */}
          <Image
            src="/images/chat.png"
            alt={t("imageAlt")}
            width={632}
            height={1314}
            className="w-full max-w-[380px] h-auto mx-auto drop-shadow-[0_18px_38px_rgba(0,0,0,0.16)]"
          />
        </div>
      </div>
    </section>
  );
}
