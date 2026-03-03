import {
  IconShieldCheck,
  IconClockHistory,
  IconBarChartReport,
} from "@/components/icons/HeroFeatureIcons";

const cards = [
  {
    icon: IconShieldCheck,
    title: "Cumple normativa",
    subtitle: "Real Decreto-ley 8/2019",
  },
  {
    icon: IconClockHistory,
    title: "Control de turnos y ausencias",
    subtitle: null,
  },
  {
    icon: IconBarChartReport,
    title: "Informes automáticos para empresas",
    subtitle: null,
  },
];

export default function HeroFeatureCards() {
  return (
    <section className="absolute max-w-7xl mx-auto top-125 z-10 w-full  px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-end">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-lg
                         bg-linear-to-br from-white via-secondary to-primary/5
                         p-6 gap-4 flex flex-row items-center
                         backdrop-blur-sm"
          >
            {/* Content */}
            <div className="relative z-10 flex gap-4 w-full h-10 items-center text-primary shadow-2xl shadow-primary/10">
              <card.icon className="h-14 w-14 shrink-0 shadow-2xl shadow-primary/10" />

              <div className="flex flex-col items-start justify-center">
                <h3 className="text-lg font-bold text-primary mb-1">
                  {card.title}
                </h3>

                {card.subtitle && (
                  <p className="text-sm text-muted-foreground">
                    {card.subtitle}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
