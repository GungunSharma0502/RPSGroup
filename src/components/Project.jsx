import React from 'react';
import '../css/Project.css';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      title: "RPS 12th Avenue",
      subtitle: "A Unique Blend of Office and Modern Retail",
      location: "0 KM from Delhi Faridabad Toll"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
      title: "RPS - Auria",
      subtitle: "Ultra Luxurious 3 BHK & 5 BHK Residences",
      location: "RPS City, Sector 88, Faridabad"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      title: "RPS - Savana",
      subtitle: "Residential Group Housing",
      location: "RPS City, Sector 88, Faridabad"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      title: "RPS - Palm Drive",
      subtitle: "Independent Premium Floors",
      location: "RPS City, Sector 88, Faridabad"
    }
  ];

  return (
    <div className="projects-section">
      <div className="projects-header">
        <div className="header-icon">⋮⋮⋮</div>
        <h2 className="projects-title">OUR PROJECTS</h2>
      </div>

      <div className="projects-grid">
        {projectsData.map((project) => (
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
        <Link to="/all-projects" className="view-all-btn">VIEW ALL PROJECTS</Link>
      </div>
    </div>
  );
};

export default Projects;