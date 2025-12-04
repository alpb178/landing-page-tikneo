import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, Star, Download, MessageCircle } from "lucide-react";

export default function PricingPage() {
  const plans = [
    {
      name: "HR Time",
      monthlyPrice: "5,25",
      annualPrice: "4,75",
      currency: "€",
      period: "user / month",
      minMonthly: "78,75 €",
      minAnnual: "71,25 €",
      features: [
        "Control horario",
        "Ausencias y Vacaciones",
        "Informes y Estadísticas",
        "Portal de Administrador y Empleado",
        "Automatizaciones",
        "Avisos",
        "Turnos",
        "Gestor de Tareas",
        "Bolsa de Horas",
        "Gestor Documental",
        "Integraciones",
        "Face ID",
        "Firma avanzada (2 por empleado/año)",
        "Canal de Denuncias",
      ],
      popular: false,
    },
    {
      name: "HR Starter",
      monthlyPrice: "6,00",
      annualPrice: "5,50",
      currency: "€",
      period: "user / month",
      minMonthly: "90,00 €",
      minAnnual: "82,50 €",
      features: [
        "Todo lo incluido en Time, además de:",
        "Organigrama",
        "Comunicación interna",
        "Envío de Nóminas",
        "Apps externas",
      ],
      popular: true,
    },
    {
      name: "HR Professional",
      monthlyPrice: "6,75",
      annualPrice: "6,25",
      currency: "€",
      period: "user / month",
      minMonthly: "101,25 €",
      minAnnual: "93,75 €",
      features: [
        "Todo lo incluido en HR Starter, además de:",
        "Chat",
        "Onboarding y offboarding",
        "Evaluación del desempeño",
        "People Analytics",
        "Gestión de objetivos",
        "Apps externas",
      ],
      popular: false,
    },
  ];

  const comparisonFeatures = [
    {
      feature: "Control horario multidispositivo",
      time: true,
      starter: true,
      professional: true,
    },
    {
      feature: "Ausencias y vacaciones",
      time: true,
      starter: true,
      professional: true,
    },
    {
      feature: "Expediente digital de los empleados",
      time: true,
      starter: true,
      professional: true,
    },
    {
      feature: "Informes y reportes en tiempo real",
      time: true,
      starter: true,
      professional: true,
    },
    {
      feature: "Automatizaciones",
      time: true,
      starter: true,
      professional: true,
    },
    {
      feature: "Tareas y proyectos",
      time: true,
      starter: true,
      professional: true,
    },
    { feature: "Avisos", time: true, starter: true, professional: true },
    { feature: "Multiempresa", time: true, starter: true, professional: true },
    {
      feature: "Canal de denuncias",
      time: true,
      starter: true,
      professional: true,
    },
    {
      feature: "Bolsa de horas",
      time: true,
      starter: true,
      professional: true,
    },
    {
      feature: "Gestor documental",
      time: true,
      starter: true,
      professional: true,
    },
    { feature: "Face ID", time: true, starter: true, professional: true },
    {
      feature: "Firma avanzada",
      time: "2 por empleado/año",
      starter: "3 por empleado/año",
      professional: "4 por empleado/año",
    },
    { feature: "Turnos", time: true, starter: true, professional: true },
    { feature: "Integraciones", time: true, starter: true, professional: true },
    { feature: "Prenómina", time: true, starter: true, professional: true },
    {
      feature: "Reclutamiento",
      time: "5 ofertas",
      starter: "25 ofertas",
      professional: true,
    },
    { feature: "Organigrama", time: false, starter: true, professional: true },
    {
      feature: "Comunicación interna",
      time: false,
      starter: true,
      professional: true,
    },
    { feature: "Capacitación", time: false, starter: true, professional: true },
    {
      feature: "Envío de nómina",
      time: false,
      starter: true,
      professional: true,
    },
    { feature: "Chat", time: false, starter: false, professional: true },
    {
      feature: "Onboarding y offboarding",
      time: false,
      starter: false,
      professional: true,
    },
    {
      feature: "Evaluaciones",
      time: false,
      starter: false,
      professional: true,
    },
    { feature: "1TO1", time: false, starter: false, professional: true },
    {
      feature: "Reserva de salas",
      time: false,
      starter: false,
      professional: true,
    },
    {
      feature: "People Analytics",
      time: false,
      starter: false,
      professional: true,
    },
    {
      feature: "Gestión de objetivos",
      time: false,
      starter: false,
      professional: true,
    },
    {
      feature: "Apps externas",
      time: false,
      starter: true,
      professional: true,
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Precios y Planes
            </h1>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                  plan.popular ? "ring-2 ring-purple-600 scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      el más elegido
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">
                        {plan.annualPrice}
                      </span>
                      <span className="text-2xl text-gray-600 ml-1">
                        {plan.currency}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">
                        {plan.monthlyPrice}
                      </span>
                      <span className="text-2xl text-gray-600 ml-1">
                        {plan.currency}
                      </span>
                    </div>
                    <p className="text-gray-600 mt-2">{plan.period}</p>
                  </div>
                  <div className="text-sm text-gray-500 mb-4">
                    <p>Importe mínimo {plan.minAnnual}</p>
                    <p>Importe mínimo {plan.minMonthly}</p>
                  </div>
                </div>

                <div className="text-center mb-8">
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-4">
                    Pruébalo gratis 14 días
                  </button>
                  <p className="text-sm text-gray-500">
                    Sin compromiso y sin tarjeta de crédito
                  </p>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              ¡Crea tu cuenta!
            </h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email*
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa*
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre*
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Apellidos*
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tus apellidos"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono*
                  </label>
                  <div className="flex">
                    <select className="px-4 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>España (+34)</option>
                      <option>México (+52)</option>
                      <option>Colombia (+57)</option>
                    </select>
                    <input
                      type="tel"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Número de teléfono"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sector
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Selecciona una opción</option>
                    <option>Tecnología</option>
                    <option>Retail</option>
                    <option>Hostelería</option>
                    <option>Construcción</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ¿Cuál es tu cargo?
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Selecciona una opción</option>
                    <option>CEO / Director</option>
                    <option>HR Director</option>
                    <option>HR Manager</option>
                    <option>IT Manager</option>
                    <option>Administración</option>
                    <option>Empleado</option>
                    <option>Estudiante</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Número de empleados*
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Escoge un rango</option>
                    <option>De 1 a 15 empleados</option>
                    <option>De 16 a 50 empleados</option>
                    <option>De 51 a 150 empleados</option>
                    <option>De 151 a 500 empleados</option>
                    <option>Más de 500 empleados</option>
                  </select>
                </div>
              </div>

              <div className="flex items-start">
                <input type="checkbox" className="mt-1 mr-3" required />
                <p className="text-sm text-gray-600">
                  Al continuar declaras que aceptas las{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Condiciones generales
                  </a>{" "}
                  y la{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Política de privacidad
                  </a>
                </p>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  ¡Crea tu cuenta!
                </button>
              </div>
            </form>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                ¿Quieres personalizar tu experiencia? Si aquí no encuentras lo
                que buscas, ponte en contacto con nosotros.
              </p>
              <button className="text-blue-600 hover:underline">
                Compara las funcionalidades
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Compara las funcionalidades
          </h2>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Funcionalidad
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      HR Time
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      HR Starter
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      HR Professional
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisonFeatures.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {item.feature}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {item.time === true ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : item.time === false ? (
                          <span className="text-gray-400">—</span>
                        ) : (
                          <span className="text-sm text-gray-600">
                            {item.time}
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {item.starter === true ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : item.starter === false ? (
                          <span className="text-gray-400">—</span>
                        ) : (
                          <span className="text-sm text-gray-600">
                            {item.starter}
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {item.professional === true ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : item.professional === false ? (
                          <span className="text-gray-400">—</span>
                        ) : (
                          <span className="text-sm text-gray-600">
                            {item.professional}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Preguntas frecuentes
          </h2>

          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Hay una versión gratuita?
              </h3>
              <p className="text-gray-600">
                Si. En el periodo de prueba puedes disfrutar{" "}
                <strong>durante 14 días</strong> de todas las funcionalidades de
                Humancore gratis y sin necesidad de introducir datos de pago.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Cuánto cuesta Humancore?
              </h3>
              <p className="text-gray-600 mb-4">
                Tenemos dos planes distintos y dos formas de pago: anual y
                mensual. Así que dependerá del plan y la forma de pago que
                elijas.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>
                  <strong>Humancore Time Advanced</strong>
                </li>
                <li>
                  El <strong>plan de pago anual</strong> serían 4,50€ al mes por
                  empleado.
                </li>
                <li>
                  Si eliges el <strong>plan de pago mensual</strong> serían 5€
                  al mes por empleado.
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Cuál es el importe mínimo de facturación?
              </h3>
              <p className="text-gray-600">
                El importe mínimo de facturación es el equivalente a contratar
                15 empleados:
              </p>
              <ul className="text-gray-600 mt-2 space-y-1">
                <li>
                  <strong>Humancore Time Advanced</strong>
                </li>
                <li>Mensual – desde 75€</li>
                <li>Anual – desde 67,50€</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Puedo pagar Humancore al mes?
              </h3>
              <p className="text-gray-600">
                Por supuesto. En todos los planes de Humancore tienes la opción
                de pagar de forma <strong>mensual o anual</strong>. Sin embargo,
                recuerda que si pagas de forma anual tendrás un{" "}
                <strong>descuento importante.</strong>
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Cuál es el plan de precios adecuado para mi?
              </h3>
              <p className="text-gray-600">
                En Humancore entendemos que cada empresa es un mundo y, por
                tanto, tiene unas necesidades distintas. Si no sabes con
                seguridad cuál es el plan de precios que mejor encaja con tu
                negocio{" "}
                <strong>te recomendamos hablar con nuestros agentes</strong>.
                Seguro que pueden ayudarte a entender más en profundidad tus
                necesidades y darte un buen servicio de asesoramiento.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Si cambio de opinión, ¿puedo cancelar mi plan?
              </h3>
              <p className="text-gray-600">
                Sí, podrás cancelar tus suscripción enviando un correo a
                cancelacion@Humancoretime.com para hacer la solicitud. También
                podrás contactar con nuestro servicio de soporte para solicitar
                la gestión de la cancelación.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Puedo cambiar de plan en cualquier momento?
              </h3>
              <p className="text-gray-600">
                Puedes cambiar de plan en el momento en que lo desees. Tan solo
                tendrás que solicitarlo a través del espacio de &apos;Planes y
                precios&apos; que encontrarás en el menú desplegable en la parte
                superior derecha de tu panel. Podrás modificar las condiciones
                de tu plan en primera persona pero lo mejor es que cuentes con
                el asesoramiento de soporte para conocer detalladamente todas
                las nuevas funcionalidades que vas a tener disponibles al
                modificar tu plan.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Ofrecen planes con descuento?
              </h3>
              <p className="text-gray-600">
                Si. Contratando el plan de pago anual podrás acceder a un{" "}
                <strong>porcentaje de descuento</strong> Ponte en contacto con
                nuestros agentes si quieres saber más.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
