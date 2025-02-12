import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNode, faGithub, faVuejs, faBootstrap, faHtml5, faCss3Alt, faPython, faLaravel, faPhp } from '@fortawesome/free-brands-svg-icons';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons'; 
import { faFileCode } from '@fortawesome/free-solid-svg-icons'; 
import './Skills.css';

type Project = {
  id: number;
  image: string;
  title: string;
};

const projects: Record<string, Project[]> = {
  React: [
    { id: 1, image: './public/mostrar.png', title: 'Projeto React 1' },
    { id: 2, image: './public/mostrar.png', title: 'Projeto React 2' },
  ],
  TypeScript: [
    { id: 1, image: 'path_to_ts_project_1.jpg', title: 'Projeto TypeScript 1' },
    { id: 2, image: 'path_to_ts_project_2.jpg', title: 'Projeto TypeScript 2' },
  ],
  JavaScript: [
    { id: 1, image: 'path_to_js_project_1.jpg', title: 'Projeto JavaScript 1' },
    { id: 2, image: 'path_to_js_project_2.jpg', title: 'Projeto JavaScript 2' },
  ],
  VueJs: [
    { id: 1, image: 'path_to_vue_project_1.jpg', title: 'Projeto VueJs 1' },
    { id: 2, image: 'path_to_vue_project_2.jpg', title: 'Projeto VueJs 2' },
  ],
  CSS3: [
    { id: 1, image: 'path_to_css_project_1.jpg', title: 'Projeto CSS 1' },
    { id: 2, image: 'path_to_css_project_2.jpg', title: 'Projeto CSS 2' },
  ],
  HTML5: [
    { id: 1, image: 'path_to_html_project_1.jpg', title: 'Projeto HTML 1' },
    { id: 2, image: 'path_to_html_project_2.jpg', title: 'Projeto HTML 2' },
  ],
  NodeJs: [
    { id: 1, image: 'path_to_node_project_1.jpg', title: 'Projeto NodeJs 1' },
    { id: 2, image: 'path_to_node_project_2.jpg', title: 'Projeto NodeJs 2' },
  ],
  Git: [
    { id: 1, image: 'path_to_git_project_1.jpg', title: 'Projeto Git 1' },
    { id: 2, image: 'path_to_git_project_2.jpg', title: 'Projeto Git 2' },
  ],
  Bootstrap: [
    { id: 1, image: 'path_to_bootstrap_project_1.jpg', title: 'Projeto Bootstrap 1' },
    { id: 2, image: 'path_to_bootstrap_project_2.jpg', title: 'Projeto Bootstrap 2' },
  ],
  Python: [
    { id: 1, image: 'path_to_python_project_1.jpg', title: 'Projeto Python 1' },
    { id: 2, image: 'path_to_python_project_2.jpg', title: 'Projeto Python 2' },
  ],
  Laravel: [
    { id: 1, image: 'path_to_laravel_project_1.jpg', title: 'Projeto Laravel 1' },
    { id: 2, image: 'path_to_laravel_project_2.jpg', title: 'Projeto Laravel 2' },
  ],
  PHP: [
    { id: 1, image: 'path_to_php_project_1.jpg', title: 'Projeto PHP 1' },
    { id: 2, image: 'path_to_php_project_2.jpg', title: 'Projeto PHP 2' },
  ],
};

const skills = [
  { name: 'React', icon: faReact, className: 'skill-react' },
  { name: 'TypeScript', icon: faFileCode, className: 'skill-ts' },
  { name: 'JavaScript', icon: faJsSquare, className: 'skill-js' },
  { name: 'VueJs', icon: faVuejs, className: 'skill-vue' },
  { name: 'CSS3', icon: faCss3Alt, className: 'skill-css' },
  { name: 'HTML5', icon: faHtml5, className: 'skill-html' },
  { name: 'Node.js', icon: faNode, className: 'skill-node' },
  { name: 'Git', icon: faGithub, className: 'skill-git' },
  { name: 'Bootstrap', icon: faBootstrap, className: 'skill-bootstrap' },
  { name: 'Python', icon: faPython, className: 'skill-python' },
  { name: 'Laravel', icon: faLaravel, className: 'skill-laravel' },
  { name: 'PHP', icon: faPhp, className: 'skill-php' },
];

const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleSkillClick = (skillName: string) => {
    setSelectedSkill(skillName);
    setCurrentProjectIndex(0); 
  };

  const handleCloseCarrousel = () => {
    setSelectedSkill(null);
  };

  const handleNextProject = () => {
    if (selectedSkill) {
      const skillProjects = projects[selectedSkill];
      const nextIndex = (currentProjectIndex + 1) % skillProjects.length;
      setCurrentProjectIndex(nextIndex);
    }
  };

  const handlePrevProject = () => {
    if (selectedSkill) {
      const skillProjects = projects[selectedSkill];
      const prevIndex = (currentProjectIndex - 1 + skillProjects.length) % skillProjects.length;
      setCurrentProjectIndex(prevIndex);
    }
  };

  return (
    <section className="skills">
      <h2>Minhas Habilidades</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li
            key={index}
            className={`skill-item ${skill.className}`}
            onClick={() => handleSkillClick(skill.name)}
          >
            <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>

      {selectedSkill && (
        <div className="carrousel-overlay">
          <div className="carrousel-container">
            <button className="close-btn" onClick={handleCloseCarrousel}>X</button>
            <h3>Projetos com {selectedSkill}</h3>
            <div className="carrousel">
              <button onClick={handlePrevProject}>&lt;</button>
              <div className="carrousel-item">
                <img
                  src={projects[selectedSkill][currentProjectIndex].image}
                  alt={projects[selectedSkill][currentProjectIndex].title}
                />
                <p>{projects[selectedSkill][currentProjectIndex].title}</p>
              </div>
              <button onClick={handleNextProject}>&gt;</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};


export default Skills;
