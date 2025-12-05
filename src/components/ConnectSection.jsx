import React from 'react';
import '../css/Connect.css';
import { Link } from 'react-router-dom';

const ConnectSection = () => {
  return (
    <div className="connect-container">
      <div className="connect-lines"></div>
      <div className="connect-content">
        <h1 className="connect-title">From Idea to Production in Days</h1>
        <p className="connect-description">
          Accelerate your production with our technology. Reduce
          downtime and optimize costs. Get a special offer now!
        </p>
        <Link  to="/contact"className="connect-button">Work With Us</Link>
      </div>
    </div>
  );
};

export default ConnectSection;