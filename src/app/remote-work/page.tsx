import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Clock,
  Users,
  Smartphone,
  Calendar,
  MapPin,
  CheckCircle,
  Globe,
  Home,
  Building,
  Wifi,
  Download,
  FileText,
  Play,
  ArrowRight,
  BarChart3,
  Target,
  UserCheck,
  Settings,
} from "lucide-react";

export default function RemoteWork() {
  const features = [
    {
      icon: Clock,
      title: "Time tracking",
      description:
        "Measure the time your team dedicates to each task and control project profitability. Visualize in real-time the tasks and who is performing each task.",
    },
    {
      icon: Users,
      title: "Who's in",
      description:
        "Both the company and employees can know, in real-time, who is working in the office, on a break or working remotely.",
    },
    {
      icon: Smartphone,
      title: "Mobile APP",
      description:
        "The employee can register from their mobile the time they dedicate to each project and manage everything related to their workday.",
    },
    {
      icon: Calendar,
      title: "Absences",
      description:
        "With the remote work application, manage employee absences and remote work days with a couple of clicks.",
    },
    {
      icon: Target,
      title: "Planning",
      description:
        "Plan tasks and shifts and get reports and statistics on the performance and productivity of the employee workforce.",
    },
    {
      icon: MapPin,
      title: "Geolocated clock-in",
      description:
        "Remote clock-in without complications through our APP, to know where your team works from.",
    },
  ];

  const benefits = [
    "Adapt your company to new times",
    "Real-time team status monitoring",
    "Flexible work management",
    "Improved work-life balance",
    "Increased employee autonomy",
    "Cost reduction for companies",
  ];

  const stats = [
    {
      number: "5%",
      description: "Companies offered remote work in early 2020",
    },
    {
      number: "40%",
      description: "Companies now offer remote work",
    },
    {
      number: "8,000",
      description: "Companies already trust us",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Remote work,
                <br />
                <span className="text-green-600">simpler than ever</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Work in the office, at home or on the move... We have an
                application for you! Remote work is no longer the future, it's
                the present! Optimize remote work management with Sesame.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center">
                  <Play className="mr-2 h-5 w-5" />
                  Free trial
                </button>
                <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors flex items-center justify-center">
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
                      <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                        <Home className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-bold text-gray-900">
                        Remote Work
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">Online</div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Team Status</span>
                      <span className="text-sm font-semibold text-green-600">
                        8 Active
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        Remote Workers
                      </span>
                      <span className="text-sm font-semibold text-blue-600">
                        5
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        Office Workers
                      </span>
                      <span className="text-sm font-semibold text-purple-600">
                        3
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adapt your company to new times */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Adapt your company to new times
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12">
              At the beginning of 2020 only 5% of companies offered the remote
              work option to their employees, now nearly 40% of companies do it.
              And the figure is increasing!
              <br />
              <br />
              Bet on software adapted to remote work, it's a great opportunity
              to manage work from home, facilitate work-life balance and provide
              greater autonomy.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Software adapted to remote work */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Software adapted to remote work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mx-auto mb-6">
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

      {/* Know your team's status from anywhere in the world */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Know your team's status from anywhere in the world
              </h2>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Time tracking adapted to remote work.
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Manage work teams and know their status at any time.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Team Status Dashboard
              </h3>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="font-semibold">Sarah Johnson</span>
                  </div>
                  <span className="text-sm text-green-600">Remote</span>
                </div>

                <div className="bg-white rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="font-semibold">Mike Chen</span>
                  </div>
                  <span className="text-sm text-blue-600">Office</span>
                </div>

                <div className="bg-white rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                    <span className="font-semibold">Emma Wilson</span>
                  </div>
                  <span className="text-sm text-yellow-600">Break</span>
                </div>

                <div className="bg-white rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="font-semibold">David Lee</span>
                  </div>
                  <span className="text-sm text-green-600">Remote</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Useful resources for remote work */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Useful resources for remote work
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Remote work management doesn't have to be difficult, with the
              right resources, your team can work and enrich themselves from
              that experience. What are you waiting for?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Remote Work Law
              </h3>
              <p className="text-gray-600 mb-6">
                All information about the Remote Work Law in Spain.
              </p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center">
                More information
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Download our remote work guide
              </h3>
              <p className="text-gray-600 mb-6">
                Get our comprehensive guide to implementing remote work in your
                company.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                <Download className="mr-2 h-5 w-5" />
                Download guide
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                I consent to the processing of my data to receive commercial
                information from Sesame
              </h3>
              <div className="flex items-center justify-center">
                <div className="text-3xl font-bold text-green-600 mr-4">
                  8,000
                </div>
                <div className="text-gray-600">companies already trust us</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Free trial for 14 days
          </h2>
          <p className="text-xl text-green-100 mb-8">
            If you want to know how to do it (this is the part we like the most)
            we tell you how.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              <Play className="mr-2 h-5 w-5" />
              Free trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors flex items-center justify-center">
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

