import React from 'react';
import ProjectCard from '../../components/Projetos/ProjectCard';
import './Projetos.css';

const Portfolio: React.FC = () => {
  return (
    <div className="container px-4 py-8">
      <h1 className="text-center text-blue-400 text-lg">Meu Portifólio</h1>
      <h2 className="text-center text-3xl mt-2">Projetos em que trabalhei</h2>
      <div className="mt-12">
        
        <ProjectCard
          projectNumber="01"
          title="Barbearia El Macho"
          description="Foi um desenvolvimento que fiz para um grande amigo, ele queria um site que pessoas próximas possam ver, então fiz um desenvolvimento web padrão utilizando ferramentas do mercado como Html5, CSS3, JavaScript, Bootstrap e VueJs, totalmente responsivo para qualquer aparelho, hospedado pelo o próprio GitHub."
          imgSrc="./public/Imgs/ElMacho.png"
          imgAlt="A collage of various coaching websites designed by the portfolio owner"
        />

        <ProjectCard
          projectNumber="02"
          title="Fitness Websites"
          description="As a website designer, I create fitness websites that promote health and fitness. These sites include workout tracking, video tutorials, and vibrant visuals to motivate and engage users."
          imgSrc="./public/Imgs/Lista.png"
          imgAlt="A fitness website with a man and woman exercising"
        />

        <ProjectCard
          projectNumber="03"
          title="Interior Design Websites"
          description="As a website designer, I create interior design websites that showcase style and functionality. These sites include portfolio galleries, design tips, and easy navigation for a seamless user experience."
          imgSrc="./public/Imgs/sanke.png"
          imgAlt="A collage of various interior design websites designed by the portfolio owner"
        />

      </div>
    </div>
  );
};

export default Portfolio;
