import React,{useRef} from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
 


  return (
     <motion.div
      className="text-center  space-y-6 sm:space-y-8"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.6 }}
    >
      <img
        src="https://avatars.githubusercontent.com/u/9919?v=4"
        alt="profile"
        className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-yellow-400"
      />

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Hi — I'm Aman</h1>
      <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed">
        MERN Stack Developer. I build responsive web apps with React, Vite, and Tailwind CSS.
      </p>

      <motion.div
        className="flex gap-3 justify-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Link
          to="/resume"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Download Resume
        </Link>

        
      </motion.div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Skills</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">React, Node.js, Express, MongoDB, Tailwind</p>
        </div>

        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Current Work</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Building portfolio features + practicing interviews</p>
        </div>
      </div>
    </motion.div>
  
  );
}
