/**
 * @fileoverview Process Table Component
 * @description Table component for displaying and editing process details
 * @module components/ProcessTable
 */

import { Plus, RotateCcw, Trash2 } from 'lucide-react';

/**
 * ProcessTable component for managing process details
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Array} props.processes - Array of process objects
 * @param {Function} props.onAddProcess - Callback to add a new process
 * @param {Function} props.onRemoveProcess - Callback to remove a process
 * @param {Function} props.onUpdateProcess - Callback to update a process
 * @param {Function} props.onResetProcesses - Callback to reset processes to default
 * @returns {JSX.Element} Process table component
 */
const ProcessTable = ({
  processes,
  onAddProcess,
  onRemoveProcess,
  onUpdateProcess,
  onResetProcesses
}) => {
  return (
    <div className="bg-surface rounded-2xl p-4 md:p-6 mb-6 md:mb-8 border border-border shadow-card animate-fade-in-up">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-text-primary">
          <span className="w-2 h-2 bg-success rounded-full shadow-neon-green"></span>
          Process Details
        </h2>
        <div className="flex gap-2 md:gap-3">
          <button
            onClick={onAddProcess}
            className="flex items-center gap-2 bg-primary-accent hover:bg-primary-accent/90 px-4 py-2 md:px-5 md:py-2.5 rounded-lg transition-smooth font-semibold shadow-card hover:shadow-neon-cyan text-background"
          >
            <Plus className="w-4 h-4 md:w-5 md:h-5" />
            Add Process
          </button>
          <button
            onClick={onResetProcesses}
            className="flex items-center gap-2 bg-background/50 hover:bg-background/70 border border-border px-4 py-2 md:px-5 md:py-2.5 rounded-lg transition-smooth font-semibold text-text-primary"
          >
            <RotateCcw className="w-4 h-4 md:w-5 md:h-5" />
            Reset
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full">
          <thead className="bg-background/50">
            <tr>
              <th className="text-left py-4 px-6 font-semibold text-text-secondary">Process ID</th>
              <th className="text-left py-4 px-6 font-semibold text-text-secondary">Arrival Time</th>
              <th className="text-left py-4 px-6 font-semibold text-text-secondary">Burst Time</th>
              <th className="text-left py-4 px-6 font-semibold text-text-secondary">Priority</th>
              <th className="text-left py-4 px-6 font-semibold text-text-secondary">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-background/30">
            {processes.map((proc, idx) => (
              <tr key={proc.id} className={`border-t border-border/50 hover:bg-background/40 transition-smooth ${idx % 2 === 0 ? 'bg-background/20' : ''}`}>
                <td className="py-4 px-6">
                  <span className="font-bold text-primary-accent font-mono">P{proc.id}</span>
                </td>
                <td className="py-4 px-6">
                  <input
                    type="number"
                    value={proc.arrivalTime}
                    onChange={(e) => onUpdateProcess(proc.id, 'arrivalTime', e.target.value)}
                    min="0"
                    className="w-20 md:w-24 bg-background/50 border border-border rounded-lg px-2 py-1.5 md:px-3 md:py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-primary-accent transition-smooth font-mono"
                  />
                </td>
                <td className="py-4 px-6">
                  <input
                    type="number"
                    value={proc.burstTime}
                    onChange={(e) => onUpdateProcess(proc.id, 'burstTime', e.target.value)}
                    min="1"
                    className="w-20 md:w-24 bg-background/50 border border-border rounded-lg px-2 py-1.5 md:px-3 md:py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-primary-accent transition-smooth font-mono"
                  />
                </td>
                <td className="py-4 px-6">
                  <input
                    type="number"
                    value={proc.priority}
                    onChange={(e) => onUpdateProcess(proc.id, 'priority', e.target.value)}
                    min="1"
                    className="w-20 md:w-24 bg-background/50 border border-border rounded-lg px-2 py-1.5 md:px-3 md:py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-primary-accent transition-smooth font-mono"
                  />
                </td>
                <td className="py-4 px-6">
                  <button
                    onClick={() => onRemoveProcess(proc.id)}
                    className="text-error hover:text-error/80 hover:bg-error/10 p-1.5 md:p-2 rounded-lg transition-smooth"
                  >
                    <Trash2 className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProcessTable;

