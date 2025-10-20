import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  BarChart3,
  Download,
  FileText,
  Clock,
  Users,
  TrendingUp,
  Calendar,
  CheckCircle,
  AlertTriangle,
  Target,
  Eye,
  Filter,
  ArrowRight,
  Play,
} from "lucide-react";

export default function ReportsAndStatistics() {
  const features = [
    {
      icon: BarChart3,
      title: "Real-time reports and statistics",
      description:
        "Data helps you make better decisions in managing your team.",
    },
    {
      icon: Download,
      title: "CSV and PDF export",
      description:
        "Download HR reports information when and how you need it. Configure your own reports and export them to always have them at hand.",
    },
    {
      icon: Clock,
      title: "Overtime reports",
      description:
        "Check in real-time the hour balance of your employees. Keep exhaustive control of your team's overtime with HR reports.",
    },
    {
      icon: AlertTriangle,
      title: "Absence and delay reports",
      description:
        "Analyze the entry and exit patterns of your teams and make decisions regarding the optimization of their workday with the HR dashboard.",
    },
    {
      icon: TrendingUp,
      title: "Project profitability",
      description:
        "With hour and task computation, plan your projects and control their daily progress by measuring their profitability and showing HR statistics.",
    },
    {
      icon: FileText,
      title: "Work shift reports",
      description:
        "Get detailed information about each of your workers and make better decisions regarding your teams.",
    },
    {
      icon: CheckCircle,
      title: "Work inspection reports",
      description:
        "Comply with hour clocking regulations and store your employees' workday registration information.",
    },
  ];

  const benefits = [
    "Advanced filters by date, employee and project",
    "Real-time data synchronization",
    "Automatic report scheduling",
    "Customizable dashboard views",
    "Multi-format export options",
    "Compliance with labor regulations",
  ];

  const reportTypes = [
    "Overtime reports",
    "Workday records",
    "Vacation calendar",
    "Team profitability",
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
                Reports and
                <br />
                <span className="text-blue-600">statistics</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Check interactive work performance reports or download them in
                your preferred format. Having all the information centralized
                gives you a great advantage in managing your teams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                  <Play className="mr-2 h-5 w-5" />
                  View reports demo
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
                  <Download className="mr-2 h-5 w-5" />
                  Free trial
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
                        Reports
                      </span>
                    </div>
                    <div className="h-16 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 font-semibold">
                        Statistics
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-semibold">
                      Generate Report
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All information simplified and easy to understand */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              All information simplified and
              <br />
              <span className="text-blue-600">easy to understand</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hour reports, punctuality, overtime, profitability... Create your
              own reports and download them in your preferred format.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
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

      {/* Extract intelligence from your data */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Extract intelligence from your data.
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Who will be on vacation next week? Who has done overtime this
                month?
                <br />
                <br />
                Centralize all your teams' activity in one software and become
                an expert in your company.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {reportTypes.map((type, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{type}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Great cost savings.
              </h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    80%
                  </div>
                  <div className="text-gray-600">
                    Reduction in administrative tasks
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    50%
                  </div>
                  <div className="text-gray-600">
                    Time saved on report generation
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    100%
                  </div>
                  <div className="text-gray-600">
                    Compliance with regulations
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your HR team now has things easier */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your HR team now has things easier.
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Save your company's daily information and consult it daily,
              monthly or annually. Forget about tedious reports that become
              outdated quickly and save time by having all information
              centralized.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Clear and accessible information
              </h3>
              <p className="text-lg text-gray-600 mb-6">For everyone.</p>
              <p className="text-gray-600 mb-8">
                More and better information creates more efficient teams. With
                Sesame, employees will be able to consult all information
                related to their clock-ins, their vacations and their projects.
                <br />
                <br />
                Empower your teams and grow your projects.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                Discover more features
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <BarChart3 className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Reports</h4>
                <p className="text-sm text-gray-600">Real-time analytics</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6 text-center">
                <Users className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Teams</h4>
                <p className="text-sm text-gray-600">Team management</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-6 text-center">
                <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Schedules</h4>
                <p className="text-sm text-gray-600">Time tracking</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-6 text-center">
                <Target className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Goals</h4>
                <p className="text-sm text-gray-600">Performance tracking</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Free trial for 14 days
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            If you want to know how to do it (this is the part we like the most)
            we tell you how.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              <Play className="mr-2 h-5 w-5" />
              Free trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center">
              <FileText className="mr-2 h-5 w-5" />
              More information
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

