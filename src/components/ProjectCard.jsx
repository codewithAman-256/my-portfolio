import React from "react";

export default function ProjectCard({ title, description, link }) {
  return (
    <div
      className="w-72 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 hover:scale-105 transform transition"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="norefferel"
        className="text-center dark:text-yellow-200 hover:text-green-500 dark:hover:text-blue-500 text-gray-600 font-bold"
      >
        🔗 Tap here to see...
      </a>
    </div>
  );
}
