import React, { useState } from 'react';
import '../css/ProjectsCss/ProjectGoa.css';

const ProjectGoa = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
    'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800'
  ];

  const amenities = [
    { icon: '🛡️', name: 'Gated township' },
    { icon: '🎭', name: 'Open air theater' },
    { icon: '⛳', name: 'Mini golf area' },
    { icon: '🏊', name: 'Lake house' },
    { icon: '🎪', name: 'Kids play area' },
    { icon: '🏋️', name: 'Gymnasium' },
    { icon: '🌳', name: 'Open green space' },
    { icon: '🏖️', name: 'Cabana' },
    { icon: '🏛️', name: 'Clubhouse' }
  ];

  const keyFeatures = [
    {
      icon: '📍',
      title: 'Prime Location',
      description: 'Close to Goa\'s beautiful beaches, lush greenery, and cultural attractions, with easy access to key destinations.'
    },
    {
      icon: '🏠',
      title: 'Modern homes',
      description: 'Spacious, well-designed homes with high-quality finishes, natural light, and stunning views to match your lifestyle.'
    },
    {
      icon: '🏊‍♂️',
      title: 'Luxury Amenities',
      description: 'Features include a clubhouse, infinity pool, gym, kids\' play area, landscaped gardens, and jogging tracks.'
    },
    {
      icon: '♻️',
      title: 'Eco-friendly design',
      description: 'Built with sustainable materials, solar energy, and rainwater harvesting to support a greener environment.'
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

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="ProjectGoa">
      {/* Hero Section */}
      <section className="ProjectGoa__hero">
        <div className="ProjectGoa__hero-overlay"></div>
        <img 
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800" 
          alt="The Elements Goa" 
          className="ProjectGoa__hero-image"
        />
        <div className="ProjectGoa__hero-content">
          <div className="ProjectGoa__hero-decorations">
            <span className="ProjectGoa__decoration ProjectGoa__decoration--left">◇</span>
            <span className="ProjectGoa__decoration ProjectGoa__decoration--right">◇</span>
          </div>
          <h1 className="ProjectGoa__title">The Elements</h1>
        </div>
      </section>

      {/* Info Section */}
      <section className="ProjectGoa__info">
        <div className="ProjectGoa__info-content">
          <h2 className="ProjectGoa__info-title">The Elements, Goa</h2>
          <p className="ProjectGoa__info-description">
            The Elements, A Resort-like development with a luxurious and scenic coastal setting, akin to the renowned Riviera destinations known for their beauty and upscale lifestyle. It combines the appeal of Goa's coastal charm with the allure of a prestigious, sought-after location.
          </p>
          <div className="ProjectGoa__info-details">
            <div className="ProjectGoa__info-item">
              <span className="ProjectGoa__info-icon">📍</span>
              <span>4th Floor, Incoospace M3M Urbana Premium, Sec - 67, Gurugram</span>
            </div>
            <div className="ProjectGoa__info-item">
              <span className="ProjectGoa__info-icon">🏢</span>
              <span>Residentials</span>
            </div>
            <div className="ProjectGoa__info-item">
              <span className="ProjectGoa__info-icon">🏖️</span>
              <span>20mins to nearest beach</span>
            </div>
            <div className="ProjectGoa__info-item">
              <span className="ProjectGoa__info-icon">✈️</span>
              <span>Mopa Airport - 25 Minutes</span>
            </div>
            <div className="ProjectGoa__info-badge">LIVE</div>
          </div>
        </div>
        <div className="ProjectGoa__info-image">
          <img 
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800" 
            alt="Project View"
            className="ProjectGoa__featured-image"
          />
          <button className="ProjectGoa__nav-button ProjectGoa__nav-button--next" onClick={nextImage}>›</button>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="ProjectGoa__amenities">
        <h2 className="ProjectGoa__section-title">AMENITIES</h2>
        <div className="ProjectGoa__amenities-grid">
          {amenities.map((amenity, index) => (
            <div key={index} className="ProjectGoa__amenity-item">
              <div className="ProjectGoa__amenity-icon">{amenity.icon}</div>
              <p className="ProjectGoa__amenity-name">{amenity.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="ProjectGoa__gallery">
        <h2 className="ProjectGoa__section-title">GALLERY</h2>
        <div className="ProjectGoa__gallery-grid">
          {galleryImages.map((img, index) => (
            <div key={index} className="ProjectGoa__gallery-item">
              <img src={img} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Key Features Section */}
      <section className="ProjectGoa__features">
        <h2 className="ProjectGoa__section-title">Key features at The Elements, Goa</h2>
        <p className="ProjectGoa__features-subtitle">Exceptional Amenities for Modern Living</p>
        <div className="ProjectGoa__features-grid">
          {keyFeatures.map((feature, index) => (
            <div key={index} className="ProjectGoa__feature-card">
              <div className="ProjectGoa__feature-icon">{feature.icon}</div>
              <h3 className="ProjectGoa__feature-title">{feature.title}</h3>
              <p className="ProjectGoa__feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="ProjectGoa__contact">
        <h2 className="ProjectGoa__section-title">GET IN TOUCH</h2>
        <div className="ProjectGoa__form">
          <div className="ProjectGoa__form-group">
            <label className="ProjectGoa__form-label">Full name *</label>
            <input 
              type="text" 
              name="fullName"
              className="ProjectGoa__form-input" 
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </div>
          <div className="ProjectGoa__form-group">
            <label className="ProjectGoa__form-label">Phone Number *</label>
            <div className="ProjectGoa__phone-input">
              <span className="ProjectGoa__phone-code">+91</span>
              <input 
                type="tel" 
                name="phone"
                className="ProjectGoa__form-input" 
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="ProjectGoa__form-group">
            <label className="ProjectGoa__form-label">Email</label>
            <input 
              type="email" 
              name="email"
              className="ProjectGoa__form-input"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="ProjectGoa__form-group">
            <label className="ProjectGoa__form-label">Enquiry for *</label>
            <select 
              name="enquiry"
              className="ProjectGoa__form-select"
              value={formData.enquiry}
              onChange={handleInputChange}
            >
              <option value="">Select a project</option>
              <option value="elements-goa">The Elements, Goa</option>
              <option value="general">General Enquiry</option>
            </select>
          </div>
          <div className="ProjectGoa__form-group">
            <label className="ProjectGoa__form-label">Select city *</label>
            <select 
              name="city"
              className="ProjectGoa__form-select"
              value={formData.city}
              onChange={handleInputChange}
            >
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Goa">Goa</option>
            </select>
          </div>
          <div className="ProjectGoa__form-checkbox">
            <input 
              type="checkbox" 
              name="agreed"
              id="privacy" 
              checked={formData.agreed}
              onChange={handleInputChange}
            />
            <label htmlFor="privacy">
              By checking this box, you agree to our <span className="ProjectGoa__form-link">Privacy Policy</span> and consent to be contacted with relevant updates.
            </label>
          </div>
          <button type="button" className="ProjectGoa__form-submit" onClick={handleSubmit}>SUBMIT</button>
        </div>
      </section>
    </div>
  );
};

export default ProjectGoa;