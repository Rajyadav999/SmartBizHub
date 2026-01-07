import React from 'react';
import { ArrowRight, Check, Star } from 'lucide-react';
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import { TESTIMONIALS } from '../../utils/constants';
import './Home.css';

const Home = ({ setCurrentPage }) => {
  const features = [
    { icon: '⚡', title: 'Lightning Fast', description: 'Optimized performance for the best user experience' },
    { icon: '🎯', title: 'Goal-Oriented', description: 'Solutions designed to achieve your business objectives' },
    { icon: '🔒', title: 'Secure & Reliable', description: 'Enterprise-grade security and 99.9% uptime' },
    { icon: '📈', title: 'Scalable', description: 'Grow without limits with our flexible architecture' }
  ];

  const stats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '200+', label: 'Happy Clients' },
    { value: '50+', label: 'Team Members' },
    { value: '99%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title animate-fade-in-up">
              Transform Your Business with Smart Digital Solutions
            </h1>
            <p className="hero-subtitle animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              We build cutting-edge web and mobile applications that drive growth and innovation
            </p>
            <div className="hero-buttons animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <button className="btn btn-primary" onClick={() => setCurrentPage('contact')}>
                Get Started <ArrowRight size={20} />
              </button>
              <button className="btn btn-secondary" onClick={() => setCurrentPage('portfolio')}>
                View Our Work
              </button>
            </div>
          </div>
          
          <div className="hero-decoration">
            <div className="float-card card-1">💡</div>
            <div className="float-card card-2">🚀</div>
            <div className="float-card card-3">⚡</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose SmartBizHub?</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="testimonials-grid">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's discuss how we can help you achieve your digital goals</p>
            <button className="btn btn-primary" onClick={() => setCurrentPage('contact')}>
              Contact Us Today <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;