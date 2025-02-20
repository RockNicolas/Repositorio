import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const SocialIcons: React.FC = () => {
  return (
    <div className="social-icons-container">
      <a href="https://www.instagram.com/rocknkz/?next=%2F" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaInstagram size={35} />
      </a>
      <a href="https://wa.me/5585997665652" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaWhatsapp size={35} />
      </a>
      <a href="https://github.com/RockNicolas" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaGithub size={35} />
      </a>
      <a href="https://www.linkedin.com/in/nicolas-rock-6015122a5/" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaLinkedin size={35} />
      </a>
    </div>
  );
};

export default SocialIcons;
