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
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 shadow-xl">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
        Gantt Chart
      </h2>
      <div className="overflow-x-auto pb-4">
        <div className="min-w-max">
          <div className="flex items-center h-20 mb-3 rounded-lg overflow-hidden shadow-lg">
            {timeline.map((slot, idx) => (
              <div
                key={idx}
                className={`${getProcessColor(slot.processId)} h-full flex flex-col items-center justify-center font-bold border-r-2 border-slate-900 hover:brightness-110 transition relative group`}
                style={{ width: `${(slot.end - slot.start) * 50}px` }}
              >
                <span className="text-lg">P{slot.processId}</span>
                <span className="text-xs opacity-75">{slot.end - slot.start}ms</span>
                <div className="absolute bottom-full mb-2 hidden group-hover:block bg-slate-900 text-white px-3 py-1 rounded text-xs whitespace-nowrap">
                  Start: {slot.start} | End: {slot.end}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center">
            {timeline.map((slot, idx) => (
              <div
                key={idx}
                className="text-sm text-gray-400 relative font-mono"
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

