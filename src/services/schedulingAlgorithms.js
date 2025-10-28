/**
 * @fileoverview Scheduling Algorithms Service
 * @description Contains all CPU scheduling algorithm implementations (Model/Service Layer)
 * @module services/schedulingAlgorithms
 */

/**
 * Process result structure
 * @typedef {Object} ProcessResult
 * @property {number} id - Process ID
 * @property {number} arrivalTime - Arrival time
 * @property {number} burstTime - Burst time
 * @property {number} completionTime - Completion time
 * @property {number} turnaroundTime - Turnaround time
 * @property {number} waitingTime - Waiting time
 */

/**
 * Timeline entry structure
 * @typedef {Object} TimelineEntry
 * @property {number} processId - Process ID
 * @property {number} start - Start time
 * @property {number} end - End time
 */

/**
 * Scheduling result structure
 * @typedef {Object} SchedulingResult
 * @property {TimelineEntry[]} timeline - Execution timeline
 * @property {ProcessResult[]} processResults - Process execution statistics
 */

/**
 * Process structure
 * @typedef {Object} Process
 * @property {number} id - Process ID
 * @property {number} arrivalTime - Arrival time
 * @property {number} burstTime - Burst time
 * @property {number} priority - Priority (higher = higher priority)
 */

/**
 * First Come First Served (FCFS) Scheduling Algorithm
 * Non-preemptive algorithm that executes processes in the order of arrival
 * 
 * @param {Process[]} procs - Array of processes to schedule
 * @returns {SchedulingResult} Scheduling result with timeline and process statistics
 */
export const fcfs = (procs) => {
  const sorted = [...procs].sort((a, b) => a.arrivalTime - b.arrivalTime);
  let currentTime = 0;
  const timeline = [];
  const processResults = [];

  sorted.forEach(proc => {
    const startTime = Math.max(currentTime, proc.arrivalTime);
    const endTime = startTime + proc.burstTime;
    
    timeline.push({
      processId: proc.id,
      start: startTime,
      end: endTime
    });

    processResults.push({
      id: proc.id,
      arrivalTime: proc.arrivalTime,
      burstTime: proc.burstTime,
      completionTime: endTime,
      turnaroundTime: endTime - proc.arrivalTime,
      waitingTime: startTime - proc.arrivalTime
    });

    currentTime = endTime;
  });

  return { timeline, processResults };
};

/**
 * Shortest Job First (SJF) Non-Preemptive Scheduling Algorithm
 * Selects the process with the shortest burst time among available processes
 * 
 * @param {Process[]} procs - Array of processes to schedule
 * @returns {SchedulingResult} Scheduling result with timeline and process statistics
 */
export const sjfNonPreemptive = (procs) => {
  const processes = procs.map(p => ({ ...p, remainingTime: p.burstTime, completed: false }));
  let currentTime = 0;
  const timeline = [];
  const processResults = [];
  let completed = 0;

  while (completed < processes.length) {
    const available = processes.filter(p => 
      !p.completed && p.arrivalTime <= currentTime
    );

    if (available.length === 0) {
      currentTime++;
      continue;
    }

    const shortest = available.reduce((min, p) => 
      p.burstTime < min.burstTime ? p : min
    );

    const startTime = currentTime;
    const endTime = startTime + shortest.burstTime;

    timeline.push({
      processId: shortest.id,
      start: startTime,
      end: endTime
    });

    processResults.push({
      id: shortest.id,
      arrivalTime: shortest.arrivalTime,
      burstTime: shortest.burstTime,
      completionTime: endTime,
      turnaroundTime: endTime - shortest.arrivalTime,
      waitingTime: startTime - shortest.arrivalTime
    });

    shortest.completed = true;
    currentTime = endTime;
    completed++;
  }

  return { timeline, processResults };
};

/**
 * Shortest Job First (SJF) Preemptive / Shortest Remaining Time First (SRTF) Algorithm
 * Preemptive version that always selects the process with shortest remaining time
 * 
 * @param {Process[]} procs - Array of processes to schedule
 * @returns {SchedulingResult} Scheduling result with timeline and process statistics
 */
export const sjfPreemptive = (procs) => {
  const processes = procs.map(p => ({ ...p, remainingTime: p.burstTime }));
  let currentTime = 0;
  const timeline = [];
  const completionTimes = {};
  const maxTime = Math.max(...processes.map(p => p.arrivalTime + p.burstTime)) + 100;

  while (currentTime < maxTime) {
    const available = processes.filter(p => 
      p.arrivalTime <= currentTime && p.remainingTime > 0
    );

    if (available.length === 0) {
      currentTime++;
      continue;
    }

    const shortest = available.reduce((min, p) => 
      p.remainingTime < min.remainingTime ? p : min
    );

    const lastEntry = timeline[timeline.length - 1];
    if (lastEntry && lastEntry.processId === shortest.id) {
      lastEntry.end = currentTime + 1;
    } else {
      timeline.push({
        processId: shortest.id,
        start: currentTime,
        end: currentTime + 1
      });
    }

    shortest.remainingTime--;
    currentTime++;

    if (shortest.remainingTime === 0) {
      completionTimes[shortest.id] = currentTime;
    }

    if (Object.keys(completionTimes).length === processes.length) {
      break;
    }
  }

  const processResults = processes.map(p => ({
    id: p.id,
    arrivalTime: p.arrivalTime,
    burstTime: p.burstTime,
    completionTime: completionTimes[p.id],
    turnaroundTime: completionTimes[p.id] - p.arrivalTime,
    waitingTime: completionTimes[p.id] - p.arrivalTime - p.burstTime
  }));

  return { timeline, processResults };
};

