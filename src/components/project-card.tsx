import React from "react";
import { Github, Globe } from "lucide-react";
import { ProjectCardProps } from "../types/project";

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { gifUrl, title, description, technologies, githubUrl, liveUrl } =
    project;

  return (
    <div className="project-card">
      {/* Project GIF/Image */}
      <div className="project-image-container">
        <img src={gifUrl} alt={`${title} preview`} className="project-image" />
      </div>

      {/* Project Title */}
      <h3 className="project-title">{title}</h3>

      {/* Project Description */}
      <p className="project-description">{description}</p>

      {/* Technology Tags */}
      <div className="technology-tags">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>

      {/* Link Buttons - only shown if URLs are provided */}
      <div className="project-links">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link github-link"
          >
            <Github className="link-icon" />
            <span>GitHub</span>
          </a>
        )}

        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link live-link"
          >
            <Globe className="link-icon" />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
