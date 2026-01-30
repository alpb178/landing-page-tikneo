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
    <section className="absolute max-w-7xl mx-auto top-105 z-10 w-full  px-4 sm:px-6 lg:px-8">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-end">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-lg
                         bg-linear-to-br from-white via-purple-50 to-purple-100
                         p-6 gap-4 flex flex-row items-center
                         backdrop-blur-sm"
          >
            {/* Glow effect */}


            {/* Content */}
            <div className="relative z-10 flex gap-4 w-full h-10 items-center text-purple-600 shadow-2xl shadow-purple-200/50">
              <card.icon className="h-14 w-14 shrink-0 shadow-2xl shadow-purple-200/50" />

              <div className="flex flex-col items-start justify-center">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {card.title}
                </h3>

                {card.subtitle && (
                  <p className="text-sm text-gray-500">
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

