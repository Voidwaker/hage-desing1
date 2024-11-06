import React from 'react';
import './about.css';
import Projects from './projects.jsx';  
import profilePlaceholder from './images/profilePlaceholder.webp';

const About = () => {
  return (
    <section className="about-container">
      <div className="about-card">
        <img
          src={profilePlaceholder}
          alt="Profile"
          className="profile-img"
        />
        <div className="about-text">
          <h2>Om Meg</h2>
          <p>Hei! Jeg spesialiserer meg på hagedesign og landskapsplanlegging</p>
          <p>Med lang erfaring innen hagedesign elsker jeg å hjelpe kunder med å realisere drømmehagene sine.</p>
        </div>
      </div>
      
      <Projects />
    </section>
  );
};

export default About;


