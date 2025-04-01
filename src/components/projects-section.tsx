import React from 'react';
import ProjectCard from './project-card';
import projects from '../data/projects-data'; 

const ProjectsSection: React.FC = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">My Projects</h2>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;