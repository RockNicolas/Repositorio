// ProjectCard.tsx
import React from 'react';
import ProjectImage from './ProjectImage';

interface ProjectCardProps {
  projectNumber: string;
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  reverse?: boolean; 
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  projectNumber, 
  title, 
  description, 
  imgSrc, 
  imgAlt, 
  reverse 
}) => {
  return (
    <div className={`flex flex-col md:flex-row items-center md:items-start mb-12 ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className="md:w-1/2">
        <h3 className="text-2xl mb-2">{projectNumber}</h3>
        <h4 className="text-xl mb-2">{title}</h4>
        <p className="text-gray-400 mb-4">{description}</p>
      </div>
      <ProjectImage src={imgSrc} alt={imgAlt} />
    </div>
  );
};

export default ProjectCard;
