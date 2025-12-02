import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Download, Bell, Users, Clock, CheckCircle } from "lucide-react";

export default function AppMovil() {
  const features = [
    {
      icon: Clock,
      title: "Fichaje instantáneo",
      description:
        "Registra tu entrada y salida con un solo toque desde cualquier lugar.",
    },
    {
      icon: Bell,
      title: "Notificaciones push",
      description: "Recibe recordatorios y alertas importantes en tiempo real.",
    },
    {
      icon: Users,
      title: "Gestión de equipo",
      description:
        "Los administradores pueden gestionar y aprobar tiempos de todo el equipo.",
    },
    {
      icon: CheckCircle,
      title: "Sincronización automática",
      description:
        "Todos los datos se sincronizan automáticamente con la plataforma web.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                App móvil
                <br />
                <span className="text-blue-600">Humancore</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Descarga nuestra app de control horario tanto en iOS como
                Android. Podrás fichar, gestionar y aprobar tiempos de tu equipo
                desde cualquier lugar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                  <Download className="mr-2 h-5 w-5" />
                  Descargar para iOS
                </button>
                <button className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center">
                  <Download className="mr-2 h-5 w-5" />
                  Descargar para Android
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-96 bg-gray-900 rounded-3xl p-4 shadow-2xl">
                <div className="w-full h-full bg-white rounded-2xl flex flex-col">
                  <div className="h-12 bg-blue-600 rounded-t-2xl flex items-center justify-center">
                    <span className="text-white text-lg font-bold">
                      Humancore
                    </span>
                  </div>
                  <div className="flex-1 p-6">
                    <div className="w-full h-4 bg-gray-200 rounded mb-4"></div>
                    <div className="w-3/4 h-3 bg-gray-300 rounded mb-4"></div>
                    <div className="w-full h-3 bg-gray-300 rounded mb-6"></div>
                    <div className="w-full h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-semibold">
                        Fichar entrada
                      </span>
                    </div>
                    <div className="w-full h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-600 font-semibold">
                        Ver historial
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Características de la
              <br />
              <span className="text-blue-600">app móvil</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100"
              >
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ¿Por qué elegir
                <br />
                <span className="text-blue-600">nuestra app?</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Fácil de usar
                    </h3>
                    <p className="text-gray-600">
                      Interfaz intuitiva diseñada para que cualquier empleado
                      pueda usarla sin formación previa.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Disponible 24/7
                    </h3>
                    <p className="text-gray-600">
                      Accede a tu información laboral en cualquier momento y
                      desde cualquier lugar.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Sincronización automática
                    </h3>
                    <p className="text-gray-600">
                      Todos los datos se sincronizan automáticamente con la
                      plataforma web.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Descarga la app
              </h3>
              <div className="space-y-4">
                <button className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                  <Download className="mr-2 h-5 w-5" />
                  App Store (iOS)
                </button>
                <button className="w-full bg-green-600 text-white px-6 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center">
                  <Download className="mr-2 h-5 w-5" />
                  Google Play (Android)
                </button>
              </div>
              <p className="text-sm text-gray-500 text-center mt-4">
                Disponible para iOS 12+ y Android 8+
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
