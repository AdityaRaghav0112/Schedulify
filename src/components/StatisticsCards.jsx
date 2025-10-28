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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-sm border border-blue-600/30 rounded-2xl p-6 shadow-xl">
        <div className="text-sm font-semibold text-blue-300 mb-2 uppercase tracking-wide">
          Average Turnaround Time
        </div>
        <div className="text-4xl font-bold text-white">
          {avgTurnaround.toFixed(2)} <span className="text-xl text-blue-300">ms</span>
        </div>
        <div className="mt-2 text-sm text-blue-200">
          Time from arrival to completion
        </div>
      </div>
      <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 backdrop-blur-sm border border-green-600/30 rounded-2xl p-6 shadow-xl">
        <div className="text-sm font-semibold text-green-300 mb-2 uppercase tracking-wide">
          Average Waiting Time
        </div>
        <div className="text-4xl font-bold text-white">
          {avgWaiting.toFixed(2)} <span className="text-xl text-green-300">ms</span>
        </div>
        <div className="mt-2 text-sm text-green-200">
          Time spent in ready queue
        </div>
      </div>
    </div>
  );
};

export default StatisticsCards;

