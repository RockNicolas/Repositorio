import React from 'react';
import { FaReact, FaPython, FaPhp, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiTypescript, SiLaravel } from 'react-icons/si';

interface ProjectCardProps {
  name: string;
  description: string;
  link: string;
  languages: string[];
  animating: boolean;
}

const renderLanguageIcons = (languages: string[]) => {
  return languages.map((language, index) => {
    switch (language.toLowerCase()) {
      case 'react':
        return <FaReact key={index} className="react" title="React" />;
      case 'python':
        return <FaPython key={index} className="python" title="Python" />;
      case 'php':
        return <FaPhp key={index} className="php" title="PHP" />;
      case 'html':
        return <FaHtml5 key={index} className="html" title="HTML" />;
      case 'css':
        return <FaCss3Alt key={index} className="css" title="CSS" />;
      case 'javascript':
        return <FaJsSquare key={index} className="javascript" title="JavaScript" />;
      case 'typescript':
        return <SiTypescript key={index} className="typescript" title="TypeScript" />;
      case 'laravel':
        return <SiLaravel key={index} className="laravel" title="Laravel" />;
      default:
        return null;
    }
  });
};

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, link, languages, animating }) => {
  return (
    <div className={`project-card ${animating ? 'animate-left' : ''}`}>
      <h3>
        {name}
        <span className="language-icons">
          {renderLanguageIcons(languages)}
        </span>
      </h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Ver Projeto
      </a>
    </div>
  );
};

export default ProjectCard;
