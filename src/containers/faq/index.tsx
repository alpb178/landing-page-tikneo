"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const faqItems = [
  {
    question: "¿Cómo funciona el periodo de prueba?",
    answer:
      "Para comenzar tu periodo de prueba gratuito, tan solo tienes que registrarte en TikNEO y confirmar tu correo electrónico. Una vez comience tu periodo de prueba, podrás probar todas las funcionalidades, sin límite.",
  },
  {
    question: "¿Qué funcionalidades se incluyen en el periodo de prueba?",
    answer:
      "Durante el periodo de prueba tienes acceso a todas las funcionalidades de TikNEO: gestión de fichajes, turnos, informes laborales, multiempresa, proyectos, avisos y chat, y el resto de herramientas del plan. Sin límites para que puedas evaluar la plataforma con tu equipo.",
  },
  {
    question: "¿Qué ocurre si mi compañía crece y necesito invitar a más empleados?",
    answer:
      "TikNEO se adapta al tamaño de tu empresa. Podrás invitar a más empleados cuando lo necesites y actualizar tu plan en cualquier momento desde la configuración. Los precios se ajustan de forma transparente según el número de usuarios.",
  },
  {
    question: "¿Tengo que introducir mi tarjeta de crédito para comenzar mi periodo de prueba?",
    answer:
      "No. Puedes comenzar tu periodo de prueba gratuito sin introducir tarjeta de crédito ni ningún otro método de pago. Solo necesitas registrarte y confirmar tu correo electrónico.",
  },
  {
    question: "¿Los precios están libres de impuestos?",
    answer:
      "Los precios mostrados pueden no incluir impuestos según tu país o tipo de facturación. Al contratar un plan, verás el desglose final según tu ubicación y si aplicas IVA u otros tributos.",
  },
  {
    question: "¿Qué pasará cuando acabe mi periodo de prueba?",
    answer:
      "Cuando finalice tu periodo de prueba, podrás elegir un plan de pago para seguir utilizando TikNEO. Tus datos, configuraciones y claves se conservan de forma segura para que puedas continuar sin perder nada.",
  },
  {
    question: "¿Qué métodos de pago puedo utilizar?",
    answer:
      "Aceptamos tarjeta de crédito, débito y, según disponibilidad, transferencia bancaria y otros métodos locales. Puedes gestionar y cambiar tu método de pago en cualquier momento desde la configuración de la cuenta.",
  },
  {
    question: "¿Estarán seguros mis datos?",
    answer:
      "En TikNEO, la seguridad de nuestros usuarios es lo más importante. Por eso, a través de un potente sistema de encriptación, protegemos toda tu información. Puedes leer más en nuestra",
    linkLabel: "política de privacidad",
    linkHref: "/privacy",
  },
  {
    question: "¿Cómo puedo mejorar mi plan?",
    answer:
      "Para pasar de tu cuenta de prueba gratuita a uno de nuestros planes, entra en la sección de facturación o configuración de tu cuenta. Podrás cambiar o mejorar tu plan en cualquier momento y el cambio se aplica de forma inmediata.",
  },
  {
    question: "¿Puedo cancelar mi suscripción en cualquier momento?",
    answer:
      "Sí, y una vez cancelada, tu suscripción no se renovará de nuevo. Aun así, podrás seguir utilizando TikNEO hasta la siguiente fecha de renovación.",
  },
  {
    question: "Tengo más preguntas",
    answer:
      "Si tienes más preguntas, contacta con nosotros, estamos deseando ayudarte.",
    linkLabel: "www.tikneo.com",
    linkHref: "/contact",
    isContact: true,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative min-h-screen py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(147 51 234 / 0.3) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative max-w-3xl mx-auto">
        <AnimateOnScroll variant="fadeUp">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-900 text-center mb-4">
            Preguntas Frecuentes
          </h1>
          <p className="text-gray-600 text-center text-base md:text-lg mb-8 sm:mb-12">
            Resolvemos las dudas más comunes para que puedas empezar con TikNEO
            con total tranquilidad.
          </p>
        </AnimateOnScroll>

        <div className="space-y-3 sm:space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const isContactItem = "isContact" in item && item.isContact;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-4 sm:px-6 py-4 sm:py-5 text-left font-semibold text-purple-900 hover:bg-gray-50/50 active:bg-gray-100/50 transition-colors min-h-[52px] touch-manipulation rounded-2xl"
                >
                  <span className="pr-4">{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-purple-600 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-0">
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed pl-0">
                      {item.answer}
                      {"linkLabel" in item && item.linkLabel && "linkHref" in item && item.linkHref && (
                        <>
                          {" "}
                          <Link
                            href={item.linkHref}
                            className="text-purple-600 hover:text-purple-700 underline font-medium inline-flex items-center gap-1"
                          >
                            {item.linkLabel}
                            <span className="sr-only">(enlace externo)</span>
                          </Link>
                          {typeof item.answer === "string" && !item.answer.trimEnd().endsWith(".") ? "." : ""}
                        </>
                      )}
                    </p>
                    {isContactItem && (
                      <div className="mt-4 flex justify-end">
                        <Link
                          href="/contact"
                          className="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                        >
                          Contáctanos
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-end">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            ¿Necesitas ayuda? Contáctanos
          </Link>
        </div>
      </div>
    </section>
  );
}
