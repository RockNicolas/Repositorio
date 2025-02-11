import { createBrowserRouter } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import AboutMe from '../components/AboutMe/AboutMe';
import Projects from '../components/Projects/Projects';
import Skills from '../components/skills/Skills';
import { NotFound } from '../pages/notfound/noutfound';  

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <AboutMe />
        <Projects />
        <Skills />
      </div>
    ),
  },
  {
    path: "*", 
    element: <NotFound />, 
  },
]);

export { router };
