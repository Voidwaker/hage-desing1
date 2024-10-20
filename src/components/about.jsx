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
          <h2>About Me</h2>
          <p>Hello! My name is Berit, and I specialize in garden design and landscape planning.</p>
          <p>I have over 10 years of experience in the field, and I love helping clients bring their dream gardens to life.</p>
        </div>
      </div>
      
      <Projects />
    </section>
  );
};

export default About;


