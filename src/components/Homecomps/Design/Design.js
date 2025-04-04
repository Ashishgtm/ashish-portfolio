import React from 'react';
import './Design.css';
import DesignB from './DesignB'

const ServiceCards = () => {
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
        </svg>
      ),
      title: 'Web Design',
      projects: '120 Projects'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="18" y="3" width="4" height="4" rx="1"></rect>
          <rect x="2" y="3" width="4" height="4" rx="1"></rect>
          <rect x="10" y="3" width="4" height="4" rx="1"></rect>
          <rect x="10" y="17" width="4" height="4" rx="1"></rect>
          <path d="M4 17h4"></path>
          <path d="M20 17h-4"></path>
          <path d="M12 7v10"></path>
          <path d="M4 5v10"></path>
          <path d="M20 5v10"></path>
        </svg>
      ),
      title: 'Ui/Ux Design',
      projects: '241 Projects'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 8.5A4.5 4.5 0 0 0 9.5 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3.5A4.5 4.5 0 0 0 14 8.5Z"></path>
          <path d="M12 2v2"></path>
          <path d="M4.833 4.833 3.417 3.417"></path>
          <path d="M2 12H0"></path>
          <path d="M4.833 19.167l-1.416 1.416"></path>
          <path d="M12 22v2"></path>
          <path d="m19.167 19.167 1.416 1.416"></path>
          <path d="M22 12h2"></path>
          <path d="m19.167 4.833 1.416-1.416"></path>
        </svg>
      ),
      title: 'Web Research',
      projects: '240 Projects'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
      ),
      title: 'Marketing',
      projects: '331 Prodect'
    }
  ];

  return (
    <div className="service-container">
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          <div className="icon-container">
            {service.icon}
          </div>
          <div className="title-container">
            <h3 className="service-title">{service.title}</h3>
            <div className="title-underline"></div>
          </div>
          <p className="project-count">{service.projects}</p>
        </div>
      ))}

      <DesignB/>
    </div>
  );
};

export default ServiceCards;