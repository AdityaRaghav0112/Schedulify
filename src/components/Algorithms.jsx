import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Doc_fcfs from "./docs/Doc_fcfs";
import Doc_rr from "./docs/Doc_rr";
import Doc_sjf from "./docs/Doc_SJF";

const Algorithms = () => {
  const algo = [
    { id: 1, name: "FCFS", component: <Doc_fcfs /> },
    { id: 2, name: "Round-Robin", component: <Doc_rr /> },
    { id: 3, name: "SJF", component: <Doc_sjf /> },
  ];

  const [selectedAlgo, setSelectedAlgo] = useState(null);

  return (
    <div className="max-w-screen-2xl mx-auto px-3 sm:px-4 lg:px-6 py-6 md:py-8">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h1 className="text-3xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r p-3 from-[var(--color-logo1)] to-[var(--color-logo2)] bg-clip-text text-transparent">
          Scheduling Algorithms
        </h1>
      </motion.h1>

      {/* Main content area — buttons on left, doc on right */}
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Left panel: Algorithm list */}
        <div className="bg-card border border-border rounded-2xl p-4 shadow-card self-start">
          <ul className="flex flex-col gap-3">
            {algo.map((doc) => (
              <li key={doc.id}>
                <button
                  onClick={() => setSelectedAlgo(doc.name)}
                  className={`text-left px-4 py-2 rounded-lg font-semibold border transition-all duration-200 ${
                    selectedAlgo === doc.name
                      ? "bg-primary-accent text-white dark:text-black border-primary-accent shadow-lg"
                      : "bg-surface border-border hover:border-primary-accent hover:text-primary-accent"
                  }`}
                >
                  {doc.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right panel: Selected documentation */}
        <div className="w-full md:w-2/3 text-text-primary bg-surface border border-border rounded-2xl p-4 shadow-card min-h-[300px]">
          {selectedAlgo ? (
            <>
              {selectedAlgo === "FCFS" && <Doc_fcfs />}
              {selectedAlgo === "Round-Robin" && <Doc_rr />}
              {selectedAlgo === "SJF" && <Doc_sjf />}
            </>
          ) : (
            <p className="text-text-secondary italic">
              Select an algorithm from the left to view its documentation.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Algorithms;
