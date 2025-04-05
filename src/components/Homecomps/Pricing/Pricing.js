import React from 'react';
import './Pricing.css';

const PricingPage = () => {
  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <h4 className="pricing-subtitle">MY PRICE PLAN</h4>
        <h2 className="pricing-title">Enhancing Collaboration <br />between Remote</h2>
      </div>
      
      <div className="pricing-cards">
        <div className="pricing-card">
          <div className="pricing-card-header">
            <h6>Starter</h6>
            <div className="pricing-amount">
              <span className="dollar-sign">$</span>
              <span className="price">4.99</span>
            </div>
            <p className="per-month">Per Month</p>
          </div>

          <div className="pricing-features">
          <div className="feature-item">
              <div className="feature-icon">•</div>
              <p>Basic Website Hosting</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">•</div>
              <p>Website (React JS/ CSS )</p>
            </div>  
           
            <div className="feature-item">
              <div className="feature-icon">•</div>
              <p>5GB Monthly Bandwidth</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">•</div>
              <p>24/7 Customer Support</p>
            </div>
          </div>
          
          <button className="get-started-btn">Get Started →</button>
        </div>
        
        <div className="pricing-card featured">
          <div className="pricing-card-header">
            <h6>Basic</h6>
            <div className="pricing-amount">
              <span className="dollar-sign">$</span>
              <span className="price">199.99</span>
            </div>
            <p className="per-month">Per Month</p>
          </div>

          <div className="pricing-features">
            <div className="feature-item">
              <div className="feature-icon">•</div>
              <p>Premium Cloud Hosting</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">•</div>
              <p>Unlimited Websites</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">•</div>
              <p> Free Domain </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">•</div>
              <p>Advanced Analytics Dashboard
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">•</div>
              <p>24/7 Customer Support</p>
            </div>
          
          </div>
          
          <button className="get-started-btn featured-btn">Get Started →</button>
        </div>
        
        <div className="pricing-card">
          <div className="pricing-card-header">
            <h6>Premium</h6>
            <div className="pricing-amount">
              <span className="dollar-sign">$</span>
              <span className="price">29.99</span>
            </div>
            <p className="per-month">Per Month</p>
          </div>

          <div className="pricing-features">
            <div className="feature-item">
              <div className="feature-icon">•</div>
              <p>Advanced Website Hosting</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">•</div>
              <p>Websites (React/CSS/GSAP)</p>

            </div>
            <div className="feature-item">
              <div className="feature-icon">•</div>
              <p>Free Domain (1st Year)</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">•</div>
              <p>24/7 Customer Support</p>
            </div>
          </div>
          
          <button className="get-started-btn">Get Started →</button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
