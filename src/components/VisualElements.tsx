import { Users, Shield, BarChart3 } from "lucide-react";

export default function VisualElements() {
  return (
    <div className="hidden">
      {/* Mobile App Mockup */}
      <div className="w-32 h-56 bg-gray-900 rounded-2xl p-2 shadow-2xl">
        <div className="w-full h-full bg-white rounded-xl flex flex-col">
          <div className="h-8 bg-blue-600 rounded-t-xl flex items-center justify-center">
            <span className="text-white text-xs font-bold">Sesame</span>
          </div>
          <div className="flex-1 p-3">
            <div className="w-full h-3 bg-gray-200 rounded mb-2"></div>
            <div className="w-3/4 h-2 bg-gray-300 rounded mb-2"></div>
            <div className="w-full h-2 bg-gray-300 rounded mb-4"></div>
            <div className="w-full h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs">Fichar</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet Mockup */}
      <div className="w-40 h-56 bg-gray-800 rounded-xl p-2 shadow-2xl">
        <div className="w-full h-full bg-white rounded-lg flex flex-col">
          <div className="h-6 bg-green-600 rounded-t-lg flex items-center justify-center">
            <span className="text-white text-xs font-bold">Sesame Wall</span>
          </div>
          <div className="flex-1 p-4">
            <div className="w-full h-4 bg-gray-200 rounded mb-3"></div>
            <div className="w-2/3 h-3 bg-gray-300 rounded mb-3"></div>
            <div className="w-full h-3 bg-gray-300 rounded mb-4"></div>
            <div className="w-full h-10 bg-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm">Registrar entrada</span>
            </div>
          </div>
        </div>
      </div>

      {/* Web Interface Mockup */}
      <div className="w-48 h-32 bg-gray-100 rounded-lg p-2 shadow-lg">
        <div className="w-full h-full bg-white rounded flex flex-col">
          <div className="h-6 bg-purple-600 rounded-t flex items-center px-2">
            <div className="w-2 h-2 bg-white rounded-full mr-1"></div>
            <div className="w-2 h-2 bg-white rounded-full mr-1"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <div className="flex-1 p-2">
            <div className="w-full h-2 bg-gray-200 rounded mb-1"></div>
            <div className="w-3/4 h-2 bg-gray-300 rounded mb-2"></div>
            <div className="w-full h-4 bg-purple-500 rounded flex items-center justify-center">
              <span className="text-white text-xs">Dashboard</span>
            </div>
          </div>
        </div>
      </div>

      {/* Support Person */}
      <div className="w-24 h-32 bg-gray-300 rounded-full flex items-center justify-center">
        <Users className="h-12 w-12 text-gray-600" />
      </div>

      {/* Security Shield */}
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
        <Shield className="h-10 w-10 text-green-600" />
      </div>

      {/* Analytics Chart */}
      <div className="w-24 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
        <BarChart3 className="h-8 w-8 text-blue-600" />
      </div>
    </div>
  );
}
