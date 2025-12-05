import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const projectsData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      title: "Green Bunch 12th Avenue",
      subtitle: "A Unique Blend of Office & Modern Retail",
      location: "0 KM from Delhi Faridabad Toll",
      description: "Experience the perfect fusion of commercial excellence and modern retail spaces. Strategically located at the Delhi-Faridabad border, this project offers premium office spaces with world-class amenities and contemporary design.",
      link: "/greenbunch-12th-avenue"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      title: "Green Bunch - Auria",
      subtitle: "Ultra Luxurious 3 BHK & 5 BHK Residences",
      location: "Green Bunch City, Sec 88, Faridabad",
      description: "Indulge in ultra-luxurious living with spacious 3 BHK and 5 BHK residences. Featuring state-of-the-art amenities, elegant interiors, and premium finishes that redefine modern luxury living in Faridabad.",
      link: "/greenbunch-auria"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=80",
      title: "Green Bunch - Savana",
      subtitle: "Residential Group Housing",
      location: "Green Bunch City, Sec 88, Faridabad",
      description: "A beautifully designed residential group housing project offering modern homes with excellent connectivity. Enjoy a perfect blend of comfort, convenience, and contemporary lifestyle amenities.",
      link: "/greenbunch-savana"
    },
    {
      id: 4,
      image: "https://rpsgroupindia.com/wp-content/uploads/2023/05/Park-view-Hires-1024x577.jpg",
      title: "Green Bunch - Palm Drive",
      subtitle: "Low Rise Floors",
      location: "Green Bunch City, Sec 88, Faridabad",
      description: "Exclusive low-rise floors offering privacy and spacious living. Each unit is designed with attention to detail, providing residents with a serene and comfortable living environment amidst lush green surroundings.",
      link: "/greenbunch-palm-drive"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&q=80",
      title: "Green Bunch - Palms",
      subtitle: "Low Rise Floors",
      location: "Green Bunch City, Sec 88, Faridabad",
      description: "Premium low-rise residential floors designed for those who appreciate finer living. Experience tranquility and elegance with modern architecture and high-quality construction standards.",
      link: "/greenbunch-palms"
    },
    {
      id: 6,
      image: "https://rpsgroupindia.com/wp-content/uploads/elementor/thumbs/VILA-new-copy-scaled-e1684588849696-qbn5ofw6x7ktkovrgarhp6852clltl03p6gf84zqe0.jpg",
      title: "Green Bunch - Green Valley",
      subtitle: "Villas & High Rise Apartments Sec 42",
      location: "Faridabad",
      description: "Discover the perfect harmony of villas and high-rise apartments in a green valley setting. This project combines luxury living with nature, offering residents a peaceful retreat within the city.",
      link: "/greenbunch-green-valley"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      title: "Green Bunch - Saragram",
      subtitle: "Villas & High Rise Apartments Sec 42",
      location: "Faridabad",
      description: "A premium residential development featuring luxurious villas and modern apartments. Designed to offer the best of both worlds with excellent amenities and thoughtful planning.",
      link: "/greenbunch-Sargam"
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
              className="greenbunch-card-container"
            >
              <div style={styles.cardInner} className="greenbunch-card-inner">
                <div style={styles.imageContainer}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    style={styles.image}
                  />
                </div>
                <div style={styles.cardContent}>
                  <div style={styles.iconWrapper}>
                    <div style={styles.icon}></div>
                  </div>
                  <h3 style={styles.projectTitle}>{project.title}</h3>
                  <p style={styles.subtitle}>{project.subtitle}</p>
                  <p style={styles.description}>{project.description}</p>
                  <p style={styles.location}>📍 {project.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={styles.btnContainer}>
          <button 
            onClick={() => setShowAll(!showAll)} 
            style={styles.btn}
            className="greenbunch-btn"
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

          .greenbunch-card-container:hover .greenbunch-card-inner {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
          }

          .greenbunch-card-container:hover img {
            transform: scale(1.05);
          }

          .greenbunch-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(249, 115, 22, 0.4) !important;
            background: linear-gradient(135deg, #ea580c 0%, #f97316 100%) !important;
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  wrapper: {
    width: '100%',
    background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)',
    padding: '80px 0',
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
    background: 'radial-gradient(circle, rgba(251, 146, 60, 0.08) 0%, transparent 70%)',
    animation: 'float 10s ease-in-out infinite',
  },
  bgCircle2: {
    position: 'absolute',
    bottom: '-150px',
    left: '-150px',
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(249, 115, 22, 0.06) 0%, transparent 70%)',
    animation: 'float 12s ease-in-out infinite reverse',
  },
  bgCircle3: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(251, 146, 60, 0.05) 0%, transparent 70%)',
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
    marginBottom: '60px',
    position: 'relative',
  },
  headerIcon: {
    fontSize: '28px',
    fontWeight: 'bold',
    letterSpacing: '3px',
    background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  title: {
    fontSize: '48px',
    fontWeight: '800',
    letterSpacing: '4px',
    background: 'linear-gradient(135deg, #1f2937 0%, #4b5563 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    margin: 0,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '35px',
    marginBottom: '60px',
  },
  cardContainer: {
    height: '480px',
    cursor: 'pointer',
  },
  cardInner: {
    width: '100%',
    height: '100%',
    background: '#ffffff',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease',
  },
  imageContainer: {
    width: '100%',
    height: '180px',
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.4s ease',
  },
  cardContent: {
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  iconWrapper: {
    width: '60px',
    height: '60px',
    borderRadius: '16px',
    background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10px',
    boxShadow: '0 4px 15px rgba(249, 115, 22, 0.3)',
  },
  icon: {
    width: '30px',
    height: '30px',
    borderRadius: '8px',
    background: 'rgba(255, 255, 255, 0.3)',
  },
  projectTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#1f2937',
    margin: 0,
    letterSpacing: '0.3px',
  },
  subtitle: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#6b7280',
    margin: 0,
    lineHeight: '1.5',
  },
  description: {
    fontSize: '13px',
    color: '#9ca3af',
    lineHeight: '1.6',
    margin: 0,
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
  location: {
    fontSize: '12px',
    color: '#9ca3af',
    margin: '5px 0 0 0',
    fontWeight: '500',
  },
  btnContainer: {
    textAlign: 'center',
    marginTop: '60px',
  },
  btn: {
    background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
    color: '#fff',
    border: 'none',
    padding: '16px 45px',
    fontSize: '13px',
    fontWeight: '600',
    letterSpacing: '1.5px',
    cursor: 'pointer',
    borderRadius: '50px',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(249, 115, 22, 0.25)',
  },
};

export default Projects;