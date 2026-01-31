"use client";

import { MapPin, Mail, Clock } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const cards = [
  {
    icon: MapPin,
    title: "ESPAÑA",
    content: (
      <>
        Plaza Ferrerias 19. Oficina 1,
        <br />
        Donostia
        <br />
        España CP 20011
      </>
    ),
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@tikneo.com",
  },
  {
    icon: Clock,
    title: "Horario",
    content: (
      <>
        Lunes a viernes:
        <br />
        09:00 - 14:00
        <br />
        16:00 - 19:00
      </>
    ),
  },
];

export default function Contact() {
  return (
    <section className="min-h-screen py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll variant="fadeUp">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-900 text-center mb-3">
            Hablemos
          </h1>
          <p className="text-gray-600 text-center text-base sm:text-lg mb-10 sm:mb-12">
            ¿Quieres una demo o resolver dudas? Te respondemos rápido.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {cards.map((card, index) => (
            <AnimateOnScroll key={index} variant="scaleIn" delay={index * 80}>
              <div className="h-full bg-purple-100 flex flex-col justify-center items-center rounded-2xl shadow-md border border-gray-100 p-5 sm:p-6 md:p-8 text-center md:text-left hover:shadow-lg transition-shadow min-h-[200px] sm:min-h-[220px]">
                <card.icon className="h-14 w-14 sm:h-20 sm:w-20 md:h-24 md:w-24 text-purple-600 shrink-0 mb-3" />
                <h2 className="text-base sm:text-lg font-bold text-purple-900 mb-2 sm:mb-3">
                  {card.title}
                </h2>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {card.content}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
