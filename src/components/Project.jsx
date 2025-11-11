import React, { useState } from 'react';
import '../css/Project.css';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projectsData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      title: "RPS 12th Avenue",
      subtitle: "A Unique Blend of Office & Modern Retail",
      location: "0 KM from Delhi Faridabad Toll"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      title: "RPS - Auria",
      subtitle: "Ultra Luxurious 3 BHK & 5 BHK Residences",
      location: "RPS City, Sec 88, Faridabad"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=80",
      title: "RPS - Savana",
      subtitle: "Residential Group Housing",
      location: "RPS City, Sec 88, Faridabad"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      title: "RPS - Palm Drive",
      subtitle: "Low Rise Floors",
      location: "RPS City, Sec 88, Faridabad"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&q=80",
      title: "RPS - Palms",
      subtitle: "Low Rise Floors",
      location: "RPS City, Sec 88, Faridabad"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=800&q=80",
      title: "RPS - Green Valley",
      subtitle: "Villas & High Rise Apartments Sec 42,",
      location: "Faridabad"
    }
  ];

  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 4);

  return (
    <div className="projects-section">
      <div className="projects-header">
        <div className="header-icon">⋮⋮⋮</div>
        <h2 className="projects-title">OUR PROJECTS</h2>
      </div>

      <div className="projects-grid">
        {displayedProjects.map((project) => (
          <div key={project.id} className="project-card">
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