import React, { useState } from 'react';
import '../css/ProjectsCss/palmDrive.css';
import Map from './Map';

const PalmDrive = () => {
  const [activeTab, setActiveTab] = useState('ground');
  const [activeLocation, setActiveLocation] = useState(null);

  const locationData = {
    auria: {
      title: "GREEN BUNCH AURIA",
      description: "Experience luxury living at its finest with Green Bunch Auria, the upcoming residential masterpiece. These exquisite apartments redefine elegance and comfort, offering a haven of tranquility in a prime location. With meticulous craftsmanship and top-notch amenities, Green Bunch Auria sets a new standard for upscale living."
    },
    savana: {
      title: "GREEN BUNCH SAVANA",
      description: "Experience the epitome of residential excellence at Green Bunch Savana, a completed apartment complex that has been delighting residents for years. Nestled in a prime location, these residential apartments offer a harmonious blend of comfort, convenience, and style. With its exceptional amenities and well-designed living spaces, Green Bunch Savana is the perfect place to call home."
    },
    palms: {
      title: "GREEN BUNCH PALMS",
      description: "Discover the timeless charm of Green Bunch Palms, a completed residential apartment complex that has stood the test of time. Offering a serene living environment, these apartments have been providing residents with a comfortable and luxurious lifestyle for years. With its impeccable design and array of amenities, Green Bunch Palms continues to be a sought-after address for those seeking quality living spaces."
    },
    central: {
      title: "GREEN BUNCH CENTRAL",
      description: "Experience the ultimate in recreational luxury at Green Bunch Central, where the completed club has been catering to members for years. This exquisite facility offers a wide range of amenities, including state-of-the-art fitness centers, swimming pools, and leisure activities. Whether you seek relaxation or active pursuits, Green Bunch Central provides the perfect setting for indulging in a vibrant and fulfilling lifestyle."
    },
    palmDrive: {
      title: "GREEN BUNCH PALM DRIVE",
      description: "Current project location - Green Bunch City, Sector 88, Faridabad, HR"
    },
    hospital: {
      title: "AMRITA HOSPITAL",
      description: "Leading healthcare facility in the vicinity, providing world-class medical services."
    }
  };

  return (
    <div className="palmDrive">
      {/* Hero Section */}
      <section className="palmDrive__hero">
        <div className="palmDrive__heroOverlay">
          <div className="palmDrive__heroContent">
            <p className="palmDrive__heroCode">HRERA-PKL-FBD-116-2019</p>
            <h1 className="palmDrive__heroTitle">GREEN BUNCH PALM DRIVE</h1>
            <p className="palmDrive__heroLocation">GREEN BUNCH CITY, SECTOR 88, FARIDABAD, HR</p>
            <p className="palmDrive__heroSubtitle">LOW RISE FLOOR (G+3)</p>
            <p className="palmDrive__heroConfig">2 BHK & 3 BHK</p>
            <button className="palmDrive__heroButton">VIEW MORE</button>
          </div>
          <div className="palmDrive__heroImages">
            <div className="palmDrive__heroImageCard">
              <div className="palmDrive__heroImageWrapper palmDrive__heroImageWrapper--park"></div>
              <p className="palmDrive__heroImageLabel">Park View</p>
            </div>
            <div className="palmDrive__heroImageCard">
              <div className="palmDrive__heroImageWrapper palmDrive__heroImageWrapper--gate"></div>
              <p className="palmDrive__heroImageLabel">Entrance Gate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="palmDrive__overview">
        <div className="palmDrive__container">
          <div className="palmDrive__overviewGrid">
            <div className="palmDrive__overviewText">
              <h2 className="palmDrive__sectionTitle">PROJECT OVERVIEW</h2>
              <p className="palmDrive__description">
                Introducing Palm Drive, the latest illustrious project by the renowned Green Bunch Group, situated in the thriving Sector-88 of Faridabad. This development epitomizes the excellence that the developers are known for in the infrastructure industry, characterized by their unwavering commitment to world-class quality and ethical practices.
              </p>
              <p className="palmDrive__description">
                Palm Drive offers an array of meticulously designed apartments, including 1BHK and 2BHK configurations, with each apartment ranging from 630 Sq. Ft. to 720 Sq. Ft. Promising an exceptional living experience for all who call Palm Drive home.
              </p>
              
              <div className="palmDrive__specs">
                <div className="palmDrive__specItem">
                  <span className="palmDrive__specLabel">LOCATION</span>
                  <span className="palmDrive__specValue">Green Bunch City, Sec-88, Faridabad</span>
                </div>
                <div className="palmDrive__specItem">
                  <span className="palmDrive__specLabel">TYPE</span>
                  <span className="palmDrive__specValue">Residential</span>
                </div>
                <div className="palmDrive__specItem">
                  <span className="palmDrive__specLabel">TOTAL AREA</span>
                  <span className="palmDrive__specValue">5.49 Acres</span>
                </div>
                <div className="palmDrive__specItem">
                  <span className="palmDrive__specLabel">TOTAL UNITS</span>
                  <span className="palmDrive__specValue">2800</span>
                </div>
              </div>
            </div>
            <div className="palmDrive__overviewImage">
              <div className="palmDrive__imageBlock palmDrive__imageBlock--building"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Low Rise Floors */}
      <section className="palmDrive__lowRise">
        <div className="palmDrive__container">
          <div className="palmDrive__lowRiseGrid">
            <div className="palmDrive__lowRiseImage">
              <div className="palmDrive__imageBlock palmDrive__imageBlock--aerial"></div>
            </div>
            <div className="palmDrive__lowRiseContent">
              <p className="palmDrive__badge">GROUP HOUSING SOCIETY</p>
              <h2 className="palmDrive__sectionTitle">LOW RISE FLOORS</h2>
              <p className="palmDrive__description">
                This residential apartment is tailored for individuals aspiring to experience a life of opulence and comfort. The complex is thoughtfully designed and will boast an impressive array of amenities, including high-speed elevators, a 24-hour security system, a fully-equipped gymnasium, ample car parking, uninterrupted 24-hour water and power supply, beautifully landscaped gardens, and much more.
              </p>
              <div className="palmDrive__lowRiseImageSmall">
                <div className="palmDrive__imageBlock palmDrive__imageBlock--entrance"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Layout Section */}
      <section className="palmDrive__layout">
        <div className="palmDrive__container">
          <h2 className="palmDrive__sectionTitle">LAYOUT</h2>
          
          <div className="palmDrive__tabs">
            <button 
              className={`palmDrive__tab ${activeTab === 'ground' ? 'palmDrive__tab--active' : ''}`}
              onClick={() => setActiveTab('ground')}
            >
              GROUND FLOOR
            </button>
            <button 
              className={`palmDrive__tab ${activeTab === 'first' ? 'palmDrive__tab--active' : ''}`}
              onClick={() => setActiveTab('first')}
            >
              1ST & 2ND FLOOR
            </button>
            <button 
              className={`palmDrive__tab ${activeTab === 'thirdA' ? 'palmDrive__tab--active' : ''}`}
              onClick={() => setActiveTab('thirdA')}
            >
              3RD FLOOR - TYPE A
            </button>
            <button 
              className={`palmDrive__tab ${activeTab === 'thirdB' ? 'palmDrive__tab--active' : ''}`}
              onClick={() => setActiveTab('thirdB')}
            >
              3RD FLOOR - TYPE B
            </button>
          </div>

          <div className="palmDrive__layoutContent">
            <div className="palmDrive__layoutDetails">
              <h3 className="palmDrive__layoutTitle">GROUND FLOOR</h3>
              
              <div className="palmDrive__layoutSpec">
                <span className="palmDrive__layoutLabel">Location</span>
                <span className="palmDrive__layoutValue">Green Bunch City, Sec-88, FBD</span>
              </div>
              <div className="palmDrive__layoutSpec">
                <span className="palmDrive__layoutLabel">Type</span>
                <span className="palmDrive__layoutValue">Residential</span>
              </div>
              <div className="palmDrive__layoutSpec">
                <span className="palmDrive__layoutLabel">Carpet Area</span>
                <span className="palmDrive__layoutValue">....</span>
              </div>
              <div className="palmDrive__layoutSpec">
                <span className="palmDrive__layoutLabel">Built Up Area</span>
                <span className="palmDrive__layoutValue">....</span>
              </div>
              <div className="palmDrive__layoutSpec">
                <span className="palmDrive__layoutLabel">Super Area</span>
                <span className="palmDrive__layoutValue">....</span>
              </div>
            </div>
            <div className="palmDrive__layoutPlan">
              <div className="palmDrive__imageBlock palmDrive__imageBlock--floorPlan"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="palmDrive__locationMap">
        <div className="palmDrive__container">
          <h2 className="palmDrive__sectionTitle">LOCATION MAP</h2>
          
          <div className="palmDrive__mapGrid">
            <div className="palmDrive__locationList">
              <div className="palmDrive__accordion">
                <div className="palmDrive__accordionItem">
                  <button 
                    className={`palmDrive__accordionHeader ${activeLocation === 'auria' ? 'palmDrive__accordionHeader--active' : ''}`}
                    onClick={() => setActiveLocation(activeLocation === 'auria' ? null : 'auria')}
                  >
                    <span>GREEN BUNCH AURIA</span>
                    <span className="palmDrive__accordionIcon">{activeLocation === 'auria' ? '−' : '+'}</span>
                  </button>
                  {activeLocation === 'auria' && (
                    <div className="palmDrive__accordionContent">
                      <p>{locationData.auria.description}</p>
                    </div>
                  )}
                </div>

                <div className="palmDrive__accordionItem">
                  <button 
                    className={`palmDrive__accordionHeader ${activeLocation === 'savana' ? 'palmDrive__accordionHeader--active' : ''}`}
                    onClick={() => setActiveLocation(activeLocation === 'savana' ? null : 'savana')}
                  >
                    <span>GREEN BUNCH SAVANA</span>
                    <span className="palmDrive__accordionIcon">{activeLocation === 'savana' ? '−' : '+'}</span>
                  </button>
                  {activeLocation === 'savana' && (
                    <div className="palmDrive__accordionContent">
                      <p>{locationData.savana.description}</p>
                    </div>
                  )}
                </div>

                <div className="palmDrive__accordionItem">
                  <button 
                    className={`palmDrive__accordionHeader ${activeLocation === 'palms' ? 'palmDrive__accordionHeader--active' : ''}`}
                    onClick={() => setActiveLocation(activeLocation === 'palms' ? null : 'palms')}
                  >
                    <span>GREEN BUNCH PALMS</span>
                    <span className="palmDrive__accordionIcon">{activeLocation === 'palms' ? '−' : '+'}</span>
                  </button>
                  {activeLocation === 'palms' && (
                    <div className="palmDrive__accordionContent">
                      <p>{locationData.palms.description}</p>
                    </div>
                  )}
                </div>

                <div className="palmDrive__accordionItem">
                  <button 
                    className={`palmDrive__accordionHeader ${activeLocation === 'central' ? 'palmDrive__accordionHeader--active' : ''}`}
                    onClick={() => setActiveLocation(activeLocation === 'central' ? null : 'central')}
                  >
                    <span>GREEN BUNCH CENTRAL</span>
                    <span className="palmDrive__accordionIcon">{activeLocation === 'central' ? '−' : '+'}</span>
                  </button>
                  {activeLocation === 'central' && (
                    <div className="palmDrive__accordionContent">
                      <p>{locationData.central.description}</p>
                    </div>
                  )}
                </div>

                <div className="palmDrive__accordionItem">
                  <button 
                    className={`palmDrive__accordionHeader ${activeLocation === 'palmDrive' ? 'palmDrive__accordionHeader--active' : ''}`}
                    onClick={() => setActiveLocation(activeLocation === 'palmDrive' ? null : 'palmDrive')}
                  >
                    <span>GREEN BUNCH PALM DRIVE</span>
                    <span className="palmDrive__accordionIcon">{activeLocation === 'palmDrive' ? '−' : '+'}</span>
                  </button>
                  {activeLocation === 'palmDrive' && (
                    <div className="palmDrive__accordionContent">
                      <p>{locationData.palmDrive.description}</p>
                    </div>
                  )}
                </div>

                <div className="palmDrive__accordionItem">
                  <button 
                    className={`palmDrive__accordionHeader ${activeLocation === 'hospital' ? 'palmDrive__accordionHeader--active' : ''}`}
                    onClick={() => setActiveLocation(activeLocation === 'hospital' ? null : 'hospital')}
                  >
                    <span>AMRITA HOSPITAL</span>
                    <span className="palmDrive__accordionIcon">{activeLocation === 'hospital' ? '−' : '+'}</span>
                  </button>
                  {activeLocation === 'hospital' && (
                    <div className="palmDrive__accordionContent">
                      <p>{locationData.hospital.description}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="palmDrive__mapContainer">
              <div className="palmDrive__imageBlock palmDrive__imageBlock--map">
                {/* Map pins */}
                <div className="palmDrive__mapPin" style={{top: '15%', left: '42%'}}></div>
                <div className="palmDrive__mapPin" style={{top: '20%', left: '48%'}}></div>
                <div className="palmDrive__mapPin" style={{top: '28%', left: '60%'}}></div>
                <div className="palmDrive__mapPin" style={{top: '32%', left: '62%'}}></div>
                <div className="palmDrive__mapPin" style={{top: '52%', left: '58%'}}></div>
                <div className="palmDrive__mapPin" style={{top: '68%', left: '72%'}}></div>
                <div className="palmDrive__mapPin" style={{top: '75%', left: '85%'}}></div>
                <div className="palmDrive__mapPin" style={{top: '92%', left: '62%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Map/>
    </div>
  );
};

export default PalmDrive;