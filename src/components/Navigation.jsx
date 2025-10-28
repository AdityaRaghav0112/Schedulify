/**
 * @fileoverview Navigation Component
 * @description Top navigation bar for the Schedulify application
 * @module components/Navigation
 */

import { useEffect, useState } from 'react';
import { Play, Sun, Moon } from 'lucide-react';
import { toggleTheme } from '../utils/theme.js';

/**
 * Navigation component for the application header
 * 
 * @component
 * @returns {JSX.Element} Navigation bar element
 */
const Navigation = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Initialize from DOM on mount so icon matches actual theme
    const root = document.documentElement;
    setIsDark(root.classList.contains('dark'));
  }, []);

  const onToggle = () => {
    const next = toggleTheme();
    setIsDark(next === 'dark');
  };
  return (
    <nav className="bg-surface backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-accent rounded-lg flex items-center justify-center shadow-neon-cyan transition-smooth">
              <Play className="w-6 h-6 text-background" />
            </div>
            <span className="text-xl font-bold text-text-primary">Schedulify</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-text-secondary hover:text-primary-accent transition-smooth">Home</a>
            <a href="#" className="text-text-secondary hover:text-primary-accent transition-smooth">About</a>
            <a href="#" className="text-text-secondary hover:text-primary-accent transition-smooth">Algorithms</a>
            <a href="#" className="text-text-secondary hover:text-primary-accent transition-smooth">Contact</a>
            <button onClick={onToggle} aria-label="Toggle theme" className="p-2 rounded-lg border border-border hover:border-primary-accent transition-smooth">
              {isDark ? <Sun className="w-5 h-5 text-primary-accent" /> : <Moon className="w-5 h-5 text-primary-accent" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

