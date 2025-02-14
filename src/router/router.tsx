import { createBrowserRouter } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import AboutMe from '../pages/AboutMe/AboutMe';
import Portifolio from '../pages/Portifolio/Portifolio';
import Skills from '../pages/Skills/Skills';
import Projetos from '../pages/Projects/Projetos'
import Testi from '../pages/Testimonial/Testimonial'
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
        <Testi />
      </div>
    ),
  },
  {
    path: "*", 
    element: <NotFound />, 
  },
]);

export { router };
