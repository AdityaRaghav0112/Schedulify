/**
 * @fileoverview Navigation Component
 * @description Top navigation bar for the Schedulify application
 * @module components/Navigation
 */

import { Play } from 'lucide-react';

/**
 * Navigation component for the application header
 * 
 * @component
 * @returns {JSX.Element} Navigation bar element
 */
const Navigation = () => {
  return (
    <nav className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/50">
              <Play className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold">Schedulify</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-300 hover:text-white transition">Home</a>
            <a href="#" className="text-gray-300 hover:text-white transition">About</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Algorithms</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

