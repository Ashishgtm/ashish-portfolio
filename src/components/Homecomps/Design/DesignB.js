import React, { useEffect, useRef } from 'react';
import './DesignB.css';

const StatsSection = () => {
  // Refs for the numbers we want to animate
  const experienceRef = useRef(null);
  const projectRef = useRef(null);
  const productRef = useRef(null);
  const reviewRef = useRef(null);
  const clientRef = useRef(null);
  
  // Refs for the cards to animate
  const experienceCardRef = useRef(null);
  const metricCardsRef = useRef([]);

  // Function to animate counting
  const animateCount = (element, target, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;
    
    // Add animation class for scaling effect
    element.classList.add('animate');
    
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
    const experienceCard = experienceCardRef.current;
    const metricCards = metricCardsRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // For number elements
          if (entry.target.hasAttribute('data-target')) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            animateCount(entry.target, target);
          }
          
          // For cards
          entry.target.classList.add('animate');
          
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    // Observe number elements
    if (experienceElement) observer.observe(experienceElement);
    if (projectElement) observer.observe(projectElement);
    if (productElement) observer.observe(productElement);
    if (reviewElement) observer.observe(reviewElement);
    if (clientElement) observer.observe(clientElement);
    
    // Observe card elements
    if (experienceCard) observer.observe(experienceCard);
    metricCards.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => {
      // Clean up observers
      if (experienceElement) observer.unobserve(experienceElement);
      if (projectElement) observer.unobserve(projectElement);
      if (productElement) observer.unobserve(productElement);
      if (reviewElement) observer.unobserve(reviewElement);
      if (clientElement) observer.unobserve(clientElement);
      
      if (experienceCard) observer.unobserve(experienceCard);
      metricCards.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  // Function to add a ref to the metric cards array
  const addToMetricCardsRef = (el) => {
    if (el && !metricCardsRef.current.includes(el)) {
      metricCardsRef.current.push(el);
    }
  };

  return (
    <div className="stats-container">
      <div className="stats-experience-card" ref={experienceCardRef}>
        <div className="stats-number" ref={experienceRef} data-target="4">0</div>
        <div className="stats-title">Years Of Experience</div>
        <p className="stats-description">
          We architect digital experiences that blend aesthetic mastery with strategic functionality, 
          crafting websites that perform as powerfully as they impress.
        </p>
      </div>

      <div className="stats-metrics-container">
        <div className="stats-metric-card" ref={addToMetricCardsRef}>
          {/* Add particles for floating animation */}
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          
          <div className="metric-value" ref={projectRef} data-target="28">0</div>
          <div className="metric-label"> Project Completed</div>
        </div>

        <div className="stats-metric-card" ref={addToMetricCardsRef}>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          
          <div className="metric-value" ref={productRef} data-target="18">0</div>
          <div className="metric-label">Natural Products</div>
        </div>

        <div className="stats-metric-card" ref={addToMetricCardsRef}>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          
          <div className="metric-value" ref={reviewRef} data-target="16">0</div>
          <div className="metric-label">Clients Reviews</div>
        </div>

        <div className="stats-metric-card" ref={addToMetricCardsRef}>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          
          <div className="metric-value" ref={clientRef} data-target="28">0</div>
          <div className="metric-label">Satisfied Clients</div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;