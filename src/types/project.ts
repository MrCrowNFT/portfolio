export interface Project {
  id: number;
  title: string;
  gifUrl: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface ProjectCardProps {
  project: Project;
}
