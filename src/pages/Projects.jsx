import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "📝 Todo App",
    description:
      "Dynamic React Task Manager with dark mode, animations, and progress tracking.",
    link: "https://todo-pro-app.netlify.app/",
  },
  {
    title: "📰 News Dashboard",
    description: "Fetches live news using News API with React useEffect.",
    link: "https://react-news-dashboard-app.netlify.app/",
  },
  {
    title: "⛅ Weather App",
    description: "Shows live weather using OpenWeather API.",
    link: "https://react-new-weather-app.netlify.app/",
  },
  {
    title: "👬 Friend List App",
    description:
      "A mini project showing how to add and display friends with useState and conditional UI.",
    link: "https://reactfriendlistapp.netlify.app/",
  },
];

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white px-4 sm:px-8 lg:px-16 py-12 sm:py-16"
    >
      <div className="max-w-7xl mx-auto text-center space-y-6 sm:space-y-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
          My Projects 💻
        </h2>

        <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
          Explore some of my interactive and fully responsive React projects built with modern
          tools and APIs.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {projects.map((p, i) => (
            <div data-aos="fade-up" key={i}>
              <ProjectCard {...p} />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
