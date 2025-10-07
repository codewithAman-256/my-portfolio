import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ProjectCard from "../components/ProjectCard";


const projects = [
    
  {
      title: "📰 News Dashboard",
      description: "Fetches live news using News API with React useEffect.",
      link: "https://react-news-dashboard-app.netlify.app/",
    },
  {
      title: "🌦 Weather App",
      description: "Shows live weather using OpenWeather API.",
      link: "https://react-new-weather-app.netlify.app/",
    },
    {
      title: "👥 Friend List App",
      description: "A mini project showing how to add and display friends with useState and conditional UI.",
      link: "https://reactfriendlistapp.netlify.app/",
    },
];

export default function Projects() {
  useEffect(()=>{
    AOS.init({duration:1000,once:true});
  })
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen py-10 transition-colors duration-500">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects 💻</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((p, i) => (
          
          <div data-aos="fade-up" key={i}>
            <ProjectCard{...p}/>
          </div>
      
        ))}
      </div>
    </div>
  );
}
