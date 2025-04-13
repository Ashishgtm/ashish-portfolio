import React, { useState } from 'react';
import './Contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));
    
    fetch("https://formspree.io/f/xblgwwrv", { // Replace with your actual endpoint
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (response.ok) {
          setFormData({
            name: '',
            phone: '',
            email: '',
            subject: '',
            message: ''
          });
          setStatus({
            submitted: true,
            submitting: false,
            info: { error: false, msg: 'Message sent successfully!' }
          });
          
          // Reset form status after 5 seconds
          setTimeout(() => {
            setStatus({
              submitted: false,
              submitting: false,
              info: { error: false, msg: null }
            });
          }, 5000);
        } else {
          throw new Error('Form submission failed');
        }
      })
      .catch(error => {
        console.log('FAILED...', error);
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: true, msg: 'An error occurred. Please try again later.' }
        });
      });
  };

  return (
    <div className="contact-container">
      <h3 className='contactclass'>Contact</h3>
      {/* Contact Info Cards */}
      <div className="info-cards">
        <div className="info-card">
          <div className="icon-circle">
            <i className="location-icon">📍</i>
          </div>
          <h3>Address</h3>
          <p>Satdobato, Lalitpur, Nepal</p>
        </div>

        <div className="info-card">
          <div className="icon-circle">
            <i className="email-icon">✉️</i>
          </div>
          <h3>E-Mail</h3>
          <p>ashishgautam9846@gmail.com</p>
        </div>

        <div className="info-card">
          <div className="icon-circle">
            <i className="phone-icon">📞</i>
          </div>
          <h3>Call Me</h3>
          <p>+977-9846911943</p>
        </div>
      </div>

      {/* Split Layout Form Section */}
      <div className="main-form-container">
        <div className="form-wrapper">
          <div className="form-left">
            <div className="form-header">
              <h4>GET IN TOUCH</h4>
              <h2>Elevate your brand with Me</h2>
              <p>
                Interested in collaborating? Share your project details, and I'll 
                provide tailored solutions to elevate your brand's digital experience.
              </p>
            </div>
          </div>

          <div className="form-right">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="form-row">
                <button 
                  type="submit" 
                  className={`submit-button ${status.submitting ? 'loading' : ''}`}
                  disabled={status.submitting}
                >
                  {status.submitting ? '' : 'Appointment Now →'}
                </button>
              </div>
              {status.info.msg && (
                <div className={`form-message ${status.info.error ? 'error' : 'success'}`} style={{
                  color: status.info.error ? '#e74c3c' : '#2ecc71',
                  marginTop: '15px',
                  textAlign: 'center'
                }}>
                  {status.info.msg}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;