/**
 * @fileoverview Process Helper Utilities
 * @description Helper functions for process management and calculations
 * @module utils/processHelpers
 */

/**
 * Get a unique color for a process based on its ID
 * Uses Neon Graphite theme colors with neon glow effects
 * 
 * @param {number} id - Process ID
 * @returns {Object} Object with background color class and shadow class
 */
export const getProcessColor = (id) => {
  // Color palette using theme colors with variations
  const colorPalette = [
    { bg: 'bg-[#00ADB5]', shadow: 'shadow-neon-cyan' }, // Primary cyan
    { bg: 'bg-[#FFB400]', shadow: 'shadow-neon-amber' }, // Secondary amber
    { bg: 'bg-[#6366F1]', shadow: 'shadow-neon-indigo' }, // Waiting indigo
    { bg: 'bg-[#4ADE80]', shadow: 'shadow-neon-green' }, // Success green
    { bg: 'bg-[#8B5CF6]', shadow: 'shadow-[0_0_10px_rgba(139,92,246,0.5)]' }, // Purple
    { bg: 'bg-[#EC4899]', shadow: 'shadow-[0_0_10px_rgba(236,72,153,0.5)]' }, // Pink
    { bg: 'bg-[#10B981]', shadow: 'shadow-[0_0_10px_rgba(16,185,129,0.5)]' }, // Emerald
    { bg: 'bg-[#F59E0B]', shadow: 'shadow-[0_0_10px_rgba(245,158,11,0.5)]' }, // Amber variant
  ];
  return colorPalette[(id - 1) % colorPalette.length];
};

/**
 * Calculate average turnaround and waiting times from process results
 * 
 * @param {Array} processResults - Array of process result objects
 * @returns {Object|null} Object with avgTurnaround and avgWaiting, or null if no results
 */
export const calculateAverages = (processResults) => {
  if (!processResults || processResults.length === 0) return null;
  
  const avgTurnaround = processResults.reduce((sum, p) => sum + p.turnaroundTime, 0) / processResults.length;
  const avgWaiting = processResults.reduce((sum, p) => sum + p.waitingTime, 0) / processResults.length;
  
  return { avgTurnaround, avgWaiting };
};

/**
 * Get the next available process ID
 * 
 * @param {Array} processes - Array of existing processes
 * @returns {number} Next available ID
 */
export const getNextProcessId = (processes) => {
  return processes.length > 0 ? Math.max(...processes.map(p => p.id)) + 1 : 1;
};

/**
 * Default process template for new processes
 */
export const DEFAULT_PROCESS = {
  arrivalTime: 0,
  burstTime: 5,
  priority: 1
};

/**
 * Default set of processes for initialization
 */
export const DEFAULT_PROCESSES = [
  { id: 1, arrivalTime: 0, burstTime: 10, priority: 3 },
  { id: 2, arrivalTime: 1, burstTime: 5, priority: 1 },
  { id: 3, arrivalTime: 2, burstTime: 8, priority: 4 },
  { id: 4, arrivalTime: 3, burstTime: 7, priority: 5 },
  { id: 5, arrivalTime: 4, burstTime: 9, priority: 2 }
];

