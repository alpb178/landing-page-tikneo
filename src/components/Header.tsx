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
  Zap,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Main Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm border-b border-purple-100/50">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo TikNEO */}
            <div className="shrink-0 flex items-center">
              <div className="w-8 h-8 md:w-10 md:h-10  rounded-full flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="TikNEO"
                  width={128}
                  height={128}
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <Link href="/">
              <div className=" flex flex-row text-textHeader text-3xl">
            <div className="text-textHeader">Tik</div>
            <div className=" font-bold text-textHeader">Neo</div>
          </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <div className="relative group">
                <button className="flex items-center text-gray-600 hover:text-purple-600 px-3 py-2 text-sm font-medium">
                  Inicio
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute flex left-0 mt-2 w-200 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-6 flex flex-row gap-6">
                    <div className="mb-6">
                      <div className="flex items-center mb-4">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                          ¿Por qué Tikneo?
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
                            <Zap className="h-4 w-4 text-purple-600" />
                          </div>
                          <span className="text-sm text-gray-700">Gastos</span>
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
                            Movilidad
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
                            Checklist
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#por-que-tikneo"
                className="text-gray-600 hover:text-purple-600 px-3 py-2 text-sm font-medium"
              >
                ¿Por qué Tikneo?
              </a>
              <a
                href="#caracteristicas"
                className="text-gray-600 hover:text-purple-600 px-3 py-2 text-sm font-medium"
              >
                Características
              </a>
              <a
                href="#contacto"
                className="text-gray-600 hover:text-purple-600 px-3 py-2 text-sm font-medium"
              >
                Contacto
              </a>
            
            </nav>

            <nav className="hidden md:flex items-center space-x-6">
             
           

           
              <a
                href="/login"
                className="text-gray-600 hover:text-purple-600 px-3 py-2 text-sm font-medium"
              >
                Iniciar sesión
              </a>
              <Link
                href="/signup"
                className="ml-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
              >
                Prueba Gratuita
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-purple-600"
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
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
