import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";

type LegalSection = { title: string; body: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal.terms" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function CondicionesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("legal.terms");
  const sections = t.raw("sections") as LegalSection[];

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-center mb-10">
          {t("title")}
        </h1>

        <div className="space-y-8 text-gray-600 text-base leading-relaxed">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-bold text-primary mb-2">
                {section.title}
              </h2>
              <p>{section.body}</p>
            </div>
          ))}

          <div>
            <h2 className="text-lg font-bold text-primary mb-2">
              {t("dataProtection.title")}
            </h2>
            <p>
              {t.rich("dataProtection.body", {
                privacy: (chunks) => (
                  <Link
                    href="/legal/privacidad"
                    className="text-primary font-medium hover:underline"
                  >
                    {chunks}
                  </Link>
                ),
              })}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-2">
              {t("law.title")}
            </h2>
            <p>{t("law.body")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
