import React from 'react';
import '../css/ProjectsCss/GreenValley.css';
import Map from './Map';
import { Home, Droplets, Dumbbell, Shield, Utensils, Leaf, Zap, Camera } from 'lucide-react';

const GreenValley = () => {
  const amenities = [
    { icon: <Home size={40} />, label: 'CLUB HOUSE' },
    { icon: <Droplets size={40} />, label: 'SWIMMING POOL' },
    { icon: <Dumbbell size={40} />, label: 'GYMNASIUM' },
    { icon: <Shield size={40} />, label: 'ANTI-EARTHQUAKE STRUCTURE' },
    { icon: <Utensils size={40} />, label: 'MODERN KITCHEN CABINETS' },
    { icon: <Leaf size={40} />, label: 'RAIN HARVESTING' },
    { icon: <Shield size={40} />, label: 'HI-TECH SECURITY' },
    { icon: <Zap size={40} />, label: '100% POWER BACKUP' }
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=400&h=300&fit=crop'
  ];

  return (
    <div className="GreenValley">
      {/* Hero Section */}
      <div className="GreenValley__hero-section">
        <div className="GreenValley__hero-overlay"></div>
        <h1 className="GreenValley__hero-title">RPS - GREEN VALLEY</h1>
      </div>

      {/* Project Overview Section */}
      <div className="GreenValley__overview-section">
        <div className="GreenValley__container">
          <div className="GreenValley__overview-grid">
            <div className="GreenValley__overview-content">
              <h2 className="GreenValley__section-title">
                <span className="GreenValley__title-icon">⚈⚈⚈</span> PROJECT OVERVIEW
              </h2>
              <p className="GreenValley__overview-text">
                Explore RPS – Green Valley, a prestigious residential project in Faridabad's Sector 42, offering a range of 2 BHK and 3 BHK apartments for sale. This Ready to Move project by RPS Infrastructure Ltd. spans across 25 acres and boasts a wide array of modern amenities. With unit sizes ranging from 1150.0 to 2690 Sq. Ft., RPS Green Valley presents a perfect blend of comfort and luxury. Launched in April 2005, the project was completed in August 2008, featuring a total of 628 meticulously designed units.
              </p>

              <div className="GreenValley__project-details">
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

            <div className="GreenValley__overview-image">
              <img 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=500&fit=crop" 
                alt="RPS Green Valley"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Building Images Section */}
      <div className="GreenValley__building-images-section">
        <div className="GreenValley__container">
          <div className="GreenValley__building-grid">
            <div className="GreenValley__building-image-large">
              <img 
                src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=700&h=500&fit=crop" 
                alt="Building view"
              />
            </div>
            <div className="GreenValley__building-content">
              <p className="GreenValley__breathe-text">TAKE A DEEP BREATH</p>
              <h2 className="GreenValley__building-title">AND FORGET ALL YOUR WORRIES</h2>
              <p className="GreenValley__building-description">
                At RPS Green Valley, residents enjoy a multitude of amenities designed to enhance their quality of life. From a fully equipped gymnasium to a reliable RO water system and uninterrupted power backup, we've thought of every detail. Families with children will appreciate the dedicated children's play area, while the swimming pool, sports area, and recreation facilities provide ample entertainment options. Sports enthusiasts can make use of the tennis court and cycling & jogging track.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Amenities Section */}
      <div className="GreenValley__amenities-section">
        <div className="GreenValley__container">
          <h2 className="GreenValley__section-title-center">AMENITIES</h2>
          <p className="GreenValley__section-subtitle">
            Every Amenity Is Planned And Designed With Utmost Passion & Unwavering Attention To Detail To Elevate Your Living Experience.
          </p>
          
          <div className="GreenValley__amenities-grid">
            {amenities.map((amenity, index) => (
              <div key={index} className="GreenValley__amenity-card">
                <div className="GreenValley__amenity-icon">{amenity.icon}</div>
                <p className="GreenValley__amenity-label">{amenity.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="GreenValley__gallery-section">
        <div className="GreenValley__container">
          <h2 className="GreenValley__section-title-center">GALLERY</h2>
          
          <div className="GreenValley__gallery-grid">
            {galleryImages.map((image, index) => (
              <div key={index} className="GreenValley__gallery-item">
                <img src={image} alt={`Gallery ${index + 1}`} />
                <div className="GreenValley__gallery-overlay">
                  <Camera size={32} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Map Component - Replaced the old map section */}
      <Map />
    </div>
  );
};

export default GreenValley;