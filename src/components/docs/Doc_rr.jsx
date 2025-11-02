import React from 'react'

const Doc_rr = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold'>Round Robin</h1>
      <p className="text-lg">
        <span className="font-semibold">Round Robin Scheduling</span>  is a method used by operating systems to manage the execution time of multiple processes that are competing for CPU attention. It is called "round robin" because the system rotates through all the processes, allocating each of them a fixed time slice or "quantum", regardless of their priority.
        store.
      </p>
      <p className='text-lg mt-2'>The primary goal of this scheduling method is to ensure that all processes are given an equal opportunity to execute, promoting fairness among tasks.</p>

      <ul className='list-disc mt-2'>
        <li className='text-lg'><span className='font-semibold'></span></li>
        <li className='text-lg'><span className='font-semibold'></span></li>
        <li className='text-lg'><span className='font-semibold'></span></li>
        <li className='text-lg'><span className='font-semibold'></span></li>
        <li className='text-lg'><span className='font-semibold'></span></li>
      </ul>
    </div>
  )
}

export default Doc_rr
