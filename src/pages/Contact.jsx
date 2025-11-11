import React from 'react';
import '../css/Contact.css';
import Map from './Map';

const Contact = () => {
  const contactSections = [
    {
      id: 1,
      title: "SALES ENQUIRY",
      phone: "+91 9010 444 000",
      email: "info@rpsgroupindia.com"
    },
    {
      id: 2,
      title: "MEDIA ENQUIRY",
      phone: "+91 7419 519 1225",
      email: "mocom@rpsgroupindia.com"
    },
    {
      id: 3,
      title: "CUSTOMER CARE",
      phone: "+91 9 4044 4040",
      email: "customercare@rpsgroupindia.com"
    },
    {
      id: 4,
      title: "HR",
      phone: "",
      email: "hr@rpsgroupindia.com"
    }
  ];

  return (
    <div className="contact-wrapper">
      <div className="contact-header">
        <h1 className="contact-heading">CONTACT US</h1>
      </div>
      
      <div className="contact-container">
        <div className="contact-grid">
          {contactSections.map((section) => (
            <div key={section.id} className="contact-card">
              <h3 className="contact-title">{section.title}</h3>
              <div className="contact-details">
                {section.phone && (
                  <div className="contact-item">
                    <svg className="contact-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M14.5 11.28V13.28C14.5 13.58 14.28 13.85 13.98 13.92C13.68 13.99 13.38 13.85 13.2 13.58L11.8 11.58C11.62 11.32 11.32 11.18 11.02 11.25C10.72 11.32 10.5 11.58 10.5 11.88V13.5C10.5 14.33 9.83 15 9 15H3C2.17 15 1.5 14.33 1.5 13.5V2.5C1.5 1.67 2.17 1 3 1H9C9.83 1 10.5 1.67 10.5 2.5V4.12C10.5 4.42 10.72 4.68 11.02 4.75C11.32 4.82 11.62 4.68 11.8 4.42L13.2 2.42C13.38 2.15 13.68 2.01 13.98 2.08C14.28 2.15 14.5 2.42 14.5 2.72V4.72" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <a href={`tel:${section.phone.replace(/\s/g, '')}`} className="contact-link">
                      {section.phone}
                    </a>
                  </div>
                )}
                <div className="contact-item">
                  <svg className="contact-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2.67 4.67L7.29 8.27C7.72 8.58 8.28 8.58 8.71 8.27L13.33 4.67M3.33 12H12.67C13.4 12 14 11.4 14 10.67V5.33C14 4.6 13.4 4 12.67 4H3.33C2.6 4 2 4.6 2 5.33V10.67C2 11.4 2.6 12 3.33 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <a href={`mailto:${section.email}`} className="contact-link">
                    {section.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Map/>
    </div>
  );
};

export default Contact;