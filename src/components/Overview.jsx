import React, { useState, useEffect } from 'react';

const Overview = () => {
  const statsData = [
    { finalValue: 20, suffix: '+', label: 'YEARS OF EXPERIENCE' },
    { finalValue: 10, suffix: ' Million', label: 'SQ.FT. AREA DELIVERED' },
    { finalValue: 2.7, suffix: ' Million', label: 'SQ.FT. AREA UPCOMING' },
    { finalValue: 5300, suffix: ' +', label: 'SATISFIED CUSTOMERS' }
  ];

  const [stats, setStats] = useState(statsData.map(() => 0));
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    statsData.forEach((stat, index) => {
      const duration = 2000;
      const steps = 60;
      const increment = stat.finalValue / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.finalValue) {
          current = stat.finalValue;
          clearInterval(timer);
        }
        
        setStats(prev => {
          const newStats = [...prev];
          newStats[index] = current;
          return newStats;
        });
      }, duration / steps);
      
      return () => clearInterval(timer);
    });
  }, []);

  return (
    <div style={{
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '60px 40px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#fff'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        marginBottom: '80px',
        alignItems: 'start'
      }}>
        <div style={{ paddingRight: '20px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            marginBottom: '30px'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 8px)',
              gap: '4px'
            }}>
              {[...Array(9)].map((_, i) => (
                <span key={i} style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#1a4d8f',
                  borderRadius: '50%'
                }}></span>
              ))}
            </div>
            <h1 style={{
              fontSize: '42px',
              fontWeight: '300',
              letterSpacing: '3px',
              color: '#000',
              margin: 0
            }}>OVERVIEW</h1>
          </div>

          <h2 style={{
            fontSize: '24px',
            fontWeight: '400',
            letterSpacing: '1px',
            marginBottom: '30px',
            color: '#000',
            lineHeight: '1.4'
          }}>PIONEERING EXCELLENCE IN REAL ESTATE SINCE 2005</h2>

          <p style={{
            fontSize: '16px',
            lineHeight: '1.8',
            color: '#333',
            textAlign: 'justify',
            marginBottom: '20px'
          }}>
            Since its establishment, RPS Group has consistently stood as a pioneering force within its industry, 
            demonstrating thought leadership with extensive experience and deep expertise in the field of real estate.
          </p>

          <p style={{
            fontSize: '16px',
            lineHeight: '1.8',
            color: '#333',
            textAlign: 'justify',
            marginBottom: '20px'
          }}>
            We embrace innovation in design as a means to create spaces that not only meets evolving customers 
            desires but also enrich lives of many. By combining our expertise with visionary thinking, we ensure 
            that our projects are at the forefront of contemporary designs, setting new benchmarks for excellence 
            in real estate industry.
          </p>

          <p style={{
            fontSize: '16px',
            lineHeight: '1.8',
            color: '#333',
            textAlign: 'justify',
            marginBottom: '20px'
          }}>
            With an impressive portfolio spanning over almost two decade, RPS Group has successfully developed 
            and delivered more than 10 million square feet of commercial and residential spaces.
          </p>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'relative',
            width: '100%',
            height: '600px',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)'
          }}>
            <img 
              src="https://rpsgroupindia.com/wp-content/uploads/2023/05/nite-copy-1024x768.jpg" 
              alt="RPS Group Building" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }} 
            />
          </div>
        </div>
      </div>

      <div style={{
        position: 'relative',
        paddingTop: '40px',
        borderTop: '2px solid #e0e0e0'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '40px',
          marginTop: '20px'
        }}>
          {statsData.map((stat, index) => (
            <div 
              key={index}
              style={{ textAlign: 'center', cursor: 'pointer' }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h3 style={{
                fontSize: '48px',
                fontWeight: '300',
                color: hoveredIndex === index ? '#1a4d8f' : '#000',
                marginBottom: '10px',
                letterSpacing: '1px',
                margin: '0 0 10px 0',
                transition: 'all 0.3s ease'
              }}>
                {stat.finalValue >= 1000 
                  ? Math.floor(stats[index]).toLocaleString() 
                  : stats[index].toFixed(stat.finalValue < 10 ? 1 : 0)
                }
                {stats[index] >= stat.finalValue ? stat.suffix : ''}
              </h3>
              <p style={{
                fontSize: '13px',
                color: '#666',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                fontWeight: '500',
                margin: 0
              }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;