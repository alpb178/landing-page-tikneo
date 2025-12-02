import {
  CheckCircle,
  Play,
  ArrowRight,
  Search,
  Clock,
  User,
  Plus,
} from "lucide-react";

export default function Hero() {
  return (
    <>
      {/* Main Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Optimiza la gestión de empleados
              <br />
              <span className="text-blue-600">
                ahorrando tiempo, esfuerzo y dinero
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Y para que veas como funciona Tikneo, te ofrecemos{" "}
              <span className="text-purple-600 font-semibold">
                14 días de prueba totalmente gratuita
              </span>{" "}
              sin compromiso
            </p>

            <div className="flex flex-col items-center justify-center sm:flex-row gap-4 mb-12">
              <button className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center">
                Prueba gratis
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 transition-colors flex items-center justify-center">
                <Play className="mr-2 h-5 w-5" />
                Ver demo
              </button>
            </div>

            <div className="flex items-center justify-center text-sm text-gray-500">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              <span className="font-semibold">14.000 compañías</span>
              <span className="ml-2">ya confían en nosotros</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
