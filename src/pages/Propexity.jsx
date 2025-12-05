import React from 'react';
import '../css/ProjectsCss/propexity.css';

// Import images
import gallery from '../assets/propex/gallery.png';
import gallery2 from '../assets/propex/gallery2.png';
import garden from '../assets/propex/garden.png';
import herosectionRight from '../assets/propex/herosection_right.png';
import herosectionLeft from '../assets/propex/herosection-left.png';
import layout from '../assets/propex/layout.png';

const Propexity = () => {
  return (
    <div className="propexity-container">
      {/* Hero Section */}
      <section id="home" className="propexity-hero">
        <div className="propexity-hero-content">
          <h1 className="propexity-hero-title">PROPEX CITY</h1>
          <h2 className="propexity-hero-subtitle">Where Dreams Meet Foundations</h2>
          <p className="propexity-hero-description">
            An Exclusive Community of Premium Plots & Signature Villas
          </p>
          <p className="propexity-hero-text">
            Nestled in the serene surroundings of Palwal, Green Bunch RUDROM Group invites you to discover 
            a life where nature, elegance, and modern comfort come together. Our thoughtfully planned 
            residential community is not just about living—it's about living well. Whether you're a 
            growing family, a working professional, or someone looking for a peaceful place to retire, 
            Green Bunch RUDROM Group is your destination for quality living.
          </p>
          <p className="propexity-tagline">Live the lifestyle you've always wanted</p>
          <button className="propexity-cta-button">Explore Now</button>
        </div>
        <div className="propexity-hero-image">
          <img src={herosectionRight} alt="Modern Villa Entrance" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="propexity-about">
        <div className="propexity-about-image">
          <img src={herosectionLeft} alt="Villa Exterior View" />
        </div>
        <div className="propexity-about-content">
          <h2 className="propexity-section-title">Inspired by Palwal, delivering quality of life</h2>
          <p className="propexity-about-intro">
            At Green Bunch RUDROM Group, We intend to create a community worthy of our city—one that sets 
            a new benchmark for how community life needs to be fostered.
          </p>
          <ul className="propexity-features-list">
            <li>
              <span className="propexity-icon">🏛️</span>
              <span>Community centric design</span>
            </li>
            <li>
              <span className="propexity-icon">🏘️</span>
              <span>Smart living with uptown neighbourhood</span>
            </li>
            <li>
              <span className="propexity-icon">🔒</span>
              <span>Gated & secure surrounding</span>
            </li>
            <li>
              <span className="propexity-icon">🌳</span>
              <span>Green and open spaces</span>
            </li>
          </ul>
          <p className="propexity-motto">It's not all Cement & Steel.</p>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="propexity-location">
        <div className="propexity-location-header">
          <h2 className="propexity-section-title">Seamless connectivity</h2>
          <h3 className="propexity-subsection-title">Discover the prime location of Propex City</h3>
        </div>
        
        <div className="propexity-location-content">
          <div className="propexity-location-map">
            <img src={gallery} alt="Location Map" />
          </div>
          
          <div className="propexity-location-details">
            <div className="propexity-location-distances">
              <h4>Nearby Cities</h4>
              <div className="propexity-distance-grid">
                <div className="propexity-distance-item">
                  <span className="propexity-place">NEW DELHI</span>
                  <span className="propexity-km">63 KM</span>
                </div>
                <div className="propexity-distance-item">
                  <span className="propexity-place">GURUGRAM</span>
                  <span className="propexity-km">56 KM</span>
                </div>
                <div className="propexity-distance-item">
                  <span className="propexity-place">FARIDABAD</span>
                  <span className="propexity-km">38 KM</span>
                </div>
                <div className="propexity-distance-item">
                  <span className="propexity-place">SOHNA</span>
                  <span className="propexity-km">31 KM</span>
                </div>
                <div className="propexity-distance-item">
                  <span className="propexity-place">JEWAR AIRPORT</span>
                  <span className="propexity-km">38 KM</span>
                </div>
                <div className="propexity-distance-item">
                  <span className="propexity-place">FIROZPUR JHIRKA</span>
                  <span className="propexity-km">81 KM</span>
                </div>
                <div className="propexity-distance-item">
                  <span className="propexity-place">BALLABGARH</span>
                  <span className="propexity-km">47 KM</span>
                </div>
                <div className="propexity-distance-item">
                  <span className="propexity-place">GHAZIABAD</span>
                  <span className="propexity-km">93 KM</span>
                </div>
              </div>
            </div>

            <div className="propexity-location-advantage">
              <h4>Location Advantage</h4>
              <p>
                Location plays a vital role in choosing a home. At Propex city, you enjoy 
                the perfect balance between urban convenience and natural tranquillity. 
                Our society is strategically situated to ensure you're never far from what 
                matters—be it work, education, healthcare, or leisure.
              </p>
              
              <div className="propexity-connectivity-list">
                <div className="propexity-connectivity-item">
                  <span className="propexity-conn-name">DELHI MUMBAI EXPRESSWAY</span>
                  <span className="propexity-conn-time">20 Min</span>
                </div>
                <div className="propexity-connectivity-item">
                  <span className="propexity-conn-name">KMP/KGP EXPRESSWAY</span>
                  <span className="propexity-conn-time">10 Min</span>
                </div>
                <div className="propexity-connectivity-item">
                  <span className="propexity-conn-name">SOHNA INTERNATIONAL AIRPORT</span>
                  <span className="propexity-conn-time">35 Min</span>
                </div>
                <div className="propexity-connectivity-item">
                  <span className="propexity-conn-name">RAJA NAHAR SINGH (BALLABGARH) METRO STATION</span>
                  <span className="propexity-conn-time">30 Min</span>
                </div>
                <div className="propexity-connectivity-item">
                  <span className="propexity-conn-name">JAMAL RAILWAY POINT</span>
                  <span className="propexity-conn-time">3 Min</span>
                </div>
                <div className="propexity-connectivity-item">
                  <span className="propexity-conn-name">PALWAL BUS STAND</span>
                  <span className="propexity-conn-time">5 Min</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Address Section */}
      <section className="propexity-address">
        <h2 className="propexity-section-title">An Address You'll Be Proud Of</h2>
        <h3 className="propexity-subsection-title">A Perfect Blend of Architecture, Amenities & Nature</h3>
        <p className="propexity-address-description">
          A Neo Premium residential society developed by Propex Realty Services Pvt. Ltd & CBG 
          Realtech LLP under the brand name Green Bunch RUDROM Group, lush, beautifully landscaped land. 
          With a vision to provide peaceful yet connected living, this gated community features a 
          mix of Plots & Independent Villas designed to meet your needs and exceed your expectations.
        </p>
        <div className="propexity-address-image">
          <img src={gallery2} alt="Community Street View" />
        </div>
      </section>

      {/* Master Plan Section */}
      <section className="propexity-masterplan">
        <h2 className="propexity-section-title">Master Plan</h2>
        <div className="propexity-masterplan-image">
          <img src={layout} alt="Site Layout Plan" />
        </div>
        <div className="propexity-phase-info">
          <div className="propexity-phase-card">
            <h4>Phase - 1</h4>
            <p>PROPEX CITY</p>
            <p>Premium Residential Plots</p>
          </div>
          <div className="propexity-phase-card">
            <h4>Phase - 2</h4>
            <p>PROPEX CITY 2</p>
            <p>Signature Villas</p>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="propexity-amenities">
        <h2 className="propexity-section-title">Amenities</h2>
        <h3 className="propexity-subsection-title">Amenities That Elevate Everyday Living</h3>
        
        <div className="propexity-amenities-grid">
          <div className="propexity-amenity-card">
            <div className="propexity-amenity-image">
              <div className="propexity-placeholder-small">🏛️</div>
            </div>
            <p>Gated Community</p>
          </div>
          <div className="propexity-amenity-card">
            <div className="propexity-amenity-image">
              <div className="propexity-placeholder-small">🚴</div>
            </div>
            <p>Cycling Track</p>
          </div>
          <div className="propexity-amenity-card">
            <div className="propexity-amenity-image">
              <div className="propexity-placeholder-small">🅿️</div>
            </div>
            <p>Ample Parking</p>
          </div>
          <div className="propexity-amenity-card">
            <div className="propexity-amenity-image">
              <div className="propexity-placeholder-small">🛡️</div>
            </div>
            <p>24/7 Security</p>
          </div>
          <div className="propexity-amenity-card">
            <div className="propexity-amenity-image">
              <div className="propexity-placeholder-small">🏃</div>
            </div>
            <p>Jogging Track</p>
          </div>
          <div className="propexity-amenity-card">
            <div className="propexity-amenity-image">
              <div className="propexity-placeholder-small">🌺</div>
            </div>
            <p>Landscaped Gardens</p>
          </div>
          <div className="propexity-amenity-card">
            <div className="propexity-amenity-image">
              <div className="propexity-placeholder-small">📹</div>
            </div>
            <p>CCTV Surveillance</p>
          </div>
          <div className="propexity-amenity-card">
            <div className="propexity-amenity-image">
              <div className="propexity-placeholder-small">🧘</div>
            </div>
            <p>Yoga & Meditation</p>
          </div>
          <div className="propexity-amenity-card">
            <div className="propexity-amenity-image">
              <div className="propexity-placeholder-small">🏢</div>
            </div>
            <p>Community Center</p>
          </div>
        </div>

        <div className="propexity-amenities-list">
          <ul>
            <li>Badminton courts</li>
            <li>Ample sitting spaces surrounded by native plants</li>
            <li>Parks & Open Gym</li>
            <li>Fountains</li>
            <li>Children's Play Area</li>
            <li>Yoga & Meditation Zone</li>
            <li>Jogging / Walking Track</li>
            <li>24x7 Security & CCTV</li>
            <li>Senior Citizens Zone</li>
            <li>Landscaped Gardens & Green Zones</li>
          </ul>
        </div>

        <div className="propexity-amenity-showcase">
          <div className="propexity-showcase-image">
            <img src={garden} alt="Park Area" />
          </div>
          <div className="propexity-showcase-image">
            <img src={gallery} alt="Community Entrance" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="propexity-contact">
        <div className="propexity-contact-image">
          <img src={herosectionLeft} alt="Villa Front View" />
        </div>
        <div className="propexity-contact-info">
          <div className="propexity-logo-large">
            <h2>GREEN BUNCH RUDROM</h2>
            <p className="propexity-logo-tagline">GROUP</p>
          </div>
          
          <div className="propexity-office-details">
            <h4>Head Office</h4>
            <p>Green Bunch 12/G Milestone, Main Mathura Road, Podier G, Sector 27C, Faridabad, Haryana-121001, India</p>
            
            <h4>Branch Office</h4>
            <p>4th Floor, M3m Urbana Premium, Golf Course Ext Rd, Premium, Sector 67, Gurugram, Haryana-122002, India</p>
            
            <h4>Site Office</h4>
            <p>87, Omaxe City, Palwal, Haryana-121102, India</p>
          </div>

          <div className="propexity-contact-details">
            <p><strong>Email:</strong> info@greenbunchrudrom.com</p>
            <p><strong>Website:</strong> www.greenbunchrudrom.com</p>
            <p><strong>Contact:</strong> 93-9477110000</p>
          </div>

          <p className="propexity-registration">
            Registration No.: HRERA-PKL-PWL-709-2025
          </p>
        </div>
      </section>

    
    </div>
  );
};


export default Propexity;