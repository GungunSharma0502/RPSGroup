import React, { useState, useEffect } from 'react';
import './Savana1.css';
import { Home, Droplets, Dumbbell, Shield, Utensils, Leaf, Zap, MapPin, Building2, Maximize2, CheckCircle, Users, Camera } from 'lucide-react';

const Savana1 = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [activeLayout, setActiveLayout] = useState(1);
  const [scrollY, setScrollY] = useState(0);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'all', label: 'OVERVIEW' },
    { id: 'amenities', label: 'AMENITIES' },
    { id: 'layout', label: 'LAYOUT' },
    { id: 'why-choose', label: 'WHY CHOOSE US' },
    { id: 'gallery', label: 'GALLERY' },
    { id: 'benefits', label: 'BENEFITS' },
    { id: 'location', label: 'LOCATION' }
  ];

  const highlights = [
    { icon: <Building2 size={24} />, title: '27 Towers', desc: 'Meticulously Designed' },
    { icon: <Maximize2 size={24} />, title: '41.4 Acres', desc: 'Sprawling Campus' },
    { icon: <CheckCircle size={24} />, title: '18 Floors', desc: 'Premium Living' },
    { icon: <Users size={24} />, title: '2500+ Families', desc: 'Thriving Community' }
  ];

  const amenities = [
    { icon: <Home size={36} />, label: 'CLUB HOUSE' },
    { icon: <Droplets size={36} />, label: 'SWIMMING POOL' },
    { icon: <Dumbbell size={36} />, label: 'GYMNASIUM' },
    { icon: <Utensils size={36} />, label: 'MULTI-CUISINE RESTAURANTS' },
    { icon: <Leaf size={36} />, label: 'BEAUTIFUL GARDENS' },
    { icon: <Shield size={36} />, label: 'CAR PARKING' },
    { icon: <Shield size={36} />, label: '24/7 SECURITY' },
    { icon: <Zap size={36} />, label: 'POWER BACKUP' }
  ];

  const galleryImages = [
    'https://rpsgroupindia.com/wp-content/uploads/2024/01/RPS-Savana-1-1024x576.png',
    'https://rpsgroupindia.com/wp-content/uploads/2024/02/savana-3-1024x565.jpg',
    'https://rpsgroupindia.com/wp-content/uploads/2024/02/savana-6-1024x576.jpg',
    'https://rpsgroupindia.com/wp-content/uploads/2024/02/savana-4-1024x576.jpg',
    'https://rpsgroupindia.com/wp-content/uploads/2024/02/savana-7-1024x576.jpg',
    'https://rpsgroupindia.com/wp-content/uploads/2024/02/savana-1-1024x683.jpg'
  ];

  const whyChooseFeatures = [
    { icon: '⭐', title: 'SCENIC AND\nSPACIOUS LIVING' },
    { icon: '🏠', title: 'DIVERSE HOUSING\nOPTIONS' },
    { icon: '🔒', title: 'MODERN\nAMENITIES' },
    { icon: '📊', title: 'DESIGNED FOR\nONLY 45 FAMILIES\nPER ACRE' },
    { icon: '⭐', title: 'STATE OF THE ART\nSPECIFICATIONS' },
    { icon: '🌳', title: 'LUSH GREEN\nGARDENS' },
    { icon: '🏡', title: 'ULTRA-SPACIOUS\nLAYOUTS' },
    { icon: '🏢', title: 'GRAND BALCONY\nAREA' }
  ];

  const locationPoints = [
    '30 MIN. DRIVE FROM NEHRU PLACE',
    '10 MIN. DRIVE FROM MAIN MATHURA ROAD',
    '5 MIN. DRIVE FROM DEL-MUM EXPRESSWAY',
    '10 MIN. DRIVE FROM BADKHAL METRO STATION',
    '15 MIN. DRIVE FROM DELHI BORDER',
    'WORLD CLASS HOSPITALS & SCHOOLS IN VICINITY'
  ];

  const renderOverview = () => (
    <div className="savana1__section">
      <div className="savana1__container">
        <div className="savana1__grid">
          <div className="savana1__content">
            <div className="savana1__section-header">
              <div className="savana1__dots">
                <span className="savana1__dot"></span>
                <span className="savana1__dot"></span>
                <span className="savana1__dot"></span>
              </div>
              <span className="savana1__section-subtitle">PROJECT OVERVIEW</span>
            </div>
            <h2 className="savana1__section-title">Experience Elevated Living</h2>

            <p className="savana1__text">
              RPS Savana stands as an epitome of refined living, set across 41.40 
              acres of meticulously planned residential expanse. We offers a 
              variety of housing options, from contemporary apartments to 
              opulent villas, ensuring a tailored living experience for each resident.
            </p>
            <p className="savana1__text">
              Surrounded by picturesque landscapes, RPS Savana provides an 
              enchanting retreat, marrying spacious living with contemporary 
              amenities. Residents can indulge in the beauty of well-manicured 
              green spaces, recreational facilities, and a vibrant community 
              atmosphere.
            </p>

            <div className="savana1__details-card">
              <div className="savana1__detail-row">
                <span className="savana1__detail-label">TOTAL AREA</span>
                <span className="savana1__detail-value">41.4 Acres</span>
              </div>
              <div className="savana1__detail-row">
                <span className="savana1__detail-label">TOTAL TOWERS</span>
                <span className="savana1__detail-value">27</span>
              </div>
              <div className="savana1__detail-row savana1__detail-row--last">
                <span className="savana1__detail-label">TOTAL FLOORS</span>
                <span className="savana1__detail-value">18</span>
              </div>
            </div>
          </div>

          <div className="savana1__image-wrapper">
            <div className="savana1__image-glow"></div>
            <div className="savana1__image">
              <img 
                src="https://rpsgroupindia.com/wp-content/uploads/2024/01/RPS-Savana-1.png" 
                alt="RPS Savana"
                className="savana1__img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderWhyChoose = () => (
    <div className="savana1__section">
      <div className="savana1__container">
        <div className="savana1__grid">
          <div className="savana1__image-wrapper">
            <div className="savana1__image-glow"></div>
            <div className="savana1__image">
              <img 
                src="https://rpsgroupindia.com/wp-content/uploads/2023/05/Park-view-Hires-1024x577.jpg" 
                alt="Aerial View"
                className="savana1__img"
              />
            </div>
          </div>

          <div className="savana1__content">
            <p className="savana1__building-subtitle">WHERE YOUR JOURNEY TO LUXURY BEGINS</p>
            <h2 className="savana1__building-title">EXCLUSIVE RESIDENTIAL TOWNSHIP</h2>
            <p className="savana1__text">
              Welcome to RPS Savana where luxury meets security and 
              convenience. Our state-of-the-art clubhouse, fully-equipped gym, 
              serene gardens, and safe kids' play area provide the perfect blend of 
              relaxation and recreation.
            </p>
            <p className="savana1__text">
              With 24/7 security, gated community living, 
              and eco-conscious design, your peace of mind is our priority. Explore 
              a complete living experience with entertainment zones and a 
              sparkling pool. Your dream home awaits in our modern amenities, 
              where every day feels like a vacation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAmenities = () => (
    <div className="savana1__amenities-section">
      <div className="savana1__container">
        <div className="savana1__amenities-header">
          <h2 className="savana1__amenities-title">AMENITIES</h2>
          <p className="savana1__amenities-description">
            Every Amenity Is Planned And Designed With Utmost Passion & Unwavering Attention To Detail To Elevate Your Living Experience.
          </p>
        </div>

        <div className="savana1__amenities-grid">
          {amenities.map((amenity, idx) => (
            <div key={idx} className="savana1__amenity-card">
              <div className="savana1__amenity-bg"></div>
              <div className="savana1__amenity-content">
                <div className="savana1__amenity-icon">{amenity.icon}</div>
                <p className="savana1__amenity-label">{amenity.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderLayout = () => (
    <div className="savana1__layout-section">
      <div className="savana1__container">
        <div className="savana1__layout-header">
          <h2 className="savana1__layout-title">PROJECT LAYOUT</h2>
        </div>
        
        <div className="savana1__layout-tabs">
          {[1, 2, 3].map(num => (
            <button 
              key={num}
              className={`savana1__layout-tab ${activeLayout === num ? 'savana1__layout-tab--active' : ''}`}
              onClick={() => setActiveLayout(num)}
            >
              LAYOUT {num}
            </button>
          ))}
        </div>
        
        <div className="savana1__layout-plans">
          {activeLayout === 1 && (
            <div className="savana1__layout-plan">
              <div className="savana1__layout-image-wrapper">
                <img src="https://rpsgroupindia.com/wp-content/uploads/2023/08/Savana-2-scaled.jpg" alt="Layout 1" className="savana1__layout-image" />
              </div>
              <div className="savana1__layout-image-wrapper">
                <img src="https://rpsgroupindia.com/wp-content/uploads/2023/08/Savana-21-1024x830.jpg" alt="Layout 1 Detail" className="savana1__layout-image" />
              </div>
            </div>
          )}
          {activeLayout === 2 && (
            <div className="savana1__layout-plan">
              <div className="savana1__layout-image-wrapper">
                <img src="https://rpsgroupindia.com/wp-content/uploads/2023/08/Savana-3-1024x830.jpg" alt="Layout 2" className="savana1__layout-image" />
              </div>
              <div className="savana1__layout-image-wrapper">
                <img src="https://rpsgroupindia.com/wp-content/uploads/2023/08/Savana-31-1024x830.jpg" alt="Layout 2 Detail" className="savana1__layout-image" />
              </div>
            </div>
          )}
          {activeLayout === 3 && (
            <div className="savana1__layout-plan">
              <div className="savana1__layout-image-wrapper">
                <img src="https://rpsgroupindia.com/wp-content/uploads/2023/08/Savana-41-1024x830.jpg" alt="Layout 3" className="savana1__layout-image" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderWhyChooseFeatures = () => (
    <div className="savana1__section">
      <div className="savana1__container">
        <div className="savana1__features-header">
          <h2 className="savana1__features-title">WHY CHOOSE US</h2>
        </div>
        
        <div className="savana1__features-grid">
          {whyChooseFeatures.map((feature, idx) => (
            <div key={idx} className="savana1__feature-card">
              <div className="savana1__feature-bg"></div>
              <div className="savana1__feature-content">
                <div className="savana1__feature-icon">{feature.icon}</div>
                <h3 className="savana1__feature-title">{feature.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderGallery = () => (
    <div className="savana1__gallery-section">
      <div className="savana1__container">
        <div className="savana1__gallery-header">
          <h2 className="savana1__gallery-title">GALLERY</h2>
        </div>

        <div className="savana1__gallery-grid">
          {galleryImages.map((image, idx) => (
            <div 
              key={idx} 
              className="savana1__gallery-item"
              onClick={() => setActiveImage(image)}
            >
              <div className="savana1__gallery-overlay"></div>
              <img src={image} alt={`Gallery ${idx + 1}`} className="savana1__gallery-image" />
              <div className="savana1__gallery-icon">
                <div className="savana1__gallery-icon-bg">
                  <Camera size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderBenefits = () => (
    <div className="savana1__section">
      <div className="savana1__container">
        <div className="savana1__benefits-header">
          <h2 className="savana1__benefits-title">PROJECT BENEFITS</h2>
        </div>
        
        <div className="savana1__grid">
          <div className="savana1__content">
            <div className="savana1__benefit-item">
              <h3 className="savana1__benefit-title">RPS AURIA</h3>
              <div className="savana1__benefit-line"></div>
              <p className="savana1__text">
                Elevate your lifestyle at RPS Auria, where luxury meets serenity in a prime location. 
                Experience the pinnacle of upscale living with top-notch amenities and impeccable craftsmanship.
              </p>
            </div>
            <div className="savana1__benefit-item">
              <h3 className="savana1__benefit-title">RPS SAVANA</h3>
              <div className="savana1__benefit-line"></div>
              <p className="savana1__text">
                Discover the pinnacle of residential excellence at RPS Savana, where prime location 
                meets ultimate comfort and style.
              </p>
            </div>
          </div>

          <div className="savana1__image-wrapper">
            <div className="savana1__image-glow"></div>
            <div className="savana1__image">
              <img 
                src="https://rpsgroupindia.com/wp-content/uploads/2024/02/savana-1-1024x683.jpg" 
                alt="Benefits"
                className="savana1__img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderLocation = () => (
    <div className="savana1__location-section">
      <div className="savana1__container">
        <div className="savana1__location-header">
          <h2 className="savana1__location-title">PERFECT LOCATION, GREAT CONNECTIVITY</h2>
        </div>
        
        <div className="savana1__location-grid">
          {locationPoints.map((location, idx) => (
            <div key={idx} className="savana1__location-card">
              <div className="savana1__location-icon">
                <MapPin size={32} />
              </div>
              <p className="savana1__location-text">{location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
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
    <div className="savana1">
      {/* Hero Section */}
      <div className="savana1__hero-wrapper">
        <div 
          className="savana1__hero-background"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="savana1__hero-overlay" />
        
        <div className="savana1__hero-content">
          <div className="savana1__hero-text-wrapper">
            <div className="savana1__hero-subtitle">
              <span className="savana1__hero-line"></span>
              <span>PREMIUM LIVING</span>
              <span className="savana1__hero-line"></span>
            </div>
            <h1 className="savana1__hero-title">RPS SAVANA</h1>
            <p className="savana1__hero-description">Where Luxury Meets Lifestyle</p>
            <div className="savana1__hero-location">
              <MapPin size={16} />
              <span>Faridabad</span>
            </div>
          </div>
        </div>

        <nav className="savana1__main-nav">
          {navItems.map(item => (
            <button
              key={item.id}
              className={`savana1__nav-link ${activeTab === item.id ? 'savana1__nav-link--active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Stats Bar */}
      <div className="savana1__stats-bar">
        <div className="savana1__stats-grid">
          {highlights.map((item, idx) => (
            <div key={idx} className="savana1__stat-card">
              <div className="savana1__stat-icon">{item.icon}</div>
              <div>
                <div className="savana1__stat-title">{item.title}</div>
                <div className="savana1__stat-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <main>
        {renderContent()}
      </main>

      {/* Image Modal */}
      {activeImage && (
        <div className="savana1__modal" onClick={() => setActiveImage(null)}>
          <div className="savana1__modal-content">
            <button className="savana1__modal-close" onClick={() => setActiveImage(null)}>
              <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img src={activeImage} alt="Full view" className="savana1__modal-image" />
             
          </div>
          
        </div>
      )}
    </div>
  );
};

export default Savana1;