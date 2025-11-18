import React, { useState, useEffect, useRef } from 'react';

const Overview = () => {
  const statsData = [
    { finalValue: 20, suffix: '+', label: 'YEARS OF EXPERIENCE', splitSuffix: false },
    { finalValue: 10, suffix: 'Million', label: 'SQ.FT. AREA DELIVERED', splitSuffix: true },
    { finalValue: 2.7, suffix: 'Million', label: 'SQ.FT. AREA UPCOMING', splitSuffix: true },
    { finalValue: 5300, suffix: '+', label: 'SATISFIED CUSTOMERS', splitSuffix: false }
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
    <div style={styles.wrapper}>
      <div ref={sectionRef} style={styles.container}>
        {/* Floating Background Elements */}
        <div style={styles.bgCircle1}></div>
        <div style={styles.bgCircle2}></div>
        <div style={styles.bgCircle3}></div>

        <div style={styles.contentGrid}>
          {/* Left Content */}
          <div style={styles.leftContent}>
            <div style={styles.headerSection}>
              <div style={styles.dotGrid}>
                {[...Array(9)].map((_, i) => (
                  <span key={i} style={{
                    ...styles.dot,
                    animationDelay: `${i * 0.1}s`
                  }}></span>
                ))}
              </div>
              <div>
                <h1 style={styles.mainTitle}>OVERVIEW</h1>
                <div style={styles.gradientLine}></div>
              </div>
            </div>

            <h2 style={styles.subtitle}>
              PIONEERING EXCELLENCE IN <span style={styles.highlight}>REAL ESTATE</span> SINCE 2005
            </h2>

            <div style={styles.textContent}>
              <div style={styles.paragraph}>
                <div style={styles.quoteIcon}>"</div>
                <p style={styles.text}>
                  Since its establishment, RPS Group has consistently stood as a pioneering force within its industry, 
                  demonstrating thought leadership with extensive experience and deep expertise in the field of real estate.
                </p>
              </div>

              <div style={styles.paragraph}>
                <p style={styles.text}>
                  We embrace innovation in design as a means to create spaces that not only meets evolving customers 
                  desires but also enrich lives of many. By combining our expertise with visionary thinking, we ensure 
                  that our projects are at the forefront of contemporary designs, setting new benchmarks for excellence 
                  in real estate industry.
                </p>
              </div>

              <div style={styles.paragraph}>
                <p style={styles.text}>
                  With an impressive portfolio spanning over almost two decade, RPS Group has successfully developed 
                  and delivered more than 10 million square feet of commercial and residential spaces.
                </p>
              </div>

              <div style={styles.featureGrid}>
                <div style={styles.featureCard}>
                  <div style={styles.featureIcon}>✦</div>
                  <div>
                    <h4 style={styles.featureTitle}>Premium Quality</h4>
                    <p style={styles.featureText}>World-class construction standards</p>
                  </div>
                </div>
                <div style={styles.featureCard}>
                  <div style={styles.featureIcon}>★</div>
                  <div>
                    <h4 style={styles.featureTitle}>Timely Delivery</h4>
                    <p style={styles.featureText}>Committed to our promises</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div style={styles.rightContent}>
            <div style={styles.imageWrapper}>
              <div style={styles.imageGlow}></div>
              <img 
                src="https://rpsgroupindia.com/wp-content/uploads/2023/05/nite-copy-1024x768.jpg" 
                alt="RPS Group Building" 
                style={styles.image}
              />
              <div style={styles.imageOverlay}>
                <div style={styles.overlayContent}>
                  <h3 style={styles.overlayTitle}>AWARD WINNING</h3>
                  <p style={styles.overlayText}>Architecture & Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div style={styles.statsSection}>
          <div style={styles.statsGrid}>
            {statsData.map((stat, index) => (
              <div 
                key={index}
                style={{
                  ...styles.statCard,
                  transform: hoveredIndex === index ? 'translateY(-10px) scale(1.05)' : 'translateY(0) scale(1)',
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div style={styles.statIconWrapper}>
                  <div style={{
                    ...styles.statIconBg,
                    background: hoveredIndex === index 
                      ? 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)' 
                      : 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(30, 64, 175, 0.3) 100%)',
                  }}></div>
                </div>
                <h3 style={{
                  ...styles.statValue,
                  color: hoveredIndex === index ? '#60a5fa' : '#ffffff',
                }}>
                  {stat.finalValue >= 1000 
                    ? Math.floor(stats[index]).toLocaleString() 
                    : stats[index].toFixed(stat.finalValue < 10 ? 1 : 0)
                  }
                  {stats[index] >= stat.finalValue ? stat.suffix : ''}
                </h3>
                <p style={styles.statLabel}>{stat.label}</p>
                <div style={{
                  ...styles.statProgress,
                  width: hoveredIndex === index ? '100%' : '0%',
                }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.9); }
        }
      `}</style>
    </div>
  );
};

const styles = {
  // ✅ OUTER WRAPPER - Dark Blue Background with Glass Effect
  wrapper: {
    width: '100%',
    background: 'linear-gradient(180deg, #0a1628 0%, #0d1b3e 50%, #1a2744 100%)',
    padding: '100px 0',
    position: 'relative',
    overflow: 'hidden',
  },
  // ✅ INNER CONTAINER - Limited Content Width
  container: {
    position: 'relative',
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 40px',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  bgCircle1: {
    position: 'absolute',
    top: '-100px',
    right: '-100px',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
    animation: 'float 8s ease-in-out infinite',
  },
  bgCircle2: {
    position: 'absolute',
    bottom: '100px',
    left: '-150px',
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(30, 64, 175, 0.12) 0%, transparent 70%)',
    animation: 'float 10s ease-in-out infinite reverse',
  },
  bgCircle3: {
    position: 'absolute',
    top: '50%',
    right: '10%',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(96, 165, 250, 0.1) 0%, transparent 70%)',
    animation: 'float 12s ease-in-out infinite',
  },
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '80px',
    marginBottom: '100px',
    alignItems: 'start',
    position: 'relative',
    zIndex: 1,
  },
  leftContent: {
    paddingRight: '20px',
  },
  headerSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '40px',
  },
  dotGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 10px)',
    gap: '6px',
  },
  dot: {
    width: '10px',
    height: '10px',
    background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
    borderRadius: '50%',
    animation: 'pulse 2s ease-in-out infinite',
    boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
  },
  mainTitle: {
    fontSize: '56px',
    fontWeight: '800',
    letterSpacing: '6px',
    color: '#ffffff',
    margin: 0,
    background: 'linear-gradient(135deg, #ffffff 0%, #60a5fa 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textShadow: '0 0 40px rgba(59, 130, 246, 0.3)',
  },
  gradientLine: {
    width: '120px',
    height: '4px',
    background: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
    marginTop: '10px',
    borderRadius: '2px',
    boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
  },
  subtitle: {
    fontSize: '28px',
    fontWeight: '300',
    letterSpacing: '2px',
    marginBottom: '40px',
    color: '#e0e7ff',
    lineHeight: '1.5',
  },
  highlight: {
    background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontWeight: '600',
  },
  textContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
  paragraph: {
    position: 'relative',
    paddingLeft: '30px',
    borderLeft: '3px solid transparent',
    borderImage: 'linear-gradient(to bottom, #3b82f6, transparent) 1',
    transition: 'all 0.3s ease',
  },
  quoteIcon: {
    position: 'absolute',
    left: '-40px',
    top: '-10px',
    fontSize: '60px',
    color: '#3b82f6',
    opacity: 0.3,
    fontFamily: 'Georgia, serif',
  },
  text: {
    fontSize: '16px',
    lineHeight: '1.9',
    color: '#cbd5e1',
    textAlign: 'justify',
    margin: 0,
  },
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    marginTop: '20px',
  },
  featureCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    padding: '20px',
    background: 'rgba(30, 64, 175, 0.2)',
    backdropFilter: 'blur(20px)',
    borderRadius: '12px',
    border: '1px solid rgba(59, 130, 246, 0.3)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  },
  featureIcon: {
    fontSize: '28px',
    background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  featureTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#ffffff',
    margin: '0 0 5px 0',
    letterSpacing: '1px',
  },
  featureText: {
    fontSize: '12px',
    color: '#94a3b8',
    margin: 0,
  },
  rightContent: {
    position: 'relative',
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    height: '700px',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5)',
    border: '1px solid rgba(59, 130, 246, 0.3)',
  },
  imageGlow: {
    position: 'absolute',
    inset: '-20px',
    background: 'linear-gradient(135deg, #3b82f6, #1e40af)',
    filter: 'blur(40px)',
    opacity: 0.4,
    zIndex: -1,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.6s ease',
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'linear-gradient(to top, rgba(10, 22, 40, 0.95), transparent)',
    padding: '40px',
    transform: 'translateY(100%)',
    transition: 'transform 0.4s ease',
  },
  overlayContent: {
    color: '#fff',
  },
  overlayTitle: {
    fontSize: '24px',
    fontWeight: '700',
    letterSpacing: '3px',
    margin: '0 0 10px 0',
    color: '#60a5fa',
  },
  overlayText: {
    fontSize: '14px',
    letterSpacing: '2px',
    margin: 0,
    opacity: 0.9,
  },
  statsSection: {
    position: 'relative',
    padding: '60px 0 0',
    borderTop: '1px solid rgba(59, 130, 246, 0.3)',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '40px',
  },
  statCard: {
    position: 'relative',
    textAlign: 'center',
    padding: '40px 20px',
    background: 'rgba(30, 64, 175, 0.15)',
    backdropFilter: 'blur(20px)',
    borderRadius: '16px',
    border: '1px solid rgba(59, 130, 246, 0.3)',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    overflow: 'hidden',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  },
  statIconWrapper: {
    position: 'relative',
    width: '60px',
    height: '60px',
    margin: '0 auto 20px',
  },
  statIconBg: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    transition: 'all 0.3s ease',
    boxShadow: '0 0 30px rgba(59, 130, 246, 0.4)',
  },
  statValue: {
    fontSize: '48px',
    fontWeight: '700',
    letterSpacing: '2px',
    margin: '0 0 10px 0',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    lineHeight: '1.1',
    textShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
  },
  statLabel: {
    fontSize: '11px',
    color: '#94a3b8',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    fontWeight: '600',
    margin: 0,
  },
  statProgress: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: '3px',
    background: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
    transition: 'width 0.4s ease',
    boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
  },
};

export default Overview;