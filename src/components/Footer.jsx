/**
 * @fileoverview Footer Component
 * @description Footer section for the Schedulify application
 * @module components/Footer
 */

/**
 * Footer component for the application
 * 
 * @component
 * @returns {JSX.Element} Footer element
 */
const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-3 text-text-primary">About</h3>
            <p className="text-text-secondary text-sm">
              A comprehensive CPU scheduling algorithm visualizer built with React and Tailwind CSS.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3 text-text-primary">Algorithms</h3>
            <ul className="text-text-secondary text-sm space-y-2">
              <li>• First Come First Served (FCFS)</li>
              <li>• Shortest Job First (SJF)</li>
              <li>• Priority Scheduling</li>
              <li>• Round Robin</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3 text-text-primary">Resources</h3>
            <ul className="text-text-secondary text-sm space-y-2">
              <li><a href="#" className="hover:text-primary-accent transition-smooth">Documentation</a></li>
              <li><a href="#" className="hover:text-primary-accent transition-smooth">GitHub</a></li>
              <li><a href="#" className="hover:text-primary-accent transition-smooth">Support</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-6 text-center text-text-secondary text-sm">
          <p>&copy; 2025 Schedulify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

