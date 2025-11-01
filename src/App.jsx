import { useState } from 'react';
import { Play } from 'lucide-react';
import { Toaster, toast } from 'sonner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Algorithms from './components/Algorithms';

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
import TimelineChart from './components/TimelineChart';
import Footer from './components/Footer';

// Utility Functions
import {
  getNextProcessId,
  DEFAULT_PROCESS,
  calculateAverages
} from './utils/processHelpers';

const ALGORITHMS = [
  'FCFS',
  'SJF (Non-Preemptive)',
  'SJF (Preemptive)',
  'Priority (Non-Preemptive)',
  'Priority (Preemptive)',
  'Round Robin'
];

function App() {
  const [processes, setProcesses] = useState([]);
  const [algorithm, setAlgorithm] = useState('FCFS');
  const [timeQuantum, setTimeQuantum] = useState(2);
  const [results, setResults] = useState(null);

  const handleAddProcess = () => {
    const newId = getNextProcessId(processes);
    setProcesses([...processes, { id: newId, ...DEFAULT_PROCESS }]);
  };

  const handleRemoveProcess = (id) => {
    setProcesses(processes.filter(p => p.id !== id));
    if (results) setResults(null);
  };

  const handleUpdateProcess = (id, field, value) => {
    setProcesses(processes.map(p =>
      p.id === id ? { ...p, [field]: parseInt(value) || 0 } : p
    ));
    if (results) setResults(null);
  };

  const handleResetProcesses = () => {
    setProcesses([]);
    setResults(null);
  };

  const handleVisualizeScheduling = () => {
    if (processes.length === 0) {
      toast.error('Add at least one process to visualize.');
      return;
    }

    let result;
    switch (algorithm) {
      case 'FCFS':
        result = fcfs(processes); break;
      case 'SJF (Non-Preemptive)':
        result = sjfNonPreemptive(processes); break;
      case 'SJF (Preemptive)':
        result = sjfPreemptive(processes); break;
      case 'Priority (Non-Preemptive)':
        result = priorityNonPreemptive(processes); break;
      case 'Priority (Preemptive)':
        result = priorityPreemptive(processes); break;
      case 'Round Robin':
        result = roundRobin(processes, timeQuantum); break;
      default:
        result = fcfs(processes);
    }

    setResults(result);
    toast.success('Scheduling complete. See results below.');
  };

  const averages = results ? calculateAverages(results.processResults) : null;

  return (
    <BrowserRouter>
      <Toaster richColors position="top-right" />
      <Navigation />
      <Routes>
        

        {/* Main Visualizer Page */}
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-background text-text-primary">
              
              <div className="max-w-screen-xl mx-auto px-3 sm:px-4 lg:px-6 py-6 md:py-8">
                <div className="mb-8 md:mb-10 text-center">
                  <h1 className="text-3xl md:text-5xl font-extrabold mb-2 md:mb-4 bg-gradient-to-r from-primary-accent to-waiting bg-clip-text text-transparent">
                    Visualize CPU Scheduling Algorithms
                  </h1>
                  <p className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto">
                    Enter process details, select an algorithm, and watch the simulation unfold.
                  </p>
                </div>

                <div className="bg-surface rounded-2xl p-4 md:p-6 mb-6 md:mb-8 border border-border shadow-card">
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-text-primary">
                    <span className="w-2 h-2 bg-primary-accent rounded-full"></span>
                    Configuration
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-2 text-text-secondary">
                        Scheduling Algorithm
                      </label>
                      <select
                        value={algorithm}
                        onChange={(e) => {
                          setAlgorithm(e.target.value);
                          setResults(null);
                        }}
                        className="w-full bg-surface border border-border rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-accent"
                      >
                        {ALGORITHMS.map(alg => (
                          <option key={alg} value={alg}>{alg}</option>
                        ))}
                      </select>
                    </div>

                    {algorithm === 'Round Robin' && (
                      <div>
                        <label className="block text-xs font-semibold mb-2 text-text-secondary">
                          Time Quantum
                        </label>
                        <input
                          type="number"
                          value={timeQuantum}
                          onChange={(e) => setTimeQuantum(parseInt(e.target.value) || 1)}
                          min="1"
                          className="w-full bg-surface border border-border rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-accent"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <ProcessTable
                  processes={processes}
                  onAddProcess={handleAddProcess}
                  onRemoveProcess={handleRemoveProcess}
                  onUpdateProcess={handleUpdateProcess}
                  onResetProcesses={handleResetProcesses}
                />

                <button
                  onClick={handleVisualizeScheduling}
                  className="w-full bg-gradient-to-r from-primary-accent to-waiting py-3 rounded-lg font-bold flex items-center justify-center gap-2 text-background"
                >
                  <Play className="w-5 h-5" />
                  Visualize Scheduling
                </button>

                {results && (
                  <div className="space-y-8 mt-8">
                    <GanttChart timeline={results.timeline} />
                    <TimelineChart timeline={results.timeline} />
                    {averages && (
                      <StatisticsCards
                        avgTurnaround={averages.avgTurnaround}
                        avgWaiting={averages.avgWaiting}
                      />
                    )}
                    <ProcessResultsTable processResults={results.processResults} />
                  </div>
                )}
              </div>
              <Footer />
            </div>
          }
        />
        {/* Page for algorithms info */}
        <Route path="/algorithms" element={<Algorithms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
