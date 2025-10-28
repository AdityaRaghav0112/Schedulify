/**
 * @fileoverview Process Helper Utilities
 * @description Helper functions for process management and calculations
 * @module utils/processHelpers
 */

/**
 * Get a unique color for a process based on its ID
 * 
 * @param {number} id - Process ID
 * @returns {string} Tailwind CSS color class
 */
export const getProcessColor = (id) => {
  const colors = [
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-indigo-500',
    'bg-red-500',
    'bg-teal-500'
  ];
  return colors[(id - 1) % colors.length];
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

