import React from "react";

export default function ProjectCard({ title, description, link }) {
  return (
    <div
      className="p-5 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1"
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