/**
 * Priority Non-Preemptive Scheduling Algorithm
 * Selects the process with highest priority among available processes
 * 
 * @param {Process[]} procs - Array of processes to schedule
 * @returns {SchedulingResult} Scheduling result with timeline and process statistics
 */
export const priorityNonPreemptive = (procs) => {
  const processes = procs.map(p => ({ ...p, completed: false }));
  let currentTime = 0;
  const timeline = [];
  const processResults = [];
  let completed = 0;

  while (completed < processes.length) {
    const available = processes.filter(p => 
      !p.completed && p.arrivalTime <= currentTime
    );

    if (available.length === 0) {
      currentTime++;
      continue;
    }

    const highest = available.reduce((max, p) => 
      p.priority > max.priority ? p : max
    );

    const startTime = currentTime;
    const endTime = startTime + highest.burstTime;

    timeline.push({
      processId: highest.id,
      start: startTime,
      end: endTime
    });

    processResults.push({
      id: highest.id,
      arrivalTime: highest.arrivalTime,
      burstTime: highest.burstTime,
      completionTime: endTime,
      turnaroundTime: endTime - highest.arrivalTime,
      waitingTime: startTime - highest.arrivalTime
    });

    highest.completed = true;
    currentTime = endTime;
    completed++;
  }

  return { timeline, processResults };
};

/**
 * Priority Preemptive Scheduling Algorithm
 * Preemptive version that always selects the process with highest priority
 * 
 * @param {Process[]} procs - Array of processes to schedule
 * @returns {SchedulingResult} Scheduling result with timeline and process statistics
 */
export const priorityPreemptive = (procs) => {
  const processes = procs.map(p => ({ ...p, remainingTime: p.burstTime }));
  let currentTime = 0;
  const timeline = [];
  const completionTimes = {};
  const maxTime = Math.max(...processes.map(p => p.arrivalTime + p.burstTime)) + 100;

  while (currentTime < maxTime) {
    const available = processes.filter(p => 
      p.arrivalTime <= currentTime && p.remainingTime > 0
    );

    if (available.length === 0) {
      currentTime++;
      continue;
    }

    const highest = available.reduce((max, p) => 
      p.priority > max.priority ? p : max
    );

    const lastEntry = timeline[timeline.length - 1];
    if (lastEntry && lastEntry.processId === highest.id) {
      lastEntry.end = currentTime + 1;
    } else {
      timeline.push({
        processId: highest.id,
        start: currentTime,
        end: currentTime + 1
      });
    }

    highest.remainingTime--;
    currentTime++;

    if (highest.remainingTime === 0) {
      completionTimes[highest.id] = currentTime;
    }

    if (Object.keys(completionTimes).length === processes.length) {
      break;
    }
  }

  const processResults = processes.map(p => ({
    id: p.id,
    arrivalTime: p.arrivalTime,
    burstTime: p.burstTime,
    completionTime: completionTimes[p.id],
    turnaroundTime: completionTimes[p.id] - p.arrivalTime,
    waitingTime: completionTimes[p.id] - p.arrivalTime - p.burstTime
  }));

  return { timeline, processResults };
};

/**
 * Round Robin (RR) Scheduling Algorithm
 * Time-sliced scheduling with a fixed time quantum for each process
 * 
 * @param {Process[]} procs - Array of processes to schedule
 * @param {number} timeQuantum - Time quantum for each process execution slice
 * @returns {SchedulingResult} Scheduling result with timeline and process statistics
 */
export const roundRobin = (procs, timeQuantum = 2) => {
  const queue = [];
  const processes = procs.map(p => ({ ...p, remainingTime: p.burstTime }));
  let currentTime = 0;
  const timeline = [];
  const completionTimes = {};
  const arrived = new Set();

  processes.sort((a, b) => a.arrivalTime - b.arrivalTime);

  // Add processes that arrive at time 0
  processes.forEach(p => {
    if (p.arrivalTime === 0) {
      queue.push(p);
      arrived.add(p.id);
    }
  });

  while (queue.length > 0 || Object.keys(completionTimes).length < processes.length) {
    if (queue.length === 0) {
      const nextProcess = processes.find(p => 
        p.arrivalTime > currentTime && !arrived.has(p.id)
      );
      if (nextProcess) {
        currentTime = nextProcess.arrivalTime;
        queue.push(nextProcess);
        arrived.add(nextProcess.id);
      } else {
        break;
      }
    }

    const current = queue.shift();
    const executeTime = Math.min(current.remainingTime, timeQuantum);
    
    timeline.push({
      processId: current.id,
      start: currentTime,
      end: currentTime + executeTime
    });

    current.remainingTime -= executeTime;
    currentTime += executeTime;

    // Add newly arrived processes
    processes.forEach(p => {
      if (p.arrivalTime <= currentTime && !arrived.has(p.id) && p.remainingTime > 0) {
        queue.push(p);
        arrived.add(p.id);
      }
    });

    if (current.remainingTime > 0) {
      queue.push(current);
    } else {
      completionTimes[current.id] = currentTime;
    }
  }

  const processResults = processes.map(p => ({
    id: p.id,
    arrivalTime: p.arrivalTime,
    burstTime: p.burstTime,
    completionTime: completionTimes[p.id],
    turnaroundTime: completionTimes[p.id] - p.arrivalTime,
    waitingTime: completionTimes[p.id] - p.arrivalTime - p.burstTime
  }));

  return { timeline, processResults };
};

