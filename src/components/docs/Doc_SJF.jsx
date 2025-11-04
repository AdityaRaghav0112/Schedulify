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
        <span className="font-semibold">Shortest Job First (SJF) or Shortest Job Next (SJN)</span> is a scheduling process that selects the waiting process with the smallest execution time to execute next. This scheduling method may or may not be preemptive. Significantly reduces the average waiting time for other processes waiting to be executed.
      </p>
      <h2 className="text-2xl font-bold mt-5">Estimation Formula Concept in SJF Scheduling</h2>
      <p className="text-lg">
       The Shortest Job First (SJF) Scheduling algorithm selects the process with the smallest burst time for execution. But in some cases, the exact burst time of a process may not be known in advance. In such scenarios, an estimation formula is used to predict the next burst time based on the previous burst times.
    
      </p>
      <p>Where : <br></br>

        <ul className="list-disc text-lg ml-6" >
        <li>Tn+1​: Predicted burst time for the next process.</li>
        <li>Tn: Previously predicted burst time.</li>
        <li>tn: Actual burst time of the previous process.</li>
        <li> α: Smoothing factor (0 ≤ α ≤ 1).</li>
      </ul>
      </p>
      <h2 className="text-2xl font-bold mt-5 ">Characteristics of SJF Scheduling </h2>
      <ul className="list-disc text-lg ml-6">
        <li>Shortest Job first has the advantage of having a minimum average waiting time among all operating system scheduling algorithms.</li>
        <li>It is associated with each task as a unit of time to complete.</li>
        <li>It may cause starvation if shorter processes keep coming. This problem can be solved using the concept of ageing.</li>
        
      </ul>
      <h3 className="text-2xl font-bold mt-5">Example :  </h3>
      <h2 className="text-2xl font-bold mt-5">Implementation of SJF Scheduling </h2>
      <p className="text-lg mt-2">
      Step 1: Input number of processes and their burst times (arrival time too, if it’s non-preemptive with arrivals).<br/>
      Step 2: Sort processes by burst time (if same, use arrival order).<br/>
      Step 3: Start with the process having the shortest burst time.<br/>
      Step 4: Calculate Completion Time = Start Time + Burst Time.<br/>
      Step 5: Calculate Turnaround Time = Completion Time − Arrival Time.<br/>
      Step 6: Calculate Waiting Time = Turnaround Time − Burst Time.<br/>
      Step 7: Repeat until all processes are completed.<br/>
      Step 8: Compute average waiting time and turnaround time.<br/>
      Step 9: Display completion, waiting, and turnaround times for each process along with averages.<br/>
      </p>
      <h2 className="text-2xl font-bold mt-5">Advantages of SJF Scheduling </h2>
      <p>
        <ul className="list-disc text-lg ml-6">
        <li>SJF is better than the First come first serve(FCFS) algorithm as it reduces the average waiting time.</li>
        <li>SJF is generally used for long term scheduling.</li>
        <li>It is suitable for the jobs running in batches, where run times are already known.</li>
        <li>SJF is probably optimal in terms of average Turn Around Time (TAT).</li>
      </ul>
      </p>
      <h2 className="text-2xl font-bold mt-5">Disdvantages of SJF Scheduling </h2>
      <p>
        <ul className="list-disc text-lg ml-6">
        <li>SJF may cause very long turn-around times or starvation.</li>
        <li>In SJF job completion time must be known earlier..</li>
        <li>Many times it becomes complicated to predict the length of the upcoming CPU request.</li>
        
      </ul>
      </p>
     
    </div>
  );
};

export default Doc_SJF;
