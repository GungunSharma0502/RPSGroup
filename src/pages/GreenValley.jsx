import React, { useState, useEffect } from 'react';
import '../css/ProjectsCss/GreenValley.css';
import { Home, Droplets, Dumbbell, Shield, Utensils, Leaf, Zap, Camera, MapPin, Building2, Maximize2, CheckCircle } from 'lucide-react';

const GreenValley = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const amenities = [
    { icon: <Home size={36} />, label: 'CLUB HOUSE' },
    { icon: <Droplets size={36} />, label: 'SWIMMING POOL' },
    { icon: <Dumbbell size={36} />, label: 'GYMNASIUM' },
    { icon: <Shield size={36} />, label: 'ANTI-EARTHQUAKE STRUCTURE' },
    { icon: <Utensils size={36} />, label: 'MODERN KITCHEN CABINETS' },
    { icon: <Leaf size={36} />, label: 'RAIN HARVESTING' },
    { icon: <Shield size={36} />, label: 'HI-TECH SECURITY' },
    { icon: <Zap size={36} />, label: '100% POWER BACKUP' }
  ];

  const galleryImages = [
    'https://rpsgroupindia.com/wp-content/uploads/2023/05/g2-1.jpg',
    'https://rpsgroupindia.com/wp-content/uploads/2023/05/g3-1.jpg',
    'https://rpsgroupindia.com/wp-content/uploads/2023/05/g4-1.jpg',
    'https://rpsgroupindia.com/wp-content/uploads/2023/05/g5-1.jpg'
  ];

  const highlights = [
    { icon: <Building2 size={24} />, title: '628 Units', desc: 'Meticulously Designed' },
    { icon: <Maximize2 size={24} />, title: '25 Acres', desc: 'Sprawling Campus' },
    { icon: <CheckCircle size={24} />, title: 'Ready to Move', desc: 'Immediate Possession' }
  ];

  return (
    <div className="GreenValley">
      {/* Hero Section with Parallax */}
      <div className="GreenValley__hero-wrapper">
        <div 
          className="GreenValley__hero-background"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="GreenValley__hero-overlay" />
        
        <div className="GreenValley__hero-content">
          <div className="GreenValley__hero-text-wrapper">
            <div className="GreenValley__hero-subtitle">
              <span className="GreenValley__hero-line"></span>
              <span>PREMIUM LIVING</span>
              <span className="GreenValley__hero-line"></span>
            </div>
            <h1 className="GreenValley__hero-title">GREEN BUNCH GREEN VALLEY</h1>
            <p className="GreenValley__hero-description">Where Luxury Meets Nature</p>
            <div className="GreenValley__hero-location">
              <MapPin size={16} />
              <span>Sector 42, Faridabad</span>
            </div>
          </div>
          
          <div className="GreenValley__scroll-indicator">
            <div className="GreenValley__scroll-mouse">
              <div className="GreenValley__scroll-wheel"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="GreenValley__stats-bar">
        <div className="GreenValley__container">
          <div className="GreenValley__stats-grid">
            {highlights.map((item, idx) => (
              <div key={idx} className="GreenValley__stat-card">
                <div className="GreenValley__stat-icon">{item.icon}</div>
                <div className="GreenValley__stat-content">
                  <div className="GreenValley__stat-title">{item.title}</div>
                  <div className="GreenValley__stat-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="GreenValley__overview-section">
        <div className="GreenValley__container">
          <div className="GreenValley__overview-grid">
            <div className="GreenValley__overview-content">
              <div className="GreenValley__section-header">
                <div className="GreenValley__section-dots">
                  <span className="GreenValley__dot"></span>
                  <span className="GreenValley__dot"></span>
                  <span className="GreenValley__dot"></span>
                </div>
                <span className="GreenValley__section-subtitle">PROJECT OVERVIEW</span>
              </div>
              <h2 className="GreenValley__section-title">Experience Elevated Living</h2>

              <p className="GreenValley__overview-text">
                Explore Green Bunch – Green Valley, a prestigious residential project in Faridabad's Sector 42, offering a range of 2 BHK and 3 BHK apartments for sale. This Ready to Move project by Green Bunch Infrastructure Ltd. spans across 25 acres and boasts a wide array of modern amenities. With unit sizes ranging from 1150.0 to 2690 Sq. Ft., Green Bunch Green Valley presents a perfect blend of comfort and luxury. Launched in April 2005, the project was completed in August 2008, featuring a total of 628 meticulously designed units.
              </p>

              <div className="GreenValley__details-card">
                <div className="GreenValley__detail-row">
                  <span className="GreenValley__detail-label">LOCATION</span>
                  <span className="GreenValley__detail-value">Sector 42, Faridabad</span>
                </div>
                <div className="GreenValley__detail-row">
                  <span className="GreenValley__detail-label">TYPE</span>
                  <span className="GreenValley__detail-value">Residential</span>
                </div>
                <div className="GreenValley__detail-row">
                  <span className="GreenValley__detail-label">TOTAL AREA</span>
                  <span className="GreenValley__detail-value">25 Acres</span>
                </div>
              </div>
            </div>

            <div className="GreenValley__overview-image-wrapper">
              <div className="GreenValley__image-glow"></div>
              <div className="GreenValley__overview-image">
                <img 
                  src="https://rpsgroupindia.com/wp-content/uploads/2023/09/Project-Photo-11-RPS-Green-Valley-Faridabad-5072696_972_1296-1024x917.jpg" 
                  alt="Green Bunch Green Valley"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Building Showcase */}
      <div className="GreenValley__building-section">
        <div className="GreenValley__container">
          <div className="GreenValley__building-grid">
            <div className="GreenValley__building-image-wrapper">
              <div className="GreenValley__image-glow"></div>
              <div className="GreenValley__building-image">
                <img 
                  src="https://rpsgroupindia.com/wp-content/uploads/2023/09/Project-Photo-13-RPS-Green-Valley-Faridabad-5072696_972_1296-1024x919.jpg" 
                  alt="Building view"
                />
              </div>
            </div>

            <div className="GreenValley__building-content">
              <p className="GreenValley__building-subtitle">TAKE A DEEP BREATH</p>
              <h2 className="GreenValley__building-title">And Forget All Your Worries</h2>
              <p className="GreenValley__building-text">
                At Green Bunch Green Valley, residents enjoy a multitude of amenities designed to enhance their quality of life. From a fully equipped gymnasium to a reliable RO water system and uninterrupted power backup, we've thought of every detail. Families with children will appreciate the dedicated children's play area, while the swimming pool, sports area, and recreation facilities provide ample entertainment options. Sports enthusiasts can make use of the tennis court and cycling & jogging track.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Amenities Section */}
      <div className="GreenValley__amenities-section">
        <div className="GreenValley__container">
          <div className="GreenValley__amenities-header">
            <h2 className="GreenValley__amenities-title">AMENITIES</h2>
            <p className="GreenValley__amenities-description">
              Every Amenity Is Planned And Designed With Utmost Passion & Unwavering Attention To Detail To Elevate Your Living Experience.
            </p>
          </div>

          <div className="GreenValley__amenities-grid">
            {amenities.map((amenity, idx) => (
              <div key={idx} className="GreenValley__amenity-card">
                <div className="GreenValley__amenity-bg"></div>
                <div className="GreenValley__amenity-content">
                  <div className="GreenValley__amenity-icon">{amenity.icon}</div>
                  <p className="GreenValley__amenity-label">{amenity.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="GreenValley__gallery-section">
        <div className="GreenValley__container">
          <div className="GreenValley__gallery-header">
            <h2 className="GreenValley__gallery-title">GALLERY</h2>
          </div>

          <div className="GreenValley__gallery-grid">
            {galleryImages.map((image, idx) => (
              <div 
                key={idx} 
                className="GreenValley__gallery-item"
                onClick={() => setActiveImage(image)}
              >
                <div className="GreenValley__gallery-overlay"></div>
                <img src={image} alt={`Gallery ${idx + 1}`} />
                <div className="GreenValley__gallery-icon">
                  <div className="GreenValley__gallery-icon-bg">
                    <Camera size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {activeImage && (
        <div className="GreenValley__modal" onClick={() => setActiveImage(null)}>
          <div className="GreenValley__modal-content">
            <button className="GreenValley__modal-close" onClick={() => setActiveImage(null)}>
              <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img src={activeImage} alt="Full view" className="GreenValley__modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default GreenValley;