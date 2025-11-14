import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
  CarouselIndicator,
} from "../motion-primitives/Carousel";
import fcfs1 from "../../assets/fcfs/step1.webp";
import fcfs2 from "../../assets/fcfs/step2.webp";
import fcfs3 from "../../assets/fcfs/step3.webp";
import fcfs4 from "../../assets/fcfs/step4.webp";
import fcfs1a from "../../assets/fcfs/step1a.webp";
import fcfs2a from "../../assets/fcfs/step2a.webp";
import fcfs3a from "../../assets/fcfs/step3a.webp";
import fcfs4a from "../../assets/fcfs/step4a.webp";
const Doc_SJF = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">SJF - Shortest Job First</h1>
      <p className="text-lg">
        <span className="font-semibold">
          Shortest Job First (SJF) or Shortest Job Next (SJN)
        </span>{" "}
        is a scheduling process that selects the waiting process with the
        smallest execution time to execute next. This scheduling method may or
        may not be preemptive. Significantly reduces the average waiting time
        for other processes waiting to be executed.
      </p>

      <h2 className="text-2xl font-bold mt-5 ">
        Characteristics of SJF Scheduling{" "}
      </h2>
      <ul className="list-disc text-lg ml-6">
        <li>
          Shortest Job first has the advantage of having a minimum average
          waiting time among all operating system scheduling algorithms.
        </li>
        <li>It is associated with each task as a unit of time to complete.</li>
        <li>
          It may cause starvation if shorter processes keep coming. This problem
          can be solved using the concept of ageing.
        </li>
        <li>
          It is practically infeasible as Operating System may not know burst
          times and therefore may not sort them. While it is not possible to
          predict execution time, several methods can be used to estimate the
          execution time for a job, such as a weighted average of previous
          execution times.
        </li>
        <li>
          SJF can be used in specialized environments where accurate estimates
          of running time are available.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-5 ">Algorithm: </h2>
      <ul className="list-disc text-lg ml-6">
        <li>Sort all the processes according to the arrival time. </li>
        <li>
          Then select that process that has minimum arrival time and minimum
          Burst time.{" "}
        </li>
        <li>
          After completion of the process make a pool of processes that arrives
          afterward till the completion of the previous process and select that
          process among the pool which is having minimum Burst time.{" "}
        </li>
      </ul>

      <img src="../../../SJF.png" alt="" className="mx-12 p-2" />

      <h2 className="text-2xl font-bold mt-5 ">
        How to compute below times in SJF using a program?{" "}
      </h2>
      <ul className="list-disc text-lg ml-6">
        <li>
          Completion Time: Time at which process completes its execution.{" "}
        </li>
        <li>
          Turn Around Time: Time Difference between completion time and arrival
          time. <br />
          <span className="font-semibold">
            Turn Around Time = Completion Time - Arrival Time
          </span>
        </li>
        <li>
          Waiting Time(W.T): Time Difference between turn around time and burst
          time. <br />
          <span className="font-semibold">
            Waiting Time = Turn Around Time - Burst Time
          </span>
        </li>
      </ul>

      <h3 className="text-xl font-bold mt-5">Example 1: </h3>
      <p className="text-lg">
        Consider the following table of arrival time and burst time for five
        processes P1, P2, P3, P4 and P5.{" "}
      </p>

      <div className="overflow-x-auto mt-6">
        <table className="min-w-full border border-gray-700 text-center ">
          <thead>
            <tr className="bg-[var(--color-logo1)] text-[var(--color-text-footerP)]">
              <th className="px-4 py-2 border border-gray-700">Process</th>
              <th className="px-4 py-2 border border-gray-700">Burst Time</th>
              <th className="px-4 py-2 border border-gray-700">Arrival Time</th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="px-4 py-2 border border-gray-700 font-semibold">
                p1
              </td>
              <td className="px-4 py-2 border border-gray-700">6</td>
              <td className="px-4 py-2 border border-gray-700">2</td>
            </tr>
            <tr className="">
              <td className="px-4 py-2 border border-gray-700 font-semibold">
                p2
              </td>
              <td className="px-4 py-2 border border-gray-700">2</td>
              <td className="px-4 py-2 border border-gray-700">5</td>
            </tr>
            <tr className="">
              <td className="px-4 py-2 border border-gray-700 font-semibold">
                p3
              </td>
              <td className="px-4 py-2 border border-gray-700">8</td>
              <td className="px-4 py-2 border border-gray-700">1</td>
            </tr>
            <tr className="">
              <td className="px-4 py-2 border border-gray-700 font-semibold">
                p4
              </td>
              <td className="px-4 py-2 border border-gray-700">3</td>
              <td className="px-4 py-2 border border-gray-700">0</td>
            </tr>
            <tr className="">
              <td className="px-4 py-2 border border-gray-700 font-semibold">
                p5
              </td>
              <td className="px-4 py-2 border border-gray-700">4</td>
              <td className="px-4 py-2 border border-gray-700">4</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-lg mt-3">The Shortest Job First CPU Scheduling algorithm will work on the basis of steps as mentioned below: <br />
      <span className="font-semibold">At time T=0,</span></p>

      <ul className="list-disc text-lg ml-6">
        <li>
          Process P4 arrives and starts executing.
        </li>
      </ul>

      <div className="overflow-x-auto mt-6">
        <table className="min-w-full border border-gray-700 text-center ">
          <thead>
            <tr className="bg-[var(--color-logo1)] text-[var(--color-text-footerP)]">
              <th className="px-4 py-2 border border-gray-700">Time Instance</th>
              <th className="px-4 py-2 border border-gray-700">Process</th>
              <th className="px-4 py-2 border border-gray-700">Arrival Time</th>
              <th className="px-4 py-2 border border-gray-700">Waiting Table</th>
              <th className="px-4 py-2 border border-gray-700">Execution Time</th>
              <th className="px-4 py-2 border border-gray-700">Initial Burst Time</th>
              <th className="px-4 py-2 border border-gray-700">Remaining Burst Time</th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="px-4 py-2 border border-gray-700 font-semibold">
                0-1 ms
              </td>
              <td className="px-4 py-2 border border-gray-700">P4</td>
              <td className="px-4 py-2 border border-gray-700">0ms</td>
              <td className="px-4 py-2 border border-gray-700"></td>
              <td className="px-4 py-2 border border-gray-700">1ms</td>
              <td className="px-4 py-2 border border-gray-700">3ms</td>
              <td className="px-4 py-2 border border-gray-700">2ms</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-lg font-semibold">At time = 1,,</p>
      <ul className="list-disc text-lg ml-6">
        <li>
          Process P3 arrives
        </li>
        <li>
          But, as P4 still needs 2 execution units to complete. 
        </li>
        <li>
          Thus, P3 will wait till P4 gets executed.
        </li>
      </ul>

      <div className="overflow-x-auto mt-6">
        <table className="min-w-full border border-gray-700 text-center ">
          <thead>
            <tr className="bg-[var(--color-logo1)] text-[var(--color-text-footerP)]">
              <th className="px-4 py-2 border border-gray-700">Time Instance</th>
              <th className="px-4 py-2 border border-gray-700">Process</th>
              <th className="px-4 py-2 border border-gray-700">Arrival Time</th>
              <th className="px-4 py-2 border border-gray-700">Waiting Table</th>
              <th className="px-4 py-2 border border-gray-700">Execution Time</th>
              <th className="px-4 py-2 border border-gray-700">Initial Burst Time</th>
              <th className="px-4 py-2 border border-gray-700">Remaining Burst Time</th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="px-4 py-2 border border-gray-700 font-semibold">
                0-1 ms
              </td>
              <td className="px-4 py-2 border border-gray-700">P4</td>
              <td className="px-4 py-2 border border-gray-700">0ms</td>
              <td className="px-4 py-2 border border-gray-700"></td>
              <td className="px-4 py-2 border border-gray-700">1ms</td>
              <td className="px-4 py-2 border border-gray-700">3ms</td>
              <td className="px-4 py-2 border border-gray-700">2ms</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-700 font-semibold">
                  
              </td>
              <td className="px-4 py-2 border border-gray-700">P3</td>
              <td className="px-4 py-2 border border-gray-700">1ms</td>
              <td className="px-4 py-2 border border-gray-700">P3</td>
              <td className="px-4 py-2 border border-gray-700">0ms</td>
              <td className="px-4 py-2 border border-gray-700">8ms</td>
              <td className="px-4 py-2 border border-gray-700">8ms</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-5">
        Implementation of SJF Scheduling{" "}
      </h2>
      <p className="text-lg mt-2">
        Step 1: Input number of processes and their burst times (arrival time
        too, if it’s non-preemptive with arrivals).
        <br />
        Step 2: Sort processes by burst time (if same, use arrival order).
        <br />
        Step 3: Start with the process having the shortest burst time.
        <br />
        Step 4: Calculate Completion Time = Start Time + Burst Time.
        <br />
        Step 5: Calculate Turnaround Time = Completion Time − Arrival Time.
        <br />
        Step 6: Calculate Waiting Time = Turnaround Time − Burst Time.
        <br />
        Step 7: Repeat until all processes are completed.
        <br />
        Step 8: Compute average waiting time and turnaround time.
        <br />
        Step 9: Display completion, waiting, and turnaround times for each
        process along with averages.
        <br />
      </p>
      <h2 className="text-2xl font-bold mt-5">Advantages of SJF Scheduling </h2>
      <p>
        <ul className="list-disc text-lg ml-6">
          <li>
            SJF is better than the First come first serve(FCFS) algorithm as it
            reduces the average waiting time.
          </li>
          <li>SJF is generally used for long term scheduling.</li>
          <li>
            It is suitable for the jobs running in batches, where run times are
            already known.
          </li>
          <li>
            SJF is probably optimal in terms of average Turn Around Time (TAT).
          </li>
        </ul>
      </p>
      <h2 className="text-2xl font-bold mt-5">
        Disdvantages of SJF Scheduling{" "}
      </h2>
      <p>
        <ul className="list-disc text-lg ml-6">
          <li>SJF may cause very long turn-around times or starvation.</li>
          <li>In SJF job completion time must be known earlier..</li>
          <li>
            Many times it becomes complicated to predict the length of the
            upcoming CPU request.
          </li>
        </ul>
      </p>
    </div>
  );
};

export default Doc_SJF;
