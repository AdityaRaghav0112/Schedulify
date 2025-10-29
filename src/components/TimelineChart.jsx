/**
 * @fileoverview Timeline Chart Component (Recharts)
 * @description Compact bar chart view of execution slots for quick scanning
 * @module components/TimelineChart
 */

import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { getProcessHexColor } from '../utils/processHelpers';

/**
 * @typedef {Object} TimelineSlot
 * @property {number} processId
 * @property {number} start
 * @property {number} end
 */

/**
 * Build chart data from timeline
 * @param {TimelineSlot[]} timeline
 */
const buildChartData = (timeline) =>
  timeline.map((slot, index) => ({
    key: `${index}`,
    label: `P${slot.processId} (${slot.start}–${slot.end})`,
    start: slot.start,
    end: slot.end,
    duration: slot.end - slot.start,
    color: getProcessHexColor(slot.processId),
  }));

/**
 * Recharts-based bar chart for the execution timeline
 * @param {{ timeline: TimelineSlot[] }} props
 */
const TimelineChart = ({ timeline }) => {
  if (!timeline || timeline.length === 0) return null;
  const data = buildChartData(timeline);

  return (
    <div className="bg-surface rounded-xl p-4 border border-border">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-text-primary">
        <span className="w-2 h-2 bg-primary-accent rounded-full"></span>
        Timeline Graph
      </h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 8, right: 8, left: 8, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis dataKey="label" tick={{ fontSize: 11, fill: 'var(--color-text-secondary)' }} interval={0} height={50} angle={-25} textAnchor="end" />
            <YAxis tick={{ fontSize: 11, fill: 'var(--color-text-secondary)' }} label={{ value: 'ms', angle: -90, position: 'insideLeft', style: { fill: 'var(--color-text-secondary)', fontSize: 11 } }} />
            <Tooltip
              contentStyle={{ background: 'var(--color-surface)', border: `1px solid var(--color-border)`, borderRadius: 8 }}
              labelStyle={{ color: 'var(--color-text-primary)' }}
              formatter={(value, name, props) => {
                if (name === 'duration') return [`${value} ms`, 'Duration'];
                return [value, name];
              }}
            />
            <Bar dataKey="duration" radius={[4, 4, 0, 0]}>
              {data.map((entry) => (
                <Cell key={entry.key} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TimelineChart;


