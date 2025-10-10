
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="navbar bg-[#1a1a1a] text-white p-4 sm:p-6 shadow-lg sticky top-0 z-40">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="flex items-center space-x-2">
          <img
            src={logo}
            className="h-12 w-12 sm:h-16 sm:w-16 object-contain drop-shadow-md hover:scale-105 transition-transform" // Increased size
          />
          <span className="text-xl sm:text-2xl font-poppins font-bold text-[#fdba74] hidden sm:inline">
            Cathy Sichone
          </span>
        </NavLink>
        <button className="hamburger sm:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6 text-[#fdba74]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
        <ul className={`nav-list ${isOpen ? 'open flex flex-col items-center space-y-4' : 'hidden sm:flex sm:space-x-6'}`}>
          <li className="nav-item">
            <NavLink
              to="/"
              className="nav-link text-sm sm:text-lg font-roboto text-[#fdba74] hover:text-[#fb923c] transition-colors"
              data-active={location.pathname === '/'}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/services"
              className="nav-link text-sm sm:text-lg font-roboto text-[#fdba74] hover:text-[#fb923c] transition-colors"
              data-active={location.pathname === '/services'}
            >
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/portfolio"
              className="nav-link text-sm sm:text-lg font-roboto text-[#fdba74] hover:text-[#fb923c] transition-colors"
              data-active={location.pathname === '/portfolio'}
            >
              Portfolio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/consultation"
              className="nav-link text-sm sm:text-lg font-roboto text-[#fdba74] hover:text-[#fb923c] transition-colors"
              data-active={location.pathname === '/consultation'}
            >
              Consultation
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              className="nav-link text-sm sm:text-lg font-roboto text-[#fdba74] hover:text-[#fb923c] transition-colors"
              data-active={location.pathname.startsWith('/contact')}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;