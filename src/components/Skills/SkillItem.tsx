import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SkillItemProps {
  name: string;
  icon: any;
  className: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, icon, className }) => {
  const isFontAwesomeIcon = (icon: any) => icon && icon.iconName; 

  return (
    <li className={`skill-item ${className}`}>
      {isFontAwesomeIcon(icon) ? (
        <FontAwesomeIcon icon={icon} className="skill-icon" />
      ) : (
        React.createElement(icon, { className: 'skill-icon' })
      )}
      <span>{name}</span>
    </li>
  );
};

export default SkillItem;
