import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SkillItemProps {
  name: string;
  icon: any;
  className: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, icon, className }) => {
  return (
    <li className={`skill-item ${className}`}>
      <FontAwesomeIcon icon={icon} className="skill-icon" />
      <span>{name}</span>
    </li>
  );
};

export default SkillItem;
