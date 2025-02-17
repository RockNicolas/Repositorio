import { createBrowserRouter } from 'react-router-dom';
import  MainContent  from '../components/Header/MainContent'
import AboutMe from '../pages/AboutMe/AboutMe';
import Portifolio from '../pages/Portifolio/Portifolio';
import Skills from '../pages/Skills/Skills';
import Projetos from '../pages/Projects/Projetos'
import Testimonaial from '../pages/Testimonial/Testimonial'
import { NotFound } from '../pages/notfound/noutfound'; 
{/*import Contato from '../pages/Contato/Contato'  */ }
import Footer from '../components/Footer/Footer'
import ErrorBoundary from '../components/Error/ErrorBoundary'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary>
        <div>
          <MainContent />
          <Skills />
          <Portifolio />
          <AboutMe />
          <Projetos />
          <Testimonaial />
        {/* <Contato /> */} 
          <Footer />
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "*", 
    element: <NotFound />, 
  },
]);

export { router };
