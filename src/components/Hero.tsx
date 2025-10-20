import {
  CheckCircle,
  Play,
  ArrowRight,
  Search,
  Clock,
  User,
  Plus,
} from "lucide-react";

export default function Hero() {
  return (
    <>
      {/* Main Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Optimiza la gestión de empleados
                <br />
                <span className="text-blue-600">
                  ahorrando tiempo, esfuerzo y dinero
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                Y para que veas como funciona Tikneo, te ofrecemos{" "}
                <span className="text-purple-600 font-semibold">
                  14 días de prueba totalmente gratuita
                </span>{" "}
                sin compromiso
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center">
                  Prueba gratis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 transition-colors flex items-center justify-center">
                  <Play className="mr-2 h-5 w-5" />
                  Ver demo
                </button>
              </div>

              <div className="flex items-center text-sm text-gray-500">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="font-semibold">14.000 compañías</span>
                <span className="ml-2">ya confían en nosotros</span>
              </div>
            </div>

            {/* Right side - Software mockup */}
            <div className="flex justify-center">
              <div className="w-full max-w-2xl bg-gray-100 rounded-2xl p-4 shadow-2xl transform rotate-2">
                {/* Software interface mockup */}
                <div className="bg-white rounded-xl overflow-hidden">
                  {/* Top bar */}
                  <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-b">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-sm"></div>
                      </div>
                      <span className="font-bold text-gray-900">Tikneo</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Search className="h-5 w-5 text-gray-500" />
                      <div className="flex items-center space-x-2">
                        <Clock className="h-5 w-5 text-gray-500" />
                        <span className="text-sm text-gray-600">04:21:34</span>
                      </div>
                      <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
                        Entrar
                      </button>
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        <span className="text-sm text-gray-600">
                          Amparo Romero
                        </span>
                      </div>
                    </div>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm flex items-center">
                      <Plus className="h-4 w-4 mr-1" />
                      Añadir empleado
                    </button>
                  </div>

                  <div className="flex">
                    {/* Sidebar */}
                    <div className="w-64 bg-gray-50 p-4">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3 py-2 px-3 rounded-lg bg-gray-100">
                          <User className="h-5 w-5 text-gray-600" />
                          <span className="text-sm text-gray-700">
                            Empleados
                          </span>
                        </div>
                        <div className="flex items-center space-x-3 py-2 px-3 rounded-lg">
                          <Clock className="h-5 w-5 text-gray-600" />
                          <span className="text-sm text-gray-700">Registros</span>
                        </div>
                        <div className="flex items-center space-x-3 py-2 px-3 rounded-lg">
                          <User className="h-5 w-5 text-gray-600" />
                          <span className="text-sm text-gray-700">
                            Ausencias
                          </span>
                        </div>
                        <div className="flex items-center space-x-3 py-2 px-3 rounded-lg bg-purple-100">
                          <User className="h-5 w-5 text-purple-600" />
                          <span className="text-sm text-purple-700 font-semibold">
                            Tareas
                          </span>
                        </div>
                        <div className="flex items-center space-x-3 py-2 px-3 rounded-lg">
                          <User className="h-5 w-5 text-gray-600" />
                          <span className="text-sm text-gray-700">
                            Solicitudes
                          </span>
                        </div>
                        <div className="flex items-center space-x-3 py-2 px-3 rounded-lg">
                          <User className="h-5 w-5 text-gray-600" />
                          <span className="text-sm text-gray-700">Informes</span>
                        </div>
                      </div>
                    </div>

                    {/* Main content */}
                    <div className="flex-1 p-6">
                      <h2 className="text-xl font-bold text-gray-900 mb-4">
                        Empleados
                      </h2>

                      {/* Filters */}
                      <div className="flex space-x-4 mb-4">
                        <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                          <option>Centro</option>
                        </select>
                        <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                          <option>Departamento</option>
                        </select>
                        <input
                          type="text"
                          placeholder="Buscar..."
                          className="border border-gray-300 rounded-lg px-3 py-2 text-sm flex-1"
                        />
                      </div>

                      {/* Table */}
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-3 text-sm font-semibold text-gray-700">
                                Empleado
                              </th>
                              <th className="text-left py-3 text-sm font-semibold text-gray-700">
                                Estado
                              </th>
                              <th className="text-left py-3 text-sm font-semibold text-gray-700">
                                Horas Hoy
                              </th>
                              <th className="text-left py-3 text-sm font-semibold text-gray-700">
                                % Completado
                              </th>
                              <th className="text-left py-3 text-sm font-semibold text-gray-700">
                                Jornada diaria
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="py-3">
                                <div className="flex items-center space-x-3">
                                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                                  <div>
                                    <div className="font-semibold text-sm">
                                      Matthew Vargas
                                    </div>
                                    <div className="text-xs text-gray-500">
                                      1 tarea
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="py-3">
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                  En línea
                                </span>
                              </td>
                              <td className="py-3 text-sm">7h 40 min</td>
                              <td className="py-3">
                                <div className="flex items-center space-x-2">
                                  <div className="w-16 bg-gray-200 rounded-full h-2">
                                    <div
                                      className="bg-blue-500 h-2 rounded-full"
                                      style={{ width: "22%" }}
                                    ></div>
                                  </div>
                                  <span className="text-sm text-gray-600">
                                    22%
                                  </span>
                                </div>
                              </td>
                              <td className="py-3">
                                <div className="text-sm text-gray-600">
                                  09:10
                                </div>
                              </td>
                            </tr>
                            <tr className="border-b bg-purple-50">
                              <td className="py-3">
                                <div className="flex items-center space-x-3">
                                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                                  <div>
                                    <div className="font-semibold text-sm">
                                      Rachel Porter
                                    </div>
                                    <div className="text-xs text-gray-500">
                                      2 tareas
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="py-3">
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                  En línea
                                </span>
                              </td>
                              <td className="py-3 text-sm">4h 00 min</td>
                              <td className="py-3">
                                <div className="flex items-center space-x-2">
                                  <div className="w-16 bg-gray-200 rounded-full h-2">
                                    <div
                                      className="bg-blue-500 h-2 rounded-full"
                                      style={{ width: "68%" }}
                                    ></div>
                                  </div>
                                  <span className="text-sm text-gray-600">
                                    68%
                                  </span>
                                </div>
                              </td>
                              <td className="py-3">
                                <div className="text-sm text-gray-600">
                                  10:28
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      {/* Pagination */}
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center space-x-2">
                          <button className="px-3 py-1 border border-gray-300 rounded text-sm">
                            &lt;
                          </button>
                          <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">
                            1
                          </button>
                          <button className="px-3 py-1 border border-gray-300 rounded text-sm">
                            2
                          </button>
                          <button className="px-3 py-1 border border-gray-300 rounded text-sm">
                            3
                          </button>
                          <button className="px-3 py-1 border border-gray-300 rounded text-sm">
                            &gt;
                          </button>
                        </div>
                        <div className="text-sm text-gray-600">
                          Mostrar:{" "}
                          <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                            <option>10</option>
                            <option>50</option>
                            <option>100</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
