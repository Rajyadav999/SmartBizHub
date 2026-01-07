import React from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Header = ({ theme, toggleTheme, menuOpen, toggleMenu, currentPage, setCurrentPage }) => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (page) => {
    setCurrentPage(page);
    toggleMenu(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`${scrolled ? 'shadow-lg' : 'shadow-md'}`}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: theme === 'light' ? '#ffffff' : '#1a1a2e',
        transition: 'all 0.3s ease',
        borderBottom: `1px solid ${theme === 'light' ? '#e5e7eb' : '#2d2d44'}`
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
        <nav 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            height: '64px',
            gap: '2rem'
          }} 
          role="navigation" 
          aria-label="Main navigation"
        >
          {/* Logo */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer',
              transition: 'opacity 0.2s ease',
              flexShrink: 0
            }}
            onClick={() => handleNavClick('home')}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            <span style={{ fontSize: '1.75rem' }} aria-hidden="true">⚡</span>
            <span 
              style={{ 
                fontSize: '1.25rem', 
                fontWeight: '700',
                color: theme === 'light' ? '#1a1a2e' : '#ffffff',
                whiteSpace: 'nowrap'
              }}
            >
              SmartBizHub
            </span>
          </div>

          {/* Desktop Navigation */}
          <ul 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2.5rem',
              listStyle: 'none',
              margin: 0,
              padding: 0
            }}
            className="desktop-nav"
            role="menubar"
          >
            {navLinks.map(link => (
              <li key={link.id} role="none">
                <a
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.id);
                  }}
                  role="menuitem"
                  aria-current={currentPage === link.id ? 'page' : undefined}
                  style={{
                    color: currentPage === link.id 
                      ? '#3b82f6' 
                      : theme === 'light' ? '#4b5563' : '#d1d5db',
                    fontWeight: currentPage === link.id ? '600' : '500',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    fontSize: '0.95rem',
                    whiteSpace: 'nowrap',
                    position: 'relative',
                    padding: '0.5rem 0'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#3b82f6'}
                  onMouseLeave={(e) => {
                    if (currentPage !== link.id) {
                      e.currentTarget.style.color = theme === 'light' ? '#4b5563' : '#d1d5db';
                    }
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              style={{
                padding: '0.5rem',
                borderRadius: '0.5rem',
                border: 'none',
                backgroundColor: theme === 'light' ? '#f3f4f6' : '#2d2d44',
                color: theme === 'light' ? '#1a1a2e' : '#ffffff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            
            <button
              onClick={() => toggleMenu(!menuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              className="mobile-menu-btn"
              style={{
                padding: '0.5rem',
                borderRadius: '0.5rem',
                border: 'none',
                backgroundColor: theme === 'light' ? '#f3f4f6' : '#2d2d44',
                color: theme === 'light' ? '#1a1a2e' : '#ffffff',
                cursor: 'pointer',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease'
              }}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div 
            className="mobile-nav"
            style={{
              borderTop: `1px solid ${theme === 'light' ? '#e5e7eb' : '#2d2d44'}`,
              paddingTop: '1rem',
              paddingBottom: '1rem',
              display: 'none'
            }}
          >
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none', margin: 0, padding: 0 }} role="menubar">
              {navLinks.map(link => (
                <li key={link.id} role="none">
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.id);
                    }}
                    role="menuitem"
                    aria-current={currentPage === link.id ? 'page' : undefined}
                    style={{
                      display: 'block',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      color: currentPage === link.id 
                        ? '#3b82f6' 
                        : theme === 'light' ? '#4b5563' : '#d1d5db',
                      backgroundColor: currentPage === link.id 
                        ? theme === 'light' ? '#eff6ff' : '#1e3a8a20'
                        : 'transparent',
                      fontWeight: currentPage === link.id ? '600' : '500',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
          .mobile-nav {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;