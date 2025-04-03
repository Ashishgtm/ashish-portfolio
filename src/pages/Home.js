import React from 'react';
import './Home.css'

import SectionA from '../components/Homecomps/SectionA';
import Header from '../components/Navbar/Header'

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
      <SectionA />
    </div>
  );
};