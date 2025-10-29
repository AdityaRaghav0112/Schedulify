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
    <nav className="bg-surface/95 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-primary-accent rounded-md flex items-center justify-center transition-smooth">
              <Play className="w-5 h-5 text-background" />
            </div>
            <span className="text-base sm:text-lg font-bold tracking-tight text-text-primary">Schedulify</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm text-text-secondary hover:text-primary-accent transition-smooth">Home</a>
            <a href="#" className="text-sm text-text-secondary hover:text-primary-accent transition-smooth">About</a>
            <a href="#" className="text-sm text-text-secondary hover:text-primary-accent transition-smooth">Algorithms</a>
            <a href="#" className="text-sm text-text-secondary hover:text-primary-accent transition-smooth">Contact</a>
            <button onClick={onToggle} aria-label="Toggle theme" className="p-1.5 rounded-md border border-border hover:border-primary-accent transition-smooth">
              {isDark ? <Sun className="w-4 h-4 text-primary-accent" /> : <Moon className="w-4 h-4 text-primary-accent" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

