import React, { useState } from 'react';
import './Savana1.css';

const Savana1 = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [activeLayout, setActiveLayout] = useState(1);
  const [activeGallery, setActiveGallery] = useState('exterior');

  const navItems = [
    { id: 'all', label: 'OVERVIEW' },
    { id: 'amenities', label: 'AMENITIES' },
    { id: 'layout', label: 'LAYOUT' },
    { id: 'why-choose', label: 'WHY CHOOSE US' },
    { id: 'gallery', label: 'GALLERY' },
    { id: 'benefits', label: 'BENEFITS' },
    { id: 'location', label: 'LOCATION' }
  ];

  const renderOverview = () => (
    <section id="overview" className="savana1-overview-section">
      <div className="savana1-container-inner">
        <div className="savana1-section-header">
          <span className="savana1-dots">::::</span>
          <h2 className="savana1-section-title">PROJECT OVERVIEW</h2>
        </div>
        <div className="savana1-overview-content">
          <div className="savana1-overview-text">
            <p className="savana1-text-paragraph">
              RPS Savana stands as an epitome of refined living, set across 41.40 
              acres of meticulously planned residential expanse. We offers a 
              variety of housing options, from contemporary apartments to 
              opulent villas, ensuring a tailored living experience for each resident. 
              Surrounded by picturesque landscapes, RPS Savana provides an 
              enchanting retreat, marrying spacious living with contemporary 
              amenities. Residents can indulge in the beauty of well-manicured 
              green spaces, recreational facilities, and a vibrant community 
              atmosphere.
            </p>
          </div>
          <div className="savana1-overview-image">
            <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=700&h=400&fit=crop" alt="RPS Savana Aerial View" className="savana1-image" />
          </div>
        </div>
        
        <div className="savana1-stats-grid">
          <div className="savana1-stat-item">
            <h3 className="savana1-stat-number">41.4 <span className="savana1-highlight">Acres</span></h3>
            <p className="savana1-stat-label">TOTAL AREA</p>
          </div>
          <div className="savana1-stat-item">
            <h3 className="savana1-stat-number">27</h3>
            <p className="savana1-stat-label">TOTAL TOWERS</p>
          </div>
          <div className="savana1-stat-item">
            <h3 className="savana1-stat-number">18</h3>
            <p className="savana1-stat-label">TOTAL FLOORS</p>
          </div>
          <div className="savana1-stat-item">
            <h3 className="savana1-stat-number">2500 <span className="savana1-plus">+</span></h3>
            <p className="savana1-stat-label">FAMILIES</p>
          </div>
        </div>
      </div>
    </section>
  );

  const renderWhyChoose = () => (
    <section id="why-choose" className="savana1-why-choose-section">
      <div className="savana1-container-inner">
        <div className="savana1-why-choose-content">
          <div className="savana1-why-choose-images">
            <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=700&h=800&fit=crop" alt="Aerial View 1" className="savana1-aerial-img-1" />
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&h=500&fit=crop" alt="Aerial View 2" className="savana1-aerial-img-2" />
          </div>
          <div className="savana1-why-choose-text">
            <p className="savana1-subtitle">WHERE YOUR JOURNEY TO LUXURY BEGINS</p>
            <h2 className="savana1-why-title">EXCLUSIVE RESIDENTIAL TOWNSHIP</h2>
            <p className="savana1-description">
              Welcome to RPS Savana where luxury meets security and 
              convenience. Our state-of-the-art clubhouse, fully-equipped gym, 
              serene gardens, and safe kids' play area provide the perfect blend of 
              relaxation and recreation. With 24/7 security, gated community living, 
              and eco-conscious design, your peace of mind is our priority. Explore 
              a complete living experience with entertainment zones and a 
              sparkling pool. Your dream home awaits in our modern amenities, 
              where every day feels like a vacation. Join us and discover an 
              exceptional way of life
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  const renderAmenities = () => (
    <section id="amenities" className="savana1-amenities-section">
      <div className="savana1-container-inner">
        <div className="savana1-section-header">
          <span className="savana1-dots">::::</span>
          <h2 className="savana1-section-title">AMENITIES</h2>
        </div>
        <p className="savana1-amenities-subtitle">
          Indulge In A Meticulously Crafted Environment, Where Every Amenity Is Tailored To Enrich And Elevate Your Everyday Living.
        </p>
        
        <div className="savana1-amenities-grid">
          <div className="savana1-amenity-item">
            <div className="savana1-amenity-icon">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 20h40v24H12z" stroke="#C9A961" strokeWidth="2"/>
                <path d="M20 20v-8h24v8M16 44v8h32v-8" stroke="#C9A961" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="savana1-amenity-title">CLUB HOUSE</h3>
          </div>
          
          <div className="savana1-amenity-item">
            <div className="savana1-amenity-icon">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="12" y="28" width="40" height="20" stroke="#C9A961" strokeWidth="2"/>
                <path d="M16 28c0-4 4-8 8-8s8 4 8 8M32 28c0-4 4-8 8-8s8 4 8 8" stroke="#C9A961" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="savana1-amenity-title">SWIMMING POOL</h3>
          </div>
          
          <div className="savana1-amenity-item">
            <div className="savana1-amenity-icon">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="16" width="8" height="16" stroke="#C9A961" strokeWidth="2"/>
                <rect x="36" y="16" width="8" height="16" stroke="#C9A961" strokeWidth="2"/>
                <path d="M16 32h32v8H16z" stroke="#C9A961" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="savana1-amenity-title">GYMNASIUM</h3>
          </div>
          
          <div className="savana1-amenity-item">
            <div className="savana1-amenity-icon">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 20h16l8 8v16l-8 8H24l-8-8V28z" stroke="#C9A961" strokeWidth="2"/>
                <path d="M28 32h8M32 28v8" stroke="#C9A961" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="savana1-amenity-title">MULTI-CUISINE RESTAURANTS</h3>
          </div>
          
          <div className="savana1-amenity-item">
            <div className="savana1-amenity-icon">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="20" r="6" stroke="#C9A961" strokeWidth="2"/>
                <path d="M20 32c0-6 5.4-11 12-11s12 5 12 11M24 36h16v8H24z" stroke="#C9A961" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="savana1-amenity-title">BEAUTIFUL GARDENS</h3>
          </div>
          
          <div className="savana1-amenity-item">
            <div className="savana1-amenity-icon">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="16" y="20" width="32" height="24" stroke="#C9A961" strokeWidth="2"/>
                <path d="M20 32h24M28 24v16" stroke="#C9A961" strokeWidth="2"/>
                <circle cx="24" cy="28" r="2" fill="#C9A961"/>
              </svg>
            </div>
            <h3 className="savana1-amenity-title">CAR PARKING</h3>
          </div>
          
          <div className="savana1-amenity-item">
            <div className="savana1-amenity-icon">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 16l12 12v16H20V28z" stroke="#C9A961" strokeWidth="2"/>
                <circle cx="32" cy="32" r="8" stroke="#C9A961" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="savana1-amenity-title">24/7 SECURITY</h3>
          </div>
          
          <div className="savana1-amenity-item">
            <div className="savana1-amenity-icon">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="16" width="24" height="32" stroke="#C9A961" strokeWidth="2"/>
                <path d="M28 20v12M36 20v12M24 36h16" stroke="#C9A961" strokeWidth="2"/>
                <circle cx="32" cy="28" r="2" fill="#C9A961"/>
              </svg>
            </div>
            <h3 className="savana1-amenity-title">POWER BACKUP</h3>
          </div>
        </div>
      </div>
    </section>
  );

  const renderLayout = () => (
    <section id="layout" className="savana1-layout-section">
      <div className="savana1-container-inner">
        <div className="savana1-section-header">
          <span className="savana1-dots">::::</span>
          <h2 className="savana1-section-title">PROJECT LAYOUT</h2>
        </div>
        
        <div className="savana1-layout-tabs">
          <button 
            className={`savana1-layout-tab ${activeLayout === 1 ? 'savana1-layout-tab-active' : ''}`}
            onClick={() => setActiveLayout(1)}
          >
            LAYOUT 1
          </button>
          <button 
            className={`savana1-layout-tab ${activeLayout === 2 ? 'savana1-layout-tab-active' : ''}`}
            onClick={() => setActiveLayout(2)}
          >
            LAYOUT 2
          </button>
          <button 
            className={`savana1-layout-tab ${activeLayout === 3 ? 'savana1-layout-tab-active' : ''}`}
            onClick={() => setActiveLayout(3)}
          >
            LAYOUT 3
          </button>
        </div>
        
        <div className="savana1-layout-plans">
          {activeLayout === 1 && (
            <div className="savana1-layout-plan">
              <img src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=500&h=600&fit=crop" alt="Layout 1" className="savana1-layout-image" />
              <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&h=600&fit=crop" alt="Layout 1 Detail" className="savana1-layout-image" />
            </div>
          )}
          {activeLayout === 2 && (
            <div className="savana1-layout-plan">
              <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&h=600&fit=crop" alt="Layout 2" className="savana1-layout-image" />
              <img src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=500&h=600&fit=crop" alt="Layout 2 Detail" className="savana1-layout-image" />
            </div>
          )}
          {activeLayout === 3 && (
            <div className="savana1-layout-plan">
              <img src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=500&h=600&fit=crop" alt="Layout 3" className="savana1-layout-image" />
              <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&h=600&fit=crop" alt="Layout 3 Detail" className="savana1-layout-image" />
            </div>
          )}
        </div>
      </div>
    </section>
  );

  const renderWhyChooseFeatures = () => (
    <section className="savana1-why-choose-features">
      <div className="savana1-container-inner">
        <div className="savana1-section-header">
          <span className="savana1-dots">::::</span>
          <h2 className="savana1-section-title">WHY CHOOSE US</h2>
        </div>
        
        <div className="savana1-features-grid">
          <div className="savana1-feature">
            <div className="savana1-feature-icon">⭐</div>
            <div className="savana1-feature-text">
              <h3>SCENIC AND<br />SPACIOUS LIVING</h3>
            </div>
          </div>

          <div className="savana1-feature">
            <div className="savana1-feature-icon">🏠</div>
            <div className="savana1-feature-text">
              <h3>DIVERSE HOUSING<br />OPTIONS</h3>
            </div>
          </div>

          <div className="savana1-feature">
            <div className="savana1-feature-icon">🔒</div>
            <div className="savana1-feature-text">
              <h3>MODERN<br />AMENITIES</h3>
            </div>
          </div>

          <div className="savana1-feature">
            <div className="savana1-feature-icon">📊</div>
            <div className="savana1-feature-text">
              <h3>DESIGNED FOR<br />ONLY 45 FAMILIES<br />PER ACRE</h3>
            </div>
          </div>

          <div className="savana1-feature">
            <div className="savana1-feature-icon">⭐</div>
            <div className="savana1-feature-text">
              <h3>STATE OF THE ART<br />SPECIFICATIONS</h3>
            </div>
          </div>

          <div className="savana1-feature">
            <div className="savana1-feature-icon">🌳</div>
            <div className="savana1-feature-text">
              <h3>LUSH GREEN<br />GARDENS</h3>
            </div>
          </div>

          <div className="savana1-feature">
            <div className="savana1-feature-icon">🏡</div>
            <div className="savana1-feature-text">
              <h3>ULTRA-SPACIOUS<br />LAYOUTS</h3>
            </div>
          </div>

          <div className="savana1-feature">
            <div className="savana1-feature-icon">🏢</div>
            <div className="savana1-feature-text">
              <h3>GRAND BALCONY<br />AREA</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderGallery = () => (
    <section id="gallery" className="savana1-gallery-section">
      <div className="savana1-container-inner">
        <div className="savana1-section-header">
          <span className="savana1-dots">::::</span>
          <h2 className="savana1-section-title">GALLERY</h2>
        </div>
        
        <div className="savana1-gallery-tabs">
          <button
            onClick={() => setActiveGallery('exterior')}
            className={`savana1-gallery-tab ${activeGallery === 'exterior' ? 'savana1-gallery-tab-active' : ''}`}
          >
            EXTERIOR
          </button>
          <button
            onClick={() => setActiveGallery('interior')}
            className={`savana1-gallery-tab ${activeGallery === 'interior' ? 'savana1-gallery-tab-active' : ''}`}
          >
            INTERIOR
          </button>
        </div>

        <div className="savana1-gallery-grid">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="savana1-gallery-item">
              <img 
                src={`https://images.unsplash.com/photo-${activeGallery === 'exterior' ? '1545324418-cc1a3fa10c00' : '1600607687939-ce8a6c25118c'}?w=600&h=400&fit=crop`} 
                alt={`${activeGallery} View ${item}`} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderBenefits = () => (
    <section id="benefits" className="savana1-benefits-section">
      <div className="savana1-container-inner">
        <div className="savana1-section-header">
          <span className="savana1-dots">::::</span>
          <h2 className="savana1-section-title">PROJECT BENEFITS</h2>
        </div>
        
        <div className="savana1-benefits-content">
          <div className="savana1-benefits-text">
            <h3>RPS AURIA</h3>
            <p>Elevate your lifestyle at RPS Auria, where luxury meets serenity in a prime location. Experience the pinnacle of upscale living with top-notch amenities and impeccable craftsmanship.</p>
            <h3>RPS SAVANA</h3>
            <p>Discover the pinnacle of residential excellence at RPS Savana, where prime location meets ultimate comfort and style.</p>
          </div>
          <div className="savana1-benefits-image">
            <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&h=600&fit=crop" alt="Project Overview" />
          </div>
        </div>
      </div>
    </section>
  );

  const renderLocation = () => (
    <section id="location" className="savana1-location-section">
      <div className="savana1-container-inner">
        <div className="savana1-section-header">
          <span className="savana1-dots">::::</span>
          <h2 className="savana1-section-title">PERFECT LOCATION, GREAT CONNECTIVITY</h2>
        </div>
        
        <div className="savana1-location-grid">
          <div className="savana1-location-card">
            <div className="savana1-location-icon">📍</div>
            <p>30 MIN. DRIVE FROM NEHRU PLACE</p>
          </div>
          <div className="savana1-location-card">
            <div className="savana1-location-icon">📍</div>
            <p>10 MIN. DRIVE FROM MAIN MATHURA ROAD</p>
          </div>
          <div className="savana1-location-card">
            <div className="savana1-location-icon">📍</div>
            <p>5 MIN. DRIVE FROM DEL-MUM EXPRESSWAY</p>
          </div>
          <div className="savana1-location-card">
            <div className="savana1-location-icon">📍</div>
            <p>10 MIN. DRIVE FROM BADKHAL METRO STATION</p>
          </div>
          <div className="savana1-location-card">
            <div className="savana1-location-icon">📍</div>
            <p>15 MIN. DRIVE FROM DELHI BORDER</p>
          </div>
          <div className="savana1-location-card">
            <div className="savana1-location-icon">📍</div>
            <p>WORLD CLASS HOSPITALS & SCHOOLS IN VISINITY</p>
          </div>
        </div>
      </div>
    </section>
  );

  const renderContent = () => {
    if (activeTab === 'all') {
      return (
        <>
          {renderOverview()}
          {renderWhyChoose()}
          {renderAmenities()}
          {renderLayout()}
          {renderWhyChooseFeatures()}
          {renderGallery()}
          {renderBenefits()}
          {renderLocation()}
        </>
      );
    } else if (activeTab === 'amenities') {
      return renderAmenities();
    } else if (activeTab === 'layout') {
      return renderLayout();
    } else if (activeTab === 'why-choose') {
      return (
        <>
          {renderWhyChoose()}
          {renderWhyChooseFeatures()}
        </>
      );
    } else if (activeTab === 'gallery') {
      return renderGallery();
    } else if (activeTab === 'benefits') {
      return renderBenefits();
    } else if (activeTab === 'location') {
      return renderLocation();
    }
  };

  return (
    <div className="savana1-container">
      {/* Hero Section */}
      <section className="savana1-hero-section">
        <div className="savana1-hero-image">
          <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&h=600&fit=crop" alt="RPS Savana Complex" />
        </div>
        <nav className="savana1-main-nav">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`savana1-nav-link ${activeTab === item.id ? 'savana1-nav-active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </section>

      <main>
        {renderContent()}
      </main>

      <footer className="savana1-footer">
        <p>© 2024 RPS Savana. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Savana1;