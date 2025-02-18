import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';

const Title: React.FC = () => {
  return (
    <>
      <FaLaptopCode className="icon-welcome" />
      <hr className="divider" />
      <h1 className="main-title">Bem-Vindo ao meu espaço criativo!</h1>
      <h2 className="sub-title">
        Desenvolvendo experiências digitais
        <span className="highlight"> inovadoras!</span>
      </h2>
    </>
  );
};

export default Title;
