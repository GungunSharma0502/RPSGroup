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
    <div className="hero-slider">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
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