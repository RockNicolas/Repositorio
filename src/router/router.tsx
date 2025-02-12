import { createBrowserRouter } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import AboutMe from '../pages/AboutMe/AboutMe';
import Portifolio from '../pages/Portifolio/Portifolio';
import Skills from '../components/Skills/Skills';
import Projetos from '../components/Projetos/Projetos'
import { NotFound } from '../pages/notfound/noutfound';  

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <Skills />
        <Portifolio />
        <AboutMe />
        <Projetos />
      </div>
    ),
  },
  {
    path: "*", 
    element: <NotFound />, 
  },
]);

export { router };
