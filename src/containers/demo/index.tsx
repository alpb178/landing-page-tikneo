"use client";

import Link from "next/link";

export default function Demo() {
  return (
    <section className="min-h-screen  py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-10">
          <h1 className="text-2xl md:text-3xl font-bold text-purple-900 text-center mb-3">
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
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50/50 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors"
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
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50/50 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors"
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
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50/50 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono
                </label>
                <select
                  id="telefono"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50/50 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-size-[1.25rem] bg-position-[right_0.5rem_center] bg-no-repeat pr-10"
                >
                  <option value="">Seleccionar</option>
                  <option value="esp">España (+34)</option>
                  <option value="mx">México (+52)</option>
                  <option value="ar">Argentina (+54)</option>
                </select>
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
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50/50 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors"
                  placeholder="Nombre de empresa"
                />
              </div>
              <div>
                <label htmlFor="empleados" className="block text-sm font-medium text-gray-700 mb-1">
                  Número de empleados
                </label>
                <select
                  id="empleados"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50/50 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-size-[1.25rem] bg-position-[right_0.5rem_center] bg-no-repeat pr-10"
                >
                  <option value="">Seleccionar opción</option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                  <option value="200+">200+</option>
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
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50/50 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors"
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
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50/50 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-size-[1.25rem] bg-position-[right_0.5rem_center] bg-no-repeat pr-10"
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
                className="mt-1 w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                Al continuar declaras que aceptas las{" "}
                <Link href="/legal/condiciones" className="text-purple-700 font-medium hover:underline">
                  Condiciones generales de contratación
                </Link>{" "}
                y la{" "}
                <Link href="/legal/privacidad" className="text-purple-700 font-medium hover:underline">
                  Política de privacidad
                </Link>
                .
              </label>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-bold text-white bg-linear-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 transition-all shadow-md"
              >
                Prueba gratuita
              </button>
              <p className="text-center text-gray-500 text-sm mt-3">
                Sin tarjeta | Cancela cuando quieras
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
