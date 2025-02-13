import React from 'react';

type ProjectCardProps = {
  projectNumber: string;
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ projectNumber, title, description, imgSrc, imgAlt }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start mb-12">
      <div className="md:w-1/2 order-2 md:order-1">
        <img
          alt={imgAlt}
          className="rounded-lg shadow-lg"
          height="300"
          src={imgSrc}
          width="300"
        />
      </div>
      <div className="md:w-1/2 order-1 md:order-2">
        <h3 className="text-2xl mb-2">{projectNumber}</h3>
        <h4 className="text-xl mb-2">{title}</h4>
        <p className="text-gray-400 mb-4">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
