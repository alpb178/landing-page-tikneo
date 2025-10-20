import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Clock,
  Calculator,
  FileText,
  BarChart3,
  Settings,
  Users,
  CheckCircle,
  TrendingUp,
  Calendar,
  Play,
  ArrowRight,
  Download,
  Target,
  Zap,
  Shield,
  Eye,
} from "lucide-react";

export default function TimeBank() {
  const features = [
    {
      icon: Calculator,
      title: "Simple counting",
      description:
        "At a glance you'll discover all the information about your employees' overtime, the total of compensated hours and those pending compensation.",
    },
    {
      icon: Settings,
      title: "Create a rule",
      description:
        "What type of rule can be applied to each employee? Configure a rule system based on your company and labor agreement to establish multipliers for weekends, night shifts, holidays...",
    },
    {
      icon: FileText,
      title: "Work hours reports",
      description:
        "With the time bank extract fully customized work hours reports about overtime at any time.",
    },
  ];

  const benefits = [
    "Real-time overtime control and monitoring",
    "Customized reports for each employee",
    "Automatic calculation of positive and negative balances",
    "Compensation management throughout the year",
    "Integration with labor agreements",
    "Simplified administrative management",
  ];

  const timeBankFeatures = [
    {
      title: "Real-time tracking",
      description: "Monitor overtime hours as they happen",
      icon: Clock,
    },
    {
      title: "Balance management",
      description: "Track positive and negative hour balances",
      icon: BarChart3,
    },
    {
      title: "Compensation requests",
      description: "Employees can request compensations in real-time",
      icon: Users,
    },
    {
      title: "Year-end settlement",
      description: "Easy settlement before year-end",
      icon: Calendar,
    },
  ];

  const stats = [
    {
      number: "100%",
      description: "Automated overtime tracking",
    },
    {
      number: "Real-time",
      description: "Balance updates and monitoring",
    },
    {
      number: "Custom",
      description: "Reports and rule configuration",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Time bank,
                <br />
                <span className="text-purple-600">overtime registration</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Know and control in real-time the total overtime hours of your
                team and design personalized reports.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center">
                  <Play className="mr-2 h-5 w-5" />
                  Free trial
                </button>
                <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-colors flex items-center justify-center">
                  <Play className="mr-2 h-5 w-5" />
                  View demo
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
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                        <Clock className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-bold text-gray-900">Time Bank</span>
                    </div>
                    <div className="text-sm text-purple-600 font-semibold">
                      Active
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        Overtime Hours
                      </span>
                      <span className="text-sm font-semibold text-red-600">
                        +24h
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Compensated</span>
                      <span className="text-sm font-semibold text-green-600">
                        -12h
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Balance</span>
                      <span className="text-sm font-semibold text-purple-600">
                        +12h
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learn to register hour balance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Learn to register hour balance
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12">
              Do you want to compute the worked and unworked hours of each
              employee and create positive and negative balances that are
              compensated over time?
              <br />
              <br />
              With the time bank functionality you can get a count of real
              hours, overtime hours, compensated hours and the total balance of
              each worker.
            </p>

            <div className="bg-purple-50 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                How does Sesame's time bank work
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Calculator className="h-8 w-8" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Simple counting
                  </h4>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Settings className="h-8 w-8" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Create a rule
                  </h4>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Work hours reports
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Adjust work organization */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Adjust work organization and labor production thanks to Sesame's
                time bank
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With our HR software you won't have to worry anymore about
                overtime control and proper hour balance management.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Time Bank Management
              </h3>

              <div className="space-y-4">
                {timeBankFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 flex items-center"
                  >
                    <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {feature.title}
                      </div>
                      <div className="text-sm text-gray-600">
                        {feature.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manage team overtime in a few clicks */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Manage your team's overtime in a few clicks
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              As a project manager or project leader, properly organize your
              department's time bank, easily measure hour balance, bonuses and
              compensation of those hours at any time.
              <br />
              <br />
              Employees can request those compensations in real-time and the
              administrator can settle them easily before year-end.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Free trial for 14 days
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            If you want to know how to do it (this is the part we like the most)
            we tell you how.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              <Play className="mr-2 h-5 w-5" />
              Free trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center">
              <Download className="mr-2 h-5 w-5" />
              More information
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

