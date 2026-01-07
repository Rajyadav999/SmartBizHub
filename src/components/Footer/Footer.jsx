import React from 'react';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { SITE_NAME, SITE_EMAIL, SITE_PHONE, SITE_ADDRESS } from '../../utils/constants';
import './Footer.css';

const Footer = ({ setCurrentPage }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
    scrollToTop();
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">⚡</span>
              <span className="logo-text">{SITE_NAME}</span>
            </div>
            <p className="footer-description">
              Building the future of digital business with innovative solutions and cutting-edge technology.
            </p>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn" className="social-link">LinkedIn</a>
              <a href="#" aria-label="Twitter" className="social-link">Twitter</a>
              <a href="#" aria-label="GitHub" className="social-link">GitHub</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); handleNavigation('home'); }}>Home</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNavigation('services'); }}>Services</a></li>
              <li><a href="#portfolio" onClick={(e) => { e.preventDefault(); handleNavigation('portfolio'); }}>Portfolio</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNavigation('about'); }}>About Us</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">Mobile Apps</a></li>
              <li><a href="#services">Cloud Solutions</a></li>
              <li><a href="#services">UI/UX Design</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={18} />
                <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
              </div>
              <div className="contact-item">
                <Phone size={18} />
                <a href={`tel:${SITE_PHONE}`}>{SITE_PHONE}</a>
              </div>
              <div className="contact-item">
                <MapPin size={18} />
                <span>{SITE_ADDRESS}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} {SITE_NAME}. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="scroll-to-top"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;