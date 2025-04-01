import { Project } from "../types/project";

//example data
//todo add my projects
const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    gifUrl: "/path/to/ecommerce-dashboard.gif",
    description:
      "A comprehensive dashboard for e-commerce analytics, featuring real-time data visualization and customizable reports.",
    technologies: ["React", "Node.js", "Chart.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/yourusername/ecommerce-dashboard",
    liveUrl: "https://ecommerce-dashboard-demo.com",
  },
  {
    id: 2,
    title: "Weather App",
    gifUrl: "/path/to/weather-app.gif",
    description:
      "A weather application that provides current conditions and forecasts based on user location or search.",
    technologies: ["JavaScript", "HTML5", "CSS3", "OpenWeather API"],
    githubUrl: "https://github.com/yourusername/weather-app",
    // No liveUrl provided, so the Live Demo button won't appear
  },
  {
    id: 3,
    title: "Portfolio Website",
    gifUrl: "/path/to/portfolio.gif",
    description: "Personal portfolio website showcasing projects and skills.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    // No githubUrl provided, so the GitHub button won't appear
    liveUrl: "https://yourportfolio.com",
  },
];

export default projects;
