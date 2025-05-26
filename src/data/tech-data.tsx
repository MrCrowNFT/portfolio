import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";

import {
  SiTypescript,
  SiDjango,
  SiJsonwebtokens,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiJest,
  SiStripe,
} from "react-icons/si";

// Technology categories
export type TechCategory =
  | "frontend"
  | "backend"
  | "language"
  | "database"
  | "styling"
  | "testing"
  | "devops"
  | "payment"
  | "auth"
  | "cloud";

export interface Technology {
  name: string;
  icon: React.ReactNode;
  category: TechCategory;
}

// Technologies organized by logical grouping
export const technologies: Technology[] = [
  // Languages
  {
    name: "JavaScript",
    icon: <FaJs />,
    category: "language",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    category: "language",
  },
  {
    name: "Python",
    icon: <FaPython />,
    category: "language",
  },
  {
    name: "Golang",
    icon: <FaGolang />,
    category: "language",
  },

  // Frontend Framework
  {
    name: "React",
    icon: <FaReact />,
    category: "frontend",
  },
  {
    name: "HTML",
    icon: <FaHtml5 />,
    category: "frontend",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    category: "styling",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    category: "styling",
  },

  // Backend
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    category: "backend",
  },
  {
    name: "Express",
    icon: <SiExpress />,
    category: "backend",
  },
  {
    name: "Django",
    icon: <SiDjango />,
    category: "backend",
  },

  // Auth
  {
    name: "JWT",
    icon: <SiJsonwebtokens />,
    category: "auth",
  },

  // Databases
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    category: "database",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    category: "database",
  },

  // Testing & DevOps
  {
    name: "Jest",
    icon: <SiJest />,
    category: "testing",
  },
  {
    name: "Docker",
    icon: <FaDocker />,
    category: "devops",
  },

  // Payment
  {
    name: "Stripe",
    icon: <SiStripe />,
    category: "payment",
  },

  {
    name: "AWS S3",
    icon: <FaAws />,
    category: "cloud",
  },
];

// Helper function to get technologies by category
export const getTechByCategory = (category: TechCategory): Technology[] => {
  return technologies.filter((tech) => tech.category === category);
};

export default technologies;
