import { Shield, Link, CheckCircle } from "lucide-react";

export default function Integrations() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Integraciones
            <br />
            <span className="text-blue-600">con sistemas biométricos</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Humancore se integra con los principales fabricantes de sistemas de
            accesos o sistemas biométricos. Combina cualquier tipo de acceso
            para dar una gran libertad a los empleados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Sistemas Biométricos
            </h3>
            <p className="text-gray-600">
              Integración con lectores de huella dactilar, reconocimiento facial
              y otros sistemas biométricos de acceso.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Link className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Control de Acceso
            </h3>
            <p className="text-gray-600">
              Conecta con sistemas de control de acceso para sincronizar
              fichajes y permisos de entrada.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Seguridad Avanzada
            </h3>
            <p className="text-gray-600">
              Cumplimiento con normativas de seguridad y protección de datos
              biométricos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
