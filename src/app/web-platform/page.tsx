import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Globe,
  Monitor,
  Users,
  BarChart3,
  Settings,
  CheckCircle,
} from "lucide-react";

export default function WebPlatform() {
  const features = [
    {
      icon: Monitor,
      title: "Intuitive Dashboard",
      description:
        "Clear and easy-to-use interface to manage all aspects of your company.",
    },
    {
      icon: Users,
      title: "Team Management",
      description:
        "Manage employees, departments and permissions from one place.",
    },
    {
      icon: BarChart3,
      title: "Real-time Reports",
      description: "View updated data instantly with interactive charts.",
    },
    {
      icon: Settings,
      title: "Advanced Configuration",
      description:
        "Customize the platform according to your company's specific needs.",
    },
  ];

  const benefits = [
    "Access from any device with web browser",
    "Automatic synchronization with mobile app",
    "Automatic backup of all data",
    "Automatic updates without interruptions",
    "24/7 technical support",
    "Compliance with security regulations",
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Web
                <br />
                <span className="text-blue-600">Platform</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Record entries and exits, get real-time reports, edit clock-ins
                and manage your teams. Everything through a cloud platform, from
                any device.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                  <Globe className="mr-2 h-5 w-5" />
                  Access Platform
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
                  View Demo
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-lg bg-gray-100 rounded-lg p-4 shadow-2xl">
                <div className="w-full h-8 bg-gray-300 rounded mb-4 flex items-center px-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <div className="w-full h-4 bg-gray-200 rounded mb-4"></div>
                  <div className="w-3/4 h-3 bg-gray-300 rounded mb-4"></div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">
                        Dashboard
                      </span>
                    </div>
                    <div className="h-16 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 font-semibold">
                        Employees
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-semibold">
                      Manage Team
                    </span>
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
              Features of the
              <br />
              <span className="text-blue-600">web platform</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition-shadow"
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
                Why choose
                <br />
                <span className="text-blue-600">our platform?</span>
              </h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Immediate Access
              </h3>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900">
                      Access URL
                    </span>
                    <span className="text-blue-600 font-mono">
                      app.Humancoretime.com
                    </span>
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900">
                      Availability
                    </span>
                    <span className="text-green-600 font-semibold">99.9%</span>
                  </div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900">Support</span>
                    <span className="text-purple-600 font-semibold">24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Access our web platform and discover all the features that can
            improve your company&apos;s management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              <Globe className="mr-2 h-5 w-5" />
              Access Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center">
              Request Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
