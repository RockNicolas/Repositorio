import React, { useState, useEffect, useRef } from 'react';
import './RobotHelper.css';

interface RobotHelperProps {
  message: string; 
  className: string; 
}

const RobotHelper: React.FC<RobotHelperProps> = ({ message, className }) => {
  const [isBalloonClicked, setIsBalloonClicked] = useState(false);
  const balloonRef = useRef<HTMLDivElement | null>(null); 

  const handleBalloonClick = () => {
    setIsBalloonClicked((prevState) => !prevState);
  };

  useEffect(() => {
    if (balloonRef.current) { 
      const handlePositionUpdate = () => {
        const scrollY = window.scrollY;
        if (balloonRef.current) { 
          balloonRef.current.style.bottom = `${20 + scrollY}px`; 
        }
      };
  
      window.addEventListener('scroll', handlePositionUpdate);
      return () => {
        window.removeEventListener('scroll', handlePositionUpdate);
      };
    }
  }, []); 

  return (
    <div className={`robot-message ${className}`} ref={balloonRef}>
      {!isBalloonClicked && (
        <div className="balloon" onClick={handleBalloonClick}>
          <span>...</span>
        </div>
      )}

      {isBalloonClicked && (
        <div className="robot-icon-message" onClick={handleBalloonClick}>
          <div className="robot-icon">🤖</div>
          <p className="message">{message}</p>
        </div>
      )}
    </div>
  );
};

export default RobotHelper;
