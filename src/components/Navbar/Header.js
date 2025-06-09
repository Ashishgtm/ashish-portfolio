import React, { useState, useEffect } from 'react';
import './Header.css';
import Ashish from './Ashish.jpg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="/" className="navbar-logo" onClick={() => scrollToSection('home')}>
          <img
            src={Ashish}
            alt="Profile"
            className="profile-img"
          />
          <span className="logo-text">Ashish Gtm</span>
        </a>
        
        <div className="menu-icon" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
        </div>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="/" className="nav-links" onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-links" onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}>About Me</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-links" onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}>Designs</a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-links" onClick={(e) => {
              e.preventDefault();
              scrollToSection('services');
            }}>Services</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links" onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;