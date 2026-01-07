import React from 'react';
import './Navigation.css';

const Navigation = ({ currentPage, setCurrentPage, isMobile = false, onNavigate }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'services', label: 'Services', icon: '⚙️' },
    { id: 'portfolio', label: 'Portfolio', icon: '💼' },
    { id: 'about', label: 'About', icon: 'ℹ️' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  const handleClick = (pageId) => {
    setCurrentPage(pageId);
    if (onNavigate) {
      onNavigate();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`navigation ${isMobile ? 'mobile' : 'desktop'}`}>
      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.id} className="nav-item">
            <button
              onClick={() => handleClick(item.id)}
              className={`nav-button ${currentPage === item.id ? 'active' : ''}`}
              aria-current={currentPage === item.id ? 'page' : undefined}
            >
              {isMobile && <span className="nav-icon">{item.icon}</span>}
              <span className="nav-label">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;