import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Play,
  CheckCircle,
  Users,
  Settings,
  Shield,
  ArrowRight,
  BarChart3,
} from "lucide-react";

export default function DemoPage() {
  const features = [
    {
      icon: Play,
      title: "Te mostramos toda la plataforma",
      description:
        "Completamente configurada para que veas el uso real de la herramienta",
    },
    {
      icon: BarChart3,
      title: "Descubre cómo aprovechar al máximo",
      description:
        "Todas las funcionalidades con recorrido guiado por Humancore",
    },
    {
      icon: Users,
      title: "Nuestros expertos están listos",
      description:
        "Para resolver todas tus dudas y enseñarte cómo adaptar Humancore a las necesidades de tu empresa",
    },
  ];

  const whyDemo = [
    {
      icon: Settings,
      title: "Personalización",
      description:
        "Cada demo se realiza con un experto de Humancore y se adapta y personaliza a las necesidades y requerimientos de tu empresa.",
    },
    {
      icon: Shield,
      title: "Sin compromiso y 100% segura",
      description:
        "Nuestro equipo te asesorará en base a tus necesidades sin ningún compromiso y garantizamos la seguridad de tus datos.",
    },
    {
      icon: CheckCircle,
      title: "Conocimiento en primera persona",
      description:
        "Podrás conocer en primera persona cómo funciona Humancore y qué solución es la más adecuada para tu empresa",
    },
  ];

  const clients = [
    "Alain Afflelou",
    "Hofmann",
    "BLACK&DECKER",
    "Top Doctors",
    "Aquaservice",
    "Médicos Sin Fronteras",
    "Babaria",
    "Toyota",
    "Oceanogràfic",
    "Opticalia",
    "Hoff",
    "Universidad Católica",
    "IKKS",
    "LATAM Airlines",
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Top Banner */}
            <div className="bg-blue-600 text-white py-2 px-4 rounded-full inline-block mb-8">
              <span className="text-sm font-medium">
                📢 Ficha a tu manera, ficha con Humancore. Cumple con la nueva
                ley de fichaje digital sin cambiar tu rutina | Descubre cómo
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              La plataforma <span className="text-blue-600">all in one</span> de
              RRHH para <span className="text-blue-600">gestionar talento</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Conoce <strong>Humancore desde dentro</strong> y descubre cómo
              sacar todo el partido para todas las áreas de tu empresa con
              nuestra consultoría personalizada
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>

            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center mx-auto">
              Empezar el trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Demo Request Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Solicita tu demo gratuita
            </h2>
          </div>

          {/* Client Logos */}
          <div className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
              {clients.map((client, index) => (
                <div key={index} className="text-gray-400 text-sm font-medium">
                  {client}
                </div>
              ))}
            </div>
          </div>

          {/* Why Demo Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {whyDemo.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Solicita una demo ahora
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Revoluciona la experiencia de tu equipo e impulsa tu negocio.
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Solicita una demostración gratuita de Humancore y te mostraremos
            cómo transformar todos sus procesos de RRHH
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Solicitar demo gratuita
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
