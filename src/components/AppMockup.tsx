"use client";

import Image from "next/image";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  FolderKanban,
  Receipt,
  CheckSquare,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Users, label: "Departamentos" },
  { icon: Briefcase, label: "Clientes" },
  { icon: FolderKanban, label: "Proyectos" },
  { icon: Receipt, label: "Gastos", active: true },
  { icon: CheckSquare, label: "Tareas" },
];

const tableRows = [
  { concept: "Material oficina", date: "15/01/2025", category: "Suministros", amount: "€45,00", status: "Aprobado", statusColor: "text-green-600" },
  { concept: "Desplazamiento cliente", date: "14/01/2025", category: "Transporte", amount: "€120,00", status: "Pendiente", statusColor: "text-amber-600" },
  { concept: "Software licencia", date: "10/01/2025", category: "TIC", amount: "€99,00", status: "Aprobado", statusColor: "text-green-600" },
];

export default function AppMockup() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-16">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-xl shadow-2xl shadow-purple-200/40 overflow-hidden border border-gray-200/80">
          {/* Barra superior tipo ventana */}
          <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex items-center gap-2 ml-2">
                <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center">
                  <Image
                    src="/images/image.png"
                    alt="TikNEO"
                    width={24}
                    height={24}
                    className="rounded object-contain"
                  />
                </div>
                <span className="text-sm font-semibold text-gray-800">
                  TikNEO
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">JG Jose Gutierrez</span>
              <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 text-sm font-medium">
                JG
              </div>
            </div>
          </div>

          <div className="flex min-h-[420px]">
            {/* Sidebar */}
            <aside className="w-48 bg-gray-800 text-gray-300 py-4 shrink-0">
              <nav className="space-y-0.5 px-2">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href="#"
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                      item.active
                        ? "bg-purple-600 text-white"
                        : "hover:bg-gray-700 text-gray-300"
                    }`}
                  >
                    <item.icon className="h-4 w-4 shrink-0" />
                    {item.label}
                  </a>
                ))}
              </nav>
            </aside>

            {/* Contenido principal - Gastos */}
            <main className="flex-1 p-6 bg-gray-50/50">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Gastos</h2>
              <div className="flex flex-wrap gap-3 mb-4">
                <input
                  type="search"
                  placeholder="Buscar Gastos"
                  className="px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white"
                  readOnly
                />
                <select className="px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white text-gray-600">
                  <option>Concepto</option>
                </select>
                <button className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700">
                  Nuevo Gasto
                </button>
              </div>
              <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                <div className="flex border-b border-gray-200">
                  <button className="px-4 py-2 text-sm font-medium text-purple-600 border-b-2 border-purple-600 bg-purple-50/50">
                    Mis gastos
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
                    Gastos Adicionales
                  </button>
                </div>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 text-left text-gray-600 font-medium">
                      <th className="px-4 py-3">Concepto</th>
                      <th className="px-4 py-3">Fecha</th>
                      <th className="px-4 py-3">Categoría</th>
                      <th className="px-4 py-3">Importe</th>
                      <th className="px-4 py-3">Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableRows.map((row, i) => (
                      <tr
                        key={i}
                        className="border-t border-gray-100 hover:bg-gray-50/50"
                      >
                        <td className="px-4 py-3 text-gray-900">
                          {row.concept}
                        </td>
                        <td className="px-4 py-3 text-gray-600">
                          {row.date}
                        </td>
                        <td className="px-4 py-3 text-gray-600">
                          {row.category}
                        </td>
                        <td className="px-4 py-3 text-gray-900">
                          {row.amount}
                        </td>
                        <td
                          className={`px-4 py-3 font-medium ${row.statusColor}`}
                        >
                          {row.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}
