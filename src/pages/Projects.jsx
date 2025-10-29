import AOS from "aos";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "📝 Todo App",
    description: "Dynamic React Task Manager with dark mode, animations, and progress tracking.",
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white  text-center  space-y-6 sm:space-y-8 "
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">My Projects 💻</h2>
      <div className="text-base sm:text-lg lg:text-xl leading-relaxed grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div data-aos="fade-up" key={i}>
            <ProjectCard {...p} />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
