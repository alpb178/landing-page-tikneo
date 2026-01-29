"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const faqItems = [
  {
    question: "¿Cómo funciona el periodo de prueba?",
    answer:
      "Regístrate en TickNEO y confirma tu correo electrónico. En cuanto la cuenta esté activa, podrás comenzar a probar la plataforma.",
  },
  {
    question: "¿Qué incluye el periodo de prueba?",
    answer:
      "Durante la prueba tendrás acceso al Plan Avanzado, con todas las funcionalidades disponibles para que lo pruebes sin límites.",
  },
  {
    question: "¿Qué pasa si mi empresa crece y necesito añadir más empleados?",
    answer:
      "TickNEO se adapta a tu equipo. Podrás añadir empleados cuando lo necesites y actualizar tu plan fácilmente.",
  },
  {
    question: "¿Necesito tarjeta de crédito para empezar la prueba?",
    answer:
      "No. Puedes iniciar la prueba gratuita sin tarjeta y sin ningún otro método de pago.",
  },
  {
    question: "¿Qué ocurre cuando termina mi periodo de prueba?",
    answer:
      "Cuando finalice la prueba, podrás elegir un plan para seguir utilizando TickNEO. Tus claves y configuraciones se guardarán de forma segura para que puedas retomarlos.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative min-h-screen  py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(147 51 234 / 0.3) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-900 text-center mb-4">
          Preguntas Frecuentes
        </h1>
        <p className="text-gray-600 text-center text-base md:text-lg mb-12">
          Resolvemos las dudas más comunes para que puedas empezar con TickNEO
          con total tranquilidad.
        </p>

        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-purple-900 hover:bg-gray-50/50 transition-colors"
                >
                  <span className="pr-4">{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-purple-600 transition-transform ${isOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-0">
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed pl-0">
                      {item.answer}
                    </p>
                    {index === faqItems.length - 1 && (
                      <div className="mt-6 flex justify-end">
                        <Link
                          href="/contact"
                          className="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                        >
                          ¿Necesitas ayuda? Contáctanos
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
