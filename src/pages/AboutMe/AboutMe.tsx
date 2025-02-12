import React from 'react';
import TextSection from '../../components/AboutMe/TextSection';
import ImageSection from '../../components/AboutMe/ImageSection';
import './AboutMe.css';

const AboutMe: React.FC = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-content">
        <TextSection />
        <ImageSection />
      </div>
    </div>
  );
};

export default AboutMe;
