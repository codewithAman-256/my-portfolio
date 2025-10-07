import React from "react";
import { delay, motion } from "framer-motion";

export default function Home() {
  return (
    <div className="text-center py-16 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white min-h-[80vh] transition">
      <motion.img
        src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
        alt="profile"
        className="mx-auto rounded-full w-40 h-40 mb-6 border-4 border-gray-700"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.h1
        className="text-4xl font-bold text-gray-800 dark:text-white mb-2"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Aman Baloch
      </motion.h1>
      <motion.p
        className="text-xl text-gray-600 dark:text-gray-300 mb-4"
        initial={{ x: -30, opacity: 0.6 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 1 }}
      >
        Full Stack MERN Developer 💻
      </motion.p>
      <motion.p
        className="max-w-2xl mx-auto text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Passionate about building modern web applications with React, Node.js,
        Express, and MongoDB. Always exploring AI integration and beautiful UI
        design.
      </motion.p>

      <div
        className="mt-6 flex justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <span className="bg-gray-800 dark:text-gray-800 dark:bg-white text-white px-4 py-2 rounded-lg">
          React
        </span>
        <span className="bg-gray-800 dark:text-gray-800 dark:bg-white bg text-white px-4 py-2 rounded-lg">
          Node.js
        </span>
        <span className="bg-gray-800 text-white dark:text-gray-800 dark:bg-white px-4 py-2 rounded-lg">
          MongoDB
        </span>
      </div>
    </div>
  );
}
