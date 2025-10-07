import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 dark:bg-gray-900 text-white ">
      <div className="flex gap-6">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/projects" className="hover:text-yellow-400">Projects</Link>
        <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
      </div>
      <button
        onClick={toggleDarkMode}
        className="bg-gray-700 text-white dark:bg-gray-100 dark:text-black px-3 py-1 rounded-full hover:bg-gray-600"
      >
        {darkMode ? "🔆 Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}
