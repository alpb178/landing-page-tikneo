import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, User, ArrowRight, Search, Tag } from "lucide-react";

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Cómo implementar el control horario en tu empresa paso a paso",
      excerpt:
        "Guía completa para implementar un sistema de control horario efectivo que cumpla con la normativa y mejore la productividad de tu equipo.",
      author: "Equipo Sesame",
      date: "15 Enero 2025",
      category: "Control Horario",
      readTime: "5 min",
      image: "/api/placeholder/400/250",
    },
    {
      title: "Smart Working: El futuro del trabajo híbrido",
      excerpt:
        "Descubre cómo el trabajo híbrido está transformando las empresas y qué herramientas necesitas para implementarlo con éxito.",
      author: "María González",
      date: "12 Enero 2025",
      category: "Smart Working",
      readTime: "7 min",
      image: "/api/placeholder/400/250",
    },
    {
      title: "Gestión de vacaciones: Mejores prácticas para RRHH",
      excerpt:
        "Aprende las mejores estrategias para gestionar las vacaciones de tu equipo de forma eficiente y sin conflictos.",
      author: "Carlos Ruiz",
      date: "10 Enero 2025",
      category: "RRHH",
      readTime: "6 min",
      image: "/api/placeholder/400/250",
    },
    {
      title: "Planificación de turnos: Optimiza tu fuerza laboral",
      excerpt:
        "Consejos prácticos para planificar turnos de trabajo que maximicen la productividad y satisfacción de tus empleados.",
      author: "Ana Martínez",
      date: "8 Enero 2025",
      category: "Planificación",
      readTime: "8 min",
      image: "/api/placeholder/400/250",
    },
    {
      title:
        "Cumplimiento legal: Todo lo que debes saber sobre el registro horario",
      excerpt:
        "Guía actualizada sobre la normativa de registro horario y cómo asegurar el cumplimiento en tu empresa.",
      author: "Equipo Legal",
      date: "5 Enero 2025",
      category: "Legal",
      readTime: "10 min",
      image: "/api/placeholder/400/250",
    },
    {
      title:
        "Tecnología y RRHH: Cómo la digitalización transforma los recursos humanos",
      excerpt:
        "Explora las tendencias tecnológicas que están revolucionando la gestión de recursos humanos en las empresas modernas.",
      author: "David García",
      date: "3 Enero 2025",
      category: "Tecnología",
      readTime: "9 min",
      image: "/api/placeholder/400/250",
    },
  ];

  const categories = [
    "Todos",
    "Control Horario",
    "Smart Working",
    "RRHH",
    "Planificación",
    "Legal",
    "Tecnología",
  ];

  const featuredPost = blogPosts[0];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Blog de Sesame
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Descubre las últimas tendencias en gestión de recursos humanos,
              control horario y productividad empresarial.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar artículos..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Artículo destacado
          </h2>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Tag className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-blue-600 font-semibold">
                    {featuredPost.category}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <User className="h-4 w-4 mr-2" />
                  <span className="mr-4">{featuredPost.author}</span>
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="mr-4">{featuredPost.date}</span>
                  <span>{featuredPost.readTime} de lectura</span>
                </div>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center">
                  Leer artículo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <span className="text-gray-500">Imagen del artículo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Últimos artículos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <span className="text-gray-500">Imagen del artículo</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Tag className="h-4 w-4 text-blue-600 mr-2" />
                    <span className="text-blue-600 font-semibold text-sm">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center">
                    Leer más
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Mantente al día con las últimas tendencias
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Suscríbete a nuestro newsletter y recibe los mejores artículos sobre
            RRHH y productividad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Suscribirse
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
