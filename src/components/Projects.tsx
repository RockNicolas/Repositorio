import React from 'react';
import '../styles/Projects.css';

interface Project {
  name: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    name: 'Projeto 1',
    description: 'Descrição do projeto 1.',
    link: '#',
  },
  {
    name: 'Projeto 2',
    description: 'Descrição do projeto 2.',
    link: '#',
  },
  {
    name: 'Projeto 3',
    description: 'Descrição do projeto 3.',
    link: '#',
  },
];

const Projects: React.FC = () => {
  return (
    <section className="projects">
      <h2>Meus Projetos</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Projeto</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
