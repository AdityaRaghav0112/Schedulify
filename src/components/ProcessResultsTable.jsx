/**
 * @fileoverview Process Results Table Component
 * @description Displays detailed results for each process after scheduling
 * @module components/ProcessResultsTable
 */

/**
 * ProcessResultsTable component for displaying process execution statistics
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Array} props.processResults - Array of process result objects
 * @returns {JSX.Element} Process results table component
 */
const ProcessResultsTable = ({ processResults }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 shadow-xl">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
        Process Results
      </h2>
      <div className="overflow-x-auto rounded-xl border border-slate-700">
        <table className="w-full">
          <thead className="bg-slate-900/70">
            <tr>
              <th className="text-left py-4 px-6 font-semibold text-gray-300">Process</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-300">Arrival Time</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-300">Burst Time</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-300">Completion Time</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-300">Turnaround Time</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-300">Waiting Time</th>
            </tr>
          </thead>
          <tbody className="bg-slate-900/30">
            {processResults.map((proc, idx) => (
              <tr key={proc.id} className={`border-t border-slate-700/50 hover:bg-slate-800/50 transition ${idx % 2 === 0 ? 'bg-slate-900/20' : ''}`}>
                <td className="py-4 px-6">
                  <span className="font-bold text-blue-400">P{proc.id}</span>
                </td>
                <td className="py-4 px-6 text-gray-300">{proc.arrivalTime}</td>
                <td className="py-4 px-6 text-gray-300">{proc.burstTime}</td>
                <td className="py-4 px-6 text-gray-300">{proc.completionTime}</td>
                <td className="py-4 px-6">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full font-semibold">
                    {proc.turnaroundTime}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full font-semibold">
                    {proc.waitingTime}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProcessResultsTable;

