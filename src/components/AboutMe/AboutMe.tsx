import React from 'react';
import './AboutMe.css';

const AboutMe: React.FC = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-content">
        <div className="text-section">
          <h2 className="heading-subtitle">About Me</h2>
          <h1 className="heading-main">Professional Website Designer</h1>
          <p className="description">
            Hello! I’m Magret, a passionate website designer dedicated to crafting beautiful and functional websites that help businesses thrive online. With a keen eye for detail and a love for design, I transform ideas into engaging digital experiences.
          </p>
          <a className="learn-more-btn" href="#">
            Learn more
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
        <div className="image-section">
          <img
            className="profile-image"
            alt="Professional website designer in a black suit"
            src="https://storage.googleapis.com/a1aa/image/ONPfnglba7FHsmgDRVFYqaEVVu8NOgdVX76IQnD4Xkc.jpg"
            height="400"
            width="300"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
