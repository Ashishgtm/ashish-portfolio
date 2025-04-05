import React, { useState } from "react";
import "./DesignC.css";
import Pricing from '../Pricing/Pricing'
const ServicesGrid = () => {
  const [showAll, setShowAll] = useState(false);

  const servicesdesign = [
    {
      id: "01",
      title: "Responsive Web Development",
      description:
        "I build fully responsive websites that adapt seamlessly to all devices - from desktops to smartphones. Using modern CSS frameworks and mobile-first approaches, I ensure your site looks perfect everywhere.",
    },
    {
      id: "02",
      title: "Performance Optimization",
      description:
        " I specialize in optimizing frontend performance - reducing bundle sizes, implementing lazy loading, and achieving >90 Lighthouse scores for faster, smoother user experiences.",
    },
    {
      id: "03",
      title: "Accessibility Audits",
      description:
        "I ensure your web applications meet WCAG 2.1 standards, implementing proper ARIA labels, keyboard navigation, and contrast ratios for inclusive design.",
    },
    {
      id: "04",
      title: "UI Component Libraries",
      description:
        "I create reusable UI component systems with React/Vue.js, improving development efficiency and maintaining design consistency across your entire application.",
    },
    {
      id: "05",
      title: " Frontend Architecture",
      description:
        "I design scalable frontend architectures with proper state management (Redux/Zustand), clean component hierarchies, and maintainable code structures.",
    },
    {
      id: "06",
      title: "Animation & Microinteractions",
      description:
        "I craft engaging user experiences with subtle animations and microinteractions using CSS animations, WebGL, or Three.js for memorable digital products.",
    },
    {
      id: "07",
      title: " CMS Integration",
      description:
        "I seamlessly connect frontends to headless CMS platforms like Contentful or Sanity, empowering your team to manage content without developer dependency.",
    },
    {
      id: "08",
      title: "Interactive Prototyping",
      description:
        "From Figma designs to functional prototypes, I bridge the gap between design and development with clickable, animated prototypes using Framer Motion or GSAP.",
    },
    {
      id: "09",
      title: "Design System Implementation",
      description:
        "I transform design systems into coded components with Storybook documentation, ensuring visual consistency and developer efficiency.",
    },
    {
      id: "10",
      title: "Progressive Web Apps",
      description:
        "I build PWAs with offline capabilities, push notifications, and app-like experiences that boost engagement and conversion rates.",
    },
  ];
  const displayedServices = showAll ? servicesdesign : servicesdesign.slice(0, 6);

  return (
    <div className="design-container">
      <h3>Services</h3>

      <div className="design-grid">
        {displayedServices.map((service) => (
          <div key={service.id} className="design-card">
            <div className="designcard-header">
              <span className="designcard-number">{service.id}.</span>
              <h3 className="designcard-title">{service.title}</h3>
            </div>
            <p className="designcard-description">{service.description}</p>
          </div>
        ))}
      </div>

      {servicesdesign.length > 6 && (
        <button 
          className="show-more-button" 
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      )}
      <Pricing/>
    </div>
    
  );
};

export default ServicesGrid;
