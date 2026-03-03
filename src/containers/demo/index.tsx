"use client";

import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const PAISES_TELEFONO: { value: string; label: string }[] = [
  { value: "", label: "Seleccionar" },
  { value: "es", label: "España (+34)" },
  { value: "mx", label: "México (+52)" },
  { value: "ar", label: "Argentina (+54)" },
  { value: "co", label: "Colombia (+57)" },
  { value: "cl", label: "Chile (+56)" },
  { value: "pe", label: "Perú (+51)" },
  { value: "ve", label: "Venezuela (+58)" },
  { value: "ec", label: "Ecuador (+593)" },
  { value: "gt", label: "Guatemala (+502)" },
  { value: "cu", label: "Cuba (+53)" },
  { value: "bo", label: "Bolivia (+591)" },
  { value: "do", label: "Rep. Dominicana (+1 809)" },
  { value: "hn", label: "Honduras (+504)" },
  { value: "py", label: "Paraguay (+595)" },
  { value: "sv", label: "El Salvador (+503)" },
  { value: "ni", label: "Nicaragua (+505)" },
  { value: "cr", label: "Costa Rica (+506)" },
  { value: "pa", label: "Panamá (+507)" },
  { value: "uy", label: "Uruguay (+598)" },
  { value: "pr", label: "Puerto Rico (+1 787)" },
  { value: "us", label: "Estados Unidos (+1)" },
  { value: "ca", label: "Canadá (+1)" },
  { value: "br", label: "Brasil (+55)" },
  { value: "fr", label: "Francia (+33)" },
  { value: "de", label: "Alemania (+49)" },
  { value: "it", label: "Italia (+39)" },
  { value: "gb", label: "Reino Unido (+44)" },
  { value: "pt", label: "Portugal (+351)" },
  { value: "other", label: "Otro" },
];

const NUMERO_EMPLEADOS_OPCIONES: { value: string; label: string }[] = [
  { value: "", label: "Seleccionar opción" },
  { value: "1-15", label: "De 1 a 15 empleados" },
  { value: "16-50", label: "De 16 a 50 empleados" },
  { value: "51-150", label: "De 51 a 150 empleados" },
  { value: "151-500", label: "De 151 a 500 empleados" },
  { value: "500+", label: "Más de 500 empleados" },
];

export default function Demo() {
  return (
    <section className="min-h-screen py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <AnimateOnScroll variant="fadeUp">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 p-5 sm:p-6 md:p-10">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary text-center mb-3">
            Empieza tu prueba gratuita o solicita una demo
          </h1>
          <p className="text-gray-600 text-center text-sm md:text-base mb-8">
            Rellena el formulario y empieza a digitalizar tu empresa con TikNEO.
            <br />
            Sin tarjeta y cancelas cuando quieras.
          </p>

          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre*
                </label>
                <input
                  id="nombre"
                  type="text"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  placeholder="Nombre"
                />
              </div>
              <div>
                <label htmlFor="apellidos" className="block text-sm font-medium text-gray-700 mb-1">
                  Apellidos*
                </label>
                <input
                  id="apellidos"
                  type="text"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  placeholder="Apellidos"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email*
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="telefono-codigo" className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono
                </label>
                <div className="flex gap-2">
                  <select
                    id="telefono-codigo"
                    name="telefonoCodigo"
                    aria-label="Código de país"
                    className="w-[140px] shrink-0 px-3 py-2.5 rounded-lg border border-gray-300 bg-gray-50/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-size-[1.25rem] bg-position-[right_0.5rem_center] bg-no-repeat pr-8 text-sm"
                  >
                    {PAISES_TELEFONO.map((pais) => (
                      <option key={pais.value || "sel"} value={pais.value}>
                        {pais.label}
                      </option>
                    ))}
                  </select>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    autoComplete="tel-national"
                    placeholder="Número de teléfono"
                    className="flex-1 min-w-0 px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre de empresa
                </label>
                <input
                  id="empresa"
                  type="text"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  placeholder="Nombre de empresa"
                />
              </div>
              <div>
                <label htmlFor="empleados" className="block text-sm font-medium text-gray-700 mb-1">
                  Número de empleados
                </label>
                <select
                  id="empleados"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-size-[1.25rem] bg-position-[right_0.5rem_center] bg-no-repeat pr-10"
                >
                  {NUMERO_EMPLEADOS_OPCIONES.map((opcion) => (
                    <option key={opcion.value || "sel"} value={opcion.value}>
                      {opcion.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="cargo" className="block text-sm font-medium text-gray-700 mb-1">
                  Cargo en la empresa
                </label>
                <input
                  id="cargo"
                  type="text"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  placeholder="Cargo en la empresa"
                />
              </div>
              <div>
                <label htmlFor="sector" className="block text-sm font-medium text-gray-700 mb-1">
                  Sector*
                </label>
                <select
                  id="sector"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-size-[1.25rem] bg-position-[right_0.5rem_center] bg-no-repeat pr-10"
                >
                  <option value="">Seleccionar opción</option>
                  <option value="tecnologia">Tecnología</option>
                  <option value="construccion">Construcción</option>
                  <option value="comercio">Comercio</option>
                  <option value="servicios">Servicios</option>
                  <option value="otros">Otros</option>
                </select>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <input
                id="terms"
                type="checkbox"
                required
                className="mt-1 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                Al continuar declaras que aceptas las{" "}
                <Link href="/legal/condiciones" className="text-primary font-medium hover:underline">
                  Condiciones generales de contratación
                </Link>{" "}
                y la{" "}
                <Link href="/legal/privacidad" className="text-primary font-medium hover:underline">
                  Política de privacidad
                </Link>
                .
              </label>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-bold text-white bg-primary hover:opacity-90 transition-all shadow-md"
              >
                Prueba gratuita
              </button>
              <p className="text-center text-gray-500 text-sm mt-3">
                Sin tarjeta | Cancela cuando quieras
              </p>
            </div>
          </form>
        </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
