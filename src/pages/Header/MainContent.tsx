import React from 'react';
import Title from '../../components/Header/Title';
import Description from '../../components/Header/Description';
import IconsContainer from '../../components/Header/IconsContainer';
import RobotHelper from '../../components/Robot/RobotHelper'; 
import './mainContent.css';

const MainContent: React.FC = () => {
  return (
    <div className="main-content-container">
      <main className="main-content">
        <RobotHelper message="fqfqfwqfwq" className={'robot'} />
        <Title />
        <Description />
        <IconsContainer />
      </main>
    </div>
  );
};

export default MainContent;
