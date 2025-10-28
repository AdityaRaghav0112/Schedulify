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
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-slate-700 shadow-xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          Process Details
        </h2>
        <div className="flex gap-3">
          <button
            onClick={onAddProcess}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-lg transition font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
          >
            <Plus className="w-5 h-5" />
            Add Process
          </button>
          <button
            onClick={onResetProcesses}
            className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-5 py-2.5 rounded-lg transition font-semibold"
          >
            <RotateCcw className="w-5 h-5" />
            Reset
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-700">
        <table className="w-full">
          <thead className="bg-slate-900/70">
            <tr>
              <th className="text-left py-4 px-6 font-semibold text-gray-300">Process ID</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-300">Arrival Time</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-300">Burst Time</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-300">Priority</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-slate-900/30">
            {processes.map((proc, idx) => (
              <tr key={proc.id} className={`border-t border-slate-700/50 hover:bg-slate-800/50 transition ${idx % 2 === 0 ? 'bg-slate-900/20' : ''}`}>
                <td className="py-4 px-6">
                  <span className="font-bold text-blue-400">P{proc.id}</span>
                </td>
                <td className="py-4 px-6">
                  <input
                    type="number"
                    value={proc.arrivalTime}
                    onChange={(e) => onUpdateProcess(proc.id, 'arrivalTime', e.target.value)}
                    min="0"
                    className="w-24 bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </td>
                <td className="py-4 px-6">
                  <input
                    type="number"
                    value={proc.burstTime}
                    onChange={(e) => onUpdateProcess(proc.id, 'burstTime', e.target.value)}
                    min="1"
                    className="w-24 bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </td>
                <td className="py-4 px-6">
                  <input
                    type="number"
                    value={proc.priority}
                    onChange={(e) => onUpdateProcess(proc.id, 'priority', e.target.value)}
                    min="1"
                    className="w-24 bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </td>
                <td className="py-4 px-6">
                  <button
                    onClick={() => onRemoveProcess(proc.id)}
                    className="text-red-400 hover:text-red-300 hover:bg-red-500/10 p-2 rounded-lg transition"
                  >
                    <Trash2 className="w-5 h-5" />
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

