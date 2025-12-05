import React, { useState, useEffect, useRef } from 'react';
import '../css/Stats.css';

const Stats = () => {
  const statsData = [
    { finalValue: 20, suffix: '+', label: 'YEARS OF EXPERIENCE' },
    { finalValue: 10, suffix: ' Million', label: 'SQ.FT. AREA DELIVERED' },
    { finalValue: 2.7, suffix: ' Million', label: 'SQ.FT. AREA UPCOMING' },
    { finalValue: 5300, suffix: '+', label: 'SATISFIED CUSTOMERS' }
  ];

  const [stats, setStats] = useState(statsData.map(() => 0));
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    statsData.forEach((stat, index) => {
      const duration = 2500;
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
    });
  }, [isVisible]);

  return (
    <div className="Stats">
      <section className="Stats__section" ref={sectionRef}>
        <div className="Stats__grid">
          {statsData.map((stat, index) => (
            <div 
              key={index}
              className={`Stats__card ${hoveredIndex === index ? 'Stats__card--hovered' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div>
                <span className="Stats__value">
                  {stat.finalValue >= 1000 
                    ? Math.floor(stats[index]).toLocaleString() 
                    : stats[index].toFixed(stat.finalValue < 10 ? 1 : 0)
                  }
                </span>
                {stats[index] >= stat.finalValue && (
                  <span className="Stats__suffix">{stat.suffix}</span>
                )}
              </div>
              <div className="Stats__divider"></div>
              <p className="Stats__label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Stats;