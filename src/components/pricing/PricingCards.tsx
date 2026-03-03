import { CircleCheckBig } from "lucide-react";
import { Red_Hat_Display } from "next/font/google";
import Link from "next/link";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["600"],
});

interface Plan {
  name: string;
  label: string;
  price: string;
  extraEmployee: string;
  baseDescription: string;
  features: string[];
  highlighted: boolean;
  slug: string;
}

const plans: Plan[] = [
  {
    name: "Plan Esencial",
    label: "PLAN ESENCIAL",
    price: "24.99€",
    extraEmployee: "+ 2.30€ /mes por cada empleado adicional",
    baseDescription: "/mes hasta 10 empleados",
    features: [
      "Gestión de empleados",
      "Turnos",
      "Gestión de ausencias",
      "Chat",
      "Acceso con Face ID",
      "Notificaciones",
      "Calendario",
      "Fichajes",
    ],
    highlighted: false,
    slug: "esencial",
  },
  {
    name: "Plan Avanzado",
    label: "PLAN AVANZADO",
    price: "38.99€",
    extraEmployee: "+ 3.50€ /mes por cada empleado adicional",
    baseDescription: "/mes hasta 10 empleados",
    features: [
      "Plan esencial +",
      "Historial de fichajes",
      "Proyectos",
      "Chrono (control horario)",
      "Check-List",
      "Clientes",
      "Presupuestos",
    ],
    highlighted: true,
    slug: "avanzado",
  },
];

export default function PricingCards() {
  return (
    <section className="bg-bg-light py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`${redHatDisplay.className} text-[40px] font-semibold text-navy text-center mb-16`}
        >
          Planes y precios
        </h2>

        <div className="flex flex-col md:flex-row gap-5 justify-center max-w-[858px] mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.slug}
              className={`bg-white rounded-[32px] px-8 py-6 flex flex-col w-full md:w-[419px] ${
                plan.highlighted
                  ? "shadow-[0px_0px_16px_0px_#3064d9,0px_4px_4px_0px_rgba(12,12,13,0.05)]"
                  : "shadow-[0px_4px_4px_0px_rgba(12,12,13,0.05)]"
              }`}
            >
              <p className="text-muted text-base font-semibold mb-6">
                {plan.label}
              </p>

              <div className="flex items-end mb-4">
                <span className="text-[40px] font-semibold leading-[1.2] text-black">
                  {plan.price}
                </span>
                <span className="text-base text-black ml-1 pb-0.5">
                  {plan.baseDescription}
                </span>
              </div>
              <p className="text-blue-accent text-base mb-6">
                {plan.extraEmployee}
              </p>

              <div className="border-t border-gray-200 mb-6" />

              <ul className="space-y-2 mb-6 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CircleCheckBig className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-black text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/signup?plan=${plan.slug}`}
                className="block w-full text-center bg-navy text-light-blue rounded-[32px] h-12 leading-[48px] font-semibold hover:opacity-90 transition-opacity"
              >
                Elegir plan
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
