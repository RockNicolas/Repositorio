import React from 'react';
import './Header.css';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Meu Portfólio</h1>
      <nav>
        <ul>
          <li><a href="#about">Sobre Mim</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#skills">Habilidades</a></li>
        </ul>
      </nav>
    </header>
  );
}
