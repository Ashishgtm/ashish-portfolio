import React, { useEffect, useState } from 'react';
import './Home.css'
import SectionA from '../components/Homecomps/SectionA';
import Header from '../components/Navbar/Header'
import Aboutme from '../components/Homecomps/Aboutme';
import DesignPage from '../components/Homecomps/Design/Design';
import DesignC from '../components/Homecomps/Design/DesignC'
import Contact from '../components/Homecomps/Contact/Contact'
import Footer from '../components/Homecomps/Footer/Footer'

export const Home = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const gradientStyle = {
    background: 'linear-gradient(to bottom, #054761 -10%, #00131A 18%, #000D14 50%, #000000 100%)',
    minHeight: '100vh',
    width: '100%',
    color: 'white'
  };


  return (
    <div className='mainroot' style={gradientStyle}>
    {/* Custom cursor elements */}
    <div 
      className="cursor-dot" 
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        opacity: clicked ? 0.7 : 1,
        scale: clicked ? 0.5 : 1
      }}
    />
    <div 
      className="cursor-outline" 
      style={{
        transform: `translate(calc(${position.x}px - 50%), calc(${position.y}px - 50%))`,
        borderWidth: clicked ? '3px' : '2px'
      }}
    />
          <Header />
      
      {/* Home/Hero Section */}
      <section id="home">
        <SectionA />
      </section>
      
      {/* About Me Section */}
      <section id="about" style={{ padding: '4rem 0' }}>
        <Aboutme />
      </section>
      
      {/* Designs/Projects Section */}
      <section id="projects" style={{ padding: '4rem 0' }}>
        <DesignPage />
      </section>
      
      <section id="services" style={{ padding: '4rem 0' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}><DesignC/></h2>
      </section>
      
      <section id="contact" style={{ padding: '4rem 0' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}><Contact/></h2>
      </section>

      <Footer/>
    </div>
  );
};