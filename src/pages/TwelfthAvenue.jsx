import React, { useState, useEffect } from 'react';
import '../css/Twelveth.css';
import { MapPin, Building2, Maximize2, Users, Home, Droplets, Dumbbell, Shield, Utensils, Leaf, Zap, Camera, CheckCircle } from 'lucide-react';

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
    { icon: <CheckCircle size={24} />, title: '0 KM', desc: 'From Delhi Toll' }
  ];

  const offerings = [
    { icon: <Home size={36} />, label: 'LARGE OFFICE PLATES' },
    { icon: <Utensils size={36} />, label: 'F&B & ENTERTAINMENT' },
    { icon: <Shield size={36} />, label: 'PREMIUM BUSINESS SUITES' },
    { icon: <Droplets size={36} />, label: 'ROOF TOP CLUB WITH SWIMMING POOL' },
    { icon: <Dumbbell size={36} />, label: 'CO-WORKING SPACE - MY DESK' },
    { icon: <Leaf size={36} />, label: 'HIGH STREET LUXURY RETAIL' }
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
              Green Bunch 12th Avenue, designed by BENOY, stands as a beacon of architectural 
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
              Green Bunch 12th Avenue is envisaged as a mixed-use space combining meticulously 
              planned retail, F&B and office spaces. It aims to create an ecosystem that 
              provides the perfect location to work, shop, party and entertain in.
            </p>
            <p className="avenue__text">
              It also serves as a social magnet that maximizes footfall as a destination 
              for high-end retail labels, F&B outlets and well-known hospitality brands.
            </p>
          </div>
        </div>
        <div className="avenue__amenities-grid">
          {offerings.map((item, idx) => (
            <div key={idx} className="avenue__amenity-card">
              <div className="avenue__amenity-bg"></div>
              <div className="avenue__amenity-content">
                <div className="avenue__amenity-icon">{item.icon}</div>
                <p className="avenue__amenity-label">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAdvantages = () => (
    <div className="avenue__amenities-section">
      <div className="avenue__container">
        <div className="avenue__amenities-header">
          <h2 className="avenue__amenities-title">GREEN BUNCH 12TH AVENUE ADVANTAGES</h2>
          <p className="avenue__amenities-description">
            Every Advantage Is Carefully Planned And Designed With Utmost Attention To Detail To Elevate Your Business Experience.
          </p>
        </div>
        <div className="avenue__amenities-grid">
          {advantages.map((item, idx) => (
            <div key={idx} className="avenue__amenity-card">
              <div className="avenue__amenity-bg"></div>
              <div className="avenue__amenity-content">
                <div className="avenue__amenity-icon">{item.icon}</div>
                <p className="avenue__amenity-label">{item.text}</p>
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
              Green Bunch 12th Avenue provide you with a distinct edge as far as day-to-day 
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
        <div className="avenue__features-grid">
          {whyChoose.map((item, idx) => (
            <div key={idx} className="avenue__feature-card">
              <div className="avenue__feature-bg"></div>
              <div className="avenue__feature-content">
                <div className="avenue__feature-icon">{item.icon}</div>
                <h3 className="avenue__feature-title">{item.title}</h3>
                {item.desc && <p className="avenue__feature-desc">{item.desc}</p>}
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
    <div className="avenue__section">
      <div className="avenue__container">
        <div className="avenue__grid">
          <div className="avenue__content">
            <h2 className="avenue__section-title">GET IN TOUCH!</h2>
            <p className="avenue__text">
              Discover your perfect business address at Green Bunch 12th Avenue. 
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
      {/* Hero Section */}
      <div className="avenue__hero-wrapper">
        <div 
          className="avenue__hero-background"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="avenue__hero-overlay" />
        
        <div className="avenue__hero-content">
          <div className="avenue__hero-text-wrapper">
            <div className="avenue__hero-subtitle">
              <span className="avenue__hero-line"></span>
              <span>WORLD CLASS ECO-SYSTEM</span>
              <span className="avenue__hero-line"></span>
            </div>
            <h1 className="avenue__hero-title">GREEN BUNCH 12TH AVENUE</h1>
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