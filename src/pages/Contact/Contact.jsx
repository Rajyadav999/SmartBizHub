import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { SITE_EMAIL, SITE_PHONE, SITE_ADDRESS } from '../../utils/constants';
import { validateForm } from '../../utils/helpers';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm(formData);
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <div className="contact-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <h1 className="animate-fade-in-up">Get In Touch</h1>
          <p className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Let's discuss how we can help your business grow
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info animate-fade-in-up">
              <h2>Contact Information</h2>
              <p className="contact-description">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <Phone size={24} />
                  </div>
                  <div className="contact-text">
                    <h4>Phone</h4>
                    <a href={`tel:${SITE_PHONE}`}>{SITE_PHONE}</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <Mail size={24} />
                  </div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="contact-text">
                    <h4>Address</h4>
                    <p>{SITE_ADDRESS}</p>
                  </div>
                </div>
              </div>

              <div className="business-hours">
                <h4>Business Hours</h4>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              {isSubmitted ? (
                <div className="success-message">
                  <CheckCircle size={64} />
                  <h3>Thank You!</h3>
                  <p>Your message has been sent successfully. We'll get back to you soon.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-group">
                    <label htmlFor="name">
                      Full Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={formErrors.name ? 'error' : ''}
                      placeholder="John Doe"
                      aria-required="true"
                      aria-invalid={!!formErrors.name}
                      aria-describedby={formErrors.name ? 'name-error' : undefined}
                    />
                    {formErrors.name && (
                      <span id="name-error" className="error-message" role="alert">
                        {formErrors.name}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      Email Address <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={formErrors.email ? 'error' : ''}
                      placeholder="john@example.com"
                      aria-required="true"
                      aria-invalid={!!formErrors.email}
                      aria-describedby={formErrors.email ? 'email-error' : undefined}
                    />
                    {formErrors.email && (
                      <span id="email-error" className="error-message" role="alert">
                        {formErrors.email}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      className={formErrors.message ? 'error' : ''}
                      placeholder="Tell us about your project..."
                      aria-required="true"
                      aria-invalid={!!formErrors.message}
                      aria-describedby={formErrors.message ? 'message-error' : undefined}
                    />
                    {formErrors.message && (
                      <span id="message-error" className="error-message" role="alert">
                        {formErrors.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <Send size={18} />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="map-section">
        <div className="container">
          <div className="map-placeholder">
            <MapPin size={48} />
            <p>Interactive Map Location</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;