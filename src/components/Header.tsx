"use client";

import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Bell,
  Clock,
  Calendar,
  Globe,
  CheckCircle,
  BarChart3,
  Tablet,
  Users,
  User,
} from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-purple-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center text-sm">
            <Bell className="h-4 w-4 mr-2" />
            <span>
              New feature: expense control, forget about tickets and manual
              management! |
              <a href="#" className="underline ml-1">
                More information here
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center mr-2">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <h1 className="text-xl font-bold text-gray-900">sesame</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  Product
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sesame TIME
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sesame HR
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  Features
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-6">
                    {/* Gestión del tiempo */}
                    <div className="mb-6">
                      <div className="flex items-center mb-4">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                          Time Management
                        </h3>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <a
                          href="/time-tracking-software"
                          className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                            <Clock className="h-4 w-4 text-purple-600" />
                          </div>
                          <span className="text-sm text-gray-700">
                            Time Tracking
                          </span>
                        </a>
                        <a
                          href="/vacation-manager"
                          className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                            <Calendar className="h-4 w-4 text-purple-600" />
                          </div>
                          <span className="text-sm text-gray-700">
                            Vacation Manager
                          </span>
                        </a>
                        <a
                          href="/shift-planning"
                          className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                            <Calendar className="h-4 w-4 text-purple-600" />
                          </div>
                          <span className="text-sm text-gray-700">
                            Shift Planning
                          </span>
                        </a>
                        <a
                          href="#"
                          className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                            <Globe className="h-4 w-4 text-purple-600" />
                          </div>
                          <span className="text-sm text-gray-700">
                            Remote Work
                          </span>
                        </a>
                      </div>
                    </div>

                    {/* Gestión de personal */}
                    <div className="mb-6">
                      <div className="flex items-center mb-4">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                          Staff Management
                        </h3>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <a
                          href="/task-planning"
                          className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                            <CheckCircle className="h-4 w-4 text-blue-600" />
                          </div>
                          <span className="text-sm text-gray-700">
                            Task Planning
                          </span>
                        </a>
                        <a
                          href="#"
                          className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                            <BarChart3 className="h-4 w-4 text-blue-600" />
                          </div>
                          <span className="text-sm text-gray-700">
                            Reports and Statistics
                          </span>
                        </a>
                        <a
                          href="#"
                          className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                            <Clock className="h-4 w-4 text-blue-600" />
                          </div>
                          <span className="text-sm text-gray-700">
                            Time Bank
                          </span>
                        </a>
                        <a
                          href="#"
                          className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                            <Bell className="h-4 w-4 text-blue-600" />
                          </div>
                          <span className="text-sm text-gray-700">
                            Alerts and Approvals
                          </span>
                        </a>
                      </div>
                    </div>

                    {/* Multidispositivos */}
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                          Multi-device
                        </h3>
                      </div>
                      <div className="grid grid-cols-1 gap-3">
                        <a
                          href="/tablet-clock-in"
                          className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                            <Tablet className="h-4 w-4 text-green-600" />
                          </div>
                          <span className="text-sm text-gray-700">
                            Tablet Clock In
                          </span>
                        </a>
                        <a
                          href="/employee-center"
                          className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                            <Users className="h-4 w-4 text-green-600" />
                          </div>
                          <span className="text-sm text-gray-700">
                            Employee Center
                          </span>
                        </a>
                        <a
                          href="#"
                          className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                            <User className="h-4 w-4 text-green-600" />
                          </div>
                          <span className="text-sm text-gray-700">
                            Employee Panel
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="/precios"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Login
              </a>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm">
                Login
              </button>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm">
                Free Trial
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
                <a
                  href="#"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                >
                  Producto
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                >
                  Features
                </a>
                <a
                  href="/time-tracking-software"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                >
                  Time Tracking
                </a>
                <a
                  href="/shift-planning"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                >
                  Shift Planning
                </a>
                <a
                  href="/task-planning"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                >
                  Task Planning
                </a>
                <a
                  href="/vacation-manager"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                >
                  Vacation Manager
                </a>
                <a
                  href="/tablet-clock-in"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                >
                  Tablet Clock In
                </a>
                <a
                  href="/employee-center"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                >
                  Employee Center
                </a>
                <a
                  href="/pricing"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                >
                  Login
                </a>
                <button className="w-full text-left px-3 py-2 text-base font-medium text-white bg-blue-600 rounded-lg">
                  Free Trial
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
