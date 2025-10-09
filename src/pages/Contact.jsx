import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
      className="text-center max-w-xl max-auto bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white"
    >
      <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-300">
        
        Contact Me
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Want to collaborate or hire? Send an email or connect on LinkedIn.
      </p>
      <div className="flex flex-col items-center gap-3 text-lg">
        <a
          href="mailto:balochaman256@gmail.com"
          className="text-blue-600 dark:text-yellow-400"
        >
          📧 balochaman256@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/aman-baloch-028819251/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:text-blue-800 dark:text-yellow-400"
        >
          💼 LinkedIn
        </a>
        <a
          href="https://github.com/codewithAman-256"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 dark:text-yellow-400"
        >
          💻 Github
        </a>
      </div>
    </motion.div>
  );
}
