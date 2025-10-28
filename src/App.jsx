/**
 * @fileoverview Main Application Component (Controller)
 * @description Main controller component that orchestrates the CPU scheduling visualizer
 * @module App
 * 
 * This component follows the MVC (Model-View-Controller) architecture:
 * - Model: Scheduling algorithms in services/schedulingAlgorithms.js
 * - View: UI components in components/
 * - Controller: This component (App.jsx) manages state and coordinates between Model and View
 */

import { useState } from 'react';
import { Play } from 'lucide-react';
import { Toaster, toast } from 'sonner';

// Service Layer (Model)
import {
  fcfs,
  sjfNonPreemptive,
  sjfPreemptive,
  priorityNonPreemptive,
  priorityPreemptive,
  roundRobin
} from './services/schedulingAlgorithms';

// View Layer (Components)
import Navigation from './components/Navigation';
import ProcessTable from './components/ProcessTable';
import GanttChart from './components/GanttChart';
import StatisticsCards from './components/StatisticsCards';
import ProcessResultsTable from './components/ProcessResultsTable';
import Footer from './components/Footer';

// Utility Functions
import {
  getNextProcessId,
  DEFAULT_PROCESS,
  calculateAverages
} from './utils/processHelpers';

/**
 * Available scheduling algorithms
 * @constant {string[]}
 */
const ALGORITHMS = [
  'FCFS',
  'SJF (Non-Preemptive)',
  'SJF (Preemptive)',
  'Priority (Non-Preemptive)',
  'Priority (Preemptive)',
  'Round Robin'
];

/**
 * Main App Component - Controller
 * Manages application state and coordinates between Model (services) and View (components)
 * 
 * @component
 * @returns {JSX.Element} Main application component
 */
