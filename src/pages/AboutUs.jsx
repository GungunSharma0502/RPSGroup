import React from 'react';
import '../css/AboutUs.css';

const AboutUs = () => {
  const stats = [
    {
      value: '10',
      unit: 'Million',
      description: 'SQ. FT. AREA DELIVERED'
    },
    {
      value: '2.7',
      unit: 'Million',
      description: 'SQ. FT. AREA UPCOMING'
    },
    {
      value: '5,300',
      unit: '+',
      description: 'SATISFIED CUSTOMERS'
    },
    {
      value: '11',
      unit: '+',
      description: 'SUCCESSFUL PROJECTS'
    }
  ];

  const testimonials = [
    {
      name: 'RAJENDER TYAGI',
      text: 'Shifted to Faridabad to set up my business and was looking for a shop in RPS Central. I was convinced with the word of mouth of this project.',
      image: '/api/placeholder/60/60'
    },
    {
      name: 'EBK SHETTY',
      text: 'The township was stuffed with new age and modern amenities like a club, swimming pool and other lifestyle features that made for an extraordinary life after work in this township.',
      image: '/api/placeholder/60/60'
    },
    {
      name: 'AJAY BAGGA',
      text: 'Faridabad always had the potential of a modern city and RPS through this township set an example on thinking and making possible this dream. This township is an Epitome of thing.',
      image: '/api/placeholder/60/60'
    }
  ];

  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="about-hero">
        <h1 className="about-hero-title">ABOUT US</h1>
      </div>

      {/* Overview Section */}
      <div className="about-section">
        <div className="about-content-wrapper">
          <div className="about-text-column">
            <h2 className="about-section-title">
              <span className="about-title-icon">⋮⋮⋮</span> OVERVIEW
            </h2>
            <p className="about-description">
              In 2003, our visionary leaders, Mr. S.P. Gupta and Mr. R.C. Gupta, had a dream of creating futuristic infrastructure in Faridabad. This dream took shape with their inaugural project, Green Valley, which achieved remarkable success. Building on this triumph, our visionary leaders went on to introduce another exceptional project named Paras Apartment.
            </p>
            <p className="about-description">
              Following the outstanding success of their first two projects, the RPS Group was formally established in 2005. Subsequently, RPS Group embarked on a series of exceptional projects, including RPS Auria, RPS Savana, RPS Palms, RPS Palm Drive, and RPS Paras Apartment. Furthermore, RPS Group is actively engaged in an ongoing commercial venture, 12th Avenue, a notable project, which is a KM from Delhi-Faridabad toll progressing towards completion by 2024.
            </p>
          </div>
          <div className="about-image-column">
            <img 
              src="https://rpsgroupindia.com/wp-content/uploads/2023/05/nite-copy-1024x768.jpg" 
              alt="RPS Overview" 
              className="about-section-image"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="about-stats-section">
        {stats.map((stat, index) => (
          <div key={index} className="about-stat-card">
            <div className="about-stat-value">
              {stat.value} <span className="about-stat-unit">{stat.unit}</span>
            </div>
            <div className="about-stat-description">{stat.description}</div>
          </div>
        ))}
      </div>

      {/* Vision Section */}
      <div className="about-section about-vision-section">
        <div className="about-content-wrapper">
          <div className="about-text-column">
            <h2 className="about-section-title">
              <span className="about-title-icon">⋮⋮⋮</span> VISION
            </h2>
            <p className="about-description">
              Our Vision at <strong>RPS Group</strong> is to be the leading force in the real estate industry, recognized for our excellence, innovation, and client-centric approach. We aim to set new standards in real estate services, driven by a passion for creating valuable and enduring connections between people and their ideal properties.
            </p>
          </div>
          <div className="about-image-column">
            <img 
              src="https://rpsgroupindia.com/wp-content/uploads/2023/05/Entrance-View-Hires-1024x576.jpg" 
              alt="RPS Vision" 
              className="about-section-image"
            />
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="about-section">
        <div className="about-content-wrapper">
          <div className="about-text-column about-mission-text">
            <h2 className="about-section-title">
              <span className="about-title-icon">⋮⋮⋮</span> MISSION
            </h2>
            <p className="about-description">
              Our Mission at <strong>RPS Group</strong> is to transform dreams into realities. We are dedicated to providing exceptional real estate services that empower our clients to achieve their property goals, whether it's finding the perfect home, making profitable investments, or optimizing property management.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="about-testimonials-section">
        <h2 className="about-section-title about-testimonials-title">
          <span className="about-title-icon">⋮⋮⋮</span> TESTIMONIALS
        </h2>
        <div className="about-testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="about-testimonial-card">
              <div className="about-testimonial-stars">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i} className="about-star">{star}</span>
                ))}
              </div>
              <p className="about-testimonial-text">{testimonial.text}</p>
              <div className="about-testimonial-author">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="about-testimonial-avatar"
                />
                <span className="about-testimonial-name">{testimonial.name}</span>
                <span className="about-testimonial-quote">"</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;