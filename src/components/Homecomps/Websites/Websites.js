import React from 'react';
import './Websites.css';
import lexis from './lexis.png'
import educraft from './educraft.png'
import redhunt from './redhunt.png'
import itsolution from './itsolution.png'
import portfolio from './portfolio.png'
import netflix from './netflix.png'
import car from './car.png'

const FeaturedWebsites = () => {
  const websites = [
    {
      year: '2025',
      title: 'My Portfolio',
      description: 'Currently Viewing',

      imgSrc: portfolio,
      liveSiteLink: 'http://aashish-gautam.com.np/'
    },
    {
      year: '2025',
      title: 'Lexis Education Center',
      description: 'Consultancy',

      imgSrc: lexis,
      liveSiteLink: 'https://www.lexiseducation.com.np/home'
    },
    {
      year: '2020',
      title: 'Ecommerce',
      description: 'Shopping',

      imgSrc: redhunt,
      liveSiteLink: 'https://shopwithmeee.netlify.app/'
    },
    {
      year: '2025',
      title: 'Educraft Abroad Studies',
      description: 'Consultancy',

      imgSrc: educraft,
      liveSiteLink: 'https://educraftabroadstudies.vercel.app'
    },
    {
      year: '2021',
      title: 'IT Solution',
      description: 'It Solution',

      imgSrc: itsolution,
      liveSiteLink: 'https://itsolutionnepp.netlify.app'
    },
    {
      year: '2023',
      title: 'Netflix',
      description: 'Landing Page',

      imgSrc: netflix,
      liveSiteLink: 'https://netflandpage.netlify.app'
    },
    {
      year: '2019',
      title: 'Jaguar Car',
      description: 'Car Services',

      imgSrc: car,
      liveSiteLink: 'https://carservicesss.netlify.app/'
    },
  ];

  return (
    <div className="featured-websites">
      <h2>Featured Websites</h2>
      <div className="websites-container">
        {websites.map((website, index) => (
          <div className="website-card" key={index}>
            <div className="website-info">
              <span className="website-year">{website.year}</span><br/>
              <span className='website-title'>{website.title}</span>
              <img src={website.imgSrc} alt={website.title} />
              <p className='website-description'>{website.description}</p>

              <a href={website.liveSiteLink} className="live-site-link">Live Site</a>
            </div>
          </div>
        ))}
      </div>
      <a href="/" className="all-sites-link">All Sites ➔</a>
    </div>
  );
};

export default FeaturedWebsites;