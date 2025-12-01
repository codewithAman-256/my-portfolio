import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <motion.div
      className="text-center space-y-6 sm:space-y-8 px-4 sm:px-6 lg:px-10 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.6 }}
    >
      {/* Profile Photo */}
      <img
        src="AmanKhan.jpg"
        alt="profile"
        className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-yellow-400 object-cover"
      />

      {/* Name + Tagline */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
        Hi — I'm Aman
      </h1>

      <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
        MERN Stack Developer. I build responsive web apps with React, Node.js,
        Express, Vite, and Tailwind CSS.
      </p>

      {/* Resume Button */}
      <motion.div
        className="flex justify-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Link
          to="/resume"
          className="px-5 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm sm:text-base"
        >
          Download Resume
        </Link>
      </motion.div>

      {/* Skills + Current Work Section */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Skills Box */}
        <div className="p-5 bg-white dark:bg-gray-800 rounded-lg shadow text-left">
          <h3 className="font-semibold mb-3 text-lg">Skills</h3>

          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">

            <p className="font-semibold">💻 Frontend</p>
            <p>⚛️ React.js (Hooks, Context API, Routing)</p>
            <p>📘 JavaScript (ES6+)</p>
            <p>🎨 Tailwind CSS / Bootstrap</p>
            <p>📱 Responsive UI Design</p>

            <p className="font-semibold mt-3">🖥 Backend</p>
            <p>🟩 Node.js</p>
            <p>🚀 Express.js</p>
            <p>🔌 REST APIs</p>
            <p>🔐 JWT Auth + bcrypt</p>
            <p>🛂 RBAC Access Control</p>

            <p className="font-semibold mt-3">🗄 Database</p>
            <p>🍃 MongoDB / Mongoose</p>
            <p>📊 Aggregations / Pagination / CRUD</p>

            <p className="font-semibold mt-3">🛠 Tools & DevOps</p>
            <p>🐙 Git & GitHub</p>
            <p>📬 Postman</p>
            <p>☁️ Render / Vercel</p>
            <p>📝 VS Code</p>

            <p className="font-semibold mt-3">✨ Other Skills</p>
            <p>🧠 Problem Solving</p>
            <p>🏗 Clean Architecture</p>
            <p>🔍 Debugging & Testing</p>
            <p>📚 DSA Fundamentals</p>
          </div>
        </div>

        {/* Current Work */}
        <div className="p-5 bg-white dark:bg-gray-800 rounded-lg shadow text-left">
          <h3 className="font-semibold mb-3 text-lg">Current Work</h3>

          <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
            <p>
              • Designing and developing full-stack web applications using the MERN stack with production-level architecture.
            </p>

            <p>
              • Building scalable REST APIs, JWT authentication, admin dashboards, charts, and optimized database models.
            </p>

            <p>
              • Enhancing React state management using Context API, custom hooks, and modular UI structure.
            </p>

            <p>
              • Deploying cloud-hosted projects and learning modern frameworks & best practices.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
