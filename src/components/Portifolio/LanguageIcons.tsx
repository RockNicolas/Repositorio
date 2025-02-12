import React from 'react';
import { FaReact, FaPython, FaPhp, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiTypescript, SiLaravel } from 'react-icons/si';

interface LanguageIconsProps {
  languages: string[];
}

const LanguageIcons: React.FC<LanguageIconsProps> = ({ languages }) => {
  return (
    <span className="language-icons">
      {languages.map((language, index) => {
        switch (language.toLowerCase()) {
          case 'react':
            return <FaReact key={index} className="react" title="React" />;
          case 'python':
            return <FaPython key={index} className="python" title="Python" />;
          case 'php':
            return <FaPhp key={index} className="php" title="PHP" />;
          case 'html':
            return <FaHtml5 key={index} className="html" title="HTML" />;
          case 'css':
            return <FaCss3Alt key={index} className="css" title="CSS" />;
          case 'javascript':
            return <FaJsSquare key={index} className="javascript" title="JavaScript" />;
          case 'typescript':
            return <SiTypescript key={index} className="typescript" title="TypeScript" />;
          case 'laravel':
            return <SiLaravel key={index} className="laravel" title="Laravel" />;
          default:
            return null;
        }
      })}
    </span>
  );
};

export default LanguageIcons;
