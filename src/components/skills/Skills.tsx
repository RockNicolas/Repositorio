import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNode, faGithub, faVuejs, faBootstrap, faHtml5, faCss3Alt, faPython, faLaravel, faPhp } from '@fortawesome/free-brands-svg-icons';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons'; 
import { faFileCode } from '@fortawesome/free-solid-svg-icons'; 
import './Skills.css';

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
  return (
    <section className="skills">
      <h2>Minhas Habilidades</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className={`skill-item ${skill.className}`}>
            <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
