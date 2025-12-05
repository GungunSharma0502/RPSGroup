import React, { useState } from 'react';
import '../css/ProjectsCss/Palms.css';
import { Shield, Baby, Gamepad2, Phone, Home, Zap, Flame, Camera, ChevronDown } from 'lucide-react';
import Map from './Map';

const Palms = () => {
  const [activeTab, setActiveTab] = useState('3bhk');
  const [expandedProject, setExpandedProject] = useState(null);

  const layoutImages = {
    '3bhk': [
      'https://rpsgroupindia.com/wp-content/uploads/2023/08/270-TYPICAL.jpg',
      'https://rpsgroupindia.com/wp-content/uploads/2023/08/270-TYPICAL.jpg'
    ],
    '4bhk': [
      'https://rpsgroupindia.com/wp-content/uploads/2023/08/340-TYPICAL.jpg'
    ]
  };

  const amenities = [
    { icon: <Shield size={50} />, label: 'GATED COMMUNITY' },
    { icon: <Baby size={50} />, label: 'CHILDREN PLAY AREA' },
    { icon: <Gamepad2 size={50} />, label: 'INDOOR GAMES' },
    { icon: <Phone size={50} />, label: 'INTERCOM' },
    { icon: <Shield size={50} />, label: 'YOGA & MEDITATION' },
    { icon: <Home size={50} />, label: 'CLUB HOUSE' },
    { icon: <Zap size={50} />, label: 'POWER BACKUP' },
    { icon: <Flame size={50} />, label: 'FIRE FIGHTING' }
  ];

  const galleryImages = [
   'https://rpsgroupindia.com/wp-content/uploads/2023/09/fs.jpeg-1024x560.webp',
   'https://rpsgroupindia.com/wp-content/uploads/2023/05/triange-copy-1024x527.jpg',
   'https://rpsgroupindia.com/wp-content/uploads/2023/05/nite-copy-1024x768.jpg'
  ];

  const projects = [
    {
      id: 'auria',
      name: 'GREEN BUNCH AURIA',
      description: 'Experience luxury living at its finest with Green Bunch Auria, the upcoming residential masterpiece. These exquisite apartments redefine elegance and comfort, offering a haven of tranquility in a prime location. With meticulous craftsmanship and top-notch amenities, Green Bunch Auria sets a new standard for upscale living.'
    },
    {
      id: 'savana',
      name: 'GREEN BUNCH SAVANA',
      description: 'Experience the epitome of residential excellence at Green Bunch Savana, a completed apartment complex that has been delighting residents for years. Nestled in a prime location, Green Bunch Savana offers a harmonious blend of comfort and convenience.'
    }
  ];

  const toggleProject = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <div className="Palms">
      {/* Hero Section */}
      <div className="Palms__hero-section">
        <div className="Palms__hero-overlay"></div>
        <h1 className="Palms__hero-title">GREEN BUNCH - PALMS</h1>
      </div>

      {/* Overview Section */}
      <div className="Palms__overview-section">
        <div className="Palms__container">
          <div className="Palms__overview-grid">
            <div className="Palms__overview-content">
              <h2 className="Palms__section-title">
                <span className="Palms__title-icon">⚈⚈⚈</span> OVERVIEW
              </h2>
              <p className="Palms__overview-text">
                Green Bunch Palms represents the finest in contemporary residency by redefining style and elegance along with an aesthetic design for a sophisticated visual symmetry. This esteemed project establishes the concept of complete serviced apartments and home stay that is now known to be the best alternative to hotel accommodations in the global hospitality industry. Your chance to live a life bigger than your imagination and excel your own dreams is here in the hot and happening environs at Green Bunch Palms.
              </p>

              <div className="Palms__project-details">
                <div className="Palms__detail-row">
                  <span className="Palms__detail-label">LOCATION</span>
                  <span className="Palms__detail-value">Sector 88, Faridabad</span>
                </div>
                <div className="Palms__detail-row">
                  <span className="Palms__detail-label">TYPE</span>
                  <span className="Palms__detail-value">Residential</span>
                </div>
                <div className="Palms__detail-row">
                  <span className="Palms__detail-label">TOTAL AREA</span>
                  <span className="Palms__detail-value">7.5 Acres</span>
                </div>
              </div>
            </div>

            <div className="Palms__overview-image">
              <img 
                src="https://rpsgroupindia.com/wp-content/uploads/elementor/thumbs/VILA-new-copy-scaled-e1684588849696-qbn5ofw6x7ktkovrgarhp6852clltl03p6gf84zqe0.jpg" 
                alt="Green Bunch Palms"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Building Images Section */}
      <div className="Palms__building-images-section">
        <div className="Palms__container">
          <div className="Palms__building-grid">
            <div className="Palms__building-image-large">
              <img 
                src="https://rpsgroupindia.com/wp-content/uploads/2023/09/fs.jpeg-1024x560.webp" 
                alt="Building view"
              />
            </div>
            <div className="Palms__building-content">
              <h2 className="Palms__building-title">GROUP HOUSING SOCIETY</h2>
              <div className="Palms__building-divider">⚈⚈⚈⚈⚈⚈⚈⚈⚈⚈⚈⚈⚈⚈⚈⚈⚈⚈⚈⚈</div>
              <p className="Palms__building-description">
                Green Bunch Palms gives you an advantage of the best facilities like Power Back Up, Multipurpose Courts, Kids Play Area, Intercom Facility, Vaastu Compilant, Security, Reserved Parking, Gymnasium, Swimming Pool, Club House. At Green Bunch Palms, you can enjoy a modern lifestyle as all conveniences are easily available.
              </p>
            </div>
          </div>
          
          <div className="Palms__building-grid Palms__building-grid--reverse">
            <div className="Palms__building-content">
              <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&h=500&fit=crop" 
                alt="Community view"
              />
            </div>
            <div className="Palms__building-image-large">
              <img 
                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&h=500&fit=crop" 
                alt="Landscape view"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Layout Section */}
      <div className="Palms__layout-section">
        <div className="Palms__container">
          <h2 className="Palms__section-title-center">
            <span className="Palms__title-icon">⚈⚈⚈</span> LAYOUT
          </h2>

          <div className="Palms__tabs">
            <button 
              className={`Palms__tab ${activeTab === '3bhk' ? 'Palms__tab--active' : ''}`}
              onClick={() => setActiveTab('3bhk')}
            >
              3 BHK
            </button>
            <button 
              className={`Palms__tab ${activeTab === '4bhk' ? 'Palms__tab--active' : ''}`}
              onClick={() => setActiveTab('4bhk')}
            >
              4 BHK
            </button>
          </div>

          <div className="Palms__layout-content">
            <div className="Palms__layout-details">
              <h3 className="Palms__layout-type">TYPE - A</h3>
              
              <div className="Palms__layout-info">
                <div className="Palms__layout-row">
                  <span className="Palms__layout-label">Location</span>
                  <span className="Palms__layout-value">Green Bunch City, Sec-88, Faridabad</span>
                </div>
                <div className="Palms__layout-row">
                  <span className="Palms__layout-label">Type</span>
                  <span className="Palms__layout-value">Residential</span>
                </div>
                <div className="Palms__layout-row">
                  <span className="Palms__layout-label">Carpet Area</span>
                  <span className="Palms__layout-value">....</span>
                </div>
                <div className="Palms__layout-row">
                  <span className="Palms__layout-label">Built Up Area</span>
                  <span className="Palms__layout-value">....</span>
                </div>
                <div className="Palms__layout-row">
                  <span className="Palms__layout-label">Super Area</span>
                  <span className="Palms__layout-value">{activeTab === '3bhk' ? '1400 SQ. FT' : '1800 SQ. FT'}</span>
                </div>
              </div>
            </div>

            <div className="Palms__layout-images-wrapper">
              {layoutImages[activeTab].map((image, index) => (
                <div key={index} className="Palms__layout-image">
                  <img 
                    src={image} 
                    alt={`${activeTab.toUpperCase()} Floor Plan ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Amenities Section */}
      <div className="Palms__amenities-section">
        <div className="Palms__container">
          <h2 className="Palms__section-title-center">
            <span className="Palms__title-icon">⚈⚈⚈</span> AMENITIES
          </h2>
          <p className="Palms__section-subtitle">
            Every Amenity Is Planned And Designed With Utmost Passion & Unwavering Attention To Detail To Elevate Your Living Experience.
          </p>
          
          <div className="Palms__amenities-grid">
            {amenities.map((amenity, index) => (
              <div key={index} className="Palms__amenity-card">
                <div className="Palms__amenity-icon">{amenity.icon}</div>
                <p className="Palms__amenity-label">{amenity.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="Palms__gallery-section">
        <div className="Palms__container">
          <h2 className="Palms__section-title-center">
            <span className="Palms__title-icon">⚈⚈⚈</span> GALLERY
          </h2>
          
          <div className="Palms__gallery-grid">
            {galleryImages.map((image, index) => (
              <div key={index} className="Palms__gallery-item">
                <img src={image} alt={`Gallery ${index + 1}`} />
                <div className="Palms__gallery-overlay">
                  <Camera size={32} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Location Map Section */}
      <div className="Palms__location-section">
        <div className="Palms__location-wrapper">
          <div className="Palms__location-sidebar">
            <h2 className="Palms__location-title">
              <span className="Palms__title-icon">⚈⚈⚈</span> LOCATION MAP
            </h2>

            <div className="Palms__projects-list">
              {projects.map((project) => (
                <div key={project.id} className="Palms__project-item">
                  <button 
                    className={`Palms__project-header ${expandedProject === project.id ? 'Palms__project-header--active' : ''}`}
                    onClick={() => toggleProject(project.id)}
                  >
                    <span>{project.name}</span>
                    <ChevronDown className={`Palms__project-icon ${expandedProject === project.id ? 'Palms__project-icon--rotated' : ''}`} />
                  </button>
                  
                  {expandedProject === project.id && (
                    <div className="Palms__project-content">
                      <p>{project.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="Palms__location-map">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1000&h=700&fit=crop" 
              alt="Aerial view of Green Bunch Palms location"
            />
            <div className="Palms__map-marker" style={{ top: '30%', left: '45%' }}></div>
            <div className="Palms__map-marker" style={{ top: '35%', left: '52%' }}></div>
            <div className="Palms__map-marker" style={{ top: '42%', right: '25%' }}></div>
            <div className="Palms__map-marker" style={{ bottom: '25%', left: '40%' }}></div>
            <div className="Palms__map-marker" style={{ bottom: '30%', right: '30%' }}></div>
            <div className="Palms__map-marker" style={{ bottom: '15%', left: '50%' }}></div>
          </div>
        </div>
      </div>
      <Map/>
    </div>
  );
};

export default Palms;