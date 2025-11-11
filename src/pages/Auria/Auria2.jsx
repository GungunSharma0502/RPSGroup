import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import './auria2.css';

const Auria2 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    interest: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.phone) {
      alert('Thank you for your interest! We will contact you soon.');
      setFormData({ name: '', email: '', phone: '', city: '', interest: '' });
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div className="auria2-container">
      {/* Contact Section */}
      <div className="auria2-contact-section">
        <div className="auria2-max-width">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <div className="auria2-map-container">
              <div>
                <p style={{ color: '#6b7280' }}>RPS AURIA Location Map</p>
              </div>
              <div className="auria2-map-info">
                <h4>RPS AURIA</h4>
                <p>27, Sector 88, Bisauli Colony, RPS Colony, Faridabad, Haryana 121014</p>
                <p style={{ color: '#d97706', marginTop: '0.5rem' }}>3.3 ★★★★★ · 103 reviews</p>
              </div>
            </div>

            <div className="auria2-contact-form">
              <h2>GET IN TOUCH !</h2>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="NAME"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="auria2-input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL ADDRESS"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="auria2-input"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="PHONE NUMBER"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="auria2-input"
                />
                <input
                  type="text"
                  name="city"
                  placeholder="CITY"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="auria2-input"
                />
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  className="auria2-select"
                >
                  <option value="">INTERESTED</option>
                  <option value="5bhk">5 BHK</option>
                  <option value="3bhk">3 BHK</option>
                  <option value="sitevisit">Site Visit</option>
                </select>
                <button
                  onClick={handleSubmit}
                  className="auria2-submit"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>

          {/* Banking Partners */}
          <div className="auria2-banking-section">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
              <div className="auria2-dots">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <h2>OUR BANKING PARTNERS</h2>
            </div>
            <div className="auria2-banks-grid">
              {['PNB', 'ICICI Bank', 'SBI', 'Kotak', 'AXIS BANK'].map((bank, index) => (
                <div key={index} className="auria2-bank-logo">
                  <p>{bank}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="auria2-footer">
        <div className="auria2-max-width">
          <p>© 2024 RPS Auria. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Auria2;