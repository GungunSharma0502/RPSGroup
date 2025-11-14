import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/allproject.css';

const AllProjects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      title: "RPS 12th Avenue",
      description: "A Unique Blend of Office & Modern Retail",
      location: "0 KM from Delhi Faridabad Toll",
      status: "ON-GOING",
      link: "/rps-12th-avenue"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      title: "RPS - Auria",
      description: "Ultra Luxurious 3 BHK & 5 BHK Residences",
      location: "RPS City, Sec 88, Faridabad",
      status: "ON-GOING",
      link: "/rps-auria"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=80",
      title: "RPS - Savana",
      description: "Residential Group Housing",
      location: "RPS City, Sec 88, Faridabad",
      status: "COMPLETED",
      link: "/rps-savana"
    },
    {
      id: 4,
      image: "https://rpsgroupindia.com/wp-content/uploads/2023/05/Park-view-Hires-1024x577.jpg",
      title: "RPS - Palm Drive",
      description: "Low Rise Floors",
      location: "RPS City, Sec 88, Faridabad",
      status: "COMPLETED",
      link: "/rps-palm-drive"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&q=80",
      title: "RPS - Palms",
      description: "Low Rise Floors",
      location: "RPS City, Sec 88, Faridabad",
      status: "COMPLETED",
      link: "/rps-palms"
    },
    {
      id: 6,
      image: "https://rpsgroupindia.com/wp-content/uploads/elementor/thumbs/VILA-new-copy-scaled-e1684588849696-qbn5ofw6x7ktkovrgarhp6852clltl03p6gf84zqe0.jpg",
      title: "RPS - Green Valley",
      description: "Villas & High Rise Apartments Sec 42,",
      location: "Faridabad",
      status: "COMPLETED",
      link: "/rps-green-valley"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      title: "RPS - Saragram",
      description: "Villas & High Rise Apartments Sec 42,",
      location: "Faridabad",
      status: "COMPLETED",
      link: "/rps-Sargam"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800",
      title: "The - Elements Goa",
      description: "Premium Villas in Goa",
      location: "Goa",
      status: "ON-GOING",
      link: "/the-elements-goa"
    },
    {
      id: 9,
      image: "https://rpsgroupindia.com/wp-content/uploads/2023/09/Project-Photo-13-RPS-Green-Valley-Faridabad-5072696_972_1296-1024x919.jpg",
      title: "Propex City",
      description: "Modern Commercial Complex",
      location: "Faridabad",
      status: "ON-GOING",
      link: "/propex-city"
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80",
      title: "RPS - Mint Homes",
      description: "Affordable 2 & 3 BHK Apartments",
      location: "Sector 95, Faridabad",
      status: "ON-GOING",
      link: "/rps-mint-homes"
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      title: "RPS - Sky Gardens",
      description: "High Rise Luxury Towers",
      location: "Sector 77, Faridabad",
      status: "UPCOMING",
      link: "/rps-sky-gardens"
    },
    {
      id: 12,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
      title: "RPS - Heritage Villas",
      description: "Premium Independent Villas",
      location: "Sector 85, Faridabad",
      status: "UPCOMING",
      link: "/rps-heritage-villas"
    }
  ];

  const handleKnowMore = (link) => {
    navigate(link);
  };

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
                <button 
                  className="allproject-btn"
                  onClick={() => handleKnowMore(project.link)}
                >
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