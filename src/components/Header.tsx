"use client";

import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Bell,
  Clock,
  Calendar,
  Globe,
  CheckCircle,
  BarChart3,
  Tablet,
  Users,
  User,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-purple-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center text-xs sm:text-sm">
            <Bell className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
            <span className="text-center">
              <span className="hidden sm:inline">
                Nueva funcionalidad: control de gastos, ¡olvídate de los tickets
                y la gestión manual! |
                <a href="#" className="underline ml-1">
                  Más información aquí
                </a>
              </span>
              <span className="sm:hidden">
                Nueva funcionalidad: control de gastos!
                <a href="#" className="underline ml-1">
                  Más info
                </a>
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="w-20 h-20 sm:w-8 sm:h-8 bg-teal-500 rounded-full flex items-center justify-center mr-2">
                <Image
                  src="/images/image.png"
                  alt="Humancore"
                  width={100}
                  height={100}
                />
              </div>
              <Link href="/">
                <h1 className="text-lg sm:text-xl font-bold text-gray-900">
                  Humancore
                </h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  Funcionalidades
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute flex left-0 mt-2 w-200 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-6 flex flex-row gap-6">
                    <div className="mb-6">
                      <div className="flex items-center mb-4">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                          Gestión del tiempo
                        </h3>
                      </div>
                      <div className="flex flex-col gap-3">
                        <a
                          href="/time-tracking-software"
                          className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                            <Clock className="h-4 w-4 text-purple-600" />
                          </div>
                          <span className="text-sm text-gray-700">
                            Control horario
                          </span>
                        </a>
                        <a
                          href="/vacation-manager"
                          className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                            <Calendar className="h-4 w-4 text-purple-600" />
                          </div>
                          <span className="text-sm text-gray-700">
                            Gestor de vacaciones
                          </span>
                        </a>
                        <a
                          href="/shift-planning"
                          className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                            <Calendar className="h-4 w-4 text-purple-600" />
                          </div>
                          <span className="text-sm text-gray-700">
                            Planificación de turnos
                          </span>
                        </a>
                        <a
                          href="/remote-work"
                          className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                            <Globe className="h-4 w-4 text-purple-600" />
                          </div>
                          <span className="text-sm text-gray-700">
                            Teletrabajo
                          </span>
                        </a>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-center mb-4">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                          Gestión de personal
                        </h3>
                      </div>
                      <div className="flex flex-col gap-3">
                        <a
                          href="/task-planning"
                          className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                            <CheckCircle className="h-4 w-4 text-blue-600" />
                          </div>
                          <span className="text-sm text-gray-700">
                            Planificación de tareas
                          </span>
                        </a>
                        <a
                          href="/reports-and-statistics"
                          className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                            <BarChart3 className="h-4 w-4 text-blue-600" />
                          </div>
                          <span className="text-sm text-gray-700">
                            Informes y estadísticas
                          </span>
                        </a>
                        <a
                          href="/time-bank"
                          className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                            <Clock className="h-4 w-4 text-blue-600" />
                          </div>
                          <span className="text-sm text-gray-700">
                            Bolsa de horas
                          </span>
                        </a>
                        <a
                          href="/alerts-and-approvals"
                          className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                            <Bell className="h-4 w-4 text-blue-600" />
                          </div>
                          <span className="text-sm text-gray-700">
                            Alertas y aprobaciones
                          </span>
                        </a>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center mb-4">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                          Multidispositivos
                        </h3>
                      </div>
                      <div className="flex flex-col gap-3">
                        <a
                          href="/tablet-clock-in"
                          className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                            <Tablet className="h-4 w-4 text-green-600" />
                          </div>
                          <span className="text-sm text-gray-700">
                            Tablet para fichar
                          </span>
                        </a>
                        <a
                          href="/employee-center"
                          className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                            <Users className="h-4 w-4 text-green-600" />
                          </div>
                          <span className="text-sm text-gray-700">
                            Centro de empleados
                          </span>
                        </a>
                        <a
                          href="#"
                          className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                            <User className="h-4 w-4 text-green-600" />
                          </div>
                          <span className="text-sm text-gray-700">
                            Panel del empleado
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="/pricing"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Precios
              </a>
              <a
                href="/demo"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Demo
              </a>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm">
                Acceder
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
                <a
                  href="#"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                >
                  Funcionalidades
                </a>
                <a
                  href="/time-tracking-software"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                >
                  Control horario
                </a>
                <a
                  href="/shift-planning"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                >
                  Planificación de turnos
                </a>
                <a
                  href="/task-planning"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                >
                  Planificación de tareas
                </a>
                <a
                  href="/vacation-manager"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                >
                  Gestor de vacaciones
                </a>
                <a
                  href="/tablet-clock-in"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                >
                  Tablet para fichar
                </a>
                <a
                  href="/employee-center"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                >
                  Centro de empleados
                </a>
                <a
                  href="/pricing"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                >
                  Precios
                </a>
                <a
                  href="/demo"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                >
                  Demo
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                >
                  Acceder
                </a>
                <button className="w-full text-left px-3 py-2 text-base font-medium text-white bg-blue-600 rounded-lg">
                  Prueba gratuita
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
