import React, { useState } from 'react';
import '../css/Contact.css';
import Map from './Map';

const Contact = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const contactSections = [
    {
      id: 1,
      title: "SALES ENQUIRY",
      phone: "+91 9010 444 000",
      email: "info@rpsgroupindia.com",
      description: "Connect with our sales team for property inquiries"
    },
    {
      id: 2,
      title: "MEDIA ENQUIRY",
      phone: "+91 7419 519 1225",
      email: "mocom@rpsgroupindia.com",
      description: "Press releases and media collaborations"
    },
    {
      id: 3,
      title: "CUSTOMER CARE",
      phone: "+91 9 4044 4040",
      email: "customercare@rpsgroupindia.com",
      description: "24/7 support for all your queries"
    },
    {
      id: 4,
      title: "HR",
      phone: "",
      email: "hr@rpsgroupindia.com",
      description: "Join our growing team of professionals"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero-section">
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">GET IN TOUCH</h1>
          <p className="contact-hero-subtitle">Let's discuss your dream property</p>
          <div className="contact-hero-divider">
            <span className="contact-divider-line"></span>
            <span className="contact-divider-icon">→</span>
            <span className="contact-divider-line"></span>
          </div>
        </div>
        <div className="contact-scroll-indicator">
          <div className="contact-scroll-icon"></div>
        </div>
      </div>

      {/* Contact Cards Section */}
      <div className="contact-section">
        <div className="contact-container">
          <div className="contact-grid">
            {contactSections.map((section, index) => (
              <div
                key={section.id}
                className={`contact-card ${hoveredCard === section.id ? 'contact-card-hovered' : ''}`}
                onMouseEnter={() => setHoveredCard(section.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="contact-card-glow"></div>
                <div className="contact-card-content">
                  <div className="contact-card-header">
                    <div className="contact-card-text">
                      <h3 className="contact-card-title">{section.title}</h3>
                      <p className="contact-card-description">{section.description}</p>
                    </div>
                    <div className="contact-card-icon">→</div>
                  </div>
                  
                  <div className="contact-card-details">
                    {section.phone && (
                      <a href={`tel:${section.phone.replace(/\s/g, '')}`} className="contact-item">
                        <div className="contact-icon-box">
                          <svg className="contact-svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M22 16.92v3A2 2 0 0 1 20 22a20 20 0 0 1-8.71-3.1 19.79 19.79 0 0 1-6.06-6.06A20 20 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="contact-text">{section.phone}</span>
                      </a>
                    )}
                    <a href={`mailto:${section.email}`} className="contact-item">
                      <div className="contact-icon-box">
                        <svg className="contact-svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <polyline points="22,6 12,13 2,6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="contact-text">{section.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Form and Map Section */}
          <div className="contact-form-map-section">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2 className="contact-form-title">Send us a Message</h2>
              <p className="contact-form-subtitle">We'll get back to you within 24 hours</p>
              
              <div className="contact-form-container">
                <div className="contact-form-group">
                  <label className="contact-form-label">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="contact-form-input"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="contact-form-group">
                  <label className="contact-form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="contact-form-input"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="contact-form-group">
                  <label className="contact-form-label">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="contact-form-input"
                    placeholder="+91 98765 43210"
                  />
                </div>
                
                <div className="contact-form-group">
                  <label className="contact-form-label">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="contact-form-textarea"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                
                <button onClick={handleSubmit} className="contact-submit-button">
                  <svg className="contact-button-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <line x1="22" y1="2" x2="11" y2="13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Send Message
                </button>
              </div>
            </div>

            {/* Map */}
            <div className="contact-map-wrapper">
              <h2 className="contact-map-title">Visit Our Office</h2>
              <p className="contact-map-subtitle">We'd love to meet you in person</p>
              <Map />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;