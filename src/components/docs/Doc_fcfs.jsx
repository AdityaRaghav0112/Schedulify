import React from "react";

const Doc_fcfs = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">FCFS - First Come First Serve</h1>
      <p className="text-lg">
        <span className="font-semibold">First Come, First Serve</span> is one of
        the simplest types of CPU scheduling algorithms. It is exactly what it
        sounds like: <br /> processes are attended to in the order in which they
        arrive in the ready queue, much like customers lining up at a grocery
        store.
      </p>

      <p className="text-lg">
        FCFS Scheduling is a non-preemptive algorithm, meaning once a process
        starts running, it cannot be stopped until it voluntarily relinquishes
        the CPU, typically when it terminates or performs I/O. This method
        schedules processes in the order they arrive, without considering
        priority or other factors.
      </p>

      <h1 className="text-2xl font-bold mt-5">How Does FCFS Work?</h1>
      <h3 className="text-lg">The machines of FCFS are straightforward: </h3>
      <p className="text-lg mt-2">
        <span className="font-semibold">1.Arrival: </span>The process enters the
        system and are placed in a queue in the order they arrive <br />
        <span className="font-semibold">2.Execution: </span>The CPU takes the
        first process from the front of the queue, executes it until it is
        complete, and then removes it from the queue. <br />
        <span className="font-semibold">3.Repeat: </span> The CPU takes the next
        process in the queue and repeats the execution process.
        <br />
      </p>

      <p className="text-lg mt-2">This continues until there are no more process left in the queue.</p>

      <h1 className="text-2xl font-bold mt-5">Examples of FCFS CPU scheduling: </h1>
      <p className="text-lg">To understand the First Come, First Served (FCFS) scheduling algorithm effectively, we'll use two examples -</p>

      <ul className="list-disc text-lg">
        <li>one where all processes arrive at the same time,</li>
        <li>another where processes arrive at different times.</li>
      </ul>

      <p className="text-lg mt-2">We'll create Gantt charts for both scenarios and calculate the turnaround time and waiting time for each process.</p>

      <h1 className="text-2xl font-bold mt-5">Scenario1: Processes with same arrival time:</h1>
      <p className="text-lg ">Consider the following table of arrival time and burst time for three processes P1, P2 and P3</p>

       <div className="overflow-x-auto mt-6">
      <table className="min-w-full border border-gray-700 text-center ">
        <thead>
          <tr className="bg-gradient-to-r from-primary-accent to-waiting text-white">
            <th className="px-4 py-2 border border-gray-700">Process</th>
            <th className="px-4 py-2 border border-gray-700">Arrival Time</th>
            <th className="px-4 py-2 border border-gray-700">Burst Time</th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <td className="px-4 py-2 border border-gray-700 font-semibold">p1</td>
            <td className="px-4 py-2 border border-gray-700">0</td>
            <td className="px-4 py-2 border border-gray-700">5</td>
          </tr>
          <tr className="">
            <td className="px-4 py-2 border border-gray-700 font-semibold">p2</td>
            <td className="px-4 py-2 border border-gray-700">0</td>
            <td className="px-4 py-2 border border-gray-700">3</td>
          </tr>
          <tr className="">
            <td className="px-4 py-2 border border-gray-700 font-semibold">p3</td>
            <td className="px-4 py-2 border border-gray-700">0</td>
            <td className="px-4 py-2 border border-gray-700">8</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Doc_fcfs;
