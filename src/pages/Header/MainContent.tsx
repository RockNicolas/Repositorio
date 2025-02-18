import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaPhp, FaNodeJs, FaDatabase } from 'react-icons/fa';  // Importando o ícone de banco de dados (MySQL)
import { SiTypescript, SiLaravel, SiVuedotjs } from 'react-icons/si';  
import './mainContent.css';

const MainContent: React.FC = () => {
  return (
    <div className="main-content-container">
      <main className="main-content">
        <h1 className="main-title">Bem-Vindo ao meu espaço.</h1>
        <h2 className="sub-title">
          Sou um Desenvolvedor Web
          <br />
          Especializado em React, TypeScript, HTML, CSS, JavaScript, Python, PHP, Node.js, Laravel, Vue.js, MySQL
        </h2>

        <div className="icons-container">
          <FaReact className="icon react" />
          <FaHtml5 className="icon html" />
          <FaCss3Alt className="icon css" />
          <FaJsSquare className="icon js" />
          <SiTypescript className="icon ts" />
          <FaPython className="icon python" />
          <FaPhp className="icon php" />
          <FaNodeJs className="icon node" />
          <SiLaravel className="icon laravel" />
          <SiVuedotjs className="icon vue" />  
          <FaDatabase className="icon mysql" />
        </div>
      </main>
    </div>
  );
};

export default MainContent;
