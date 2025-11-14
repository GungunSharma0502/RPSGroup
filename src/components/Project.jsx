import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Project.css';

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
      link: "/rps-12th-avenue"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      title: "RPS - Auria",
      subtitle: "Ultra Luxurious 3 BHK & 5 BHK Residences",
      location: "RPS City, Sec 88, Faridabad",
      link: "/rps-auria"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=80",
      title: "RPS - Savana",
      subtitle: "Residential Group Housing",
      location: "RPS City, Sec 88, Faridabad",
      link: "/rps-savana"
    },
    {
      id: 4,
      image: "https://rpsgroupindia.com/wp-content/uploads/2023/05/Park-view-Hires-1024x577.jpg",
      title: "RPS - Palm Drive",
      subtitle: "Low Rise Floors",
      location: "RPS City, Sec 88, Faridabad",
      link: "/rps-palm-drive"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&q=80",
      title: "RPS - Palms",
      subtitle: "Low Rise Floors",
      location: "RPS City, Sec 88, Faridabad",
      link: "/rps-palms"
    },
    {
      id: 6,
      image: "https://rpsgroupindia.com/wp-content/uploads/elementor/thumbs/VILA-new-copy-scaled-e1684588849696-qbn5ofw6x7ktkovrgarhp6852clltl03p6gf84zqe0.jpg",
      title: "RPS - Green Valley",
      subtitle: "Villas & High Rise Apartments Sec 42,",
      location: "Faridabad",
      link: "/rps-green-valley"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      title: "RPS - Saragram",
      subtitle: "Villas & High Rise Apartments Sec 42,",
      location: "Faridabad",
      link: "/rps-Sargam"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800",
      title: "The - Elements Goa",
      subtitle: "Villas & High Rise Apartments Sec 42,",
      location: "Faridabad",
      link: "/the-elements-goa"
    },
    {
      id: 9,
      image: "https://rpsgroupindia.com/wp-content/uploads/2023/09/Project-Photo-13-RPS-Green-Valley-Faridabad-5072696_972_1296-1024x919.jpg",
      title: "Propex City",
      subtitle: "Villas & High Rise Apartments Sec 42,",
      location: "Faridabad",
      link: "/propex-city"
    }
  ];

  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 4);

  const handleCardClick = (link) => {
    navigate(link);
  };

  return (
    <div className="projects-section">
      <div className="projects-header">
        <div className="header-icon">⋮⋮⋮</div>
        <h2 className="projects-title">OUR PROJECTS</h2>
      </div>

      <div className="projects-grid">
        {displayedProjects.map((project) => (
          <div 
            key={project.id} 
            className="project-card"
            onClick={() => handleCardClick(project.link)}
            style={{ cursor: 'pointer' }}
          >
            <div className="project-image-container">
              <img 
                src={project.image} 
                alt={project.title}
                className="project-image"
              />
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-location">{project.location}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="view-all-container">
        <button 
          onClick={() => setShowAll(!showAll)} 
          className="view-all-btn"
        >
          {showAll ? 'SHOW LESS' : 'VIEW ALL PROJECTS'}
        </button>
      </div>
    </div>
  );
};

export default Projects;