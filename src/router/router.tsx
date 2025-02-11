import { createBrowserRouter } from 'react-router-dom';
import { Header } from '../components/Header';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import { NotFound } from '../pages/noutfound';  

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
