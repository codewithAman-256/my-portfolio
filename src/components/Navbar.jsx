import { useState, useEffect } from "react";
import { Link ,useNavigate } from "react-router-dom";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const navigate = useNavigate();
 
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

  const goHome = () => navigate("/");

  return (
    <nav className="flex flex-wrap justify-between items-center p-4 dark:bg-gray-800 bg-gray-900 text-white ">
      <div className="flex flex-wrap gap-4 sm:gap-6 ">
        <button onClick={goHome}>Aman Baloch</button>
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/projects" className="hover:text-yellow-400">Projects</Link>
        <Link to="/resume" className="hover:text-yellow-400">Resume</Link>
        <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
      </div>
      <button
        onClick={toggleDarkMode}
        className="mt-2 sm:mt-0 px-3 py-1 text-sm sm:text-base bg-gray-700 text-white dark:bg-gray-100 dark:text-black  rounded-full hover:opacity-90 transition"
      >
        {darkMode ? "🔆 Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}
