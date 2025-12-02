import { MapPin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Product Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Producto</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/time-tracking-software"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Control horario
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Trabajo inteligente
                </a>
              </li>
              <li>
                <a
                  href="/tablet-clock-in"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Tablet para fichar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  App móvil
                </a>
              </li>
              <li>
                <a
                  href="/vacation-manager"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Gestor de vacaciones
                </a>
              </li>
              <li>
                <a
                  href="/shift-planning"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Planificación de turnos
                </a>
              </li>
              <li>
                <a
                  href="/task-planning"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Planificación de tareas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Gestor documental
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Estamos contigo</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/blog"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Trabaja con nosotros
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Partners
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Condiciones generales de contratación
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Condiciones de contratación Humancore Finance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Centro de ayuda
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Mapa del sitio
                </a>
              </li>
            </ul>
          </div>

          {/* Countries Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Países</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">América</h4>
                <ul className="space-y-1 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      México
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Brasil
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      USA
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Colombia
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Chile
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Costa Rica
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Perú
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Europa</h4>
                <ul className="space-y-1 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      España
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Francia
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Alemania
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Reino Unido
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Italia
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Países Bajos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Portugal
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">¿Quieres saber más?</h3>
            <div className="space-y-4">
              <p className="text-sm text-gray-300">Más información</p>
            </div>
          </div>
        </div>

        {/* Locations */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <h3 className="text-lg font-bold mb-4">Dónde estamos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-blue-400 mt-1" />
              <div>
                <h4 className="font-semibold">Valencia</h4>
                <p className="text-gray-300 text-sm">
                  Carrera Travesía, base 1<br />
                  (La Marina de València)
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-blue-400 mt-1" />
              <div>
                <h4 className="font-semibold">Ciudad de México</h4>
                <p className="text-gray-300 text-sm">
                  Juárez, Cuauhtémoc, Av. Paseo de la Reforma 296
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="bg-white text-gray-900 px-4 py-2 rounded text-sm font-semibold">
                pyme innovadora
              </div>
              <div className="bg-white text-gray-900 px-4 py-2 rounded text-sm font-semibold">
                iso-27001
              </div>
            </div>
            <div className="text-sm text-gray-300">
              <p>
                Humancore Labs S.L. dentro del Programa ICEX Next, ha contado
                con el apoyo de ICEX y cofinanciación del fondo europeo FEDER.
              </p>
              <p className="mt-2">
                El propósito de este apoyo es contribuir al desarrollo
                internacional de la empresa y su entorno.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="flex flex-wrap gap-6 text-sm">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Legal
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Cookies
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Privacidad
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Seguridad
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Canal de denuncias
            </a>
          </div>
        </div>

        {/* Language Selector and Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span className="text-sm">España</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span className="text-sm">México</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span className="text-sm">Colombia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span className="text-sm">Chile</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-300">Español</span>
              <span className="text-sm text-gray-300">English</span>
              <span className="text-sm text-gray-300">
                © 2025 Humancoretime
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
