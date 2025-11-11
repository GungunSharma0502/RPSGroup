import '../css/Twelveth.css';
import React, { useState } from 'react';




const TwelfthAvenue = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    interested: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.city || !formData.interested) {
      alert('Please fill all required fields');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', city: '', interested: '' });
  };

  return (
    <div className="Avenue-container">
      {/* Hero Section */}
      <section className="Avenue-hero">
        <div className="Avenue-hero-overlay">
          <h1 className="Avenue-hero-title">WORLD CLASS</h1>
          <h2 className="Avenue-hero-subtitle">ECO-SYSTEM</h2>
        </div>
        <nav className="Avenue-nav">
          <a href="#overview" className="Avenue-nav-link">OVERVIEW</a>
          <a href="#amenities" className="Avenue-nav-link">AMENITIES</a>
          <a href="#about" className="Avenue-nav-link">ABOUT PROJECT</a>
          <a href="#advantage" className="Avenue-nav-link">12TH AVENUE ADVANTAGE</a>
          <a href="#choose" className="Avenue-nav-link">WHY CHOOSE US</a>
          <a href="#location" className="Avenue-nav-link">LOCATION</a>
        </nav>
      </section>

      {/* Overview Section */}
      <section id="overview" className="Avenue-overview">
        <div className="Avenue-overview-content">
          <div className="Avenue-overview-text">
            <div className="Avenue-title-wrapper">
              <span className="Avenue-title-icon">⬤⬤⬤</span>
              <h2 className="Avenue-section-title">PROJECT OVERVIEW</h2>
            </div>
            <p className="Avenue-overview-description">
              RPS 12th Avenue, designed by BENOY, stands as a beacon of architectural 
              brilliance, with a pedigree that includes iconic landmarks such as Ferrari 
              World Abu Dhabi, Changi Airport Singapore, and Central Vista Rajpath. 
              Nestled just 0km away from the Delhi Faridabad toll, this dynamic space 
              seamlessly integrates office, retail, F&B, and entertainment offerings, 
              providing a vibrant hub for both business and leisure pursuits. With its 
              strategic location and world-class design, RPS 12th Avenue promises an 
              unparalleled experience for visitors and occupants alike.
            </p>
            <div className="Avenue-overview-details">
              <div className="Avenue-detail-row">
                <span className="Avenue-detail-label">Location</span>
                <span className="Avenue-detail-value">0 KM From Delhi-Faridabad Toll</span>
              </div>
              <div className="Avenue-detail-row">
                <span className="Avenue-detail-label">Type</span>
                <span className="Avenue-detail-value">Office & Retail Space</span>
              </div>
              <div className="Avenue-detail-row">
                <span className="Avenue-detail-label">Project Area</span>
                <span className="Avenue-detail-value">16.5 Acres</span>
              </div>
              <div className="Avenue-detail-row">
                <span className="Avenue-detail-label">Development Area</span>
                <span className="Avenue-detail-value">9 Acres</span>
              </div>
            </div>
          </div>
          <div className="Avenue-overview-image">
            <div className="Avenue-image-placeholder">
              <div className="Avenue-building-mockup"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="Avenue-offerings">
        <div className="Avenue-offerings-content">
          <div className="Avenue-offerings-text">
            <h2 className="Avenue-offerings-title">THE ONE PROJECT THAT PROVIDES</h2>
            <h3 className="Avenue-offerings-subtitle">THE CHOICEST OFFERINGS</h3>
            <p className="Avenue-offerings-description">
              RPS 12th Avenue is envisaged as a mixed-use space combining meticulously planned retail, F&B and office spaces. It aims to create an ecosystem that provides the perfect location to work, shop, party and entertain in. It also serves as a social magnet that maximizes footfall as a destination for high-end retail labels, F&B outlets and well-known hospitality brands aim to connect with their affluent audiences in an ultra-modern setting.
            </p>
            <div className="Avenue-offerings-grid">
              <div className="Avenue-offering-item">
                <div className="Avenue-offering-icon Avenue-icon-orange">🏢</div>
                <span className="Avenue-offering-text">LARGE OFFICE PLATES</span>
              </div>
              <div className="Avenue-offering-item">
                <div className="Avenue-offering-icon Avenue-icon-orange">🎭</div>
                <span className="Avenue-offering-text">F&B & ENTERTAINMENT</span>
              </div>
              <div className="Avenue-offering-item">
                <div className="Avenue-offering-icon Avenue-icon-orange">💼</div>
                <span className="Avenue-offering-text">PREMIUM BUSINESS SUITES</span>
              </div>
              <div className="Avenue-offering-item">
                <div className="Avenue-offering-icon Avenue-icon-orange">🏊</div>
                <span className="Avenue-offering-text">ROOF TOP CLUB WITH SWIMMING POOL</span>
              </div>
              <div className="Avenue-offering-item">
                <div className="Avenue-offering-icon Avenue-icon-orange">🖥️</div>
                <span className="Avenue-offering-text">CO-WORKING SPACE - MY DESK</span>
              </div>
              <div className="Avenue-offering-item">
                <div className="Avenue-offering-icon Avenue-icon-orange">🛒</div>
                <span className="Avenue-offering-text">HIGH STREET LUXURY RETAIL</span>
              </div>
            </div>
          </div>
          <div className="Avenue-offerings-image">
            <div className="Avenue-image-placeholder Avenue-aerial-view"></div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantage" className="Avenue-advantages">
        <div className="Avenue-advantages-header">
          <span className="Avenue-advantages-icon">☰</span>
          <h2 className="Avenue-advantages-title">RPS - 12TH AVENUE ADVANTAGES</h2>
        </div>
        <div className="Avenue-advantages-grid">
          <div className="Avenue-advantage-card">
            <div className="Avenue-advantage-icon">🏆</div>
            <p className="Avenue-advantage-text">WORLD'S MOST PRESTIGIOUS BUSINESS ADDRESS</p>
          </div>
          <div className="Avenue-advantage-card">
            <div className="Avenue-advantage-icon">💵</div>
            <p className="Avenue-advantage-text">2 MIN DRIVE FROM MOHAN COOPERATIVE</p>
          </div>
          <div className="Avenue-advantage-card">
            <div className="Avenue-advantage-icon">🎯</div>
            <p className="Avenue-advantage-text">0 KM FROM DELHI FARIDABAD TOLL</p>
          </div>
          <div className="Avenue-advantage-card">
            <div className="Avenue-advantage-icon">📈</div>
            <p className="Avenue-advantage-text">KNOWN TO ACT AS A CATALYST TO THE ECONOMIES IT SERVES, BRINGING PROSPERITY TO THE ENTIRE REGION</p>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="Avenue-infrastructure">
        <div className="Avenue-infrastructure-content">
          <div className="Avenue-infrastructure-text">
            <h2 className="Avenue-infrastructure-title">WHERE WORLD CLASS</h2>
            <h3 className="Avenue-infrastructure-subtitle">INFRASTRUCTURE</h3>
            <h3 className="Avenue-infrastructure-subtitle-alt">IS THE NORM</h3>
            <p className="Avenue-infrastructure-description">
              The attentively and carefully planned infrastructure and facilities at RPS 12th Avenue provide you with a distinct edge as far as day-to-day operations are concerned. This enables you to focus on your business performance and leave the rest to the specialists.
            </p>
            <div className="Avenue-infrastructure-features">
              <div className="Avenue-feature-item">
                <div className="Avenue-feature-icon">🏗️</div>
                <span>80 Lakh Sq.ft. Development</span>
              </div>
              <div className="Avenue-feature-item">
                <div className="Avenue-feature-icon">⚡</div>
                <span>24*7 Power Backup</span>
              </div>
              <div className="Avenue-feature-item">
                <div className="Avenue-feature-icon">🛡️</div>
                <span>Intelligent GA/A</span>
              </div>
              <div className="Avenue-feature-item">
                <div className="Avenue-feature-icon">🅿️</div>
                <span>3 Level Parking</span>
              </div>
              <div className="Avenue-feature-item">
                <div className="Avenue-feature-icon">💧</div>
                <span>Rainwater Harvesting</span>
              </div>
              <div className="Avenue-feature-item">
                <div className="Avenue-feature-icon">❄️</div>
                <span>Centrally Air Conditioned</span>
              </div>
              <div className="Avenue-feature-item">
                <div className="Avenue-feature-icon">🏊</div>
                <span>Exclusive Roof Top Club</span>
              </div>
              <div className="Avenue-feature-item">
                <div className="Avenue-feature-icon">☀️</div>
                <span>Solar Power Generation</span>
              </div>
            </div>
          </div>
          <div className="Avenue-infrastructure-image">
            <div className="Avenue-image-placeholder Avenue-rooftop-view"></div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="choose" className="Avenue-choose">
        <div className="Avenue-choose-header">
          <span className="Avenue-choose-icon">☰</span>
          <h2 className="Avenue-choose-title">WHY CHOOSE US</h2>
        </div>
        <div className="Avenue-choose-grid">
          <div className="Avenue-choose-card">
            <div className="Avenue-choose-card-icon">🔒</div>
            <h3 className="Avenue-choose-card-title">SECURITY OF<br/>INVESTMENT</h3>
            <p className="Avenue-choose-card-text">Trust of a Global Power Brand</p>
          </div>
          <div className="Avenue-choose-card">
            <div className="Avenue-choose-card-icon">📊</div>
            <h3 className="Avenue-choose-card-title">HIGHER RETURNS ON<br/>INVESTMENT</h3>
            <p className="Avenue-choose-card-text">Higher Occupancy Longer Leases</p>
          </div>
          <div className="Avenue-choose-card">
            <div className="Avenue-choose-card-icon">👍</div>
            <h3 className="Avenue-choose-card-title">CAPITAL<br/>APPRECIATION</h3>
            <p className="Avenue-choose-card-text">Catalyst to Business & Infrastructure</p>
          </div>
          <div className="Avenue-choose-card">
            <div className="Avenue-choose-card-icon">👑</div>
            <h3 className="Avenue-choose-card-title">PRIDE OF<br/>OWNERSHIP</h3>
            <p className="Avenue-choose-card-text">Creating Landmarks Of Prosperity</p>
          </div>
        </div>
        <div className="Avenue-choose-badge">
          <div className="Avenue-badge-circle">
            <div className="Avenue-badge-top">SECURITY</div>
            <div className="Avenue-badge-right">RETURNS</div>
            <div className="Avenue-badge-center">
              <div className="Avenue-badge-the">THE</div>
              <div className="Avenue-badge-power">POWER</div>
              <div className="Avenue-badge-of">OF</div>
              <div className="Avenue-badge-number">4</div>
            </div>
            <div className="Avenue-badge-bottom">APPRECIATION</div>
            <div className="Avenue-badge-left">PRIDE</div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="Avenue-gallery">
        <div className="Avenue-gallery-grid">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="Avenue-gallery-item">
              <div className="Avenue-gallery-placeholder">{`View ${item}`}</div>
            </div>
          ))}
        </div>
        <button className="Avenue-gallery-load-more">LOAD MORE</button>
      </section>

      {/* Location Section */}
      <section id="location" className="Avenue-location">
        <div className="Avenue-location-header">
          <span className="Avenue-location-icon">☰</span>
          <h2 className="Avenue-location-title">STRATEGIC LOCATION & SUPERIOR CONNECTIVITY</h2>
        </div>
        <div className="Avenue-location-content">
          <div className="Avenue-location-info">
            <h3 className="Avenue-location-subtitle">0 KM FROM DELHI - FARIDABAD TOLL</h3>
            <p className="Avenue-location-description">
              Introducing RPS 12th Avenue, a groundbreaking commercial and office 
              space project situated at an unbeatable location, right at the Delhi-Faridabad toll. 
              This project offers unparalleled convenience as it is precisely 0 km from 
              the toll plaza, providing seamless connectivity to both Delhi and Faridabad.
            </p>
          </div>
          <div className="Avenue-location-image">
            <div className="Avenue-location-map-placeholder">Aerial View Map</div>
          </div>
        </div>
        
        <div className="Avenue-connectivity-header">
          <span className="Avenue-connectivity-icon">☰</span>
          <h3 className="Avenue-connectivity-title">PERFECT LOCATION, GREAT CONNECTIVITY</h3>
        </div>
        <div className="Avenue-connectivity-grid">
          <div className="Avenue-connectivity-card">
            <div className="Avenue-connectivity-icon">📍</div>
            <p>0 KM FROM DELHI-FBD TOLL</p>
          </div>
          <div className="Avenue-connectivity-card">
            <div className="Avenue-connectivity-icon">📍</div>
            <p>BANG ON 6 LANE NH-2</p>
          </div>
          <div className="Avenue-connectivity-card">
            <div className="Avenue-connectivity-icon">📍</div>
            <p>NEARBY SARAI & NHPC METRO STATION</p>
          </div>
          <div className="Avenue-connectivity-card">
            <div className="Avenue-connectivity-icon">📍</div>
            <p>5 MIN DRIVE FROM MOHAN COOPERATIVE INDUSTRIAL ESTATE</p>
          </div>
          <div className="Avenue-connectivity-card">
            <div className="Avenue-connectivity-icon">📍</div>
            <p>FAST ACCESS TO BOTH INTERNATIONAL AIRPORTS</p>
          </div>
          <div className="Avenue-connectivity-card">
            <div className="Avenue-connectivity-icon">📍</div>
            <p>NEARBY DELHI MUMBAI EXPRESS WAY</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="Avenue-contact">
        <div className="Avenue-contact-content">
          <div className="Avenue-contact-map">
            <div className="Avenue-map-placeholder">
              <div className="Avenue-map-marker">📍</div>
              <div className="Avenue-map-label">RPS 12th Avenue<br/>Faridabad, Haryana 121003</div>
            </div>
          </div>
          <div className="Avenue-contact-form">
            <h2 className="Avenue-contact-title">GET IN TOUCH !</h2>
            <div className="Avenue-form-wrapper">
              <input
                type="text"
                name="name"
                placeholder="NAME"
                className="Avenue-form-input"
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                type="email"
                name="email"
                placeholder="EMAIL ADDRESS"
                className="Avenue-form-input"
                value={formData.email}
                onChange={handleInputChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="PHONE NUMBER"
                className="Avenue-form-input"
                value={formData.phone}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="city"
                placeholder="CITY"
                className="Avenue-form-input"
                value={formData.city}
                onChange={handleInputChange}
              />
              <div className="Avenue-form-group">
                <label className="Avenue-form-label">INTERESTED *</label>
                <select
                  name="interested"
                  className="Avenue-form-select"
                  value={formData.interested}
                  onChange={handleInputChange}
                >
                  <option value="">SELECT</option>
                  <option value="office">Office Space</option>
                  <option value="retail">Retail Space</option>
                  <option value="investment">Investment</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <button onClick={handleSubmit} className="Avenue-form-submit">SUBMIT</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TwelfthAvenue;