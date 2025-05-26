import { Project } from "../types/project";
import SoulSyncDemo from "./SoulSyncDemo.gif";
import HiredgeDemo from "./HiredgeDemo.gif";
import TGS from "./TGSScreenshot.png";

const projects: Project[] = [
  {
    id: 1,
    title: "Soulsync",
    gifUrl: SoulSyncDemo,
    description:
      "Soulsync is a mental health and wellness AI-powered app designed to give users a supportive conversational companion available 24/7.",
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Chart.js",
      "Express",
      "MongoDB",
      "OpenAI API",
      "Compromise",
      "Sentiment",
      "Framer Motion",
      "Tailwind",
      "JWT",
      "Jest",
      "RAG",
    ],
    githubUrl: "https://github.com/MrCrowNFT/soulsync",
    liveUrl: "https://soulsync-zeta.vercel.app/",
  },
  {
    id: 2,
    title: "Hiredge",
    gifUrl: HiredgeDemo,
    description:
      "Hiredge AI is an AI-powered resume analysis tool. It uses the OpenAI API to analyze and improve uploaded resumes, in order to assist job seekers in refining their resumes for better job search outcomes.",
    technologies: [
      "Django",
      "Python",
      "HTML",
      "Tailwind",
      "sqlite3",
      "OpenAI API",
      "PyPDF2",
    ],
    githubUrl: "https://github.com/MrCrowNFT/hiredge-ai",
    liveUrl: "https://hiredge-ai.onrender.com",
  },
  {
    id: 3,
    title: "The Geek Shop",
    gifUrl: TGS,
    description:
      "The Geek Shop is a full-stack e-commerce platform with role-based admin dashboard, JWT authentication, dark mode, cart management with Zustand, and protected routes. Still in progress with testing, TypeScript migration, and styling updates.",
    technologies: [
      "In Progress",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind",
      "Zustand",
      "Axios",
      "JWT",
      "Jest",
      "Stripe",
      "AWS S3",
      "ShadCN/UI",
    ],
    githubUrl: "https://github.com/MrCrowNFT/the-geek-shop",
  },
];

export default projects;
