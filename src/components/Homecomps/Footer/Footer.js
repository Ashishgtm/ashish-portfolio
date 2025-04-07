import React, { useLayoutEffect, useState, useRef } from "react";
import './Footer.css';

const Footer = () => {
  const [displayedName, setDisplayedName] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullName = "Ashish Gtm";
  const typingInterval = useRef(null);

  useLayoutEffect(() => {
    let currentIndex = 0;
    typingInterval.current = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayedName(fullName.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval.current);
        setShowCursor(false);
      }
    }, 200);
    return () => {
      if (typingInterval.current) {
        clearInterval(typingInterval.current);
      }
    };
  }, [fullName]);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <div className="footer-name">
              {displayedName}
              {showCursor && <span className="cursor">|</span>}
            </div>
            <p className="footer-tagline">Creative Designer & Developer</p>
          </div>
        </div>

        <div className="footer-section">
          <h3>Navigation</h3>
          <nav className="footer-nav">
            <ul>
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About Me</a></li>
              <li><a href="#projects" className="footer-link">Designs</a></li>
              <li><a href="#services" className="footer-link">Services</a></li>

              <li><a href="/" className="footer-link">Portfolio</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </nav>
        </div>

        <div className="footer-section">
          <h3>Portfolio</h3>
          <nav className="footer-nav">
            <ul>
              <li><a href="/" className="footer-link">Websites</a></li>
              <li><a href="/" className="footer-link">Graphics</a></li>
              <li><a href="/" className="footer-link">Videos</a></li>
              <li><a href="/" className="footer-link">3D</a></li>
            </ul>
          </nav>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <div className="contact-info">
            <p>
              <span className="icon">✉️</span>
              <a href="mailto:ashishgautam9846@gmail.com" className="footer-link">ashishgautam9846@gmail.com</a>
            </p>
            <p>
              <span className="icon">🌐</span>
              <a href="https://www.aashish-gautam.com.np" className="footer-link">aashish-gautam.com.np</a>
            </p>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/ashishgautam7/" className="social-link" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://www.instagram.com/ashishgtm/" className="social-link" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://www.facebook.com/ashishgtm07/" className="social-link" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Ashish Gautam. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;