import React, { useState, useEffect } from 'react';
import '../css/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isResidentialOpen, setIsResidentialOpen] = useState(false);
  const [isCommercialOpen, setIsCommercialOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsProjectsOpen(false);
    setIsResidentialOpen(false);
    setIsCommercialOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/">RPS GROUP</Link>
        </div>

        {/* Hamburger Menu */}
        <div 
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Menu */}
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMobileMenu}>
              HOME
            </Link>
          </li>

          {/* About Us */}
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={closeMobileMenu}>
              ABOUT US
            </Link>
          </li>

          {/* Our Projects Dropdown */}
          <li className="nav-item dropdown">
            <span className="nav-link dropdown-toggle">
              OUR PROJECTS
              <span className="arrow">▼</span>
            </span>
            <div className="dropdown-menu">
              
              {/* Residential Section */}
              <div className="dropdown-section">
                <div className="section-header">
                  <span className="section-title">Residential</span>
                  <span className="section-arrow">▼</span>
                </div>
                <ul className="section-list">
                  <li><Link to="/rps-auria" onClick={closeMobileMenu}>RPS Auria</Link></li>
                  <li><Link to="/rps-savana" onClick={closeMobileMenu}>RPS Savana</Link></li>
                  <li><Link to="/rps-palm-drive" onClick={closeMobileMenu}>RPS Palm Drive</Link></li>
                  <li><Link to="/rps-palms" onClick={closeMobileMenu}>RPS Palms</Link></li>
                  <li><Link to="/rps-green-valley" onClick={closeMobileMenu}>RPS Green Valley</Link></li>
                  <li><Link to="/rps-Sargam" onClick={closeMobileMenu}>RPS Sargam Farmland Naugoan</Link></li>
                  <li><Link to="/the-elements-goa" onClick={closeMobileMenu}>The Elements, Goa</Link></li>
                  <li><Link to="/propex-city" onClick={closeMobileMenu}>PropexCity</Link></li>
                  
                   
                </ul>
              </div>

              {/* Commercial Section */}
              <div className="dropdown-section">
                <div className="section-header">
                  <span className="section-title">Commercial</span>
                  <span className="section-arrow">▼</span>
                </div>
                <ul className="section-list">
                  <li><Link to="/rps-12th-avenue" onClick={closeMobileMenu}>RPS 12th Avenue</Link></li>
                </ul>
              </div>

              {/* All Projects */}
              <div className="dropdown-section all-projects">
                <Link to="/all-projects" className="all-projects-link" onClick={closeMobileMenu}>
                  All Projects
                </Link>
              </div>

            </div>
          </li>

          <li className="nav-item">
            <Link to="/contact" className="nav-link contact-btn" onClick={closeMobileMenu}>
              CONTACT US
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;