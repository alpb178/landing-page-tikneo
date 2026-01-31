import { Check, X, Car, Rocket, Star } from "lucide-react";
import Link from "next/link";

const esencialFeatures = [
  "Gestión de empleados",
  "Turnos",
  "Gestión de ausencias",
  "Chat",
  "Acceso con Face ID",
  "Notificaciones",
  "Calendario",
  "Fichajes",
];

export default function EssentialPlan() {
  return (
    <div className="bg-purple-100/60 rounded-2xl shadow-md border border-gray-200 p-3">
      <div className="rounded-2xl shadow-md border border-gray-200 p-6 md:p-8 flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <Check className="h-6 w-6 text-purple-600 shrink-0" />
          <h3 className="text-xl font-bold text-purple-900">Plan Esencial</h3>
        </div>
        <p className="text-gray-600 text-sm mb-4">
          Para empezar con lo necesario, sin complicaciones.
        </p>
        <div className=" rounded-2xl shadow-md border border-gray-200 p-6 md:p-8 flex flex-col">
          <p className="text-gray-800 mb-2">
            <span className="font-bold text-purple-900">Incluye:</span>{" "}
            <span className="text-purple-900">24.99 €/mes + IVA</span>
          </p>
          <p className="text-gray-800 mb-6">
            <span>Despues:</span>{" "}
            <span>2,30 €/ usuario adicional a partir de 10</span>
          </p>
          <ul className="space-y-2 mb-6 flex-1">
            {esencialFeatures.map((feature, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-gray-700 text-sm"
              >
                <Check className="h-5 w-5 text-green-500 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
          <p className="text-gray-600 text-sm mb-6">
            <span className="font-bold">Recomendado para:</span> pequeñas
            empresas y equipos que quieren cumplir normativa y organizar el día
            a día.
          </p>
          <Link
            href="/demo"
            className="block w-full py-3 rounded-full font-semibold text-center bg-purple-600 hover:bg-purple-700 text-white transition-colors"
          >
            Empezar con Esencial
          </Link>
        </div>
      </div>
    </div>
  );
}
