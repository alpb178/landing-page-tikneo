import { Check, X, Car, Rocket, Star } from "lucide-react";
import Link from "next/link";

const movilidadFeatures = [
  "Gestión de vehículos",
  "Asignación y control",
  "Historial y seguimiento",
  "Adjuntos (documentación)",
];

export default function MobilityPlan() {
  return (
    <div className="bg-purple-100/60 rounded-2xl shadow-md border border-gray-200 p-3">
      <div className="bg-purple-100/60 rounded-2xl shadow-md border border-purple-200/60 p-6 md:p-8 flex flex-col">
        <span className="inline-block w-fit bg-purple-200/80 text-purple-800 text-xs font-semibold px-2.5 py-1 rounded-full mb-4">
          Complemento opcional
        </span>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-purple-200 rounded-xl flex items-center justify-center text-purple-700 shrink-0">
            <Car className="h-5 w-5" />
          </div>
          <h2 className="text-xl font-bold text-purple-900">Movilidad</h2>
        </div>
        <p className="text-gray-600 text-sm mb-4">
          Consulta precios según vehículos
        </p>
        <p className="text-purple-900 font-bold text-sm mb-2">Incluye:</p>
        <ul className="space-y-2 mb-6 flex-1">
          {movilidadFeatures.map((feature, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-purple-900 text-sm"
            >
              <Check className="h-4 w-4 text-green-600 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="block w-full py-3 rounded-xl font-semibold text-center bg-purple-600 hover:bg-purple-700 text-white transition-colors mt-auto"
        >
          Consultar precio
        </Link>
      </div>
    </div>
  );
}
