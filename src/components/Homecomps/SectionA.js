import React from 'react';
import './SectionA.css';
import developerImage from './Potrait.jpg'; // Replace with your image
import { FiArrowRight, FiChevronDown } from 'react-icons/fi';


const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="availability-badge">
            <span className="pulse-dot"></span>
            Available for work
          </div>
          
          <h1 className="hero-title">
            <span className="greeting">Hi, I'm</span>
            <span className="name">Ashish</span>
          </h1>
          
          <p className="hero-subtitle">
            I craft <span className="highlight">responsive websites</span> where <span className="highlight">  technology</span> meets <span className="highlight"> creativity</span> to deliver <span className="highlight"> engaging user experiences</span>
          </p>
          
          <div className="hero-cta">
            <a href="#work" className="cta-button primary">
              View my work <FiArrowRight className="cta-icon" />
            </a>
            <a href="#contact" className="cta-button secondary">
              Contact me
            </a>
          </div>
        </div>
        
        <div className="hero-image-container">
          <div className="image-wrapper">
            <img 
              src={developerImage} 
              alt="Ashish - Web Developer" 
              className="developer-portrait"
            />
            <div className="image-frame"></div>
            <div className="tech-dots">
              {[...Array(15)].map((_, i) => (
                <div key={i} className="tech-dot" style={{
                  animationDelay: `${i * 0.1}s`,
                  left: `${Math.random() * 80 + 10}%`,
                  top: `${Math.random() * 80 + 10}%`
                }}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <FiChevronDown className="scroll-icon" />
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
