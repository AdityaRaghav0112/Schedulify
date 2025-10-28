/**
 * @fileoverview Gantt Chart Component
 * @description Visualizes the execution timeline of processes
 * @module components/GanttChart
 */

import { getProcessColor } from '../utils/processHelpers';

/**
 * GanttChart component for visualizing process execution timeline
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Array} props.timeline - Array of timeline entries with processId, start, and end
 * @returns {JSX.Element} Gantt chart component
 */
const GanttChart = ({ timeline }) => {
  return (
    <div className="bg-surface rounded-2xl p-6 border border-border shadow-card">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-text-primary">
        <span className="w-2 h-2 bg-waiting rounded-full shadow-neon-indigo"></span>
        Gantt Chart
      </h2>
      <div className="overflow-x-auto pb-3 md:pb-4">
        <div className="min-w-max">
          <div className="flex items-center h-14 md:h-20 mb-2 md:mb-3 rounded-lg overflow-hidden animate-fade-in-up">
            {timeline.map((slot, idx) => {
              const colorScheme = getProcessColor(slot.processId);
              return (
                <div
                  key={idx}
                  className={`${colorScheme.bg} ${colorScheme.shadow} h-full flex flex-col items-center justify-center font-bold border-r-2 border-background hover:brightness-110 hover:scale-[1.02] transition-smooth relative group`}
                  style={{ width: `${(slot.end - slot.start) * 50}px` }}
                >
                  <span className="text-sm md:text-lg text-background font-mono font-bold">P{slot.processId}</span>
                  <span className="text-[10px] md:text-xs opacity-90 text-background font-mono">{slot.end - slot.start}ms</span>
                  <div className="absolute bottom-full mb-2 hidden group-hover:block bg-surface border border-border text-text-primary px-3 py-1 rounded text-xs whitespace-nowrap z-10 shadow-xl">
                    Start: {slot.start} | End: {slot.end}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center">
            {timeline.map((slot, idx) => (
              <div
                key={idx}
                className="text-xs md:text-sm text-text-secondary relative font-mono"
                style={{ width: `${(slot.end - slot.start) * 50}px` }}
              >
                {idx === 0 && <span className="absolute left-0 -translate-x-1/2 font-semibold">{slot.start}</span>}
                <span className="absolute right-0 translate-x-1/2 font-semibold">{slot.end}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GanttChart;

