"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/why-tikneo", label: "¿Por qué Tikneo?" },
  { href: "/price", label: "Precios" },
  { href: "/features", label: "Características" },
  { href: "/contact", label: "Contacto" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const linkClass = (href: string) =>
    `px-3 py-2 text-lg font-medium border-t-2 pt-2 -mt-2 transition-colors ${isActive(href)
      ? "text-textHeader border-textHeader"
      : "text-gray-600 hover:text-purple-600 border-transparent"
    }`;

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
                  <div className="text-textHeader font-semibold">Tik</div>
                  <div className="font-bold text-textHeader">Neo</div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 text-lg">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={linkClass(href)}
                >
                  {label}
                </Link>
              ))}
            </nav>

            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="https://app.tikneo.com/login"
                className="text-gray-600 hover:text-purple-600 px-3 py-2 text-lg font-medium"
              >
                Iniciar sesión
              </a>
              <Link
                href="/demo"
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
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 text-base font-medium ${isActive(href)
                      ? "text-textHeader"
                      : "text-gray-700 hover:text-purple-600"
                      }`}
                  >
                    {label}
                  </Link>
                ))}
                <a
                  href="/time-tracking-software"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600"
                >
                  Control horario
                </a>
                <a
                  href="/shift-planning"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600"
                >
                  Planificación de turnos
                </a>
                <a
                  href="/task-planning"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600"
                >
                  Planificación de tareas
                </a>
                <a
                  href="/vacation-manager"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600"
                >
                  Gestor de vacaciones
                </a>
                <a
                  href="/tablet-clock-in"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600"
                >
                  Tablet para fichar
                </a>
                <a
                  href="/employee-center"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600"
                >
                  Centro de empleados
                </a>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
