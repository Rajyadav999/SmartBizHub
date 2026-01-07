import React from 'react';
import { TEAM_MEMBERS } from '../../utils/constants';
import './About.css';

const About = () => {
  const stats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '200+', label: 'Happy Clients' },
    { value: '50+', label: 'Team Members' },
    { value: '99%', label: 'Client Satisfaction' }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We strive for excellence in every project we undertake'
    },
    {
      icon: '🤝',
      title: 'Integrity',
      description: 'We build trust through transparency and honest communication'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'We embrace new technologies and creative solutions'
    },
    {
      icon: '🚀',
      title: 'Growth',
      description: 'We help our clients and team members grow continuously'
    }
  ];

  return (
    <div className="about-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <h1 className="animate-fade-in-up">About SmartBizHub</h1>
          <p className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Building the future of digital business, one solution at a time
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text animate-fade-in-up">
              <h2>Our Story</h2>
              <p>
                Founded in 2020, SmartBizHub has grown from a small startup to a leading digital solutions provider. 
                We are passionate about helping businesses transform digitally and achieve their full potential.
              </p>
              <p>
                Our team of experienced developers, designers, and strategists work together to deliver exceptional 
                results that exceed expectations. We believe in the power of technology to drive positive change and 
                create meaningful impact.
              </p>
              <p>
                Today, we serve clients across various industries, from startups to enterprise companies, helping 
                them navigate the digital landscape and achieve sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-card animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div
                key={index}
                className="value-card animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="team-intro">
            Talented professionals dedicated to delivering exceptional results
          </p>
          <div className="team-grid">
            {TEAM_MEMBERS.map((member, index) => (
              <div
                key={index}
                className="team-card animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="team-avatar">{member.avatar}</div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              To empower businesses with innovative digital solutions that drive growth, 
              efficiency, and success in an ever-evolving digital landscape.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;