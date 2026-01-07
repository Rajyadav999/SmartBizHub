import React from 'react';
import './FeatureCard.css';

const FeatureCard = ({ icon, title, description, delay = 0 }) => {
  return (
    <div 
      className="feature-card animate-fade-in-up" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="feature-icon" aria-hidden="true">
        {icon}
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
};

export default FeatureCard;