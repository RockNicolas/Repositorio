import React from 'react';
import './mainContent.css'; 

const MainContent: React.FC = () => {
  return (
    <div className="main-content-container">
      <main className="main-content">
        <h1 className="main-title">Bem-Vindo ao meu espaço.</h1>
        <h2 className="sub-title">
          Sou um Desenvolvedor Web
          <br />
          Especializado em React, TypeScript, HTML, CSS e JavaScript
        </h2>
      </main>
    </div>
  );
};

export default MainContent;
