import React from 'react';
import './styles/App.css';
import { Header } from './components/Header';
import  AboutMe   from './components/AboutMe';
import  Projects from './components/Projects';
import  Skills from './components/Skills';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
