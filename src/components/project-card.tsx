import React from "react";
import { Github, Globe } from "lucide-react";
import { ProjectCardProps } from "../types/project";

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const { 
      gifUrl, 
      title,
      description, 
      technologies, 
      githubUrl, 
      liveUrl 
    } = project;
  
    return (
      <div className="project-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
        {/* Project GIF/Image - 16:9 aspect ratio container */}
        <div className="project-image-container relative pb-[56.25%] overflow-hidden">
          <img 
            src={gifUrl} 
            alt={`${title} preview`} 
            className="project-image absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
        
        {/* Content Container */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Project Title */}
          <h3 className="project-title text-xl font-bold mb-3">{title}</h3>
          
          {/* Project Description */}
          <p className="project-description mb-4 flex-grow">{description}</p>
          
          {/* Technology Tags */}
          <div className="technology-tags flex flex-wrap gap-2 mb-6">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="tech-tag px-3 py-1 text-sm rounded-full border inline-block"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* Link Buttons - only shown if URLs are provided */}
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