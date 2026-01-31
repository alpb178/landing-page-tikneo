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
    `px-3 py-2 text-lg font-medium border-t-2 pt-2 -mt-2 transition-colors ${
      isActive(href)
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
                <Link key={href} href={href} className={linkClass(href)}>
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

            {/* Mobile menu button: área táctil amplia */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2.5 -mr-2.5 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
                aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation: panel deslizable, enlaces táctiles */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-100 animate-fade-in-up">
              <nav className="px-3 pt-3 pb-4 space-y-0.5 bg-white/95 backdrop-blur-sm">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3.5 text-base font-medium rounded-xl min-h-[48px] flex items-center touch-manipulation ${
                      isActive(href)
                        ? "text-textHeader bg-purple-50"
                        : "text-gray-700 hover:bg-purple-50 hover:text-purple-700 active:bg-purple-100"
                    }`}
                  >
                    {label}
                  </Link>
                ))}
                <div className="pt-2 px-4 space-y-1 border-t border-gray-100 mt-2">
                  <a
                    href="https://app.tikneo.com/login"
                    className="block py-3.5 text-gray-700 hover:text-purple-600 font-medium rounded-xl"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Iniciar sesión
                  </a>
                  <Link
                    href="/demo"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl"
                  >
                    Prueba Gratuita
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
