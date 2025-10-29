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
    <div className="bg-surface rounded-xl p-3 md:p-4 border border-border">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-text-primary">
        <span className="w-2 h-2 bg-secondary-accent rounded-full shadow-neon-amber"></span>
        Process Results
      </h2>
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full table-auto">
          <thead className="bg-background/50">
            <tr>
              <th className="text-left py-2.5 px-4 font-semibold text-text-secondary font-mono text-sm">Process</th>
              <th className="text-left py-2.5 px-4 font-semibold text-text-secondary font-mono text-sm">Arrival Time</th>
              <th className="text-left py-2.5 px-4 font-semibold text-text-secondary font-mono text-sm">Burst Time</th>
              <th className="text-left py-2.5 px-4 font-semibold text-text-secondary font-mono text-sm">Completion Time</th>
              <th className="text-left py-2.5 px-4 font-semibold text-text-secondary font-mono text-sm">Turnaround Time</th>
              <th className="text-left py-2.5 px-4 font-semibold text-text-secondary font-mono text-sm">Waiting Time</th>
            </tr>
          </thead>
          <tbody className="bg-background/30">
            {processResults.map((proc, idx) => (
              <tr key={proc.id} className={`border-t border-border/50 hover:bg-background/40 transition-smooth ${idx % 2 === 0 ? 'bg-background/20' : ''}`}>
                <td className="py-2.5 px-4">
                  <span className="font-bold text-primary-accent font-mono">P{proc.id}</span>
                </td>
                <td className="py-2.5 px-4 text-text-secondary font-mono text-sm">{proc.arrivalTime}</td>
                <td className="py-2.5 px-4 text-text-secondary font-mono text-sm">{proc.burstTime}</td>
                <td className="py-2.5 px-4 text-text-secondary font-mono text-sm">{proc.completionTime}</td>
                <td className="py-2.5 px-4">
                  <span className="bg-primary-accent/15 text-primary-accent px-2.5 py-0.5 rounded-full font-semibold font-mono text-sm">
                    {proc.turnaroundTime}
                  </span>
                </td>
                <td className="py-2.5 px-4">
                  <span className="bg-success/15 text-success px-2.5 py-0.5 rounded-full font-semibold font-mono text-sm">
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

