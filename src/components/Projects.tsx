import React from 'react';
import '../styles/Projects.css';

interface Project {
  name: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    name: 'CriptoMoeda',
    description: 'Este projeto é um sistema de monitoramento do mercado de criptomoedas desenvolvido com React e TypeScript. Ele utiliza uma API em tempo real para fornecer dados atualizados sobre as criptomoedas, permitindo que os usuários acompanhem as flutuações do mercado de forma eficiente.',
    link: 'https://github.com/RockNicolas/Criptomoedas',
  },
  {
    name: 'PNG2PDF-Converter',
    description: 'Uma aplicação em Python para ajudar nas tarefas diárias com a funcionalidade de transformar arquivos PNG convertendo para PDF',
    link: 'https://github.com/RockNicolas/PNG2PDF-Converte',
  },
  {
    name: 'Sistema de Gerenciamento de Materiais',
    description: 'Este é um sistema simples de gerenciamento de materiais desenvolvido com Laravel 5.2.45. O sistema permite ao usuário realizar operações de CRUD',
    link: 'https://github.com/RockNicolas/Autenticacao-laravel',
  },
  {
    name: 'PyExcelDrive',
    description: 'O script facilita o gerenciamento de imagens associadas a diferentes "tombamentos", baixando-as automaticamente de links do Google Drive e organizando-as em pastas estruturadas. ',
    link: 'https://github.com/RockNicolas/PyExcelDrive',
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
