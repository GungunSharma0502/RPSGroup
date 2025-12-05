import React from 'react';
import '../css/Overview.css';

const Overview = () => {
  return (
    <div className="Overview">
      <section className="Overview__hero">
        {/* Background Decorative Elements */}
        <div className="Overview__bg-circle Overview__bg-circle--1"></div>
        <div className="Overview__bg-circle Overview__bg-circle--2"></div>
        <div className="Overview__bg-circle Overview__bg-circle--3"></div>

        <div className="Overview__content-grid">
          {/* Left Content */}
          <div className="Overview__left-content">
            <div className="Overview__header-section">
              <div className="Overview__dot-grid">
                {[...Array(9)].map((_, i) => (
                  <span key={i} className="Overview__dot" style={{ animationDelay: `${i * 0.1}s` }}></span>
                ))}
              </div>
              <div>
                <h1 className="Overview__main-title">OVERVIEW</h1>
              </div>
            </div>

            <h2 className="Overview__subtitle">
              PIONEERING EXCELLENCE IN <span className="Overview__highlight">REAL ESTATE</span> SINCE 2005
            </h2>

            <div className="Overview__text-content">
              <div className="Overview__paragraph">
                <div className="Overview__quote-icon">"</div>
                <p className="Overview__text">
                  Since its establishment, Green Bunch Group has consistently stood as a pioneering force within its industry, 
                  demonstrating thought leadership with extensive experience and deep expertise in the field of real estate.
                </p>
              </div>

              <div className="Overview__paragraph">
                <p className="Overview__text">
                  We embrace innovation in design as a means to create spaces that not only meets evolving customers 
                  desires but also enrich lives of many. By combining our expertise with visionary thinking, we ensure 
                  that our projects are at the forefront of contemporary designs, setting new benchmarks for excellence 
                  in real estate industry.
                </p>
              </div>

              <div className="Overview__paragraph">
                <p className="Overview__text">
                  With an impressive portfolio spanning over almost two decade, Green Bunch Group has successfully developed 
                  and delivered more than 10 million square feet of commercial and residential spaces.
                </p>
              </div>

              <div className="Overview__feature-grid">
                <div className="Overview__feature-card">
                  <div className="Overview__feature-icon">✦</div>
                  <div>
                    <h4 className="Overview__feature-title">Premium Quality</h4>
                    <p className="Overview__feature-text">World-class construction standards</p>
                  </div>
                </div>
                <div className="Overview__feature-card">
                  <div className="Overview__feature-icon">★</div>
                  <div>
                    <h4 className="Overview__feature-title">Timely Delivery</h4>
                    <p className="Overview__feature-text">Committed to our promises</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="Overview__right-content">
            <div className="Overview__image-wrapper">
              <div className="Overview__image-glow"></div>
              <img 
                src="https://rpsgroupindia.com/wp-content/uploads/2023/05/nite-copy-1024x768.jpg" 
                alt="Green Bunch Group Building" 
                className="Overview__image"
              />
              <div className="Overview__image-overlay">
                <div className="Overview__overlay-content">
                  <h3 className="Overview__overlay-title">AWARD WINNING</h3>
                  <p className="Overview__overlay-text">Architecture & Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;