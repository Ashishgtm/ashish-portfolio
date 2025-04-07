import React, { useEffect, useRef } from 'react';
import './DesignB.css';

const StatsSection = () => {
  // Refs for the numbers we want to animate
  const experienceRef = useRef(null);
  const projectRef = useRef(null);
  const productRef = useRef(null);
  const reviewRef = useRef(null);
  const clientRef = useRef(null);

  // Function to animate counting
  const animateCount = (element, target, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current).toLocaleString();
    }, 16);
  };

  // Intersection Observer to trigger animations when scrolled into view
  useEffect(() => {
    // Store current ref values in variables
    const experienceElement = experienceRef.current;
    const projectElement = projectRef.current;
    const productElement = productRef.current;
    const reviewElement = reviewRef.current;
    const clientElement = clientRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.getAttribute('data-target'));
          animateCount(entry.target, target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    if (experienceElement) observer.observe(experienceElement);
    if (projectElement) observer.observe(projectElement);
    if (productElement) observer.observe(productElement);
    if (reviewElement) observer.observe(reviewElement);
    if (clientElement) observer.observe(clientElement);

    return () => {
      if (experienceElement) observer.unobserve(experienceElement);
      if (projectElement) observer.unobserve(projectElement);
      if (productElement) observer.unobserve(productElement);
      if (reviewElement) observer.unobserve(reviewElement);
      if (clientElement) observer.unobserve(clientElement);
    };
  }, []);

  return (
    <div className="stats-container">
      <div className="stats-experience-card">
        <div className="stats-number" ref={experienceRef} data-target="5">0</div>
        <div className="stats-title">Years Of Experience</div>
        <p className="stats-description">
        We architect digital experiences that blend aesthetic mastery with strategic functionality, 
        crafting websites that perform as powerfully as they impress.
        </p>
      </div>

      <div className="stats-metrics-container">
        <div className="stats-metric-card">
          <div className="metric-value" ref={projectRef} data-target="194">0</div>
          <div className="metric-label">Our Project Complete</div>
        </div>

        <div className="stats-metric-card">
          <div className="metric-value" ref={productRef} data-target="160">0</div>
          <div className="metric-label">Our Natural Products</div>
        </div>

        <div className="stats-metric-card">
          <div className="metric-value" ref={reviewRef} data-target="123">0</div>
          <div className="metric-label">Clients Reviews</div>
        </div>

        <div className="stats-metric-card">
          <div className="metric-value" ref={clientRef} data-target="156">0</div>
          <div className="metric-label">Our Satisfied Clients</div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;