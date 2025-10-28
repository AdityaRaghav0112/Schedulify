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
    <div className="bg-surface rounded-2xl p-4 md:p-6 border border-border shadow-card animate-fade-in-up">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-text-primary">
        <span className="w-2 h-2 bg-secondary-accent rounded-full shadow-neon-amber"></span>
        Process Results
      </h2>
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full table-auto">
          <thead className="bg-background/50">
            <tr>
              <th className="text-left py-3 md:py-4 px-4 md:px-6 font-semibold text-text-secondary font-mono">Process</th>
              <th className="text-left py-3 md:py-4 px-4 md:px-6 font-semibold text-text-secondary font-mono">Arrival Time</th>
              <th className="text-left py-3 md:py-4 px-4 md:px-6 font-semibold text-text-secondary font-mono">Burst Time</th>
              <th className="text-left py-3 md:py-4 px-4 md:px-6 font-semibold text-text-secondary font-mono">Completion Time</th>
              <th className="text-left py-3 md:py-4 px-4 md:px-6 font-semibold text-text-secondary font-mono">Turnaround Time</th>
              <th className="text-left py-3 md:py-4 px-4 md:px-6 font-semibold text-text-secondary font-mono">Waiting Time</th>
            </tr>
          </thead>
          <tbody className="bg-background/30">
            {processResults.map((proc, idx) => (
              <tr key={proc.id} className={`border-t border-border/50 hover:bg-background/40 transition-smooth ${idx % 2 === 0 ? 'bg-background/20' : ''}`}>
                <td className="py-3 md:py-4 px-4 md:px-6">
                  <span className="font-bold text-primary-accent font-mono">P{proc.id}</span>
                </td>
                <td className="py-3 md:py-4 px-4 md:px-6 text-text-secondary font-mono">{proc.arrivalTime}</td>
                <td className="py-3 md:py-4 px-4 md:px-6 text-text-secondary font-mono">{proc.burstTime}</td>
                <td className="py-3 md:py-4 px-4 md:px-6 text-text-secondary font-mono">{proc.completionTime}</td>
                <td className="py-3 md:py-4 px-4 md:px-6">
                  <span className="bg-primary-accent/20 text-primary-accent px-3 py-1 rounded-full font-semibold font-mono">
                    {proc.turnaroundTime}
                  </span>
                </td>
                <td className="py-3 md:py-4 px-4 md:px-6">
                  <span className="bg-success/20 text-success px-3 py-1 rounded-full font-semibold font-mono">
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

