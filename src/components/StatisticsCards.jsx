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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      <div className="bg-surface border border-primary-accent/30 rounded-2xl p-4 md:p-6 shadow-card transition-smooth hover:border-primary-accent/50 animate-fade-in-up">
        <div className="text-xs md:text-sm font-semibold text-primary-accent mb-1.5 md:mb-2 uppercase tracking-wide font-mono">
          Average Turnaround Time
        </div>
        <div className="text-2xl md:text-4xl font-bold text-text-primary font-mono">
          {avgTurnaround.toFixed(2)} <span className="text-base md:text-xl text-primary-accent">ms</span>
        </div>
        <div className="mt-1 md:mt-2 text-xs md:text-sm text-text-secondary">
          Time from arrival to completion
        </div>
      </div>
      <div className="bg-surface border border-success/30 rounded-2xl p-4 md:p-6 shadow-card transition-smooth hover:border-success/50 animate-fade-in-up">
        <div className="text-xs md:text-sm font-semibold text-success mb-1.5 md:mb-2 uppercase tracking-wide font-mono">
          Average Waiting Time
        </div>
        <div className="text-2xl md:text-4xl font-bold text-text-primary font-mono">
          {avgWaiting.toFixed(2)} <span className="text-base md:text-xl text-success">ms</span>
        </div>
        <div className="mt-1 md:mt-2 text-xs md:text-sm text-text-secondary">
          Time spent in ready queue
        </div>
      </div>
    </div>
  );
};

export default StatisticsCards;

