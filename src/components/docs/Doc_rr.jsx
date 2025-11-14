import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
  CarouselIndicator,
} from "../motion-primitives/Carousel";
import { motion } from "framer-motion";
import rr1 from "../../assets/rr/step1.webp";
import rr2 from "../../assets/rr/step2.webp";
import rr3 from "../../assets/rr/step3.webp";
import rr4 from "../../assets/rr/step4.webp";
import rr5 from "../../assets/rr/step5.webp";
import rr6 from "../../assets/rr/step6.webp";
import rr7 from "../../assets/rr/step7.webp";
import rr8 from "../../assets/rr/step8.webp";
import rr1a from "../../assets/rr/step1a.webp";
import rr2a from "../../assets/rr/step2a.webp";
import rr3a from "../../assets/rr/step3a.webp";
import rr4a from "../../assets/rr/step4a.webp";
import rr5a from "../../assets/rr/step5a.webp";
import rr6a from "../../assets/rr/step6a.webp";

const Doc_rr = () => {
  const data = [
    { process: "P1", AT: 0, BT: 4, CT: 8, TAT: "8 - 0 = 8", WT: "8 - 4 = 4" },
    {
      process: "P2",
      AT: 0,
      BT: 5,
      CT: 12,
      TAT: "12 - 0 = 12",
      WT: "12 - 5 = 7",
    },
    {
      process: "P3",
      AT: 0,
      BT: 3,
      CT: 11,
      TAT: "11 - 0 = 11",
      WT: "11 - 3 = 8",
    },
  ];

  const data2 = [
    { process: "P1", CT: "7 ms", TAT: "7 ms", WT: "2 ms" },
    { process: "P2", CT: "6 ms", TAT: "2 ms", WT: "0 ms" },
    { process: "P3", CT: "11 ms", TAT: "6 ms", WT: "2 ms" },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h1 className="text-2xl font-bold">Round Robin</h1>
          <p className="text-lg">
            <span className="font-semibold">Round Robin Scheduling</span> is a
            method used by operating systems to manage the execution time of
            multiple processes that are competing for CPU attention. It is
            called "round robin" because the system rotates through all the
            processes, allocating each of them a fixed time slice or "quantum",
            regardless of their priority. store.
          </p>
          <p className="text-lg mt-2">
            The primary goal of this scheduling method is to ensure that all
            processes are given an equal opportunity to execute, promoting
            fairness among tasks.
          </p>
          <ul className="list-disc mt-2 ml-6">
            <li className="text-lg">
              <span className="font-semibold"></span>Process Arrival: Processes
              enter the system and are placed in a queue.
            </li>
            <li className="text-lg">
              <span className="font-semibold"></span>Time Allocation: Each
              process is given a certain amount of CPU time, called a quantum.
            </li>
            <li className="text-lg">
              <span className="font-semibold"></span>Execution: The process uses
              the CPU for the allocated time.
            </li>
            <li className="text-lg">
              <span className="font-semibold"></span>Rotation: If the process
              completes within the time, it leaves the system. If not, it goes
              back to the end of the queue.
            </li>
            <li className="text-lg">
              <span className="font-semibold"></span>Repeat: The CPU continues
              to cycle through the queue until all processes are completed.
            </li>
          </ul>
          <div className="ex-image flex justify-center p-4">
            <img className="size-2/3" src="/round_robinn.webp" alt="" />
          </div>
          <h2 className="text-2xl font-bold my-2">Example : </h2>
          <p className="text-lg mt-2 my-2">
            To understand the Round Robin Scheduling algorithm, let’s consider
            the following two scenarios:
          </p>

          {/* SCENARIO 1 */}

          <h4 className="text-2xl font-bold">
            Scenario 1: Processes with Same Arrival Time{" "}
          </h4>
          <p className="text-lg mt-2 my-2">
            Consider the following table of arrival time and burst time for
            three processes P1, P2 and P3 and given Time Quantum = 2 ms
          </p>
          <div className="overflow-x-auto mt-6">
            <table className="min-w-full border border-gray-700 text-center ">
              <thead>
                <tr className="bg-[var(--color-logo1)] text-[var(--color-text-footerP)]">
                  <th className="px-4 py-2 border border-gray-700">Process</th>
                  <th className="px-4 py-2 border border-gray-700">
                    Arrival Time
                  </th>
                  <th className="px-4 py-2 border border-gray-700">
                    Burst Time
                  </th>
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
            <h3 className="font-bold">Step-by-Step Execution:</h3> <br />
            <ol className="list-decimal list-inside ml-6">
              <li className="text-lg">
                <span className="font-semibold"></span> Time 0-2 (P1): P1 runs
                for 2 ms (total time left: 2 ms).
              </li>
              <li className="text-lg">
                <span className="font-semibold"></span>TTime 2-4 (P2): P2 runs
                for 2 ms (total time left: 3 ms).
              </li>
              <li className="text-lg">
                <span className="font-semibold"></span>Time 4-6 (P3): P3 runs
                for 2 ms (total time left: 1 ms).
              </li>
              <li className="text-lg">
                <span className="font-semibold"></span>Time 6-8 (P1): P1
                finishes its last 2 ms.
              </li>
              <li className="text-lg">
                <span className="font-semibold"></span>Time 8-10 (P2): P2 runs
                for another 2 ms (total time left: 1 ms).
              </li>
              <li className="text-lg">
                <span className="font-semibold"></span> Time 10-11 (P3): P3
                finishes its last 1 ms.
              </li>
              <li className="text-lg">
                <span className="font-semibold"></span>Time 11-12 (P2): P2
                finishes its last 1 ms.{" "}
              </li>
            </ol>
          </p>
          {/* GANTT CHART */}
          <div className="flex  justify-center">
            <div className="relative w-full max-w-4xl">
              <Carousel>
                <CarouselContent>
                  <CarouselItem className="p-4">
                    <div className="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">
                      <img src={rr1} alt="" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="p-4">
                    <div className="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">
                      <img src={rr2} alt="" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="p-4">
                    <div className="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">
                      <img src={rr3} alt="" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="p-4">
                    <div className="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">
                      <img src={rr4} alt="" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="p-4">
                    <div className="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">
                      <img src={rr5} alt="" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="p-4">
                    <div className="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">
                      <img src={rr6} alt="" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="p-4">
                    <div className="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">
                      <img src={rr7} alt="" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="p-4">
                    <div className="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">
                      <img src={rr8} alt="" />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselNavigation alwaysShow />
                <CarouselIndicator />
              </Carousel>
            </div>
          </div>
          <p className="font-semibold p-2 text-lg">
            Now let's calculate the average waiting time and turnaround time:{" "}
            <br />
            <ul className="list-disc ml-5">
              <li>Turnaround Time = Completion Time - Arrival Time</li>
              <li>Waiting Time = Turnaround Time - Busrt Time</li>
            </ul>
          </p>
          <div className="overflow-x-auto mt-3">
            <table className="min-w-full border border-gray-700 font-semibold text-center ">
              <thead className="bg-[var(--color-logo1)] text-[var(--color-text-footerP)]">
                <tr>
                  <th className="border border-gray-700 px-4 py-2">
                    Processes
                  </th>
                  <th className="border border-gray-700 px-4 py-2">AT</th>
                  <th className="border border-gray-700 px-4 py-2">BT</th>
                  <th className="border border-gray-700 px-4 py-2">CT</th>
                  <th className="border border-gray-700 px-4 py-2">TAT</th>
                  <th className="border border-gray-700 px-4 py-2">WT</th>
                </tr>
              </thead>
              <tbody className="">
                {data.map((row, index) => (
                  <tr key={index} className="">
                    <td className="border border-gray-700 px-4 py-2">
                      {row.process}
                    </td>
                    <td className="border border-gray-700 px-4 py-2">
                      {row.AT}
                    </td>
                    <td className="border border-gray-700 px-4 py-2">
                      {row.BT}
                    </td>
                    <td className="border border-gray-700 px-4 py-2">
                      {row.CT}
                    </td>
                    <td className="border border-gray-700 px-4 py-2">
                      {row.TAT}
                    </td>
                    <td className="border border-gray-700 px-4 py-2">
                      {row.WT}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="list-disc my-4 ml-5 text-lg">
            <li>
              <span className="font-semibold">Average TurnAround Time = </span>
              Completion Time - Arrival Time
            </li>
            <li>
              <span className="font-semibold">Average Waiting Time = </span>
              Turnaround Time - Burst Time
            </li>
          </ul>

          {/* SCENARIO 2 */}

          <h1 className="text-2xl font-bold mt-5">
            Scenario 2: Process with Different Arrival Times
          </h1>
          <p className="text-lg">
            Consider the following table of arrival time and burst time for
            three processes P1, P2 and P3 and given{" "}
            <span className="font-semibold">Time Quantum = 2</span>
          </p>

          {/* TABLE */}

          <div className="overflow-x-auto mt-6">
            <table className="min-w-full border border-gray-700 text-center ">
              <thead>
                <tr className="bg-[var(--color-logo1)] text-[var(--color-text-footerP)]">
                  <th className="px-4 py-2 border border-gray-700">Process</th>
                  <th className="px-4 py-2 border border-gray-700">
                    Arrival Time
                  </th>
                  <th className="px-4 py-2 border border-gray-700">
                    Burst Time
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="px-4 py-2 border border-gray-700 font-semibold">
                    p1
                  </td>
                  <td className="px-4 py-2 border border-gray-700">5</td>
                  <td className="px-4 py-2 border border-gray-700">0</td>
                </tr>
                <tr className="">
                  <td className="px-4 py-2 border border-gray-700 font-semibold">
                    p2
                  </td>
                  <td className="px-4 py-2 border border-gray-700">2</td>
                  <td className="px-4 py-2 border border-gray-700">4</td>
                </tr>
                <tr className="">
                  <td className="px-4 py-2 border border-gray-700 font-semibold">
                    p3
                  </td>
                  <td className="px-4 py-2 border border-gray-700">4</td>
                  <td className="px-4 py-2 border border-gray-700">5</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="text-xl font-bold mt-3">Step-by-Step Execution:</h4>
          <ol className="list-decimal list-inside mt-2 ml-4">
            <li className="text-lg">
              <span className="font-semibold">Time 0-2 (P1 Executes) :</span>{" "}
              <br />
              <ul className="list-disc mt-2 ml-10">
                <li className="text-lg">
                  <span className="font-semibold"></span>P1 starts execution as
                  it arrives at 0 ms.
                </li>
                <li className="text-lg">
                  <span className="font-semibold"></span>Runs for 2 ms;
                  remaining burst time = 5 - 2 = 3 ms.
                </li>
                <li className="text-lg">
                  <span className="font-semibold"></span>Ready Queue: [P1].
                </li>
                <br />
              </ul>
            </li>
            <li className="text-lg">
              <span className="font-semibold">
                Time 2-4 (P1 Executes Again):
              </span>{" "}
              <br />
              <ul className="list-disc mt-2 ml-10">
                <li className="text-lg">
                  <span className="font-semibold"></span>P1 continues execution
                  since no other process has arrived yet.
                </li>
                <li className="text-lg">
                  <span className="font-semibold"></span>Runs for 2 ms;
                  remaining burst time = 3 - 2 = 1 ms.
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
              <span className="font-semibold">Time 4-6 (P2 Executes):</span>{" "}
              <br />
              <ul className="list-disc mt-2 ml-10">
                <li className="text-lg">
                  <span className="font-semibold"></span>P2 starts execution as
                  it arrives at 4 ms.
                </li>
                <li className="text-lg">
                  <span className="font-semibold"></span>Runs for 2 ms;
                  remaining burst time = 2 - 2 = 0 ms.
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
              <span className="font-semibold">Time 6-7 (P1 Executes):</span>{" "}
              <br />
              <ul className="list-disc mt-2 ml-10">
                <li className="text-lg">
                  <span className="font-semibold"></span>P1 starts execution.
                </li>
                <li className="text-lg">
                  <span className="font-semibold"></span>Runs for 1 ms;
                  remaining burst time = 1 - 1 = 0 ms.
                </li>
                <li className="text-lg">
                  <span className="font-semibold"></span>Ready Queue: [P3].
                </li>
                <br />
              </ul>
            </li>
            <li className="text-lg">
              <span className="font-semibold">Time 7-9 (P3 Executes):</span>
              <br />
              <ul className="list-disc mt-2 ml-10">
                <li className="text-lg">
                  <span className="font-semibold"></span>P3 starts execution.
                </li>
                <li className="text-lg">
                  <span className="font-semibold"></span>Remaining burst time =
                  4 - 2 = 2 ms.
                </li>
                <li className="text-lg">
                  <span className="font-semibold"></span>Ready Queue: [P3].
                </li>
                <br />
              </ul>
            </li>
            <li className="text-lg">
              <span className="font-semibold">
                Time 9-11 (P3 Executes Again):
              </span>
              <br />
              <ul className="list-disc mt-2 ml-10">
                <li className="text-lg">
                  <span className="font-semibold"></span>P3 resumes execution
                  and runs for 2 ms and complete its execution
                </li>
                <li className="text-lg">
                  <span className="font-semibold"></span>Remaining burst time =
                  2 - 2 = 0 ms.
                </li>
                <li className="text-lg">
                  <span className="font-semibold"></span>Ready Queue: [].
                </li>
                <br />
              </ul>
            </li>
          </ol>

          {/* GANTT CHART */}

          <p className="font-bold mt-3">Gantt chart: </p>
          <div className="flex  justify-center">
            <div className="relative w-full max-w-4xl">
              <Carousel>
                <CarouselContent>
                  <CarouselItem className="p-4">
                    <div className="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">
                      <img src={rr1a} alt="" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="p-4">
                    <div className="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">
                      <img src={rr2a} alt="" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="p-4">
                    <div className="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">
                      <img src={rr3a} alt="" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="p-4">
                    <div className="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">
                      <img src={rr4a} alt="" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="p-4">
                    <div className="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">
                      <img src={rr5a} alt="" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="p-4">
                    <div className="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">
                      <img src={rr6a} alt="" />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselNavigation alwaysShow />
                <CarouselIndicator />
              </Carousel>
            </div>
          </div>
          <p className="font-semibold">Now let's calculate average waiting time and turn around time</p>
          <div className="overflow-x-auto my-4">
            <table className="min-w-full border border-gray-700 font-semibold text-center">
              <thead className="bg-[var(--color-logo1)] text-[var(--color-text-footerP)]">
                <tr>
                  <th className="border border-gray-700 px-4 py-2">Process</th>
                  <th className="border border-gray-700 px-4 py-2">
                    Completion Time (CT)
                  </th>
                  <th className="border border-gray-700 px-4 py-2">
                    Turnaround Time (TAT = CT - AT)
                  </th>
                  <th className="border border-gray-700 px-4 py-2">
                    Waiting Time (WT = TAT - BT)
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {data2.map((row, index) => (
                  <tr key={index} className="">
                    <td className="border border-gray-700 px-4 py-2">
                      {row.process}
                    </td>
                    <td className="border border-gray-700 px-4 py-2">
                      {row.CT}
                    </td>
                    <td className="border border-gray-700 px-4 py-2">
                      {row.TAT}
                    </td>
                    <td className="border border-gray-700 px-4 py-2">
                      {row.WT}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <ul className="text-lg list-disc mb-3">
            <li><span className="font-semibold">Average Turn around Time</span> = 7+2+6/3​=15/3=5ms</li>
            <li><span className="font-semibold">Average Waiting Time</span>= 2+0+2/3=1.33ms</li>
          </ul>

          <h4 className="text-xl font-bold">
            Advantages of Round Robin Scheduling
          </h4>
          <ul className="list-disc mt-2 ml-6">
            <li className="text-lg">
              <span className="font-semibold"></span>Fairness: Each process gets
              an equal share of the CPU.
            </li>
            <li className="text-lg">
              <span className="font-semibold"></span>Simplicity: The algorithm
              is straightforward and easy to implement.
            </li>
            <li className="text-lg">
              <span className="font-semibold"></span>Responsiveness: Round Robin
              can handle multiple processes without significant delays, making
              it ideal for time-sharing systems.
            </li>
            <br />
          </ul>
          <h4 className="text-xl font-bold">
            Disadvantages of Round Robin Scheduling
          </h4>
          <ul className="list-disc mt-2 ml-6">
            <li className="text-lg">
              <span className="font-semibold"></span>Overhead: Switching between
              processes can lead to high overhead, especially if the quantum is
              too small.
            </li>
            <li className="text-lg">
              <span className="font-semibold"></span>Underutilization: If the
              quantum is too large, it can cause the CPU to feel unresponsive as
              it waits for a process to finish its time.
            </li>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default Doc_rr;
