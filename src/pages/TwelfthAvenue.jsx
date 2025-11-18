import React, { useState, useEffect } from 'react';
import { MapPin, Building2, Maximize2, Users, Home, Droplets, Dumbbell, Shield, Utensils, Leaf, Zap, Camera } from 'lucide-react';

const TwelfthAvenue = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [scrollY, setScrollY] = useState(0);
  const [activeImage, setActiveImage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    interested: ''
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'all', label: 'OVERVIEW' },
    { id: 'offerings', label: 'OFFERINGS' },
    { id: 'advantage', label: 'ADVANTAGES' },
    { id: 'infrastructure', label: 'INFRASTRUCTURE' },
    { id: 'why-choose', label: 'WHY CHOOSE US' },
    { id: 'gallery', label: 'GALLERY' },
    { id: 'location', label: 'LOCATION' }
  ];

  const highlights = [
    { icon: <Building2 size={24} />, title: '16.5 Acres', desc: 'Premium Location' },
    { icon: <Maximize2 size={24} />, title: '80 Lakh Sq.ft', desc: 'Development Area' },
    { icon: <Users size={24} />, title: 'Mixed Use', desc: 'Office & Retail' },
    { icon: <Home size={24} />, title: '0 KM', desc: 'From Delhi Toll' }
  ];

  const offerings = [
    { icon: '🏢', label: 'LARGE OFFICE PLATES' },
    { icon: '🎭', label: 'F&B & ENTERTAINMENT' },
    { icon: '💼', label: 'PREMIUM BUSINESS SUITES' },
    { icon: '🏊', label: 'ROOF TOP CLUB WITH SWIMMING POOL' },
    { icon: '🖥️', label: 'CO-WORKING SPACE - MY DESK' },
    { icon: '🛒', label: 'HIGH STREET LUXURY RETAIL' }
  ];

  const advantages = [
    { icon: '🏆', text: "WORLD'S MOST PRESTIGIOUS BUSINESS ADDRESS" },
    { icon: '💵', text: '2 MIN DRIVE FROM MOHAN COOPERATIVE' },
    { icon: '🎯', text: '0 KM FROM DELHI FARIDABAD TOLL' },
    { icon: '📈', text: 'CATALYST TO THE ECONOMIES IT SERVES' }
  ];

  const infrastructure = [
    { icon: '🏗️', label: '80 Lakh Sq.ft. Development' },
    { icon: '⚡', label: '24*7 Power Backup' },
    { icon: '🛡️', label: 'Intelligent GA/A' },
    { icon: '🅿️', label: '3 Level Parking' },
    { icon: '💧', label: 'Rainwater Harvesting' },
    { icon: '❄️', label: 'Centrally Air Conditioned' },
    { icon: '🏊', label: 'Exclusive Roof Top Club' },
    { icon: '☀️', label: 'Solar Power Generation' }
  ];

  const whyChoose = [
    { icon: '🔒', title: 'SECURITY OF\nINVESTMENT', desc: 'Trust of a Global Power Brand' },
    { icon: '📊', title: 'HIGHER RETURNS ON\nINVESTMENT', desc: 'Higher Occupancy Longer Leases' },
    { icon: '👍', title: 'CAPITAL\nAPPRECIATION', desc: 'Catalyst to Business & Infrastructure' },
    { icon: '👑', title: 'PRIDE OF\nOWNERSHIP', desc: 'Creating Landmarks Of Prosperity' }
  ];

  const locationPoints = [
    '0 KM FROM DELHI-FBD TOLL',
    'BANG ON 6 LANE NH-2',
    'NEARBY SARAI & NHPC METRO STATION',
    '5 MIN DRIVE FROM MOHAN COOPERATIVE INDUSTRIAL ESTATE',
    'FAST ACCESS TO BOTH INTERNATIONAL AIRPORTS',
    'NEARBY DELHI MUMBAI EXPRESS WAY'
  ];

  const galleryImages = [
    'https://rpsgroupindia.com/wp-content/uploads/2024/02/Elevation-View-New.jpg',
    'https://rpsgroupindia.com/wp-content/uploads/2024/02/exter1-2.jpg',
    'https://rpsgroupindia.com/wp-content/uploads/2024/02/Night-View.jpg',
    'https://rpsgroupindia.com/wp-content/uploads/2024/02/Pods-View.jpg',
    'https://rpsgroupindia.com/wp-content/uploads/2024/02/View_07.jpg',
    'https://rpsgroupindia.com/wp-content/uploads/2024/02/High-Street_01.jpg'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.city || !formData.interested) {
      alert('Please fill all required fields');
      return;
    }
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', city: '', interested: '' });
  };

  const renderOverview = () => (
    <div className="avenue__section">
      <div className="avenue__container">
        <div className="avenue__grid">
          <div className="avenue__content">
            <div className="avenue__section-header">
              <div className="avenue__dots">
                <span className="avenue__dot"></span>
                <span className="avenue__dot"></span>
                <span className="avenue__dot"></span>
              </div>
              <span className="avenue__section-subtitle">PROJECT OVERVIEW</span>
            </div>
            <h2 className="avenue__section-title">World Class Eco-System</h2>
            <p className="avenue__text">
              RPS 12th Avenue, designed by BENOY, stands as a beacon of architectural 
              brilliance, with a pedigree that includes iconic landmarks such as Ferrari 
              World Abu Dhabi, Changi Airport Singapore, and Central Vista Rajpath.
            </p>
            <p className="avenue__text">
              Nestled just 0km away from the Delhi Faridabad toll, this dynamic space 
              seamlessly integrates office, retail, F&B, and entertainment offerings, 
              providing a vibrant hub for both business and leisure pursuits.
            </p>
            <div className="avenue__details-card">
              <div className="avenue__detail-row">
                <span className="avenue__detail-label">LOCATION</span>
                <span className="avenue__detail-value">0 KM From Delhi-Faridabad Toll</span>
              </div>
              <div className="avenue__detail-row">
                <span className="avenue__detail-label">TYPE</span>
                <span className="avenue__detail-value">Office & Retail Space</span>
              </div>
              <div className="avenue__detail-row">
                <span className="avenue__detail-label">PROJECT AREA</span>
                <span className="avenue__detail-value">16.5 Acres</span>
              </div>
              <div className="avenue__detail-row avenue__detail-row--last">
                <span className="avenue__detail-label">DEVELOPMENT AREA</span>
                <span className="avenue__detail-value">9 Acres</span>
              </div>
            </div>
          </div>
          <div className="avenue__image-wrapper">
            <div className="avenue__image-glow"></div>
            <div className="avenue__image">
              <img 
                src="https://rpsgroupindia.com/wp-content/uploads/2024/02/View_01.jpg" 
                alt="12th Avenue"
                className="avenue__img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderOfferings = () => (
    <div className="avenue__section">
      <div className="avenue__container">
        <div className="avenue__grid">
          <div className="avenue__image-wrapper">
            <div className="avenue__image-glow"></div>
            <div className="avenue__image">
              <img 
                src="https://images.unsplash.com/photo-1448630360428-65456885c650?w=1200&h=800&fit=crop" 
                alt="Offerings"
                className="avenue__img"
              />
            </div>
          </div>
          <div className="avenue__content">
            <p className="avenue__building-subtitle">THE ONE PROJECT THAT PROVIDES</p>
            <h2 className="avenue__building-title">THE CHOICEST OFFERINGS</h2>
            <p className="avenue__text">
              RPS 12th Avenue is envisaged as a mixed-use space combining meticulously 
              planned retail, F&B and office spaces. It aims to create an ecosystem that 
              provides the perfect location to work, shop, party and entertain in.
            </p>
            <p className="avenue__text">
              It also serves as a social magnet that maximizes footfall as a destination 
              for high-end retail labels, F&B outlets and well-known hospitality brands.
            </p>
          </div>
        </div>
        <div className="avenue__offerings-grid">
          {offerings.map((item, idx) => (
            <div key={idx} className="avenue__offering-card">
              <div className="avenue__offering-bg"></div>
              <div className="avenue__offering-content">
                <div className="avenue__offering-icon">{item.icon}</div>
                <p className="avenue__offering-label">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAdvantages = () => (
    <div className="avenue__advantages-section">
      <div className="avenue__container">
        <div className="avenue__advantages-header">
          <h2 className="avenue__advantages-title">RPS 12TH AVENUE ADVANTAGES</h2>
        </div>
        <div className="avenue__advantages-grid">
          {advantages.map((item, idx) => (
            <div key={idx} className="avenue__advantage-card">
              <div className="avenue__advantage-bg"></div>
              <div className="avenue__advantage-content">
                <div className="avenue__advantage-icon">{item.icon}</div>
                <p className="avenue__advantage-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderInfrastructure = () => (
    <div className="avenue__section">
      <div className="avenue__container">
        <div className="avenue__grid">
          <div className="avenue__content">
            <p className="avenue__building-subtitle">WHERE WORLD CLASS</p>
            <h2 className="avenue__building-title">INFRASTRUCTURE IS THE NORM</h2>
            <p className="avenue__text">
              The attentively and carefully planned infrastructure and facilities at 
              RPS 12th Avenue provide you with a distinct edge as far as day-to-day 
              operations are concerned.
            </p>
            <p className="avenue__text">
              This enables you to focus on your business performance and leave the 
              rest to the specialists.
            </p>
          </div>
          <div className="avenue__image-wrapper">
            <div className="avenue__image-glow"></div>
            <div className="avenue__image">
              <img 
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&h=800&fit=crop" 
                alt="Infrastructure"
                className="avenue__img"
              />
            </div>
          </div>
        </div>
        <div className="avenue__features-grid">
          {infrastructure.map((item, idx) => (
            <div key={idx} className="avenue__feature-card">
              <div className="avenue__feature-bg"></div>
              <div className="avenue__feature-content">
                <div className="avenue__feature-icon">{item.icon}</div>
                <h3 className="avenue__feature-title">{item.label}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderWhyChoose = () => (
    <div className="avenue__section">
      <div className="avenue__container">
        <div className="avenue__features-header">
          <h2 className="avenue__features-title">WHY CHOOSE US</h2>
        </div>
        <div className="avenue__choose-grid">
          {whyChoose.map((item, idx) => (
            <div key={idx} className="avenue__choose-card">
              <div className="avenue__choose-bg"></div>
              <div className="avenue__choose-content">
                <div className="avenue__choose-icon">{item.icon}</div>
                <h3 className="avenue__choose-title">{item.title}</h3>
                <p className="avenue__choose-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderGallery = () => (
    <div className="avenue__gallery-section">
      <div className="avenue__container">
        <div className="avenue__gallery-header">
          <h2 className="avenue__gallery-title">GALLERY</h2>
        </div>
        <div className="avenue__gallery-grid">
          {galleryImages.map((image, idx) => (
            <div 
              key={idx} 
              className="avenue__gallery-item"
              onClick={() => setActiveImage(image)}
            >
              <div className="avenue__gallery-overlay"></div>
              <img src={image} alt={`Gallery ${idx + 1}`} className="avenue__gallery-image" />
              <div className="avenue__gallery-icon">
                <div className="avenue__gallery-icon-bg">
                  <Camera size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderLocation = () => (
    <div className="avenue__location-section">
      <div className="avenue__container">
        <div className="avenue__location-header">
          <h2 className="avenue__location-title">STRATEGIC LOCATION & SUPERIOR CONNECTIVITY</h2>
          <p className="avenue__location-subtitle">0 KM FROM DELHI - FARIDABAD TOLL</p>
        </div>
        <div className="avenue__location-grid">
          {locationPoints.map((location, idx) => (
            <div key={idx} className="avenue__location-card">
              <div className="avenue__location-icon">
                <MapPin size={32} />
              </div>
              <p className="avenue__location-text">{location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="avenue__contact-section">
      <div className="avenue__container">
        <div className="avenue__contact-grid">
          <div className="avenue__contact-info">
            <h2 className="avenue__contact-title">GET IN TOUCH!</h2>
            <p className="avenue__contact-text">
              Discover your perfect business address at RPS 12th Avenue. 
              Fill out the form and our team will contact you soon.
            </p>
          </div>
          <div className="avenue__contact-form">
            <input
              type="text"
              name="name"
              placeholder="NAME"
              className="avenue__form-input"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="EMAIL ADDRESS"
              className="avenue__form-input"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="PHONE NUMBER"
              className="avenue__form-input"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="city"
              placeholder="CITY"
              className="avenue__form-input"
              value={formData.city}
              onChange={handleInputChange}
            />
            <select
              name="interested"
              className="avenue__form-select"
              value={formData.interested}
              onChange={handleInputChange}
            >
              <option value="">SELECT INTEREST</option>
              <option value="office">Office Space</option>
              <option value="retail">Retail Space</option>
              <option value="investment">Investment</option>
              <option value="other">Other</option>
            </select>
            <button onClick={handleSubmit} className="avenue__form-submit">SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    if (activeTab === 'all') {
      return (
        <>
          {renderOverview()}
          {renderOfferings()}
          {renderAdvantages()}
          {renderInfrastructure()}
          {renderWhyChoose()}
          {renderGallery()}
          {renderLocation()}
          {renderContact()}
        </>
      );
    } else if (activeTab === 'offerings') {
      return renderOfferings();
    } else if (activeTab === 'advantage') {
      return renderAdvantages();
    } else if (activeTab === 'infrastructure') {
      return renderInfrastructure();
    } else if (activeTab === 'why-choose') {
      return renderWhyChoose();
    } else if (activeTab === 'gallery') {
      return renderGallery();
    } else if (activeTab === 'location') {
      return (
        <>
          {renderLocation()}
          {renderContact()}
        </>
      );
    }
  };

  return (
    <div className="avenue">
      <style>{`
        .avenue {
          font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;
          color: #ffffff;
          background: linear-gradient(180deg, #020617 0%, #0f172a 50%, #020617 100%);
          min-height: 100vh;
          overflow-x: hidden;
        }

        .avenue__container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 20px;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        .avenue__hero-wrapper {
          position: relative;
          height: 100vh;
          overflow: hidden;
        }

        .avenue__hero-background {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80');
          background-size: cover;
          background-position: center;
          transition: transform 0.1s ease-out;
          transform: translateY(${scrollY * 0.5}px);
        }

        .avenue__hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(12, 74, 110, 0.8) 0%, rgba(15, 23, 42, 0.7) 50%, rgba(2, 6, 23, 1) 100%);
        }

        .avenue__hero-content {
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0 20px;
          z-index: 1;
        }

        .avenue__hero-text-wrapper {
          text-align: center;
          animation: fadeIn 1s ease-out;
        }

        .avenue__hero-subtitle {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: #06b6d4;
          font-size: 12px;
          font-weight: 300;
          letter-spacing: 4px;
          margin-bottom: 20px;
        }

        .avenue__hero-line {
          width: 48px;
          height: 1px;
          background: #06b6d4;
        }

        .avenue__hero-title {
          font-size: 96px;
          font-weight: 100;
          letter-spacing: 8px;
          color: #ffffff;
          text-shadow: 0 4px 30px rgba(0, 0, 0, 0.8);
          margin: 0 0 24px 0;
          line-height: 1.1;
        }

        .avenue__hero-description {
          font-size: 28px;
          color: #d1d5db;
          font-weight: 300;
          letter-spacing: 2px;
          margin-bottom: 20px;
        }

        .avenue__hero-location {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: #67e8f9;
          font-size: 14px;
        }

        .avenue__main-nav {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(90deg, #1e3a8a 0%, #0e7490 100%);
          display: flex;
          gap: 0;
          padding: 0;
          box-shadow: 0 -2px 20px rgba(0, 0, 0, 0.3);
          width: 90%;
          max-width: 1400px;
          z-index: 100;
        }

        .avenue__nav-link {
          flex: 1;
          padding: 25px 20px;
          text-decoration: none;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 1.5px;
          text-align: center;
          transition: all 0.3s ease;
          cursor: pointer;
          background: transparent;
          border: none;
          border-bottom: 3px solid transparent;
        }

        .avenue__nav-link:hover {
          color: #67e8f9;
          background: rgba(103, 232, 249, 0.1);
        }

        .avenue__nav-link--active {
          color: #67e8f9;
          border-bottom-color: #67e8f9;
          background: rgba(103, 232, 249, 0.1);
        }

        .avenue__stats-bar {
          background: linear-gradient(90deg, #1e3a8a 0%, #0e7490 100%);
          padding: 24px 0;
          margin-top: -1px;
        }

        .avenue__stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .avenue__stat-card {
          display: flex;
          align-items: center;
          gap: 16px;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 20px;
          transition: all 0.3s ease;
        }

        .avenue__stat-card:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .avenue__stat-icon {
          color: #67e8f9;
        }

        .avenue__stat-title {
          font-size: 24px;
          font-weight: 700;
          color: #ffffff;
        }

        .avenue__stat-desc {
          font-size: 13px;
          color: #d1d5db;
        }

        .avenue__section {
          padding: 120px 0;
        }

        .avenue__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .avenue__content {
          width: 100%;
        }

        .avenue__section-header {
          margin-bottom: 24px;
        }

        .avenue__dots {
          display: flex;
          gap: 6px;
          margin-bottom: 16px;
        }

        .avenue__dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #06b6d4;
        }

        .avenue__dot:nth-child(2) {
          background: #3b82f6;
        }

        .avenue__section-subtitle {
          color: #06b6d4;
          font-size: 12px;
          letter-spacing: 3px;
          font-weight: 600;
        }

        .avenue__section-title {
          font-size: 56px;
          font-weight: 100;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 32px;
        }

        .avenue__text {
          font-size: 16px;
          line-height: 1.8;
          color: #d1d5db;
          text-align: justify;
          margin-bottom: 20px;
        }

        .avenue__details-card {
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.5) 0%, rgba(30, 58, 138, 0.3) 100%);
          padding: 32px;
          border-radius: 16px;
          border: 1px solid rgba(6, 182, 212, 0.3);
          backdrop-filter: blur(10px);
          margin-top: 40px;
        }

        .avenue__detail-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 0;
          border-bottom: 1px solid rgba(6, 182, 212, 0.3);
        }

        .avenue__detail-row--last {
          border-bottom: none;
        }

        .avenue__detail-label {
          color: #06b6d4;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .avenue__detail-value {
          color: #e5e7eb;
          font-weight: 300;
        }

        .avenue__image-wrapper {
          position: relative;
        }

        .avenue__image-glow {
          position: absolute;
          inset: -16px;
          background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
          border-radius: 24px;
          filter: blur(40px);
          opacity: 0.3;
          animation: glow 3s ease-in-out infinite;
        }

        .avenue__image {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          transition: transform 0.5s ease;
        }

        .avenue__image:hover {
          transform: scale(1.02);
        }

        .avenue__img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.7s ease;
        }

        .avenue__image:hover .avenue__img {
          transform: scale(1.05);
        }

        .avenue__building-subtitle {
          color: #06b6d4;
          font-size: 12px;
          letter-spacing: 3px;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .avenue__building-title {
          font-size: 56px;
          font-weight: 100;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 24px;
        }

        .avenue__offerings-grid,
        .avenue__features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          margin-top: 60px;
        }

        .avenue__offering-card,
        .avenue__feature-card {
          position: relative;
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.5) 0%, rgba(30, 58, 138, 0.3) 100%);
          padding: 40px 32px;
          border-radius: 16px;
          border: 1px solid rgba(6, 182, 212, 0.3);
          backdrop-filter: blur(10px);
          transition: all 0.5s ease;
          overflow: hidden;
        }

        .avenue__offering-bg,
        .avenue__feature-bg,
        .avenue__advantage-bg,
        .avenue__choose-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(6, 182, 212, 0) 0%, rgba(59, 130, 246, 0) 100%);
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .avenue__offering-card:hover,
        .avenue__feature-card:hover,
        .avenue__advantage-card:hover,
        .avenue__choose-card:hover {
          transform: translateY(-8px);
          border-color: rgba(6, 182, 212, 0.6);
        }

        .avenue__offering-card:hover .avenue__offering-bg,
        .avenue__feature-card:hover .avenue__feature-bg,
        .avenue__advantage-card:hover .avenue__advantage-bg,
        .avenue__choose-card:hover .avenue__choose-bg {
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%);
          opacity: 1;
        }

        .avenue__offering-content,
        .avenue__feature-content,
        .avenue__advantage-content,
        .avenue__choose-content {
          position: relative;
          z-index: 1;
          text-align: center;
        }

        .avenue__offering-icon,
        .avenue__feature-icon {
          font-size: 56px;
          margin-bottom: 24px;
          display: flex;
          justify-content: center;
        }

        .avenue__offering-label,
        .avenue__feature-title {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 1px;
          color: #e5e7eb;
          line-height: 1.8;
          margin: 0;
        }

        .avenue__advantages-section,
        .avenue__gallery-section,
        .avenue__location-section {
          padding: 120px 0;
          background: linear-gradient(180deg, #0f172a 0%, #020617 100%);
        }

        .avenue__advantages-header,
        .avenue__features-header,
        .avenue__gallery-header,
        .avenue__location-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .avenue__advantages-title,
        .avenue__features-title,
        .avenue__gallery-title,
        .avenue__location-title {
          font-size: 72px;
          font-weight: 100;
          color: #ffffff;
          letter-spacing: 4px;
        }

        .avenue__location-subtitle {
          font-size: 24px;
          color: #06b6d4;
          margin-top: 16px;
          font-weight: 300;
        }

        .avenue__advantages-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .avenue__advantage-card {
          position: relative;
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.5) 0%, rgba(30, 58, 138, 0.3) 100%);
          padding: 40px 32px;
          border-radius: 16px;
          border: 1px solid rgba(6, 182, 212, 0.3);
          backdrop-filter: blur(10px);
          transition: all 0.5s ease;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .avenue__advantage-icon {
          font-size: 56px;
          margin-bottom: 24px;
        }

        .avenue__advantage-text {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 1px;
          color: #e5e7eb;
          line-height: 1.8;
          text-align: center;
          margin: 0;
        }

        .avenue__choose-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
        }

        .avenue__choose-card {
          position: relative;
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.5) 0%, rgba(30, 58, 138, 0.3) 100%);
          padding: 40px 32px;
          border-radius: 16px;
          border: 1px solid rgba(6, 182, 212, 0.3);
          backdrop-filter: blur(10px);
          transition: all 0.5s ease;
          overflow: hidden;
        }

        .avenue__choose-icon {
          font-size: 56px;
          margin-bottom: 24px;
          display: flex;
          justify-content: center;
        }

        .avenue__choose-title {
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 1px;
          color: #ffffff;
          line-height: 1.6;
          white-space: pre-line;
          margin: 0 0 16px 0;
        }

        .avenue__choose-desc {
          font-size: 13px;
          color: #d1d5db;
          line-height: 1.6;
          margin: 0;
        }

        .avenue__gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .avenue__gallery-item {
          position: relative;
          aspect-ratio: 4/3;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
        }

        .avenue__gallery-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.7s ease;
        }

        .avenue__gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
        }

        .avenue__gallery-icon {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 2;
        }

        .avenue__gallery-icon-bg {
          background: #06b6d4;
          padding: 16px;
          border-radius: 50%;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .avenue__gallery-item:hover .avenue__gallery-image {
          transform: scale(1.1);
        }

        .avenue__gallery-item:hover .avenue__gallery-overlay,
        .avenue__gallery-item:hover .avenue__gallery-icon {
          opacity: 1;
        }

        .avenue__location-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 24px;
        }

        .avenue__location-card {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 40px;
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.5) 0%, rgba(30, 58, 138, 0.3) 100%);
          border-radius: 16px;
          transition: all 0.4s ease;
          box-shadow: 0 10px 30px rgba(10, 25, 47, 0.2);
          border: 1px solid rgba(6, 182, 212, 0.3);
        }

        .avenue__location-card:hover {
          transform: translateY(-8px);
          border-color: rgba(6, 182, 212, 0.6);
        }

        .avenue__location-icon {
          color: #06b6d4;
          flex-shrink: 0;
        }

        .avenue__location-text {
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.5px;
          color: #e5e7eb;
          line-height: 1.6;
          margin: 0;
        }

        .avenue__contact-section {
          padding: 120px 0;
        }

        .avenue__contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .avenue__contact-title {
          font-size: 56px;
          font-weight: 100;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 24px;
        }

        .avenue__contact-text {
          font-size: 16px;
          line-height: 1.8;
          color: #d1d5db;
          margin-bottom: 20px;
        }

        .avenue__contact-form {
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.5) 0%, rgba(30, 58, 138, 0.3) 100%);
          padding: 40px;
          border-radius: 16px;
          border: 1px solid rgba(6, 182, 212, 0.3);
          backdrop-filter: blur(10px);
        }

        .avenue__form-input,
        .avenue__form-select {
          width: 100%;
          padding: 16px;
          margin-bottom: 20px;
          background: rgba(15, 23, 42, 0.5);
          border: 1px solid rgba(6, 182, 212, 0.3);
          border-radius: 8px;
          color: #ffffff;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .avenue__form-input::placeholder {
          color: #9ca3af;
        }

        .avenue__form-input:focus,
        .avenue__form-select:focus {
          outline: none;
          border-color: #06b6d4;
          background: rgba(15, 23, 42, 0.7);
        }

        .avenue__form-select {
          cursor: pointer;
        }

        .avenue__form-select option {
          background: #0f172a;
          color: #ffffff;
        }

        .avenue__form-submit {
          width: 100%;
          padding: 18px;
          background: linear-gradient(90deg, #06b6d4 0%, #3b82f6 100%);
          color: #ffffff;
          border: none;
          border-radius: 8px;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 2px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
        }

        .avenue__form-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(6, 182, 212, 0.4);
        }

        .avenue__modal {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.95);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.3s ease-out;
        }

        .avenue__modal-content {
          position: relative;
          max-width: 1200px;
          width: 100%;
        }

        .avenue__modal-close {
          position: absolute;
          top: -48px;
          right: 0;
          background: none;
          border: none;
          color: #ffffff;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .avenue__modal-close:hover {
          color: #06b6d4;
        }

        .avenue__modal-image {
          width: 100%;
          height: auto;
          border-radius: 16px;
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.8);
        }

        @media (max-width: 1024px) {
          .avenue__grid,
          .avenue__contact-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .avenue__hero-title {
            font-size: 64px;
          }

          .avenue__section-title,
          .avenue__building-title,
          .avenue__contact-title {
            font-size: 42px;
          }

          .avenue__advantages-title,
          .avenue__features-title,
          .avenue__gallery-title,
          .avenue__location-title {
            font-size: 52px;
          }
        }

        @media (max-width: 768px) {
          .avenue__hero-title {
            font-size: 48px;
            letter-spacing: 4px;
          }

          .avenue__hero-description {
            font-size: 20px;
          }

          .avenue__section-title,
          .avenue__building-title,
          .avenue__contact-title {
            font-size: 32px;
          }

          .avenue__advantages-title,
          .avenue__features-title,
          .avenue__gallery-title,
          .avenue__location-title {
            font-size: 40px;
          }

          .avenue__stats-grid,
          .avenue__offerings-grid,
          .avenue__features-grid,
          .avenue__advantages-grid,
          .avenue__choose-grid,
          .avenue__gallery-grid {
            grid-template-columns: 1fr;
          }

          .avenue__section,
          .avenue__advantages-section,
          .avenue__gallery-section,
          .avenue__location-section,
          .avenue__contact-section {
            padding: 80px 0;
          }

          .avenue__main-nav {
            flex-wrap: wrap;
            width: 100%;
          }

          .avenue__nav-link {
            font-size: 11px;
            padding: 20px 15px;
          }
        }

        @media (max-width: 480px) {
          .avenue__hero-title {
            font-size: 32px;
            letter-spacing: 2px;
          }

          .avenue__hero-description {
            font-size: 16px;
          }

          .avenue__section-title,
          .avenue__building-title,
          .avenue__contact-title {
            font-size: 28px;
          }

          .avenue__advantages-title,
          .avenue__features-title,
          .avenue__gallery-title,
          .avenue__location-title {
            font-size: 32px;
          }

          .avenue__container {
            padding: 0 15px;
          }

          .avenue__grid,
          .avenue__contact-grid {
            gap: 40px;
          }

          .avenue__location-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Hero Section */}
      <div className="avenue__hero-wrapper">
        <div className="avenue__hero-background" />
        <div className="avenue__hero-overlay" />
        
        <div className="avenue__hero-content">
          <div className="avenue__hero-text-wrapper">
            <div className="avenue__hero-subtitle">
              <span className="avenue__hero-line"></span>
              <span>WORLD CLASS ECO-SYSTEM</span>
              <span className="avenue__hero-line"></span>
            </div>
            <h1 className="avenue__hero-title">RPS 12TH AVENUE</h1>
            <p className="avenue__hero-description">Where Business Meets Excellence</p>
            <div className="avenue__hero-location">
              <MapPin size={16} />
              <span>0 KM from Delhi-Faridabad Toll</span>
            </div>
          </div>
        </div>

        <nav className="avenue__main-nav">
          {navItems.map(item => (
            <button
              key={item.id}
              className={`avenue__nav-link ${activeTab === item.id ? 'avenue__nav-link--active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Stats Bar */}
      <div className="avenue__stats-bar">
        <div className="avenue__stats-grid">
          {highlights.map((item, idx) => (
            <div key={idx} className="avenue__stat-card">
              <div className="avenue__stat-icon">{item.icon}</div>
              <div>
                <div className="avenue__stat-title">{item.title}</div>
                <div className="avenue__stat-desc">{item.desc}</div>
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
        <div className="avenue__modal" onClick={() => setActiveImage(null)}>
          <div className="avenue__modal-content">
            <button className="avenue__modal-close" onClick={() => setActiveImage(null)}>
              <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img src={activeImage} alt="Full view" className="avenue__modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default TwelfthAvenue;