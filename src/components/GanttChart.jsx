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
    <div className="bg-surface rounded-xl p-4 border border-border">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-text-primary">
        <span className="w-2 h-2 bg-waiting rounded-full shadow-neon-indigo"></span>
        Gantt Chart
      </h2>
      <div className="overflow-x-auto pb-2">
        <div className="min-w-max">
          <div className="flex items-center h-10 md:h-14 mb-2 rounded-md overflow-hidden">
            {timeline.map((slot, idx) => {
              const colorScheme = getProcessColor(slot.processId);
              return (
                <div
                  key={idx}
                  className={`${colorScheme.bg} h-full flex flex-col items-center justify-center font-semibold border-r border-background/60 transition-smooth relative group`}
                  style={{ width: `${(slot.end - slot.start) * 28}px` }}
                >
                  <span className="text-xs md:text-sm text-background font-mono">P{slot.processId}</span>
                  <span className="text-[10px] md:text-[11px] opacity-90 text-background font-mono">{slot.end - slot.start}ms</span>
                  <div className="absolute bottom-full mb-2 hidden group-hover:block bg-surface border border-border text-text-primary px-2.5 py-1 rounded text-xs whitespace-nowrap z-10">
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
                className="text-[11px] md:text-xs text-text-secondary relative font-mono"
                style={{ width: `${(slot.end - slot.start) * 28}px` }}
              >
                {idx === 0 && <span className="absolute left-0 -translate-x-1/2 font-medium">{slot.start}</span>}
                <span className="absolute right-0 translate-x-1/2 font-medium">{slot.end}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GanttChart;

