import React from "react";
import { Github, Globe } from "lucide-react";
import { ProjectCardProps } from "../types/project";
import "../styles/project-card.css";

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { gifUrl, title, description, technologies, githubUrl, liveUrl } =
    project;

  // Check if the project is in progress
  const isInProgress = technologies.includes("In Progress");

  return (
    <div className="project-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      {/* Project GIF/Image */}
      <div className="project-image-container relative pb-[56.25%] overflow-hidden">
        <img
          src={gifUrl}
          alt={`${title} preview`}
          className="project-image absolute top-0 left-0 w-full h-full object-cover"
          loading="lazy" 
        />
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col flex-grow">
        {/* In Progress indicator */}
        <div className="flex items-center mb-3">
          <h3 className="project-title text-xl font-bold">{title}</h3>
          {isInProgress && (
            <span className="in-progress-badge ml-2 px-2 py-1 text-xs rounded-md">
              In Progress
            </span>
          )}
        </div>

        {/* Project Description */}
        <p className="project-description mb-4 flex-grow">{description}</p>

        {/* Technology Tags */}
        <div className="technology-tags flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className={`tech-tag px-3 py-1 text-sm rounded-full border inline-block ${
                tech === "In Progress" ? "tech-tag-in-progress" : ""
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Link Buttons -> only shown if URLs are provided */}
        <div className="project-links flex gap-4 mt-auto">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link github-link flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 flex-grow text-center justify-center"
            >
              <Github className="link-icon w-5 h-5" />
              <span>GitHub</span>
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link live-link flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 flex-grow text-center justify-center"
            >
              <Globe className="link-icon w-5 h-5" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
