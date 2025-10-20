import { Play } from "lucide-react";

export default function Support() {
  return (
    <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
      {/* Background with person silhouette */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        {/* Person silhouette */}
        <div className="absolute left-1/4 top-1/2 transform -translate-y-1/2 w-64 h-96">
          <div className="w-32 h-40 bg-gray-700 rounded-full opacity-30"></div>
          <div className="absolute top-32 left-8 w-16 h-24 bg-gray-600 rounded-full opacity-40"></div>
          <div className="absolute top-56 left-12 w-8 h-8 bg-gray-500 rounded-full opacity-50"></div>
        </div>

        {/* Phone silhouette */}
        <div className="absolute left-1/3 top-1/2 transform -translate-y-1/2 w-8 h-16 bg-gray-600 rounded-lg opacity-40"></div>

        {/* Office elements */}
        <div className="absolute right-1/4 top-1/3 w-32 h-48 bg-gray-700 rounded-lg opacity-20"></div>
        <div className="absolute right-1/3 top-1/4 w-24 h-32 bg-gray-600 rounded-lg opacity-25"></div>

        {/* Decorative elements */}
        <div className="absolute right-1/5 top-1/5 w-16 h-16 bg-blue-500 rounded-full opacity-20"></div>
        <div className="absolute right-1/6 bottom-1/4 w-12 h-12 bg-blue-400 rounded-full opacity-30"></div>
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Title */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Soporte y
              <br />
              <span className="text-blue-400">atención personalizada</span>
            </h2>
          </div>

          {/* Right side - Content */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Nuestro fuerte es estar a tu lado. Te ayudamos en todo.
            </h3>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              ¿Quieres que te ayudemos a configurar Tikneo? Estamos disponibles
              a través de chat, email o teléfono. Te ayudamos a resolver tus
              dudas y a sacar el máximo partido a todas las funcionalidades de
              Tikneo. Queremos que te sientas cómodo y seguro, desde el primer
              día. Queremos que usar Tikneo sea tan sencillo como usarlo en el
              día a día.
            </p>

            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center">
              <Play className="mr-2 h-5 w-5" />
              Ver demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
