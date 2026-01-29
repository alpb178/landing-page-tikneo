import { CalendarCheck, Clock, Users2 } from "lucide-react";

const cards = [
  {
    icon: CalendarCheck,
    title: "Gestión de ausencias",
    description:
      "Gracias al portal del empleado de Tikneo, tus trabajadores podrán gestionar sus propias ausencias, consultar los días que les quedan de vacaciones y corroborar quiénes están ausentes.",
    footnote: null,
  },
  {
    icon: Clock,
    title: "Facilita el fichaje",
    description:
      "Los trabajadores de tu empresa podrán marcar ingresos y salidas de forma sencilla, ya sea trabajando en remoto o presencial. Desde cualquier dispositivo.",
    footnote: "Fichar no es opcional, es la ley",
  },
  {
    icon: Users2,
    title: "Evaluación del Desempeño",
    description:
      "Gestiona la evaluación del desempeño de tus empleados con una herramienta 360 grados. Saca lo mejor de tu equipo, ayúdalos a descubrir sus puntos fuertes y mejorar sus puntos débiles.",
    footnote: null,
  },
];

export default function WhatIs() {
  return (
    <section className=" px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-6">
          ¿Qué es TIKNEO?
        </h2>
        <p className="text-base md:text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12 md:mb-16 leading-relaxed">
          Tikneo centraliza el control de horario y la gestión del personal en
          una plataforma eficiente, escalable y fácil de usar, para ayudar a las
          empresas que quieren automatizar sus procesos de RRHH y tomar las
          mejores decisiones para su negocio.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100 transition-shadow hover:shadow-xl flex flex-col"
            >
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-5 text-purple-600 shrink-0">
                <card.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {card.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed flex-1">
                {card.description}
              </p>
              {card.footnote && (
                <p className="text-xs text-gray-500 mt-3 italic">
                  {card.footnote}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
