import React, { useState, useEffect } from 'react';
import './Portifolio.css';
import ProjectCard from '../../components/Portifolio/ProjectCard';

interface Project {
  name: string;
  description: string;
  link: string;
  languages?: string[];
}

const projects: Project[] = [
  {
    name: 'CriptoMoeda',
    description: 'Este projeto é um sistema de monitoramento do mercado de criptomoedas desenvolvido com React e TypeScript. Ele utiliza uma API em tempo real para fornecer dados atualizados sobre as criptomoedas, permitindo que os usuários acompanhem as flutuações do mercado de forma eficiente.',
    link: 'https://github.com/RockNicolas/Criptomoedas',
  },
  {
    name: 'PyExcelDrive',
    description: 'O script facilita o gerenciamento de imagens associadas a diferentes "tombamentos", baixando-as automaticamente de links do Google Drive e organizando-as em pastas estruturadas. ',
    link: 'https://github.com/RockNicolas/PyExcelDrive',
  },
  {
    name: 'Sistema de Gerenciamento de Materiais',
    description: 'Este é um sistema simples de gerenciamento de materiais desenvolvido com Laravel 5.2.45. O sistema permite ao usuário realizar operações de CRUD',
    link: 'https://github.com/RockNicolas/Autenticacao-laravel',
  },
  {
    name: 'PNG2PDF-Converter',
    description: 'Uma aplicação em Python para ajudar nas tarefas diárias com a funcionalidade de transformar arquivos PNG convertendo para PDF',
    link: 'https://github.com/RockNicolas/PNG2PDF-Converte',
  },
  {
    name: 'Loja-Suplementos',
    description: 'Loja de suplementos criada no meu primeiro semestre da faculdade usando Php, html, css e js com um CRUD',
    link: 'https://github.com/RockNicolas/lojas-de-suplementos',
  },
  {
    name: 'Teclas-mouse-py',
    description: 'Aplicação bem simples de ser desenvolvida e prática para o dia a dia, a ideia desse projeto eu pensei enquanto estava jogando, pensei "por que não fazer uma aplicação que rode um script que informe quantas teclas eu cliquei e quantos cliques de mouse", achei bem divertido fazer essa aplicação.',
    link: 'https://github.com/RockNicolas/teclas-mouse-py',
  },
  {
    name: 'Notificação',
    description: 'Uma aplicação de notificação que lhe manda uma notificação no windows quando você coloca o horário específico que deseja, tem função de alarme com filhos, com a função de você conseguir deixar o script executando ou finalizando clicando nas teclas ctrl + C, essa ideia é assim que conseguir meu primeiro estágio quando lembrei do horário de ponto.',
    link: 'https://github.com/RockNicolas/Notification',
  },
  {
    name: 'SMTP-EMAIL',
    description: 'Aplicação em laravel com a funcionabilidade de eviar gmail para confimação',
    link: 'https://github.com/RockNicolas/SMTP-EMAIL',
  },
  {
    name: 'List-tod',
    description: 'Primeiro projeto em React usando Js é um todolist para a pessoa lembrar de suas tarefas diarias',
    link: 'https://github.com/RockNicolas/tod-List',
  },
];

const getRepoLanguages = async (repoUrl: string) => {
  const repoName = repoUrl.split('github.com/')[1];
  const apiUrl = `https://api.github.com/repos/${repoName}/languages`;

  try {
    const response = await fetch(apiUrl);
    const languages = await response.json();
    return Object.keys(languages);
  } catch (error) {
    console.error('Erro ao obter linguagens:', error);
    return [];
  }
};

const Projects: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [projectLanguages, setProjectLanguages] = useState<Record<string, string[]>>({});
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const fetchLanguages = async () => {
      const updatedProjects = await Promise.all(
        projects.map(async (project) => {
          const languages = await getRepoLanguages(project.link);
          return { ...project, languages };
        })
      );

      const languagesMap = updatedProjects.reduce((acc, project) => {
        acc[project.name] = project.languages || [];
        return acc;
      }, {} as Record<string, string[]>);

      setProjectLanguages(languagesMap);
    };

    fetchLanguages();
  }, []);

  const loadMoreProjects = () => {
    setVisibleProjects((prevVisible) => prevVisible + 6);
  };

  const loadLessProjects = () => {
    setAnimating(true);
    setTimeout(() => {
      setVisibleProjects(3);
      setAnimating(false);
    }, 300);
  };

  return (
    <section className="projects">
      <h2>Meus Projetos</h2>
      <div className="project-list">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            link={project.link}
            languages={projectLanguages[project.name] || []}
            animating={animating}
          />
        ))}
      </div>
      {visibleProjects < projects.length && !animating && (
        <button onClick={loadMoreProjects} className="load-more-btn">
          Carregar mais
        </button>
      )}
      {visibleProjects > 4 && !animating && (
        <button onClick={loadLessProjects} className="load-less-btn">
          Ver Menos
        </button>
      )}
    </section>
  );
};

export default Projects;
