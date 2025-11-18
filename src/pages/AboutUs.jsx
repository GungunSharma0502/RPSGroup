import React, { useEffect, useRef, useState } from 'react';
import '../css/AboutUs.css';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState({});
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.aboutus-animate-on-scroll').forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const stats = [
    { value: '10', unit: 'Million', description: 'SQ. FT. AREA DELIVERED' },
    { value: '2.7', unit: 'Million', description: 'SQ. FT. AREA UPCOMING' },
    { value: '5,300', unit: '+', description: 'SATISFIED CUSTOMERS' },
    { value: '11', unit: '+', description: 'SUCCESSFUL PROJECTS' }
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
    <div className="aboutus-container">
      {/* Hero Section */}
      <div className="aboutus-hero">
        <div 
          className="aboutus-hero-bg"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200')"
          }}
        />
        <div className="aboutus-hero-overlay" />
        
        <div className="aboutus-hero-content">
          <div className="aboutus-animate-on-scroll aboutus-visible aboutus-hero-line-container">
            <div className="aboutus-hero-line" />
          </div>
          <h1 className="aboutus-hero-title">
            <span className="aboutus-shimmer-text">ABOUT US</span>
          </h1>
          <p className="aboutus-hero-subtitle aboutus-animate-on-scroll aboutus-visible" style={{animationDelay: '0.2s'}}>
            BUILDING DREAMS, CREATING LEGACY
          </p>
          <div className="aboutus-hero-dots aboutus-animate-on-scroll aboutus-visible" style={{animationDelay: '0.4s'}}>
            <div className="aboutus-dot" />
            <div className="aboutus-dot" style={{animationDelay: '0.2s'}} />
            <div className="aboutus-dot" style={{animationDelay: '0.4s'}} />
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="aboutus-overview-section">
        <div className="aboutus-bg-blur aboutus-bg-blur-top-left" />
        <div className="aboutus-bg-blur aboutus-bg-blur-bottom-right" />

        <div className="aboutus-section-container">
          <div id="overview" className="aboutus-animate-on-scroll aboutus-animate-left aboutus-section-header">
            <div className="aboutus-header-wrapper">
              <div className="aboutus-header-lines">
                <div className="aboutus-header-line" />
                <div className="aboutus-header-line" />
                <div className="aboutus-header-line" />
              </div>
              <h2 className="aboutus-section-title">OVERVIEW</h2>
            </div>
          </div>

          <div className="aboutus-overview-grid">
            <div id="overview-text" className={`aboutus-animate-on-scroll aboutus-animate-left ${isVisible['overview-text'] ? 'aboutus-visible' : ''}`}>
              <div className="aboutus-glass-card">
                <p className="aboutus-text">
                  In 2003, our visionary leaders, Mr. S.P. Gupta and Mr. R.C. Gupta, had a dream of creating futuristic infrastructure in Faridabad. This dream took shape with their inaugural project, Green Valley, which achieved remarkable success. Building on this triumph, our visionary leaders went on to introduce another exceptional project named Paras Apartment.
                </p>
                <div className="aboutus-divider" />
                <p className="aboutus-text">
                  Following the outstanding success of their first two projects, the RPS Group was formally established in 2005. Subsequently, RPS Group embarked on a series of exceptional projects, including RPS Auria, RPS Savana, RPS Palms, RPS Palm Drive, and RPS Paras Apartment. Furthermore, RPS Group is actively engaged in an ongoing commercial venture, 12th Avenue, a notable project, which is a KM from Delhi-Faridabad toll progressing towards completion by 2024.
                </p>
              </div>
            </div>

            <div id="overview-img" className={`aboutus-animate-on-scroll aboutus-animate-right ${isVisible['overview-img'] ? 'aboutus-visible' : ''}`}>
              <div className="aboutus-gradient-border aboutus-floating">
                <img 
                  src="https://rpsgroupindia.com/wp-content/uploads/2023/05/nite-copy-1024x768.jpg" 
                  alt="RPS Overview" 
                  className="aboutus-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="aboutus-stats-section">
        <div className="aboutus-stats-bg" />
        
        <div className="aboutus-section-container">
          <div className="aboutus-stats-grid">
            {stats.map((stat, index) => (
              <div
                key={index}
                id={`stat-${index}`}
                className={`aboutus-animate-on-scroll aboutus-animate-scale aboutus-stat-card ${isVisible[`stat-${index}`] ? 'aboutus-visible' : ''}`}
                style={{animationDelay: `${index * 0.15}s`}}
              >
                <div className="aboutus-gradient-border aboutus-stat-content">
                  <div className="aboutus-stat-value-wrapper">
                    <span className="aboutus-stat-value">{stat.value}</span>
                    <span className="aboutus-stat-unit">{stat.unit}</span>
                  </div>
                  <div className="aboutus-divider" />
                  <p className="aboutus-stat-description">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="aboutus-vision-section">
        <div className="aboutus-bg-blur aboutus-bg-blur-center" />

        <div className="aboutus-section-container">
          <div className="aboutus-vision-grid">
            <div id="vision-img" className={`aboutus-animate-on-scroll aboutus-animate-left ${isVisible['vision-img'] ? 'aboutus-visible' : ''}`}>
              <div className="aboutus-gradient-border aboutus-floating" style={{animationDelay: '1s'}}>
                <img 
                  src="https://rpsgroupindia.com/wp-content/uploads/2023/05/Entrance-View-Hires-1024x576.jpg" 
                  alt="RPS Vision" 
                  className="aboutus-image"
                />
              </div>
            </div>

            <div id="vision-text" className={`aboutus-animate-on-scroll aboutus-animate-right ${isVisible['vision-text'] ? 'aboutus-visible' : ''}`}>
              <div className="aboutus-header-wrapper">
                <div className="aboutus-header-lines">
                  <div className="aboutus-header-line aboutus-header-line-purple" />
                  <div className="aboutus-header-line aboutus-header-line-purple" />
                  <div className="aboutus-header-line aboutus-header-line-purple" />
                </div>
                <h2 className="aboutus-section-title">VISION</h2>
              </div>

              <div className="aboutus-glass-card">
                <p className="aboutus-text">
                  Our Vision at <span className="aboutus-highlight">RPS Group</span> is to be the leading force in the real estate industry, recognized for our excellence, innovation, and client-centric approach. We aim to set new standards in real estate services, driven by a passion for creating valuable and enduring connections between people and their ideal properties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="aboutus-mission-section">
        <div className="aboutus-section-container aboutus-mission-container">
          <div id="mission" className={`aboutus-animate-on-scroll aboutus-animate-scale ${isVisible['mission'] ? 'aboutus-visible' : ''}`}>
            <div className="aboutus-header-wrapper">
              <div className="aboutus-header-lines">
                <div className="aboutus-header-line" />
                <div className="aboutus-header-line" />
                <div className="aboutus-header-line" />
              </div>
              <h2 className="aboutus-section-title">MISSION</h2>
            </div>

            <div className="aboutus-glass-card aboutus-mission-card">
              <p className="aboutus-text aboutus-mission-text">
                Our Mission at <span className="aboutus-highlight">RPS Group</span> is to transform dreams into realities. We are dedicated to providing exceptional real estate services that empower our clients to achieve their property goals, whether it's finding the perfect home, making profitable investments, or optimizing property management.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="aboutus-testimonials-section">
        <div className="aboutus-bg-blur aboutus-bg-blur-top-right" />
        <div className="aboutus-bg-blur aboutus-bg-blur-bottom-left" />

        <div className="aboutus-section-container">
          <div id="testimonials-title" className={`aboutus-animate-on-scroll aboutus-testimonials-header ${isVisible['testimonials-title'] ? 'aboutus-visible' : ''}`}>
            <div className="aboutus-header-wrapper">
              <div className="aboutus-header-lines">
                <div className="aboutus-header-line aboutus-header-line-purple" />
                <div className="aboutus-header-line aboutus-header-line-purple" />
                <div className="aboutus-header-line aboutus-header-line-purple" />
              </div>
              <h2 className="aboutus-section-title">TESTIMONIALS</h2>
            </div>
            <p className="aboutus-testimonials-subtitle">What Our Clients Say About Us</p>
          </div>

          <div className="aboutus-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                id={`testimonial-${index}`}
                className={`aboutus-animate-on-scroll aboutus-testimonial-card ${isVisible[`testimonial-${index}`] ? 'aboutus-visible' : ''}`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="aboutus-gradient-border aboutus-testimonial-content">
                  <div className="aboutus-stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="aboutus-star">★</span>
                    ))}
                  </div>
                  
                  <p className="aboutus-testimonial-text">
                    "{testimonial.text}"
                  </p>

                  <div className="aboutus-testimonial-author">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="aboutus-author-image"
                    />
                    <div>
                      <p className="aboutus-author-name">{testimonial.name}</p>
                      <p className="aboutus-author-label">Verified Customer</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Accent */}
      <div className="aboutus-footer-accent" />
    </div>
  );
};

export default AboutUs;