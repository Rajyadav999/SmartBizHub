import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../../utils/constants';
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(project => project.category === activeFilter);

  return (
    <div className="portfolio-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <h1 className="animate-fade-in-up">Our Portfolio</h1>
          <p className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Showcasing our best work and successful projects
          </p>
        </div>
      </section>

      {/* Portfolio Content */}
      <section className="portfolio-content">
        <div className="container">
          {/* Filter Buttons */}
          <div className="portfolio-filters">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="portfolio-grid">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="portfolio-card animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="portfolio-image">
                  <span className="project-emoji">{project.image}</span>
                </div>
                <div className="portfolio-info">
                  <span className="portfolio-badge">{project.category}</span>
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-description">{project.description}</p>
                  <p className="portfolio-tech">{project.tech}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;