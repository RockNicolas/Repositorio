import React from 'react';
import './AboutMe.css';

const AboutMe: React.FC = () => {
  return (
    <section className="about-me">
      <h2>Sobre Mim</h2>
      <div className="about-me-content">
        <div className="text">
          <p>
            Sou Nicolas Rock, um desenvolvedor apaixonado por tecnologia, atualmente no 5º semestre da faculdade. No momento, estou estagiando na Liv Saúde como estagiário de desenvolvimento, pelo ICC (Iniciação Científica e Criativa). Esse estágio tem sido uma ótima oportunidade para aplicar o que aprendi até agora e desenvolver novas habilidades em um ambiente profissional.
            Tenho uma experiência sólida no desenvolvimento front-end, trabalhando com React, TypeScript, JavaScript, HTML, CSS e outras ferramentas modernas para criar interfaces interativas e funcionais. Além disso, já participei de projetos em grupos que usaram PHP, Laravel e Oracle, o que me ajudou a expandir meus conhecimentos em tecnologias back-end também.
            Também trabalho com Python, principalmente em automação, processamento de dados e desenvolvimento de APIs. Como freelancer, tenho a oportunidade de explorar uma variedade de projetos, o que me permite crescer constantemente e melhorar meu portfólio.
            Estou sempre em busca de novos desafios e de aprender coisas novas. Gosto de me manter atualizado sobre as últimas tendências do mercado e de aplicar essas novas descobertas nos meus projetos, criando soluções inovadoras e de alta qualidade.
          </p>
        </div>
        <div className="photos">
          <img src="./public/86e04d91-b33c-4b33-8fec-a96a3e5be3ea.jpg" alt="Foto minha 1" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
