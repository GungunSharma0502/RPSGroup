import React, { useState, useEffect } from 'react';
import '../css/HeroSlider.css';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=800&fit=crop',
      title: 'APPROX 100 ACRES',
      subtitle: 'OF TOWNSHIPS IN',
      location: 'RPS CITY SECTOR-88, FARIDABAD',
      highlight: 'MORE THAN 2500 FAMILIES',
      description: 'RESIDE IN THE VICINITY'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=800&fit=crop',
      title: "WORLD'S MOST",
      subtitle: 'PRESTIGIOUS',
      location: 'BUSINESS ADDRESS',
      highlight: 'A UNIQUE BLEND OF OFFICE & MODERN RETAIL',
      description: ''
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=800&fit=crop',
      title: 'THE NEXT',
      subtitle: 'BIG THING',
      location: 'IN RETAIL',
      highlight: 'RETAIL | F&B | ENTERTAINMENT',
      description: 'COMING SOON',
      logo: '12TH AVENUE'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=800&fit=crop',
      title: 'DISCOVER AN',
      subtitle: 'UNPARALLEL',
      location: 'LIFESTYLE',
      highlight: 'ULTRA LUXURIOUS 3 & 5 BHK',
      description: ''
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="hero-slider">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-overlay"></div>
          <div className="slide-content">
            <div className="text-container">
              <h1 className="main-title">{slide.title}</h1>
              <h1 className="main-title">{slide.subtitle}</h1>
              {slide.location && <h1 className="main-title">{slide.location}</h1>}
              {slide.logo && (
                <div className="logo-text">
                  <span className="logo-number">12</span>
                  <span className="logo-th">TH</span>
                  <span className="logo-avenue">AVENUE</span>
                </div>
              )}
              <div className="highlight-box">
                <p className="highlight-text">{slide.highlight}</p>
              </div>
              {slide.description && <p className="description">{slide.description}</p>}
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button className="nav-arrow prev" onClick={prevSlide}>
        ‹
      </button>
      <button className="nav-arrow next" onClick={nextSlide}>
        ›
      </button>

      {/* Dots Navigation */}
      <div className="dots-container">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;