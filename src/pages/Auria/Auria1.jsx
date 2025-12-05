import React, { useState } from 'react';
import { MapPin, Star, Building, Trees, Home, Award } from 'lucide-react';
import './Auria1.css';
import Map from '../Map';

const Auria1 = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [activeApartmentTab, setActiveApartmentTab] = useState('5bhk');
  const [activeLayout, setActiveLayout] = useState('5bhk');
  const [activeGallery, setActiveGallery] = useState('exterior');

  const navItems = [
    { id: 'all', label: 'OVERVIEW' },
    { id: 'apartments', label: 'APARTMENTS' },
    { id: 'clubhouse', label: 'CLUB HOUSE' },
    { id: 'layouts', label: 'LAYOUTS' },
    { id: 'why', label: 'WHY CHOOSE US' },
    { id: 'gallery', label: 'GALLERY' },
    { id: 'location', label: 'LOCATION' }
  ];

  const specifications = [
    'Double Height Entrance Lobby',
    'Private Lounge In Each Tower',
    'VRV Air Conditioning',
    'Italian Marble Flooring',
    '3 High Speed Elevators',
    'Best In Class Layouts',
    '3 Track UPVC with Toughened Glass',
    'Grand Balconies with Toughened Glass Railing and SS Handrail'
  ];

  const amenities = [
    { icon: '☕', name: 'COFFEE SHOP' },
    { icon: '🎭', name: 'MINI THEATRE' },
    { icon: '🍽️', name: 'DINE IN RESTURANT' },
    { icon: '🎮', name: 'INDOOR GAMES ROOM' },
    { icon: '👶', name: 'TODDLERS CLUB' },
    { icon: '💆', name: 'STEAM AND SAUNA' },
    { icon: '🎪', name: 'BANQUET HALL' },
    { icon: '👥', name: 'CONFERENCE HALL' },
    { icon: '🃏', name: 'CARDS ROOM' },
    { icon: '🏊', name: 'SWIMMING POOL' },
    { icon: '🏃', name: 'JOGGING TRACK' },
    { icon: '💪', name: 'GYMNASIUM' },
    { icon: '🏀', name: 'BASKETBALL COURT' },
    { icon: '🏸', name: 'BADMINTON COURT' },
    { icon: '🏏', name: 'CRICKET NET PRACTICE' },
    { icon: '🧘', name: 'YOGA, AEROBICS & MEDITATION CENTRE' }
  ];

  const galleryImages = [
    'https://rpsgroupindia.com/wp-content/uploads/2023/05/Tower-night-1153x1536.jpg',
    'https://rpsgroupindia.com/wp-content/uploads/2023/05/Club-Pool-revised-HIRES-1024x576.jpg',
    'https://rpsgroupindia.com/wp-content/uploads/2023/05/Top-view-HIRES-1024x576.jpg',
    'https://rpsgroupindia.com/wp-content/uploads/2023/05/Landscape-2-HIRES-1024x620.jpg',
    'https://rpsgroupindia.com/wp-content/uploads/2023/05/Landscape-1-HIRES_1-1024x577.jpg',
    'https://rpsgroupindia.com/wp-content/uploads/2023/05/exterior-day-1153x1536.jpg'
  ];

  const layoutImages = {
    '5bhk': [
      'https://rpsgroupindia.com/wp-content/uploads/2023/05/5-BHK-Type-1.jpg',
      'https://rpsgroupindia.com/wp-content/uploads/2023/05/5-BHK-Type-2.jpg'
    ],
    '3bhk': [
      'https://rpsgroupindia.com/wp-content/uploads/2023/05/3bhk-1-1024x1024.jpg',
      'https://rpsgroupindia.com/wp-content/uploads/2023/05/3bhk-2-1024x1024.jpg',
      'https://rpsgroupindia.com/wp-content/uploads/2023/05/3bhk-3-1024x1024.jpg'
    ],
    'site': [
      'https://rpsgroupindia.com/wp-content/uploads/2023/05/rpsauria.jpg'
    ]
  };

  const renderOverview = () => (
    <div className="auria1-content" id="overview">
      <div className="auria1-overview-section">
        <div className="auria1-overview-text">
          <div className="auria1-section-marker">⬥⬥⬥</div>
          <h2 className="auria1-section-title">PROJECT OVERVIEW</h2>
          <p className="auria1-description">
            GreenBunch Auria is a Residential space that has been designed to be Faridabad's new landmark residence through stunning architecture, Spacious layouts, and a slew of unbeatable features. The project is located in the prestigious GreenBunch City which spans over 100 Acres in Sector 88, Faridabad.
          </p>

          <div className="auria1-project-details">
            <div className="auria1-detail-row">
              <span className="auria1-detail-label">Location</span>
              <span className="auria1-detail-value">GreenBunch City, Sec-88, Faridabad</span>
            </div>
            <div className="auria1-detail-row">
              <span className="auria1-detail-label">Type</span>
              <span className="auria1-detail-value">Residential Group Housing</span>
            </div>
            <div className="auria1-detail-row">
              <span className="auria1-detail-label">Project Area</span>
              <span className="auria1-detail-value">11.98 Acres</span>
            </div>
          </div>

          <div className="auria1-stats">
            <div className="auria1-stat-item">
              <h3 className="auria1-stat-number">14 <span className="auria1-stat-unit">Lac</span></h3>
              <p className="auria1-stat-label">DEVELOPMENT AREA</p>
            </div>
            <div className="auria1-stat-item">
              <h3 className="auria1-stat-number">6</h3>
              <p className="auria1-stat-label">TOTAL TOWERS</p>
            </div>
            <div className="auria1-stat-item">
              <h3 className="auria1-stat-number">524</h3>
              <p className="auria1-stat-label">TOTAL UNITS</p>
            </div>
            <div className="auria1-stat-item">
              <h3 className="auria1-stat-number">45 <span className="auria1-stat-unit">Families</span></h3>
              <p className="auria1-stat-label">PER ACRE</p>
            </div>
          </div>
        </div>
        <div className="auria1-overview-image">
          <img src="https://rpsgroupindia.com/wp-content/uploads/2023/08/Auria-2-scaled.jpg" alt="GreenBunch Auria Building" />
        </div>
      </div>

      <div className="auria1-residences-section">
        <div className="auria1-residences-image">
          <img src="https://rpsgroupindia.com/wp-content/uploads/2023/05/Top-view-HIRES-scaled-1-1024x576.jpg" alt="Luxury Apartments" />
        </div>
        <div className="auria1-residences-text">
          <h3 className="auria1-subtitle">ULTRA LUXURIOUS 3 BHK & 5 BHK</h3>
          <h2 className="auria1-main-title">PLANNED RESIDENCES FOR ELEVATED LIFESTYLES</h2>
          <p className="auria1-description">
            The exclusivity of Auria lies in its planning & execution. From the state-of-the-art layout of Vastu-friendly apartments to a range of well-planned, earthquake-resistant and futuristic recreational/ health zones, the lush green environs that nestle Auria are just the right inspiration to make it your permanent abode. Serene surroundings, superlative architecture & robust construction ensure that Auria is one of Faridabad's most unique residential projects.
          </p>
        </div>
      </div>
    </div>
  );

  const renderApartments = () => (
    <div className="auria1-content" id="apartments">
      <div className="auria1-apartments-header">
        <div className="auria1-section-marker">⬥⬥⬥</div>
        <h2 className="auria1-section-title">ULTRA LUXURIOUS 5 BHK & 3 BHK</h2>
      </div>

      <div className="auria1-apartment-tabs">
        <button 
          className={`auria1-apartment-tab ${activeApartmentTab === '5bhk' ? 'auria1-active' : ''}`}
          onClick={() => setActiveApartmentTab('5bhk')}
        >
          5 BHK.
        </button>
        <button 
          className={`auria1-apartment-tab ${activeApartmentTab === '3bhk' ? 'auria1-active' : ''}`}
          onClick={() => setActiveApartmentTab('3bhk')}
        >
          3 BHK
        </button>
      </div>

      <div className="auria1-apartment-content">
        <div className="auria1-apartment-image">
          <img src="https://rpsgroupindia.com/wp-content/uploads/2023/05/Landscape-2-HIRES-768x465.jpg" alt="Luxury Living Room" />
        </div>
        <div className="auria1-specifications">
          <h3 className="auria1-spec-title">SPECIFICATIONS</h3>
          <ul className="auria1-spec-list">
            {specifications.map((spec, index) => (
              <li key={index} className="auria1-spec-item">
                <span className="auria1-spec-arrow">»</span> {spec}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="auria1-virtual-tour">
        <div className="auria1-tour-image">
          <img src="https://rpsgroupindia.com/wp-content/uploads/2023/09/Auria-13-1.jpg" alt="Building Exterior" />
        </div>
        <div className="auria1-tour-content">
          <div className="auria1-section-marker">⬥⬥⬥</div>
          <h2 className="auria1-section-title">EXPERIENCE THE 5 BHK VIRTUAL TOUR</h2>
          <p className="auria1-description">
            Explore the enchanting world of GreenBunch Auria through our immersive virtual walkthrough. Experience the perfect blend of modern architecture, exquisite craftsmanship, and serene outdoor spaces. Discover a luxurious living experience where elegance, functionality, and natural beauty converge.
          </p>
          <button className="auria1-tour-button">
            <span className="auria1-play-icon">▶</span>
            VIEW 5BHK VIRTUAL TOUR
          </button>
        </div>
      </div>
    </div>
  );

  const renderClubhouse = () => (
    <div className="auria1-content" id="clubhouse">
      <div className="auria1-clubhouse-section">
        <div className="auria1-clubhouse-image">
          <img src="https://rpsgroupindia.com/wp-content/uploads/2023/09/Auria-10-1.jpg" alt="Clubhouse Interior" />
        </div>
        <div className="auria1-clubhouse-text">
          <h3 className="auria1-club-label">THE CLUB HOUSE</h3>
          <h2 className="auria1-club-title">RELAX & REJUVINATE</h2>
          <p className="auria1-description">
            The fast-paced, sedentary lifestyle of today necessitates healthier habits. AURIA incorporates a host of facilities that are specifically targeted at ensuring an active and healthy lifestyle. The project has specially designed jogging trails, a swimming pool, health club, social club, indoor & outdoor sports facilities, exclusive play area for kids, cafeterias, mini theatre and even yoga facilities that will keep the residents absolutely fit and engaged.
          </p>
          
          <h3 className="auria1-sports-title">SPORTS ARENA</h3>
          <h2 className="auria1-sports-subtitle">ENERGIZE YOUR LIFESTYLE</h2>
          <p className="auria1-description">
            Discover the Ultimate Sports Arena at GreenBunch AURIA where residents can indulge in world-class sports having a basketball court, badminton courts and cricket net practice pitch, open gym and much more, enriching the lifestyle of every resident with active and engaging activities.
          </p>
        </div>
      </div>

      <div className="auria1-amenities-section">
        <div className="auria1-section-marker">⬥⬥⬥</div>
        <h2 className="auria1-section-title">CLUB AMENITIES</h2>
        <p className="auria1-amenities-subtitle">
          Every Amenity Is Planned And Designed With Utmost Passion & Unwavering Attention To Detail To Elevate Your Living Experience.
        </p>

        <div className="auria1-amenities-grid">
          {amenities.map((amenity, index) => (
            <div key={index} className="auria1-amenity-item">
              <div className="auria1-amenity-icon">{amenity.icon}</div>
              <h4 className="auria1-amenity-name">{amenity.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderLayouts = () => (
    <div className="auria1-content" id="layouts">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div className="auria1-section-marker">⬥⬥⬥</div>
        <h2 className="auria1-section-title">LAYOUT</h2>
      </div>

      <div className="auria1-layout-tabs">
        <button
          onClick={() => setActiveLayout('5bhk')}
          className={`auria1-layout-tab ${activeLayout === '5bhk' ? 'auria1-active-layout' : ''}`}
        >
          5 BHK
        </button>
        <button
          onClick={() => setActiveLayout('3bhk')}
          className={`auria1-layout-tab ${activeLayout === '3bhk' ? 'auria1-active-layout' : ''}`}
        >
          3 BHK
        </button>
        <button
          onClick={() => setActiveLayout('site')}
          className={`auria1-layout-tab ${activeLayout === 'site' ? 'auria1-active-layout' : ''}`}
        >
          SITE PLAN
        </button>
      </div>

      <div className="auria1-layout-content">
        {activeLayout === '5bhk' && (
          <>
            <div className="auria1-layout-item">
              <h3>T5- 5BHK (TYPICAL - I)</h3>
              <div className="auria1-floorplan">
                <img src={layoutImages['5bhk'][0]} alt="5 BHK Type 1" style={{ width: '100%', height: 'auto' }} />
              </div>
              <p style={{ textAlign: 'center', fontWeight: 'bold', color: '#2c2c2c' }}>
                Total Area - 3250 sq.ft
              </p>
            </div>
            <div className="auria1-layout-item">
              <h3>T5- 5BHK (TYPICAL - II)</h3>
              <div className="auria1-floorplan">
                <img src={layoutImages['5bhk'][1]} alt="5 BHK Type 2" style={{ width: '100%', height: 'auto' }} />
              </div>
              <p style={{ textAlign: 'center', fontWeight: 'bold', color: '#2c2c2c' }}>
                Total Area - 3300 Sqft
              </p>
            </div>
          </>
        )}
        {activeLayout === '3bhk' && (
          <>
            {layoutImages['3bhk'].map((image, index) => (
              <div key={index} className="auria1-layout-item">
                <h3>3 BHK (TYPE - {index + 1})</h3>
                <div className="auria1-floorplan">
                  <img src={image} alt={`3 BHK Type ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
                </div>
              </div>
            ))}
          </>
        )}
        {activeLayout === 'site' && (
          <div className="auria1-layout-item" style={{ maxWidth: '100%' }}>
            <h3>SITE PLAN</h3>
            <div className="auria1-floorplan">
              <img src={layoutImages['site'][0]} alt="Site Plan" style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderWhyChooseUs = () => (
    <div className="auria1-content" id="why">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div className="auria1-section-marker">⬥⬥⬥</div>
        <h2 className="auria1-section-title">WHY CHOOSE US</h2>
      </div>

      <div className="auria1-features-grid">
        <div className="auria1-feature-card">
          <Building size={48} style={{ color: '#d4a056' }} />
          <h3>PREMIUM SERVICED RESIDENCES</h3>
        </div>
        <div className="auria1-feature-card">
          <MapPin size={48} style={{ color: '#d4a056' }} />
          <h3>LOCATED IN THE HEART OF THE CITY</h3>
        </div>
        <div className="auria1-feature-card">
          <Award size={48} style={{ color: '#d4a056' }} />
          <h3>HIGHEST QUALITY OF CONSTRUCTION</h3>
        </div>
        <div className="auria1-feature-card">
          <Home size={48} style={{ color: '#d4a056' }} />
          <h3>DESIGNED FOR ONLY 45 FAMILIES PER ACRE</h3>
        </div>
        <div className="auria1-feature-card">
          <Star size={48} style={{ color: '#d4a056' }} />
          <h3>STATE OF THE ART SPECIFICATIONS</h3>
        </div>
        <div className="auria1-feature-card">
          <Trees size={48} style={{ color: '#d4a056' }} />
          <h3>LUSH GREEN GARDENS</h3>
        </div>
        <div className="auria1-feature-card">
          <Home size={48} style={{ color: '#d4a056' }} />
          <h3>ULTRA-SPACIOUS LAYOUTS</h3>
        </div>
        <div className="auria1-feature-card">
          <Award size={48} style={{ color: '#d4a056' }} />
          <h3>GRAND BALCONY AREA</h3>
        </div>
      </div>
    </div>
  );

  const renderGallery = () => (
    <div className="auria1-content" id="gallery">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div className="auria1-section-marker">⬥⬥⬥</div>
        <h2 className="auria1-section-title">GALLERY</h2>
      </div>

      <div className="auria1-gallery-grid">
        {galleryImages.map((image, index) => (
          <div key={index} className="auria1-gallery-item">
            <img src={image} alt={`Gallery ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        ))}
      </div>
    </div>
  );

  const renderLocation = () => (
    <div className="auria1-content" id="location">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div className="auria1-section-marker">⬥⬥⬥</div>
        <h2 className="auria1-section-title">LOCATION MAP</h2>
      </div>

      <div className="auria1-location-content">
        <div className="auria1-location-info">
          <h3>GREENBUNCH AURIA</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Elevate your lifestyle at GreenBunch Auria, where luxury meets serenity in a prime location.
            Experience the pinnacle of upscale living with top-notch amenities and impeccable craftsmanship.
          </p>
          <h3>GREENBUNCH SAVANA</h3>
          <p>
            Discover the pinnacle of residential excellence at GreenBunch Savana, where prime location meets ultimate comfort and style.
          </p>
        </div>
        <div className="auria1-location-map">
          <p>Interactive Map</p>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '2rem', marginTop: '3rem' }}>
        <div className="auria1-section-marker">⬥⬥⬥</div>
        <h3 className="auria1-connectivity-title">PERFECT LOCATION, GREAT CONNECTIVITY</h3>
      </div>

      <div className="auria1-connectivity-grid">
        {[
          '0 KM FROM MAA AMRITA HOSPITAL',
          '5 MIN. DRIVE FROM FNG EXPRESSWAY (UNDER CONSTRUCTION)',
          '5 MIN. DRIVE FROM DELHI-MUMBAI EXPRESSWAY (UNDER CONSTRUCTION)',
          '10 MIN. DRIVE FROM DELHI BORDER',
          '10 MIN. DRIVE FROM BADKHAL METRO STATION',
          'WORLD CLASS HOSPITALS & SCHOOLS IN VICINITY'
        ].map((location, index) => (
          <div key={index} className="auria1-connectivity-card">
            <MapPin size={24} style={{ color: '#d4a056', flexShrink: 0, marginTop: '0.25rem' }} />
            <p>{location}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    if (activeTab === 'all') {
      return (
        <>
          {renderOverview()}
          {renderApartments()}
          {renderClubhouse()}
          {renderLayouts()}
          {renderWhyChooseUs()}
          {renderGallery()}
          {renderLocation()}
        </>
      );
    } else if (activeTab === 'apartments') {
      return renderApartments();
    } else if (activeTab === 'clubhouse') {
      return renderClubhouse();
    } else if (activeTab === 'layouts') {
      return renderLayouts();
    } else if (activeTab === 'why') {
      return renderWhyChooseUs();
    } else if (activeTab === 'gallery') {
      return renderGallery();
    } else if (activeTab === 'location') {
      return renderLocation();
    }
  };

  return (
    <div className="auria1-container">
      <div className="auria1-hero">
        <img 
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80" 
          alt="GreenBunch Auria" 
          className="auria1-hero-image"
        />
        <div className="auria1-hero-logo">
          <span className="auria1-logo-text">AURIA</span>
        </div>
      </div>

      <nav className="auria1-navbar">
        {navItems.map(item => (
          <button
            key={item.id}
            className={`auria1-nav-item ${activeTab === item.id ? 'auria1-active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <main className="auria1-main">
        {renderContent()}
      </main>

    <Map/>
    </div>
  );
};

export default Auria1;