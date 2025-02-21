import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainContent from '../pages/Header/MainContent';
import AboutMe from '../pages/AboutMe/AboutMe';
import Portifolio from '../pages/Portifolio/Portifolio';
import Skills from '../pages/Skills/Skills';
import Projetos from '../pages/Projetos/Projetos';
import Testimonaial from '../pages/Testimonial/Testimonial';
import { NotFound } from '../pages/notfound/noutfound'; 
import Footer from '../components/Footer/Footer';
import ErrorBoundary from '../components/Error/ErrorBoundary';
import AdminLogin from '../pages/AdminLogin/AdminLogin'; 


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
          <Footer />
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/admin",  
    element: <AdminLogin />   
  },
  {
    path: "/testimonaial",  
    element: <Testimonaial />, 
  },
  {
    path: "*", 
    element: <NotFound />, 
  },
]);

export { router };
