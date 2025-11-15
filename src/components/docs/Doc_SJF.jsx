import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
  CarouselIndicator,
} from "../motion-primitives/Carousel";
import sjf1 from "../../assets/sjf/step1.webp";
import sjf2 from "../../assets/sjf/step2.webp";
import sjf3 from "../../assets/sjf/step3.webp";
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
      <h1 className="text-xl font-bold">Estimation formula</h1>
      <p className="text-lg font-semibold bg-gray-600 p-3 rounded-xl">
        T n+1 ​ =α⋅t n ​ +(1−α)⋅T n ​
      </p>
      <p className="text-lg mt-2 my-2">
        <h3 className="font-bold">Step-by-Step Execution:</h3> <br />
        <ol className="list-decimal list-inside ml-6">
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

      {/* GANTT CHART */}

      <div className="flex  justify-center">
        <div className="relative w-full max-w-4xl">
          <Carousel>
            <CarouselContent>
              <CarouselItem className="p-4">
                <div className="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">
                  <img src={sjf1} alt="" />
                </div>
              </CarouselItem>
              <CarouselItem className="p-4">
                <div className="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">
                  <img src={sjf2} alt="" />
                </div>
              </CarouselItem>
              <CarouselItem className="p-4">
                <div className="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">
                  <img src={sjf3} alt="" />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselNavigation alwaysShow />
            <CarouselIndicator />
          </Carousel>
        </div>
      </div>

      <p className="font-semibold p-2 text-lg">
        As we know,
        <br />
        <ul className="list-disc ml-5">
          <li>Turnaround Time = Completion Time - Arrival Time</li>
          <li>Waiting Time = Turnaround Time - Busrt Time</li>
        </ul>
      </p>
      <p className="text-lg">
        Now, lets calculate average waiting time and turnaround time
      </p>
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full border border-gray-700 text-center ">
          <thead>
            <tr className="bg-[var(--color-logo1)] text-[var(--color-text-footerP)]">
              <th className="px-4 py-2 border border-gray-700">Process</th>
              <th className="px-4 py-2 border border-gray-700">
                Arrival Time <br />
                (AT)
              </th>
              <th className="px-4 py-2 border border-gray-700">
                Burst Time <br />
                (BT)
              </th>
              <th className="px-4 py-2 border border-gray-700">
                Completion Time (CT)
              </th>
              <th className="px-4 py-2 border border-gray-700">
                Turn Around Time (TAT)
              </th>
              <th className="px-4 py-2 border border-gray-700">
                Waiting Time <br /> (WT)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="px-4 py-2 border border-gray-700 font-semibold">
                p1
              </td>
              <td className="px-4 py-2 border border-gray-700">0</td>
              <td className="px-4 py-2 border border-gray-700">6</td>
              <td className="px-4 py-2 border border-gray-700">6</td>
              <td className="px-4 py-2 border border-gray-700">6-0=6</td>
              <td className="px-4 py-2 border border-gray-700">6-6=0</td>
            </tr>

            <tr className="">
              <td className="px-4 py-2 border border-gray-700 font-semibold">
                p2
              </td>
              <td className="px-4 py-2 border border-gray-700">2</td>
              <td className="px-4 py-2 border border-gray-700">8</td>
              <td className="px-4 py-2 border border-gray-700">17</td>
              <td className="px-4 py-2 border border-gray-700">17-2=15</td>
              <td className="px-4 py-2 border border-gray-700">15-8=7</td>
            </tr>
            <tr className="">
              <td className="px-4 py-2 border border-gray-700 font-semibold">
                p3
              </td>
              <td className="px-4 py-2 border border-gray-700">4</td>
              <td className="px-4 py-2 border border-gray-700">3</td>
              <td className="px-4 py-2 border border-gray-700">9</td>
              <td className="px-4 py-2 border border-gray-700">9-4=5</td>
              <td className="px-4 py-2 border border-gray-700">5-3=2</td>
            </tr>
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

      <h4 className="text-xl font-bold my-3">Implementation of SJF</h4>
      <p className="text-lg">
        <span className="font-semibold">step 1: </span>Input number of processes
        and their burst times (arrival time too, if it’s non-preemptive with
        arrivals).
      </p>
      <p className="text-lg">
        <span className="font-semibold">step 2: </span>Sort processes by burst
        time (if same, use arrival order).
      </p>
      <p className="text-lg">
        <span className="font-semibold">step 3: </span>Start with the process
        having the shortest burst time.
      </p>
      <p className="text-lg">
        <span className="font-semibold">step 4: </span>Calculate Completion Time
        = Start Time + Burst Time.
      </p>
      <p className="text-lg">
        <span className="font-semibold">step 5: </span>Calculate Turnaround Time
        = Completion Time − Arrival Time.
      </p>
      <p className="text-lg">
        <span className="font-semibold">step 6: </span>Calculate Waiting Time =
        Turnaround Time − Burst Time.
      </p>
      <p className="text-lg">
        <span className="font-semibold">step 7: </span>Repeat until all
        processes are completed.
      </p>
      <p className="text-lg">
        <span className="font-semibold">step 8: </span>Compute average waiting
        time and turnaround time.
      </p>
      <p className="text-lg">
        <span className="font-semibold">step 9: </span>Display completion,
        waiting, and turnaround times for each process along with averages.
      </p>

      <h4 className="text-xl font-bold my-3">
        Advantages of SJF Scheduling
      </h4>
      <ul className="list-disc mt-2 ml-6">
        <li className="text-lg">
          <span className="font-semibold"></span>SJF is better than the First come first serve(FCFS) algorithm as it reduces the average waiting time.
        </li>
        <li className="text-lg">
          <span className="font-semibold"></span>SJF is generally used for long term scheduling.
        </li>
        <li className="text-lg">
          <span className="font-semibold"></span>It is suitable for the jobs running in batches, where run times are already known.
        </li>
        <li className="text-lg">
          <span className="font-semibold"></span>SJF is probably optimal in terms of average Turn Around Time (TAT).
        </li>
        <br />
      </ul>
      <h4 className="text-xl font-bold">
        Disadvantages of SJF Scheduling
      </h4>
      <ul className="list-disc mt-2 ml-6">
        <li className="text-lg">
          <span className="font-semibold"></span>SJF may cause very long turn-around times or starvation.
        </li>
        <li className="text-lg">
          <span className="font-semibold"></span>In SJF job completion time must be known earlier.
        </li>
        <li className="text-lg">
          <span className="font-semibold"></span>Many times it becomes complicated to predict the length of the upcoming CPU request.
        </li>
      </ul>
    </div>
  );
};

export default Doc_SJF;
