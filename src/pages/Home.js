import React from 'react';
import './Home.css'
import SectionA from '../components/Homecomps/SectionA';
import Header from '../components/Navbar/Header'
import Aboutme from '../components/Homecomps/Aboutme';
import DesignPage from '../components/Homecomps/Design/Design';

export const Home = () => {
  const gradientStyle = {
    background: 'linear-gradient(to bottom, #054761 0%, #00131A 30%, #000D14 60%, #000000 100%)',
    minHeight: '100vh',
    width: '100%',
    color: 'white'
  };

  return (
    <div className='mainroot' style={gradientStyle}>
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
      
      {/* <section id="services" style={{ padding: '4rem 0' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>My Services</h2>
      </section>
      
      <section id="contact" style={{ padding: '4rem 0' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Contact Me</h2>
      </section> */}
    </div>
  );
};