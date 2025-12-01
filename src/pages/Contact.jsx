import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
      className="text-center   space-y-6 sm:space-y-8 "
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-300">
        
        Contact Me
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed">
        Want to collaborate or hire? Send an email or connect on LinkedIn.
      </p>
      <div className="flex flex-col items-center gap-3 text-lg">
        <a
          href="mailto:balochaman256@gmail.com"
          className="text-blue-600 dark:text-yellow-400 hover:opacity-90"
        >
          📧 balochaman256@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/aman-baloch-028819251/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:opacity-90 dark:text-yellow-400"
        >
          💼 LinkedIn
        </a>
        <a
          href="https://github.com/codewithAman-256"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 dark:text-yellow-400 hover:opacity:90"
        >
          💻 Github
        </a>
      </div>
    </motion.div>
  );
}
