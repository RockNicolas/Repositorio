import React from 'react';
import '../styles/Skills.css';

const skills = ['React', 'TypeScript', 'JavaScript', 'CSS', 'HTML', 'Node.js', 'Git', 'Webpack'];

const Skills: React.FC = () => {
  return (
    <section className="skills">
      <h2>Minhas Habilidades</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
