import { CheckCircle, Star } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Básico",
      price: "3.50",
      period: "por empleado/mes",
      description: "Perfecto para pequeñas empresas",
      features: [
        "Control horario básico",
        "App móvil",
        "Informes básicos",
        "Soporte por email",
        "Hasta 10 empleados",
      ],
      popular: false,
    },
    {
      name: "Profesional",
      price: "5.50",
      period: "por empleado/mes",
      description: "Ideal para empresas en crecimiento",
      features: [
        "Todo lo del plan Básico",
        "Planificación de turnos",
        "Gestión de vacaciones",
        "Integraciones avanzadas",
        "Soporte prioritario",
        "Hasta 50 empleados",
      ],
      popular: true,
    },
    {
      name: "Empresa",
      price: "8.50",
      period: "por empleado/mes",
      description: "Para grandes organizaciones",
      features: [
        "Todo lo del plan Profesional",
        "Gestión de tareas",
        "Analytics avanzados",
        "API personalizada",
        "Soporte 24/7",
        "Empleados ilimitados",
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Precios
            <br />
            <span className="text-blue-600">que se adaptan a tu empresa</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Elige el plan que mejor se adapte a las necesidades de tu empresa.
            Todos los planes incluyen prueba gratuita de 14 días.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg p-8 relative ${
                plan.popular ? "ring-2 ring-blue-600 transform scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Más popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    €{plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-lg text-lg font-semibold transition-colors ${
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                {plan.popular ? "Empezar prueba gratuita" : "Elegir plan"}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">
            ¿Necesitas un plan personalizado? Contacta con nosotros
          </p>
          <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            Contactar ventas
          </button>
        </div>
      </div>
    </section>
  );
}
