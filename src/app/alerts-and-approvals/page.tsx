import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Bell,
  Smartphone,
  Clock,
  Calendar,
  MapPin,
  MessageSquare,
  CheckCircle,
  AlertTriangle,
  Users,
  Settings,
  Play,
  ArrowRight,
  FileText,
  Download,
  Eye,
  Send,
  Zap,
  Shield,
  Target,
} from "lucide-react";

export default function AlertsAndApprovals() {
  const features = [
    {
      icon: Bell,
      title: "Push notifications",
      description:
        "Send your team the information they need and make sure it reaches them by activating push notifications in the Sesame APP.",
    },
    {
      icon: Clock,
      title: "Overtime alerts",
      description:
        "Alert your employees when they have reached the end of their workday and avoid involuntary overtime.",
    },
    {
      icon: Calendar,
      title: "Schedules on mobile",
      description:
        "Your employees will have all the information about their shifts and schedules on their mobile, they can request absences and you can notify them if changes are made.",
    },
    {
      icon: AlertTriangle,
      title: "Forgotten clock-in alerts",
      description:
        "Mark in Sesame's configuration the end of workday time and alert with an automatic message employees who haven't clocked out yet.",
    },
    {
      icon: MapPin,
      title: "Start and end of workday alerts",
      description:
        "Remind employees of the start of workday. Very useful in shift work. You can also remind them where they need to go when necessary.",
    },
    {
      icon: MessageSquare,
      title: "Send communications",
      description:
        "Communicate easily with your employees by sending information directly to their smartphones.",
    },
  ];

  const communicationFeatures = [
    {
      title: "Shift communication",
      description: "Employees can check their shifts at any time.",
      icon: Calendar,
    },
    {
      title: "Absence communication",
      description:
        "Automatically receive notifications when your employees request absence permits.",
      icon: Users,
    },
  ];

  const benefits = [
    "Convert Sesame to SMART",
    "Use smart alerts to improve how employees compute their times",
    "Avoid mistakes and easily correct clock-in errors",
    "Real-time notifications",
    "Mobile management",
    "Automated communications",
  ];

  const testimonials = [
    {
      name: "Sarah Martinez",
      position: "HR Manager",
      company: "TechCorp",
      content:
        "The truth is that it's very comfortable to be able to check my schedules in the Sesame app. Also, if there are any changes they notify me automatically.",
      rating: 5,
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Alerts and
                <br />
                <span className="text-orange-600">approvals</span>
              </h1>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Alerts and notifications. Don't miss anything
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Receive and send notifications when you need them. Employee
                notices, overtime, absence requests or overtime and forgotten
                clock-ins.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center">
                  <Play className="mr-2 h-5 w-5" />
                  Free trial
                </button>
                <button className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-50 transition-colors flex items-center justify-center">
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
                      <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                        <Bell className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-bold text-gray-900">
                        Alerts Center
                      </span>
                    </div>
                    <div className="text-sm text-orange-600 font-semibold">
                      3 New
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-red-50 rounded-lg p-3 flex items-center">
                      <AlertTriangle className="h-4 w-4 text-red-500 mr-3" />
                      <div>
                        <div className="text-sm font-semibold text-gray-900">
                          Overtime Alert
                        </div>
                        <div className="text-xs text-gray-600">
                          John exceeded work hours
                        </div>
                      </div>
                    </div>
                    <div className="bg-yellow-50 rounded-lg p-3 flex items-center">
                      <Clock className="h-4 w-4 text-yellow-500 mr-3" />
                      <div>
                        <div className="text-sm font-semibold text-gray-900">
                          Forgotten Clock-in
                        </div>
                        <div className="text-xs text-gray-600">
                          Sarah hasn't clocked out
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 flex items-center">
                      <Calendar className="h-4 w-4 text-blue-500 mr-3" />
                      <div>
                        <div className="text-sm font-semibold text-gray-900">
                          Schedule Change
                        </div>
                        <div className="text-xs text-gray-600">
                          Shift update for tomorrow
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Convert Sesame to SMART */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Convert Sesame to SMART
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Use smart alerts to improve the way employees compute their times.
              Avoid mistakes and easily correct clock-in errors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mx-auto mb-6">
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

      {/* Communication features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communicationFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App manager */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                App manager
              </h2>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Manage everything easily from your mobile
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                You don't need to get to the office to approve and manage your
                team's incidents. Do it wherever and whenever you want from the
                APP.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Mobile Management
              </h3>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="font-semibold">Approved</span>
                  </div>
                  <span className="text-sm text-green-600">
                    Vacation Request
                  </span>
                </div>

                <div className="bg-white rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                    <span className="font-semibold">Pending</span>
                  </div>
                  <span className="text-sm text-yellow-600">
                    Overtime Request
                  </span>
                </div>

                <div className="bg-white rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="font-semibold">Rejected</span>
                  </div>
                  <span className="text-sm text-red-600">Schedule Change</span>
                </div>

                <div className="bg-white rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="font-semibold">New</span>
                  </div>
                  <span className="text-sm text-blue-600">Absence Request</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What our users say
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-4">
              {[...Array(testimonials[0].rating)].map((_, i) => (
                <div key={i} className="w-5 h-5 text-yellow-400 fill-current">
                  ★
                </div>
              ))}
            </div>
            <p className="text-gray-700 mb-6 italic text-lg">
              "{testimonials[0].content}"
            </p>
            <div>
              <div className="font-semibold text-gray-900">
                {testimonials[0].name}
              </div>
              <div className="text-sm text-gray-600">
                {testimonials[0].position}
              </div>
              <div className="text-sm text-orange-600">
                {testimonials[0].company}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Free trial for 14 days
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            If you want to know how to do it (this is the part we like the most)
            we tell you how.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              <Play className="mr-2 h-5 w-5" />
              Free trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors flex items-center justify-center">
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

