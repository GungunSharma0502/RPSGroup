import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const projectsData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      title: "RPS 12th Avenue",
      subtitle: "A Unique Blend of Office & Modern Retail",
      location: "0 KM from Delhi Faridabad Toll",
      description: "Experience the perfect fusion of commercial excellence and modern retail spaces. Strategically located at the Delhi-Faridabad border, this project offers premium office spaces with world-class amenities and contemporary design.",
      link: "/rps-12th-avenue"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      title: "RPS - Auria",
      subtitle: "Ultra Luxurious 3 BHK & 5 BHK Residences",
      location: "RPS City, Sec 88, Faridabad",
      description: "Indulge in ultra-luxurious living with spacious 3 BHK and 5 BHK residences. Featuring state-of-the-art amenities, elegant interiors, and premium finishes that redefine modern luxury living in Faridabad.",
      link: "/rps-auria"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=80",
      title: "RPS - Savana",
      subtitle: "Residential Group Housing",
      location: "RPS City, Sec 88, Faridabad",
      description: "A beautifully designed residential group housing project offering modern homes with excellent connectivity. Enjoy a perfect blend of comfort, convenience, and contemporary lifestyle amenities.",
      link: "/rps-savana"
    },
    {
      id: 4,
      image: "https://rpsgroupindia.com/wp-content/uploads/2023/05/Park-view-Hires-1024x577.jpg",
      title: "RPS - Palm Drive",
      subtitle: "Low Rise Floors",
      location: "RPS City, Sec 88, Faridabad",
      description: "Exclusive low-rise floors offering privacy and spacious living. Each unit is designed with attention to detail, providing residents with a serene and comfortable living environment amidst lush green surroundings.",
      link: "/rps-palm-drive"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&q=80",
      title: "RPS - Palms",
      subtitle: "Low Rise Floors",
      location: "RPS City, Sec 88, Faridabad",
      description: "Premium low-rise residential floors designed for those who appreciate finer living. Experience tranquility and elegance with modern architecture and high-quality construction standards.",
      link: "/rps-palms"
    },
    {
      id: 6,
      image: "https://rpsgroupindia.com/wp-content/uploads/elementor/thumbs/VILA-new-copy-scaled-e1684588849696-qbn5ofw6x7ktkovrgarhp6852clltl03p6gf84zqe0.jpg",
      title: "RPS - Green Valley",
      subtitle: "Villas & High Rise Apartments Sec 42",
      location: "Faridabad",
      description: "Discover the perfect harmony of villas and high-rise apartments in a green valley setting. This project combines luxury living with nature, offering residents a peaceful retreat within the city.",
      link: "/rps-green-valley"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      title: "RPS - Saragram",
      subtitle: "Villas & High Rise Apartments Sec 42",
      location: "Faridabad",
      description: "A premium residential development featuring luxurious villas and modern apartments. Designed to offer the best of both worlds with excellent amenities and thoughtful planning.",
      link: "/rps-Sargam"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800",
      title: "The - Elements Goa",
      subtitle: "Villas & High Rise Apartments Sec 42",
      location: "Faridabad",
      description: "Experience Goa-inspired living with this unique project. Combining tropical design elements with modern amenities, it offers a vacation-like lifestyle right at your doorstep.",
      link: "/the-elements-goa"
    },
    {
      id: 9,
      image: "https://rpsgroupindia.com/wp-content/uploads/2023/09/Project-Photo-13-RPS-Green-Valley-Faridabad-5072696_972_1296-1024x919.jpg",
      title: "Propex City",
      subtitle: "Villas & High Rise Apartments Sec 42",
      location: "Faridabad",
      description: "A well-planned integrated township offering diverse housing options. From luxury villas to modern apartments, Propex City is designed to cater to every lifestyle need.",
      link: "/propex-city"
    }
  ];

  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 6);

  const handleCardClick = (link) => {
    navigate(link);
  };

  return (
    <div style={styles.wrapper}>
      {/* Floating Background Elements */}
      <div style={styles.bgCircle1}></div>
      <div style={styles.bgCircle2}></div>
      <div style={styles.bgCircle3}></div>

      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.headerIcon}>⋮⋮⋮</div>
          <h2 style={styles.title}>OUR PROJECTS</h2>
        </div>

        <div style={styles.grid}>
          {displayedProjects.map((project) => (
            <div 
              key={project.id} 
              style={styles.cardContainer}
              onClick={() => handleCardClick(project.link)}
              className="card-container"
            >
              <div style={styles.cardInner} className="card-inner">
                {/* Front Side */}
                <div style={styles.cardFront} className="card-front">
                  <div style={styles.imageContainer}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      style={styles.image}
                    />
                    <div style={styles.imageOverlay}></div>
                  </div>
                  <div style={styles.frontInfo}>
                    <h3 style={styles.projectTitle}>{project.title}</h3>
                    <p style={styles.location}>📍 {project.location}</p>
                  </div>
                </div>

                {/* Back Side */}
                <div style={styles.cardBack} className="card-back">
                  <div style={styles.backContent}>
                    <h3 style={styles.backTitle}>{project.title}</h3>
                    <div style={styles.divider}></div>
                    <p style={styles.backSubtitle}>{project.subtitle}</p>
                    <p style={styles.description}>{project.description}</p>
                    <p style={styles.backLocation}>📍 {project.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={styles.btnContainer}>
          <button 
            onClick={() => setShowAll(!showAll)} 
            style={styles.btn}
            className="btn"
          >
            {showAll ? 'SHOW LESS' : 'VIEW ALL PROJECTS'}
          </button>
        </div>
      </div>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-30px) rotate(5deg); }
          }

          .card-container:hover .card-inner {
            transform: rotateY(180deg);
          }

          .card-front,
          .card-back {
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
          }

          .card-back {
            transform: rotateY(180deg);
          }

          .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 40px rgba(59, 130, 246, 0.6) !important;
          }

          .card-container:hover .card-front img {
            transform: scale(1.1);
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  wrapper: {
    width: '100%',
    background: 'linear-gradient(180deg, #1a2744 0%, #0d1b3e 50%, #0a1628 100%)',
    padding: '100px 0',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    position: 'relative',
    overflow: 'hidden',
  },
  bgCircle1: {
    position: 'absolute',
    top: '-200px',
    right: '-200px',
    width: '600px',
    height: '600px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)',
    animation: 'float 10s ease-in-out infinite',
  },
  bgCircle2: {
    position: 'absolute',
    bottom: '-150px',
    left: '-150px',
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(30, 64, 175, 0.1) 0%, transparent 70%)',
    animation: 'float 12s ease-in-out infinite reverse',
  },
  bgCircle3: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(96, 165, 250, 0.08) 0%, transparent 70%)',
    animation: 'float 14s ease-in-out infinite',
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 40px',
    position: 'relative',
    zIndex: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '70px',
    position: 'relative',
  },
  headerIcon: {
    fontSize: '28px',
    fontWeight: 'bold',
    letterSpacing: '3px',
    background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textShadow: '0 0 30px rgba(59, 130, 246, 0.5)',
  },
  title: {
    fontSize: '48px',
    fontWeight: '800',
    letterSpacing: '4px',
    background: 'linear-gradient(135deg, #ffffff 0%, #60a5fa 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    margin: 0,
    textShadow: '0 0 40px rgba(59, 130, 246, 0.3)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '35px',
    marginBottom: '70px',
  },
  cardContainer: {
    perspective: '1000px',
    height: '420px',
    cursor: 'pointer',
  },
  cardInner: {
    position: 'relative',
    width: '100%',
    height: '100%',
    transition: 'transform 0.8s',
    transformStyle: 'preserve-3d',
  },
  cardFront: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: 'rgba(30, 64, 175, 0.15)',
    backdropFilter: 'blur(20px)',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)',
    border: '1px solid rgba(59, 130, 246, 0.3)',
  },
  cardBack: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.95) 0%, rgba(59, 130, 246, 0.95) 100%)',
    backdropFilter: 'blur(20px)',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 8px 30px rgba(59, 130, 246, 0.4)',
    border: '1px solid rgba(96, 165, 250, 0.4)',
  },
  imageContainer: {
    width: '100%',
    height: '260px',
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.6s ease',
  },
  imageOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, transparent 0%, rgba(13, 27, 62, 0.3) 100%)',
    pointerEvents: 'none',
  },
  frontInfo: {
    padding: '25px',
    background: 'rgba(13, 27, 62, 0.8)',
    backdropFilter: 'blur(10px)',
  },
  projectTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#ffffff',
    margin: '0 0 10px 0',
    letterSpacing: '0.5px',
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
  },
  location: {
    fontSize: '13px',
    color: '#94a3b8',
    margin: 0,
  },
  backContent: {
    padding: '35px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: '#fff',
  },
  backTitle: {
    fontSize: '24px',
    fontWeight: '800',
    color: '#fff',
    margin: '0 0 15px 0',
    letterSpacing: '0.5px',
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
  },
  divider: {
    width: '60px',
    height: '3px',
    background: '#fff',
    margin: '0 0 20px 0',
    borderRadius: '2px',
    boxShadow: '0 0 15px rgba(255, 255, 255, 0.5)',
  },
  backSubtitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.95)',
    margin: '0 0 15px 0',
    lineHeight: '1.5',
  },
  description: {
    fontSize: '13px',
    color: 'rgba(255, 255, 255, 0.85)',
    lineHeight: '1.7',
    margin: '0 0 20px 0',
    flex: 1,
  },
  backLocation: {
    fontSize: '13px',
    color: 'rgba(255, 255, 255, 0.9)',
    margin: 0,
    fontWeight: '500',
  },
  btnContainer: {
    textAlign: 'center',
    marginTop: '70px',
  },
  btn: {
    background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
    color: '#fff',
    border: '1px solid rgba(59, 130, 246, 0.5)',
    padding: '18px 50px',
    fontSize: '14px',
    fontWeight: '700',
    letterSpacing: '2px',
    cursor: 'pointer',
    borderRadius: '50px',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 10px 30px rgba(30, 64, 175, 0.5)',
    backdropFilter: 'blur(10px)',
  },
};

export default Projects;