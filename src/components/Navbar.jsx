import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const [open, setOpen] = useState(false); // ❤️ mobile menu toggle
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
    <nav className="sticky top-0 z-50 bg-gray-900 dark:bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <button 
          onClick={goHome} 
          className="text-lg font-bold hover:text-yellow-400 transition"
        >
          Aman Baloch
        </button>

        {/* Hamburger Button (Mobile Only) */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden text-2xl focus:outline-none"
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-6 items-center">
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link to="/projects" className="hover:text-yellow-400 transition">Projects</Link>
          <Link to="/resume" className="hover:text-yellow-400 transition">Resume</Link>
          <Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link>

          <button
            onClick={toggleDarkMode}
            className="px-3 py-1 bg-gray-700 dark:bg-gray-200 dark:text-black text-sm rounded-full hover:opacity-90 transition"
          >
            {darkMode ? "🔆 Light" : "🌙 Dark"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="sm:hidden bg-gray-800 text-white px-4 py-3 space-y-3">
          <Link onClick={() => setOpen(false)} to="/" className="block hover:text-yellow-400">Home</Link>
          <Link onClick={() => setOpen(false)} to="/projects" className="block hover:text-yellow-400">Projects</Link>
          <Link onClick={() => setOpen(false)} to="/resume" className="block hover:text-yellow-400">Resume</Link>
          <Link onClick={() => setOpen(false)} to="/contact" className="block hover:text-yellow-400">Contact</Link>

          <button
            onClick={toggleDarkMode}
            className="px-3 py-1 bg-gray-700 dark:bg-gray-200 dark:text-black text-sm rounded-full hover:opacity-90 transition w-full text-center"
          >
            {darkMode ? "🔆 Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
}
