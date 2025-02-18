import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaPhp, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiLaravel, SiVuedotjs } from 'react-icons/si';

const IconsContainer: React.FC = () => {
  return (
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
  );
};

export default IconsContainer;
