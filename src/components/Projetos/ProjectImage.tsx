import React from 'react';

interface ProjectImageProps {
  src: string;
  alt: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ src, alt }) => {
  return (
    <div className="md:w-1/2">
      <img
        alt={alt}
        className="rounded-lg shadow-lg"
        height="300"
        src={src}
        width="300"
      />
    </div>
  );
};

export default ProjectImage;
