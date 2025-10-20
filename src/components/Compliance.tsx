import { Shield, CheckCircle, Users, ArrowRight } from "lucide-react";

export default function Compliance() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Cumplimos
            <br />
            <span className="text-blue-600">con la ley</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Cumplimiento legal garantizado
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Sesame cumple con todas las normativas laborales y de protección
              de datos. Tu empresa estará siempre en regla.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                <span className="text-gray-700">
                  Cumplimiento con la normativa laboral española
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                <span className="text-gray-700">
                  Protección de datos (RGPD)
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                <span className="text-gray-700">
                  Auditorías de seguridad regulares
                </span>
              </div>
            </div>
            <button className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Más información
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Certificaciones
              </h3>
              <p className="text-gray-600 mb-6">
                Nuestras certificaciones garantizan la seguridad y cumplimiento
                legal
              </p>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <span className="font-semibold text-gray-900">ISO 27001</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <span className="font-semibold text-gray-900">RGPD</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <span className="font-semibold text-gray-900">LOPD-GDD</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Smart Working
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Adapta tu empresa al futuro del trabajo con nuestras herramientas
              de teletrabajo y gestión remota.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <h4 className="font-bold text-gray-900 mb-2">Teletrabajo</h4>
                <p className="text-gray-600 text-sm">
                  Gestiona equipos remotos con total control y transparencia
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-gray-900 mb-2">Flexibilidad</h4>
                <p className="text-gray-600 text-sm">
                  Horarios flexibles que se adaptan a las necesidades de tu
                  empresa
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-gray-900 mb-2">Productividad</h4>
                <p className="text-gray-600 text-sm">
                  Herramientas que mejoran la eficiencia y el rendimiento
                </p>
              </div>
            </div>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center mx-auto">
              Descubre Smart Working
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
