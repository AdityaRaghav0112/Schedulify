import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
  CarouselIndicator,
} from "../motion-primitives/Carousel";
import { motion } from "framer-motion";
import fcfs1 from "../../assets/fcfs/step1.webp";
import fcfs2 from "../../assets/fcfs/step2.webp";
import fcfs3 from "../../assets/fcfs/step3.webp";
import fcfs4 from "../../assets/fcfs/step4.webp";
import fcfs1a from "../../assets/fcfs/step1a.webp";
import fcfs2a from "../../assets/fcfs/step2a.webp";
import fcfs3a from "../../assets/fcfs/step3a.webp";
import fcfs4a from "../../assets/fcfs/step4a.webp";
const Doc_fcfs = () => {
  const data = [
    { process: "P1", AT: 0, BT: 5, CT: 5, TAT: "5 - 0 = 5", WT: "5 - 5 = 0" },
    { process: "P2", AT: 0, BT: 3, CT: 8, TAT: "8 - 0 = 8", WT: "8 - 3 = 5" },
    {
      process: "P3",
      AT: 0,
      BT: 8,
      CT: 16,
      TAT: "16 - 0 = 16",
      WT: "16 - 8 = 8",
    },
  ];

  const data2 = [
    { process: "P2", CT: "3 ms", TAT: "3 ms", WT: "0 ms" },
    { process: "P1", CT: "8 ms", TAT: "6 ms", WT: "1 ms" },
    { process: "P3", CT: "12 ms", TAT: "8 ms", WT: "4 ms" },
  ];
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h1 className="text-2xl font-bold">FCFS - First Come First Serve</h1>
          <p className="text-lg">
            <span className="font-semibold">First Come, First Serve</span> is
            one of the simplest types of CPU scheduling algorithms. It is
            exactly what it sounds like: <br /> processes are attended to in the
            order in which they arrive in the ready queue, much like customers
            lining up at a grocery store.
          </p>

          <p className="text-lg">
            FCFS Scheduling is a non-preemptive algorithm, meaning once a
            process starts running, it cannot be stopped until it voluntarily
            relinquishes the CPU, typically when it terminates or performs I/O.
            This method schedules processes in the order they arrive, without
            considering priority or other factors.
          </p>

          <h1 className="text-2xl font-bold mt-5">How Does FCFS Work?</h1>
          <h3 className="text-lg">
            The machines of FCFS are straightforward:{" "}
          </h3>
          <p className="text-lg mt-2">
            <span className="font-semibold">1.Arrival: </span>The process enters
            the system and are placed in a queue in the order they arrive <br />
            <span className="font-semibold">2.Execution: </span>The CPU takes
            the first process from the front of the queue, executes it until it
            is complete, and then removes it from the queue. <br />
            <span className="font-semibold">3.Repeat: </span> The CPU takes the
            next process in the queue and repeats the execution process.
            <br />
          </p>

          <p className="text-lg mt-2">
            This continues until there are no more process left in the queue.
          </p>

          <h1 className="text-2xl font-bold mt-5">
            Examples of FCFS CPU scheduling:{" "}
          </h1>
          <p className="text-lg">
            To understand the First Come, First Served (FCFS) scheduling
            algorithm effectively, we'll use two examples -
          </p>

          <ul className="list-disc text-lg ml-6">
            <li>one where all processes arrive at the same time,</li>
            <li>another where processes arrive at different times.</li>
          </ul>

          <p className="text-lg mt-2">
            We'll create Gantt charts for both scenarios and calculate the
            turnaround time and waiting time for each process.
          </p>

          <h1 className="text-2xl font-bold mt-5">
            Scenario1: Processes with same arrival time:
          </h1>
          <p className="text-lg ">
            Consider the following table of arrival time and burst time for
            three processes P1, P2 and P3
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
                  <td className="px-4 py-2 border border-gray-700">0</td>
                  <td className="px-4 py-2 border border-gray-700">5</td>
                </tr>
                <tr className="">
                  <td className="px-4 py-2 border border-gray-700 font-semibold">
                    p2
                  </td>
                  <td className="px-4 py-2 border border-gray-700">0</td>
                  <td className="px-4 py-2 border border-gray-700">3</td>
                </tr>
                <tr className="">
                  <td className="px-4 py-2 border border-gray-700 font-semibold">
                    p3
                  </td>
                  <td className="px-4 py-2 border border-gray-700">0</td>
                  <td className="px-4 py-2 border border-gray-700">8</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-bold mt-2">step-by-step execution: </p>
          <ul className="list-decimal text-lg ml-6">
            <li>
              P1 will start first and run for 5 units of time (from 0 to 5).
            </li>
            <li>
              P2 will start next and run for 3 units of time (from 5 to 8).
            </li>
            <li>P3 will run last, executing for 8 units (from 8 to 16).</li>
          </ul>

          <p className="font-bold mt-3">Gantt chart: </p>
          <div className="flex  justify-center">
            <div className="relative w-full max-w-4xl">
              <Carousel>
                <CarouselContent>
                  <CarouselItem className="p-4">
                    <div className="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">
                      <img src={fcfs1a} alt="" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="p-4">
                    <div className="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">
                      <img src={fcfs2a} alt="" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="p-4">
                    <div className="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">
                      <img src={fcfs3a} alt="" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="p-4">
                    <div className="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">
                      <img src={fcfs4} alt="" />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselNavigation alwaysShow />
                <CarouselIndicator />
              </Carousel>
            </div>
          </div>
          <p className="text-lg">
            Now let's calculate average waiting time and turn around time:{" "}
          </p>
          <p className="text-lg font-semibold">
            Turnaround Time = Completion Time - Arrival Time <br />
            Waiting Time = Turnaround Time - Burst Time
          </p>
          <p className="text-lg">
            <span className="font-bold">AT:</span> Arrival Time <br />
            <span className="font-bold">BT: </span>Burst Time <br />
            <span className="font-bold">TAT:</span> Turnaround Time <br />
            <span className="font-bold">WT:</span> Waiting Time
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

          <ul className="mt-3 list-disc ml-6">
            <li className="text-lg">
              <span className="font-semibold">Average Turnaround Time</span> =
              9.67
            </li>
            <li className="text-lg">
              <span className="font-semibold">Average Waiting Time: </span> =
              4.33
            </li>
          </ul>

          <h1 className="text-2xl font-bold mt-5">
            Scenario 2: Processes with Different Arrival Time
          </h1>
          <p className="text-lg ">
            Consider the following table of arrival time and burst time for
            three processes P1, P2 and P3
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
                  <td className="px-4 py-2 border border-gray-700">5</td>
                  <td className="px-4 py-2 border border-gray-700">2</td>
                </tr>
                <tr className="">
                  <td className="px-4 py-2 border border-gray-700 font-semibold">
                    p2
                  </td>
                  <td className="px-4 py-2 border border-gray-700">3</td>
                  <td className="px-4 py-2 border border-gray-700">0</td>
                </tr>
                <tr className="">
                  <td className="px-4 py-2 border border-gray-700 font-semibold">
                    p3
                  </td>
                  <td className="px-4 py-2 border border-gray-700">4</td>
                  <td className="px-4 py-2 border border-gray-700">4</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="font-bold mt-2">step-by-step execution: </p>
          <ul className="list-disc text-lg ml-6">
            <li>
              P2 arrives at time 0 and runs for 3 units, so its completion time
              is: Completion Time of P2=0+3=3
            </li>
            <li>
              P1 arrives at time 2 but has to wait for P2 to finish. P1 starts
              at time 3 and runs for 5 units. Its completion time is: Completion
              Time of P1=3+5=8
            </li>
            <li>
              P3 arrives at time 4 but has to wait for P1 to finish. P3 starts
              at time 8 and runs for 4 units. Its completion time is: Completion
              Time of P3=8+4=12
            </li>
          </ul>

          <p className="font-bold mt-3">Gantt chart: </p>
          <div className="flex  justify-center">
            <div className="relative w-full max-w-4xl">
              <Carousel>
                <CarouselContent>
                  <CarouselItem className="p-4">
                    <div className="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">
                      <img src={fcfs1} alt="" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="p-4">
                    <div className="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">
                      <img src={fcfs2} alt="" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="p-4">
                    <div className="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">
                      <img src={fcfs3} alt="" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="p-4">
                    <div className="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">
                      <img src={fcfs4a} alt="" />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselNavigation alwaysShow />
                <CarouselIndicator />
              </Carousel>
            </div>
          </div>

          <p>Now let's calculate average waiting time and turn around time: </p>
          <div className="overflow-x-auto">
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
          <ul className="mt-3 list-disc ml-6">
            <li className="text-lg">
              <span className="font-semibold">Average Turnaround Time</span> =
              5.67
            </li>
            <li className="text-lg">
              <span className="font-semibold">Average Waiting Time: </span> =
              1.67
            </li>
          </ul>

          <h1 className="text-2xl font-bold mt-5">Advantages of FCFS</h1>
          <ul className="mt-3 list-disc ml-6">
            <li className="text-lg">
              The simplest and basic form of CPU Scheduling algorithm
            </li>
            <li className="text-lg">
              Every process gets a chance to execute in the order of its
              arrival. This ensures that no process is arbitrarily prioritized
              over another.
            </li>
            <li className="text-lg">
              Easy to implement, it doesn't require complex data structures.
            </li>
            <li className="text-lg">
              Since processes are executed in the order they arrive, there’s no
              risk of starvation
            </li>
            <li className="text-lg">
              It is well suited for batch systems where the longer time periods
              for each process are often acceptable.
            </li>
          </ul>

          <h1 className="text-2xl font-bold mt-5">Disadvantages of FCFS</h1>
          <ul className="mt-3 list-disc ml-6">
            <li className="text-lg">
              As it is a Non-preemptive CPU Scheduling Algorithm, FCFS can
              result in long waiting times, especially if a long process arrives
              before a shorter one. This is known as the convoy effect, where
              shorter processes are forced to wait behind longer processes,
              leading to inefficient execution.
            </li>
            <li className="text-lg">
              The average waiting time in the FCFS is much higher than in the
              others
            </li>
            <li className="text-lg">
              Since FCFS processes tasks in the order they arrive, short jobs
              may have to wait a long time if they arrive after longer tasks,
              which leads to poor performance in systems with a mix of long and
              short tasks.
            </li>
            <li className="text-lg">
              Processes that are at the end of the queue, have to wait longer to
              finish.
            </li>
            <li className="text-lg">
              It is not suitable for time-sharing operating systems where each
              process should get the same amount of CPU time.
            </li>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default Doc_fcfs;
