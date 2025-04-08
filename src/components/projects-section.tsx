import React from 'react';
import ProjectCard from './project-card';
import projects from '../data/projects-data'; 

const ProjectsSection: React.FC = () => {
  return (
    <section className="projects-section py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-3xl font-bold mb-12 text-center">My Projects</h2>
        
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
