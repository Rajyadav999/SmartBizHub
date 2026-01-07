import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Portfolio from './pages/Portfolio/Portfolio';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import './styles/global.css';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  // Set theme attribute on document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && !e.target.closest('.navbar')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  // Prevent scroll when menu is open on mobile
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  // Render current page
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'services':
        return <Services />;
      case 'portfolio':
        return <Portfolio />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <Router>
      <div className="app" data-theme={theme}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        
        <Header
          theme={theme}
          toggleTheme={toggleTheme}
          menuOpen={menuOpen}
          toggleMenu={setMenuOpen}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

        <main id="main-content" className="main-content">
          {renderPage()}
        </main>

        <Footer setCurrentPage={setCurrentPage} />
      </div>
    </Router>
  );
}

export default App;