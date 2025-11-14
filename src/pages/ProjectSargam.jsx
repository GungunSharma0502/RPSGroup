import React, { useState } from 'react';
import '../css/ProjectsCss/ProjectSargam.css';

const ProjectSargam = () => {
  const galleryImages = [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
    'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800',
    'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800'
  ];

  const amenities = [
    { icon: '🛡️', name: 'Gated township' },
    { icon: '🧘', name: 'Wellness space' },
    { icon: '🛣️', name: 'Wide peripheral roads' },
    { icon: '🌳', name: 'Cluster of Greenland' },
    { icon: '📹', name: '24×7 CCTV' },
    { icon: '🌿', name: 'Common area landscaping' },
    { icon: '♻️', name: 'Smart waste management' },
    { icon: '🏡', name: 'Individual farmhouse land' }
  ];

  const keyFeatures = [
    {
      icon: '🛣️',
      title: 'Wide Peripheral & Internal Roads',
      description: 'Well-planned road network ensuring smooth connectivity throughout the farmland.'
    },
    {
      icon: '🏠',
      title: 'Morder homes',
      description: 'Spacious, well-designed homes with high-quality finishes, natural light, and stunning views to match your lifestyle.'
    },
    {
      icon: '👥',
      title: 'Community Engagement',
      description: 'Spaces designed for social interaction and community bonding activities.'
    },
    {
      icon: '♻️',
      title: 'Eco - friendly design',
      description: 'Built with sustainable materials, waste management to support a greener environment.'
    }
  ];

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    enquiry: '',
    city: 'Delhi',
    agreed: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = () => {
    if (!formData.fullName || !formData.phone || !formData.enquiry || !formData.agreed) {
      alert('Please fill all required fields and agree to the privacy policy.');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Thank you for your enquiry! We will get back to you soon.');
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      enquiry: '',
      city: 'Delhi',
      agreed: false
    });
  };

  return (
    <div className="ProjectSargam">
      {/* Hero Section */}
      <section className="ProjectSargam__hero">
        <div className="ProjectSargam__hero-bg">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800" 
            alt="RPS Sargam Farmland" 
            className="ProjectSargam__hero-image"
          />
          {/* <div className="ProjectSargam__hero-overlay"></div> */}
        </div>
        
        {/* Decorative Pavilion */}
        {/* <div className="ProjectSargam__pavilion">
          <div className="ProjectSargam__pavilion-top">
            <div className="ProjectSargam__pavilion-arch"></div>
          </div>
          <div className="ProjectSargam__pavilion-pillars">
            <div className="ProjectSargam__pavilion-pillar"></div>
            <div className="ProjectSargam__pavilion-pillar"></div>
          </div>
        </div> */}
      </section>

      {/* Info Section */}
      <section className="ProjectSargam__info">
        <div className="ProjectSargam__info-content">
          <h1 className="ProjectSargam__info-title">RPS Sargam Farmland Naugoan</h1>
          <p className="ProjectSargam__info-description">
            Rps Sargam Farmland She is located in Naugoan, Delhi-Mumbai Expressway, Alwar (Raj.). RPS Sargam Farmland Naugoan is not just a harmonious retreat; it is a sanctuary where the gentle symphonies of nature intertwine with the epitome of luxurious living, inspired by the grandeur and intricate craftsmanship of Rajasthan's architecture.
          </p>
          <div className="ProjectSargam__info-details">
            <div className="ProjectSargam__info-item">
              <span className="ProjectSargam__info-icon">📍</span>
              <span>4th Floor, Incoospace M3M Urbana Premium, Sec - 67, Gurugram</span>
            </div>
            <div className="ProjectSargam__info-item">
              <span className="ProjectSargam__info-icon">🏡</span>
              <span>Residentials</span>
            </div>
            <div className="ProjectSargam__info-item">
              <span className="ProjectSargam__info-icon">🌳</span>
              <span>Common Area Landscaping</span>
            </div>
            <div className="ProjectSargam__info-item">
              <span className="ProjectSargam__info-icon">🔒</span>
              <span>Secure Gated Community</span>
            </div>
            <div className="ProjectSargam__info-badge">LIVE</div>
          </div>
        </div>
        <div className="ProjectSargam__info-image">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800" 
            alt="Project View"
            className="ProjectSargam__featured-image"
          />
        </div>
      </section>

      {/* Amenities Section */}
      <section className="ProjectSargam__amenities">
        <h2 className="ProjectSargam__section-title">AMENITIES</h2>
        <div className="ProjectSargam__amenities-grid">
          {amenities.map((amenity, index) => (
            <div key={index} className="ProjectSargam__amenity-item">
              <div className="ProjectSargam__amenity-icon">{amenity.icon}</div>
              <p className="ProjectSargam__amenity-name">{amenity.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="ProjectSargam__gallery">
        <h2 className="ProjectSargam__section-title">GALLERY</h2>
        <div className="ProjectSargam__gallery-grid">
          {galleryImages.map((img, index) => (
            <div key={index} className="ProjectSargam__gallery-item">
              <img src={img} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Key Features Section */}
      <section className="ProjectSargam__features">
        <div className="ProjectSargam__features-header">
          <h2 className="ProjectSargam__features-title">Key features at RPS Sargam Farmland Naugoan</h2>
          <p className="ProjectSargam__features-subtitle">Thoughtfully Designed Amenities for Modern Living</p>
        </div>
        
        <div className="ProjectSargam__features-highlight">
          <h3 className="ProjectSargam__features-highlight-title">Property Highlights</h3>
          <h4 className="ProjectSargam__features-highlight-subtitle">Relax & Rejuvinate</h4>
          <p className="ProjectSargam__features-highlight-text">
            RPS Sargam blends luxury, functionality, and natural beauty, offering an exceptional living experience with comfort, convenience, and sustainability.
          </p>
        </div>

        <div className="ProjectSargam__features-grid">
          {keyFeatures.map((feature, index) => (
            <div key={index} className="ProjectSargam__feature-card">
              <div className="ProjectSargam__feature-icon">{feature.icon}</div>
              <h3 className="ProjectSargam__feature-title">{feature.title}</h3>
              <p className="ProjectSargam__feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="ProjectSargam__contact">
        <h2 className="ProjectSargam__section-title">GET IN TOUCH</h2>
        <div className="ProjectSargam__form">
          <div className="ProjectSargam__form-group">
            <label className="ProjectSargam__form-label">Full name *</label>
            <input 
              type="text" 
              name="fullName"
              className="ProjectSargam__form-input" 
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </div>
          <div className="ProjectSargam__form-group">
            <label className="ProjectSargam__form-label">Phone Number *</label>
            <div className="ProjectSargam__phone-input">
              <span className="ProjectSargam__phone-code">+91 -</span>
              <input 
                type="tel" 
                name="phone"
                className="ProjectSargam__form-input" 
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="ProjectSargam__form-group">
            <label className="ProjectSargam__form-label">Email</label>
            <input 
              type="email" 
              name="email"
              className="ProjectSargam__form-input"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="ProjectSargam__form-group">
            <label className="ProjectSargam__form-label">Enquiry for *</label>
            <select 
              name="enquiry"
              className="ProjectSargam__form-select"
              value={formData.enquiry}
              onChange={handleInputChange}
            >
              <option value="">Select a project</option>
              <option value="sargam-farmland">RPS Sargam Farmland Naugoan</option>
              <option value="general">General Enquiry</option>
            </select>
          </div>
          <div className="ProjectSargam__form-group">
            <label className="ProjectSargam__form-label">Select city *</label>
            <select 
              name="city"
              className="ProjectSargam__form-select"
              value={formData.city}
              onChange={handleInputChange}
            >
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Jaipur">Jaipur</option>
              <option value="Alwar">Alwar</option>
            </select>
          </div>
          <div className="ProjectSargam__form-checkbox">
            <input 
              type="checkbox" 
              name="agreed"
              id="privacy" 
              checked={formData.agreed}
              onChange={handleInputChange}
            />
            <label htmlFor="privacy">
              By checking this box, you agree to our <span className="ProjectSargam__form-link">Privacy Policy</span> and consent to be contacted with relevant updates.
            </label>
          </div>
          <button type="button" className="ProjectSargam__form-submit" onClick={handleSubmit}>SUBMIT</button>
        </div>
      </section>
    </div>
  );
};

export default ProjectSargam;