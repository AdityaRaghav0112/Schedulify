import React from "react";
const Doc_rr = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Round Robin</h1>
      <p className="text-lg">
        <span className="font-semibold">Round Robin Scheduling</span> is a
        method used by operating systems to manage the execution time of
        multiple processes that are competing for CPU attention. It is called
        "round robin" because the system rotates through all the processes,
        allocating each of them a fixed time slice or "quantum", regardless of
        their priority. store.
      </p>
      <p className="text-lg mt-2">
        The primary goal of this scheduling method is to ensure that all
        processes are given an equal opportunity to execute, promoting fairness
        among tasks.
      </p>
      <ul className="list-disc mt-2 ml-6">
        <li className="text-lg">
          <span className="font-semibold"></span>Process Arrival: Processes
          enter the system and are placed in a queue.
        </li>
        <li className="text-lg">
          <span className="font-semibold"></span>Time Allocation: Each process
          is given a certain amount of CPU time, called a quantum.
        </li>
        <li className="text-lg">
          <span className="font-semibold"></span>Execution: The process uses the
          CPU for the allocated time.
        </li>
        <li className="text-lg">
          <span className="font-semibold"></span>Rotation: If the process
          completes within the time, it leaves the system. If not, it goes back
          to the end of the queue.
        </li>
        <li className="text-lg">
          <span className="font-semibold"></span>Repeat: The CPU continues to
          cycle through the queue until all processes are completed.
        </li>
      </ul>
      <div className="ex-image flex justify-center p-4">
        <img className="size-2/3" src="../../../public/round_robinn.webp" alt="" />
      </div>
      
      <h2 className="text-2xl font-bold my-2">Example : </h2>
      <p className="text-lg mt-2 my-2">
        To understand the Round Robin Scheduling algorithm, let’s consider the
        following two scenarios:
      </p>
      <h4 className="text-xl font-bold">
        Scenario 1: Processes with Same Arrival Time{" "}
      </h4>
      <p className="text-lg mt-2 my-2">
        Consider the following table of arrival time and burst time for three
        processes P1, P2 and P3 and given Time Quantum = 2 ms
      </p>
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
              <td className="px-4 py-2 border border-gray-700 font-semibold">
                p1
              </td>
              <td className="px-4 py-2 border border-gray-700">4</td>
              <td className="px-4 py-2 border border-gray-700">0</td>
            </tr>
            <tr className="">
              <td className="px-4 py-2 border border-gray-700 font-semibold">
                p2
              </td>
              <td className="px-4 py-2 border border-gray-700">5</td>
              <td className="px-4 py-2 border border-gray-700">0</td>
            </tr>
            <tr className="">
              <td className="px-4 py-2 border border-gray-700 font-semibold">
                p3
              </td>
              <td className="px-4 py-2 border border-gray-700">3</td>
              <td className="px-4 py-2 border border-gray-700">0</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-lg mt-2 my-2">
        Step-by-Step Execution: <br />
        <ol className="list-decimal list-inside mt-2 ml-6">
          <li className="text-lg">
            <span className="font-semibold"></span> Time 0-2 (P1): P1 runs for 2
            ms (total time left: 2 ms).
          </li>
          <li className="text-lg">
            <span className="font-semibold"></span>TTime 2-4 (P2): P2 runs for 2
            ms (total time left: 3 ms).
          </li>
          <li className="text-lg">
            <span className="font-semibold"></span>Time 4-6 (P3): P3 runs for 2
            ms (total time left: 1 ms).
          </li>
          <li className="text-lg">
            <span className="font-semibold"></span>Time 6-8 (P1): P1 finishes
            its last 2 ms.
          </li>
          <li className="text-lg">
            <span className="font-semibold"></span>Time 8-10 (P2): P2 runs for
            another 2 ms (total time left: 1 ms).
          </li>
          <li className="text-lg">
            <span className="font-semibold"></span> Time 10-11 (P3): P3 finishes
            its last 1 ms.
          </li>
          <li className="text-lg">
            <span className="font-semibold"></span>Time 11-12 (P2): P2 finishes
            its last 1 ms.{" "}
          </li>
        </ol>
      </p>
      tables.
      <h4 className="text-xl font-bold">Step-by-Step Execution:</h4>
      <ol className="list-decimal list-inside mt-2 ml-4">
        <li className="text-lg">
          <span className="font-bold"></span> Time 0-2 (P1 Executes) : <br />
          <ul className="list-disc mt-2 ml-10">
            <li className="text-lg">
              <span className="font-semibold"></span>P1 starts execution as it
              arrives at 0 ms.
            </li>
            <li className="text-lg">
              <span className="font-semibold"></span>Runs for 2 ms; remaining
              burst time = 5 - 2 = 3 ms.
            </li>
            <li className="text-lg">
              <span className="font-semibold"></span>Ready Queue: [P1].
            </li>
            <br />
          </ul>
        </li>
        <li className="text-lg">
          <span className="font-bold"></span> Time 2-4 (P1 Executes Again):{" "}
          <br />
          <ul className="list-disc mt-2 ml-10">
            <li className="text-lg">
              <span className="font-semibold"></span>P1 continues execution
              since no other process has arrived yet.
            </li>
            <li className="text-lg">
              <span className="font-semibold"></span>Runs for 2 ms; remaining
              burst time = 3 - 2 = 1 ms.
            </li>
            <li className="text-lg">
              <span className="font-semibold"></span>P2 arrive at 4 ms.
            </li>
            <li className="text-lg">
              <span className="font-semibold"></span>Ready Queue: [P2, P1].
            </li>
            <br />
          </ul>
        </li>
        <li className="text-lg">
          <span className="font-bold"></span> Time 4-6 (P2 Executes): <br />
          <ul className="list-disc mt-2 ml-10">
            <li className="text-lg">
              <span className="font-semibold"></span>P2 starts execution as it
              arrives at 4 ms.
            </li>
            <li className="text-lg">
              <span className="font-semibold"></span>Runs for 2 ms; remaining
              burst time = 2 - 2 = 0 ms.
            </li>
            <li className="text-lg">
              <span className="font-semibold"></span>P3 arrive at 5ms.
            </li>
            <li className="text-lg">
              <span className="font-semibold"></span>Ready Queue: [P1,P3].
            </li>
            <br />
          </ul>
        </li>
        <li className="text-lg">
          <span className="font-bold"></span> Time 6-7 (P1 Executes): <br />
          <ul className="list-disc mt-2 ml-10">
            <li className="text-lg">
              <span className="font-semibold"></span>P1 starts execution.
            </li>
            <li className="text-lg">
              <span className="font-semibold"></span>Runs for 1 ms; remaining
              burst time = 1 - 1 = 0 ms.
            </li>
            <li className="text-lg">
              <span className="font-semibold"></span>Ready Queue: [P3].
            </li>
            <br />
          </ul>
        </li>
        <li className="text-lg">
          <span className="font-bold"></span> Time 7-9 (P3 Executes):
          <br />
          <ul className="list-disc mt-2 ml-10">
            <li className="text-lg">
              <span className="font-semibold"></span>P3 starts execution.
            </li>
            <li className="text-lg">
              <span className="font-semibold"></span>Remaining burst time = 4 -
              2 = 2 ms.
            </li>
            <li className="text-lg">
              <span className="font-semibold"></span>Ready Queue: [P3].
            </li>
            <br />
          </ul>
        </li>
        <li className="text-lg">
          <span className="font-bold"></span>Time 9-11 (P3 Executes Again):
          <br />
          <ul className="list-disc mt-2 ml-10">
            <li className="text-lg">
              <span className="font-semibold"></span>P3 resumes execution and
              runs for 2 ms and complete its execution
            </li>
            <li className="text-lg">
              <span className="font-semibold"></span>Remaining burst time = 2 -
              2 = 0 ms.
            </li>
            <li className="text-lg">
              <span className="font-semibold"></span>Ready Queue: [].
            </li>
            <br />
          </ul>
        </li>
      </ol>
      image table
      <h4 className="text-xl font-bold">
        Advantages of Round Robin Scheduling
      </h4>
      <ul className="list-disc mt-2 ml-6">
        <li className="text-lg">
          <span className="font-semibold"></span>Fairness: Each process gets an
          equal share of the CPU.
        </li>
        <li className="text-lg">
          <span className="font-semibold"></span>Simplicity: The algorithm is
          straightforward and easy to implement.
        </li>
        <li className="text-lg">
          <span className="font-semibold"></span>Responsiveness: Round Robin can
          handle multiple processes without significant delays, making it ideal
          for time-sharing systems.
        </li>
        <br />
      </ul>
      <h4 className="text-xl font-bold">
        Disadvantages of Round Robin Scheduling
      </h4>
      <ul className="list-disc mt-2 ml-6">
        <li className="text-lg">
          <span className="font-semibold"></span>Overhead: Switching between
          processes can lead to high overhead, especially if the quantum is too
          small.
        </li>
        <li className="text-lg">
          <span className="font-semibold"></span>Underutilization: If the
          quantum is too large, it can cause the CPU to feel unresponsive as it
          waits for a process to finish its time.
        </li>
      </ul>
    </div>
  );
};

export default Doc_rr;
