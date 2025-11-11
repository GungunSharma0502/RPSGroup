import React, { useState } from 'react';
import '../css/footer.css';

const Footer = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-container">
            {/* Logo and Newsletter Section */}
            <div className="footer-section footer-newsletter">
              <div className="footer-logo">
                <img src="https://via.placeholder.com/120x50/ffffff/003d82?text=RPS+GROUP" alt="RPS Group" />
              </div>
              <div className="social-icons">
                <a href="#" className="social-icon" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-icon" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="social-icon" aria-label="YouTube">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
              <div className="newsletter-form">
                <div className="input-group">
                  <input 
                    type="email" 
                    placeholder="📧" 
                    className="newsletter-input"
                  />
                  <button className="subscribe-btn">SUBSCRIBE</button>
                </div>
              </div>
            </div>

            {/* About Us Section */}
            <div className="footer-section">
              <h3 className="footer-heading">ABOUT US</h3>
              <ul className="footer-links">
                <li><a href="/overview">Overview</a></li>
                <li><a href="/vision-mission">Vision & Mission</a></li>
                <li><a href="/our-leaders">Our Leaders</a></li>
                <li><a href="/media">Media</a></li>
                <li><a href="/awards">Awards</a></li>
                <li><a href="/events">Events</a></li>
                <li><a href="/blogs">Blogs</a></li>
              </ul>
            </div>

            {/* Our Projects Section */}
            <div className="footer-section">
              <h3 className="footer-heading">OUR PROJECTS</h3>
              <ul className="footer-links">
                <li><a href="/rps-12th-avenue">RPS 12th Avenue</a></li>
                <li><a href="/rps-auria">RPS Auria</a></li>
                <li><a href="/all-projects">All Projects</a></li>
              </ul>
              <h3 className="footer-heading career-heading">CAREER</h3>
              <ul className="footer-links">
                <li><a href="/work-with-us">Work With Us</a></li>
                <li><a href="/internship">Internship</a></li>
              </ul>
            </div>

            {/* Important Links Section */}
            <div className="footer-section">
              <h3 className="footer-heading">IMPORTANT LINKS</h3>
              <ul className="footer-links">
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/terms-conditions">Terms & Conditions</a></li>
                <li><a href="/disclaimer-policy">Disclaimer Policy</a></li>
              </ul>
            </div>

            {/* Location Section */}
            <div className="footer-section footer-location">
              <h3 className="footer-heading">LOCATION</h3>
              <p className="location-address">
                RPS Infrastructure Limited 1123, DLF<br />
                Tower B, Jasola, New Delhi –<br />
                110025
              </p>
              <div className="location-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.22496499999999!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sGreater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="150"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Greater Noida Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-container">
            <p className="copyright">Copyright © 2024 RPS Group | All Rights Reserved.</p>
            <p className="developed-by">Developed by</p>
          </div>
        </div>
      </footer>

      {/* Fixed Disclaimer Button */}
      <button 
        className="disclaimer-btn"
        onClick={() => setShowDisclaimer(true)}
      >
        Disclaimer
      </button>

      {/* Disclaimer Modal */}
      {showDisclaimer && (
        <div className="disclaimer-modal-overlay" onClick={() => setShowDisclaimer(false)}>
          <div className="disclaimer-modal" onClick={(e) => e.stopPropagation()}>
            <div className="disclaimer-header">
              <img src="https://via.placeholder.com/80x40/003d82/ffffff?text=RPS" alt="RPS Group" className="disclaimer-logo" />
              <h2>Disclaimer</h2>
              <button className="close-btn" onClick={() => setShowDisclaimer(false)}>×</button>
            </div>
            <div className="disclaimer-content">
              <p>Thank you for visiting www.rpsgroupindia.com.</p>
              
              <p>The aforesaid website is the only official website of RPS Infrastructure Limited. The visitors/ users of the website are advised not to rely upon any information stated on any other websites and/or rely on any representations or be misled by any unofficial website and/or contain Company's logo/brand name or representations in any manner.</p>
              
              <p>This website may contain other proprietary notices and copyright information, the terms of which must be observed and followed.</p>
              
              <p>Information may be changed or updated without notice. The Company may also make improvements and/or changes in the products and/or the programmes described in this information at any time without notice.</p>
              
              <p>By accessing the website, the viewer/user confirms that the information including brochures relating to real estate projects is for general information/promotional purposes only and that the Company will not make any booking/purchase in any project of the Company. Nothing on this website constitutes advertising, marketing, booking, selling or an offer for sale, or invitation to purchase a unit in any project by the Company.</p>
              
              <p>The present content on the website(s), regarding the project and in the related project brochures and other marketing material i.e. amenities, services, terms of sale and other relevant terms, are based on approved and sanctioned plans being strictly complied. The pictures, visuals, layouts, plans, specifications, dimensions, sizes, and other details indicated by the authorities. The visuals, pictures, images/perspective/images/videos of near by structures/landmarks/development/construction stage, are purely indicative, informative, and representational in nature and are purely used as an artistic impression.</p>
              
              <p>The particulars on the website mention details of the projects/developments undertaken by the Company including display of banners/posters of the project. The contents are being displayed only to provide information of the projects being developed and accordingly may not be fully in terms of the advertisement regulations under RERA Act and rules made thereunder and accordingly may not be fully in terms of the advertisement regulations under RERA Act and rules made thereunder. The viewers are requested to directly verify all details and aspects of any proposed booking/acquisition of units/premises, directly with our authorized personnel.</p>
              
              <div className="disclaimer-footer">
                <button className="agree-btn" onClick={() => setShowDisclaimer(false)}>
                  I Agree
                </button>
                <div className="disclaimer-links">
                  <a href="#" onClick={(e) => e.preventDefault()}>Opt-Out Preferences</a>
                  <a href="#" onClick={(e) => e.preventDefault()}>RCMB</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;