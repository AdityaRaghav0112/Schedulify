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
  DEFAULT_PROCESSES,
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
  const [processes, setProcesses] = useState(DEFAULT_PROCESSES);
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
    setProcesses(DEFAULT_PROCESSES);
    setResults(null);
  };

  /**
   * Executes the selected scheduling algorithm and updates results
   * This is the main controller method that coordinates Model and View
   */
  const handleVisualizeScheduling = () => {
    if (processes.length === 0) {
      alert('Please add at least one process');
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
  };

  // Calculate averages for statistics display
  const averages = results ? calculateAverages(results.processResults) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 text-white">
      {/* Navigation Component */}
      <Navigation />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Visualize CPU Scheduling Algorithms
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Enter process details, select an algorithm, and watch the simulation unfold. 
            Bring CPU Scheduling Algorithms to Life.
          </p>
        </div>

        {/* Configuration Section */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-slate-700 shadow-xl">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            Configuration
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-300">
                Number of Processes
              </label>
              <input
                type="number"
                value={processes.length}
                disabled
                className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-gray-400 cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-300">
                Scheduling Algorithm
              </label>
              <select
                value={algorithm}
                onChange={(e) => {
                  setAlgorithm(e.target.value);
                  setResults(null);
                }}
                className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition cursor-pointer hover:border-blue-500"
              >
                {ALGORITHMS.map(alg => (
                  <option key={alg} value={alg}>{alg}</option>
                ))}
              </select>
            </div>

            {algorithm === 'Round Robin' && (
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
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
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
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
          className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 hover:from-blue-700 hover:via-blue-600 hover:to-purple-700 py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 mb-8"
        >
          <Play className="w-6 h-6" />
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
