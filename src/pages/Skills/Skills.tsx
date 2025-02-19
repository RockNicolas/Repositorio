import React from 'react';
import SkillItem from '../../components/Skills/SkillItem';
import { faReact, faNode, faGithub, faVuejs, faBootstrap, faHtml5, faCss3Alt, faPython, faLaravel, faPhp, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { SiTypescript } from 'react-icons/si';
import './Skills.css';

const skills = [
  { name: 'React', icon: faReact, className: 'skill-react' },
  { name: 'TypeScript', icon: SiTypescript, className: 'skill-ts' },
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
          <SkillItem
            key={index}
            name={skill.name}
            icon={skill.icon}
            className={skill.className}
          />
        ))}
      </ul>
    </section>
  );
};

export default Skills;