function App() {
  // State Management
  const [processes, setProcesses] = useState([]);
  const [algorithm, setAlgorithm] = useState('FCFS');
  const [timeQuantum, setTimeQuantum] = useState(2);
  const [results, setResults] = useState(null);

  /**
   * Adds a new process to the processes list
   */
  const handleAddProcess = () => {
    const newId = getNextProcessId(processes);
    setProcesses([...processes, {
      id: newId,
      ...DEFAULT_PROCESS
    }]);
  };

  /**
   * Removes a process from the processes list
   * @param {number} id - Process ID to remove
   */
  const handleRemoveProcess = (id) => {
    setProcesses(processes.filter(p => p.id !== id));
    // Clear results if processes change
    if (results) {
      setResults(null);
    }
  };

  /**
   * Updates a specific field of a process
   * @param {number} id - Process ID to update
   * @param {string} field - Field name to update
   * @param {string|number} value - New value for the field
   */
  const handleUpdateProcess = (id, field, value) => {
    setProcesses(processes.map(p =>
      p.id === id ? { ...p, [field]: parseInt(value) || 0 } : p
    ));
    // Clear results if processes change
    if (results) {
      setResults(null);
    }
  };

  /**
   * Resets processes to default values
   */
  const handleResetProcesses = () => {
    setProcesses([]);
    setResults(null);
  };

  /**
   * Executes the selected scheduling algorithm and updates results
   * This is the main controller method that coordinates Model and View
   */
  const handleVisualizeScheduling = () => {
    if (processes.length === 0) {
      toast.error('Add at least one process to visualize.');
      return;
    }

    let result;

    // Call appropriate algorithm from service layer (Model)
    switch (algorithm) {
      case 'FCFS':
        result = fcfs(processes);
        break;
      case 'SJF (Non-Preemptive)':
        result = sjfNonPreemptive(processes);
        break;
      case 'SJF (Preemptive)':
        result = sjfPreemptive(processes);
        break;
      case 'Priority (Non-Preemptive)':
        result = priorityNonPreemptive(processes);
        break;
      case 'Priority (Preemptive)':
        result = priorityPreemptive(processes);
        break;
      case 'Round Robin':
        result = roundRobin(processes, timeQuantum);
        break;
      default:
        result = fcfs(processes);
    }

    setResults(result);
    toast.success('Scheduling complete. See results below.');
  };

  // Calculate averages for statistics display
  const averages = results ? calculateAverages(results.processResults) : null;

  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Toaster richColors position="top-right" />
      {/* Navigation Component */}
      <Navigation />

      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto px-3 sm:px-4 lg:px-6 py-6 md:py-8 animate-fade-in">
        {/* Hero Section */}
        <div className="mb-8 md:mb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-2 md:mb-4 bg-gradient-to-r from-primary-accent to-waiting bg-clip-text text-transparent">
            Visualize CPU Scheduling Algorithms
          </h1>
          <p className="text-base md:text-lg text-text-secondary max-w-2xl md:max-w-3xl mx-auto">
            Enter process details, select an algorithm, and watch the simulation unfold. 
            Bring CPU Scheduling Algorithms to Life.
          </p>
        </div>

        {/* Configuration Section */}
        <div className="bg-surface rounded-2xl p-4 md:p-6 mb-6 md:mb-8 border border-border shadow-card animate-fade-in-up">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2 text-text-primary">
            <span className="w-2 h-2 bg-primary-accent rounded-full shadow-neon-cyan"></span>
            Configuration
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div>
              <label className="block text-xs md:text-sm font-semibold mb-2 text-text-secondary">
                Scheduling Algorithm
              </label>
              <select
                value={algorithm}
                onChange={(e) => {
                  setAlgorithm(e.target.value);
                  setResults(null);
                }}
                className="w-full bg-surface border border-border rounded-lg px-3 py-2 md:px-4 md:py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-primary-accent transition-smooth cursor-pointer hover:border-primary-accent font-mono"
              >
                {ALGORITHMS.map(alg => (
                  <option key={alg} value={alg} className="bg-surface">{alg}</option>
                ))}
              </select>
            </div>

            {algorithm === 'Round Robin' && (
              <div>
                <label className="block text-xs md:text-sm font-semibold mb-2 text-text-secondary">
                  Time Quantum
                </label>
                <input
                  type="number"
                  value={timeQuantum}
                  onChange={(e) => {
                    setTimeQuantum(parseInt(e.target.value) || 1);
                    setResults(null);
                  }}
                  min="1"
                  className="w-full bg-surface border border-border rounded-lg px-3 py-2 md:px-4 md:py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-primary-accent transition-smooth font-mono"
                />
              </div>
            )}
          </div>
        </div>

        {/* Process Table Component */}
        <ProcessTable
          processes={processes}
          onAddProcess={handleAddProcess}
          onRemoveProcess={handleRemoveProcess}
          onUpdateProcess={handleUpdateProcess}
          onResetProcesses={handleResetProcesses}
        />

        {/* Visualize Button */}
        <button
          onClick={handleVisualizeScheduling}
          className="w-full bg-gradient-to-r from-primary-accent via-primary-accent to-waiting hover:from-primary-accent hover:via-primary-accent hover:to-waiting py-3 md:py-4 rounded-lg md:rounded-xl font-semibold md:font-bold text-base md:text-lg flex items-center justify-center gap-2 md:gap-3 transition-smooth shadow-card hover:shadow-neon-indigo mb-6 md:mb-8 text-background"
        >
          <Play className="w-5 h-5 md:w-6 md:h-6" />
          Visualize Scheduling
        </button>

        {/* Results Section */}
        {results && (
          <div className="space-y-8 animate-fadeIn">
            {/* Gantt Chart Component */}
            <GanttChart timeline={results.timeline} />

            {/* Statistics Cards Component */}
            {averages && (
              <StatisticsCards
                avgTurnaround={averages.avgTurnaround}
                avgWaiting={averages.avgWaiting}
              />
            )}

            {/* Process Results Table Component */}
            <ProcessResultsTable processResults={results.processResults} />
          </div>
        )}
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default App;
