/**
 * @fileoverview Statistics Cards Component
 * @description Displays average turnaround and waiting times
 * @module components/StatisticsCards
 */

/**
 * StatisticsCards component for displaying average metrics
 * 
 * @component
 * @param {Object} props - Component props
 * @param {number} props.avgTurnaround - Average turnaround time
 * @param {number} props.avgWaiting - Average waiting time
 * @returns {JSX.Element} Statistics cards component
 */
const StatisticsCards = ({ avgTurnaround, avgWaiting }) => {
  if (avgTurnaround === null || avgWaiting === null) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
      <div className="bg-surface border border-primary-accent/30 rounded-xl p-3 md:p-4 transition-smooth hover:border-primary-accent/50">
        <div className="text-[10px] md:text-xs font-semibold text-primary-accent mb-1 uppercase tracking-wide font-mono">
          Average Turnaround Time
        </div>
        <div className="text-xl md:text-2xl font-bold text-text-primary font-mono">
          {avgTurnaround.toFixed(2)} <span className="text-xs md:text-sm text-primary-accent">ms</span>
        </div>
        <div className="mt-1 text-[11px] md:text-xs text-text-secondary">
          Time from arrival to completion
        </div>
      </div>
      <div className="bg-surface border border-success/30 rounded-xl p-3 md:p-4 transition-smooth hover:border-success/50">
        <div className="text-[10px] md:text-xs font-semibold text-success mb-1 uppercase tracking-wide font-mono">
          Average Waiting Time
        </div>
        <div className="text-xl md:text-2xl font-bold text-text-primary font-mono">
          {avgWaiting.toFixed(2)} <span className="text-xs md:text-sm text-success">ms</span>
        </div>
        <div className="mt-1 text-[11px] md:text-xs text-text-secondary">
          Time spent in ready queue
        </div>
      </div>
    </div>
  );
};

export default StatisticsCards;

