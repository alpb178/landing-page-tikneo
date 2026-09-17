"use client";

import { useState } from "react";
import {
  FileCheck,
  Building2,
  FolderKanban,
  Clock,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  Cloud,
  Users,
  Calendar,
  type LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";
import AnimateOnScroll from "@/components/AnimateOnScroll";

type FeatureItem = {
  icon: LucideIcon;
  key: string;
};

const features: FeatureItem[] = [
  { icon: FileCheck, key: "report" },
  { icon: Building2, key: "multicompany" },
  { icon: FolderKanban, key: "projects" },
  { icon: Clock, key: "shifts" },
  { icon: MessageCircle, key: "chat" },
  { icon: ShieldCheck, key: "security" },
  { icon: Smartphone, key: "remote" },
  { icon: Cloud, key: "storage" },
  { icon: Users, key: "clients" },
  { icon: Calendar, key: "calendar" },
];

function FeatureCard({ item }: { item: FeatureItem }) {
  const t = useTranslations(`features.items.${item.key}`);
  const highlights = t.raw("highlights") as string[];

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow h-full flex flex-col">
      <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-5">
        <item.icon className="h-7 w-7" />
      </div>

      <h2 className="text-lg font-bold text-primary mb-2">{t("label")}</h2>

      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {t("description")}
      </p>

      <ul className="mt-auto space-y-2">
        {highlights.map((point) => (
          <li key={point} className="flex items-start gap-2">
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary/60" />
            <span className="text-sm text-foreground/70">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Features() {
  const t = useTranslations("features");
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = features[activeIndex];

  return (
    <section className="bg-layout-lavender py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll variant="fadeUp">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3">
              {t("title")}
            </h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>
        </AnimateOnScroll>

        {/* Móvil: tabs para navegar entre características sin scroll largo */}
        <div className="sm:hidden">
          <div
            role="tablist"
            aria-label={t("tablistLabel")}
            className="flex gap-2 overflow-x-auto pb-3 mb-5 -mx-4 px-4"
          >
            {features.map((item, index) => (
              <button
                key={item.key}
                role="tab"
                aria-selected={index === activeIndex}
                onClick={() => setActiveIndex(index)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === activeIndex
                    ? "bg-primary text-white shadow-md"
                    : "bg-white text-primary border border-primary/20"
                }`}
              >
                {t(`items.${item.key}.label`)}
              </button>
            ))}
          </div>

          <FeatureCard key={activeFeature.key} item={activeFeature} />
        </div>

        {/* Tablet y escritorio: grid completo */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((item, index) => (
            <AnimateOnScroll key={item.key} variant="fadeUp" delay={index * 80}>
              <FeatureCard item={item} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
