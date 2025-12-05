import React from 'react';
import '../css/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Floating Icons */}
      <div className="floating-icon icon-1">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="2"/>
          <path d="M12 6v6l4 2" strokeWidth="2"/>
        </svg>
      </div>
      <div className="floating-icon icon-2">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeWidth="2"/>
        </svg>
      </div>
      <div className="floating-icon icon-3">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2"/>
          <path d="M9 3v18M15 3v18M3 9h18M3 15h18" strokeWidth="2"/>
        </svg>
      </div>
      <div className="floating-icon icon-4">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" strokeWidth="2"/>
        </svg>
      </div>

      <div className="hero-container">
        {/* Main Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            Empowering the Future of Growth with Trusted Solutions
          </h1>
          <p className="hero-subtitle">
            Reliable business services, financial solutions, and development expertise — helping individuals and organizations grow smarter.
          </p>
          
          <div className="hero-buttons">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">Contact Us</button>
          </div>

          {/* Rating Section */}
          <div className="rating-section">
            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="star">⭐</span>
              ))}
            </div>
            <p className="rating-text">Trusted by thousands across multiple sectors.</p>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="stats-grid">
          {/* Card 1 */}
          <div className="stat-card card-primary">
            <div className="stat-number">2000+</div>
            <p className="stat-label">Successful Clients & Partners</p>
          </div>

          {/* Card 2 */}
          <div className="stat-card card-light">
            <div className="stat-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeWidth="2"/>
                <polyline points="22 4 12 14.01 9 11.01" strokeWidth="2"/>
              </svg>
            </div>
            <div className="stat-content">
              <div className="stat-header">
                <span className="stat-title">Completed Services</span>
                <span className="stat-badge">+15%</span>
              </div>
              <div className="stat-number">5000+</div>
              <p className="stat-growth">Services & Approvals delivered</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="stat-card card-success">
            <div className="stat-number">10+</div>
            <p className="stat-label">Years of Industry Excellence</p>
          </div>

          {/* Card 4 */}
          <div className="stat-card card-dark">
            <div className="stat-icon-large">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5z" strokeWidth="2"/>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="stat-title-large">Building Trust, Growth & Financial Strength</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;