import React from "react";

export default function Contact() {
  return (
    <div className="text-center py-16 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white min-h-[80vh]">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-300">📞 Contact Me</h2>
      <p className="text-gray-600 mb-8">Let's connect and collaborate!</p>
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
    </div>
  );
}
