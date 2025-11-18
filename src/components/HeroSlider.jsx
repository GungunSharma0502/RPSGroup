import React, { useState, useEffect } from 'react';
import '../css/HeroSlider.css';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: 'https://rpsgroupindia.com/wp-content/uploads/2025/01/1562-copy.jpg',
    },
    {
      id: 2,
      image: 'https://rpsgroupindia.com/wp-content/uploads/2023/12/web-banner-1.jpg',
    },
    {
      id: 3,
      image: 'https://rpsgroupindia.com/wp-content/uploads/2023/06/web-banner-12th-avenue-1.jpg',
    },
    {
      id: 4,
      image: 'https://rpsgroupindia.com/wp-content/uploads/2023/06/Auria-1-1.jpg',
    },
    {
      id: 5,
      image: 'https://rpsgroupindia.com/wp-content/uploads/2024/07/web-banner-1-1.webp',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

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
    <div className="heroslideerrrrrrr-main-container">
      {/* Blurred Background Layer */}
      <div 
        className="heroslideerrrrrrr-background"
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      ></div>

      {/* Content Wrapper */}
      <div className="heroslideerrrrrrr-content-wrapper">
        <div className="heroslideerrrrrrr-inner-container">
          
          {/* Slides */}
          <div className="heroslideerrrrrrr-slides-container">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`heroslideerrrrrrr-slide ${index === currentSlide ? 'heroslideerrrrrrr-slide-active' : ''}`}
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                {/* Floating particles */}
                <div className="heroslideerrrrrrr-particle"></div>
                <div className="heroslideerrrrrrr-particle"></div>
                <div className="heroslideerrrrrrr-particle"></div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button className="heroslideerrrrrrr-nav-arrow heroslideerrrrrrr-nav-prev" onClick={prevSlide}>
            ‹
          </button>
          <button className="heroslideerrrrrrr-nav-arrow heroslideerrrrrrr-nav-next" onClick={nextSlide}>
            ›
          </button>

          {/* Slide Counter */}
          <div className="heroslideerrrrrrr-counter">
            <span className="heroslideerrrrrrr-counter-text">
              {currentSlide + 1} / {slides.length}
            </span>
          </div>

          {/* Dots Navigation */}
          <div className="heroslideerrrrrrr-dots-container">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`heroslideerrrrrrr-dot ${index === currentSlide ? 'heroslideerrrrrrr-dot-active' : ''}`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;