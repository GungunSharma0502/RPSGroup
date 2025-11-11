import React from 'react';
import '../css/allproject.css';

const AllProjects = () => {
  const projects = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      title: "RPS 12th Avenue",
      description: "A Unique Blend of Office & Modern Retail",
      location: "0 KM from Delhi Faridabad Toll",
      status: "ON-GOING"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      title: "RPS - Auria",
      description: "Ultra Luxurious 3 BHK & 5 BHK Residences",
      location: "RPS City, Sec 88, Faridabad",
      status: "ON-GOING"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=80",
      title: "RPS - Savana",
      description: "Residential Group Housing",
      location: "RPS City, Sec 88, Faridabad",
      status: "COMPLETED"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      title: "RPS - Palm Drive",
      description: "Low Rise Floors",
      location: "RPS City, Sec 88, Faridabad",
      status: "COMPLETED"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&q=80",
      title: "RPS - Palms",
      description: "Low Rise Floors",
      location: "RPS City, Sec 88, Faridabad",
      status: "COMPLETED"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=800&q=80",
      title: "RPS - Green Valley",
      description: "Villas & High Rise Apartments Sec 42,",
      location: "Faridabad",
      status: "COMPLETED"
    }
  ];

  return (
    <div className="allproject-container">
      <div className="allproject-grid">
        {projects.map((project) => (
          <div key={project.id} className="allproject-card">
            <div className="allproject-image-wrapper">
              <img 
                src={project.image} 
                alt={project.title}
                className="allproject-image"
              />
            </div>
            <div className="allproject-content">
              <h3 className="allproject-title">{project.title}</h3>
              <p className="allproject-description">{project.description}</p>
              <p className="allproject-location">{project.location}</p>
              <div className="allproject-footer">
                <span className={`allproject-status ${project.status.toLowerCase().replace('-', '')}`}>
                  {project.status}
                </span>
                <button className="allproject-btn">
                  KNOW MORE
                  <svg className="allproject-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 3L13 8L8 13M13 8H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;