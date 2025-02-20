import React from 'react';
import TextSection from '../../components/AboutMe/TextSection';
import ImageSection from '../../components/AboutMe/ImageSection';
import SocialIcons from '../../components/AboutMe/SocialIcons';
import './AboutMe.css';

const AboutMe: React.FC = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-content">
        <div className="text-and-icons">
          <TextSection />
          <SocialIcons />
        </div>
        <ImageSection />
      </div>
    </div>
  );
};

export default AboutMe;
