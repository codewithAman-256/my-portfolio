import React from "react";

export default function ProjectCard({ title, description, link }) {
  return (
    <div
      className="
        p-6 
        bg-white dark:bg-gray-800 
        rounded-2xl 
        shadow 
        hover:shadow-xl 
        transition-all 
        duration-300 
        hover:-translate-y-2
        flex 
        flex-col 
        justify-between 
        h-full
      "
    >
      <div>
        <h3 className="text-xl font-semibold mb-3 leading-snug">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {description}
        </p>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="
          mt-auto 
          inline-block
          text-gray-700 dark:text-yellow-300 
          hover:text-green-600 dark:hover:text-blue-400 
          font-semibold 
          text-sm
        "
      >
        🔗 Tap here to see...
      </a>
    </div>
  );
}
