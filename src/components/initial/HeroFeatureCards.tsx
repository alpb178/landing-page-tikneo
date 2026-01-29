import { Shield, Clock, FileText } from "lucide-react";

const cards = [
  {
    icon: Shield,
    title: "Cumple normativa",
    subtitle: "Real Decreto-ley 8/2019",
  },
  {
    icon: Clock,
    title: "Control de turnos y ausencias",
    subtitle: null,
  },
  {
    icon: FileText,
    title: "Informes automáticos para empresas",
    subtitle: null,
  },
];

export default function HeroFeatureCards() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-20">
      <div className="max-w-5xl mx-auto">
        {/* Tarjetas en arco: central más alta, laterales más bajas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-end">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100 transition-shadow hover:shadow-xl ${
                index === 1 ? "md:-mt-6 md:mb-0" : "md:mt-4"
              }`}
            >
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4 text-purple-600">
                <card.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {card.title}
              </h3>
              {card.subtitle && (
                <p className="text-sm text-gray-500">{card.subtitle}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
