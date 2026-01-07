import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { SERVICES } from '../../utils/constants';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <h1 className="animate-fade-in-up">Our Services</h1>
          <p className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-content">
        <div className="container">
          <div className="services-grid">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className="service-card animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  <li>
                    <Check size={18} />
                    <span>Professional Quality</span>
                  </li>
                  <li>
                    <Check size={18} />
                    <span>Fast Delivery</span>
                  </li>
                  <li>
                    <Check size={18} />
                    <span>Ongoing Support</span>
                  </li>
                </ul>
                <button className="btn-link">
                  Learn More <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>Discovery</h3>
              <p>We understand your business goals, challenges, and requirements</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>Planning</h3>
              <p>We create a detailed roadmap and strategy for your project</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Development</h3>
              <p>Our team builds your solution with the latest technologies</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h3>Launch</h3>
              <p>We deploy your project and provide ongoing support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;