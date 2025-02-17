import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-6">
      <nav className="space-x-6">
        <a className="text-cyan-500" href="#">
          HOME
        </a>
        <a className="hover:text-cyan-500" href="#">
          ABOUT
        </a>
        <a className="hover:text-cyan-500" href="#">
          SERVICES
        </a>
        <a className="hover:text-cyan-500" href="#">
          PORTFOLIO
        </a>
        <a className="hover:text-cyan-500" href="#">
          CONTACT ME
        </a>
      </nav>
    </header>
  );
};

export default Header;
