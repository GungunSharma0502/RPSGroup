import React from 'react';
import '../css/Establishment.css';

const Establishment = () => {
  return (
    <section className="establishment-section">
      <div className="establishment-overlay">
        <div className="establishment-content">
          <h1 className="establishment-title">OUR ESTABLISHMENT</h1>
          <p className="establishment-description">
            We are a premier force in the real estate market, dedicated to Building Futuristics Infrastructure with a legacy of excellence and a commitment to innovation, we redefine modern living lifestyle.
          </p>
        </div>
      </div>

      <div className="cards-wrapper">
        <div className="establishment-content">
          <div className="cards-container">
            <div className="property-card">
              <div className="card-icon">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 56H56V32L32 16L8 32V56Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 56V36H44V56" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 28H28M36 28H44" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>
              <h2 className="card-title">COMMERCIAL</h2>
              <p className="card-text">
                Unlock the potential of your business with our exceptional commercial spaces
              </p>
            </div>

            <div className="property-card">
              <div className="card-icon">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="12" y="12" width="12" height="44" stroke="currentColor" strokeWidth="3"/>
                  <rect x="28" y="12" width="12" height="44" stroke="currentColor" strokeWidth="3"/>
                  <rect x="44" y="12" width="12" height="44" stroke="currentColor" strokeWidth="3"/>
                  <line x1="16" y1="20" x2="20" y2="20" stroke="currentColor" strokeWidth="2"/>
                  <line x1="16" y1="28" x2="20" y2="28" stroke="currentColor" strokeWidth="2"/>
                  <line x1="16" y1="36" x2="20" y2="36" stroke="currentColor" strokeWidth="2"/>
                  <line x1="32" y1="20" x2="36" y2="20" stroke="currentColor" strokeWidth="2"/>
                  <line x1="32" y1="28" x2="36" y2="28" stroke="currentColor" strokeWidth="2"/>
                  <line x1="32" y1="36" x2="36" y2="36" stroke="currentColor" strokeWidth="2"/>
                  <line x1="48" y1="20" x2="52" y2="20" stroke="currentColor" strokeWidth="2"/>
                  <line x1="48" y1="28" x2="52" y2="28" stroke="currentColor" strokeWidth="2"/>
                  <line x1="48" y1="36" x2="52" y2="36" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h2 className="card-title">RESIDENTIAL</h2>
              <p className="card-text">
                Experience the epitome of luxury living in our exquisite residential apartments
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Establishment;