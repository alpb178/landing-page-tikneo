import { MapPin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Product Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/time-tracking-software"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Time Tracking
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Smart Work
                </a>
              </li>
              <li>
                <a
                  href="/tablet-clock-in"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Tablet Clock In
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Mobile App
                </a>
              </li>
              <li>
                <a
                  href="/vacation-manager"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Vacation Manager
                </a>
              </li>
              <li>
                <a
                  href="/shift-planning"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Shift Planning
                </a>
              </li>
              <li>
                <a
                  href="/task-planning"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Task Planning
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Document Manager
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">We&apos;re with you</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/blog"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Work with us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Partners
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  General contracting conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sesame Finance contracting conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Site Map
                </a>
              </li>
            </ul>
          </div>

          {/* Countries Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Countries</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">America</h4>
                <ul className="space-y-1 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Mexico
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Brazil
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      USA
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Colombia
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Chile
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Costa Rica
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Peru
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Europe</h4>
                <ul className="space-y-1 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Spain
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      France
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Germany
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      United Kingdom
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Italy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Netherlands
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Portugal
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Want to know more?</h3>
            <div className="space-y-4">
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Free trial for 14 days
              </button>
              <p className="text-sm text-gray-300">Free trial</p>
              <p className="text-sm text-gray-300">More information</p>
            </div>
          </div>
        </div>

        {/* Locations */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <h3 className="text-lg font-bold mb-4">Where we are</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-blue-400 mt-1" />
              <div>
                <h4 className="font-semibold">Valencia</h4>
                <p className="text-gray-300 text-sm">
                  Carrera Travesía, base 1<br />
                  (La Marina de València)
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-blue-400 mt-1" />
              <div>
                <h4 className="font-semibold">Mexico City</h4>
                <p className="text-gray-300 text-sm">
                  Juárez, Cuauhtémoc, Av. Paseo de la Reforma 296
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="bg-white text-gray-900 px-4 py-2 rounded text-sm font-semibold">
                innovative sme
              </div>
              <div className="bg-white text-gray-900 px-4 py-2 rounded text-sm font-semibold">
                iso-27001
              </div>
            </div>
            <div className="text-sm text-gray-300">
              <p>
                Sesame Labs S.L. within the ICEX Next Program, has had the
                support of ICEX and co-financing from the European fund FEDER.
              </p>
              <p className="mt-2">
                The purpose of this support is to contribute to the
                international development of the company and its environment.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="flex flex-wrap gap-6 text-sm">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Legal
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Cookies
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Security
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Whistleblower channel
            </a>
          </div>
        </div>

        {/* Language Selector and Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span className="text-sm">Spain</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span className="text-sm">Mexico</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span className="text-sm">Colombia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span className="text-sm">Chile</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-300">Spanish</span>
              <span className="text-sm text-gray-300">English</span>
              <span className="text-sm text-gray-300">© 2025 Sesametime</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
