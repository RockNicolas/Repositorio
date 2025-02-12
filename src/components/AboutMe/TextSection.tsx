import React from 'react';

const TextSection: React.FC = () => {
  return (
    <div className="text-section">
      <h2 className="heading-subtitle">Sobre</h2>
      <h1 className="heading-main">Desenvolvedor Front-End</h1>
      <p className="description">
        Sou Nicolas Rock, um desenvolvedor apaixonado por tecnologia, atualmente no 5º semestre da faculdade. No momento, estou estagiando na Liv Saúde como estagiário de desenvolvimento, pela ICC (Iniciação Científica e Criativa). Esse estágio tem sido uma ótima oportunidade para aplicar o que aprendi até agora e desenvolver novas habilidades em um ambiente profissional.
        Tenho uma experiência sólida no desenvolvimento front-end, trabalhando com React, TypeScript, JavaScript, HTML, CSS e outras ferramentas modernas para criar interfaces interativas e funcionais. Além disso, já participei de projetos em grupos que obtiveram PHP, Laravel e Oracle, ou que me ajudaram a expandir meus conhecimentos em tecnologias back-end também.
        Também trabalho com Python, principalmente em automação, processamento de dados e desenvolvimento de APIs. Como freelancer, tenho a oportunidade de explorar uma variedade de projetos, o que me permite crescer constantemente e melhorar meu portfólio.
        Estou sempre em busca de novos desafios e de aprender coisas novas. Gosto de me manter atualizado sobre as últimas tendências do mercado e de aplicar essas novas descobertas em meus projetos, criando soluções inovadoras e de alta qualidade.
      </p>
      <a className="learn-more-btn" href="#">
        Learn more
        <i className="fas fa-arrow-right ml-2"></i>
      </a>
    </div>
  );
};

export default TextSection;
